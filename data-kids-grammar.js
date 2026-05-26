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

quizzes: [

  // index: 0 — Section divider
  {
    type: 'section_divider',
    title: 'Bölmə 1 — İsmin növləri: sadə, düzəltmə, mürəkkəb',
  },

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

    // ── Ekran 3: Düzəltmə isimlər ───────────────────
    {
      type: 'lesson',
      title: '2. Düzəltmə isimlər (Derivative nouns)',
      content: 'Düzəltmə isimlər kök sözə şəkilçi əlavə etməklə yaranır.\n\nBu şəkilçilər sözün mənasını dəyişdirir və ondan isim düzəldir:',
      examples: [
        { word: 'teach → teacher',    az: '-er şəkilçisi ilə' },
        { word: 'happy → happiness',  az: '-ness şəkilçisi ilə' },
        { word: 'develop → development', az: '-ment şəkilçisi ilə' },
        { word: 'free → freedom',     az: '-dom şəkilçisi ilə' },
        { word: 'child → childhood',  az: '-hood şəkilçisi ilə' },
      ],
      note: 'Şəkilçi əlavə olunduqda kök sözün yazılışı bəzən dəyişə bilər: happy → happiness.',
    },

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

    // ── Ekran 5: Müqayisə cədvəli ───────────────────
    {
      type: 'lesson',
      title: 'Müqayisə: 3 növ bir arada',
      content: 'Üç növü yan-yana görərək fərqi daha asan mənimsəyəcəksən:',
      table: [
        ['Növ',            'Quruluş',           'Nümunə'],
        ['Simple',         'kök',               'book, sun, pen'],
        ['Derivative',     'kök + şəkilçi',     'teacher, freedom'],
        ['Compound',       'söz + söz',         'sunrise, self-control'],
      ],
      note: 'Bəzən bir söz həm düzəltmə, həm mürəkkəb ola bilər: "workmanship" — work + man + -ship.',
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

    // ── Ekran 2: Fel + şəkilçi ───────────────────────
    {
      type: 'lesson',
      title: 'Feldən düzələn isimlər',
      content: 'Aşağıdakı şəkilçilər fellərə əlavə edilərək isim yaradır:',
      table: [
        ['Şəkilçi',  'Nümunə fel',  'Düzələn isim'],
        ['-er / -or', 'teach, work', 'teacher, worker'],
        ['-ment',     'develop',     'development'],
        ['-tion/-sion','station',    'profession, revision'],
        ['-ance/-ence','perform',    'performance, dependence'],
        ['-ing',      'meet, weed',  'meeting, weeding'],
      ],
      note: '-er / -or şəkilçisi "iş görən şəxs" mənası verir: teach → teacher (müəllim).',
    },

    // ── Ekran 3: Sifət + şəkilçi ─────────────────────
    {
      type: 'lesson',
      title: 'Sifətdən düzələn isimlər',
      content: 'Sifətlərə şəkilçi əlavə edərək isim düzəltmək olar:',
      table: [
        ['Şəkilçi', 'Nümunə sifət', 'Düzələn isim'],
        ['-ness',   'happy, kind',   'happiness, kindness'],
        ['-ity',    'popular',       'popularity, celebrity'],
        ['-th',     'strong, wide',  'strength, width'],
        ['-dom',    'free, wise',    'freedom, wisdom'],
      ],
      tip: '-ness şəkilçisi demək olar ki, istənilən sifətə əlavə edilə bilər.',
    },

    // ── Ekran 4: Digər şəkilçilər ────────────────────
    {
      type: 'lesson',
      title: 'Digər mühüm şəkilçilər',
      content: 'Bəzi şəkilçilər müstəqil kök sözlərə əlavə edilir:',
      table: [
        ['Şəkilçi',  'Məna',              'Nümunə'],
        ['-hood',    'vəziyyət, dövr',    'childhood, brotherhood'],
        ['-ship',    'xüsusiyyət, vəzifə','leadership, friendship'],
        ['-ism',     'ideologiya, sistem','heroism, communism'],
        ['-ist',     'peşə sahibi',       'typist, dentist'],
        ['-age',     'yer, vəziyyət',     'village, package'],
      ],
      note: '-ist şəkilçisi həm peşəni (dentist), həm də ideologiyanın tərəfdarını (communist) bildirir.',
    },

    // ── Ekran 5: Xülasə ──────────────────────────────
    {
      type: 'lesson',
      title: 'Şəkilçilərin ümumi xülasəsi',
      content: 'Bütün şəkilçiləri bir yerdə görmək üçün:',
      table: [
        ['Şəkilçi',         'Nümunə'],
        ['-er / -or',       'teacher, writer, actor'],
        ['-ness',           'happiness, darkness'],
        ['-ment',           'development, department'],
        ['-hood',           'childhood, neighbourhood'],
        ['-ship',           'friendship, leadership'],
        ['-ism',            'heroism, communism'],
        ['-dom',            'freedom, kingdom'],
        ['-tion/-sion',     'station, revision'],
        ['-ence/-ance',     'dependence, performance'],
        ['-ing',            'meeting, carving'],
        ['-ity',            'popularity, celebrity'],
        ['-age',            'village, cottage'],
        ['-th',             'strength, length, depth'],
        ['-ist',            'typist, dentist'],
      ],
      tip: 'Bu şəkilçilərdən birini gördükdə o sözün isim olma ehtimalı çox yüksəkdir.',
    },

  ],
},

      // ── Bölmə 2 ──────────────────────────────────────
      // index: 4
      {
        type: 'section_divider',
        title: 'Bölmə 2 — Common vs Proper nouns · Konkret vs Mücərrəd',
      },

      // index: 5 — Dərs 2.1
      {
        type: 'grammar_lesson',
        title: 'Dərs 2.1 — Common vs Proper noun fərqi',
        cards: [],
      },

      // index: 6 — Dərs 2.2
      {
        type: 'grammar_lesson',
        title: 'Dərs 2.2 — Concrete vs Abstract isimlər',
        cards: [],
      },

      // index: 7 — Mini-quiz 2
      [],

      // ── Bölmə 3 ──────────────────────────────────────
      // index: 8
      {
        type: 'section_divider',
        title: 'Bölmə 3 — Countable vs Uncountable nouns',
      },

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
        title: 'Dərs 7.1 — \'s (tək) / \' (cəm) qaydası',
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
