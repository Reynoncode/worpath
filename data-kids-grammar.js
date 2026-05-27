// ============================================================
//  WORDPATH — KIDS & GRAMMAR DATA
// ============================================================
const KIDS_GRAMMAR_LEVELS = [

  // ╔══════════════════════════════════════════════════╗
  // ║  KIDS BÖLÜMÜ                                    ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'kids',
    name: 'KIDS',
    icon: '🧒',
    color: '#E91E8C',
    quizzes: [
      // Quiz 1
      [
        { en: 'cat', tr: 'pişik', wrong: 'it', wen: 'dog', def: 'a small furry animal' },
        { en: 'cat', tr: 'pişik', wrong: 'it', wen: 'dog', def: 'a small furry animal' },
      ],
      // Quiz 2
      [
        { en: 'cat', tr: 'pişik', wrong: 'it', wen: 'dog', def: 'a small furry animal' },
        { en: 'cat', tr: 'pişik', wrong: 'it', wen: 'dog', def: 'a small furry animal' },
      ],
      // Quiz 3
      [
        { en: 'cat', tr: 'pişik', wrong: 'it', wen: 'dog', def: 'a small furry animal' },
        { en: 'cat', tr: 'pişik', wrong: 'it', wen: 'dog', def: 'a small furry animal' },
      ],
      // Quiz 4
      [
        { en: 'cat', tr: 'pişik', wrong: 'it', wen: 'dog', def: 'a small furry animal' },
        { en: 'cat', tr: 'pişik', wrong: 'it', wen: 'dog', def: 'a small furry animal' },
      ],
      // Quiz 5
      [
        { en: 'cat', tr: 'pişik', wrong: 'it', wen: 'dog', def: 'a small furry animal' },
        { en: 'cat', tr: 'pişik', wrong: 'it', wen: 'dog', def: 'a small furry animal' },
      ],
    ],
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  GRAMMAR BÖLÜMÜ — NOUNS (İsimlər)               ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'grammar',
    name: 'GRAMMAR',
    icon: '📖',
    color: '#8B5CF6',
    quizzes: [

  // index: 1 — Dərs 1.1
      {
        type: 'grammar_lesson',
        title: 'Dərs 1.1 — Sadə, düzəltmə, mürəkkəb isimlər',
        cards: [

          // ── Ekran 1: Giriş ───────────────────────────────
          {
            type: 'lesson',
            title: 'İsim (The Noun)',
            content: 'İsim canlı və cansız əşyaların, yerlərin, hisslərin və fikirlərin adını bildirir.\n\nİsimlər quruluşca 3 növdür:',
            examples: [
              { word: 'Simple noun',     az: 'Sadə isim',     note: '— yalnız bir kökdən ibarət' },
              { word: 'Derivative noun', az: 'Düzəltmə isim', note: '— kök + şəkilçi' },
              { word: 'Compound noun',   az: 'Mürəkkəb isim', note: '— iki və ya daha çox söz' },
            ],
          },

          // ── Ekran 2: Sadə isimlər ────────────────────────
          {
            type: 'lesson',
            title: '1. Sadə isimlər (Simple nouns)',
            content: 'Sadə isimlər yalnız bir kökdən ibarətdir — heç bir şəkilçi əlavə edilmir.',
            examples: [
              { word: 'book',  az: 'kitab' },
              { word: 'pen',   az: 'qələm' },
              { word: 'cat',   az: 'pişik' },
              { word: 'sun',   az: 'günəş' },
              { word: 'chair', az: 'stul'  },
            ],
            tip: 'Sadə isimlər ən qısa və ən çox işlənən isim növüdür.',
          },

          // ── Quiz: Sadə isimi seç ─────────────────────────
          { en: 'Sadə isimi seç', tr: 'book',  wrong: 'teacher'     },
          { en: 'Sadə isimi seç', tr: 'sun',   wrong: 'darkness'    },
          { en: 'Sadə isimi seç', tr: 'chair', wrong: 'freedom'     },
          { en: 'Sadə isimi seç', tr: 'road',  wrong: 'railway'     },
          { en: 'Sadə isimi seç', tr: 'rain',  wrong: 'self-control'},

          // ── Ekran 3: Düzəltmə isimlər ───────────────────
          {
            type: 'lesson',
            title: '2. Düzəltmə isimlər (Derivative nouns)',
            content: 'Düzəltmə isimlər kök sözə şəkilçi əlavə etməklə yaranır.\n\nBu şəkilçilər sözün mənasını dəyişdirir və ondan isim düzəldir:',
            examples: [
              { word: 'teach → teacher',       az: '-er şəkilçisi ilə' },
              { word: 'happy → happiness',     az: '-ness şəkilçisi ilə' },
              { word: 'develop → development', az: '-ment şəkilçisi ilə' },
              { word: 'free → freedom',        az: '-dom şəkilçisi ilə' },
              { word: 'child → childhood',     az: '-hood şəkilçisi ilə' },
            ],
            note: 'Şəkilçi əlavə olunduqda kök sözün yazılışı bəzən dəyişə bilər: happy → happiness.',
          },

          // ── Quiz: Düzəltmə isimi seç ────────────────────
          { en: 'Düzəltmə isimi seç', tr: 'teacher',     wrong: 'book'         },
          { en: 'Düzəltmə isimi seç', tr: 'happiness',   wrong: 'sunrise'      },
          { en: 'Düzəltmə isimi seç', tr: 'freedom',     wrong: 'railway'      },
          { en: 'Düzəltmə isimi seç', tr: 'childhood',   wrong: 'flowerbed'    },
          { en: 'Düzəltmə isimi seç', tr: 'development', wrong: 'self-control' },

          // ── Ekran 4: Mürəkkəb isimlər ───────────────────
          {
            type: 'lesson',
            title: '3. Mürəkkəb isimlər (Compound nouns)',
            content: 'Mürəkkəb isimlər iki və ya daha çox sözdən birləşərək yeni bir məna yaradır.\n\nYazılış 3 cür ola bilər:',
            examples: [
              { word: 'flowerbed',    az: 'bitişik yazılır' },
              { word: 'railway',      az: 'bitişik yazılır' },
              { word: 'full moon',    az: 'ayrı yazılır' },
              { word: 'self-control', az: 'tire ilə yazılır' },
              { word: 'sunrise',      az: 'bitişik yazılır' },
            ],
            tip: 'Mürəkkəb isimlərdə əsas məna ikinci sözdə olur: flower + bed = çiçəklik (çarpayı növü).',
          },

          // ── Quiz: Mürəkkəb isimi seç ────────────────────
          { en: 'Mürəkkəb isimi seç', tr: 'sunrise',      wrong: 'pen'         },
          { en: 'Mürəkkəb isimi seç', tr: 'railway',      wrong: 'kindness'    },
          { en: 'Mürəkkəb isimi seç', tr: 'flowerbed',    wrong: 'freedom'     },
          { en: 'Mürəkkəb isimi seç', tr: 'full moon',    wrong: 'leadership'  },
          { en: 'Mürəkkəb isimi seç', tr: 'self-control', wrong: 'development' },

          // ── Ekran 5: Müqayisə cədvəli ───────────────────
          {
            type: 'lesson',
            title: 'Müqayisə: 3 növ bir arada',
            content: 'Üç növü yan-yana görərək fərqi daha asan mənimsəyəcəksən:',
            table: [
              ['Növ',        'Quruluş',       'Nümunə'],
              ['Simple',     'kök',           'book, sun, pen'],
              ['Derivative', 'kök + şəkilçi', 'teacher, freedom'],
              ['Compound',   'söz + söz',     'sunrise, self-control'],
            ],
            note: 'Bəzən bir söz həm düzəltmə, həm mürəkkəb ola bilər: "workmanship" — work + man + -ship.',
          },

         // ── Mini-quiz: Ümumi təkrar ───────────────────────────
{
  type: 'mini_check',
  questions: [
    {
      q: '"road" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"kingdom" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"toothbrush" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
    {
      q: '"rain" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"friendship" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"bedroom" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
    {
      q: '"stone" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"kindness" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"earthquake" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
    {
      q: '"hand" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"heroism" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"waterfall" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
    {
      q: '"tree" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Sadə',
    },
    {
      q: '"neighbourhood" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Düzəltmə',
    },
    {
      q: '"footprint" hansı növ isimdir?',
      options: ['Sadə', 'Düzəltmə', 'Mürəkkəb'],
      answer: 'Mürəkkəb',
    },
  ],
},
            ],
},
      // index: 2 — Dərs 1.2
      {
        type: 'grammar_lesson',
        title: 'Dərs 1.2 — İsim düzəldən şəkilçilər',
        cards: [

          // ── Ekran 1: Giriş ───────────────────────────────
          {
            type: 'lesson',
            title: 'İsim düzəldən şəkilçilər',
            content: 'Şəkilçi əlavə etməklə fel, sifət və başqa söz növlərindən isim düzəltmək olar.\n\nBu şəkilçiləri bilmək yeni sözləri asanlıqa tanımağa kömək edir.',
            tip: 'Şəkilçini tanısan, sözün mənasını bilməsən belə onun isim olduğunu anlayarsan.',
          },

          // ── Ekran 2: Feldən düzələn isimlər ─────────────
          {
            type: 'lesson',
            title: 'Feldən düzələn isimlər',
            content: 'Aşağıdakı şəkilçilər fellərə əlavə edilərək isim yaradır:',
            table: [
              ['Şəkilçi',       'Nümunə fel',  'Düzələn isim'],
              ['-er / -or',     'teach, work', 'teacher, worker'],
              ['-ment',         'develop',     'development'],
              ['-tion / -sion', 'station',     'profession, revision'],
              ['-ance / -ence', 'perform',     'performance, dependence'],
              ['-ing',          'meet, weed',  'meeting, weeding'],
            ],
            note: '-er / -or şəkilçisi "iş görən şəxs" mənası verir: teach → teacher (müəllim).',
          },

          // ── Mini-check: Feldən düzələn ───────────────────
          { type: 'mini_check', questions: [{ q: '"teacher" sözündə hansı şəkilçi isim düzəldir?', options: ['-er', '-ness', '-dom', '-hood'], answer: '-er' }] },
          { type: 'mini_check', questions: [{ q: 'Hansı söz feldən düzəlmiş isimdir?', options: ['wisdom', 'meeting', 'village', 'kingdom'], answer: 'meeting' }] },
          { type: 'mini_check', questions: [{ q: '"develop" felindən isim düzəltmək üçün hansı şəkilçi lazımdır?', options: ['-ness', '-ity', '-ment', '-hood'], answer: '-ment' }] },
          { type: 'mini_check', questions: [{ q: 'Hansı söz "-tion / -sion" şəkilçisi ilə düzəlmişdir?', options: ['darkness', 'friendship', 'revision', 'strength'], answer: 'revision' }] },

          // ── Ekran 3: Sifətdən düzələn isimlər ───────────
          {
            type: 'lesson',
            title: 'Sifətdən düzələn isimlər',
            content: 'Sifətlərə şəkilçi əlavə edərək isim düzəltmək olar:',
            table: [
              ['Şəkilçi', 'Nümunə sifət', 'Düzələn isim'],
              ['-ness',   'happy, kind',  'happiness, kindness'],
              ['-ity',    'popular',      'popularity, celebrity'],
              ['-th',     'strong, wide', 'strength, width'],
              ['-dom',    'free, wise',   'freedom, wisdom'],
            ],
            tip: '-ness şəkilçisi demək olar ki, istənilən sifətə əlavə edilə bilər.',
          },

          // ── Mini-check: Sifətdən düzələn ────────────────
          { type: 'mini_check', questions: [{ q: '"happy" sifətindən isim düzəltmək üçün hansı şəkilçi lazımdır?', options: ['-ment', '-ness', '-ship', '-ing'], answer: '-ness' }] },
          { type: 'mini_check', questions: [{ q: 'Hansı söz sifətdən düzəlmiş isimdir?', options: ['meeting', 'village', 'width', 'typist'], answer: 'width' }] },
          { type: 'mini_check', questions: [{ q: '"popular" sözündən hansı isim düzəlir?', options: ['popularity', 'popularing', 'popularhood', 'popularism'], answer: 'popularity' }] },

          // ── Ekran 4: Digər şəkilçilər ────────────────────
          {
            type: 'lesson',
            title: 'Digər mühüm şəkilçilər',
            content: 'Bəzi şəkilçilər müstəqil kök sözlərə əlavə edilir:',
            table: [
              ['Şəkilçi', 'Məna',               'Nümunə'],
              ['-hood',   'vəziyyət, dövr',     'childhood, brotherhood'],
              ['-ship',   'xüsusiyyət, vəzifə', 'leadership, friendship'],
              ['-ism',    'ideologiya, sistem',  'heroism, communism'],
              ['-ist',    'peşə sahibi',         'typist, dentist'],
              ['-age',    'yer, vəziyyət',       'village, package'],
            ],
            note: '-ist şəkilçisi həm peşəni (dentist), həm də ideologiyanın tərəfdarını (communist) bildirir.',
          },

          // ── Mini-check: Digər şəkilçilər ─────────────────
          { type: 'mini_check', questions: [{ q: '"friendship" sözündə hansı şəkilçi var?', options: ['-hood', '-ism', '-ship', '-dom'], answer: '-ship' }] },
          { type: 'mini_check', questions: [{ q: 'Hansı söz "-ism" şəkilçisi ilə düzəlmişdir?', options: ['dentist', 'heroism', 'village', 'childhood'], answer: 'heroism' }] },
          { type: 'mini_check', questions: [{ q: '"typist" sözündəki "-ist" şəkilçisi nə bildirir?', options: ['yer, məkan', 'ideologiya', 'peşə sahibi', 'vəziyyət, dövr'], answer: 'peşə sahibi' }] },
          { type: 'mini_check', questions: [{ q: 'Hansı şəkilçi "vəziyyət, dövr" mənası verir?', options: ['-ship', '-ism', '-age', '-hood'], answer: '-hood' }] },

          // ── Ekran 5: Xülasə ──────────────────────────────
          {
            type: 'lesson',
            title: 'Şəkilçilərin ümumi xülasəsi',
            content: 'Bütün şəkilçiləri bir yerdə görmək üçün:',
            table: [
              ['Şəkilçi',       'Nümunə'],
              ['-er / -or',     'teacher, writer, actor'],
              ['-ness',         'happiness, darkness'],
              ['-ment',         'development, department'],
              ['-hood',         'childhood, neighbourhood'],
              ['-ship',         'friendship, leadership'],
              ['-ism',          'heroism, communism'],
              ['-dom',          'freedom, kingdom'],
              ['-tion / -sion', 'station, revision'],
              ['-ence / -ance', 'dependence, performance'],
              ['-ing',          'meeting, carving'],
              ['-ity',          'popularity, celebrity'],
              ['-age',          'village, cottage'],
              ['-th',           'strength, length, depth'],
              ['-ist',          'typist, dentist'],
            ],
            tip: 'Bu şəkilçilərdən birini gördükdə o sözün isim olma ehtimalı çox yüksəkdir.',
          },

          // ── Mini-quiz: Ümumi təkrar — şəkilçilər ─────────────
{
  type: 'mini_check',
  questions: [
    {
      q: '"actor" sözü hansı şəkilçi ilə düzəlmişdir?',
      options: ['-ment', '-or', '-ness', '-th'],
      answer: '-or',
    },
    {
      q: 'Hansı söz "-dom" şəkilçisi ilə düzəlmişdir?',
      options: ['meeting', 'wisdom', 'package', 'dentist'],
      answer: 'wisdom',
    },
    {
      q: '"strength" sözündəki şəkilçi hansıdır?',
      options: ['-ness', '-ity', '-th', '-age'],
      answer: '-th',
    },
    {
      q: 'Hansı söz "-age" şəkilçisi ilə düzəlmişdir?',
      options: ['leadership', 'cottage', 'revision', 'darkness'],
      answer: 'cottage',
    },
    {
      q: '"carving" sözü hansı feldən düzəlmişdir?',
      options: ['carry', 'care', 'carve', 'card'],
      answer: 'carve',
    },
    {
      q: 'Hansı şəkilçi sifətə əlavə edilir?',
      options: ['-er', '-ment', '-ness', '-or'],
      answer: '-ness',
    },
    {
      q: '"neighbourhood" sözündə neçə morfem var?',
      options: ['2', '3', '4', '1'],
      answer: '3',
    },
  ],
},
        ],
      },
// index: 3 — Bölmə 1 ümumi quiz
[
  { en: 'teacher',      tr: 'Düzəltmə',  wrong: 'Sadə'      },
  { en: 'book',         tr: 'Sadə',      wrong: 'Mürəkkəb'  },
  { en: 'sunrise',      tr: 'Mürəkkəb',  wrong: 'Düzəltmə'  },
  { en: 'rain',         tr: 'Sadə',      wrong: 'Düzəltmə'  },
  { en: 'happiness',    tr: 'Düzəltmə',  wrong: 'Mürəkkəb'  },
  { en: 'toothbrush',   tr: 'Mürəkkəb',  wrong: 'Sadə'      },
  { en: 'hero____m',    tr: '-is',       wrong: '-er'        },
  { en: 'teach → ____', tr: 'teacher',   wrong: 'teachness'  },
  { en: 'waterfall',    tr: 'Mürəkkəb',  wrong: 'Düzəltmə'  },
  { en: 'stone',        tr: 'Sadə',      wrong: 'Düzəltmə'  },
  { en: 'free → ____',  tr: 'freedom',   wrong: 'freeship'   },
  { en: 'kind → ____',  tr: 'kindness',  wrong: 'kindment'   },
  { en: 'friendship',   tr: 'Düzəltmə',  wrong: 'Mürəkkəb'  },
  { en: 'bedroom',      tr: 'Mürəkkəb',  wrong: 'Düzəltmə'  },
  { en: 'develop → ____', tr: 'development', wrong: 'developness' },
  { en: 'kingdom',      tr: 'Düzəltmə',  wrong: 'Sadə'      },
  { en: 'hand',         tr: 'Sadə',      wrong: 'Mürəkkəb'  },
  { en: 'lead → ____ship', tr: 'leadership', wrong: 'leaderhood' },
  { en: 'earthquake',   tr: 'Mürəkkəb',  wrong: 'Düzəltmə'  },
  { en: 'strong → ____', tr: 'strength', wrong: 'strongness' },
],

     // ── Bölmə 2 ──────────────────────────────────────
{
  type: 'section_divider',
  title: 'Bölmə 2 — Common vs Proper nouns · Konkret vs Mücərrəd',
},

// Dərs 2.1 — Common vs Proper noun fərqi
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — Common vs Proper nouns',
  cards: [

    // ── Ekran 1: Ümumi və Xüsusi isimlər ─────────────────
    {
      type: 'lesson',
      title: 'Ümumi və Xüsusi isimlər',
      content: 'İsimlər iki böyük qrupa bölünür:\n\nCommon nouns (Ümumi isimlər) — eyni qəbildən olan əşyaların adını bildirir. Kiçik hərflə yazılır.\n\nProper nouns (Xüsusi isimlər) — eyni qəbildən olan əşyaları bir-birindən fərqləndirmək üçün verilən adlardır. Həmişə böyük hərflə yazılır.',
      examples: [
        { word: 'a city, a country, a lake', az: 'Common noun — kiçik hərflə' },
        { word: 'Baku, Azerbaijan',          az: 'Proper noun — böyük hərflə' },
        { word: 'peace, weather',            az: 'Common noun — kiçik hərflə' },
        { word: 'January, Monday',           az: 'Proper noun — böyük hərflə' },
      ],
      tip: 'Azərbaycan dilindən fərqli olaraq ingilis dilində ay və həftə günlərinin adları həmişə böyük hərflə yazılır.',
    },

    // ── Ekran 2: Proper nouns kateqoriyaları ─────────────
    {
      type: 'lesson',
      title: 'Proper nouns — hansı sözlər daxildir?',
      content: 'Aşağıdakı kateqoriyalar həmişə böyük hərflə yazılır:',
      table: [
        ['Kateqoriya',                 'Nümunə'],
        ['İnsan adları',               'Anar, Sara'],
        ['Coğrafi adlar',              'Azerbaijan, Baku, Caspian Sea'],
        ['Ayların adları',             'January, February, March'],
        ['Həftə günlərinin adları',    'Monday, Tuesday, Sunday'],
        ['Gəmi, otel, meydan adları',  'Titanic, Hilton, Times Square'],
        ['Teatr, klub, jurnal adları', 'The Globe, Vogue'],
      ],
      note: 'Common noun ilə Proper noun arasındakı fərq: a lake (hər hansı göl) — Caspian Sea (konkret, xüsusi ad verilmiş göl).',
    },

    // ── Mini-check: Common vs Proper ─────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"Baku" hansı növ isimdir?',
          options: ['Common noun', 'Proper noun', 'Abstract noun', 'Collective noun'],
          answer: 'Proper noun',
        },
        {
          q: '"a city" hansı növ isimdir?',
          options: ['Proper noun', 'Abstract noun', 'Common noun', 'Compound noun'],
          answer: 'Common noun',
        },
        {
          q: 'Hansı söz mütləq böyük hərflə yazılır?',
          options: ['country', 'lake', 'Monday', 'peace'],
          answer: 'Monday',
        },
        {
          q: '"Caspian Sea" nə üçün böyük hərflə yazılır?',
          options: [
            'Mücərrəd isim olduğuna görə',
            'Xüsusi ad olduğuna görə',
            'Cəm formada olduğuna görə',
            'Sayılmayan isim olduğuna görə',
          ],
          answer: 'Xüsusi ad olduğuna görə',
        },
        {
          q: 'Hansı sırada hər iki söz də Common noun-dur?',
          options: ['Anar, Sara', 'January, Monday', 'weather, lake', 'Baku, Titanic'],
          answer: 'weather, lake',
        },
        {
          q: '"february" yazılışında nə səhvdir?',
          options: [
            'Heç nə — düzgündür',
            'Böyük hərflə yazılmalıdır',
            'Kiçik hərflə yazılmalıdır',
            'Sözün özü yanlışdır',
          ],
          answer: 'Böyük hərflə yazılmalıdır',
        },
      ],
    },
  ],
},

// Dərs 2.2 — Concrete vs Abstract isimlər
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — Concrete vs Abstract · Countable vs Uncountable',
  cards: [

    // ── Ekran 1: Common noun-un 2 qrupu ──────────────────
    {
      type: 'lesson',
      title: 'Ümumi isimlər — Konkret və Mücərrəd',
      content: 'Common nouns özü də 2 qrupa bölünür:\n\nI. Konkret isimlər (Concrete nouns) — fiziki əşyaların adını bildirir. Əl ilə toxunmaq, gözlə görmək mümkündür.\n\nII. Mücərrəd isimlər (Abstract nouns) — gözlə görünməyən, əl ilə toxunulmayan isimlərdir. Hərəkət, vəziyyət və keyfiyyət adlarını bildirir.',
      examples: [
        { word: 'a pen, bread, a city, a table', az: 'Concrete — görünür, toxunulur' },
        { word: 'happiness, love, freedom',      az: 'Abstract — görünmür, toxunulmur' },
        { word: 'knowledge, hate',               az: 'Abstract — hərəkət, keyfiyyət adı' },
      ],
      tip: 'Özünə sual ver: Bu şeyi görə bilərəm ya hiss edə bilərəm? Yalnız hiss edirəmsə — abstract.',
    },

    // ── Ekran 2: Concrete → Countable vs Uncountable ─────
    {
      type: 'lesson',
      title: 'Konkret isimlər — Sayılan və Sayılmayan',
      content: 'Konkret isimlər özü də 2 yarımqrupa bölünür:\n\na) Sayılan isimlər (Countable nouns)\nb) Sayılmayan isimlər (Uncountable nouns)',
      table: [
        ['Xüsusiyyət',          'Countable',          'Uncountable'],
        ['Cəm forması',         'var: books',         'yoxdur'],
        ['a / an artiklı',      'işlənir: a book',    'işlənmir'],
        ['Rəqəm',               'işlənir: 3 books',   'işlənmir'],
        ['"çox" mənasında',     'many books',         'much milk'],
        ['"az" mənasında',      'few books',          'little butter'],
        ['Felin forması',       'cəm fel: books are', 'tək fel: milk is'],
      ],
      examples: [
        { word: 'a book → many books / few books', az: 'Countable' },
        { word: 'much milk / little butter',       az: 'Uncountable' },
        { word: 'Many books are on the table.',    az: 'Cəm fel' },
      ],
    },

    // ── Mini-check: Countable vs Uncountable ─────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"milk" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Proper noun', 'Abstract noun'],
          answer: 'Uncountable',
        },
        {
          q: 'Countable isimlərlə hansı söz işlənir ("az" mənasında)?',
          options: ['little', 'much', 'few', 'less'],
          answer: 'few',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'Many butters are in the fridge.',
            'Few milks are left.',
            'Many books are on the table.',
            'Much books are here.',
          ],
          answer: 'Many books are on the table.',
        },
        {
          q: '"a / an" artiklı hansı isimlərlə işlənir?',
          options: [
            'Yalnız Uncountable',
            'Yalnız Countable',
            'Həm Countable, həm Uncountable',
            'Yalnız Abstract',
          ],
          answer: 'Yalnız Countable',
        },
        {
          q: '"bread" hansı növ isimdir?',
          options: ['Countable', 'Proper noun', 'Uncountable', 'Abstract noun'],
          answer: 'Uncountable',
        },
      ],
    },

    // ── Ekran 3: Abstract nouns — qaydalar ───────────────
    {
      type: 'lesson',
      title: 'Abstract nouns — diqqət ediləcək qaydalar',
      content: 'Mücərrəd isimlər adətən bu qaydalara tabedir:\n\n• Sayılmır, cəmlənmir\n• a / an artiklı ilə işlənmir\n• Özündən sonra fel təkdə olur',
      examples: [
        { word: 'Knowledge is power.',  az: 'Fel tək — "is"' },
        { word: 'Love is beautiful.',   az: 'Fel tək — "is"' },
      ],
      note: 'Vacib istisna: Mücərrəd isimin qarşısında sifət gələrsə, a / an artiklı işlənir.',
    },

    // ── Ekran 4: Sifətli abstract noun istisnaları ────────
    {
      type: 'lesson',
      title: 'Abstract noun + sifət → a / an işlənir',
      content: 'Mücərrəd ismin qarşısında sifət olduqda a / an artiklı mütləq işlənir:',
      table: [
        ['İfadə',           'Sifət'],
        ['a good knowledge', '"good" sifəti var'],
        ['a long distance',  '"long" sifəti var'],
        ['a long silence',   '"long" sifəti var'],
        ['a hard life',      '"hard" sifəti var'],
        ['a good salary',    '"good" sifəti var'],
        ['a bad impression', '"bad" sifəti var'],
        ['a thick population',  '"thick" sifəti var'],
        ['a terrible storm',    '"terrible" sifəti var'],
        ['a single cloud',      '"single" sifəti var'],
        ['a long period',       '"long" sifəti var'],
      ],
      tip: 'Qayda: sifət + abstract noun → mütləq a / an. Sifətsiz abstract noun → a / an işlənmir.',
    },

    // ── Mini-check: Abstract nouns ───────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A love is beautiful.',
            'Love is beautiful.',
            'Loves is beautiful.',
            'The loves are beautiful.',
          ],
          answer: 'Love is beautiful.',
        },
        {
          q: 'Hansı halda "a" artiklı işlənir?',
          options: [
            'love',
            'a hard life',
            'freedom',
            'knowledge',
          ],
          answer: 'a hard life',
        },
        {
          q: '"happiness" hansı növ isimdir?',
          options: ['Concrete', 'Countable', 'Abstract', 'Proper noun'],
          answer: 'Abstract',
        },
        {
          q: 'Abstract isimlərin arxasında fel necə olur?',
          options: ['Cəm', 'Tək', 'İstənilən formada', 'Həmişə "are"'],
          answer: 'Tək',
        },
        {
          q: 'Hansı ifadə düzgündür?',
          options: [
            'a knowledge',
            'a good knowledge',
            'good knowledges',
            'the knowledges',
          ],
          answer: 'a good knowledge',
        },
        {
          q: '"freedom" cəmlənə bilərmi?',
          options: [
            'Bəli, freedoms olur',
            'Xeyr, mücərrəd isim olduğuna görə cəmlənmir',
            'Bəli, xüsusi hallarda',
            'Bəli, freedomes olur',
          ],
          answer: 'Xeyr, mücərrəd isim olduğuna görə cəmlənmir',
        },
      ],
    },

    // ── Ekran 5: Cins kateqoriyası ────────────────────────
    {
      type: 'lesson',
      title: 'İsimlərin cinsi (Gender)',
      content: 'İngilis dilində cins kateqoriyası əsasən üçüncü şəxs əvəzliklərində özünü göstərir: he, she, it\n\nQadın cinsi düzəldən şəkilçi: -ess',
      table: [
        ['Kişi cinsi', 'Qadın cinsi'],
        ['actor',      'actress'],
        ['lion',       'lioness'],
        ['waiter',     'waitress'],
      ],
      note: 'Xüsusi qaydalar:\n• Ölkə adları həmişə qadın cinsinə aid edilir: "Azerbaijan is our country. She is an independent country."\n• Ölkə ərazi mənasında işləndikdə orta cinsə aid edilə bilər: "Its area is 84 square kilometres."\n• Həşəratlar, quşlar, balıqlar həmişə orta cinsə (it) aid edilir.',
    },

    // ── Mini-check: Gender ────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"actor" sözünün qadın cinsi necədir?',
          options: ['actoress', 'actress', 'actorness', 'actrice'],
          answer: 'actress',
        },
        {
          q: 'Ölkə adları hansı cinsə aid edilir?',
          options: ['Kişi cinsi (he)', 'Orta cins (it)', 'Qadın cinsi (she)', 'Cins yoxdur'],
          answer: 'Qadın cinsi (she)',
        },
        {
          q: 'Həşəratlar ingilis dilində hansı əvəzliklə əvəz edilir?',
          options: ['he', 'she', 'it', 'they'],
          answer: 'it',
        },
        {
          q: 'Qadın cinsi düzəldən şəkilçi hansıdır?',
          options: ['-er', '-ness', '-ess', '-ity'],
          answer: '-ess',
        },
        {
          q: '"Azerbaijan is our country. ___ is an independent country." — boşluğa nə gəlir?',
          options: ['He', 'It', 'She', 'They'],
          answer: 'She',
        },
      ],
    },

    // ── Ekran 6: Tam xülasə cədvəli ──────────────────────
    {
      type: 'lesson',
      title: 'Bölmə 2 — Tam xülasə',
      content: 'Bütün isim növlərini bir yerdə görək:',
      table: [
        ['Növ',          'Xüsusiyyət',                   'Nümunə'],
        ['Common noun',  'kiçik hərflə',                 'city, lake, peace'],
        ['Proper noun',  'böyük hərflə',                 'Baku, Monday, Sara'],
        ['Concrete',     'görünür, toxunulur',            'pen, bread, table'],
        ['Abstract',     'hiss edilir, görünmür',         'love, freedom, hate'],
        ['Countable',    'sayılır, cəmlənir, a/an alır',  'book → books'],
        ['Uncountable',  'sayılmır, a/an almır',          'milk, bread, water'],
      ],
      tip: 'Bir isim həm Proper, həm Concrete ola bilər: "Caspian Sea" — xüsusi ad, fiziki yer.',
    },
  ],
},

