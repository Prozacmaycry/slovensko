const parse=s=>s.trim().split('\n').map(line=>line.split('|'));
const wordExamples={
personal:parse(`Ako sa voláš? Volám sa Nina.\nMoje priezvisko je Nováková.\nKoľko máš rokov?\nAká je tvoja adresa?\nMôj telefón je nový.\nNapíš telefónne číslo, prosím.\nMôj email je krátky.\nSlovensko je krásna krajina.\nUčím sa slovenský jazyk.\nMoje bydlisko je v Bratislave.`).map(x=>x[0]),
family:parse(`Moja rodina býva v meste.\nMôj otec pracuje.\nMoja matka rada číta.\nMoji rodičia bývajú doma.\nMôj brat študuje.\nMoja sestra má psa.\nIch syn chodí do školy.\nJej dcéra má päť rokov.\nJej manžel je učiteľ.\nMôj brat a jeho manželka bývajú tu.`).map(x=>x[0]),
places:parse(`Toto je Slovensko.\nToto je Česko.\nToto je Poľsko.\nToto je Maďarsko.\nToto je Rusko.\nToto je Francúzsko.\nToto je Taliansko.\nToto je Nemecko.\nToto je Španielsko.\nToto je Ukrajina.`).map(x=>x[0]),
jobs:parse(`Moja práca je zaujímavá.\nLekár pracuje v nemocnici.\nUčiteľ hovorí po slovensky.\nSom študent.\nPredavač pracuje v obchode.\nČašník prináša kávu.\nVodič čaká na stanici.\nMôj manažér je milý.\nKolega pracuje v kancelárii.\nPracujem v malej firme.`).map(x=>x[0]),
study:parse(`Škola je blízko domu.\nUniverzita je v centre.\nNaša trieda je veľká.\nUčebňa je na druhom poschodí.\nMám novú učebnicu.\nPíšem do zošita.\nPero je na stole.\nCeruzka je krátka.\nMám jednu otázku.\nJeho odpoveď je správna.`).map(x=>x[0]),
food:parse(`Prosím si čerstvý chlieb.\nMaslo je v chladničke.\nNa raňajky mám vajce.\nPijem teplé mlieko.\nProsím si pohár vody.\nRáno pijem kávu.\nDáte si čaj?\nPolievka je dobrá.\nNa obed máme ryžu.\nJablko je čerstvé.`).map(x=>x[0]),
shopping:parse(`Obchod je otvorený.\nTáto predajňa je blízko.\nAká je cena?\nMám pri sebe peniaze.\nPokladňa je vpredu.\nPotrebujem malú tašku.\nMáte túto veľkosť?\nTento chlieb je lacný.\nTen kabát je drahý.\nProsím si účtenku.`).map(x=>x[0]),
home:parse(`Náš dom je nový.\nBývam v byte.\nMoja izba je svetlá.\nKuchyňa je vedľa izby.\nKúpeľňa je hore.\nObývačka je veľká.\nKniha je na stole.\nStolička je pri stole.\nPosteľ je v izbe.\nKľúč je v taške.`).map(x=>x[0]),
city:parse(`Bývam v meste.\nNaša ulica je dlhá.\nStretneme sa na námestí.\nStanica je blízko.\nAutobus ide do centra.\nVlak odchádza o šiestej.\nIdem električkou do práce.\nMám cestovný lístok.\nObchod je v centre.\nZastávka je pred školou.`).map(x=>x[0]),
calendar:parse(`Koľko je hodín?\nČakám jednu hodinu.\nDnes je pekný deň.\nPracujem päť dní v týždni.\nMarec je jarný mesiac.\nV pondelok pracujem.\nV piatok idem domov.\nCez víkend oddychujem.\nAký je dnes dátum?\nDátum je v kalendári.`).map(x=>x[0]),
weather:parse(`Aké je dnes počasie?\nNa jar je teplejšie.\nV lete cestujem.\nNa jeseň často prší.\nV zime je chladno.\nDnes svieti slnko.\nVonku prší.\nV zime padá sneh.\nV izbe je teplo.\nRáno je chladno.`).map(x=>x[0]),
hobbies:parse(`Rád počúvam hudbu.\nMám rád šport.\nV sobotu hráme futbal.\nČítam zaujímavú knihu.\nVečer pozerám film.\nMoja sestra má rada tanec.\nIdeme na prechádzku.\nV lete chodím plávať.\nTáto fotografia je pekná.\nMoja záľuba je hudba.`).map(x=>x[0]),
travel:parse(`Cesta vlakom trvá dve hodiny.\nV júli mám dovolenku.\nHotel je v centre.\nMáme rezervovanú izbu.\nMapa je v telefóne.\nLetisko je ďaleko.\nLietadlo letí do Ríma.\nPas mám v taške.\nMám rezerváciu na meno Novák.\nPláž je blízko hotela.`).map(x=>x[0]),
health:parse(`Zdravie je dôležité.\nPotrebujem lekára.\nLekáreň je pri stanici.\nNemocnica je blízko.\nBolí ma hlava.\nBolí ma brucho.\nMám vysokú teplotu.\nLieky sú na stole.\nDnes som unavený.\nJe chorý a zostáva doma.`).map(x=>x[0]),
daily:parse(`Vstávam o siedmej.\nRaňajkujem doma.\nPracujem od pondelka do piatka.\nŠtudujem slovenský jazyk.\nVečer čítam knihu.\nMama varí obed.\nV sobotu nakupujem.\nČakám na autobus.\nRozumiem otázke.\nV noci dobre spím.`).map(x=>x[0])
};
export const vocabTopics=[
['personal','Знакомство и личная информация',parse(`meno|имя\npriezvisko|фамилия\nvek|возраст\nadresa|адрес\ntelefón|телефон\nčíslo|номер\nemail|электронная почта\nkrajina|страна\njazyk|язык\nbydlisko|место жительства`)],
['family','Семья и отношения',parse(`rodina|семья\notec|отец\nmatka|мать\nrodičia|родители\nbrat|брат\nsestra|сестра\nsyn|сын\ndcéra|дочь\nmanžel|муж\nmanželka|жена`)],
['places','Страны, города и национальности',parse(`Slovensko|Словакия\nČesko|Чехия\nPoľsko|Польша\nMaďarsko|Венгрия\nRusko|Россия\nFrancúzsko|Франция\nTaliansko|Италия\nNemecko|Германия\nŠpanielsko|Испания\nUkrajina|Украина`)],
['jobs','Профессии и работа',parse(`práca|работа\nlekár|врач\nučiteľ|учитель\nštudent|студент\npredavač|продавец\nčašník|официант\nvodič|водитель\nmanažér|менеджер\nkolega|коллега\nfirma|фирма`)],
['study','Учёба и образование',parse(`škola|школа\nuniverzita|университет\ntrieda|класс\nučebňa|аудитория\nučebnica|учебник\nzošit|тетрадь\npero|ручка\nceruzka|карандаш\notázka|вопрос\nodpoveď|ответ`)],
['food','Еда и напитки',parse(`chlieb|хлеб\nmaslo|масло\nvajce|яйцо\nmlieko|молоко\nvoda|вода\nkáva|кофе\nčaj|чай\npolievka|суп\nryža|рис\njablko|яблоко`)],
['shopping','Магазин и покупки',parse(`obchod|магазин\npredajňa|торговая точка\ncena|цена\npeniaze|деньги\npokladňa|касса\ntaška|сумка; пакет\nveľkosť|размер\nlacný|дешёвый\ndrahý|дорогой\núčtenka|чек`)],
['home','Дом и квартира',parse(`dom|дом\nbyt|квартира\nizba|комната\nkuchyňa|кухня\nkúpeľňa|ванная\nobývačka|гостиная\nstôl|стол\nstolička|стул\nposteľ|кровать\nkľúč|ключ`)],
['city','Город и транспорт',parse(`mesto|город\nulica|улица\nnámestie|площадь\nstanica|станция; вокзал\nautobus|автобус\nvlak|поезд\nelektrička|трамвай\nlístok|билет\ncentrum|центр\nzastávka|остановка`)],
['calendar','Время, даты и календарь',parse(`čas|время\nhodina|час\ndeň|день\ntýždeň|неделя\nmesiac|месяц\npondelok|понедельник\npiatok|пятница\nvíkend|выходные\ndátum|дата\nkalendár|календарь`)],
['weather','Погода и времена года',parse(`počasie|погода\njar|весна\nleto|лето\njeseň|осень\nzima|зима\nslnko|солнце\ndážď|дождь\nsneh|снег\nteplo|тепло\nchladno|холодно`)],
['hobbies','Хобби и свободное время',parse(`hudba|музыка\nšport|спорт\nfutbal|футбол\nkniha|книга\nfilm|фильм\ntanec|танец\nprechádzka|прогулка\nplávanie|плавание\nfotografia|фотография\nzáľuba|увлечение`)],
['travel','Путешествия и отдых',parse(`cesta|дорога; поездка\ndovolenka|отпуск\nhotel|отель\nizba|комната\nmapa|карта\nletisko|аэропорт\nlietadlo|самолёт\npas|паспорт\nrezervácia|бронирование\npláž|пляж`)],
['health','Здоровье и самочувствие',parse(`zdravie|здоровье\nlekár|врач\nlekáreň|аптека\nnemocnica|больница\nhlava|голова\nbrucho|живот\nteplota|температура\nlieky|лекарства\nunavený|уставший\nchorý|больной`)],
['daily','Повседневные действия',parse(`vstávať|вставать\nraňajkovať|завтракать\npracovať|работать\nštudovať|учиться\nčítať|читать\nvariť|готовить\nnakupovať|покупать\nčakať|ждать\nrozumieť|понимать\nspať|спать`)]
].map(([id,title,items])=>({id,title,items:items.map(([sk,ru],i)=>({sk,ru,example:wordExamples[id][i]}))}));

