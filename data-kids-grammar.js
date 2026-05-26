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

      // ── Bölmə 1 ──────────────────────────────────────
      // index: 0
      {
        type: 'section_divider',
        title: 'Bölmə 1 — İsmin növləri: sadə, düzəltmə, mürəkkəb',
      },

      // index: 1 — Dərs 1.1
      {
        type: 'grammar_lesson',
        title: 'Dərs 1.1 — Sadə, düzəltmə, mürəkkəb isimlər',
        cards: [],
      },

      // index: 2 — Dərs 1.2
      {
        type: 'grammar_lesson',
        title: 'Dərs 1.2 — İsim düzəldən şəkilçilər',
        cards: [],
      },

      // index: 3 — Mini-quiz 1
      [],

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