// ── Bölmə 2 — Ümumi Quiz ─────────────────────────────────
[
  // Common vs Proper
  { en: 'Baku',          tr: 'Proper noun',    wrong: 'Common noun'  },
  { en: 'a city',        tr: 'Common noun',    wrong: 'Proper noun'  },
  { en: 'January',       tr: 'Proper noun',    wrong: 'Common noun'  },
  { en: 'a lake',        tr: 'Common noun',    wrong: 'Proper noun'  },
  { en: 'Tuesday',       tr: 'Proper noun',    wrong: 'Common noun'  },
  { en: 'weather',       tr: 'Common noun',    wrong: 'Proper noun'  },

  // Concrete vs Abstract
  { en: 'happiness',     tr: 'Abstract',       wrong: 'Concrete'     },
  { en: 'a pen',         tr: 'Concrete',       wrong: 'Abstract'     },
  { en: 'freedom',       tr: 'Abstract',       wrong: 'Concrete'     },
  { en: 'a table',       tr: 'Concrete',       wrong: 'Abstract'     },
  { en: 'knowledge',     tr: 'Abstract',       wrong: 'Concrete'     },
  { en: 'bread',         tr: 'Concrete',       wrong: 'Abstract'     },

  // Countable vs Uncountable
  { en: 'milk',          tr: 'Uncountable',    wrong: 'Countable'    },
  { en: 'a book',        tr: 'Countable',      wrong: 'Uncountable'  },
  { en: 'water',         tr: 'Uncountable',    wrong: 'Countable'    },
  { en: 'a chair',       tr: 'Countable',      wrong: 'Uncountable'  },

  // many / much / few / little
  { en: 'Çox kitab → ____', tr: 'many books',  wrong: 'much books'   },
  { en: 'Çox süd → ____',   tr: 'much milk',   wrong: 'many milk'    },
  { en: 'Az pul → ____',    tr: 'little money',wrong: 'few money'    },
  { en: 'Az uşaq → ____',   tr: 'few children',wrong: 'little children' },

  // Abstract noun + sifət
  { en: 'a good ____',   tr: 'knowledge',      wrong: 'knowledges'   },
  { en: 'a hard ____',   tr: 'life',           wrong: 'lives'        },

  // Gender
  { en: 'actor → ____',  tr: 'actress',        wrong: 'actoress'     },
  { en: 'Ölkə → hansı əvəzlik?', tr: 'she',   wrong: 'it'           },
  { en: 'Həşərat → hansı əvəzlik?', tr: 'it', wrong: 'she'          },
  { en: 'lion → ____',   tr: 'lioness',        wrong: 'lionness'     },
],
     // ── Bölmə 3 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Bölmə 3 — Countable vs Uncountable · Much / Many / Few / Little',
      },

      // Dərs 3.1 — Countable nouns
      {
        type: 'grammar_lesson',
        title: 'Dərs 3.1 — Countable nouns',
        cards: [

          // ── Ekran 1: Countable — əsas qaydalar ──────────
          {
            type: 'lesson',
            title: 'Sayılan isimlər (Countable nouns)',
            content: 'Sayılan isimlər saymağın mümkün olduğu bütün isimlərdir.',
            table: [
              ['Xüsusiyyət',       'Nümunə'],
              ['Tək + a / an',     'a book, a student'],
              ['Cəm forması var',  'books, students'],
              ['"çox" → many',     'many books'],
              ['"az" → few',       'few students'],
              ['Fel cəm gəlir',    'Many books are here.'],
            ],
            tip: 'many və few-dan sonra isim cəm, fel də cəm gəlir.',
          },

          // ── Mini-check: Countable ────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: 'Countable isimlərlə "çox" mənasında hansı söz işlənir?',
                options: ['much', 'many', 'little', 'a lot'],
                answer: 'many',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'Few student is here.',
                  'Few students are here.',
                  'Few students is here.',
                  'A few student are here.',
                ],
                answer: 'Few students are here.',
              },
              {
                q: '"a book" — bu hansı növ isimdir?',
                options: ['Uncountable', 'Abstract', 'Countable', 'Proper noun'],
                answer: 'Countable',
              },
              {
                q: 'Countable isimlərlə "az" mənasında hansı söz işlənir?',
                options: ['little', 'much', 'few', 'less'],
                answer: 'few',
              },
              {
                q: '"Many teachers ___ this rule." — boşluğa nə gəlir?',
                options: ['knows', 'know', 'is knowing', 'has known'],
                answer: 'know',
              },
            ],
          },
        ],
      },

      // Dərs 3.2 — Uncountable nouns
      {
        type: 'grammar_lesson',
        title: 'Dərs 3.2 — Uncountable nouns',
        cards: [

          // ── Ekran 1: Uncountable — əsas qaydalar ────────
          {
            type: 'lesson',
            title: 'Sayılmayan isimlər (Uncountable nouns)',
            content: 'Sayılmayan isimlər say bildirməyən, bölünməz kimi qəbul edilən isimlərdir.',
            table: [
              ['Xüsusiyyət',          'Nümunə'],
              ['Cəm forması yoxdur',  'milk, water, bread'],
              ['a / an almır',        '❌ a milk, a water'],
              ['Rəqəm işlənmir',      '❌ 3 milks'],
              ['"çox" → much',        'much milk'],
              ['"az" → little',       'little butter'],
              ['Fel tək gəlir',       'Water is important.'],
            ],
            tip: 'Much time was wasted. — fel tək, isim tək.',
          },

          // ── Ekran 2: Qruplar — Maye, Ərzaq ─────────────
          {
            type: 'lesson',
            title: 'Sayılmayan isimlər — Qrup 1',
            content: 'Bu qruplar həmişə uncountable-dır:',
            table: [
              ['Qrup',      'Nümunələr'],
              ['Maye adları', 'water, milk, tea, coffee, juice, oil, wine'],
              ['Ərzaq adları', 'bread, butter, cheese, meat, rice, sugar, flour, salt'],
            ],
            tip: 'Bu isimlər qarşısında heç vaxt a / an işlənmir, cəmlənmir.',
          },

          // ── Ekran 3: Qruplar — Material, Metal, Digər ──
          {
            type: 'lesson',
            title: 'Sayılmayan isimlər — Qrup 2',
            content: 'Daha geniş uncountable qrupları:',
            table: [
              ['Qrup',          'Nümunələr'],
              ['Material adları', 'silk, cotton, wool, wood, paper, glass, marble'],
              ['Metal adları',    'iron, silver, gold, bronze'],
              ['Digər',           'advice, information, progress, traffic, knowledge,\nluggage, furniture, news, weather, money, work,\nrain, snow, sand, dust'],
            ],
            note: 'Diqqət: "news" görünüşcə cəm kimi görünür, amma tekdir: "The news is good."',
          },

          // ── Mini-check: Uncountable ──────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"furniture" hansı növ isimdir?',
                options: ['Countable', 'Uncountable', 'Proper noun', 'Abstract'],
                answer: 'Uncountable',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'The news are good.',
                  'The news is good.',
                  'A news is good.',
                  'Many news are good.',
                ],
                answer: 'The news is good.',
              },
              {
                q: '"rice" uncountable olduğu üçün necə işlənir?',
                options: [
                  'a rice, many rices',
                  'much rice, little rice',
                  'few rice, a rice',
                  'rices are, a rice is',
                ],
                answer: 'much rice, little rice',
              },
              {
                q: 'Hansı söz countable-dır?',
                options: ['luggage', 'sand', 'student', 'wool'],
                answer: 'student',
              },
              {
                q: '"Much time ___ wasted." — boşluğa nə gəlir?',
                options: ['were', 'are', 'was', 'have been'],
                answer: 'was',
              },
              {
                q: 'Aşağıdakılardan hansı uncountable-dır?',
                options: ['book', 'teacher', 'advice', 'student'],
                answer: 'advice',
              },
            ],
          },
        ],
      },

      // Dərs 3.3 — Much / Many / Few / Little / A lot of
      {
        type: 'grammar_lesson',
        title: 'Dərs 3.3 — Much · Many · Few · Little · A lot of',
        cards: [

          // ── Ekran 1: Müqayisə cədvəli ───────────────────
          {
            type: 'lesson',
            title: 'Much / Many / Few / Little — müqayisə',
            content: 'Bu dörd söz isim növünə görə fərqlənir:',
            table: [
              ['Söz',    'İsim növü',        'Məna', 'Nümunə'],
              ['many',   'countable (cəm)',  'çox',  'many books'],
              ['much',   'uncountable (tək)','çox',  'much water'],
              ['few',    'countable (cəm)',  'az',   'few students'],
              ['little', 'uncountable (tək)','az',   'little time'],
            ],
            tip: 'many / much — çox. few / little — az. Countable → many/few. Uncountable → much/little.',
          },

          // ── Ekran 2: A lot of — tam izah ────────────────
          {
            type: 'lesson',
            title: 'A lot of — nə vaxt işlənir?',
            content: '"a lot of" həm countable, həm uncountable, həm mücərrəd isimlərlə işlənir.\n\nAncaq yalnız TƏSDİQ cümlədə işlənir.',
            table: [
              ['Cümlə növü', 'Düzgün forma',              'Yanlış'],
              ['Təsdiq',     'There are a lot of cars.',   '—'],
              ['Sual',       'Are there many cars?',       '❌ a lot of cars?'],
              ['İnkar',      'There aren\'t many cars.',   '❌ a lot of cars.'],
            ],
            examples: [
              { word: 'A lot of students are in the yard.', az: 'countable → fel cəm' },
              { word: 'A lot of water is wasted.',          az: 'uncountable → fel tək' },
            ],
          },

          // ── Ekran 3: A lot (zərf) · A few / A little ───
          {
            type: 'lesson',
            title: 'A lot (zərf) · A few · A little',
            content: '"a lot" feldən SONRA gəlir — zərf olur, "of" işlənmir:',
            examples: [
              { word: 'He reads a lot.',   az: 'O çox oxuyur.' },
              { word: 'He reads much.',    az: 'Eyni məna.' },
            ],
            table: [
              ['İfadə',    'İsim növü',   'Məna',      'Çalar'],
              ['few',      'countable',   'az',        'mənfi — yetərsiz'],
              ['a few',    'countable',   'bir neçə',  'müsbət — var'],
              ['little',   'uncountable', 'az',        'mənfi — yetərsiz'],
              ['a little', 'uncountable', 'bir az',    'müsbət — var'],
            ],
            note: 'I have few books. I can\'t give you one.\nI have a few books. I can give you one.',
          },

          // ── Mini-check: Much/Many/Few/Little/A lot of ───
          {
            type: 'mini_check',
            questions: [
              {
                q: '"There isn\'t ___ time left." — boşluğa nə gəlir?',
                options: ['many', 'few', 'much', 'a lot of'],
                answer: 'much',
              },
              {
                q: '"I have ___ friends, so I feel lonely." — doğru variant?',
                options: ['a few', 'few', 'little', 'a little'],
                answer: 'few',
              },
              {
                q: '"Are there ___ students in the class?" — doğru variant?',
                options: ['much', 'a lot of', 'many', 'little'],
                answer: 'many',
              },
              {
                q: '"I have ___ money, I can help you." — doğru variant?',
                options: ['few', 'little', 'a few', 'a little'],
                answer: 'a little',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'Are there a lot of cars?',
                  'There are a lot of cars.',
                  'There aren\'t a lot of cars.',
                  'Is there a lot of cars?',
                ],
                answer: 'There are a lot of cars.',
              },
              {
                q: '"He speaks ___." — zərf kimi doğru variant?',
                options: ['much money', 'a lot of', 'a lot', 'many'],
                answer: 'a lot',
              },
              {
                q: '"A lot of information ___ ready." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have been'],
                answer: 'is',
              },
              {
                q: '"I have ___ books. I can give you one." — doğru variant?',
                options: ['few', 'little', 'a few', 'a little'],
                answer: 'a few',
              },
            ],
          },
        ],
      },

      // ── Bölmə 3 — Ümumi Quiz ────────────────────────────
      [
        // Countable vs Uncountable
        { en: 'student',     tr: 'Countable',   wrong: 'Uncountable' },
        { en: 'milk',        tr: 'Uncountable',  wrong: 'Countable'  },
        { en: 'furniture',   tr: 'Uncountable',  wrong: 'Countable'  },
        { en: 'book',        tr: 'Countable',    wrong: 'Uncountable' },
        { en: 'advice',      tr: 'Uncountable',  wrong: 'Countable'  },
        { en: 'teacher',     tr: 'Countable',    wrong: 'Uncountable' },
        { en: 'knowledge',   tr: 'Uncountable',  wrong: 'Countable'  },
        { en: 'rice',        tr: 'Uncountable',  wrong: 'Countable'  },

        // many / much / few / little
        { en: 'Çox kitab → ____',   tr: 'many books',   wrong: 'much books'   },
        { en: 'Çox su → ____',      tr: 'much water',   wrong: 'many water'   },
        { en: 'Az tələbə → ____',   tr: 'few students', wrong: 'little students' },
        { en: 'Az vaxt → ____',     tr: 'little time',  wrong: 'few time'     },

        // a few / a little
        { en: 'Bir neçə kitabım var → ____', tr: 'a few books',   wrong: 'few books'   },
        { en: 'Bir az pulum var → ____',     tr: 'a little money',wrong: 'little money' },

        // a lot of
        { en: 'Təsdiq: Çox maşın var → ____', tr: 'a lot of cars',  wrong: 'many cars'   },
        { en: 'Sual: Çox maşın var? → ____',  tr: 'many cars?',     wrong: 'a lot of cars?' },

        // fel uyğunluğu
        { en: 'A lot of water ___ wasted.',      tr: 'is',  wrong: 'are' },
        { en: 'A lot of students ___ in yard.',  tr: 'are', wrong: 'is'  },
        { en: 'Much time ___ wasted.',           tr: 'was', wrong: 'were'},
        { en: 'The news ___ good.',              tr: 'is',  wrong: 'are' },

        // zərf
        { en: 'O çox oxuyur → He reads ____',   tr: 'a lot',        wrong: 'a lot of'   },
      ],

     // ── Test 1 — Bölmə 1, 2, 3 yekun testi ─────────────
      [
        // Bölmə 1 — Quruluş
        { en: '"railway" hansı quruluş?',           tr: 'Compound noun',   wrong: 'Derivative noun' },
        { en: '"teacher" hansı quruluş?',           tr: 'Derivative noun', wrong: 'Simple noun'     },
        { en: '"rain" hansı quruluş?',              tr: 'Simple noun',     wrong: 'Compound noun'   },
        { en: '"toothbrush" hansı quruluş?',        tr: 'Compound noun',   wrong: 'Simple noun'     },
        { en: '"kindness" hansı quruluş?',          tr: 'Derivative noun', wrong: 'Compound noun'   },

        // Bölmə 1 — Şəkilçilər
        { en: 'teach → ____',                       tr: 'teacher',         wrong: 'teachness'       },
        { en: 'free → ____',                        tr: 'freedom',         wrong: 'freehood'        },
        { en: 'strong → ____',                      tr: 'strength',        wrong: 'strongness'      },
        { en: '"heroism" hansı şəkilçi?',           tr: '-ism',            wrong: '-hood'           },
        { en: '"darkness" hansı şəkilçi?',          tr: '-ness',           wrong: '-dom'            },
        { en: '"friendship" hansı şəkilçi?',        tr: '-ship',           wrong: '-ism'            },
        { en: 'develop → ____',                     tr: 'development',     wrong: 'developness'     },

        // Bölmə 2 — Common / Proper
        { en: '"August" hansı növ?',                tr: 'Proper noun',     wrong: 'Common noun'     },
        { en: '"a lake" hansı növ?',                tr: 'Common noun',     wrong: 'Proper noun'     },
        { en: '"Tuesday" hansı növ?',               tr: 'Proper noun',     wrong: 'Common noun'     },

        // Bölmə 2 — Concrete / Abstract
        { en: '"happiness" hansı növ?',             tr: 'Abstract',        wrong: 'Concrete'        },
        { en: '"a table" hansı növ?',               tr: 'Concrete',        wrong: 'Abstract'        },
        { en: '"freedom" hansı növ?',               tr: 'Abstract',        wrong: 'Concrete'        },

        // Bölmə 2 — Artıkl qaydası
        { en: '"a terrible storm" — artıkl niyə?',  tr: 'Sifət var',       wrong: 'Countable-dır'   },
        { en: '"___ hard life" — boşluğa nə?',      tr: 'a',               wrong: 'the'             },
        { en: 'actor → ____',                       tr: 'actress',         wrong: 'actoress'        },

        // Bölmə 3 — Countable / Uncountable
        { en: 'Hansı countable-dır?',               tr: 'student',         wrong: 'furniture'       },
        { en: 'Hansı uncountable-dır?',             tr: 'advice',          wrong: 'book'            },
        { en: '"rice" hansı növ?',                  tr: 'Uncountable',     wrong: 'Countable'       },
        { en: 'The news ___ good.',                 tr: 'is',              wrong: 'are'             },

        // Bölmə 3 — Many / Much / Few / Little
        { en: 'Çox kitab → ____',                   tr: 'many books',      wrong: 'much books'      },
        { en: 'Az vaxt → ____',                     tr: 'little time',     wrong: 'few time'        },
        { en: 'There isn\'t ___ time.',             tr: 'much',            wrong: 'many'            },
        { en: 'Are there ___ students?',            tr: 'many',            wrong: 'much'            },

        // Bölmə 3 — A few / A little
        { en: 'Pulum var, kömək edərəm → ____',     tr: 'a little money',  wrong: 'little money'    },
        { en: 'Kitabım var, verə bilərəm → ____',   tr: 'a few books',     wrong: 'few books'       },

        // Bölmə 3 — A lot of / A lot
        { en: 'There is ___ information.',          tr: 'a lot of',        wrong: 'many'            },
        { en: 'He speaks ____.',                    tr: 'a lot',           wrong: 'a lot of'        },
        { en: 'Sual cümləsində → ____',             tr: 'many cars?',      wrong: 'a lot of cars?'  },
        { en: 'A lot of water ___ wasted.',         tr: 'is',              wrong: 'are'             },
      ],

 
   // ── Bölmə 4 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Bölmə 4 — Kollektiv isimlər · Topluluq bildirən isimlər',
      },

      // Dərs 4.1 — Collective nouns
      {
        type: 'grammar_lesson',
        title: 'Dərs 4.1 — Collective nouns: family, crowd, crew',
        cards: [

          // ── Ekran 1: Kollektiv isimlər ───────────────────
          {
            type: 'lesson',
            title: 'Kollektiv isimlər (Collective nouns)',
            content: 'Kollektiv isimlər bir ad altında bir neçə nəfər və ya əşyanı bildirən isimlərdir.',
            examples: [
              { word: 'family',  az: 'ailə' },
              { word: 'crowd',   az: 'izdiham' },
              { word: 'company', az: 'şirkət, dəstə' },
              { word: 'crew',    az: 'ekipaj, heyət' },
            ],
            tip: 'Kollektiv isimlər sayılan isimlərdir — tək və cəm olurlar. Cəm olduqda fel də cəm gəlir.',
          },

          // ── Mini-check: Kollektiv isimlər ───────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: 'Kollektiv isimlər hansı növ isimdir?',
                options: ['Sayılmayan', 'Sayılan', 'Mücərrəd', 'Xüsusi'],
                answer: 'Sayılan',
              },
              {
                q: '"The crowds ___ enormous." — boşluğa nə gəlir?',
                options: ['was', 'is', 'were', 'has been'],
                answer: 'were',
              },
              {
                q: 'Hansı söz kollektiv isimdir?',
                options: ['happiness', 'crew', 'milk', 'Monday'],
                answer: 'crew',
              },
            ],
          },

          // ── Ekran 2: Family qaydası ──────────────────────
          {
            type: 'lesson',
            title: 'Family — tək mi, cəm mi?',
            content: '"family" sözü digər kollektiv isimlərdən fərqli olaraq həm tək, həm cəm fel ala bilir.\n\nQayda:\n• Ailə bütövlükdə götürülərsə → fel təkdə olur\n• Ailənin üzvləri ayrı-ayrılıqda götürülərsə → fel cəmdə olur',
            examples: [
              { word: 'My family is large.',         az: 'ailə bir bütün kimi' },
              { word: 'My family are early risers.', az: 'hər bir üzv ayrıca' },
            ],
            note: 'Hər iki halda da "family" sözü cəmlik şəkilçisi almır — yəni bu kontekstdə "families" forması işlənmir.',
          },

          // ── Mini-check: Family ───────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"My family ___ large." — ailə bir bütün kimi. Boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have'],
                answer: 'is',
              },
              {
                q: '"My family ___ early risers." — hər üzv ayrıca. Boşluğa nə gəlir?',
                options: ['is', 'was', 'has', 'are'],
                answer: 'are',
              },
              {
                q: '"families" forması bu kontekstdə işlənirmi?',
                options: ['Bəli, həmişə', 'Xeyr, işlənmir', 'Bəli, bəzən', 'Yalnız cəmdə'],
                answer: 'Xeyr, işlənmir',
              },
            ],
          },

          // ── Ekran 3: Police, Cattle, Poultry ────────────
          {
            type: 'lesson',
            title: 'Police · Cattle · Poultry',
            content: 'Bu isimlər cəm şəkilçisi qəbul etmir, lakin həmişə cəmlik bildirir və özündən sonra həmişə cəm fel tələb edir.',
            table: [
              ['İsim',    'Mənası',     'Fel'],
              ['police',  'polis',      'həmişə cəm'],
              ['cattle',  'mal-qara',   'həmişə cəm'],
              ['poultry', 'ev quşları', 'həmişə cəm'],
            ],
            examples: [
              { word: 'The police were there.',                  az: '✅' },
              { word: 'The cattle were grazing in the meadow.', az: '✅' },
              { word: 'The poultry are kept in the barn.',       az: '✅' },
            ],
            note: 'Bu isimlərə a / an artiklı işlənmir, cəm şəkilçisi də almırlar.',
          },

          // ── Mini-check: Police/Cattle/Poultry ───────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"The police ___ there." — boşluğa nə gəlir?',
                options: ['was', 'is', 'were', 'has been'],
                answer: 'were',
              },
              {
                q: 'Bu isimlər cəm şəkilçisi alırmı?',
                options: ['Bəli', 'Xeyr', 'Bəzən', 'Yalnız "police"'],
                answer: 'Xeyr',
              },
              {
                q: '"a cattle" forması düzgündürmü?',
                options: ['Bəli', 'Xeyr, a / an işlənmir', 'Bəli, tək halda', 'Bəzən işlənir'],
                answer: 'Xeyr, a / an işlənmir',
              },
            ],
          },

        ],
      },

      // Dərs 4.2 — People, Money, Youth, Linen
      {
        type: 'grammar_lesson',
        title: 'Dərs 4.2 — People · Money · Youth · Linen',
        cards: [

          // ── Ekran 1: People ──────────────────────────────
          {
            type: 'lesson',
            title: 'People — xüsusi qayda',
            content: '"people" ismi həmişə cəmdir və özündən sonra həmişə cəm fel gəlir.',
            examples: [
              { word: 'People are strange sometimes.',     az: 'cəm fel' },
              { word: 'Many people were at the concert.', az: 'cəm fel' },
            ],
            note: 'İstisna: "people" xalq mənasında işləndikdə tək olur və -s şəkilçisi qəbul edə bilir.\n• The people of Azerbaijan — Azərbaycan xalqı (tək)\n• The peoples of the world — dünyanın xalqları (bir neçə xalq, cəm)',
          },

          // ── Mini-check: People ───────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"People ___ strange sometimes." — boşluğa nə gəlir?',
                options: ['is', 'was', 'are', 'has'],
                answer: 'are',
              },
              {
                q: '"peoples" forması nə vaxt işlənir?',
                options: ['Həmişə', 'Heç vaxt', 'Bir neçə xalq mənasında', 'Yalnız sual cümlədə'],
                answer: 'Bir neçə xalq mənasında',
              },
              {
                q: '"The people of Azerbaijan" — burada "people" hansı mənadadır?',
                options: ['İnsanlar (cəm)', 'Xalq (tək)', 'Dəstə', 'Kollektiv isim'],
                answer: 'Xalq (tək)',
              },
            ],
          },

          // ── Ekran 2: Money, Youth, Linen ─────────────────
          {
            type: 'lesson',
            title: 'Money · Youth · Linen',
            content: 'Bu isimlər görünüşcə cəm kimi görünə bilər, lakin həmişə tək formada işlənir və tək fel tələb edir.',
            table: [
              ['İsim',  'Mənası',        'Qayda'],
              ['money', 'pul',           'həmişə tək'],
              ['youth', 'gənclik',       'həmişə tək'],
              ['linen', 'mələfə, kətan', 'həmişə tək'],
            ],
            examples: [
              { word: 'Money makes money.',    az: 'tək fel' },
              { word: 'Much money was spent.', az: 'much ilə — uncountable kimi' },
            ],
            tip: '"çox" mənasında much, "az" mənasında little ilə işlənir. Sayılmır.',
          },

          // ── Mini-check: Money/Youth/Linen ────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Money ___ money." — boşluğa nə gəlir?',
                options: ['make', 'are making', 'makes', 'have made'],
                answer: 'makes',
              },
              {
                q: '"money" ilə "çox" mənasında hansı söz işlənir?',
                options: ['many', 'few', 'much', 'a few'],
                answer: 'much',
              },
              {
                q: '"money" sayılırmı?',
                options: ['Bəli', 'Xeyr', 'Bəzən', 'Yalnız cəmdə'],
                answer: 'Xeyr',
              },
              {
                q: 'Hansı söz həmişə tək formada işlənir?',
                options: ['crowd', 'crew', 'youth', 'family'],
                answer: 'youth',
              },
            ],
          },

        ],
      },

      // ── Bölmə 4 — Ümumi Quiz ─────────────────────────────
      [
        { en: 'crowd',   tr: 'Kollektiv isim', wrong: 'Mücərrəd isim' },
        { en: 'family',  tr: 'Kollektiv isim', wrong: 'Sayılmayan'    },
        { en: 'crew',    tr: 'Kollektiv isim', wrong: 'Xüsusi isim'   },

        { en: 'The crowds ___ enormous.',              tr: 'were',  wrong: 'was'  },
        { en: 'My family ___ large. (bir bütün)',      tr: 'is',    wrong: 'are'  },
        { en: 'My family ___ early risers. (üzvlər)', tr: 'are',   wrong: 'is'   },
        { en: 'The police ___ there.',                 tr: 'were',  wrong: 'was'  },
        { en: 'The cattle ___ grazing.',               tr: 'were',  wrong: 'was'  },
        { en: 'People ___ strange sometimes.',         tr: 'are',   wrong: 'is'   },
        { en: 'Money ___ money.',                      tr: 'makes', wrong: 'make' },

        { en: '"a cattle" düzgündürmü?',        tr: 'Xeyr', wrong: 'Bəli' },
        { en: '"polices" forması düzgündürmü?', tr: 'Xeyr', wrong: 'Bəli' },

        { en: 'The peoples of the world — nə mənada?', tr: 'Bir neçə xalq',    wrong: 'İnsanlar' },
        { en: 'The people of Azerbaijan — nə mənada?', tr: 'Azərbaycan xalqı', wrong: 'İnsanlar' },

        { en: 'money — "çox" mənasında ____', tr: 'much money',   wrong: 'many money' },
        { en: 'money — "az" mənasında ____',  tr: 'little money', wrong: 'few money'  },
        { en: 'youth',  tr: 'həmişə tək', wrong: 'həmişə cəm' },
        { en: 'linen',  tr: 'həmişə tək', wrong: 'həmişə cəm' },
        { en: 'police', tr: 'həmişə cəm', wrong: 'həmişə tək' },
        { en: 'cattle', tr: 'həmişə cəm', wrong: 'həmişə tək' },
      ],

   // ── Bölmə 5 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Bölmə 5 — Plural nouns (Cəm formaları) — tam qaydalar',
      },

      // Dərs 5.1 — -s / -es qaydası
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.1 — -s / -es qaydası',
        cards: [

          // ── Ekran 1: Əsas qayda ──────────────────────────
          {
            type: 'lesson',
            title: 'Cəm formasının düzəldilməsi',
            content: 'İsimlərin cəm forması əsasən –s və ya –es şəkilçisi vasitəsilə düzəldilir.\n\nAdi qayda → -s əlavə et:',
            examples: [
              { word: 'a boy → boys',   az: '' },
              { word: 'a girl → girls', az: '' },
              { word: 'a pen → pens',   az: '' },
            ],
            tip: 'Sonu s, ss, sh, ch, tch, x, z, o hərfləri ilə bitən isimlərin cəmi -es ilə düzəlir.',
          },

          // ── Ekran 2: -es cədvəli ─────────────────────────
          {
            type: 'lesson',
            title: '-es əlavə edilən hallar',
            content: 'Sonu aşağıdakı hərflərlə bitən isimlər -es alır:',
            table: [
              ['Tək',     'Cəm'],
              ['a box',   'boxes'],
              ['a bench', 'benches'],
              ['a bus',   'buses'],
              ['a bush',  'bushes'],
              ['a watch', 'watches'],
            ],
          },

          // ── Mini-check: -s / -es ─────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"box" sözünün cəmi necədir?',
                options: ['boxs', 'boxes', 'boxies', 'boxen'],
                answer: 'boxes',
              },
              {
                q: '"bench" sözünün cəmi necədir?',
                options: ['benchs', 'benchies', 'benches', 'benchens'],
                answer: 'benches',
              },
              {
                q: '"pen" sözünün cəmi necədir?',
                options: ['penes', 'pens', 'penies', 'pensen'],
                answer: 'pens',
              },
              {
                q: 'Hansı sözün cəmi -es ilə düzəlir?',
                options: ['boy', 'girl', 'watch', 'pen'],
                answer: 'watch',
              },
              {
                q: '"bus" sözünün cəmi necədir?',
                options: ['buss', 'busies', 'bus', 'buses'],
                answer: 'buses',
              },
            ],
          },
        ],
      },

      // Dərs 5.2 — Qaydasız cəm formaları
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.2 — Qaydasız cəm formaları',
        cards: [

          // ── Ekran 1: 7 qaydasız isim ─────────────────────
          {
            type: 'lesson',
            title: 'Kökdəki saitin dəyişməsi ilə cəm',
            content: 'İngilis dilində 7 isim var ki, onların cəm forması kökdəki saitin dəyişməsi ilə düzəlir. Bunları əzbərləmək lazımdır.',
            table: [
              ['Tək',     'Cəm',      'Tələffüz'],
              ['a man',   'men',      '[men]'],
              ['a woman', 'women',    '[wimin]'],
              ['a foot',  'feet',     '[fiːt]'],
              ['a tooth', 'teeth',    '[tiːθ]'],
              ['a goose', 'geese',    '[giːs]'],
              ['a mouse', 'mice',     '[mais]'],
              ['a louse', 'lice',     '[lais]'],
            ],
            note: 'Bir isim isə həm kök saiti dəyişir, həm də -en şəkilçisi alır: a child → children',
          },

          // ── Mini-check: Qaydasız cəm ─────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"man" sözünün cəmi necədir?',
                options: ['mans', 'manes', 'men', 'menn'],
                answer: 'men',
              },
              {
                q: '"tooth" sözünün cəmi necədir?',
                options: ['tooths', 'toothes', 'teeths', 'teeth'],
                answer: 'teeth',
              },
              {
                q: '"child" sözünün cəmi necədir?',
                options: ['childs', 'childes', 'children', 'childen'],
                answer: 'children',
              },
              {
                q: '"mouse" sözünün cəmi necədir?',
                options: ['mouses', 'mices', 'mice', 'mouse'],
                answer: 'mice',
              },
              {
                q: '"foot" sözünün cəmi necədir?',
                options: ['foots', 'footes', 'feets', 'feet'],
                answer: 'feet',
              },
            ],
          },
        ],
      },

      // Dərs 5.3 — Man/Woman olan mürəkkəb isimlər
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.3 — Man/Woman olan mürəkkəb isimlər',
        cards: [

          // ── Ekran 1: Postman → Postmen ───────────────────
          {
            type: 'lesson',
            title: 'Postman → Postmen',
            content: 'Tərkibində man və ya woman sözü olan mürəkkəb isimlərin cəmini düzəldərkən man → men, woman → women olur.',
            table: [
              ['Tək',           'Cəm'],
              ['postman',       'postmen'],
              ['policeman',     'policemen'],
              ['woman writer',  'women writers'],
              ['woman doctor',  'women doctors'],
            ],
            note: 'Vacib istisna: Tərkibində "man" morfemi olan bəzi sözlər bu qaydaya tabe olmur — onların cəmi adi -s ilə düzəlir:\n• German → Germans\n• Roman → Romans\n• Norman → Normans',
          },

          // ── Mini-check: Man/Woman ─────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"postman" sözünün cəmi necədir?',
                options: ['postmans', 'postmens', 'postmen', 'postmanes'],
                answer: 'postmen',
              },
              {
                q: '"German" sözünün cəmi necədir?',
                options: ['Germaen', 'Germanen', 'Germens', 'Germans'],
                answer: 'Germans',
              },
              {
                q: '"woman doctor" sözünün cəmi necədir?',
                options: ['woman doctors', 'women doctor', 'women doctors', 'womans doctors'],
                answer: 'women doctors',
              },
              {
                q: 'Nə üçün "Roman" → "Romans" olur, "Romanmen" yox?',
                options: [
                  'Çünki qaydasız isimdir',
                  'Çünki "man" burada ayrı morfem deyil',
                  'Çünki xüsusi isimdir',
                  'Çünki -es alır',
                ],
                answer: 'Çünki "man" burada ayrı morfem deyil',
              },
            ],
          },
        ],
      },

      // Dərs 5.4 — -f / -fe ilə bitən isimlər
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.4 — -f / -fe → -ves',
        cards: [

          // ── Ekran 1: Wife → Wives ─────────────────────────
          {
            type: 'lesson',
            title: 'Wife → Wives',
            content: 'İsim -f və ya -fe ilə bitirsə, cəm düzəldərkən f / fe → v olur və -es əlavə edilir.',
            table: [
              ['Tək',   'Cəm',    'Tələffüz'],
              ['wife',  'wives',  '[waivz]'],
              ['knife', 'knives', '[naivz]'],
              ['leaf',  'leaves', '[liːvz]'],
              ['loaf',  'loaves', '[louvz]'],
              ['half',  'halves', '[hɑːvz]'],
              ['life',  'lives',  '[laivz]'],
              ['wolf',  'wolves', '[wulvz]'],
              ['shelf', 'shelves','[ʃelvz]'],
            ],
          },

          // ── Ekran 2: İstisnalar ───────────────────────────
          {
            type: 'lesson',
            title: '-f / -ff dəyişməyən istisnalar',
            content: 'Bu sözlər -f / -ff ilə bitsə də dəyişmir, sadəcə -s alır:',
            table: [
              ['Tək',           'Cəm'],
              ['a roof',        'roofs'],
              ['a chief',       'chiefs'],
              ['a cliff',       'cliffs'],
              ['a handkerchief','handkerchiefs'],
            ],
            note: 'İki forması olan isimlər:\n• hoof → hoofs / hooves\n• scarf → scarfs / scarves',
          },

          // ── Mini-check: -f/-fe ───────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"wife" sözünün cəmi necədir?',
                options: ['wifes', 'wifes', 'wives', 'wiven'],
                answer: 'wives',
              },
              {
                q: '"roof" sözünün cəmi necədir?',
                options: ['rooves', 'roofen', 'roofes', 'roofs'],
                answer: 'roofs',
              },
              {
                q: '"leaf" sözünün cəmi necədir?',
                options: ['leafs', 'leafes', 'leaves', 'leaven'],
                answer: 'leaves',
              },
              {
                q: '"shelf" sözünün cəmi necədir?',
                options: ['shelfs', 'shelfes', 'shelves', 'shelfen'],
                answer: 'shelves',
              },
              {
                q: '"chief" sözünün cəmi necədir?',
                options: ['chieves', 'chiefen', 'chiefes', 'chiefs'],
                answer: 'chiefs',
              },
            ],
          },
        ],
      },

      // Dərs 5.5 — -o ilə bitən isimlər
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.5 — -o → -oes: potato, hero',
        cards: [

          // ── Ekran 1: -oes qaydası ─────────────────────────
          {
            type: 'lesson',
            title: 'Potato → Potatoes',
            content: 'İsim -o hərfi ilə bitirsə cəmi -es ilə düzəlir:',
            table: [
              ['Tək',      'Cəm'],
              ['potato',   'potatoes'],
              ['hero',     'heroes'],
              ['negro',    'negroes'],
              ['tomato',   'tomatoes'],
              ['volcano',  'volcanoes'],
            ],
          },

          // ── Ekran 2: İstisnalar ───────────────────────────
          {
            type: 'lesson',
            title: '-o istisnalar — yalnız -s alır',
            content: 'Əcnəbi mənşəli (xüsusilə musiqi, texnologiya) sözlər adətən yalnız -s alır:',
            table: [
              ['Tək',    'Cəm'],
              ['radio',  'radios'],
              ['piano',  'pianos'],
              ['solo',   'solos'],
              ['zero',   'zeros'],
              ['photo',  'photos'],
              ['zoo',    'zoos'],
              ['video',  'videos'],
            ],
            tip: 'Əzbərləmə qaydası: Əcnəbi mənşəli sözlər adətən yalnız -s alır.',
          },

          // ── Mini-check: -o ───────────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"potato" sözünün cəmi necədir?',
                options: ['potatos', 'potatoies', 'potatoes', 'potatens'],
                answer: 'potatoes',
              },
              {
                q: '"radio" sözünün cəmi necədir?',
                options: ['radioes', 'radien', 'radios', 'radioies'],
                answer: 'radios',
              },
              {
                q: '"hero" sözünün cəmi necədir?',
                options: ['heros', 'heroies', 'heroen', 'heroes'],
                answer: 'heroes',
              },
              {
                q: '"piano" sözünün cəmi necədir?',
                options: ['pianoes', 'pianoen', 'pianos', 'pianoies'],
                answer: 'pianos',
              },
              {
                q: 'Hansı söz -es ilə cəmlənir?',
                options: ['radio', 'video', 'tomato', 'photo'],
                answer: 'tomato',
              },
            ],
          },
        ],
      },

      // Dərs 5.6 — -y qaydası
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.6 — -y qaydası: city→cities, day→days',
        cards: [

          // ── Ekran 1: Samit + y ────────────────────────────
          {
            type: 'lesson',
            title: 'City → Cities · Day → Days',
            content: 'İsim -y ilə bitirsə iki variant var:\n\n1. y-dən əvvəl SAMİT gələrsə → y → i olur, -es əlavə edilir:',
            table: [
              ['Tək',      'Cəm'],
              ['city',     'cities'],
              ['family',   'families'],
              ['factory',  'factories'],
              ['victory',  'victories'],
              ['baby',     'babies'],
              ['lady',     'ladies'],
            ],
          },

          // ── Ekran 2: Sait + y ─────────────────────────────
          {
            type: 'lesson',
            title: 'Sait + y → sadəcə -s',
            content: '2. y-dən əvvəl SAİT gələrsə → y dəyişmir, sadəcə -s əlavə edilir:',
            table: [
              ['Tək',      'Cəm'],
              ['a day',    'days'],
              ['a boy',    'boys'],
              ['a toy',    'toys'],
              ['a key',    'keys'],
              ['a monkey', 'monkeys'],
            ],
            tip: 'Qayda: samit + y → -ies. Sait + y → -s.',
          },

          // ── Mini-check: -y qaydası ───────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"city" sözünün cəmi necədir?',
                options: ['citys', 'cityies', 'cities', 'cityes'],
                answer: 'cities',
              },
              {
                q: '"day" sözünün cəmi necədir?',
                options: ['daies', 'dayes', 'daies', 'days'],
                answer: 'days',
              },
              {
                q: '"baby" sözünün cəmi necədir?',
                options: ['babys', 'babyies', 'babies', 'babyes'],
                answer: 'babies',
              },
              {
                q: '"monkey" sözünün cəmi necədir?',
                options: ['monkies', 'monkeies', 'monkeys', 'monkeyes'],
                answer: 'monkeys',
              },
              {
                q: '"factory" sözünün cəmi necədir?',
                options: ['factorys', 'factoryies', 'factories', 'factoryes'],
                answer: 'factories',
              },
            ],
          },
        ],
      },

      // ── Bölmə 5 — Ümumi Quiz ─────────────────────────────
      [
        // -s / -es
        { en: 'box → ____',   tr: 'boxes',   wrong: 'boxs'    },
        { en: 'pen → ____',   tr: 'pens',    wrong: 'penes'   },
        { en: 'watch → ____', tr: 'watches', wrong: 'watchs'  },
        { en: 'bus → ____',   tr: 'buses',   wrong: 'buss'    },
        { en: 'bench → ____', tr: 'benches', wrong: 'benchs'  },

        // Qaydasız cəm
        { en: 'man → ____',   tr: 'men',      wrong: 'mans'    },
        { en: 'tooth → ____', tr: 'teeth',    wrong: 'tooths'  },
        { en: 'child → ____', tr: 'children', wrong: 'childs'  },
        { en: 'mouse → ____', tr: 'mice',     wrong: 'mouses'  },
        { en: 'foot → ____',  tr: 'feet',     wrong: 'foots'   },
        { en: 'goose → ____', tr: 'geese',    wrong: 'gooses'  },

        // Man/Woman mürəkkəb
        { en: 'postman → ____',      tr: 'postmen',      wrong: 'postmans'     },
        { en: 'policeman → ____',    tr: 'policemen',    wrong: 'policemans'   },
        { en: 'woman doctor → ____', tr: 'women doctors',wrong: 'woman doctors'},
        { en: 'German → ____',       tr: 'Germans',      wrong: 'Germens'      },

        // -f / -fe
        { en: 'wife → ____',  tr: 'wives',  wrong: 'wifes'  },
        { en: 'leaf → ____',  tr: 'leaves', wrong: 'leafs'  },
        { en: 'roof → ____',  tr: 'roofs',  wrong: 'rooves' },
        { en: 'shelf → ____', tr: 'shelves',wrong: 'shelfs' },
        { en: 'chief → ____', tr: 'chiefs', wrong: 'chieves'},

        // -o
        { en: 'potato → ____', tr: 'potatoes', wrong: 'potatos' },
        { en: 'radio → ____',  tr: 'radios',   wrong: 'radioes' },
        { en: 'hero → ____',   tr: 'heroes',   wrong: 'heros'   },
        { en: 'piano → ____',  tr: 'pianos',   wrong: 'pianoes' },

        // -y
        { en: 'city → ____',    tr: 'cities',   wrong: 'citys'    },
        { en: 'day → ____',     tr: 'days',     wrong: 'daies'    },
        { en: 'baby → ____',    tr: 'babies',   wrong: 'babys'    },
        { en: 'monkey → ____',  tr: 'monkeys',  wrong: 'monkies'  },
        { en: 'factory → ____', tr: 'factories',wrong: 'factorys' },
      ],

      // ── Bölmə 6 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Bölmə 6 — Xüsusi cəm halları',
      },

      // Dərs 6.1 — Yalnız tək formada işlənən isimlər
      {
        type: 'grammar_lesson',
        title: 'Dərs 6.1 — Yalnız tək formada işlənən isimlər',
        cards: [

          // ── Ekran 1: Giriş ───────────────────────────────
          {
            type: 'lesson',
            title: 'Həmişə tək — advice, information və başqaları',
            content: 'İngilis dilində bəzi isimlər var ki, onlar heç vaxt cəmlənmir, həmişə tək formada işlənir.\n\n• a / an artiklı ilə işlənmir\n• Özündən sonra fel təkdə gəlir\n• Çox mənasında much, az mənasında little işlənir',
            table: [
              ['İsim',        'Mənası'],
              ['advice',      'məsləhət'],
              ['information', 'məlumat'],
              ['progress',    'nailiyyət, tərəqqi'],
              ['traffic',     'nəqliyyat'],
              ['knowledge',   'bilik'],
              ['luggage',     'yük, baqaj'],
              ['baggage',     'yük, baqaj'],
              ['furniture',   'mebel'],
            ],
            examples: [
              { word: 'Can you give me some advice?',  az: '✅ düzgün' },
              { word: 'Can you give me some advices?', az: '❌ yanlış' },
              { word: 'Much information is needed.',   az: 'much + tək fel' },
              { word: 'Little progress was made.',     az: 'little + tək fel' },
            ],
          },

          // ── Mini-check: Həmişə tək (1) ───────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"advice" sözünün cəm forması varmı?',
                options: ['Bəli, advices', 'Xeyr, cəmlənmir', 'Bəli, advicen', 'Bəzən işlənir'],
                answer: 'Xeyr, cəmlənmir',
              },
              {
                q: '"information" ilə "çox" mənasında hansı söz işlənir?',
                options: ['many', 'few', 'much', 'a few'],
                answer: 'much',
              },
              {
                q: '"Much progress ___ made." — boşluğa nə gəlir?',
                options: ['were', 'are', 'was', 'have been'],
                answer: 'was',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'Can you give me some advices?',
                  'Can you give me some advice?',
                  'Can you give me an advice?',
                  'Can you give me a advice?',
                ],
                answer: 'Can you give me some advice?',
              },
              {
                q: '"furniture" hansı növ isimdir?',
                options: ['Countable', 'Proper noun', 'Uncountable', 'Collective'],
                answer: 'Uncountable',
              },
            ],
          },

          // ── Ekran 2: Hair və Fruit ───────────────────────
          {
            type: 'lesson',
            title: 'Hair · Fruit — xüsusi qaydalar',
            content: 'Bu iki ismin ayrıca qaydasına diqqət etmək lazımdır.',
            examples: [
              { word: 'Her hair is beautiful.',  az: 'hair — həmişə tək' },
              { word: 'His hair is short.',      az: 'tək fel — "is"' },
              { word: 'I like fruit.',           az: 'fruit — ümumi mənada tək' },
              { word: 'Fruit is useful.',        az: 'tək fel — "is"' },
            ],
            note: 'İstisna: "fruit" müxtəlif növ meyvələr mənasında işləndikdə cəm forması işlənə bilər:\nThere are a lot of fruits in our garden.\n— Bağımızda çoxlu (növ) meyvə var.',
          },

          // ── Mini-check: Hair / Fruit ─────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Her hair ___ beautiful." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have'],
                answer: 'is',
              },
              {
                q: '"fruits" forması nə vaxt işlənə bilər?',
                options: [
                  'Həmişə',
                  'Heç vaxt',
                  'Müxtəlif növ meyvələr mənasında',
                  'Yalnız sual cümlədə',
                ],
                answer: 'Müxtəlif növ meyvələr mənasında',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'Fruit are useful.',
                  'Fruits is useful.',
                  'Fruit is useful.',
                  'A fruit is useful.',
                ],
                answer: 'Fruit is useful.',
              },
            ],
          },
        ],
      },

      // Dərs 6.2 — Yalnız cəm formada işlənən isimlər
      {
        type: 'grammar_lesson',
        title: 'Dərs 6.2 — Yalnız cəm formada işlənən isimlər',
        cards: [

          // ── Ekran 1: Scissors, Trousers və s. ───────────
          {
            type: 'lesson',
            title: 'Həmişə cəm — scissors, trousers və başqaları',
            content: 'Bəzi isimlər həmişə cəm formada işlənir — sonunda –s var, tək forması yoxdur və həmişə cəm fel tələb edir.\n\nİki eyni hissədən ibarət olanlar:',
            table: [
              ['İsim',       'Mənası'],
              ['scissors',   'qayçı'],
              ['tongs',      'kəlbətin'],
              ['spectacles', 'eynək'],
              ['glasses',    'eynək, durbin'],
              ['scales',     'tərəzi'],
              ['trousers',   'şalvar'],
              ['jeans',      'cins şalvar'],
              ['tights',     'kolqotka'],
              ['pyjamas',    'pijama'],
              ['shorts',     'şort'],
              ['shoes',      'ayaqqabı'],
              ['gloves',     'əlcək'],
              ['mittens',    'tək barmaq əlcək'],
              ['boots',      'çəkmə'],
              ['socks',      'corab'],
              ['stockings',  'uzun corab'],
            ],
          },

          // ── Ekran 2: Digər həmişə cəm isimlər ───────────
          {
            type: 'lesson',
            title: 'Konkret əşya bildirən həmişə cəm isimlər',
            content: 'Bəzi konkret əşya bildirən isimlər də həmişə cəmdir:',
            table: [
              ['İsim',    'Mənası'],
              ['goods',   'mal, əmtəə'],
              ['stairs',  'pilləkən'],
              ['clothes', 'paltar'],
            ],
            examples: [
              { word: 'Where are my scissors?',  az: '✅ düzgün' },
              { word: 'Where is my scissors?',   az: '❌ yanlış' },
              { word: 'These trousers are new.', az: '✅ cəm fel' },
              { word: 'The clothes are clean.',  az: '✅ cəm fel' },
            ],
          },

          // ── Mini-check: Həmişə cəm (1) ───────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Where ___ my scissors?" — boşluğa nə gəlir?',
                options: ['is', 'was', 'are', 'has'],
                answer: 'are',
              },
              {
                q: '"These trousers ___ new." — boşluğa nə gəlir?',
                options: ['is', 'was', 'are', 'has been'],
                answer: 'are',
              },
              {
                q: 'Hansı isim həmişə cəm formada işlənir?',
                options: ['advice', 'furniture', 'scissors', 'information'],
                answer: 'scissors',
              },
              {
                q: '"clothes" sözü necə işlənir?',
                options: ['Həmişə tək', 'Həmişə cəm', 'Həm tək, həm cəm', 'Sayılmayan'],
                answer: 'Həmişə cəm',
              },
              {
                q: 'Hansı cümlə düzgündür?',
                options: [
                  'My jeans is blue.',
                  'My jeans are blue.',
                  'My jeans was blue.',
                  'A jeans is blue.',
                ],
                answer: 'My jeans are blue.',
              },
            ],
          },

          // ── Ekran 3: A pair of ───────────────────────────
          {
            type: 'lesson',
            title: 'A pair of — bir ədəd mənasında',
            content: 'Həmişə cəm olan bu isimlər bir ədəd mənasında işlənəndə "a pair of" ifadəsi ilə verilir.',
            examples: [
              { word: 'a pair of scissors', az: 'bir qayçı' },
              { word: 'a pair of trousers', az: 'bir şalvar' },
              { word: 'a pair of glasses',  az: 'bir eynək' },
              { word: 'a pair of shoes',    az: 'bir cüt ayaqqabı' },
              { word: 'a pair of gloves',   az: 'bir cüt əlcək' },
              { word: 'a pair of socks',    az: 'bir cüt corab' },
            ],
            note: 'İki, üç cüt mənasında:\n• two pairs of trousers — iki şalvar\n• three pairs of shoes — üç cüt ayaqqabı',
          },

          // ── Mini-check: A pair of ────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Bir qayçı" ingilis dilində necə deyilir?',
                options: ['a scissors', 'one scissors', 'a pair of scissors', 'scissor'],
                answer: 'a pair of scissors',
              },
              {
                q: '"two pairs of trousers" nə deməkdir?',
                options: ['iki cüt şalvar', 'iki şalvar', 'iki gödəkçə', 'iki cüt corab'],
                answer: 'iki şalvar',
              },
              {
                q: 'Hansı ifadə düzgündür?',
                options: ['a trouser', 'a trousers', 'a pair of trousers', 'one trouser'],
                answer: 'a pair of trousers',
              },
            ],
          },
        ],
      },

      // Dərs 6.3 — Formaca cəm, mənaca tək + eyni forma
      {
        type: 'grammar_lesson',
        title: 'Dərs 6.3 — Formaca cəm, mənaca tək · Eyni forma',
        cards: [

          // ── Ekran 1: Holiday xüsusi qaydası ─────────────
          {
            type: 'lesson',
            title: 'Holiday — bayram yoxsa tətil?',
            content: '"holiday" sözü mənasına görə fərqli işlənir:',
            examples: [
              { word: 'Today is a holiday.',       az: 'bayram mənasında — tək fel' },
              { word: 'The holiday is tomorrow.',  az: 'bayram mənasında — tək fel' },
              { word: 'The holidays are over.',    az: 'tətil mənasında — cəm fel' },
              { word: 'My holidays were wonderful.', az: 'tətil mənasında — cəm fel' },
            ],
            tip: 'Bayram → tək. Tətil → cəm (-s alır).',
          },

          // ── Mini-check: Holiday ──────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Today ___ a holiday." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have'],
                answer: 'is',
              },
              {
                q: '"The holidays ___ over." — boşluğa nə gəlir?',
                options: ['is', 'was', 'are', 'has been'],
                answer: 'are',
              },
              {
                q: '"holidays" (cəm) nə mənasında işlənir?',
                options: ['Bayram', 'Tətil', 'Həm bayram, həm tətil', 'Heç biri'],
                answer: 'Tətil',
              },
            ],
          },

          // ── Ekran 2: News, Phonetics, Physics ───────────
          {
            type: 'lesson',
            title: 'News · Phonetics · Physics — sonunda -s var, amma tək',
            content: 'Bəzi isimlər var ki, sonunda -s şəkilçisi olmasına baxmayaraq həmişə təkdə işlənir.\n\nnews — xəbər:\n• Formaca cəmdir, mənaca təkdir\n• a / an artiklı ilə işlənmir\n• Özündən sonra fel təkdə gəlir',
            examples: [
              { word: 'The news is good.',              az: '✅ düzgün' },
              { word: 'The news are good.',             az: '❌ yanlış' },
              { word: 'There is a lot of news today.',  az: '✅ tək fel' },
            ],
            note: 'Azərbaycan dilinə həm tək, həm cəmdə tərcümə oluna bilər:\nThe news is interesting. — Xəbər/Xəbərlər maraqlıdır.',
          },

          // ── Ekran 3: Elm adları ──────────────────────────
          {
            type: 'lesson',
            title: 'Elm adları — həmişə tək',
            content: 'Sonunda -s olmasına baxmayaraq həmişə tək, sayılmayan, artıklsız, özündən sonra fel tək:',
            table: [
              ['İsim',        'Mənası'],
              ['phonetics',   'fonetika'],
              ['physics',     'fizika'],
              ['optics',      'optika'],
              ['linguistics', 'dilçilik'],
              ['gymnastics',  'gimnastika'],
              ['economics',   'iqtisadiyyat'],
              ['mathematics', 'riyaziyyat'],
            ],
            examples: [
              { word: 'Phonetics is a branch of linguistics.', az: 'tək fel' },
              { word: 'Physics is difficult.',                 az: 'tək fel' },
            ],
          },

          // ── Mini-check: News / Elm adları ────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"The news ___ good." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have been'],
                answer: 'is',
              },
              {
                q: '"Physics ___ difficult." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have been'],
                answer: 'is',
              },
              {
                q: '"a news" ifadəsi düzgündürmü?',
                options: ['Bəli', 'Xeyr, artıkl işlənmir', 'Bəli, tək mənasında', 'Bəzən'],
                answer: 'Xeyr, artıkl işlənmir',
              },
              {
                q: 'Hansı söz formaca cəm, mənaca təkdir?',
                options: ['trousers', 'scissors', 'news', 'clothes'],
                answer: 'news',
              },
            ],
          },

          // ── Ekran 4: Sheep, Fish, Deer ───────────────────
          {
            type: 'lesson',
            title: 'Sheep · Fish · Deer — tək də belədir, cəm də',
            content: 'Bəzi isimlər heç bir cəmlik şəkilçisi qəbul etmədən həm tək, həm cəm ola bilir.',
            table: [
              ['İsim',  'Tək',       'Cəm'],
              ['sheep', 'a sheep',   '5 sheep'],
              ['fish',  'a fish',    '5 fish'],
              ['deer',  'a deer',    '5 deer'],
              ['swine', 'a swine',   '5 swine'],
            ],
            examples: [
              { word: 'A sheep is in the garden.',    az: 'tək — fel tək' },
              { word: 'Five sheep are in the garden.',az: 'cəm — fel cəm' },
              { word: 'Some sheep are grazing.',      az: 'cəm — fel cəm' },
            ],
            note: '"fish" üçün xüsusi hal: Qarşısında different / various işləndikdə "fishes" forması işlənə bilər:\nThere are various fishes in the Caspian Sea.',
          },

          // ── Mini-check: Sheep / Fish / Deer ─────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Five sheep ___ in the garden." — boşluğa nə gəlir?',
                options: ['is', 'was', 'are', 'has'],
                answer: 'are',
              },
              {
                q: '"A deer ___ in the forest." — boşluğa nə gəlir?',
                options: ['are', 'were', 'is', 'have'],
                answer: 'is',
              },
              {
                q: '"fish" sözünün cəmi necədir?',
                options: ['fishes', 'fishies', 'fish', 'fishen'],
                answer: 'fish',
              },
              {
                q: '"fishes" forması nə vaxt işlənə bilər?',
                options: [
                  'Həmişə',
                  'Heç vaxt',
                  'Müxtəlif növ balıqlar mənasında',
                  'Yalnız sual cümlədə',
                ],
                answer: 'Müxtəlif növ balıqlar mənasında',
              },
              {
                q: 'Hansı söz tək də cəm də eyni formadadır?',
                options: ['man', 'child', 'deer', 'tooth'],
                answer: 'deer',
              },
            ],
          },
        ],
      },

      // ── Bölmə 6 — Ümumi Quiz ─────────────────────────────
      [
        // Həmişə tək
        { en: 'advice — cəmi varmı?',        tr: 'Xeyr',  wrong: 'Bəli'  },
        { en: 'furniture — cəmi varmı?',     tr: 'Xeyr',  wrong: 'Bəli'  },
        { en: 'Much progress ___ made.',     tr: 'was',   wrong: 'were'  },
        { en: 'Much information ___ needed.',tr: 'is',    wrong: 'are'   },

        // Hair / Fruit
        { en: 'Her hair ___ beautiful.',     tr: 'is',    wrong: 'are'   },
        { en: 'Fruit ___ useful.',           tr: 'is',    wrong: 'are'   },
        { en: 'fruits — nə vaxt işlənir?',   tr: 'Müxtəlif növ meyvə', wrong: 'Həmişə' },

        // Həmişə cəm
        { en: 'Where ___ my scissors?',      tr: 'are',   wrong: 'is'    },
        { en: 'My jeans ___ blue.',          tr: 'are',   wrong: 'is'    },
        { en: 'The clothes ___ clean.',      tr: 'are',   wrong: 'is'    },
        { en: 'Bir qayçı → ____',            tr: 'a pair of scissors', wrong: 'a scissors' },
        { en: 'İki şalvar → ____',           tr: 'two pairs of trousers', wrong: 'two trousers' },

        // Holiday
        { en: 'Today ___ a holiday. (bayram)', tr: 'is',  wrong: 'are'  },
        { en: 'The holidays ___ over. (tətil)',tr: 'are', wrong: 'is'   },

        // News / Elm adları
        { en: 'The news ___ good.',          tr: 'is',    wrong: 'are'  },
        { en: 'Physics ___ difficult.',      tr: 'is',    wrong: 'are'  },
        { en: 'Phonetics ___ interesting.',  tr: 'is',    wrong: 'are'  },
        { en: '"a news" düzgündürmü?',       tr: 'Xeyr',  wrong: 'Bəli' },

        // Sheep / Fish / Deer
        { en: 'Five sheep ___ grazing.',     tr: 'are',   wrong: 'is'   },
        { en: 'A deer ___ in the forest.',   tr: 'is',    wrong: 'are'  },
        { en: 'fish — adı cəmi necədir?',    tr: 'fish',  wrong: 'fishes' },
        { en: '"various fishes" — nə mənada?', tr: 'Müxtəlif növ balıq', wrong: 'Səhvdir' },
      ],

    // ── Bölmə 7 ──────────────────────────────────────
      {
        type: 'section_divider',
        title: 'Bölmə 7 — Possessive case (Yiyəlik hal)',
      },

      // Dərs 7.1 — 's (tək) / ' (cəm) qaydası
      {
        type: 'grammar_lesson',
        title: "Dərs 7.1 — 's (tək) / ' (cəm) qaydası",
        cards: [

          // ── Ekran 1: İsmin halları ───────────────────────
          {
            type: 'lesson',
            title: 'İngilis dilində ismin halları',
            content: 'İngilis dilində ismin yalnız iki halı var:',
            table: [
              ['Hal',        'İngilis adı',          'Xüsusiyyəti'],
              ['Ümumi hal',  'The Common case',       'Heç bir şəkilçi almır'],
              ['Yiyəlik hal','The Possessive case',   "'s və ya ' alır"],
            ],
            examples: [
              { word: 'a table, a boy, a bench',       az: 'Ümumi hal — şəkilçisiz' },
              { word: "the boy's ball",                 az: 'Yiyəlik hal — oğlanın topu' },
              { word: "the teacher's book",             az: 'Yiyəlik hal — müəllimin kitabı' },
            ],
            tip: "Azərbaycan dilindəki -ın/-in/-un/-ün şəkilçisinə uyğun gəlir.",
          },

          // ── Ekran 2: 's və ' fərqi ───────────────────────
          {
            type: 'lesson',
            title: "'s və ' — fərq nədir?",
            content: 'Yiyəlik hal iki cür düzəlir:\n\nTək isimlərdə → \'s əlavə edilir:\nCəm isimlərdə → yalnız \' əlavə edilir.',
            examples: [
              { word: "the boy's ball",      az: 'tək — oğlanın topu' },
              { word: "the teacher's pen",   az: 'tək — müəllimin qələmi' },
              { word: "the cat's tail",      az: 'tək — pişiyin quyruğu' },
              { word: "the boys' ball",      az: 'cəm — oğlanların topu' },
              { word: "the teachers' room",  az: 'cəm — müəllimlərin otağı' },
            ],
            note: "Səbəb: Cəm isimlərinin sonunda artıq -s şəkilçisi var, ona görə yalnız apostrof ' işlənir.",
          },

          // ── Mini-check: 's / ' ───────────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"oğlanın topu" — tək. Necə yazılır?',
                options: ["the boys' ball", "the boy's ball", "the boys's ball", "the boy ball"],
                answer: "the boy's ball",
              },
              {
                q: '"müəllimlərin otağı" — cəm. Necə yazılır?',
                options: ["the teacher's room", "the teachers's room", "the teachers' room", "the teachers room"],
                answer: "the teachers' room",
              },
              {
                q: 'Cəm isimlərdə niyə yalnız \' işlənir?',
                options: [
                  'Çünki qaydasızdır',
                  'Çünki sonunda artıq -s var',
                  'Çünki cansız isimdir',
                  'Çünki xüsusi addır',
                ],
                answer: 'Çünki sonunda artıq -s var',
              },
              {
                q: '"pişiyin quyruğu" — necə yazılır?',
                options: ["the cats' tail", "the cat tail", "the cat's tail", "the cats's tail"],
                answer: "the cat's tail",
              },
              {
                q: 'İngilis dilində ismin neçə halı var?',
                options: ['3', '4', '2', '6'],
                answer: '2',
              },
            ],
          },

          // ── Ekran 3: Kökü dəyişən cəm isimlər ──────────
          {
            type: 'lesson',
            title: "Men's · Children's — həm tək, həm cəmdə 's",
            content: "Cəm forması -s almadan kökdən dəyişən isimlərin həm tək, həm cəm yiyəlik halı 's vasitəsilə düzəlir. Çünki bu isimlərin sonunda cəm -s-i yoxdur.",
            table: [
              ['Tək yiyəlik',       'Mənası',           'Cəm yiyəlik',         'Mənası'],
              ["the man's cap",     'kişinin şapkası',  "the men's caps",      'kişilərin şapkaları'],
              ["the child's toy",   'uşağın oyuncağı',  "the children's toys", 'uşaqların oyuncaqları'],
              ["the woman's bag",   'qadının çantası',  "the women's bags",    'qadınların çantaları'],
            ],
          },

          // ── Mini-check: Kökü dəyişən cəm ────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"uşaqların oyuncaqları" necə yazılır?',
                options: ["the childs' toys", "the children's toys", "the childrens' toys", "the children toys"],
                answer: "the children's toys",
              },
              {
                q: '"kişilərin şapkaları" necə yazılır?',
                options: ["the mans' caps", "the men' caps", "the men's caps", "the mens' caps"],
                answer: "the men's caps",
              },
              {
                q: 'Nə üçün "children\'s" — apostrofdan sonra -s işlənir?',
                options: [
                  'Çünki xüsusi qayda var',
                  'Çünki "children" -s almadan kökdən dəyişir',
                  'Çünki tək isimdir',
                  'Çünki cansız isimdir',
                ],
                answer: 'Çünki "children" -s almadan kökdən dəyişir',
              },
            ],
          },
        ],
      },

      // Dərs 7.2 — Cansız sözün possessive-i
      {
        type: 'grammar_lesson',
        title: "Dərs 7.2 — Cansız sözün possessive-i · Xüsusi hallar",
        cards: [

          // ── Ekran 1: Sonu -s ilə bitən isimlər ──────────
          {
            type: 'lesson',
            title: "Dickens's yoxsa Dickens'?",
            content: "Sonu -s hərfi ilə bitən isimlərin yiyəlik halı iki cür düzələ bilər. Hər iki forma düzgündür.",
            examples: [
              { word: "Dickens's father", az: "Variant 1 — 's əlavə et" },
              { word: "Dickens' father",  az: "Variant 2 — yalnız ' əlavə et" },
            ],
            tip: "Hər iki yazılış qəbul edilir. Praktikada ikinci variant (') daha çox işlənir.",
          },

          // ── Ekran 2: Mürəkkəb isimlərin yiyəlik halı ────
          {
            type: 'lesson',
            title: "Father-in-law's house",
            content: "Mürəkkəb isimlərin yiyəlik halını düzəldərkən 's şəkilçisi axırıncı komponentə əlavə edilir.",
            examples: [
              { word: "my father-in-law's house",       az: 'qaynatamın evi' },
              { word: "the editor-in-chief's office",   az: 'baş redaktorun kabineti' },
            ],
          },

          // ── Ekran 3: Birgə və ayrı yiyəlik ──────────────
          {
            type: 'lesson',
            title: "Tom and Nick's — yoxsa Tom's and Nick's?",
            content: "Eyni bir əşya iki şəxsə məxsusdursa → 's yalnız axırıncı ismə əlavə edilir.\n\nHər şəxsə ayrı-ayrılıqda məxsusdursa → 's hər birinə əlavə edilir.",
            examples: [
              { word: "Tom and Nick's father", az: "eyni ata — 's yalnız axırda" },
              { word: "Tom and Nick's house",  az: "eyni ev — birgə mülkiyyət" },
              { word: "Tom's and Nick's eyes", az: "ayrı-ayrı gözlər" },
              { word: "Tom's and Nick's cars", az: "ayrı maşınlar" },
            ],
          },

          // ── Mini-check: Xüsusi hallar ────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"Tomun və Nikin evi" (eyni ev) necə yazılır?',
                options: [
                  "Tom's and Nick's house",
                  "Tom and Nick's house",
                  "Tom's and Nick house",
                  "Tom and Nick house",
                ],
                answer: "Tom and Nick's house",
              },
              {
                q: '"Tomun maşını və Nikin maşını" (ayrı maşınlar) necə yazılır?',
                options: [
                  "Tom and Nick's cars",
                  "Tom's and Nick cars",
                  "Tom's and Nick's cars",
                  "Tom Nick's cars",
                ],
                answer: "Tom's and Nick's cars",
              },
              {
                q: '"my father-in-law\'s house" — \'s hara əlavə edilib?',
                options: ['father-a', 'law-a', 'in-ə', 'axırıncı komponentə'],
                answer: 'axırıncı komponentə',
              },
            ],
          },

          // ── Ekran 4: Cansız isimlər — of ────────────────
          {
            type: 'lesson',
            title: 'Cansız isimlər — of sözönü',
            content: "Cansız varlıqları bildirən isimlərin yiyəlik halı bir qayda olaraq of sözönü vasitəsilə düzəlir. 's işlənmir.",
            examples: [
              { word: 'the leg of the table',    az: 'stolun qılçası' },
              { word: 'the centre of the city',  az: 'şəhərin mərkəzi' },
              { word: 'the pages of the book',   az: 'kitabın səhifələri' },
              { word: 'the top of the mountain', az: 'dağın zirvəsi' },
            ],
          },

          // ── Ekran 5: Cansız olsa da 's işlənən hallar ───
          {
            type: 'lesson',
            title: "Cansız olsa da 's işlənən isimlər",
            content: "Bəzi cansız isimlər istisna olaraq 's ilə işlənir:\n\n1. Fəsillərin, ayların, həftə günlərinin adları\n2. Ölkə və şəhər adları\n3. Müəyyən coğrafi və təbii obyektlər\n4. Zaman bildirən sözlər — yalnız 's\n5. today, tomorrow, yesterday — həmişə 's",
            examples: [
              { word: "December's frost",      az: 'dekabrın şaxtası' },
              { word: "London's beauty",       az: 'Londonun gözəlliyi' },
              { word: "the river's bank",      az: 'çayın sahili' },
              { word: "a moment's silence",    az: 'bir anlıq sükut' },
              { word: "two days' rest",        az: 'iki günlük istirahət' },
              { word: "today's newspaper",     az: 'bu günkü qəzet' },
              { word: "yesterday's news",      az: 'dünənki xəbər' },
              { word: "tomorrow's work",       az: 'sabahkı iş' },
            ],
            note: "the bank of the river = the river's bank — hər iki forma düzgündür (3-cü qrup üçün).\nZaman sözlərində isə yalnız 's işlənir, of işlənmir.",
          },

          // ── Mini-check: Cansız + 's ──────────────────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"stolun qılçası" — necə yazılır?',
                options: [
                  "the table's leg",
                  "the leg of the table",
                  "the table leg",
                  "the leg's table",
                ],
                answer: 'the leg of the table',
              },
              {
                q: '"bu günkü qəzet" — necə yazılır?',
                options: [
                  'the newspaper of today',
                  "todays newspaper",
                  "today's newspaper",
                  "today newspaper",
                ],
                answer: "today's newspaper",
              },
              {
                q: '"bir həftəlik tətil" — necə yazılır?',
                options: [
                  'the holiday of a week',
                  "a week's holiday",
                  "a weeks holiday",
                  "holiday of week",
                ],
                answer: "a week's holiday",
              },
              {
                q: '"Londonun gözəlliyi" necə yazılır?',
                options: [
                  'the beauty of London',
                  "London's beauty",
                  'Hər ikisi düzgündür',
                  'Heç biri',
                ],
                answer: 'Hər ikisi düzgündür',
              },
              {
                q: '"dünənki xəbər" — necə yazılır?',
                options: [
                  'the news of yesterday',
                  "yesterdays news",
                  "yesterday's news",
                  "yesterday news",
                ],
                answer: "yesterday's news",
              },
              {
                q: '"iki günlük istirahət" — necə yazılır?',
                options: [
                  'the rest of two days',
                  "two day's rest",
                  "two days' rest",
                  "two days rest",
                ],
                answer: "two days' rest",
              },
            ],
          },

          // ── Mini-quiz: Ümumi təkrar — Possessive ────────
          {
            type: 'mini_check',
            questions: [
              {
                q: '"müəllimin qələmi" — tək. Necə yazılır?',
                options: ["the teachers' pen", "the teacher pen", "the teacher's pen", "the teachers pen"],
                answer: "the teacher's pen",
              },
              {
                q: '"qadınların çantaları" — cəm (kökü dəyişən). Necə yazılır?',
                options: ["the woman's bags", "the womans' bags", "the women bags", "the women's bags"],
                answer: "the women's bags",
              },
              {
                q: '"şəhərin mərkəzi" — cansız isim. Necə yazılır?',
                options: [
                  "the city's centre",
                  'the centre of the city',
                  'Hər ikisi düzgündür',
                  'Heç biri',
                ],
                answer: 'the centre of the city',
              },
              {
                q: '"dağın zirvəsi" — necə yazılır?',
                options: [
                  "the mountain's top",
                  'the top of the mountain',
                  'Hər ikisi düzgündür',
                  'Heç biri',
                ],
                answer: 'the top of the mountain',
              },
              {
                q: '"bir saatlıq yol" — necə yazılır?',
                options: [
                  'the drive of an hour',
                  "an hour's drive",
                  "an hours drive",
                  "an hour drive",
                ],
                answer: "an hour's drive",
              },
              {
                q: '"sabahkı iş" — necə yazılır?',
                options: [
                  'the work of tomorrow',
                  "tomorrows work",
                  "tomorrow's work",
                  "tomorrow work",
                ],
                answer: "tomorrow's work",
              },
            ],
          },
        ],
      },

      // ── Bölmə 7 — Ümumi Quiz ─────────────────────────────
      [
        // Tək 's
        { en: "oğlanın topu → ____",         tr: "the boy's ball",       wrong: "the boys' ball"      },
        { en: "pişiyin quyruğu → ____",      tr: "the cat's tail",       wrong: "the cats' tail"      },
        { en: "müəllimin kitabı → ____",     tr: "the teacher's book",   wrong: "the teachers' book"  },

        // Cəm '
        { en: "oğlanların topu → ____",      tr: "the boys' ball",       wrong: "the boy's ball"      },
        { en: "müəllimlərin otağı → ____",   tr: "the teachers' room",   wrong: "the teacher's room"  },

        // Kökü dəyişən cəm
        { en: "uşaqların oyuncaqları → ____",tr: "the children's toys",  wrong: "the childrens' toys" },
        { en: "kişilərin şapkaları → ____",  tr: "the men's caps",       wrong: "the mens' caps"      },
        { en: "qadınların çantaları → ____", tr: "the women's bags",     wrong: "the womans' bags"    },

        // Birgə / ayrı yiyəlik
        { en: "eyni ev (Tom və Nick) → ____",    tr: "Tom and Nick's house",  wrong: "Tom's and Nick's house" },
        { en: "ayrı maşınlar → ____",            tr: "Tom's and Nick's cars", wrong: "Tom and Nick's cars"    },

        // Cansız — of
        { en: "stolun qılçası → ____",       tr: "the leg of the table",    wrong: "the table's leg"       },
        { en: "kitabın səhifələri → ____",   tr: "the pages of the book",   wrong: "the book's pages"      },
        { en: "dağın zirvəsi → ____",        tr: "the top of the mountain", wrong: "the mountain's top"    },

        // Cansız amma 's
        { en: "dekabrın şaxtası → ____",     tr: "December's frost",     wrong: "the frost of December" },
        { en: "Londonun gözəlliyi → ____",   tr: "London's beauty",      wrong: "the beauty of London"  },
        { en: "çayın sahili → ____",         tr: "the river's bank",     wrong: "the bank of river"     },

        // Zaman sözləri
        { en: "bu günkü qəzet → ____",       tr: "today's newspaper",    wrong: "the newspaper of today" },
        { en: "dünənki xəbər → ____",        tr: "yesterday's news",     wrong: "the news of yesterday"  },
        { en: "sabahkı iş → ____",           tr: "tomorrow's work",      wrong: "the work of tomorrow"   },
        { en: "bir həftəlik tətil → ____",   tr: "a week's holiday",     wrong: "the holiday of a week"  },
        { en: "iki günlük istirahət → ____", tr: "two days' rest",       wrong: "the rest of two days"   },
        { en: "bir saatlıq yol → ____",      tr: "an hour's drive",      wrong: "the drive of an hour"   },
      ],
     // ══════════════════════════════════════════════════════════════