const gt=(id,title,explanation,forms,example,q,answer,options,hint)=>({id,title,explanation,forms,example,q,answer,options,hint});
export const grammarTopics=[
gt('pronouns','Личные местоимения','Часто местоимение опускают: окончание глагола уже показывает лицо. Oni — группа с мужчинами; ony — группа женщин и неодушевлённые предметы.',['ja — я · ty — ты · on — он · ona — она · ono — оно','my — мы · vy — вы · oni / ony — они'],'My sme študenti. — Мы студенты.','Jana a Zuzana — oni alebo ony?','ony',['oni','ony'],'В группе только женщины: ony.'),
gt('byt','Глагол byť — «быть»','Запомни формы настоящего времени. В русском связка настоящего времени обычно не произносится.',['ja som · ty si · on/ona/ono je','my sme · vy ste · oni/ony sú'],'Som z Kazachstanu. — Я из Казахстана.','Ja ___ doma.','som',['som','si','je'],'С ja используется som.'),
gt('mat','Глагол mať — «иметь»','mať обозначает владение и входит в выражение возраста.',['ja mám · ty máš · on/ona má','my máme · vy máte · oni/ony majú'],'Mám jednu sestru. — У меня есть сестра.','Ty ___ čas?','máš',['mám','máš','má'],'Для ty: máš.'),
gt('present','Настоящее время','Окончания частых глаголов зависят от лица; учи формы вместе с инфинитивом.',['pracovať: pracujem, pracuješ, pracuje','pracujeme, pracujete, pracujú'],'Pracujem v malej firme. — Я работаю в небольшой фирме.','My ___ po slovensky. (hovoriť)','hovoríme',['hovorím','hovoríte','hovoríme'],'My соответствует окончанию -me.'),
gt('past','Прошедшее время','Форма на -l/-la/-lo согласуется с родом; в 1-м и 2-м лице добавляется byť.',['ja som pracoval / pracovala','ty si pracoval / pracovala · on pracoval · ona pracovala','my sme pracovali · vy ste pracovali · oni pracovali'],'Včera som pracovala doma. — Вчера я работала дома.','Včera Peter ___ doma. (pracovať)','pracoval',['pracoval','pracovala','pracovali'],'Peter — мужское имя.'),
gt('future','Будущее время','Для несовершенного глагола: форма byť в будущем + инфинитив.',['budem · budeš · bude','budeme · budete · budú'],'Zajtra budem študovať. — Завтра я буду учиться.','Zajtra my ___ pracovať.','budeme',['budeme','budú','budem'],'My: budeme.'),
gt('negative','Отрицание','nie ставится перед byť; у многих глаголов отрицательная форма начинается с ne-.',['som → nie som · mám → nemám','robím → nerobím · rozumiem → nerozumiem'],'Nie som doma. — Меня нет дома.','Ja ___ kávu. (piť, отрицание)','nepijem',['nepijem','nie pijem','nepije'],'Отрицательная форма piť: nepijem.'),
gt('questions','Вопросительные слова','Вопросительное слово обычно стоит в начале. Odkiaľ — источник, kam — направление.',['kto — кто · čo — что','kde — где · kam — куда · odkiaľ — откуда','kedy — когда · ako — как · prečo — почему'],'Kde bývaš? — Где ты живёшь?','___ ide autobus? — Куда едет автобус?','Kam',['Kde','Kam','Odkiaľ'],'Направление — kam.'),
gt('gender','Род существительных','Есть мужской, женский и средний род. Окончание помогает, но есть исключения — учи слово в примере.',['ten muž · ten stôl','tá žena · tá izba','to mesto · to srdce'],'Tá izba je veľká. — Эта комната большая.','___ srdce','to',['ten','tá','to'],'srdce среднего рода.'),
gt('plural','Единственное и множественное число','Формы множественного числа зависят от рода и типа основы. Запоминай частые пары.',['muž → muži · žena → ženy','mesto → mestá · dieťa → deti'],'Mám dve knihy. — У меня две книги.','jedna kniha → dve ___','knihy',['kniha','knihy','knihami'],'Здесь нужна форма knihy.'),
gt('adjectives','Прилагательные и согласование','Прилагательное согласуется с существительным по роду и числу.',['pekný dom · pekná izba · pekné mesto','pekní ľudia · pekné domy'],'Máme peknú izbu. — У нас красивая комната.','___ dom (nový)','nový',['nová','nový','nové'],'dom — мужского рода.'),
gt('possessives','Притяжательные местоимения','môj, tvoj, náš и другие согласуются с существительным по роду и числу.',['môj brat · moja sestra · moje mesto','tvoj · jeho · jej · náš · váš'],'Toto je moja rodina. — Это моя семья.','___ sestra (мой)','moja',['môj','moja','moje'],'sestra — женского рода.'),
gt('prepositions','Предлоги v, na, do, z, s, k','Предлог выбирают по смыслу и готовой модели; запоминай сочетания целиком.',['v meste · na stanici','do školy · z domu','s kolegom · k lekárovi'],'Idem do školy. — Я иду в школу.','Som ___ Slovenska. — Я из Словакии.','zo',['z','zo','do'],'Перед Slovenska обычно zo.'),
gt('cases','Падежи на уровне A1','Падеж отвечает за роль слова. Начни с готовых форм: именительный, винительный после mám/vidím и местный после v/na о месте.',['N: žena · A: vidím ženu','N: mesto · L: v meste','N: stanica · L: na stanici'],'Bývam v Bratislave. — Я живу в Братиславе.','Mám (kniha) → Mám ___.','knihu',['kniha','knihu','knihe'],'После mám здесь винительный: knihu.'),
gt('conjugation','Спряжение частых глаголов','Сопоставляй форму с лицом и запоминай частые модели целиком.',['robiť: robím, robíš, robí','rozumieť: rozumiem, rozumieš, rozumie'],'Oni rozumejú po slovensky. — Они понимают по-словацки.','Vy ___ knihu. (čítať)','čítate',['čítam','čítate','čítajú'],'Vy: čítate.'),
gt('wordorder','Порядок слов','Нейтральное простое предложение обычно содержит подлежащее, глагол и дополнение. Время можно поставить в начало.',['Ja študujem slovenčinu.','Dnes idem do školy.'],'Dnes idem do školy. — Сегодня я иду в школу.','dnes / pracujem / doma','Dnes pracujem doma.',['Dnes pracujem doma.','Pracujem dnes doma?','Doma pracujem dnes?'],'Собери нейтральное утверждение.'),
gt('numbers','Числительные и даты','Запоминай формы числительных с существительными и дни недели с предлогом v.',['jeden deň · dva dni · päť dní','1. mája · v pondelok · o siedmej'],'Narodil sa 3. mája. — Он родился 3 мая.','V ___ mám kurz. (pondelok)','pondelok',['pondelok','pondelka','pondelku'],'Говорим v pondelok.')
];

