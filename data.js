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

     // ─────────────────────── QUIZ 1 — Peşələr ───────────────────────
[
  { en: 'actor',      tr: 'aktyor',        wrong: 'rejissor'   },
  { en: 'actress',    tr: 'aktrisa',       wrong: 'rəqqasə'    },
  { en: 'adult',      tr: 'böyük adam',    wrong: 'uşaq'       },
  { en: 'artist',     tr: 'rəssam',        wrong: 'musiqiçi'   },
  { en: 'dancer',     tr: 'rəqqas',        wrong: 'müğənni'    },
  { en: 'doctor',     tr: 'həkim',         wrong: 'müəllim'    },
  { en: 'driver',     tr: 'sürücü',        wrong: 'pilot'      },
  { en: 'farmer',     tr: 'fermer',        wrong: 'balıqçı'    },
  { en: 'nurse',      tr: 'tibb bacısı',   wrong: 'həkim'      },
  { en: 'player',     tr: 'oyunçu',        wrong: 'məşqçi'     },
  { en: 'policeman',  tr: 'polis',         wrong: 'gözətçi'    },
  { en: 'scientist',  tr: 'alim',          wrong: 'mühəndis'   },
  { en: 'singer',     tr: 'müğənni',       wrong: 'rəqqas'     },
  { en: 'student',    tr: 'tələbə',        wrong: 'müəllim'    },
  { en: 'teacher',    tr: 'müəllim',       wrong: 'direktor'   },
  { en: 'tourist',    tr: 'turist',        wrong: 'səfir'      },
  { en: 'visitor',    tr: 'ziyarətçi',     wrong: 'sakin'      },
  { en: 'waiter',     tr: 'ofisiant',      wrong: 'aşpaz'      },
  { en: 'worker',     tr: 'işçi',          wrong: 'müdir'      },
  { en: 'writer',     tr: 'yazıçı',        wrong: 'jurnalist'  },
],

// ─────────────────────── QUIZ 2 — Ümumi insanlar ───────────────────────
[
  { en: 'baby',       tr: 'körpə',         wrong: 'uşaq'       },
  { en: 'boy',        tr: 'oğlan',         wrong: 'qız'        },
  { en: 'child',      tr: 'uşaq',          wrong: 'gənc'       },
  { en: 'customer',   tr: 'müştəri',       wrong: 'satıcı'     },
  { en: 'girl',       tr: 'qız',           wrong: 'oğlan'      },
  { en: 'man',        tr: 'kişi',          wrong: 'qadın'      },
  { en: 'member',     tr: 'üzv',           wrong: 'rəhbər'     },
  { en: 'neighbour',  tr: 'qonşu',         wrong: 'dost'       },
  { en: 'partner',    tr: 'ortaq',         wrong: 'rəqib'      },
  { en: 'person',     tr: 'insan',         wrong: 'heyvan'     },
  { en: 'teenager',   tr: 'yeniyetmə',     wrong: 'körpə'      },
  { en: 'woman',      tr: 'qadın',         wrong: 'kişi'       },
  { en: 'people',     tr: 'insanlar',      wrong: 'heyvanlar'  },
  { en: 'friend',     tr: 'dost',          wrong: 'qonşu'      },
  { en: 'somebody',   tr: 'kimsə',         wrong: 'heç kim'    },
  { en: 'someone',    tr: 'biri',          wrong: 'hamı'       },
  { en: 'anybody',    tr: 'hər hansı biri',wrong: 'heç kim'    },
  { en: 'anyone',     tr: 'hər kəs',       wrong: 'heç biri'   },
  { en: 'nobody',     tr: 'heç kim',       wrong: 'hamı'       },
  { en: 'no one',     tr: 'heç kəs',       wrong: 'kimsə'      },
],