//  BÖLMƏ 8 — Sayılmayan isimlər sözlüyü (Vocabulary bank)
//  index: 36 → 41
// ══════════════════════════════════════════════════════════════

// ── index: 36 — Bölmə 8 bölücüsü ────────────────────────────
{
  type: 'section_divider',
  title: 'Bölmə 8 — Sayılmayan isimlər sözlüyü (Vocabulary bank)',
},

// ── index: 37 — Dərs 8.1 ─────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 8.1 — Qida və içki adları',
  cards: [

    // ── Ekran 1: Giriş ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Yemək və içki — hamısı sayılmayandır',
      content: 'Aşağıdakı bütün isimlər uncountable-dır.\nHeç biri a/an almır, cəmlənmir, özündən sonra fel tək gəlir.',
      examples: [
        { word: 'Water is important.',     az: '✅ tək fel' },
        { word: 'Bread is delicious.',     az: '✅ tək fel' },
        { word: '❌ a water, waters',      az: 'yanlış — a/an və cəm işlənmir' },
      ],
      tip: 'Maye, taxıl, ət, süd məhsulları — hamısı uncountable. "much" və "little" ilə işlənir.',
    },

    // ── Ekran 2: İçkilər ───────────────────────────────────
    {
      type: 'lesson',
      title: 'İçki adları (Drinks)',
      content: 'Bu içkilərin hamısı sayılmayandir:',
      table: [
        ['İngilis',    'Tələffüz',    'Azərbaycan'],
        ['water',      '[wotə]',      'su'],
        ['milk',       '[milk]',      'süd'],
        ['tea',        '[tiː]',       'çay'],
        ['coffee',     '[kofiː]',     'kofe'],
        ['beer',       '[biə]',       'pivə'],
        ['wine',       '[wain]',      'çaxır'],
        ['juice',      '[dʒuːs]',     'şirə'],
        ['oil',        '[oil]',       'neft, yağ'],
        ['champagne',  '[ʃæmpein]',   'şampan'],
      ],
    },

    // ── Mini-check: İçkilər ────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"milk" ilə hansı söz işlənir ("çox" mənasında)?',
          options: ['many', 'few', 'much', 'a few'],
          answer: 'much',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'I want a water.',
            'I want water.',
            'I want waters.',
            'I want many water.',
          ],
          answer: 'I want water.',
        },
        {
          q: '"juice" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Proper noun', 'Abstract'],
          answer: 'Uncountable',
        },
        {
          q: '"tea" ilə "az" mənasında hansı söz işlənir?',
          options: ['few', 'many', 'little', 'a few'],
          answer: 'little',
        },
      ],
    },

    // ── Ekran 3: Qida adları — 1 ───────────────────────────
    {
      type: 'lesson',
      title: 'Qida adları — Part 1',
      content: 'Aşağıdakı qida adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',  'Tələffüz',    'Azərbaycan'],
        ['bread',    '[bred]',      'çörək'],
        ['butter',   '[bʌtə]',     'yağ'],
        ['cheese',   '[tʃiːz]',    'pendir'],
        ['meat',     '[miːt]',      'ət'],
        ['rice',     '[rais]',      'düyü'],
        ['flour',    '[flauə]',     'un'],
        ['sugar',    '[ʃugə]',      'qənd'],
        ['salt',     '[soːlt]',     'duz'],
        ['honey',    '[hʌni]',      'bal'],
      ],
    },

    // ── Ekran 4: Qida adları — 2 ───────────────────────────
    {
      type: 'lesson',
      title: 'Qida adları — Part 2',
      content: 'Daha çox qida adları:',
      table: [
        ['İngilis',   'Tələffüz',    'Azərbaycan'],
        ['cream',     '[kriːm]',     'krem'],
        ['jam',       '[dʒæm]',      'mürəbbə'],
        ['toast',     '[toust]',     'qızardılmış çörək'],
        ['cake',      '[keik]',      'tort, piroq'],
        ['food',      '[fuːd]',      'ərzaq'],
        ['fruit',     '[fruːt]',     'meyvə'],
        ['mustard',   '[mʌstəd]',    'xardal'],
        ['pepper',    '[pepə]',      'istiot'],
      ],
    },

    // ── Mini-check: Qida adları ────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"bread" — düzgün işlənişi hansıdır?',
          options: ['a bread', 'some breads', 'much bread', 'many breads'],
          answer: 'much bread',
        },
        {
          q: '"sugar" ilə "az" mənasında hansı söz işlənir?',
          options: ['few', 'a few', 'little', 'many'],
          answer: 'little',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'There is a cheese on the table.',
            'There are cheeses on the table.',
            'There is some cheese on the table.',
            'There are many cheese on the table.',
          ],
          answer: 'There is some cheese on the table.',
        },
        {
          q: '"Rice ___ healthy." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have been'],
          answer: 'is',
        },
        {
          q: 'Hansı söz "qida" mənasındadır?',
          options: ['juice', 'food', 'silk', 'iron'],
          answer: 'food',
        },
        {
          q: '"fruit" sözü ümumi mənada necə işlənir?',
          options: [
            'a fruit, many fruits',
            'much fruit, little fruit',
            'few fruit, a few fruits',
            'a lot of fruits',
          ],
          answer: 'much fruit, little fruit',
        },
      ],
    },

    // ── Mini-quiz: 8.1 ümumi təkrar ────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"meat" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Collective', 'Proper noun'],
          answer: 'Uncountable',
        },
        {
          q: '"coffee" ilə hansı ifadə düzgündür?',
          options: ['a coffee', 'many coffees', 'much coffee', 'few coffees'],
          answer: 'much coffee',
        },
        {
          q: 'Hansı söz içki deyil?',
          options: ['milk', 'wine', 'flour', 'juice'],
          answer: 'flour',
        },
        {
          q: '"honey ___ sweet." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: 'Hansı qida adı "mürəbbə" deməkdir?',
          options: ['cream', 'toast', 'jam', 'mustard'],
          answer: 'jam',
        },
        {
          q: '"salt" — düzgün işlənişi hansıdır?',
          options: ['a salt', 'many salts', 'much salt', 'few salts'],
          answer: 'much salt',
        },
        {
          q: '"butter" ilə "az" mənasında hansı söz işlənir?',
          options: ['few', 'many', 'much', 'little'],
          answer: 'little',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'Much meats are on the table.',
            'A meat is on the table.',
            'Much meat is on the table.',
            'Many meat are on the table.',
          ],
          answer: 'Much meat is on the table.',
        },
      ],
    },
  ],
},