export const readingTexts=[
['Новая однокурсница','Volám sa Lucia a mám dvadsať rokov. Bývam v Košiciach, ale študujem v Bratislave. Každý pondelok cestujem vlakom. Po vyučovaní pijem kávu s Ninou.','Где живёт Люция?','V Košiciach',['V Košiciach','V Prahe','V Bratislave'],'Как она ездит в понедельник?','Vlakom',['Vlakom','Autobusom','Autom'],'Где она учится?','V Bratislave',['V Bratislave','V Košiciach','V Žiline'],'Что она пьёт после занятий?','Kávu',['Kávu','Čaj','Vodu'],'С кем она пьёт кофе?','S Ninou',['S Ninou','S mamou','S kolegom']],
['Моя семья','Moja rodina má štyroch členov. Otec pracuje v nemocnici a mama učí v škole. Mám mladšieho brata Petra. Bývame v byte v centre. Cez víkend navštevujeme starých rodičov.','Сколько человек в семье?','Štyroch',['Štyroch','Piatich','Troch'],'Где работает отец?','V nemocnici',['V nemocnici','V obchode','V škole'],'Кем работает мама?','Učiteľka',['Učiteľka','Lekárka','Študentka'],'Где они живут?','V centre',['V centre','Na dedine','Pri stanici'],'Кого навещают на выходных?','Starých rodičov',['Starých rodičov','Kamarátov','Kolegov']],
['Рабочий день','Vstávam o šiestej. Raňajkujem doma a o siedmej idem autobusom do práce. Pracujem v malej firme do štvrtej. Na obed chodím s kolegami do reštaurácie. Večer čítam knihu.','Когда человек встаёт?','O šiestej',['O šiestej','O siedmej','O ôsmej'],'Как он едет на работу?','Autobusom',['Autobusom','Vlakom','Pešo'],'Где он работает?','V malej firme',['V malej firme','V škole','V nemocnici'],'С кем он обедает?','S kolegami',['S kolegami','S rodinou','Sám'],'Что он делает вечером?','Číta knihu',['Číta knihu','Pozerá film','Športuje']],
['Мой город','Bývam v Nitre. Je to pokojné mesto na západe Slovenska. V centre je námestie a veľká knižnica. Na univerzitu chodím pešo. V sobotu kupujem ovocie na trhu.','Где живёт автор?','V Nitre',['V Nitre','V Bratislave','V Košiciach'],'Какой это город?','Pokojný',['Pokojný','Hlučný','Ďaleký'],'Что есть в центре?','Knižnica',['Knižnica','Letisko','Nemocnica'],'Как он ходит в университет?','Pešo',['Pešo','Autobusom','Autom'],'Что покупает в субботу?','Ovocie',['Ovocie','Oblečenie','Knihy']],
['Моя комната','Moja izba je na druhom poschodí. Je malá, ale svetlá. Pri okne stojí stôl a vedľa neho posteľ. Knihy mám na polici. V izbe študujem pri počítači.','На каком этаже комната?','Na druhom',['Na druhom','Na prvom','Na treťom'],'Какая комната?','Malá a svetlá',['Malá a svetlá','Veľká a tmavá','Nová a drahá'],'Что стоит у окна?','Stôl',['Stôl','Posteľ','Polica'],'Где книги?','Na polici',['Na polici','Na stole','V taške'],'За каким предметом учится автор?','Pri počítači',['Pri počítači','Pri televízii','Pri okne']],
['Выходные','V sobotu idem s kamarátkou na trh. Kúpime jablká, chlieb a syr. Po obede hráme badminton v parku. V nedeľu zostávam doma, čítam a telefonujem rodičom.','Куда она идёт утром?','Na trh',['Na trh','Do školy','Do kina'],'С кем идёт?','S kamarátkou',['S kamarátkou','S bratom','S kolegom'],'Что они делают после обеда?','Hrajú badminton',['Hrajú badminton','Čítajú','Nakupujú'],'Где она в воскресенье?','Doma',['Doma','V práci','Na trhu'],'Кому звонит?','Rodičom',['Rodičom','Učiteľovi','Kamarátke']],
['В магазине','Dobrý deň, máte čerstvý chlieb? Áno, máme. Koľko stojí? Dve eurá. Prosím si jeden chlieb a liter mlieka. Platím kartou. Predavač mi dá účtenku.','Что покупает покупатель?','Chlieb a mlieko',['Chlieb a mlieko','Kávu a čaj','Ovocie a syr'],'Какой хлеб ему нужен?','Čerstvý',['Čerstvý','Lacný','Čierny'],'Сколько стоит хлеб?','Dve eurá',['Dve eurá','Jedno euro','Tri eurá'],'Как он платит?','Kartou',['Kartou','Hotovosťou','Mobilom'],'Что он получает?','Účtenku',['Účtenku','Tašku','Zľavu']],
['В кафе','Marek si objedná čaj a koláč. Eva chce kávu s mliekom. Čašníčka sa pýta, či platia spolu. Eva odpovie, že každý platí za seba. Potom sa rozprávajú o dovolenke.','Что заказывает Марек?','Čaj a koláč',['Čaj a koláč','Kávu a chlieb','Džús'],'Какую кофе хочет Ева?','S mliekom',['S mliekom','Bez mlieka','Studenú'],'Кто задаёт вопрос?','Čašníčka',['Čašníčka','Eva','Marek'],'Как они будут платить?','Každý za seba',['Každý za seba','Spolu','Kartou'],'О чём они говорят?','O dovolenke',['O dovolenke','O práci','O škole']],
['Автобус','Pán sa pýta, či autobus ide do centra. Žena hovorí, že musí prestúpiť na námestí. Autobus príde o desať minút. Pán vystúpi pri pošte.','Куда едет мужчина?','Do centra',['Do centra','Na letisko','Do nemocnice'],'Где пересадка?','Na námestí',['Na námestí','Pri pošte','Na stanici'],'Когда придёт автобус?','O desať minút',['O desať minút','O päť minút','O hodinu'],'Где он выйдет?','Pri pošte',['Pri pošte','Na letisku','Na námestí'],'Кто отвечает на вопрос?','Žena',['Žena','Vodič','Predavač']],
['Отпуск','V auguste cestujem s rodinou do Chorvátska. Bývame v hoteli pri mori. Ráno plávame a popoludní navštevujeme mestá. Cesta autom trvá šesť hodín. Domov sa vraciame v nedeľu.','Когда поездка?','V auguste',['V auguste','V júli','V septembri'],'С кем едет автор?','S rodinou',['S rodinou','S kolegami','Sám'],'Где живёт семья?','V hoteli pri mori',['V hoteli pri mori','V centre','V kempe'],'Сколько длится дорога?','Šesť hodín',['Šesť hodín','Tri hodiny','Dve hodiny'],'Когда они возвращаются?','V nedeľu',['V nedeľu','V sobotu','V piatok']]
].map(x=>({title:x[0],text:x[1],questions:Array.from({length:5},(_,i)=>({q:x[2+i*3],answer:x[3+i*3],options:x[4+i*3]}))}));