// ─────────────────────── QUIZ 3 — Ailə ───────────────────────
[
  { en: 'aunt',        tr: 'xala',         wrong: 'nənə'       },
  { en: 'boyfriend',   tr: 'oğlan dostu',  wrong: 'qardaş'     },
  { en: 'brother',     tr: 'qardaş',       wrong: 'bacı'       },
  { en: 'cousin',      tr: 'əmioğlu',      wrong: 'qardaş'     },
  { en: 'dad',         tr: 'ata',          wrong: 'baba'       },
  { en: 'daughter',    tr: 'qız övlad',    wrong: 'oğul'       },
  { en: 'family',      tr: 'ailə',         wrong: 'qrup'       },
  { en: 'father',      tr: 'ata',          wrong: 'ana'        },
  { en: 'girlfriend',  tr: 'qız dostu',    wrong: 'bacı'       },
  { en: 'grandfather', tr: 'baba',         wrong: 'əmi'        },
  { en: 'grandmother', tr: 'nənə',         wrong: 'xala'       },
  { en: 'grandparent', tr: 'nəsil böyüyü', wrong: 'valideyn'   },
  { en: 'husband',     tr: 'ər',           wrong: 'arvad'      },
  { en: 'mother',      tr: 'ana',          wrong: 'ata'        },
  { en: 'mum',         tr: 'mama',         wrong: 'baba'       },
  { en: 'parent',      tr: 'valideyn',     wrong: 'müəllim'    },
  { en: 'sister',      tr: 'bacı',         wrong: 'qardaş'     },
  { en: 'son',         tr: 'oğul',         wrong: 'qız övlad'  },
  { en: 'uncle',       tr: 'əmi',          wrong: 'baba'       },
  { en: 'wife',        tr: 'arvad',        wrong: 'ər'         },
],

// ─────────────────────── QUIZ 4 — Bədən ───────────────────────
[
  { en: 'arm',       tr: 'qol',          wrong: 'ayaq'       },
  { en: 'body',      tr: 'bədən',        wrong: 'üz'         },
  { en: 'ear',       tr: 'qulaq',        wrong: 'göz'        },
  { en: 'eye',       tr: 'göz',          wrong: 'qulaq'      },
  { en: 'face',      tr: 'üz',           wrong: 'baş'        },
  { en: 'foot',      tr: 'pəncə',        wrong: 'əl'         },
  { en: 'hair',      tr: 'saç',          wrong: 'qaş'        },
  { en: 'hand',      tr: 'əl',           wrong: 'qol'        },
  { en: 'head',      tr: 'baş',          wrong: 'boyun'      },
  { en: 'leg',       tr: 'ayaq',         wrong: 'qol'        },
  { en: 'mouth',     tr: 'ağız',         wrong: 'burun'      },
  { en: 'nose',      tr: 'burun',        wrong: 'ağız'       },
  { en: 'tooth',     tr: 'diş',          wrong: 'dil'        },
  { en: 'back',      tr: 'kürək',        wrong: 'qarın'      },
  { en: 'bottom',    tr: 'oturacaq',     wrong: 'üst'        },
  { en: 'skin',      tr: 'dəri',         wrong: 'sümük'      },
  { en: 'health',    tr: 'sağlamlıq',    wrong: 'xəstəlik'   },
  { en: 'diet',      tr: 'pəhriz',       wrong: 'idman'      },
  { en: 'exercise',  tr: 'məşq',         wrong: 'istirahət'  },
  { en: 'born',      tr: 'doğulmuş',     wrong: 'ölmüş'      },
],

// ─────────────────────── QUIZ 5 — Hisslər ───────────────────────
[
  { en: 'afraid',       tr: 'qorxmuş',          wrong: 'xoşbəxt'       },
  { en: 'angry',        tr: 'əsəbi',             wrong: 'sakit'         },
  { en: 'bored',        tr: 'darıxmış',          wrong: 'həyəcanlı'     },
  { en: 'excited',      tr: 'həyəcanlı',         wrong: 'yorğun'        },
  { en: 'happy',        tr: 'xoşbəxt',           wrong: 'kədərli'       },
  { en: 'hungry',       tr: 'ac',                wrong: 'susamış'       },
  { en: 'interested',   tr: 'maraqlanmış',       wrong: 'biganə'        },
  { en: 'sad',          tr: 'kədərli',           wrong: 'xoşbəxt'       },
  { en: 'sick',         tr: 'xəstə',             wrong: 'sağlam'        },
  { en: 'sorry',        tr: 'peşman',            wrong: 'razı'          },
  { en: 'thirsty',      tr: 'susamış',           wrong: 'ac'            },
  { en: 'tired',        tr: 'yorğun',            wrong: 'enerjili'      },
  { en: 'boring',       tr: 'cansıxıcı',         wrong: 'maraqlı'       },
  { en: 'exciting',     tr: 'həyəcanlandırıcı',  wrong: 'darıxdırıcı'   },
  { en: 'interesting',  tr: 'maraqlı',           wrong: 'sıxıcı'        },
  { en: 'dear',         tr: 'əziz',              wrong: 'uzaq'          },
  { en: 'to feel',      tr: 'hiss etmək',        wrong: 'görmək'        },
  { en: 'to hate',      tr: 'nifrət etmək',      wrong: 'sevmək'        },
  { en: 'to love',      tr: 'sevmək',            wrong: 'nifrət etmək'  },
  { en: 'to like',      tr: 'xoşlamaq',          wrong: 'sevməmək'      },
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