// ── index: 38 — Dərs 8.2 ─────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 8.2 — Material adları',
  cards: [

    // ── Ekran 1: Giriş ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Materiallar — hamısı sayılmayandır',
      content: 'Material, metal, parça, yanacaq adları uncountable-dır.\nHeç biri a/an almır, cəmlənmir, özündən sonra fel tək gəlir.',
      examples: [
        { word: 'Gold is expensive.',    az: '✅ tək fel' },
        { word: 'Silk is soft.',         az: '✅ tək fel' },
        { word: '❌ a gold, silks',      az: 'yanlış' },
      ],
      tip: 'Materialın adını gördüyündə — much/little ilə işlət, a/an alma.',
    },

    // ── Ekran 2: Parça və toxuculuq ────────────────────────
    {
      type: 'lesson',
      title: 'Parça və toxuculuq (Fabric)',
      content: 'Bu parça adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis', 'Tələffüz', 'Azərbaycan'],
        ['silk',    '[silk]',   'ipək'],
        ['wool',    '[wuːl]',   'yun'],
        ['cotton',  '[kotn]',   'pambıq'],
        ['linen',   '[linin]',  'mələfə, kətan'],
      ],
    },

    // ── Mini-check: Parça adları ───────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"silk" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Proper noun', 'Collective'],
          answer: 'Uncountable',
        },
        {
          q: '"wool" ilə hansı ifadə düzgündür?',
          options: ['a wool', 'many wools', 'much wool', 'few wools'],
          answer: 'much wool',
        },
        {
          q: 'Hansı söz "pambıq" deməkdir?',
          options: ['silk', 'linen', 'wool', 'cotton'],
          answer: 'cotton',
        },
        {
          q: '"linen" — "mələfə, kətan" mənasındadır. Hansı cümlə düzgündür?',
          options: [
            'A linen is soft.',
            'Linen is soft.',
            'Linens are soft.',
            'Many linen is soft.',
          ],
          answer: 'Linen is soft.',
        },
      ],
    },

    // ── Ekran 3: Tikinti materialları ──────────────────────
    {
      type: 'lesson',
      title: 'Tikinti və istehsal materialları',
      content: 'Bu materialların hamısı uncountable-dır:',
      table: [
        ['İngilis',    'Tələffüz',    'Azərbaycan'],
        ['wood',       '[wud]',       'taxta'],
        ['paper',      '[peipə]',     'kağız'],
        ['glass',      '[glɑːs]',     'şüşə'],
        ['cardboard',  '[kɑːdbɔːd]',  'karton'],
        ['rubber',     '[rʌbə]',      'rezin'],
        ['chalk',      '[tʃoːk]',     'təbaşir'],
      ],
    },

    // ── Mini-check: Tikinti materialları ──────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"glass" — "şüşə" mənasında. Hansı cümlə düzgündür?',
          options: [
            'A glass is everywhere.',
            'Glasses is used in windows.',
            'Glass is used in windows.',
            'Many glass is used.',
          ],
          answer: 'Glass is used in windows.',
        },
        {
          q: '"wood" ilə "çox" mənasında hansı söz işlənir?',
          options: ['many', 'few', 'much', 'a few'],
          answer: 'much',
        },
        {
          q: 'Hansı söz "təbaşir" deməkdir?',
          options: ['rubber', 'cardboard', 'chalk', 'paper'],
          answer: 'chalk',
        },
        {
          q: '"paper" — düzgün işlənişi hansıdır?',
          options: ['a paper', 'many papers', 'much paper', 'few papers'],
          answer: 'much paper',
        },
      ],
    },

    // ── Ekran 4: Metal adları ──────────────────────────────
    {
      type: 'lesson',
      title: 'Metal adları (Metals)',
      content: 'Metal adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',  'Tələffüz',    'Azərbaycan'],
        ['iron',     '[aiən]',      'dəmir'],
        ['gold',     '[gould]',     'qızıl'],
        ['silver',   '[silvə]',     'gümüş'],
        ['bronze',   '[bronz]',     'bürünc'],
        ['coal',     '[koul]',      'kömür'],
      ],
    },

    // ── Ekran 5: Yanacaq və xammal ─────────────────────────
    {
      type: 'lesson',
      title: 'Yanacaq və xammal (Fuel)',
      content: 'Yanacaq adları da uncountable-dır:',
      table: [
        ['İngilis',  'Tələffüz',   'Azərbaycan'],
        ['gas',      '[gæz]',      'qaz'],
        ['petrol',   '[petrol]',   'benzin'],
        ['ink',      '[iŋk]',      'mürəkkəb'],
      ],
    },

    // ── Mini-check: Metal və yanacaq ──────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"gold" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Proper noun', 'Collective'],
          answer: 'Uncountable',
        },
        {
          q: '"iron" ilə hansı ifadə düzgündür?',
          options: ['an iron', 'many irons', 'much iron', 'few irons'],
          answer: 'much iron',
        },
        {
          q: '"petrol" — "benzin" mənasındadır. Hansı cümlə düzgündür?',
          options: [
            'A petrol is expensive.',
            'Petrols are expensive.',
            'Petrol is expensive.',
            'Many petrol is expensive.',
          ],
          answer: 'Petrol is expensive.',
        },
        {
          q: 'Hansı söz metal adı deyil?',
          options: ['gold', 'bronze', 'coal', 'cotton'],
          answer: 'cotton',
        },
        {
          q: '"silver ___ valuable." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have been'],
          answer: 'is',
        },
        {
          q: 'Hansı söz "mürəkkəb" deməkdir (yazı üçün)?',
          options: ['gas', 'petrol', 'ink', 'coal'],
          answer: 'ink',
        },
      ],
    },

    // ── Mini-quiz: 8.2 ümumi təkrar ────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"cotton" hansı növ isimdir?',
          options: ['Countable', 'Proper noun', 'Uncountable', 'Collective'],
          answer: 'Uncountable',
        },
        {
          q: '"wool" ilə "az" mənasında hansı söz işlənir?',
          options: ['few', 'many', 'much', 'little'],
          answer: 'little',
        },
        {
          q: 'Hansı söz "taxta" deməkdir?',
          options: ['rubber', 'glass', 'wood', 'chalk'],
          answer: 'wood',
        },
        {
          q: '"Bronze ___ an ancient metal." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"gas" — düzgün işlənişi hansıdır?',
          options: ['a gas', 'many gases', 'much gas', 'few gases'],
          answer: 'much gas',
        },
        {
          q: 'Hansı söz "bürünc" deməkdir?',
          options: ['iron', 'silver', 'gold', 'bronze'],
          answer: 'bronze',
        },
        {
          q: '"paper" nə deməkdir?',
          options: ['taxta', 'kağız', 'rezin', 'karton'],
          answer: 'kağız',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A silk is beautiful.',
            'Silks are beautiful.',
            'Silk is beautiful.',
            'Many silk is beautiful.',
          ],
          answer: 'Silk is beautiful.',
        },
      ],
    },
  ],
},

