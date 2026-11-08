// Lesson data is fetched at runtime; content updates do not rebuild the app.
let config={backend:'local'}, token=sessionStorage.getItem('slovicko-editor-token'), revision=0,editorVerified=false;
export let packages=[];
export let contentStatus='loading';
export const canEdit=()=>config.backend==='local'||editorVerified;
export const cloudEnabled=()=>config.backend==='supabase';
const statuses=new Set(['draft','published','archived']);
const types=new Set(['translation','gap','gender','choice','situation']);
const id=()=>crypto.randomUUID();
export function validatePackage(raw){
 const p=structuredClone(raw);
 if(!p||p.schemaVersion!==1||typeof p.id!=='string'||!p.id.trim())throw Error('Нужен пакет урока версии 1 с постоянным id.');
 if(['hello','people','pronouns','byt','ukazovacie','family','countries','everyday','verbs','adjectives'].includes(p.id))throw Error('Этот id занят базовым уроком.');
 if(typeof p.title!=='string'||!p.title.trim())throw Error('Введите название урока.');
 if(!statuses.has(p.status))throw Error('Статус урока: draft, published или archived.');
 for(const key of ['words','rules','exercises'])if(!Array.isArray(p[key]))throw Error(`В пакете отсутствует список ${key}.`);
 const ids=new Set();
 const claim=(x)=>{if(!x.id||typeof x.id!=='string'||ids.has(x.id))throw Error('У каждой карточки должен быть уникальный постоянный id.');ids.add(x.id)};
 for(const w of p.words){claim(w);if(typeof w.sk!=='string'||typeof w.ru!=='string'||!w.sk.trim()||!w.ru.trim())throw Error('У слова нужны словацкий текст и перевод.');if(w.audio&&(!/^data:audio\/(wav|x-wav|mpeg|mp4);base64,[A-Za-z0-9+/=]+$/.test(w.audio)||w.audio.length>550000))throw Error('Неподдерживаемая запись слова.');if(!['word','phrase','grammar'].includes(w.type))throw Error('Неизвестный тип слова.');}
 for(const r of p.rules){claim(r);if(typeof r.title!=='string'||typeof r.text!=='string'||!r.title.trim()||!r.text.trim())throw Error('У правила нужны название и объяснение.');}
 for(const e of p.exercises){claim(e);if(!types.has(e.type)||(typeof e.prompt!=='string'||!e.prompt.trim())||!Array.isArray(e.answers)||!e.answers.length||e.answers.some(a=>typeof a!=='string'||!a.trim()))throw Error('У задания нужны тип, условие и правильные ответы.');if(['gender','choice'].includes(e.type)&&(!Array.isArray(e.options)||!e.options.length||e.answers.some(a=>!e.options.includes(a))))throw Error('Правильный ответ должен быть среди вариантов.');}
 if(!p.words.length&&!p.rules.length&&!p.exercises.length)throw Error('Урок пока пустой.');
 p.title=p.title.trim();p.description=p.description||'';return p;
}
async function request(path,options={}){const r=await fetch(path,{cache:"no-cache",...options});if(!r.ok){if(r.status===401){token=null;editorVerified=false;sessionStorage.removeItem('slovicko-editor-token')}const msg=await r.json().catch(()=>({}));throw Error(msg.message||msg.error_description||'Не удалось сохранить. Проверьте подключение.');}return r.status===204?null:r.json()}
const headers=()=>({'Content-Type':'application/json',apikey:config.publishableKey,Authorization:`Bearer ${token||config.publishableKey}`});
export async function loadContent(){
 try{config=await request('settings.json');if(location.hostname.endsWith('github.io'))config={backend:'static'};if(config.backend==='supabase'){
  editorVerified=false;if(token){const editors=await request(`${config.supabaseUrl}/rest/v1/course_editors?select=user_id`,{headers:headers()});editorVerified=editors.length>0;}
  const rows=await request(`${config.supabaseUrl}/rest/v1/lesson_packages?select=payload`,{headers:headers()});packages=rows.map(r=>validatePackage(r.payload));
 }else{const data=await request(config.backend==='static'?'content/catalog.json':'api/content');revision=data.revision;packages=data.packages.map(validatePackage);}
 contentStatus='ready';return packages;
 }catch(e){contentStatus='error';throw e}
}
export async function savePackages(raw){const values=raw.map(validatePackage);if(new Set(values.map(p=>p.id)).size!==values.length)throw Error('Пакет содержит повторяющиеся id уроков.');if(config.backend==='static')throw Error('Импорт доступен на локальном сервере. GitHub Pages показывает опубликованные материалы.');if(!canEdit())throw Error('Сначала войдите как редактор.');for(const p of values)p.updatedAt=new Date().toISOString();
 if(config.backend==='supabase')await request(`${config.supabaseUrl}/rest/v1/lesson_packages?on_conflict=id`,{method:'POST',headers:{...headers(),Prefer:'resolution=merge-duplicates'},body:JSON.stringify(values.map(p=>({id:p.id,status:p.status,payload:p})))});
 else {const data=await request('api/content',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({revision,packages:values})});revision=data.revision;}
 await loadContent();return values;
}
export async function savePackage(raw){return (await savePackages([raw]))[0]}
export async function signIn(email,password){if(!cloudEnabled())return;const data=await request(`${config.supabaseUrl}/auth/v1/token?grant_type=password`,{method:'POST',headers:headers(),body:JSON.stringify({email,password})});token=data.access_token;sessionStorage.setItem('slovicko-editor-token',token);await loadContent();if(!editorVerified)throw Error('У этого аккаунта нет права изменять курс.');}
export async function signOut(){token=null;editorVerified=false;sessionStorage.removeItem('slovicko-editor-token');await loadContent()}
export function newPackage(){return {schemaVersion:1,id:id(),title:'',description:'',status:'draft',words:[],rules:[],exercises:[]}}
export const newId=id;
export function runtimeLessons(){return packages.filter(p=>p.status==='published').map(p=>({id:p.id,title:p.title,description:p.description,emoji:'',rules:p.rules,customLesson:true,items:[...p.words.map(w=>({...w,lessonId:p.id,lessonTitle:p.title})),...p.exercises.map(e=>({...e,sk:e.prompt,ru:e.prompt,type:'grammar',exercise:e.type,prompt:e.prompt,lessonId:p.id,lessonTitle:p.title}))]}));}
