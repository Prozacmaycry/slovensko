from pathlib import Path
p=Path('app.js');s=p.read_text().replace("unique=()=>[...new Map(all().map(i=>[i.sk.toLowerCase(),i])).values()]", "unique=()=>[...new Map([...all()].reverse().map(i=>[i.sk.toLowerCase(),i])).values()]")
# Stop a voice on learner changes and navigation.
s=s.replace("function navigate(v){view=v;", "function navigate(v){window.speechSynthesis?.cancel();view=v;")
s=s.replace("db.profileId=e.target.value;", "window.speechSynthesis?.cancel();db.profileId=e.target.value;")
p.write_text(s)
p=Path('README.md');s=p.read_text();s+='''

## Практика (обновление)

В разделе «Практика» выберите тему и формат: «Написать 10 слов», смешанные 10 заданий, «Byť / nebyť», «Oni / ony» или 10 жизненных ситуаций. Если в выбранном уроке меньше десяти карточек, используются все доступные. Учебный материал из скриншотов и правила проверки вынесены в `exercises.js`.

Диакритика проверяется строго; регистр, повторные пробелы и конечная пунктуация игнорируются. Для вариантов с косой чертой достаточно одного ответа. Под полем есть словацкая клавиатура. Ошибки сохраняются вместе с введённым ответом и типом упражнения в текущем профиле.

Озвучка видна только при наличии голоса с языком `sk` или `sk-SK`. Английский голос не используется как запасной вариант.
''';p.write_text(s)