// ── index: 39 — Dərs 8.3 ─────────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 8.3 — Mücərrəd isimlər',
  cards: [

    // ── Ekran 1: Giriş ─────────────────────────────────────
    {
      type: 'lesson',
      title: 'Hiss, keyfiyyət, vəziyyət adları',
      content: 'Mücərrəd isimlər gözlə görünmür, əllə toxunulmur. Bunlar hisslər, keyfiyyətlər, vəziyyətlər, proseslərdir.\n\nBütün mücərrəd isimlər uncountable-dır:\n• a/an almır\n• cəmlənmir\n• özündən sonra fel tək gəlir',
      examples: [
        { word: 'Love is beautiful.',      az: '✅ tək fel' },
        { word: 'Knowledge is power.',     az: '✅ tək fel' },
        { word: '❌ a love, knowledges',   az: 'yanlış' },
      ],
      tip: 'İstisna: Sifət + abstract noun → a/an işlənir: "a great love", "a good knowledge".',
    },

    // ── Ekran 2: Hisslər ───────────────────────────────────
    {
      type: 'lesson',
      title: 'Hisslər və münasibətlər (Feelings)',
      content: 'Bu hiss adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',    'Tələffüz',    'Azərbaycan'],
        ['love',       '[lʌv]',       'sevgi'],
        ['hate',       '[heit]',      'nifrət'],
        ['joy',        '[dʒoi]',      'sevinc'],
        ['anger',      '[æŋgə]',      'hirs, qəzəb'],
        ['fear',       '[fiə]',       'qorxu'],
        ['hope',       '[houp]',      'ümid'],
        ['pity',       '[piti]',      'təəssüf'],
        ['laughter',   '[lɑːftə]',    'gülüş'],
        ['horror',     '[horə]',      'dəhşət'],
      ],
    },

    // ── Mini-check: Hisslər ────────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"love" hansı növ isimdir?',
          options: ['Countable', 'Proper noun', 'Abstract', 'Collective'],
          answer: 'Abstract',
        },
        {
          q: '"Anger ___ dangerous." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A fear is natural.',
            'Fear is natural.',
            'Fears are natural.',
            'Many fear is natural.',
          ],
          answer: 'Fear is natural.',
        },
        {
          q: '"joy" nə deməkdir?',
          options: ['qorxu', 'nifrət', 'sevinc', 'dəhşət'],
          answer: 'sevinc',
        },
        {
          q: '"laughter" ilə hansı söz işlənir ("çox" mənasında)?',
          options: ['many', 'few', 'much', 'a few'],
          answer: 'much',
        },
      ],
    },

    // ── Ekran 3: Keyfiyyət adları ──────────────────────────
    {
      type: 'lesson',
      title: 'Keyfiyyət və xüsusiyyət adları (Qualities)',
      content: 'Bu keyfiyyət adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',    'Tələffüz',     'Azərbaycan'],
        ['beauty',     '[bjuːti]',     'gözəllik'],
        ['happiness',  '[hæpinis]',    'xoşbəxtlik'],
        ['health',     '[helθ]',       'sağlamlıq'],
        ['strength',   '[streŋθ]',     'güc, qüvvə'],
        ['luck',       '[lʌk]',        'bəxt'],
        ['courage',    '[kʌriʤ]',      'cəsarət'],
        ['patience',   '[peiʃəns]',    'səbr'],
        ['stupidness', '[stjuːpidnis]', 'axmaqlıq'],
        ['wealth',     '[welθ]',       'var-dövlət'],
      ],
    },

    // ── Mini-check: Keyfiyyət adları ──────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"happiness" hansı növ isimdir?',
          options: ['Countable', 'Proper noun', 'Abstract', 'Concrete'],
          answer: 'Abstract',
        },
        {
          q: '"Beauty ___ important." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"courage" nə deməkdir?',
          options: ['səbr', 'bəxt', 'cəsarət', 'güc'],
          answer: 'cəsarət',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A health is important.',
            'Health are important.',
            'Health is important.',
            'Healths are important.',
          ],
          answer: 'Health is important.',
        },
        {
          q: '"wealth" nə deməkdir?',
          options: ['sağlamlıq', 'bəxt', 'güc', 'var-dövlət'],
          answer: 'var-dövlət',
        },
        {
          q: '"luck" ilə hansı ifadə düzgündür?',
          options: ['a luck', 'many lucks', 'much luck', 'few lucks'],
          answer: 'much luck',
        },
      ],
    },

    // ── Ekran 4: Fəaliyyət adları ─────────────────────────
    {
      type: 'lesson',
      title: 'Fəaliyyət və proses adları (Activities)',
      content: 'Bu fəaliyyət adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',       'Tələffüz',       'Azərbaycan'],
        ['knowledge',     '[noliʤ]',        'bilik'],
        ['education',     '[edjuːkeiʃn]',   'təhsil'],
        ['progress',      '[progres]',      'tərəqqi, inkişaf'],
        ['experience',    '[ikspiriəns]',   'təcrübə'],
        ['information',   '[infoːmeiʃn]',   'məlumat'],
        ['advice',        '[ædvais]',       'məsləhət'],
        ['help',          '[help]',         'kömək'],
        ['research',      '[risəːtʃ]',      'araşdırma'],
        ['travel',        '[trævl]',        'səyahət'],
        ['trade',         '[treid]',        'ticarət'],
        ['business',      '[biznes]',       'iş'],
      ],
    },

    // ── Mini-check: Fəaliyyət adları ──────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"knowledge" ilə hansı söz işlənir ("çox" mənasında)?',
          options: ['many', 'few', 'much', 'a few'],
          answer: 'much',
        },
        {
          q: '"Education ___ important." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"advice" — cəm forması varmı?',
          options: ['Bəli, advices', 'Xeyr, cəmlənmir', 'Bəli, advicen', 'Bəzən işlənir'],
          answer: 'Xeyr, cəmlənmir',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'Can you give me an advice?',
            'Can you give me advices?',
            'Can you give me some advice?',
            'Can you give me a little advices?',
          ],
          answer: 'Can you give me some advice?',
        },
        {
          q: '"experience" nə deməkdir?',
          options: ['bilik', 'məsləhət', 'təcrübə', 'araşdırma'],
          answer: 'təcrübə',
        },
        {
          q: '"research" ilə hansı ifadə düzgündür?',
          options: ['a research', 'many researches', 'much research', 'few researches'],
          answer: 'much research',
        },
      ],
    },

    // ── Ekran 5: Gündəlik həyat adları ────────────────────
    {
      type: 'lesson',
      title: 'Gündəlik həyat adları (Daily life)',
      content: 'Bu gündəlik həyat adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',      'Tələffüz',       'Azərbaycan'],
        ['furniture',    '[fəːnitʃə]',     'mebel'],
        ['money',        '[mʌni]',         'pul'],
        ['work',         '[wəːk]',         'iş'],
        ['homework',     '[houmwəːk]',     'ev tapşırığı'],
        ['hometask',     '[houmtɑːsk]',    'ev tapşırığı'],
        ['housework',    '[hauswəːk]',     'ev işi'],
        ['shopping',     '[ʃopiŋ]',        'bazarlıq'],
        ['parking',      '[pɑːkiŋ]',       'maşın saxlama'],
        ['smoking',      '[smoukiŋ]',      'papiros çəkmə'],
        ['mail',         '[meil]',         'poçt'],
        ['transport',    '[trænspoːt]',    'nəqliyyat'],
        ['traffic',      '[træfik]',       'nəqliyyat'],
        ['shampoo',      '[ʃæmpuː]',       'şampun'],
        ['toothpaste',   '[tuːθpɑːst]',    'diş pastası'],
        ['soap',         '[soup]',         'sabun'],
        ['garbage',      '[gɑːbiʤ]',       'zibil'],
        ['rubbish',      '[rʌbiʃ]',        'zibil'],
        ['chess',        '[tʃes]',         'şahmat'],
      ],
    },

    // ── Mini-check: Gündəlik həyat ────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"furniture" — düzgün işlənişi hansıdır?',
          options: ['a furniture', 'many furnitures', 'much furniture', 'few furnitures'],
          answer: 'much furniture',
        },
        {
          q: '"traffic" nə deməkdir?',
          options: ['bazarlıq', 'poçt', 'nəqliyyat', 'zibil'],
          answer: 'nəqliyyat',
        },
        {
          q: '"The homework ___ finished." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: 'Hansı söz "sabun" deməkdir?',
          options: ['shampoo', 'toothpaste', 'soap', 'garbage'],
          answer: 'soap',
        },
        {
          q: '"rubbish" və "garbage" — nə deməkdir?',
          options: ['bazarlıq', 'zibil', 'poçt', 'mebel'],
          answer: 'zibil',
        },
        {
          q: '"chess" ilə hansı ifadə düzgündür?',
          options: ['a chess', 'many chesses', 'much chess', 'Chess are fun'],
          answer: 'much chess',
        },
      ],
    },

    // ── Ekran 6: Digər mücərrəd isimlər — 1 ───────────────
    {
      type: 'lesson',
      title: 'Digər mücərrəd isimlər — Part 1',
      content: 'Bu mücərrəd isimlər də uncountable-dır:',
      table: [
        ['İngilis',    'Tələffüz',     'Azərbaycan'],
        ['life',       '[laif]',       'həyat'],
        ['death',      '[deθ]',        'ölüm'],
        ['time',       '[taim]',       'vaxt'],
        ['peace',      '[piːs]',       'sülh'],
        ['marriage',   '[mæriʤ]',      'evlilik'],
        ['damage',     '[dæmiʤ]',      'zərər, ziyan'],
        ['harm',       '[hɑːm]',       'ziyan'],
        ['fun',        '[fʌn]',        'zarafat'],
        ['music',      '[mjuːzik]',    'musiqi'],
        ['dancing',    '[dɑːnsiŋ]',    'rəqs'],
        ['writing',    '[raitiŋ]',     'yazı'],
        ['spelling',   '[speliŋ]',     'hərfləmə'],
        ['pollution',  '[pəluːʃən]',   'çirklənmə'],
        ['power',      '[pauə]',       'güc, qüvvət'],
      ],
    },

    // ── Ekran 7: Digər mücərrəd isimlər — 2 ───────────────
    {
      type: 'lesson',
      title: 'Digər mücərrəd isimlər — Part 2',
      content: 'Daha çox mücərrəd isimlər:',
      table: [
        ['İngilis',          'Tələffüz',            'Azərbaycan'],
        ['capital',          '[kæpitəl]',            'kapital'],
        ['chaos',            '[kaous]',              'xaos'],
        ['nonsense',         '[nosens]',             'cəfəngiyyat'],
        ['dirt',             '[dəːt]',               'çirk, kir'],
        ['gossip',           '[gosip]',              'şayiə'],
        ['hospitality',      '[hospitæbiliti]',      'qonaqpərvərlik'],
        ['choice',           '[tʃois]',              'seçim'],
        ['hobby',            '[hobi]',               'məşğuliyyət'],
        ['charity',          '[tʃæriti]',            'xeyriyyə'],
        ['applause',         '[æplos]',              'alqış'],
        ['assistance',       '[æsistəns]',           'yardım'],
        ['communication',    '[komjunikeiʃn]',       'rabitə'],
        ['behaviour',        '[biheivə]',            'davranış'],
        ['co-operation',     '[kouopəreiʃn]',        'əməkdaşlıq'],
        ['economy',          '[ikonomi]',            'iqtisadiyyat'],
        ['prohibition',      '[prohiʃn]',            'qadağan'],
        ['evidence',         '[evidəns]',            'dəlil, sübut'],
        ['flu',              '[fluː]',               'soyuqdəymə'],
      ],
    },

    // ── Mini-check: Digər mücərrəd isimlər ────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"peace" hansı növ isimdir?',
          options: ['Countable', 'Proper noun', 'Abstract', 'Concrete'],
          answer: 'Abstract',
        },
        {
          q: '"Music ___ wonderful." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"pollution" nə deməkdir?',
          options: ['ziyan', 'çirklənmə', 'sülh', 'xaos'],
          answer: 'çirklənmə',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A fun is important.',
            'Funs are important.',
            'Fun is important.',
            'Many fun is important.',
          ],
          answer: 'Fun is important.',
        },
        {
          q: '"gossip" nə deməkdir?',
          options: ['xəbər', 'şayiə', 'məsləhət', 'cəfəngiyyat'],
          answer: 'şayiə',
        },
        {
          q: '"behaviour" ilə hansı ifadə düzgündür?',
          options: ['a behaviour', 'many behaviours', 'much behaviour', 'few behaviours'],
          answer: 'much behaviour',
        },
        {
          q: '"flu" nə deməkdir?',
          options: ['soyuqdəymə', 'ziyan', 'çirk', 'seçim'],
          answer: 'soyuqdəymə',
        },
        {
          q: '"hospitality" nə deməkdir?',
          options: ['iqtisadiyyat', 'əməkdaşlıq', 'qonaqpərvərlik', 'yardım'],
          answer: 'qonaqpərvərlik',
        },
      ],
    },

    // ── Ekran 8: Təbiət adları ─────────────────────────────
    {
      type: 'lesson',
      title: 'Təbiət hadisələri (Nature)',
      content: 'Təbiət adlarının hamısı uncountable-dır:',
      table: [
        ['İngilis',     'Tələffüz',     'Azərbaycan'],
        ['water',       '[wotə]',       'su'],
        ['air',         '[eə]',         'hava'],
        ['weather',     '[weðə]',       'hava (şərait)'],
        ['rain',        '[rein]',       'yağış'],
        ['snow',        '[snou]',       'qar'],
        ['ice',         '[ais]',        'buz'],
        ['sand',        '[sænd]',       'qum'],
        ['mud',         '[mʌd]',        'palçıq'],
        ['dust',        '[dʌst]',       'toz'],
        ['grass',       '[grɑːs]',      'ot'],
        ['sunlight',    '[sʌnlait]',    'gün işığı'],
        ['moonlight',   '[muːnlait]',   'ay işığı'],
        ['sunshine',    '[sʌnʃain]',    'günəş işığı'],
        ['light',       '[lait]',       'işıq'],
        ['dark',        '[dɑːk]',       'qaranlıq'],
        ['thunder',     '[θʌndə]',      'şimşək, ildırım'],
        ['lightning',   '[laitniŋ]',    'şimşək'],
      ],
    },

    // ── Mini-check: Təbiət adları ─────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"rain" hansı növ isimdir?',
          options: ['Countable', 'Uncountable', 'Proper noun', 'Collective'],
          answer: 'Uncountable',
        },
        {
          q: '"Snow ___ beautiful in winter." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"thunder" nə deməkdir?',
          options: ['ildırım', 'qum', 'buz', 'toz'],
          answer: 'ildırım',
        },
        {
          q: '"dust" ilə hansı ifadə düzgündür?',
          options: ['a dust', 'many dusts', 'much dust', 'few dusts'],
          answer: 'much dust',
        },
        {
          q: '"sunshine" nə deməkdir?',
          options: ['ay işığı', 'günəş işığı', 'şimşək', 'toz'],
          answer: 'günəş işığı',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A weather is cold today.',
            'Weathers are cold today.',
            'The weather is cold today.',
            'Many weather is cold.',
          ],
          answer: 'The weather is cold today.',
        },
        {
          q: '"mud" nə deməkdir?',
          options: ['qar', 'buz', 'palçıq', 'ot'],
          answer: 'palçıq',
        },
      ],
    },

    // ── Mini-quiz: 8.3 ümumi təkrar — böyük ───────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: 'Hansı söz hiss bildirmir?',
          options: ['love', 'anger', 'furniture', 'fear'],
          answer: 'furniture',
        },
        {
          q: '"knowledge" ilə hansı ifadə düzgündür?',
          options: ['a knowledge', 'many knowledges', 'much knowledge', 'few knowledges'],
          answer: 'much knowledge',
        },
        {
          q: '"Pollution ___ a big problem." — boşluğa nə gəlir?',
          options: ['are', 'were', 'is', 'have'],
          answer: 'is',
        },
        {
          q: '"charity" nə deməkdir?',
          options: ['cəsarət', 'xeyriyyə', 'yardım', 'əməkdaşlıq'],
          answer: 'xeyriyyə',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'A progress is made.',
            'Progresses are made.',
            'Progress is made.',
            'Many progress are made.',
          ],
          answer: 'Progress is made.',
        },
        {
          q: '"evidence" nə deməkdir?',
          options: ['şayiə', 'cəfəngiyyat', 'dəlil, sübut', 'qadağan'],
          answer: 'dəlil, sübut',
        },
        {
          q: '"economy" ilə hansı söz işlənir ("az" mənasında)?',
          options: ['few', 'many', 'a few', 'little'],
          answer: 'little',
        },
        {
          q: 'Hansı söz gündəlik həyata aid deyil?',
          options: ['furniture', 'traffic', 'anger', 'shopping'],
          answer: 'anger',
        },
        {
          q: '"communication" nə deməkdir?',
          options: ['davranış', 'rabitə', 'əməkdaşlıq', 'iqtisadiyyat'],
          answer: 'rabitə',
        },
        {
          q: '"ice" ilə hansı ifadə düzgündür?',
          options: ['an ice', 'many ices', 'much ice', 'few ices'],
          answer: 'much ice',
        },
      ],
    },
  ],
},