export const listeningTexts=[
['Знакомство','Dobrý deň. Volám sa Peter Novák. Mám dvadsaťštyri rokov a bývam v Žiline. Študujem na univerzite.','Ako sa volá?','Peter Novák',['Peter Novák','Pavol Novák','Peter Horváth'],'Kde býva?','V Žiline',['V Žiline','V Nitre','V Bratislave']],
['В кафе','Dobrý deň, jednu kávu s mliekom a minerálku, prosím. Bude to päť eur. Zaplatím kartou.','Čo si objednáva?','Kávu a minerálku',['Kávu a minerálku','Čaj a džús','Dve kávy'],'Koľko zaplatí?','Päť eur',['Päť eur','Štyri eurá','Šesť eur']],
['Семья','Moja sestra Jana má tridsať rokov. Je lekárka a pracuje v nemocnici. Jej manžel je učiteľ.','Koľko rokov má Jana?','Tridsať',['Tridsať','Dvadsať','Tridsaťdva'],'Kde pracuje?','V nemocnici',['V nemocnici','V škole','V hoteli']],
['На работе','Dnes máme poradu o deviatej v malej zasadačke. Prineste, prosím, nový dokument.','Kedy je porada?','O deviatej',['O deviatej','O ôsmej','O desiatej'],'Čo má priniesť?','Nový dokument',['Nový dokument','Počítač','Knihu']],
['Поезд','Vlak do Košíc odchádza z druhého nástupišťa o 14:25. Cesta trvá tri hodiny.','Odkiaľ odchádza vlak?','Z druhého nástupišťa',['Z druhého nástupišťa','Z prvej koľaje','Z autobusovej stanice'],'Kedy odchádza?','O 14:25',['O 14:25','O 14:15','O 15:25']],
['Погода','V pondelok bude slnečno a teplo. V utorok bude pršať. V stredu bude chladnejšie, ale bez dažďa.','Kedy bude pršať?','V utorok',['V utorok','V pondelok','V stredu'],'Aké bude počasie v pondelok?','Slnečné a teplé',['Slnečné a teplé','Chladné','Daždivé']],
['Покупки','Prosím si kilogram jabĺk, pol kila syra a jeden chlieb. Jablká stoja dve eurá a syr štyri eurá.','Koľko jabĺk chce zákazník?','Kilogram',['Kilogram','Pol kila','Dva kilogramy'],'Koľko stojí syr?','Štyri eurá',['Štyri eurá','Dve eurá','Päť eur']],
['Свободное время','V sobotu ráno chodím plávať. Popoludní sa stretnem s kamarátmi a večer pozeráme film.','Čo robí ráno?','Pláva',['Pláva','Pracuje','Nakupuje'],'Kedy pozerajú film?','Večer',['Večer','Ráno','Popoludní']],
['В аптеке','Bolí ma hrdlo a mám teplotu. Potrebujem lieky. Lekáreň zatvára o šiestej.','Čo ho bolí?','Hrdlo',['Hrdlo','Hlava','Brucho'],'Kedy zatvára lekáreň?','O šiestej',['O šiestej','O piatej','O siedmej']],
['Дорога в школу','Autobus číslo štyri ide do centra. Vystúpte na tretej zastávke. Škola je vedľa pošty.','Ktorým autobusom má ísť?','Číslom štyri',['Číslom štyri','Číslom tri','Číslom päť'],'Kde je škola?','Vedľa pošty',['Vedľa pošty','Pri stanici','Za hotelom']]
].map(x=>({title:x[0],text:x[1],questions:[{q:x[2],answer:x[3],options:x[4]},{q:x[5],answer:x[6],options:x[7]}]}));

