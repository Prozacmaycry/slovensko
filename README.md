# Slovak study

A private Slovak-learning app for two learners. No packages, account or server required.

**Run:** open `index.html` in a modern browser. Progress saves separately for each profile in that browser's local storage.

The app includes ten editable lessons in `data.js`, a searchable dictionary, custom word entry, favorites, answer history, and spaced repetition. Correct answers increase intervals (1, 3, 7, 14, 30, and 60 days); a mistake schedules the card for tomorrow. Each learner has a separate profile, schedule and statistics.

This MVP stores data on one device and in one browser. Clearing that browser's site data erases saved progress. Browsers may restrict storage for pages opened directly from a file. If progress does not persist, run `npm start` in this directory and open `http://127.0.0.1:4173` (requires Node.js 18+).


## Практика (обновление)

В разделе «Практика» выберите тему и формат: «Написать 10 слов», смешанные 10 заданий, «Byť / nebyť», «Oni / ony» или 10 жизненных ситуаций. Если в выбранном уроке меньше десяти карточек, используются все доступные. Учебный материал из скриншотов и правила проверки вынесены в `exercises.js`.

Диакритика проверяется строго; регистр, повторные пробелы и конечная пунктуация игнорируются. Для вариантов с косой чертой достаточно одного ответа. Под полем есть словацкая клавиатура. Ошибки сохраняются вместе с введённым ответом и типом упражнения в текущем профиле.

Озвучка видна только при наличии голоса с языком `sk` или `sk-SK`. Английский голос не используется как запасной вариант.