// ── index: 40 — Mini-quiz 8 (Bölmə 8 ümumi quiz) ─────────────
[
  // ── Qida və içki ───────────────────────────────────────────
  { en: 'water',       tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'milk',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'Çox çay → ____',       tr: 'much tea',      wrong: 'many tea'     },
  { en: 'Az qənd → ____',       tr: 'little sugar',  wrong: 'few sugar'    },
  { en: 'bread',       tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'rice',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'Honey ___ sweet.',     tr: 'is',            wrong: 'are'          },
  { en: 'Flour ___ needed.',    tr: 'is',            wrong: 'are'          },
  { en: 'Az yağ → ____',        tr: 'little butter', wrong: 'few butter'   },
  { en: 'Çox un → ____',        tr: 'much flour',    wrong: 'many flour'   },
  { en: '"a juice" düzgündürmü?',         tr: 'Xeyr',          wrong: 'Bəli'         },
  { en: '"many rices" düzgündürmü?',      tr: 'Xeyr',          wrong: 'Bəli'         },

  // ── Material adları ────────────────────────────────────────
  { en: 'silk',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'gold',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'iron',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'Silk ___ expensive.',  tr: 'is',            wrong: 'are'          },
  { en: 'Gold ___ valuable.',   tr: 'is',            wrong: 'are'          },
  { en: 'Çox kağız → ____',     tr: 'much paper',    wrong: 'many paper'   },
  { en: 'Az benzin → ____',     tr: 'little petrol', wrong: 'few petrol'   },
  { en: '"a cotton" düzgündürmü?',        tr: 'Xeyr',          wrong: 'Bəli'         },
  { en: 'wool — "az" mənasında → ____',   tr: 'little wool',   wrong: 'few wool'     },
  { en: 'chalk nə deməkdir?',             tr: 'təbaşir',       wrong: 'taxta'        },
  { en: 'ink nə deməkdir?',              tr: 'mürəkkəb',      wrong: 'benzin'       },
  { en: 'coal nə deməkdir?',             tr: 'kömür',         wrong: 'dəmir'        },

  // ── Hisslər ────────────────────────────────────────────────
  { en: 'love',        tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'anger',       tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'Love ___ beautiful.',  tr: 'is',            wrong: 'are'          },
  { en: 'Fear ___ natural.',    tr: 'is',            wrong: 'are'          },
  { en: 'joy nə deməkdir?',              tr: 'sevinc',        wrong: 'qorxu'        },
  { en: 'pity nə deməkdir?',             tr: 'təəssüf',       wrong: 'sevgi'        },
  { en: '"a fear" düzgündürmü?',          tr: 'Xeyr',          wrong: 'Bəli'         },

  // ── Keyfiyyət adları ───────────────────────────────────────
  { en: 'happiness',   tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'strength',    tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'Health ___ important.',   tr: 'is',           wrong: 'are'          },
  { en: 'Beauty ___ in the eye.', tr: 'is',           wrong: 'are'          },
  { en: 'courage nə deməkdir?',          tr: 'cəsarət',       wrong: 'səbr'         },
  { en: 'wealth nə deməkdir?',           tr: 'var-dövlət',    wrong: 'sağlamlıq'    },
  { en: 'Çox bəxt → ____',         tr: 'much luck',     wrong: 'many luck'    },

  // ── Fəaliyyət adları ───────────────────────────────────────
  { en: 'knowledge',   tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'advice',      tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'Knowledge ___ power.',    tr: 'is',            wrong: 'are'          },
  { en: 'Progress ___ made.',      tr: 'is',            wrong: 'are'          },
  { en: '"advices" düzgündürmü?',         tr: 'Xeyr',          wrong: 'Bəli'         },
  { en: '"researches" düzgündürmü?',      tr: 'Xeyr',          wrong: 'Bəli'         },
  { en: 'experience nə deməkdir?',        tr: 'təcrübə',       wrong: 'məsləhət'     },
  { en: 'Çox məsləhət → ____',     tr: 'much advice',   wrong: 'many advice'  },

  // ── Gündəlik həyat ─────────────────────────────────────────
  { en: 'furniture',   tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'traffic',     tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'Furniture ___ expensive.', tr: 'is',          wrong: 'are'          },
  { en: 'traffic nə deməkdir?',          tr: 'nəqliyyat',     wrong: 'bazarlıq'     },
  { en: 'soap nə deməkdir?',             tr: 'sabun',         wrong: 'şampun'       },
  { en: 'garbage nə deməkdir?',          tr: 'zibil',         wrong: 'poçt'         },
  { en: '"a furniture" düzgündürmü?',     tr: 'Xeyr',          wrong: 'Bəli'         },

  // ── Digər mücərrəd isimlər ─────────────────────────────────
  { en: 'pollution',   tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'peace',       tr: 'Abstract',     wrong: 'Concrete'   },
  { en: 'Music ___ wonderful.',     tr: 'is',            wrong: 'are'          },
  { en: 'Peace ___ important.',     tr: 'is',            wrong: 'are'          },
  { en: 'gossip nə deməkdir?',           tr: 'şayiə',         wrong: 'cəfəngiyyat'  },
  { en: 'flu nə deməkdir?',              tr: 'soyuqdəymə',    wrong: 'ziyan'        },
  { en: 'charity nə deməkdir?',          tr: 'xeyriyyə',      wrong: 'yardım'       },
  { en: 'evidence nə deməkdir?',         tr: 'dəlil, sübut',  wrong: 'şayiə'        },
  { en: 'hospitality nə deməkdir?',      tr: 'qonaqpərvərlik',wrong: 'əməkdaşlıq'  },

  // ── Təbiət hadisələri ──────────────────────────────────────
  { en: 'rain',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'snow',        tr: 'Uncountable',  wrong: 'Countable'  },
  { en: 'Snow ___ cold.',         tr: 'is',            wrong: 'are'          },
  { en: 'Weather ___ nice today.',tr: 'is',            wrong: 'are'          },
  { en: 'thunder nə deməkdir?',          tr: 'şimşək, ildırım',wrong: 'toz'         },
  { en: 'mud nə deməkdir?',              tr: 'palçıq',        wrong: 'qum'          },
  { en: 'sunshine nə deməkdir?',         tr: 'günəş işığı',   wrong: 'ay işığı'     },
  { en: 'Çox toz → ____',          tr: 'much dust',     wrong: 'many dust'    },
  { en: '"a snow" düzgündürmü?',         tr: 'Xeyr',          wrong: 'Bəli'         },
],

// ── index: 41 — Test 3 (Final — Bölmə 1-dən 8-ə qədər) ───────
[
  // ── Bölmə 1: Quruluş ───────────────────────────────────────
  { en: '"sunrise" hansı quruluş?',          tr: 'Compound noun',   wrong: 'Derivative noun' },
  { en: '"kindness" hansı quruluş?',         tr: 'Derivative noun', wrong: 'Simple noun'     },
  { en: '"hand" hansı quruluş?',             tr: 'Simple noun',     wrong: 'Compound noun'   },
  { en: 'teach → ____',                      tr: 'teacher',         wrong: 'teachness'       },
  { en: 'develop → ____',                    tr: 'development',     wrong: 'developness'     },
  { en: 'free → ____',                       tr: 'freedom',         wrong: 'freehood'        },
  { en: '"heroism" hansı şəkilçi?',          tr: '-ism',            wrong: '-ship'           },
  { en: '"childhood" hansı şəkilçi?',        tr: '-hood',           wrong: '-dom'            },

  // ── Bölmə 2: Common / Proper / Concrete / Abstract ─────────
  { en: '"February" hansı növ?',             tr: 'Proper noun',     wrong: 'Common noun'     },
  { en: '"a lake" hansı növ?',               tr: 'Common noun',     wrong: 'Proper noun'     },
  { en: '"freedom" hansı növ?',              tr: 'Abstract',        wrong: 'Concrete'        },
  { en: '"a table" hansı növ?',              tr: 'Concrete',        wrong: 'Abstract'        },
  { en: '"a good knowledge" — niyə a?',      tr: 'Sifət var',       wrong: 'Countable-dır'   },
  { en: 'actor → ____',                      tr: 'actress',         wrong: 'actoress'        },
  { en: 'Ölkə → hansı əvəzlik?',            tr: 'she',             wrong: 'it'              },

  // ── Bölmə 3: Countable / Uncountable / Many / Much ─────────
  { en: '"advice" hansı növ?',               tr: 'Uncountable',     wrong: 'Countable'       },
  { en: '"student" hansı növ?',              tr: 'Countable',       wrong: 'Uncountable'     },
  { en: 'Çox kitab → ____',                  tr: 'many books',      wrong: 'much books'      },
  { en: 'Az vaxt → ____',                    tr: 'little time',     wrong: 'few time'        },
  { en: 'The news ___ good.',                tr: 'is',              wrong: 'are'             },
  { en: 'There are ___ information.',        tr: 'a lot of',        wrong: 'many'            },
  { en: 'He speaks ____.',                   tr: 'a lot',           wrong: 'a lot of'        },

  // ── Bölmə 4: Kollektiv isimlər ─────────────────────────────
  { en: 'The police ___ there.',             tr: 'were',            wrong: 'was'             },
  { en: 'My family ___ large. (bir bütün)',  tr: 'is',              wrong: 'are'             },
  { en: 'People ___ strange.',               tr: 'are',             wrong: 'is'              },
  { en: 'Money ___ money.',                  tr: 'makes',           wrong: 'make'            },
  { en: 'cattle — "çox" mənasında → ____',   tr: 'much',            wrong: 'many'            },

  // ── Bölmə 5: Cəm formaları ─────────────────────────────────
  { en: 'box → ____',                        tr: 'boxes',           wrong: 'boxs'            },
  { en: 'tooth → ____',                      tr: 'teeth',           wrong: 'tooths'          },
  { en: 'child → ____',                      tr: 'children',        wrong: 'childs'          },
  { en: 'wife → ____',                       tr: 'wives',           wrong: 'wifes'           },
  { en: 'roof → ____',                       tr: 'roofs',           wrong: 'rooves'          },
  { en: 'potato → ____',                     tr: 'potatoes',        wrong: 'potatos'         },
  { en: 'radio → ____',                      tr: 'radios',          wrong: 'radioes'         },
  { en: 'city → ____',                       tr: 'cities',          wrong: 'citys'           },
  { en: 'day → ____',                        tr: 'days',            wrong: 'daies'           },
  { en: 'postman → ____',                    tr: 'postmen',         wrong: 'postmans'        },
  { en: 'German → ____',                     tr: 'Germans',         wrong: 'Germens'         },

  // ── Bölmə 6: Xüsusi cəm halları ────────────────────────────
  { en: 'Where ___ my scissors?',            tr: 'are',             wrong: 'is'              },
  { en: 'Five sheep ___ grazing.',           tr: 'are',             wrong: 'is'              },
  { en: 'Physics ___ difficult.',            tr: 'is',              wrong: 'are'             },
  { en: 'Her hair ___ beautiful.',           tr: 'is',              wrong: 'are'             },
  { en: 'Bir qayçı → ____',                  tr: 'a pair of scissors', wrong: 'a scissors'   },
  { en: 'Today ___ a holiday. (bayram)',     tr: 'is',              wrong: 'are'             },

  // ── Bölmə 7: Possessive case ───────────────────────────────
  { en: 'oğlanın topu → ____',              tr: "the boy's ball",    wrong: "the boys' ball"    },
  { en: 'müəllimlərin otağı → ____',        tr: "the teachers' room",wrong: "the teacher's room"},
  { en: 'uşaqların oyuncaqları → ____',     tr: "the children's toys",wrong: "the childrens' toys"},
  { en: 'stolun qılçası → ____',            tr: 'the leg of the table',wrong: "the table's leg" },
  { en: 'bu günkü qəzet → ____',           tr: "today's newspaper", wrong: 'the newspaper of today'},
  { en: 'iki günlük istirahət → ____',      tr: "two days' rest",    wrong: 'the rest of two days'},
  { en: 'eyni ev (Tom və Nick) → ____',     tr: "Tom and Nick's house",wrong: "Tom's and Nick's house"},

  // ── Bölmə 8: Vocabulary bank ───────────────────────────────
  { en: 'silk',                              tr: 'Uncountable',     wrong: 'Countable'       },
  { en: 'gold',                              tr: 'Uncountable',     wrong: 'Countable'       },
  { en: 'love',                              tr: 'Abstract',        wrong: 'Concrete'        },
  { en: 'knowledge',                         tr: 'Abstract',        wrong: 'Concrete'        },
  { en: 'Honey ___ sweet.',                  tr: 'is',              wrong: 'are'             },
  { en: 'Music ___ wonderful.',              tr: 'is',              wrong: 'are'             },
  { en: 'Çox mürəkkəb → ____',               tr: 'much ink',        wrong: 'many ink'        },
  { en: 'Az palçıq → ____',                  tr: 'little mud',      wrong: 'few mud'         },
  { en: 'joy nə deməkdir?',                  tr: 'sevinc',          wrong: 'qorxu'           },
  { en: 'courage nə deməkdir?',              tr: 'cəsarət',         wrong: 'səbr'            },
  { en: 'pollution nə deməkdir?',            tr: 'çirklənmə',       wrong: 'ziyan'           },
  { en: 'hospitality nə deməkdir?',          tr: 'qonaqpərvərlik',  wrong: 'əməkdaşlıq'     },
  { en: 'thunder nə deməkdir?',              tr: 'şimşək, ildırım', wrong: 'toz'             },
  { en: 'charity nə deməkdir?',              tr: 'xeyriyyə',        wrong: 'yardım'          },
  { en: '"a flour" düzgündürmü?',            tr: 'Xeyr',            wrong: 'Bəli'            },
  { en: '"advices" düzgündürmü?',            tr: 'Xeyr',            wrong: 'Bəli'            },
],],
  },

];
// ============================================================
//  WORDPATH — VERBS DATA (Feil — Məlum növ)
//  Bu faylı KIDS_GRAMMAR_LEVELS array-inin sonuna push et:
//    KIDS_GRAMMAR_LEVELS.push(VERBS_LEVEL);
//  və ya birbaşa LEVELS-ə:
//    LEVELS.push(VERBS_LEVEL);
// ============================================================

const VERBS_LEVEL = {
  id: 'verbs',
  name: 'VERBS',
  icon: '⚡',
  color: '#F59E0B',

  // ══════════════════════════════════════════════════════════
  //  BADGE-LƏR
  // ══════════════════════════════════════════════════════════
  badges: [
    {
      id: 'indefinite_master',
      title: 'Indefinite Master',
      description: 'Qeyri-müəyyən zaman formalarını tamamla',
      icon: '🕐',
      unlockedBy: 'test_1', // Bölmə 1–4 testini bitirdikdə
    },
    {
      id: 'continuous_master',
      title: 'Continuous Master',
      description: 'Davamedici zaman formalarını tamamla',
      icon: '🔄',
      unlockedBy: 'test_2', // Bölmə 5–6 testini bitirdikdə
    },
    {
      id: 'perfect_master',
      title: 'Perfect Master',
      description: 'Bitmiş zaman formalarını tamamla',
      icon: '✅',
      unlockedBy: 'test_3', // Bölmə 7–8 testini bitirdikdə
    },
    {
      id: 'tenses_master',
      title: 'Tenses Master',
      description: 'Bütün testləri bitir',
      icon: '🏆',
      unlockedBy: 'final_test',
    },
  ],

  quizzes: [

    // ══════════════════════════════════════════════════════════
    // ║  QRUP 1 — Qeyri-müəyyən zaman formaları (Indefinite)  ║
    // ══════════════════════════════════════════════════════════

   // ============================================================
//  VERBS — Bölmə 1: Simple Present (Present Indefinite)
//  Bu bloku verbs-data.js faylında müvafiq hissələrə yapışdır:
//
//  index: 1 → Dərs 1.1 placeholder-ını bu obyektlə əvəz et
//  index: 2 → Dərs 1.2 placeholder-ını bu obyektlə əvəz et
//  index: 3 → Mini-quiz 1 array-ini bu array ilə əvəz et
// ============================================================

// ── index: 1 — Dərs 1.1 ──────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.1 — Düzəlmə: to, III şəxs -s/-es',
  cards: [

    // ── Ekran 1: Əsas qayda ──────────────────────────────
    {
      type: 'lesson',
      title: 'Simple Present necə düzəlir?',
      content: 'Simple Present zamanı düzəltmək üçün məsdərdən "to" ədatı atılır, fel olduğu kimi qalır.\n\nYalnız III şəxs təkdə (he/she/it) fel "-s" və ya "-es" sonluğu alır.',
      table: [
        ['Şəxs',        'Tək',      'Cəm'],
        ['I',           'go',       'We go'],
        ['You',         'go',       'You go'],
        ['He/She/It',   'goes',     'They go'],
      ],
      note: '"-es" əlavə edilən hallar: fel s, ss, sh, ch, tch, x, z, o hərfləri ilə bitirsə III şəxs təkdə "-es" alır.',
    },

    // ── Ekran 2: -es nümunələri ──────────────────────────
    {
      type: 'lesson',
      title: '-s və -es nümunələri',
      content: 'III şəxs təkdə düzgün formanı seç:',
      examples: [
        { word: 'teach → he teaches',  az: '-ch ilə bitir → -es' },
        { word: 'pass → she passes',   az: '-ss ilə bitir → -es' },
        { word: 'go → he goes',        az: '-o ilə bitir → -es'  },
        { word: 'watch → she watches', az: '-tch ilə bitir → -es' },
        { word: 'read → she reads',    az: 'adi hal → -s'        },
        { word: 'play → he plays',     az: 'adi hal → -s'        },
      ],
      tip: 'Adi fellər yalnız -s alır. Xüsusi bitişlər (-s, -sh, -ch, -x, -o) isə -es alır.',
    },

    // ── Mini-check: -s / -es ─────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"teach" felinin III şəxs tək forması necədir?',
          options: ['teachs', 'teaches', 'teachies', 'teaching'],
          answer: 'teaches',
        },
        {
          q: '"read" felinin III şəxs tək forması necədir?',
          options: ['reades', 'readings', 'reads', 'reades'],
          answer: 'reads',
        },
        {
          q: '"go" felinin III şəxs tək forması necədir?',
          options: ['gos', 'goes', 'goies', 'going'],
          answer: 'goes',
        },
        {
          q: 'Hansı felin III şəxs tək forması "-es" alır?',
          options: ['play', 'read', 'work', 'watch'],
          answer: 'watch',
        },
        {
          q: '"pass" felinin III şəxs tək forması necədir?',
          options: ['passs', 'passies', 'passes', 'passing'],
          answer: 'passes',
        },
      ],
    },

    // ── Ekran 3: Sual forması ────────────────────────────
    {
      type: 'lesson',
      title: 'Simple Present — sual necə düzəlir?',
      content: 'Sual formasını düzəltmək üçün "to do" köməkçi felindən istifadə edilir.\n\nQayda: "do" / "does" mübtədadan əvvələ keçir. III şəxs təkdə "does" işlənir — bu zaman əsas felin "-s" / "-es" sonluğu düşür.',
      table: [
        ['Şəxs',                  'Sual'],
        ['I / You / We / They',   'Do I/you/we/they go?'],
        ['He / She / It',         'Does he/she/it go?'],
      ],
      examples: [
        { word: 'Do I go?',        az: '✅ düzgün' },
        { word: 'Does he go?',     az: '✅ düzgün' },
        { word: 'Does he goes?',   az: '❌ yanlış — "-s" düşür' },
      ],
      note: 'Qısa cavab:\nYes, I do. / No, I don\'t.\nYes, he does. / No, he doesn\'t.',
    },

    // ── Mini-check: Sual forması ─────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"___ he speak English well?" — boşluğa nə gəlir?',
          options: ['Do', 'Is', 'Does', 'Did'],
          answer: 'Does',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'Does he goes to school?',
            'Do he go to school?',
            'Does he go to school?',
            'Does he going to school?',
          ],
          answer: 'Does he go to school?',
        },
        {
          q: '"Do they work here?" — qısa müsbət cavab necədir?',
          options: ['Yes, they do.', 'Yes, they does.', 'Yes, they are.', 'Yes, they work.'],
          answer: 'Yes, they do.',
        },
        {
          q: '"Does she like coffee?" — qısa mənfi cavab necədir?',
          options: ['No, she doesn\'t.', 'No, she don\'t.', 'No, she does.', 'No, she isn\'t.'],
          answer: 'No, she doesn\'t.',
        },
      ],
    },

    // ── Ekran 4: İnkar forması ───────────────────────────
    {
      type: 'lesson',
      title: 'Simple Present — inkar necə düzəlir?',
      content: 'İnkar formasını düzəltmək üçün mübtədadan sonra "do not" (don\'t) və ya "does not" (doesn\'t) əlavə edilir.',
      table: [
        ['Şəxs',    'Tam inkar',          'Qısa inkar'],
        ['I',       'I do not read',       'I don\'t read'],
        ['You',     'You do not read',     'You don\'t read'],
        ['He/She',  'He does not read',    'He doesn\'t read'],
        ['We/They', 'We do not read',      'We don\'t read'],
      ],
      examples: [
        { word: 'Don\'t I go? = Do I not go?',       az: 'Sual-inkar forması' },
        { word: 'Doesn\'t he go? = Does he not go?', az: 'Sual-inkar forması' },
      ],
    },

    // ── Mini-check: İnkar forması ────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ like coffee." — boşluğa nə gəlir?',
          options: ['don\'t', 'doesn\'t', 'isn\'t', 'not'],
          answer: 'doesn\'t',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'He don\'t work here.',
            'She doesn\'t works here.',
            'They doesn\'t work here.',
            'I don\'t work here.',
          ],
          answer: 'I don\'t work here.',
        },
        {
          q: '"We do not go" — qısa forması necədir?',
          options: ['We doesn\'t go', 'We don\'t go', 'We not go', 'We aren\'t go'],
          answer: 'We don\'t go',
        },
      ],
    },
  ],
},

// ── index: 2 — Dərs 1.2 ──────────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 1.2 — İşlənmə: adat, həqiqət, xarakter',
  cards: [

    // ── Ekran 1: 4 əsas işlənmə halı ─────────────────────
    {
      type: 'lesson',
      title: 'Simple Present — 4 əsas işlənmə halı',
      content: 'Simple Present aşağıdakı hallarda işlənir:',
      examples: [
        { word: '1. Adət halına almış, təkrarlanan hərəkətlər', az: 'every day, usually, always...' },
        { word: '2. Ümumi həqiqətlər',                          az: 'təbiət, elm faktları'          },
        { word: '3. Şəxsi xüsusiyyətlər',                      az: 'daimi vərdişlər, bacarıqlar'   },
        { word: '4. Zaman və şərt budaq cümlələri',             az: 'when, if, before, until...'    },
      ],
      tip: 'Zaman zərfləri: every day/week/month/year, usually, always, often, sometimes, seldom, once a week, on Sundays',
    },

    // ── Ekran 2: Adət + Həqiqət ──────────────────────────
    {
      type: 'lesson',
      title: 'Adət və ümumi həqiqətlər',
      content: '1. Adət halına almış, təkrarlanan hərəkətlər:',
      examples: [
        { word: 'I go to the institute every day.',    az: 'Mən hər gün institutа gedirəm.' },
        { word: 'They usually have dinner at five.',   az: 'Onlar adətən saat 5-də nahar edirlər.' },
      ],
      note: '2. Ümumi həqiqətlər — təbiət və cəmiyyətdə daima doğru olan faktlar:',
    },

    // ── Ekran 3: Həqiqətlər + Xüsusiyyətlər ─────────────
    {
      type: 'lesson',
      title: 'Ümumi həqiqətlər və şəxsi xüsusiyyətlər',
      content: 'Ümumi həqiqətlər:',
      examples: [
        { word: 'The sun rises in the East.',          az: 'Günəş şərqdən doğur.' },
        { word: 'Water boils at 100 degrees.',         az: 'Su 100 dərəcədə qaynayır.' },
        { word: 'The Earth travels around the Sun.',   az: 'Yer Günəşin ətrafında fırlanır.' },
        { word: 'He sleeps soundly.',                  az: 'O möhkəm yatır. (xüsusiyyət)' },
        { word: 'She plays tennis well.',              az: 'O tennis yaxşı oynayır. (xüsusiyyət)' },
      ],
    },

    // ── Mini-check: İşlənmə halları ──────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"The sun rises in the East." — bu cümlə Simple Present-in hansı işlənmə halıdır?',
          options: ['Adət', 'Ümumi həqiqət', 'Xüsusiyyət', 'Şərt budaq cümləsi'],
          answer: 'Ümumi həqiqət',
        },
        {
          q: '"I go to the institute every day." — hansı işlənmə halıdır?',
          options: ['Ümumi həqiqət', 'Şərt budaq cümləsi', 'Adət', 'Xüsusiyyət'],
          answer: 'Adət',
        },
        {
          q: '"She plays tennis well." — hansı işlənmə halıdır?',
          options: ['Adət', 'Ümumi həqiqət', 'Şərt budaq cümləsi', 'Xüsusiyyət'],
          answer: 'Xüsusiyyət',
        },
        {
          q: 'Hansı zaman zərfi Simple Present ilə işlənir?',
          options: ['yesterday', 'tomorrow', 'usually', 'right now'],
          answer: 'usually',
        },
      ],
    },

    // ── Ekran 4: Zaman + Şərt budaq cümlələri ───────────
    {
      type: 'lesson',
      title: 'Zaman və şərt budaq cümlələri',
      content: '"till", "until", "when", "before", "as soon as", "if" bağlayıcılarından sonra gələcək zamanda baş verəcək hərəkətlər Simple Present ilə verilir.\n\nQayda:\n• Budaq cümlə (bağlayıcı olan tərəf) → Simple Present\n• Baş cümlə → Future (will/shall)',
      examples: [
        { word: 'I shall go to the cinema if she comes.',    az: 'if → Simple Present' },
        { word: 'When it stops raining, we will go out.',    az: 'when → Simple Present' },
        { word: 'Call me as soon as you arrive.',            az: 'as soon as → Simple Present' },
      ],
      tip: 'Bağlayıcıdan sonra "will" işlənmir — bu ən çox yol verilən səhvdir!',
    },

    // ── Mini-check: Zaman + Şərt budaq cümlələri ────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I shall go if she ___." — boşluğa nə gəlir?',
          options: ['will come', 'comes', 'is coming', 'came'],
          answer: 'comes',
        },
        {
          q: '"When it ___ raining, we will go out." — boşluğa nə gəlir?',
          options: ['will stop', 'stopped', 'stops', 'is stopping'],
          answer: 'stops',
        },
        {
          q: 'Hansı cümlə düzgündür?',
          options: [
            'Call me as soon as you will arrive.',
            'Call me as soon as you arrive.',
            'Call me as soon as you arrived.',
            'Call me as soon as you are arriving.',
          ],
          answer: 'Call me as soon as you arrive.',
        },
        {
          q: '"if", "when", "before" bağlayıcılarından sonra gələcəyi ifadə etmək üçün hansı zaman işlənir?',
          options: ['Simple Future', 'Simple Past', 'Simple Present', 'Present Continuous'],
          answer: 'Simple Present',
        },
        {
          q: '"Till she ___, I will wait here." — boşluğa nə gəlir?',
          options: ['will come', 'is coming', 'came', 'comes'],
          answer: 'comes',
        },
      ],
    },

    // ── Ekran 5: Azərbaycana tərcümə + Xülasə ───────────
    {
      type: 'lesson',
      title: 'Xülasə — Simple Present',
      content: 'Simple Present bir qayda olaraq Azərbaycan dilinin indiki zaman forması kimi tərcümə olunur.',
      table: [
        ['İngilis',                        'Azərbaycan'],
        ['I go to school.',                'Mən məktəbə gedirəm.'],
        ['She reads books.',               'O kitab oxuyur.'],
        ['The sun rises in the East.',     'Günəş şərqdən doğur.'],
      ],
      note: 'Düzəlmə xülasəsi:\n• Əsas forma: to → at (to go → go)\n• III şəxs tək: -s / -es\n• Sual: Do / Does + məsdər\n• İnkar: don\'t / doesn\'t + məsdər',
    },
  ],
},