export const writingTasks=[
['Представься','Представься в трёх предложениях: имя, город, язык.','Volám sa Anna. Bývam v Bratislave. Učím sa po slovensky.',['volám sa','bývam','slovensky']],
['Моя семья','Напиши о двух родственниках и их занятиях.','Môj brat študuje a moja sestra pracuje.',['brat','sestra']],
['Мой день','Расскажи, когда встаёшь, чем занимаешься днём и вечером.','Vstávam o siedmej. Cez deň pracujem. Večer čítam.',['vstávam','pracujem','večer']],
['Мой город','Назови город, где живёшь, и два места в нём.','Bývam v Košiciach. V centre je stanica a knižnica.',['bývam','centre','stanica']],
['В магазине','Попроси хлеб, молоко и яблоки; спроси цену.','Prosím si chlieb, mlieko a jablká. Koľko to stojí?',['prosím','chlieb','koľko']],
['В кафе','Закажи напиток, десерт и попроси счёт.','Dám si čaj a koláč. Prosím si účet.',['dám','čaj','účet']],
['Моя комната','Опиши комнату и расположение двух вещей.','Moja izba je malá a svetlá. Posteľ je pri okne.',['izba','posteľ']],
['Вчера','Напиши три предложения о вчерашнем дне в прошедшем времени.','Včera som pracoval doma. Potom som nakupoval.',['včera','som','potom']],
['Завтра','Напиши планы на утро и вечер, используя будущее время.','Zajtra budem študovať. Večer budem čítať.',['zajtra','budem','večer']],
['Сообщение другу','Поздоровайся, пригласи друга и предложи время встречи.','Ahoj, stretneme sa dnes o šiestej pri stanici?',['ahoj','stretneme','stanici']],
['Выходные','Опиши планы на субботу и воскресенье.','V sobotu idem na trh. V nedeľu zostanem doma.',['sobotu','nedeľu']],
['Моё хобби','Расскажи о двух увлечениях и как часто ты ими занимаешься.','Rád počúvam hudbu a čítam. Každý týždeň plávam.',['rád','hudbu','čítam']],
['Анкета','Укажи страну, языки и работу или учёбу.','Som z Kazachstanu. Hovorím po rusky a študujem.',['som','hovorím','študujem']],
['Путешествие','Напиши, куда и на чём едешь и где остановишься.','Cestujem do Bratislavy vlakom. Bývam v hoteli.',['cestujem','vlak','hoteli']],
['Самочувствие','Опиши симптом и попроси помощи.','Necítim sa dobre. Bolí ma hlava a potrebujem lekára.',['dobre','bolí','lekára']]
].map(([title,prompt,sample,keywords])=>({title,prompt,sample,keywords}));

