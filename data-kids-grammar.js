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