// ── index: 3 — Mini-quiz 1 ────────────────────────────────
// Do/Does · Doğru forma tap · Zaman zərfi ilə uyğunlaşdır
[
  // III şəxs tək forması
  { en: 'teach → he ____',           tr: 'teaches',    wrong: 'teachs'      },
  { en: 'go → she ____',             tr: 'goes',       wrong: 'gos'         },
  { en: 'read → he ____',            tr: 'reads',      wrong: 'reades'      },
  { en: 'watch → she ____',          tr: 'watches',    wrong: 'watchs'      },
  { en: 'play → he ____',            tr: 'plays',      wrong: 'plaies'      },
  { en: 'pass → she ____',           tr: 'passes',     wrong: 'passs'       },

  // Do / Does sual
  { en: '"___ she like coffee?"',    tr: 'Does',       wrong: 'Do'          },
  { en: '"___ they work here?"',     tr: 'Do',         wrong: 'Does'        },
  { en: '"___ he go to school?"',    tr: 'Does',       wrong: 'Do'          },
  { en: '"___ we need help?"',       tr: 'Do',         wrong: 'Does'        },

  // İnkar
  { en: 'She ___ like coffee.',      tr: 'doesn\'t',   wrong: 'don\'t'      },
  { en: 'They ___ work here.',       tr: 'don\'t',     wrong: 'doesn\'t'    },
  { en: 'He ___ read books.',        tr: 'doesn\'t',   wrong: 'don\'t'      },

  // Düzgün / yanlış forma
  { en: 'Does he go? — düzgündürmü?',   tr: 'Bəli',   wrong: 'Xeyr'        },
  { en: 'Does he goes? — düzgündürmü?', tr: 'Xeyr',   wrong: 'Bəli'        },
  { en: 'Do she go? — düzgündürmü?',    tr: 'Xeyr',   wrong: 'Bəli'        },

  // İşlənmə halları
  { en: '"The sun rises in the East." — hansı hal?', tr: 'Ümumi həqiqət', wrong: 'Adət'       },
  { en: '"I go there every day." — hansı hal?',      tr: 'Adət',          wrong: 'Ümumi həqiqət' },
  { en: '"She plays tennis well." — hansı hal?',     tr: 'Xüsusiyyət',    wrong: 'Adət'       },

  // Zaman + şərt budaq cümlələri
  { en: '"If she ___, I will go." — boşluq',         tr: 'comes',         wrong: 'will come'  },
  { en: '"When it ___ raining, we\'ll go out."',     tr: 'stops',         wrong: 'will stop'  },
  { en: '"Call me as soon as you ___."',              tr: 'arrive',        wrong: 'will arrive'},

  // Zaman zərfləri
  { en: 'Simple Present ilə işlənən zərf',           tr: 'usually',       wrong: 'yesterday'  },
  { en: 'Simple Present ilə işlənən zərf',           tr: 'every day',     wrong: 'tomorrow'   },
],
   

 // ============================================================
//  BÖLMƏ 2 — Simple Past (Past Indefinite)
//  grammar-data.js faylına əlavə et
// ============================================================

// ── Bölmə 2 Divider ──────────────────────────────────────
{
  type: 'section_divider',
  title: 'Bölmə 2 — Simple Past (Past Indefinite)',
},

// ── Dərs 2.1 — Qaydalı fellər ────────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.1 — Qaydalı fellər və -ed tələffüzü',
  cards: [

    // ── Ekran 1: Düzəlmə qaydası ─────────────────────────
    {
      type: 'lesson',
      title: 'Simple Past necə düzəlir?',
      content: 'Simple Past zamanı keçmişdə baş vermiş hərəkətləri bildirir.\n\nQaydalı fellərin (regular verbs) keçmiş zaman formasını düzəltmək üçün:\n• Məsdərdən "to" atılır\n• Felin sonuna "-ed" əlavə edilir\n• Bütün şəxslərdə eyni qalır',
      table: [
        ['Şəxs', 'Tək', 'Cəm'],
        ['I',        'worked', 'We worked'],
        ['You',      'worked', 'You worked'],
        ['He/She/It','worked', 'They worked'],
      ],
      tip: 'Simple Present-dən fərqli olaraq Simple Past-da III şəxs təkdə əlavə dəyişiklik olmur — hamı eyni formadadır.',
    },

    // ── Ekran 2: -ed tələffüzü ───────────────────────────
    {
      type: 'lesson',
      title: '"-ed" sonluğunun tələffüzü',
      content: '"-ed" sonluğu üç cür tələffüz edilir. Bu, feldən əvvəlki səsdən asılıdır:',
      table: [
        ['Tələffüz', 'Şərt',                          'Nümunə'],
        ['[d]',      'Sait və cingiltili samitdən sonra', 'played, lived, opened'],
        ['[t]',      'Kar samitdən sonra',               'asked, worked, stopped'],
        ['[ɪd]',     '"d" və "t" samitlərindən sonra',   'added, wanted, started'],
      ],
      note: 'Yalnız "d" və "t" ilə bitən fellərdə "-ed" [ɪd] kimi tam bir heca əmələ gətirir.',
    },

    // ── Quiz: -ed tələffüzü ──────────────────────────────
    { en: '"played" — "-ed" necə oxunur?',  tr: '[d]',  wrong: '[t]'  },
    { en: '"asked" — "-ed" necə oxunur?',   tr: '[t]',  wrong: '[ɪd]' },
    { en: '"wanted" — "-ed" necə oxunur?',  tr: '[ɪd]', wrong: '[d]'  },
    { en: '"lived" — "-ed" necə oxunur?',   tr: '[d]',  wrong: '[ɪd]' },
    { en: '"stopped" — "-ed" necə oxunur?', tr: '[t]',  wrong: '[d]'  },

    // ── Ekran 3: Sual forması ────────────────────────────
    {
      type: 'lesson',
      title: 'Simple Past — sual forması',
      content: 'Sual formasını düzəltmək üçün "did" köməkçi feli mübtədadan əvvələ keçir.\n\nBu zaman əsas felin "-ed" sonluğu düşür — fel başlanğıc formasına qayıdır.',
      table: [
        ['Şəxs',          'Sual forması'],
        ['I / You / We / They', 'Did I / you / we / they work?'],
        ['He / She / It',       'Did he / she / it work?'],
      ],
      examples: [
        { word: 'Did he work?', az: '✅ düzgün' },
        { word: 'Did he worked?', az: '❌ yanlış — "did" artıq keçmişi bildirir' },
      ],
      note: 'Qısa cavab: "Yes, I did." / "No, I didn\'t." / "Yes, he did." / "No, he didn\'t."',
    },

    // ── Ekran 4: İnkar forması ───────────────────────────
    {
      type: 'lesson',
      title: 'Simple Past — inkar forması',
      content: 'İnkar formasını düzəltmək üçün mübtədadan sonra "did not" (didn\'t) əlavə edilir.\n\nBurada da əsas felin "-ed" sonluğu düşür.',
      table: [
        ['Şəxs',   'Tam inkar',            'Qısa inkar'],
        ['I',      'I did not work',       'I didn\'t work'],
        ['You',    'You did not work',     'You didn\'t work'],
        ['He/She', 'He did not work',      'He didn\'t work'],
        ['We/They','We did not work',      'We didn\'t work'],
      ],
      tip: 'Sual-inkar: "Did I not go?" = "Didn\'t I go?" — hər ikisi düzgündür.',
    },

    // ── Mini-check: Qaydalı fellər ───────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"She ___ to school yesterday." — Boşluğa nə gəlir?',
          options: ['go', 'goes', 'went', 'walked'],
          answer: 'walked',
        },
        {
          q: '"___ he speak English well?" — sual forması?',
          options: ['Do', 'Does', 'Did', 'Was'],
          answer: 'Did',
        },
        {
          q: 'Hansı cümlə YANLIŞ-dır?',
          options: [
            'She didn\'t go to school.',
            'Did he played football?',
            'I didn\'t like coffee.',
            'They didn\'t work here.',
          ],
          answer: 'Did he played football?',
        },
        {
          q: '"worked" sözündəki "-ed" necə oxunur?',
          options: ['[d]', '[t]', '[ɪd]', '[ed]'],
          answer: '[t]',
        },
        {
          q: '"added" sözündəki "-ed" necə oxunur?',
          options: ['[d]', '[t]', '[ɪd]', '[æd]'],
          answer: '[ɪd]',
        },
        {
          q: '"I ___ my homework last night." — Boşluğa nə gəlir?',
          options: ['finish', 'finishes', 'finished', 'finishing'],
          answer: 'finished',
        },
      ],
    },
  ],
},

// ── Dərs 2.2 — Qaydasız fellər ───────────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.2 — Qaydasız fellər (Irregular Verbs)',
  cards: [

    // ── Ekran 1: Giriş + qruplar ─────────────────────────
    {
      type: 'lesson',
      title: 'Qaydasız fellər — 5 qrup',
      content: 'Qaydasız fellərin (irregular verbs) keçmiş zamanı "-ed" ilə deyil, müxtəlif yollarla düzəlir.\n\nBu fellər 5 qrupa bölünür:',
      examples: [
        { word: '1. Kök + "-en" artır',        az: 'write → wrote → written' },
        { word: '2. Kök + "-d"/"-t" artır',    az: 'sell → sold → sold' },
        { word: '3. "-d" samiti "-t"-yə çevrilir', az: 'spend → spent → spent' },
        { word: '4. Heç dəyişmir',             az: 'cut → cut → cut' },
        { word: '5. Hər üç forması fərqlidir', az: 'go → went → gone' },
      ],
      tip: 'Bu fellərin keçmiş zaman formalarını əzbərləmək lazımdır — qayda yoxdur!',
    },

    // ── Ekran 2: Qrup 1 — kök dəyişir + en ──────────────
    {
      type: 'lesson',
      title: 'Qrup 1 — Kök dəyişir + "-en" artır',
      content: 'Bu fellərin Past Simple formasında kökdəki sait dəyişir:\n(Past Participle — P II — "-en" qəbul edir)',
      table: [
        ['Məsdər', 'Past Simple', 'P II'],
        ['write',  'wrote',      'written'],
        ['speak',  'spoke',      'spoken'],
        ['break',  'broke',      'broken'],
        ['drive',  'drove',      'driven'],
        ['give',   'gave',       'given'],
        ['ride',   'rode',       'ridden'],
        ['choose', 'chose',      'chosen'],
        ['freeze', 'froze',      'frozen'],
        ['take',   'took',       'taken'],
      ],
    },

    // ── Quiz: Qrup 1 ─────────────────────────────────────
    { en: 'write → Past Simple?',  tr: 'wrote',  wrong: 'writed'  },
    { en: 'speak → Past Simple?',  tr: 'spoke',  wrong: 'speaked' },
    { en: 'break → Past Simple?',  tr: 'broke',  wrong: 'breaked' },
    { en: 'drive → Past Simple?',  tr: 'drove',  wrong: 'drived'  },
    { en: 'give → Past Simple?',   tr: 'gave',   wrong: 'gived'   },

    // ── Ekran 3: Qrup 2 — kök dəyişir + -d/-t ───────────
    {
      type: 'lesson',
      title: 'Qrup 2 — Kök dəyişir + "-d"/"-t" artır',
      content: 'Bu fellərdə kökdəki sait dəyişir VƏ sonuna "d" ya "t" samiti artır.\nPast Simple = P II (eyni forma):',
      table: [
        ['Məsdər', 'Past Simple', 'P II'],
        ['sell',   'sold',  'sold'],
        ['tell',   'told',  'told'],
        ['feel',   'felt',  'felt'],
        ['keep',   'kept',  'kept'],
        ['sleep',  'slept', 'slept'],
        ['meet',   'met',   'met'],
        ['leave',  'left',  'left'],
        ['lose',   'lost',  'lost'],
        ['find',   'found', 'found'],
        ['hear',   'heard', 'heard'],
      ],
    },

    // ── Ekran 4: Qrup 3 — d→t çevrilir ──────────────────
    {
      type: 'lesson',
      title: 'Qrup 3 — "-d" samiti "-t"-yə çevrilir',
      content: 'Bu fellərdə kökün sonundakı "d" samiti "t"-yə çevrilir:\nPast Simple = P II (eyni forma):',
      table: [
        ['Məsdər', 'Past Simple', 'P II'],
        ['spend',  'spent', 'spent'],
        ['send',   'sent',  'sent'],
        ['bend',   'bent',  'bent'],
        ['build',  'built', 'built'],
        ['lend',   'lent',  'lent'],
      ],
    },

    // ── Ekran 5: Qrup 4 — dəyişmir ──────────────────────
    {
      type: 'lesson',
      title: 'Qrup 4 — Dəyişməyən fellər',
      content: 'Bu fellər məsdər, Past Simple və P II formalarında eyni qalır:',
      examples: [
        { word: 'cut → cut → cut',       az: 'kəsmək' },
        { word: 'put → put → put',       az: 'qoymaq' },
        { word: 'let → let → let',       az: 'icazə vermək' },
        { word: 'hit → hit → hit',       az: 'vurmaq' },
        { word: 'hurt → hurt → hurt',    az: 'incitmək' },
        { word: 'cost → cost → cost',    az: 'dəymək (qiymət)' },
        { word: 'set → set → set',       az: 'qurmaq' },
        { word: 'read → read → read',    az: 'oxumaq ([riːd]→[red])' },
        { word: 'spread → spread → spread', az: 'yaymaq' },
        { word: 'shut → shut → shut',    az: 'bağlamaq' },
      ],
      tip: '"read" Past Simple-da eyni yazılır amma [red] kimi oxunur!',
    },

    // ── Ekran 6: Qrup 5 + Naqis fellər ──────────────────
    {
      type: 'lesson',
      title: 'Qrup 5 — Hər üç forması fərqli + Naqis fellər',
      content: 'Ən qeyri-müntəzəm qrup — hər üç forma tamamilə fərqlidir:',
      table: [
        ['Məsdər', 'Past Simple', 'P II'],
        ['be',     'was / were', 'been'],
        ['go',     'went',       'gone'],
        ['do',     'did',        'done'],
        ['see',    'saw',        'seen'],
        ['buy',    'bought',     'bought'],
        ['bring',  'brought',    'brought'],
        ['think',  'thought',    'thought'],
        ['teach',  'taught',     'taught'],
        ['catch',  'caught',     'caught'],
      ],
      note: 'Modal fellərin keçmiş formaları:\ncan → could | will → would | may → might | shall → should\n\n"must" felinin keçmiş forması yoxdur — əvəzinə "had to" işlədilir.',
    },

    // ── Quiz: Qaydasız + Naqis ───────────────────────────
    { en: 'sell → Past Simple?',   tr: 'sold',    wrong: 'selled'  },
    { en: 'feel → Past Simple?',   tr: 'felt',    wrong: 'feeled'  },
    { en: 'go → Past Simple?',     tr: 'went',    wrong: 'goed'    },
    { en: 'cut → Past Simple?',    tr: 'cut',     wrong: 'cutted'  },
    { en: 'buy → Past Simple?',    tr: 'bought',  wrong: 'buyed'   },
    { en: '"can" → keçmiş forması?', tr: 'could', wrong: 'canned'  },
    { en: '"will" → keçmiş forması?', tr: 'would', wrong: 'willed' },

    // ── Mini-check: Qaydasız fellər ──────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"speak" felinin Past Simple forması hansıdır?',
          options: ['speaked', 'spoke', 'spoken', 'spake'],
          answer: 'spoke',
        },
        {
          q: 'Hansı fel Past Simple-da dəyişmir?',
          options: ['write', 'speak', 'cut', 'go'],
          answer: 'cut',
        },
        {
          q: '"can" felinin keçmiş forması nədir?',
          options: ['canned', 'was can', 'could', 'might'],
          answer: 'could',
        },
        {
          q: '"feel" → Past Simple?',
          options: ['feeled', 'felt', 'fallen', 'feel'],
          answer: 'felt',
        },
        {
          q: '"read" felinin Past Simple tələffüzü necədir?',
          options: ['[riːd]', '[red]', '[rɪd]', '[reɪd]'],
          answer: '[red]',
        },
        {
          q: '"will" felinin keçmiş forması nədir?',
          options: ['willed', 'would', 'should', 'could'],
          answer: 'would',
        },
        {
          q: '"send" → Past Simple?',
          options: ['sended', 'sent', 'sind', 'sand'],
          answer: 'sent',
        },
        {
          q: '"go" → Past Simple?',
          options: ['goed', 'gone', 'went', 'going'],
          answer: 'went',
        },
        {
          q: '"build" → Past Simple?',
          options: ['builded', 'built', 'bild', 'builed'],
          answer: 'built',
        },
        {
          q: '"must" felinin keçmiş forması nədir?',
          options: ['musted', 'should', 'could', 'had to'],
          answer: 'had to',
        },
      ],
    },
  ],
},

// ── Dərs 2.3 — İşlənmə + Qarışıq fellər ─────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 2.3 — İşlənmə, Zaman zərfləri və Qarışıq fellər',
  cards: [

    // ── Ekran 1: 3 işlənmə halı ──────────────────────────
    {
      type: 'lesson',
      title: 'Simple Past — 3 əsas işlənmə halı',
      content: 'Simple Past zamanı üç əsas halda işlədilir:',
      examples: [
        { word: '1. Keçmişdə baş vermiş hərəkət', az: '"He went to the park yesterday."' },
        { word: '2. Keçmişdə ardıcıl hərəkətlər', az: '"He came in, greeted them and sat down."' },
        { word: '3. Keçmişdə müddətli hərəkət',   az: '"When I lived in the village, I swam every day."' },
      ],
      tip: 'Azərbaycan dilinə şühudi keçmiş zaman kimi tərcümə olunur (-dı/-di/-du/-dü).',
    },

    // ── Ekran 2: Zaman zərfləri ──────────────────────────
    {
      type: 'lesson',
      title: 'Simple Past — zaman zərfləri',
      content: 'Bu zərflər hərəkətin keçmişdə baş verdiyini bildirir. Cümlədə bu zərflərdən biri varsa Simple Past işlənir:',
      table: [
        ['Zaman zərfi',               'Mənası'],
        ['yesterday',                 'dünən'],
        ['the day before yesterday',  'srağagün'],
        ['... ago',                   '... əvvəl (two days ago)'],
        ['last week / month / year',  'keçən həftə/ay/il'],
        ['once',                      'bir dəfə, bir vaxtlar'],
        ['in 1994',                   '1994-cü ildə'],
        ['during the war',            'müharibə zamanı'],
        ['in my childhood / youth',   'uşaqlığımda / gəncliyimdə'],
        ['on Monday / on Sunday',     'bazar ertəsi / bazar günü'],
        ['the other day',             'bu yaxınlarda (keçmiş)'],
      ],
      note: 'Diqqət: "yesterday", "ago", "last" kimi zərflər olduqda mütləq Simple Past işlənir — Present Perfect deyil!',
    },

    // ── Ekran 3: used to + məsdər ────────────────────────
    {
      type: 'lesson',
      title: '"used to" — keçmişin vərdişi',
      content: 'Keçmişdə müntəzəm təkrarlanan, lakin artıq baş verməyən hərəkətlər üçün "used to + məsdər" işlənir.',
      examples: [
        { word: 'I used to go to the river.',      az: 'Mən çayda üzərdim. (indi etmirəm)' },
        { word: 'She used to play piano.',         az: 'O piano çalardı. (indi çalmır)' },
        { word: 'We used to live in Baku.',        az: 'Biz Bakıda yaşayardıq. (indi yaşamırıq)' },
        { word: 'When I was young I used to swim.', az: 'Gənc olanda üzərdim.' },
      ],
      note: 'Azərbaycan dilinə müzarəli keçmiş zaman kimi tərcümə olunur (-ər, -irdim kimi).\nI went to the forest every day. — Hər gün meşəyə gedərdim.',
    },

    // ── Mini-check: used to ──────────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"used to" + _____ ? — hansı forma gəlir?',
          options: ['məsdər (to-suz)', 'məsdər (to ilə)', '-ing forması', '-ed forması'],
          answer: 'məsdər (to-suz)',
        },
        {
          q: '"I ___ swim in the river." — doğru forma?',
          options: ['use to', 'used to', 'am used to', 'was using'],
          answer: 'used to',
        },
        {
          q: '"used to" nə bildirir?',
          options: [
            'İndiki vərdiş',
            'Keçmişdə olan amma artıq olmayan vərdiş',
            'Gələcəkdə olacaq hərəkət',
            'Bitmiş hərəkət',
          ],
          answer: 'Keçmişdə olan amma artıq olmayan vərdiş',
        },
      ],
    },

    // ── Ekran 4: Qarışıq fellər ──────────────────────────
    {
      type: 'lesson',
      title: 'Qarışıq fellər (Mixed Verbs)',
      content: 'Qarışıq fellər (mixed verbs) — Past Simple forması qaydalı (-ed), Past Participle (P II) forması qaydasız olan fellərdir:',
      table: [
        ['Məsdər', 'Past Simple', 'P II'],
        ['show',   'showed',      'shown'],
        ['learn',  'learned',     'learnt'],
        ['burn',   'burned',      'burnt'],
        ['dream',  'dreamed',     'dreamt'],
        ['sew',    'sewed',       'sewn'],
      ],
      note: 'Bu fellərin Past Simple forması qaydalı (-ed) düzəlir, lakin P II forması qaydasız olur.',
    },

    // ── Ekran 5: Müqayisə cədvəli ────────────────────────
    {
      type: 'lesson',
      title: 'Simple Present vs Simple Past — müqayisə',
      content: 'İki zamanı fərqləndirən əsas cəhətlər:',
      table: [
        ['Xüsusiyyət',         'Simple Present',            'Simple Past'],
        ['Zaman',             'İndiki, adət',               'Keçmiş'],
        ['Qaydalı fel',       'work / works',               'worked'],
        ['Sual köməkçisi',    'do / does',                  'did'],
        ['İnkar',             'don\'t / doesn\'t',          'didn\'t'],
        ['III şəxs tək',      'works (-s əlavəsi)',          'worked (dəyişmir)'],
        ['Zaman zərfi',       'every day, usually',         'yesterday, ago, last'],
        ['Az. dilindəki forma', 'İndiki zaman (-ır/-ir)',   'Keçmiş zaman (-dı/-di)'],
      ],
    },

    // ── Mini-check: İşlənmə + Qarışıq fellər ─────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"He ___ to the park yesterday." — Boşluğa nə gəlir?',
          options: ['go', 'goes', 'went', 'going'],
          answer: 'went',
        },
        {
          q: 'Hansı zaman zərfi Simple Past ilə işlənir?',
          options: ['already', 'yet', 'yesterday', 'recently'],
          answer: 'yesterday',
        },
        {
          q: '"show" felinin Past Simple forması nədir?',
          options: ['shown', 'showed', 'shew', 'showded'],
          answer: 'showed',
        },
        {
          q: 'Simple Past Azərbaycan dilinə necə tərcümə olunur?',
          options: [
            'İndiki zaman (-ır/-ir)',
            'Şühudi keçmiş (-dı/-di)',
            'Nəqli keçmiş (-mış/-miş)',
            'Gələcək zaman (-acaq/-əcək)',
          ],
          answer: 'Şühudi keçmiş (-dı/-di)',
        },
        {
          q: '"used to" niyə işlənir?',
          options: [
            'Keçmişdə bir dəfə baş verən hərəkət üçün',
            'Keçmişdə müntəzəm olan amma artıq olmayan vərdiş üçün',
            'Gələcəkdə olacaq hərəkət üçün',
            'İndiki vərdiş üçün',
          ],
          answer: 'Keçmişdə müntəzəm olan amma artıq olmayan vərdiş üçün',
        },
        {
          q: '"She ___ coffee every day when she was a student." — Boşluğa nə gəlir?',
          options: ['drinks', 'drank', 'used to drink', 'is drinking'],
          answer: 'used to drink',
        },
        {
          q: 'Ardıcıl keçmiş hərəkətlər üçün hansı cümlə düzgündür?',
          options: [
            'He comes in, greets and sits down.',
            'He came in, greeted and sat down.',
            'He has come in, greeted and sat down.',
            'He was coming in, greeted and sat down.',
          ],
          answer: 'He came in, greeted and sat down.',
        },
      ],
    },
  ],
},

