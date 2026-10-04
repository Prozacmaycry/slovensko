import vm from 'node:vm';import fs from 'node:fs';import assert from 'node:assert/strict';import * as data from '../data.js';import * as exercises from '../exercises.js';
const nodes=new Map(),stored=new Map();const node=s=>{if(!nodes.has(s))nodes.set(s,{innerHTML:'',textContent:'',value:'',focus(){},classList:{toggle(){},add(){},remove(){}}});return nodes.get(s)};
const context=vm.createContext({...data,...exercises,console,Intl,Date,Math,Set,Map,localStorage:{getItem:k=>stored.get(k),setItem:(k,v)=>stored.set(k,v)},location:{hash:''},history:{replaceState(){}},window:{addEventListener(){}},document:{querySelector:node,querySelectorAll:()=>[],addEventListener(){}},scrollTo(){},setTimeout,clearTimeout});
const source=fs.readFileSync('app.js','utf8').replace(/^import .*?;\n/gm,'').replace(/^import\{.*?;\n/gm,'');vm.runInContext(source,context);
vm.runInContext("start(lessons[0].items,'training',null,'write',10)",context);assert.equal(vm.runInContext('session.items.length',context),10);
vm.runInContext("reply(session.question.answers[0])",context);assert.equal(vm.runInContext('session.ok',context),true);assert.equal(vm.runInContext('state().stats.xp',context),10);
vm.runInContext("db.profileId='learner2'",context);assert.equal(vm.runInContext('state().stats.xp',context),0);
vm.runInContext("start(exerciseItems.filter(i=>i.exercise==='gap'),'training',null,'grammar');reply('WRONG')",context);assert.equal(vm.runInContext('session.ok',context),false);assert.equal(vm.runInContext('state().answers[0].answer',context),'WRONG');assert.ok(stored.size);
console.log('10-card writing session, answer scoring, error storage and profile isolation passed.');