export const speakingQuestions=parse(`Ako sa voláš?|Как тебя зовут?|Volám sa…
Koľko máš rokov?|Сколько тебе лет?|Mám … rokov.
Odkiaľ si?|Откуда ты?|Som z …
Kde bývaš?|Где ты живёшь?|Bývam v …
Čo robíš?|Чем ты занимаешься?|Študujem / Pracujem.
Akými jazykmi hovoríš?|На каких языках говоришь?|Hovorím po …
Kto je v tvojej rodine?|Кто есть в твоей семье?|V mojej rodine je …
Máš súrodencov?|У тебя есть братья или сёстры?|Mám brata / sestru.
Kde pracuješ?|Где ты работаешь?|Pracujem v …
Kde študuješ?|Где ты учишься?|Študujem na …
Čo rád robíš?|Что ты любишь делать?|Rád / rada …
Čo rád ješ?|Что ты любишь есть?|Rád / rada jem …
Aké je dnes počasie?|Какая сегодня погода?|Dnes je …
Koľko je hodín?|Который час?|Je … hodín.
Čo robíš cez víkend?|Что делаешь на выходных?|Cez víkend …
Čo si robil včera?|Что ты делал вчера?|Včera som …
Čo budeš robiť zajtra?|Что будешь делать завтра?|Zajtra budem …
Ako ideš do práce?|Как едешь на работу?|Idem autobusom / pešo.
Kde je najbližšia stanica?|Где ближайшая станция?|Stanica je …
Čo si dáš v kaviarni?|Что закажешь в кафе?|Dám si …
Čo kupuješ v obchode?|Что покупаешь в магазине?|Kupujem …
Aké jedlo máš rád?|Какую еду любишь?|Mám rád / rada …
Kedy vstávaš?|Когда встаёшь?|Vstávam o …
Kedy ideš spať?|Когда ложишься спать?|Idem spať o …
Aký film máš rád?|Какой фильм любишь?|Mám rád / rada …
Kam rád cestuješ?|Куда любишь ездить?|Rád / rada cestujem do …
Čo robíš, keď si chorý?|Что делаешь, когда болеешь?|Keď som chorý/chorá, …
Aký je tvoj byt?|Какая у тебя квартира?|Môj byt je …
Čo je na stole?|Что на столе?|Na stole je …
Prečo sa učíš po slovensky?|Почему учишь словацкий?|Učím sa po slovensky, lebo …`).map(([q,ru,sample])=>({q,ru,sample}));

