from pathlib import Path
p=Path('exercises.js');s=p.read_text();at=s.index('export const exerciseItems=')
s=s[:at]+'''const screenshotGaps=[
 ['Ja ___ študent.','som','Ja → som.'],['Ty ___ veľmi milý.','si','Ty → si.'],['On ___ doma.','je','On → je.'],['My ___ z Bratislavy.','sme','My → sme.'],['Vy ___ unavení?','ste','Vy → ste, в том числе в вопросе.'],['Oni ___ v škole.','sú','Oni → sú. Не забывайте долгую ú.'],['Jana ___ moja sestra.','je','Jana — она: ona je.'],['Peter a ja ___ kamaráti.','sme','Peter a ja — мы: my sme.'],['To ___ dobrý nápad.','je','To → je.'],['Vy ___ pán učiteľ?','ste','Вежливое обращение к одному человеку: vy ste.']
].map(([prompt,answer,explanation])=>({sk:prompt.replace('___',answer),ru:'Вставьте форму byť',prompt,answers:[answer],explanation,exercise:'gap',type:'grammar',lessonId:'byt',lessonTitle:'Byť: предложения',context:'Введите только пропущенную форму глагола.'}));
const pronounGroups=[['Johana, Carlo, Zuzana, Róbert','oni'],['Carlo, Zuzana','oni'],['Johana, Zuzana','ony'],['Carlo, Róbert','oni'],['Jana, Anna','ony'],['Peter, Jana','oni'],['deti','ony'],['knihy','ony'],['muži','oni'],['ženy','ony']].map(([group,answer])=>({sk:`${group} → ${answer}`,ru:'Выберите местоимение',prompt:group,answers:[answer],exercise:'pronoun',type:'grammar',lessonId:'pronouns',lessonTitle:'Oni / ony',context:'Введите oni или ony.',explanation:answer==='oni'?'Oni: мужчины или группа людей, в которой есть мужчина.':'Ony: женщины; также deti (дети) и неодушевлённые предметы.'}));
''' +s[at:]
s=s.replace('export const exerciseItems=[...gaps,...scenes];','export const exerciseItems=[...screenshotGaps,...gaps.filter(i=>i.ru.startsWith(\'Отрицание\')),...pronounGroups,...scenes];')
s=s.replace("context:i.exercise==='gap'?i.context:i.scene,answers:answersFor(i),title:i.exercise==='gap'?'Вставьте форму byť / nebyť':'Ответьте по ситуации'", "context:i.exercise==='situation'?i.scene:i.context,answers:answersFor(i),title:i.exercise==='gap'?'Вставьте форму byť / nebyť':i.exercise==='pronoun'?'Дополните: oni / ony':'Ответьте по ситуации'")
s=s.replace('18 пропусков: som, si, je, sme, ste, sú и отрицания с nie.','10 предложений из урока и 9 заданий на отрицание с nie.')
s=s.replace('<button data-train="situation"', '<button data-train="pronouns" class="training-tile"><b>👥 Oni / ony</b><span>Группы людей, дети и предметы: впишите нужное местоимение.</span></button><button data-train="situation"')
s=s.replace("${s.ok?'Правильно!':", "${s.ok?'Правильно!':")
s=s.replace("}</div>`:''}</section>", "}${i.explanation?`<br>${esc(i.explanation)}`:''}</div>`:''}</section>")
p.write_text(s)
p=Path('app.js');s=p.read_text();s=s.replace("if(mode==='situation')items=", "if(mode==='pronouns')items=exerciseItems.filter(i=>i.exercise==='pronoun');if(mode==='situation')items=")
# Lesson practice routes also expose the exercises requested in the lesson itself.
s=s.replace("start(x.items,'lesson',x.id)", "start(x.id==='byt'?exerciseItems.filter(i=>i.lessonId==='byt'):x.id==='pronouns'?[...x.items,...exerciseItems.filter(i=>i.exercise==='pronoun')]:x.items,'lesson',x.id)")
s=s.replace("const all=", "const all=")
# Keep exercise-only sentences from cluttering the dictionary; their progress remains scheduled.
s=s.replace("items=unique().filter(i=>filter", "items=unique().filter(i=>!i.exercise).filter(i=>filter")
s=s.replace("function render(){header();", "function render(){header();")
s=s.replace("?practice():dictionary()}", "?practice():dictionary();if(session&&!session.answered)$('#writtenAnswer')?.focus()}")
p.write_text(s)
