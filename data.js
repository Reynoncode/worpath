// ============================================================
//  WORDPATH — QUIZ DATA
// ============================================================
//  Hər söz üçün format:
//    { en: 'İngiliscə söz', tr: 'Düzgün Azərbaycanca tərcümə', wrong: 'Yanlış tərcümə' }
//
//  Hər səviyyə içində 10 quiz var.
//  Hər quizdə tam olaraq 20 söz olmalıdır.
//  Boş qalan quizlər oyunda "Tezliklə..." kimi görünür.
// ============================================================

const LEVELS = [

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 1 — A1: Başlanğıc                        ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'a1',
    name: 'A1 — Başlanğıc',
    icon: '🌱',
    color: '#4A8FE7',
    quizzes: [

      // ─────────────────────── QUIZ 1 ───────────────────────
      [
        { en: 'apple',    tr: 'alma',        wrong: 'armud'       },
        { en: 'water',    tr: 'su',          wrong: 'çay'         },
        { en: 'book',     tr: 'kitab',       wrong: 'dəftər'      },
        { en: 'cat',      tr: 'pişik',       wrong: 'it'          },
        { en: 'dog',      tr: 'it',          wrong: 'pişik'       },
        { en: 'house',    tr: 'ev',          wrong: 'bina'        },
        { en: 'car',      tr: 'avtomobil',   wrong: 'motosiklet'  },
        { en: 'school',   tr: 'məktəb',      wrong: 'universitet' },
        { en: 'friend',   tr: 'dost',        wrong: 'qardaş'      },
        { en: 'mother',   tr: 'ana',         wrong: 'ata'         },
        { en: 'father',   tr: 'ata',         wrong: 'ana'         },
        { en: 'bread',    tr: 'çörək',       wrong: 'tort'        },
        { en: 'door',     tr: 'qapı',        wrong: 'pəncərə'     },
        { en: 'table',    tr: 'masa',        wrong: 'stul'        },
        { en: 'chair',    tr: 'stul',        wrong: 'divan'       },
        { en: 'sun',      tr: 'günəş',       wrong: 'ay'          },
        { en: 'moon',     tr: 'ay',          wrong: 'ulduz'       },
        { en: 'tree',     tr: 'ağac',        wrong: 'çiçək'       },
        { en: 'bird',     tr: 'quş',         wrong: 'balıq'       },
        { en: 'milk',     tr: 'süd',         wrong: 'su'          },
      ],

      // ─────────────────────── QUIZ 2 ───────────────────────
      [
        // { en: 'söz', tr: 'düzgün tərcümə', wrong: 'yanlış tərcümə' },
      ],

      // ─────────────────────── QUIZ 3 ───────────────────────
      [
        // { en: 'söz', tr: 'düzgün tərcümə', wrong: 'yanlış tərcümə' },
      ],

      // ─────────────────────── QUIZ 4 ───────────────────────
      [
        // { en: 'söz', tr: 'düzgün tərcümə', wrong: 'yanlış tərcümə' },
      ],

      // ─────────────────────── QUIZ 5 ───────────────────────
      [
        // { en: 'söz', tr: 'düzgün tərcümə', wrong: 'yanlış tərcümə' },
      ],

      // ─────────────────────── QUIZ 6 ───────────────────────
      [
        // { en: 'söz', tr: 'düzgün tərcümə', wrong: 'yanlış tərcümə' },
      ],

      // ─────────────────────── QUIZ 7 ───────────────────────
      [
        // { en: 'söz', tr: 'düzgün tərcümə', wrong: 'yanlış tərcümə' },
      ],

      // ─────────────────────── QUIZ 8 ───────────────────────
      [
        // { en: 'söz', tr: 'düzgün tərcümə', wrong: 'yanlış tərcümə' },
      ],

      // ─────────────────────── QUIZ 9 ───────────────────────
      [
        // { en: 'söz', tr: 'düzgün tərcümə', wrong: 'yanlış tərcümə' },
      ],

      // ─────────────────────── QUIZ 10 ──────────────────────
      [
        // { en: 'söz', tr: 'düzgün tərcümə', wrong: 'yanlış tərcümə' },
      ],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 2 — A2: Əsas Səviyyə                     ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'a2',
    name: 'A2 — Əsas Səviyyə',
    icon: '🌿',
    color: '#9B6FD4',
    quizzes: [
      // QUIZ 1 — A2
      [ /* { en: '...', tr: '...', wrong: '...' }, */ ],
      // QUIZ 2
      [],
      // QUIZ 3
      [],
      // QUIZ 4
      [],
      // QUIZ 5
      [],
      // QUIZ 6
      [],
      // QUIZ 7
      [],
      // QUIZ 8
      [],
      // QUIZ 9
      [],
      // QUIZ 10
      [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 3 — B1: Orta-Aşağı I                     ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'b1a',
    name: 'B1 — Orta-Aşağı I',
    icon: '🌳',
    color: '#E07A30',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 4 — B1+: Orta-Aşağı II                   ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'b1b',
    name: 'B1+ — Orta-Aşağı II',
    icon: '🌲',
    color: '#E8A020',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 5 — B2: Orta Səviyyə I                   ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'b2a',
    name: 'B2 — Orta Səviyyə I',
    icon: '⚡',
    color: '#2EAA6E',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 6 — B2+: Orta Səviyyə II                 ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'b2b',
    name: 'B2+ — Orta Səviyyə II',
    icon: '🔥',
    color: '#D44E30',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 7 — C1: İrəliləmiş I                     ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'c1a',
    name: 'C1 — İrəliləmiş I',
    icon: '💎',
    color: '#3BAAB5',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 8 — C1+: İrəliləmiş II                   ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'c1b',
    name: 'C1+ — İrəliləmiş II',
    icon: '🏆',
    color: '#7058D0',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 9 — C2: Ustalıq Səviyyəsi                ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'c2',
    name: 'C2 — Ustalıq',
    icon: '👑',
    color: '#2C3E50',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  LEVEL 10 — İş Ingilis dili                     ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'business',
    name: 'Business English',
    icon: '💼',
    color: '#8B7355',
    quizzes: [
      [], [], [], [], [],
      [], [], [], [], [],
    ]
  },
];
