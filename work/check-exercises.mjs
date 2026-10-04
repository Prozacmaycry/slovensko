import assert from 'node:assert/strict';
import {exerciseItems,makeQuestion,normalizeAnswer,slovakVoice,questionHTML} from '../exercises.js';
import {lessons} from '../data.js';
assert.equal(normalizeAnswer('  DOBRÝ   DEŇ! '),normalizeAnswer('Dobrý deň.'));
assert.notEqual(normalizeAnswer('Dobry den'),normalizeAnswer('Dobrý deň'));
assert.equal(exerciseItems.filter(i=>i.exercise==='gap').length,19);
assert.equal(exerciseItems.filter(i=>i.exercise==='pronoun').length,10);
assert.equal(exerciseItems.filter(i=>i.exercise==='situation').length,10);
for(const i of exerciseItems){const q=makeQuestion(i,'mixed',0,[]);assert.ok(q.answers.length);assert.ok(q.prompt);assert.equal(q.mode,'write');assert.ok(questionHTML({items:[i],index:0,question:q,answered:true,ok:false,selected:'wrong'},String).includes(q.answers[0]));}
const byt=lessons.find(l=>l.id==='byt').items;assert.deepEqual(makeQuestion(byt[2],'write',0,[]).answers,['on je','ona je','ono je']);
const hello=lessons[0].items[0];assert.deepEqual(makeQuestion(hello,'write',0,[]).answers,['Ahoj!','Čau!']);
globalThis.window={speechSynthesis:{getVoices:()=>[{lang:'en-US'}]}};assert.equal(slovakVoice(),null);
window.speechSynthesis.getVoices=()=>[{lang:'en-US'},{lang:'sk-SK',name:'Slovak'}];assert.equal(slovakVoice().name,'Slovak');
console.log('Answer rules, 39 exercises, grammar alternatives, feedback and Slovak-only voice selection passed.');