// ── Mini-quiz 2 — Bölmə 2 ümumi quiz ────────────────────
[
  // Qaydalı fellər — düzəlmə
  { en: '"work" → Past Simple?',   tr: 'worked',   wrong: 'workes'   },
  { en: '"play" → Past Simple?',   tr: 'played',   wrong: 'plaied'   },
  { en: '"study" → Past Simple?',  tr: 'studied',  wrong: 'studyed'  },
  { en: '"stop" → Past Simple?',   tr: 'stopped',  wrong: 'stoped'   },

  // -ed tələffüzü
  { en: '"opened" → tələffüz?',  tr: '[d]',  wrong: '[t]'  },
  { en: '"worked" → tələffüz?',  tr: '[t]',  wrong: '[d]'  },
  { en: '"started" → tələffüz?', tr: '[ɪd]', wrong: '[t]'  },
  { en: '"lived" → tələffüz?',   tr: '[d]',  wrong: '[ɪd]' },

  // Sual forması
  { en: 'Sual: "He worked." → ____', tr: 'Did he work?',  wrong: 'Did he worked?' },
  { en: '"___ she speak English?" — sual?', tr: 'Did', wrong: 'Does' },

  // İnkar forması
  { en: '"I ___ go to school." — inkar?', tr: 'didn\'t', wrong: 'don\'t' },
  { en: '"He ___ work yesterday." — inkar?', tr: 'didn\'t', wrong: 'doesn\'t' },

  // Qaydasız fellər — Qrup 1
  { en: 'write → Past Simple?',  tr: 'wrote',  wrong: 'writed'  },
  { en: 'speak → Past Simple?',  tr: 'spoke',  wrong: 'speaked' },
  { en: 'give → Past Simple?',   tr: 'gave',   wrong: 'gived'   },
  { en: 'drive → Past Simple?',  tr: 'drove',  wrong: 'drived'  },

  // Qaydasız fellər — Qrup 2
  { en: 'sell → Past Simple?',   tr: 'sold',   wrong: 'selled'  },
  { en: 'feel → Past Simple?',   tr: 'felt',   wrong: 'feeled'  },
  { en: 'leave → Past Simple?',  tr: 'left',   wrong: 'leaved'  },
  { en: 'find → Past Simple?',   tr: 'found',  wrong: 'finded'  },

  // Qrup 3 — d→t
  { en: 'spend → Past Simple?',  tr: 'spent',  wrong: 'spended' },
  { en: 'send → Past Simple?',   tr: 'sent',   wrong: 'sended'  },
  { en: 'build → Past Simple?',  tr: 'built',  wrong: 'builded' },

  // Qrup 4 — dəyişmir
  { en: 'cut → Past Simple?',    tr: 'cut',    wrong: 'cutted'  },
  { en: 'put → Past Simple?',    tr: 'put',    wrong: 'putted'  },
  { en: 'read [riːd] → Past Simple tələffüz?', tr: '[red]', wrong: '[riːd]' },

  // Qrup 5 — hər üçü fərqli
  { en: 'go → Past Simple?',     tr: 'went',   wrong: 'goed'    },
  { en: 'buy → Past Simple?',    tr: 'bought', wrong: 'buyed'   },
  { en: 'think → Past Simple?',  tr: 'thought', wrong: 'thinked' },
  { en: 'teach → Past Simple?',  tr: 'taught', wrong: 'teached' },

  // Modal fellər
  { en: '"can" → keçmiş forması?',  tr: 'could',  wrong: 'canned'  },
  { en: '"will" → keçmiş forması?', tr: 'would',  wrong: 'willed'  },
  { en: '"must" → keçmiş əvəzliyici?', tr: 'had to', wrong: 'should' },

  // used to
  { en: '"Keçmişdə üzərdim" → ____', tr: 'used to swim', wrong: 'use to swim'  },
  { en: '"Uşaqlıqda piano çalardım" → ____', tr: 'used to play piano', wrong: 'was used to play piano' },

  // Zaman zərfləri
  { en: 'Simple Past ilə işlənən zərf?', tr: 'yesterday', wrong: 'already'    },
  { en: '"two days ____" — zaman zərfi?', tr: 'ago',       wrong: 'before'     },
  { en: '"___ week" — zaman zərfi?',      tr: 'last',      wrong: 'next'        },

  // Qarışıq fellər
  { en: '"show" → Past Simple?',  tr: 'showed', wrong: 'shown'   },
  { en: '"learn" → Past Simple?', tr: 'learned', wrong: 'learnt' },
],
 // ============================================================
//  BÖLMƏ 3 — Simple Future (Future Indefinite)
//  grammar-data.js faylına əlavə et
// ============================================================

// ── Bölmə 3 Divider ──────────────────────────────────────
{
  type: 'section_divider',
  title: 'Bölmə 3 — Simple Future (Future Indefinite)',
},

// ── Dərs 3.1 — shall / will + məsdər ────────────────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.1 — shall / will + məsdər',
  cards: [

    // ── Ekran 1: Düzəlmə qaydası ─────────────────────────
    {
      type: 'lesson',
      title: 'Simple Future necə düzəlir?',
      content: 'Simple Future zamanı gələcəkdə baş verəcək hərəkətləri bildirir.\n\nDüzəlmə: shall / will + əsas felin məsdəri (to-suz)\n\n• shall — I və We şəxslərində\n• will — qalan bütün şəxslərdə',
      table: [
        ['Şəxs',     'Tək',               'Cəm'],
        ['I',        'I shall work',      'We shall work'],
        ['You',      'You will work',     'You will work'],
        ['He/She/It','He will work',      'They will work'],
      ],
      tip: 'Azərbaycan dilinə gələcək zaman şəkilçisi (-acaq/-əcək) kimi tərcümə edilir.',
    },

    // ── Ekran 2: Sual forması ────────────────────────────
    {
      type: 'lesson',
      title: 'Simple Future — sual forması',
      content: 'Sual formasını düzəltmək üçün shall / will mübtədadan əvvələ keçir:',
      table: [
        ['Şəxs',          'Sual'],
        ['I',             'Shall I work?'],
        ['You',           'Will you work?'],
        ['He / She / It', 'Will he work?'],
        ['We',            'Shall we work?'],
        ['They',          'Will they work?'],
      ],
      note: 'Qısa cavab:\nYes, I shall. / No, I shan\'t.\nYes, he will. / No, he won\'t.',
    },

    // ── Ekran 3: İnkar forması ───────────────────────────
    {
      type: 'lesson',
      title: 'Simple Future — inkar forması',
      content: 'İnkar formasını düzəltmək üçün shall / will-dən sonra "not" əlavə edilir:',
      table: [
        ['Şəxs',     'Tam inkar',              'Qısa inkar'],
        ['I',        'I shall not work',       'I shan\'t work'],
        ['You',      'You will not work',      'You won\'t work'],
        ['He/She',   'He will not work',       'He won\'t work'],
        ['We',       'We shall not work',      'We shan\'t work'],
        ['They',     'They will not work',     'They won\'t work'],
      ],
      tip: 'Qısa təsdiq: I\'ll, you\'ll, he\'ll, she\'ll, we\'ll, they\'ll.\nQısa inkar: shan\'t (I/We) , won\'t (qalanlar).',
    },

    // ── Ekran 4: Sual-inkar + Az. dilinə tərcümə ─────────
    {
      type: 'lesson',
      title: 'Sual-inkar və Azərbaycan dilinə tərcümə',
      content: 'Sual-inkar forması:\n"Shall I not work?" = "Shan\'t I work?"\n"Will he not work?" = "Won\'t he work?"\n\nAzərbaycan dilinə iki cür tərcümə olunur:',
      examples: [
        { word: 'Qəti gələcək → -acaq/-əcək', az: '"Tom will write me." — Tom mənə məktub yazacaq.' },
        { word: 'Qeyri-qəti gələcək → -ar/-ər', az: '"Tom will write me." — Tom mənə məktub yazar.' },
      ],
      note: 'Əgər hərəkətin icrası qətidirsə -acaq/-əcək, qeyri-qətidirsə -ar/-ər kimi tərcümə edilir.',
    },

    // ── Quiz: shall/will ─────────────────────────────────
    { en: '"I ___ go to school." — düzgün forma?',       tr: 'shall',   wrong: 'will'    },
    { en: '"She ___ come tomorrow." — düzgün forma?',     tr: 'will',    wrong: 'shall'   },
    { en: '"We ___ work next week." — düzgün forma?',     tr: 'shall',   wrong: 'will'    },
    { en: '"They ___ not come." — qısa inkar?',           tr: 'won\'t',  wrong: 'shan\'t' },
    { en: '"I ___ not go." — qısa inkar?',                tr: 'shan\'t', wrong: 'won\'t'  },
    { en: '"___ he come tomorrow?" — sual?',              tr: 'Will',    wrong: 'Shall'   },

    // ── Mini-check: shall/will ───────────────────────────
    {
      type: 'mini_check',
      questions: [
        {
          q: '"I ___ work tomorrow." — Boşluğa nə gəlir?',
          options: ['will', 'shall', 'would', 'should'],
          answer: 'shall',
        },
        {
          q: '"He ___ come to the party." — Boşluğa nə gəlir?',
          options: ['shall', 'will', 'would', 'should'],
          answer: 'will',
        },
        {
          q: '"I will not go." — qısa inkar forması nədir?',
          options: ['I shan\'t go', 'I won\'t go', 'I wouldn\'t go', 'I don\'t go'],
          answer: 'I won\'t go',
        },
        {
          q: '"We shall not work." — qısa inkar forması?',
          options: ['We won\'t work', 'We shan\'t work', 'We wouldn\'t work', 'We don\'t work'],
          answer: 'We shan\'t work',
        },
        {
          q: 'Hansı cümlə YANLIŞ-dır?',
          options: [
            'She will come tomorrow.',
            'Shall I go?',
            'Will we go?',
            'Shall he come?',
          ],
          answer: 'Shall he come?',
        },
        {
          q: '"I\'ll work." — bu nədir?',
          options: ['Qısa inkar', 'Tam inkar', 'Qısa təsdiq', 'Sual forması'],
          answer: 'Qısa təsdiq',
        },
      ],
    },
  ],
},

// ── Dərs 3.2 — to be going to + to be about to ──────────
{
  type: 'grammar_lesson',
  title: 'Dərs 3.2 — to be going to · to be about to · Zaman zərfləri',
  cards: [

    // ── Ekran 1: going to vs will ─────────────────────────
    {
      type: 'lesson',
      title: 'Gələcəyin iki əlavə forması',
      content: 'Müasir ingilis dilində gələcək hərəkəti bildirmək üçün shall/will-dən başqa iki birləşmə də işlənir:',
      examples: [
        { word: 'to be going to + məsdər', az: 'bir şeyi etməyə hazırlaşmaq' },
        { word: 'to be about to + məsdər', az: 'bir şeyi etmək üzrə olmaq (çox yaxın gələcək)' },
      ],
      tip: '"going to" planlaşdırılmış hərəkəti, "about to" çox yaxın zamanda baş verəcək hərəkəti bildirir.',
    },

    // ── Ekran 2: to be going to — tam izah ───────────────
    {
      type: 'lesson',
      title: 'to be going to + məsdər',
      content: '"to be" feli şəxslərə görə dəyişir (am / is / are):\n\nI am going to read this novel.\nHe is going to visit us.\nThey are going to leave.',
      table: [
        ['Şəxs',     'Forma'],
        ['I',        'I am going to work'],
        ['You',      'You are going to work'],
        ['He/She/It','He is going to work'],
        ['We/They',  'We are going to work'],
      ],
      examples: [
        { word: 'I am going to read this novel.',    az: 'Mən bu romanı oxumağa hazırlaşıram.' },
        { word: 'She is going to study medicine.',   az: 'O tibb oxumağa hazırlaşır.' },
        { word: 'They are going to travel abroad.',  az: 'Onlar xaricə getməyə hazırlaşırlar.' },
      ],
      note: 'Sual: "Am I going to work?" / "Is he going to work?"\nİnkar: "I am not going to work." / "He isn\'t going to work."',
    },

    // ── Quiz: going to ───────────────────────────────────
    { en: '"I ___ going to study." — boşluq?',      tr: 'am',  wrong: 'is'    },
    { en: '"She ___ going to leave." — boşluq?',    tr: 'is',  wrong: 'are'   },
    { en: '"They ___ going to work." — boşluq?',    tr: 'are', wrong: 'is'    },
    { en: '"going to" nə bildirir?',                 tr: 'Hazırlaşmaq', wrong: 'Etmək üzrə olmaq' },

    // ── Ekran 3: to be about to ──────────────────────────
    {
      type: 'lesson',
      title: 'to be about to + məsdər',
      content: '"to be about to" çox yaxın zamanda, az sonra baş verəcək hərəkəti bildirir.\nAzərbaycan dilinə "etmək üzrədir / etmək üzrəyəm" kimi tərcümə olunur.',
      examples: [
        { word: 'The train is about to start.',    az: 'Qatar yola düşmək üzrədir.' },
        { word: 'I am about to leave.',            az: 'Mən getmək üzrəyəm.' },
        { word: 'She is about to cry.',            az: 'O ağlamaq üzrədir.' },
        { word: 'They are about to arrive.',       az: 'Onlar gəlib çatmaq üzrədirlər.' },
      ],
      tip: '"about to" — saniyələr/dəqiqələr sonra baş verəcək hərəkət. "going to" — ümumi plan.',
    },

    // ── Ekran 4: Üç formanın müqayisəsi ──────────────────
    {
      type: 'lesson',
      title: 'shall/will vs going to vs about to — müqayisə',
      content: 'Üç formanı bir arada görək:',
      table: [
        ['Forma',              'İşlənmə',                          'Nümunə'],
        ['shall / will',       'Ümumi gələcək hərəkət, qərar',     'I will call you.'],
        ['to be going to',     'Planlaşdırılmış hərəkət',          'I am going to call you.'],
        ['to be about to',     'Çox yaxın gələcək (saniyələr)',    'I am about to call you.'],
      ],
      note: 'Müasir ingilis danışıq dilində "will" çox vaxt "going to" ilə əvəz olunur.',
    },

    // ── Ekran 5: Zaman zərfləri ──────────────────────────
    {
      type: 'lesson',
      title: 'Simple Future — zaman zərfləri',
      content: 'Bu zərflər hərəkətin gələcəkdə baş verəcəyini bildirir:',
      table: [
        ['Zaman zərfi',               'Mənası'],
        ['tomorrow',                  'sabah'],
        ['the day after tomorrow',    'birisigün'],
        ['next week / month / year',  'gələn həftə/ay/il'],
        ['soon',                      'tezliklə'],
        ['in a week / in two days',   'bir həftəyə / iki gündə'],
        ['in a moment',               'bir an içində'],
        ['in the near future',        'yaxın gələcəkdə'],
      ],
      tip: 'Vacib qayda: zaman/şərt budaq cümlələrindən sonra gələcək hərəkət Simple Present ilə verilir!\n"I shall go if she comes." — "comes" → Simple Present, "shall go" → Simple Future.',
    },

    // ── Mini-check: going to + about to + zaman zərfləri ─
    {
      type: 'mini_check',
      questions: [
        {
          q: '"The train ___ about to start." — boşluğa nə gəlir?',
          options: ['am', 'is', 'are', 'be'],
          answer: 'is',
        },
        {
          q: '"I am ___ to read this novel." — boşluğa nə gəlir?',
          options: ['about', 'going', 'will', 'shall'],
          answer: 'going',
        },
        {
          q: '"going to" ilə "about to" arasındakı fərq nədir?',
          options: [
            'Fərq yoxdur — eyni mənalıdır',
            '"going to" plan, "about to" çox yaxın gələcək',
            '"about to" plan, "going to" çox yaxın gələcək',
            '"going to" keçmiş, "about to" gələcək',
          ],
          answer: '"going to" plan, "about to" çox yaxın gələcək',
        },
        {
          q: 'Hansı zaman zərfi Simple Future ilə işlənir?',
          options: ['yesterday', 'ago', 'tomorrow', 'already'],
          answer: 'tomorrow',
        },
        {
          q: '"I shall go if she ___." — budaq cümlədə hansı zaman?',
          options: ['will come', 'comes', 'came', 'is coming'],
          answer: 'comes',
        },
        {
          q: '"She is going to study medicine." — mənası nədir?',
          options: [
            'O tibb oxumuşdur.',
            'O tibb oxuyur.',
            'O tibb oxumağa hazırlaşır.',
            'O tibb oxumaq üzrədir.',
          ],
          answer: 'O tibb oxumağa hazırlaşır.',
        },
        {
          q: '"They are about to arrive." — mənası nədir?',
          options: [
            'Onlar gəliblər.',
            'Onlar gəlmək üzrədirlər.',
            'Onlar gələcəklər (plan).',
            'Onlar gəldilər.',
          ],
          answer: 'Onlar gəlmək üzrədirlər.',
        },
      ],
    },
  ],
},

// ── Mini-quiz 3 — Bölmə 3 ümumi quiz ────────────────────
[
  // shall / will — düzəlmə
  { en: '"I ___ work tomorrow."',        tr: 'shall',   wrong: 'will'    },
  { en: '"She ___ come next week."',     tr: 'will',    wrong: 'shall'   },
  { en: '"We ___ go to Baku soon."',     tr: 'shall',   wrong: 'will'    },
  { en: '"He ___ not come." — qısa?',    tr: 'won\'t',  wrong: 'shan\'t' },
  { en: '"I ___ not go." — qısa?',       tr: 'shan\'t', wrong: 'won\'t'  },

  // Sual forması
  { en: '"___ I go?" — I şəxsdə sual?',  tr: 'Shall',   wrong: 'Will'   },
  { en: '"___ she work?" — sual?',        tr: 'Will',    wrong: 'Shall'  },
  { en: '"___ we leave?" — sual?',        tr: 'Shall',   wrong: 'Will'   },

  // Qısa formalar
  { en: '"I\'ll work." — bu nədir?',      tr: 'Qısa təsdiq', wrong: 'Qısa inkar' },
  { en: '"won\'t" — tam forması nədir?',  tr: 'will not',    wrong: 'shall not'  },
  { en: '"shan\'t" — tam forması nədir?', tr: 'shall not',   wrong: 'will not'   },

  // going to
  { en: '"I ___ going to study."',        tr: 'am',  wrong: 'is'    },
  { en: '"She ___ going to leave."',      tr: 'is',  wrong: 'are'   },
  { en: '"They ___ going to work."',      tr: 'are', wrong: 'is'    },
  { en: '"going to" nə bildirir?',        tr: 'Plan, hazırlaşmaq', wrong: 'Çox yaxın gələcək' },

  // about to
  { en: '"The train is about to ___."',   tr: 'start',   wrong: 'started' },
  { en: '"about to" nə bildirir?',        tr: 'Çox yaxın gələcək (etmək üzrə)', wrong: 'Plan, hazırlaşmaq' },
  { en: '"I am ___ to leave."',           tr: 'about',   wrong: 'going'   },

  // going to vs about to
  { en: '"Planlaşdırılmış hərəkət" → ____', tr: 'going to', wrong: 'about to' },
  { en: '"Saniyələr sonra baş verər" → ____', tr: 'about to', wrong: 'going to' },

  // Zaman zərfləri
  { en: 'Simple Future ilə işlənən zərf?',    tr: 'tomorrow',  wrong: 'yesterday' },
  { en: '"___ week" — gələcək zaman zərfi?',  tr: 'next',      wrong: 'last'      },
  { en: '"in two ___" — zaman zərfi?',         tr: 'days',      wrong: 'ago'       },
  { en: '"the day ___ tomorrow"',              tr: 'after',     wrong: 'before'    },

  // Budaq cümlə qaydası
  { en: '"I shall go if she ___."',        tr: 'comes',      wrong: 'will come'  },
  { en: '"When it stops raining, we ___."',tr: 'will go out', wrong: 'go out'    },
  { en: '"Call me as soon as you ___."',   tr: 'arrive',     wrong: 'will arrive' },

  // Az. dilinə tərcümə
  { en: '"Tom will write me." — qəti gələcək?', tr: 'yazacaq', wrong: 'yazar'   },
  { en: '"Tom will write me." — qeyri-qəti?',   tr: 'yazar',   wrong: 'yazacaq' },
],
    // ── Bölmə 4 ───────────────────────────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 4 — Future Indefinite in the Past',
    },

    // ── index: 11 — Dərs 4.1 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 4.1 — should/would (digərləri)',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 4.1 — Tezliklə əlavə olunacaq',
          content: 'Bu dərs hazırlanır. Materiallar tezliklə əlavə ediləcək.',
        },
      ],
    },

    // ── index: 12 — Dərs 4.2 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 4.2 — İşlənmə: vasitəli nitqdə',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 4.2 — Tezliklə əlavə olunacaq',
          content: 'Bu dərs hazırlanır. Materiallar tezliklə əlavə ediləcək.',
        },
      ],
    },

    // ── index: 13 — Mini-quiz 4 ───────────────────────────────
    // should/would seç · vasitəli nitqdə çevir
    [
      { en: 'PLACEHOLDER', tr: 'A', wrong: 'B' },
    ],

    // ── index: 14 — Test 1 ────────────────────────────────────
    // Qeyri-müəyyən zaman formaları (Bölmə 1–4) · 12 sual
    // 4 zaman forması üzrə qarışıq · do/did/will/would · qaydalı/qaydasız
    [
      { en: 'PLACEHOLDER', tr: 'A', wrong: 'B' },
    ],

    // ══════════════════════════════════════════════════════════
    // ║  QRUP 2 — Davamedici zaman formaları (Continuous)      ║
    // ══════════════════════════════════════════════════════════

    // ── Bölmə 5 ───────────────────────────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 5 — Present Continuous',
    },

    // ── index: 15 — Dərs 5.1 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 5.1 — am/is/are + fel-ing',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 5.1 — Tezliklə əlavə olunacaq',
          content: 'Bu dərs hazırlanır. Materiallar tezliklə əlavə ediləcək.',
        },
      ],
    },

    // ── index: 16 — Dərs 5.2 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 5.2 — İşlənmə: danışıq anında',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 5.2 — Tezliklə əlavə olunacaq',
          content: 'Bu dərs hazırlanır. Materiallar tezliklə əlavə ediləcək.',
        },
      ],
    },

    // ── index: 17 — Dərs 5.3 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 5.3 — Continuous zamanda işlənməyən fellər',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 5.3 — Tezliklə əlavə olunacaq',
          content: 'Bu dərs hazırlanır. Materiallar tezliklə əlavə ediləcək.',
        },
      ],
    },

    // ── index: 18 — Mini-quiz 5 ───────────────────────────────
    // am/is/are seç · stativ fel tap · now/at the moment tanı
    [
      { en: 'PLACEHOLDER', tr: 'A', wrong: 'B' },
    ],

    // ── Bölmə 6 ───────────────────────────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 6 — Past Continuous',
    },

    // ── index: 19 — Dərs 6.1 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 6.1 — was/were + fel-ing',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 6.1 — Tezliklə əlavə olunacaq',
          content: 'Bu dərs hazırlanır. Materiallar tezliklə əlavə ediləcək.',
        },
      ],
    },

    // ── index: 20 — Dərs 6.2 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 6.2 — İşlənmə: keçmişdə dəqiq vaxt',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 6.2 — Tezliklə əlavə olunacaq',
          content: 'Bu dərs hazırlanır. Materiallar tezliklə əlavə ediləcək.',
        },
      ],
    },

    // ── index: 21 — Mini-quiz 6 ───────────────────────────────
    // was/were seç · when ilə uyğun zaman · davamedici zərfi tanı
    [
      { en: 'PLACEHOLDER', tr: 'A', wrong: 'B' },
    ],

    // ── index: 22 — Test 2 ────────────────────────────────────
    // Davamedici zaman formaları (Bölmə 5–6) · 10 sual
    // Present/Past Continuous fərqi · stativ fellər · zaman zərfləri
    [
      { en: 'PLACEHOLDER', tr: 'A', wrong: 'B' },
    ],

    // ══════════════════════════════════════════════════════════
    // ║  QRUP 3 — Bitmiş zaman formaları (Perfect)             ║
    // ══════════════════════════════════════════════════════════

    // ── Bölmə 7 ───────────────────────────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 7 — Present Perfect',
    },

    // ── index: 23 — Dərs 7.1 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 7.1 — have/has + P II (keçmiş zaman feli sifəti)',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 7.1 — Tezliklə əlavə olunacaq',
          content: 'Bu dərs hazırlanır. Materiallar tezliklə əlavə ediləcək.',
        },
      ],
    },

    // ── index: 24 — Dərs 7.2 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 7.2 — İşlənmə: bitmiş, nəticəsi var',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 7.2 — Tezliklə əlavə olunacaq',
          content: 'Bu dərs hazırlanır. Materiallar tezliklə əlavə ediləcək.',
        },
      ],
    },

    // ── index: 25 — Mini-quiz 7 ───────────────────────────────
    // have/has seç · since/for fərqi · already/yet/ever/never yerləşdir
    [
      { en: 'PLACEHOLDER', tr: 'A', wrong: 'B' },
    ],

    // ── Bölmə 8 ───────────────────────────────────────────────
    {
      type: 'section_divider',
      title: 'Bölmə 8 — Past Perfect',
    },

    // ── index: 26 — Dərs 8.1 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 8.1 — had + P II (bütün şəxslər)',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 8.1 — Tezliklə əlavə olunacaq',
          content: 'Bu dərs hazırlanır. Materiallar tezliklə əlavə ediləcək.',
        },
      ],
    },

    // ── index: 27 — Dərs 8.2 ─────────────────────────────────
    {
      type: 'grammar_lesson',
      title: 'Dərs 8.2 — İşlənmə: keçmişdən əvvəl bitmiş',
      cards: [
        {
          type: 'lesson',
          title: 'Dərs 8.2 — Tezliklə əlavə olunacaq',
          content: 'Bu dərs hazırlanır. Materiallar tezliklə əlavə ediləcək.',
        },
      ],
    },

    // ── index: 28 — Mini-quiz 8 ───────────────────────────────
    // had seç · when/after/before ilə doğru zaman · by that time tanı
    [
      { en: 'PLACEHOLDER', tr: 'A', wrong: 'B' },
    ],

    // ── index: 29 — Test 3 ────────────────────────────────────
    // Bitmiş zaman formaları (Bölmə 7–8) · 10 sual
    // Present/Past Perfect fərqi · since/for · ardıcıllıq
    [
      { en: 'PLACEHOLDER', tr: 'A', wrong: 'B' },
    ],

    // ── index: 30 — Final Test ────────────────────────────────
    // Bütün zaman formaları · 20 sual
    // 8 bölmə · 3 qrup · qarışıq · Present/Past/Future/Perfect/Continuous
    [
      { en: 'PLACEHOLDER', tr: 'A', wrong: 'B' },
    ],

  ],
};

// ── Sayta əlavə et ────────────────────────────────────────────
// Bu sətri data faylının sonuna, KIDS_GRAMMAR_LEVELS-in
// push edildiyi yerə əlavə et:
//
//   KIDS_GRAMMAR_LEVELS.push(VERBS_LEVEL);
//   LEVELS.push(VERBS_LEVEL);
//
// və ya birbaşa array-ə əlavə et:
//   window.KIDS_GRAMMAR_LEVELS = [...KIDS_GRAMMAR_LEVELS, VERBS_LEVEL];

KIDS_GRAMMAR_LEVELS.push(VERBS_LEVEL);
window.KIDS_GRAMMAR_LEVELS = KIDS_GRAMMAR_LEVELS;
// LEVELS-ə birləşdir
KIDS_GRAMMAR_LEVELS.forEach(lvl => LEVELS.push(lvl));