export const dialogues=[
{title:'Знакомство в университете',turns:[['Ahoj, ako sa voláš?','Привет, как тебя зовут?','Volám sa …'],['Odkiaľ si?','Откуда ты?','Som z …'],['Čo študuješ?','Что изучаешь?','Študujem …']]},
{title:'Покупка продуктов',turns:[['Dobrý deň, čo si želáte?','Что желаете?','Prosím si chlieb a mlieko.'],['Ešte niečo?','Что-нибудь ещё?','Ešte jablká, prosím.'],['Ako budete platiť?','Как будете платить?','Zaplatím kartou.']]},
{title:'Заказ в кафе',turns:[['Čo si dáte?','Что будете заказывать?','Dám si čaj a koláč.'],['Ešte niečo?','Что-нибудь ещё?','Nie, ďakujem.'],['Spolu alebo zvlášť?','Вместе или отдельно?','Spolu, prosím.']]},
{title:'Покупка билета',turns:[['Kam cestujete?','Куда едете?','Do Košíc, prosím.'],['Jednosmerný alebo spiatočný?','В одну сторону или туда и обратно?','Spiatočný lístok.'],['Z ktorého nástupišťa?','С какой платформы?','Z druhého nástupišťa?']]},
{title:'Разговор о выходных',turns:[['Čo robíš cez víkend?','Что делаешь на выходных?','V sobotu idem …'],['S kým ideš?','С кем идёшь?','Idem s kamarátmi.'],['Kedy sa stretneme?','Когда встретимся?','O šiestej pri stanici.']]}
];
export const exams=[['Пробный вариант 1','Знакомство, семья и настоящее время'],['Пробный вариант 2','Покупки, кафе и календарь'],['Пробный вариант 3','Путешествия, планы и здоровье']].map(([title,focus],i)=>({id:`exam${i+1}`,title,focus,minutes:25}));
