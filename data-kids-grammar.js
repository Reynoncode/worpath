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

      // index: 9 — Dərs 3.1
      {
        type: 'grammar_lesson',
        title: 'Dərs 3.1 — Countable və Uncountable isimlər',
        cards: [],
      },

      // index: 10 — Dərs 3.2
      {
        type: 'grammar_lesson',
        title: 'Dərs 3.2 — A lot of, many, much fərqi',
        cards: [],
      },

      // index: 11 — Dərs 3.3
      {
        type: 'grammar_lesson',
        title: 'Dərs 3.3 — Mücərrəd isimlərin artikl ilə istifadəsi',
        cards: [],
      },

      // index: 12 — Mini-quiz 3
      [],

      // index: 13 — Test 1
      [],

      // ── Bölmə 4 ──────────────────────────────────────
      // index: 14
      {
        type: 'section_divider',
        title: 'Bölmə 4 — Kollektiv, topluluq bildirən isimlər',
      },

      // index: 15 — Dərs 4.1
      {
        type: 'grammar_lesson',
        title: 'Dərs 4.1 — Collective nouns: family, crowd, crew',
        cards: [],
      },

      // index: 16 — Dərs 4.2
      {
        type: 'grammar_lesson',
        title: 'Dərs 4.2 — Police, cattle, people, money',
        cards: [],
      },

      // index: 17 — Mini-quiz 4
      [],

      // ── Bölmə 5 ──────────────────────────────────────
      // index: 18
      {
        type: 'section_divider',
        title: 'Bölmə 5 — Plural nouns (Cəm formaları) — tam qaydalar',
      },

      // index: 19 — Dərs 5.1
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.1 — -s / -es qaydası',
        cards: [],
      },

      // index: 20 — Dərs 5.2
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.2 — Qaydasız cəm formaları',
        cards: [],
      },

      // index: 21 — Dərs 5.3
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.3 — -f / -fe → -ves',
        cards: [],
      },

      // index: 22 — Dərs 5.4
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.4 — -o → -oes: potato, hero, negro',
        cards: [],
      },

      // index: 23 — Dərs 5.5
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.5 — -y qaydası: city→cities, day→days',
        cards: [],
      },

      // index: 24 — Dərs 5.6
      {
        type: 'grammar_lesson',
        title: 'Dərs 5.6 — man/woman olan mürəkkəb isimlər',
        cards: [],
      },

      // index: 25 — Mini-quiz 5
      [],

      // ── Bölmə 6 ──────────────────────────────────────
      // index: 26
      {
        type: 'section_divider',
        title: 'Bölmə 6 — Xüsusi cəm halları',
      },

      // index: 27 — Dərs 6.1
      {
        type: 'grammar_lesson',
        title: 'Dərs 6.1 — Yalnız tək formada işlənən isimlər',
        cards: [],
      },

      // index: 28 — Dərs 6.2
      {
        type: 'grammar_lesson',
        title: 'Dərs 6.2 — Yalnız cəm formada işlənən isimlər',
        cards: [],
      },

      // index: 29 — Dərs 6.3
      {
        type: 'grammar_lesson',
        title: 'Dərs 6.3 — Formaca cəm, mənaca tək + eyni forma',
        cards: [],
      },

      // index: 30 — Mini-quiz 6
      [],

      // index: 31 — Test 2
      [],

      // ── Bölmə 7 ──────────────────────────────────────
      // index: 32
      {
        type: 'section_divider',
        title: 'Bölmə 7 — Possessive case (Yiyəlik hal)',
      },

      // index: 33 — Dərs 7.1
      {
        type: 'grammar_lesson',
        title: "Dərs 7.1 — 's (tək) / ' (cəm) qaydası",
        cards: [],
      },

      // index: 34 — Dərs 7.2
      {
        type: 'grammar_lesson',
        title: 'Dərs 7.2 — Cansız sözün possessive-i',
        cards: [],
      },

      // index: 35 — Mini-quiz 7
      [],

      // ── Bölmə 8 ──────────────────────────────────────
      // index: 36
      {
        type: 'section_divider',
        title: 'Bölmə 8 — Sayılmayan isimlər sözlüyü (Vocabulary bank)',
      },

      // index: 37 — Dərs 8.1
      {
        type: 'grammar_lesson',
        title: 'Dərs 8.1 — Qida və içki adları',
        cards: [],
      },

      // index: 38 — Dərs 8.2
      {
        type: 'grammar_lesson',
        title: 'Dərs 8.2 — Material adları',
        cards: [],
      },

      // index: 39 — Dərs 8.3
      {
        type: 'grammar_lesson',
        title: 'Dərs 8.3 — Mücərrəd isimlər',
        cards: [],
      },

      // index: 40 — Mini-quiz 8
      [],

      // index: 41 — Test 3 (Final)
      [],

    ],
  },

];

window.KIDS_GRAMMAR_LEVELS = KIDS_GRAMMAR_LEVELS;
// LEVELS-ə birləşdir
KIDS_GRAMMAR_LEVELS.forEach(lvl => LEVELS.push(lvl));
