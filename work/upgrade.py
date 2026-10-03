from pathlib import Path
p=Path('data.js');s=p.read_text().replace("['Maj sa dobre.','Всего хорошего.'", "['Maj sa dobre.','Береги себя. / Всего хорошего.'")
p.write_text(s)
p=Path('app.js');s=p.read_text();s=s.replace("import{lessons,emptyState,freshProfiles}from'./data.js';", "import{lessons,emptyState,freshProfiles}from'./data.js';\nimport {exerciseItems, makeQuestion, normalizeAnswer, trainingMenu, questionHTML, slovakVoice} from './exercises.js';")
s=s.replace("...lessons.flatMap(l=>l.items),", "...lessons.flatMap(l=>l.items),...exerciseItems,")
a=s.index('function start(');b=s.index('function vocabItem',a)
s=s[:a]+'''function start(items,kind='lesson',lessonId=null,mode='mixed',limit=null){
 if(!items.length){toast('Пока нет карточек для повторения.');return}
 const shuffled=[...items];for(let j=shuffled.length-1;j>0;j--){const k=Math.floor(Math.random()*(j+1));[shuffled[j],shuffled[k]]=[shuffled[k],shuffled[j]]}
 session={items:limit?shuffled.slice(0,limit):shuffled,index:0,answered:false,correct:0,xp:0,kind,lessonId,mode};view='practice';opened=null;render();scrollTo(0,0);
}
function practice(){
 if(!session)return trainingMenu(lessons,due().length);
 if(session.index>=session.items.length)return `<div class="practice-shell"><section class="empty-state"><div class="empty-state-icon">🎉</div><h3>Тренировка завершена</h3><p>Правильных ответов: ${session.correct} из ${session.items.length}. Заработано ${session.xp} XP. Ошибки сохранены для повторения.</p><button class="primary-button" data-action="done">Готово →</button></section></div>`;
 const i=session.items[session.index];if(!session.question)session.question=makeQuestion(i,session.mode,session.index,unique());
 return questionHTML(session,esc);
}
''' +s[b:]
s=s.replace("const i=session.items[session.index],ok=i.sk===answer,c=", "const i=session.items[session.index],q=session.question,ok=q.mode==='choice'?i.sk===answer:q.answers.some(x=>normalizeAnswer(x)===normalizeAnswer(answer)),c=")
s=s.replace("state().answers.push({sk:i.sk,correct:ok,date:dateKey()})", "state().answers.push({sk:i.sk,correct:ok,date:dateKey(),answer,mode:q.mode})")
s=s.replace('aria-label="Озвучить">◖))</button>', 'aria-label="Озвучить по-словацки" ${slovakVoice()?\'\':\'hidden\'}>◖))</button>')
a=s.index("if(window.speechSynthesis){");b=s.index("return}const a=e.target.closest('[data-answer]')",a)
s=s[:a]+"const voice=slovakVoice();if(voice){const u=new SpeechSynthesisUtterance(speech.dataset.speak);u.voice=voice;u.lang=voice.lang;u.rate=.85;speechSynthesis.cancel();speechSynthesis.speak(u)}else toast('Словацкий голос недоступен на этом устройстве.');"+s[b:]
s=s.replace("case'next':session.index++;", "case'next':session.index++;if(session.index===session.items.length&&session.lessonId){state().learnedLessons[session.lessonId]=true;save()}")
s=s.replace("document.addEventListener('click',e=>{", """document.addEventListener('click',e=>{
 const train=e.target.closest('[data-train]');if(train){const mode=train.dataset.train,topic=$('#practiceTopic')?.value||'all';let items=topic==='all'?unique().filter(i=>!i.exercise):lessons.find(l=>l.id===topic).items;if(mode==='grammar')items=exerciseItems.filter(i=>i.exercise==='gap');if(mode==='situation')items=exerciseItems.filter(i=>i.exercise==='situation');start(items,'training',null,mode,mode==='grammar'?null:10);return}
 const char=e.target.closest('[data-char]');if(char){const input=$('#writtenAnswer');if(input&&!input.disabled){const a=input.selectionStart,b=input.selectionEnd;input.setRangeText(char.dataset.char,a,b,'end');input.focus()}return}
""")
s=s.replace("document.addEventListener('submit',e=>{", "document.addEventListener('submit',e=>{if(e.target.id==='answerForm'){e.preventDefault();const value=$('#writtenAnswer').value.trim();if(value)reply(value);return}")
s=s.replace("if(view==='practice'&&session&&!session.answered&&/^[1-4]$/.test(e.key))", "if(e.target.matches('input,textarea,select'))return;if(view==='practice'&&session&&!session.answered&&/^[1-4]$/.test(e.key))")
s=s.replace("window.addEventListener('hashchange'", "if(window.speechSynthesis)speechSynthesis.addEventListener('voiceschanged',()=>{document.querySelectorAll('[data-speak]').forEach(b=>b.hidden=!slovakVoice())});window.addEventListener('hashchange'")
s=s.replace("$('#dictionarySearch')?.setSelectionRange(pos,pos)", "")
p.write_text(s)
