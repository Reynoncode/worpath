// ============================================================
//  WORDPATH — GAME DATA
//  game-data.js
//
//  Yüklənmə sırası:
//    game-data.js  →  general-english-engine.js  →  app.js
//
//  Hər level üçün game nodeları bu faylda saxlanılır.
//  Struktur:
//    GAME_DATA[levelId][gameId] = {
//      id:       string,       // unikal ID, məs. 'a1_g1'
//      title:    string,       // node labelı
//      words: [                // krossvord üçün sözlər
//        { word: 'APPLE', clue: 'A fruit', az: 'alma' },
//        ...
//      ]
//    }
//
//  gameId = blok indeksi + game indeksi, məs. 'b0_g0'
//  (b0 = birinci exam bloku, g0 = həmin blokun ilk oyunu)
//
//  QEYD: Bu faylı özün doldurursan. Hər oyun üçün ən azı
//  10-15 söz əlavə et ki krossvord tam yerləşsin.
// ============================================================

const GAME_DATA = {

  // ── A1 ─────────────────────────────────────────────────
  // Blok 0 → quizlər: [0,1,2,3] → 4 quiz → 3 game
  // Blok 1 → quizlər: [5,6,7,8,9] → 5 quiz → 4 game
  // Blok 2 → quizlər: [11,12,13] → 3 quiz → 2 game
  // Blok 3 → quizlər: [15,16,17] → 3 quiz → 2 game
  // Blok 4 → quizlər: [19,20,21,22] → 4 quiz → 3 game
  // Blok 5 → quizlər: [24,25,26,27] → 4 quiz → 3 game
  // Blok 6 → quizlər: [29,30,31] → 3 quiz → 2 game
  // Blok 7 → quizlər: [33,34,35] → 3 quiz → 2 game
  // Blok 8 → quizlər: [37,38,39] → 3 quiz → 2 game
  // Blok 9 → quizlər: [41,42,43] → 3 quiz → 2 game
  // Blok 10 → quizlər: [45,46,47] → 3 quiz → 2 game
  // Blok 11 → quizlər: [49,50,51] → 3 quiz → 2 game
  'a1': {
    // Blok 0 gameləri
    'b0_g0': {
  id: 'a1_b0_g0',
  title: 'Game 1',
  phases: [
    {
      // Phase 1 — Peşələr (ortaq hərflər: A, R, T, E, S)
      words: [
        { word: 'ACTOR',     az: 'aktyor' },
        { word: 'ARTIST',    az: 'rəssam' },
        { word: 'DANCER',    az: 'rəqqas' },
        { word: 'DOCTOR',    az: 'həkim' },
        { word: 'DRIVER',    az: 'sürücü' },
        { word: 'FARMER',    az: 'əkinçi' },
        { word: 'NURSE',     az: 'tibb bacısı' },
        { word: 'WRITER',    az: 'yazıçı' },
        { word: 'WAITER',    az: 'ofisiant' },
        { word: 'WORKER',    az: 'işçi' },
      ]
    },
    {
      // Phase 2 — Peşələr (ortaq hərflər: S, E, R, I, N)
      words: [
        { word: 'SINGER',    az: 'müğənni' },
        { word: 'STUDENT',   az: 'şagird' },
        { word: 'TEACHER',   az: 'müəllim' },
        { word: 'TOURIST',   az: 'turist' },
        { word: 'VISITOR',   az: 'ziyarətçi' },
        { word: 'PLAYER',    az: 'oyunçu' },
        { word: 'ACTRESS',   az: 'aktrisa' },
        { word: 'SCIENTIST', az: 'alim' },
        { word: 'POLICEMAN', az: 'polis' },
      ]
    },
    {
      // Phase 3 — Ümumi insanlar (ortaq hərflər: O, N, E, R, A)
      words: [
        { word: 'WOMAN',     az: 'qadın' },
        { word: 'MAN',       az: 'kişi' },
        { word: 'PERSON',    az: 'insan' },
        { word: 'MEMBER',    az: 'üzv' },
        { word: 'PARTNER',   az: 'ortaq' },
        { word: 'CUSTOMER',  az: 'müştəri' },
        { word: 'NEIGHBOUR', az: 'qonşu' },
        { word: 'TEENAGER',  az: 'yeniyetmə' },
        { word: 'FRIEND',    az: 'dost' },
      ]
    },
    {
      // Phase 4 — Ümumi insanlar (ortaq hərflər: O, Y, B, N, E)
      words: [
        { word: 'BOY',       az: 'oğlan' },
        { word: 'GIRL',      az: 'qız' },
        { word: 'BABY',      az: 'körpə' },
        { word: 'CHILD',     az: 'uşaq' },
        { word: 'ADULT',     az: 'yetkin' },
        { word: 'NOBODY',    az: 'heç kim' },
        { word: 'SOMEONE',   az: 'biri' },
        { word: 'ANYBODY',   az: 'hər hansı biri' },
        { word: 'PEOPLE',    az: 'insanlar' },
      ]
    },
  ]
},
    'b0_g1': { id: 'a1_b0_g1', title: 'Game 2', words: [] },
    'b0_g2': { id: 'a1_b0_g2', title: 'Game 3', words: [] },
    // Blok 1 gameləri
    'b1_g0': { id: 'a1_b1_g0', title: 'Game 4', words: [] },
    'b1_g1': { id: 'a1_b1_g1', title: 'Game 5', words: [] },
    'b1_g2': { id: 'a1_b1_g2', title: 'Game 6', words: [] },
    'b1_g3': { id: 'a1_b1_g3', title: 'Game 7', words: [] },
    // Blok 2 gameləri
    'b2_g0': { id: 'a1_b2_g0', title: 'Game 8',  words: [] },
    'b2_g1': { id: 'a1_b2_g1', title: 'Game 9',  words: [] },
    // Blok 3 gameləri
    'b3_g0': { id: 'a1_b3_g0', title: 'Game 10', words: [] },
    'b3_g1': { id: 'a1_b3_g1', title: 'Game 11', words: [] },
    // Blok 4 gameləri
    'b4_g0': { id: 'a1_b4_g0', title: 'Game 12', words: [] },
    'b4_g1': { id: 'a1_b4_g1', title: 'Game 13', words: [] },
    'b4_g2': { id: 'a1_b4_g2', title: 'Game 14', words: [] },
    // Blok 5 gameləri
    'b5_g0': { id: 'a1_b5_g0', title: 'Game 15', words: [] },
    'b5_g1': { id: 'a1_b5_g1', title: 'Game 16', words: [] },
    'b5_g2': { id: 'a1_b5_g2', title: 'Game 17', words: [] },
    // Blok 6 gameləri
    'b6_g0': { id: 'a1_b6_g0', title: 'Game 18', words: [] },
    'b6_g1': { id: 'a1_b6_g1', title: 'Game 19', words: [] },
    // Blok 7 gameləri
    'b7_g0': { id: 'a1_b7_g0', title: 'Game 20', words: [] },
    'b7_g1': { id: 'a1_b7_g1', title: 'Game 21', words: [] },
    // Blok 8 gameləri
    'b8_g0': { id: 'a1_b8_g0', title: 'Game 22', words: [] },
    'b8_g1': { id: 'a1_b8_g1', title: 'Game 23', words: [] },
    // Blok 9 gameləri
    'b9_g0': { id: 'a1_b9_g0', title: 'Game 24', words: [] },
    'b9_g1': { id: 'a1_b9_g1', title: 'Game 25', words: [] },
    // Blok 10 gameləri
    'b10_g0': { id: 'a1_b10_g0', title: 'Game 26', words: [] },
    'b10_g1': { id: 'a1_b10_g1', title: 'Game 27', words: [] },
    // Blok 11 gameləri
    'b11_g0': { id: 'a1_b11_g0', title: 'Game 28', words: [] },
    'b11_g1': { id: 'a1_b11_g1', title: 'Game 29', words: [] },
  },

  // ── A2 ─────────────────────────────────────────────────
  // Blok 0 → [0,1,2,3] → 4 quiz → 3 game
  // Blok 1 → [5,6,7,8] → 4 quiz → 3 game
  // Blok 2 → [10,11,12,13] → 4 quiz → 3 game
  // Blok 3 → [15,16] → 2 quiz → 1 game
  // Blok 4 → [18,19,20,21] → 4 quiz → 3 game
  // Blok 5 → [23,24,25,26] → 4 quiz → 3 game
  // Blok 6 → [28,29] → 2 quiz → 1 game
  // Blok 7 → [31,32] → 2 quiz → 1 game
  // Blok 8 → [34,35] → 2 quiz → 1 game
  // Blok 9 → [37,38] → 2 quiz → 1 game
  'a2': {
    'b0_g0': { id: 'a2_b0_g0', title: 'Game 1', words: [] },
    'b0_g1': { id: 'a2_b0_g1', title: 'Game 2', words: [] },
    'b0_g2': { id: 'a2_b0_g2', title: 'Game 3', words: [] },
    'b1_g0': { id: 'a2_b1_g0', title: 'Game 4', words: [] },
    'b1_g1': { id: 'a2_b1_g1', title: 'Game 5', words: [] },
    'b1_g2': { id: 'a2_b1_g2', title: 'Game 6', words: [] },
    'b2_g0': { id: 'a2_b2_g0', title: 'Game 7', words: [] },
    'b2_g1': { id: 'a2_b2_g1', title: 'Game 8', words: [] },
    'b2_g2': { id: 'a2_b2_g2', title: 'Game 9', words: [] },
    'b3_g0': { id: 'a2_b3_g0', title: 'Game 10', words: [] },
    'b4_g0': { id: 'a2_b4_g0', title: 'Game 11', words: [] },
    'b4_g1': { id: 'a2_b4_g1', title: 'Game 12', words: [] },
    'b4_g2': { id: 'a2_b4_g2', title: 'Game 13', words: [] },
    'b5_g0': { id: 'a2_b5_g0', title: 'Game 14', words: [] },
    'b5_g1': { id: 'a2_b5_g1', title: 'Game 15', words: [] },
    'b5_g2': { id: 'a2_b5_g2', title: 'Game 16', words: [] },
    'b6_g0': { id: 'a2_b6_g0', title: 'Game 17', words: [] },
    'b7_g0': { id: 'a2_b7_g0', title: 'Game 18', words: [] },
    'b8_g0': { id: 'a2_b8_g0', title: 'Game 19', words: [] },
    'b9_g0': { id: 'a2_b9_g0', title: 'Game 20', words: [] },
  },

  // ── B1 ─────────────────────────────────────────────────
  // Blok 0 → [0,1,2,3] → 4 quiz → 3 game
  // Blok 1 → [5,6,7] → 3 quiz → 2 game
  // Blok 2 → [9,10] → 2 quiz → 1 game
  // Blok 3 → [12,13,14] → 3 quiz → 2 game
  // Blok 4 → [16,17,18] → 3 quiz → 2 game
  // Blok 5 → [20,21,22] → 3 quiz → 2 game
  // Blok 6 → [24,25] → 2 quiz → 1 game
  // Blok 7 → [27,28,29] → 3 quiz → 2 game
  'b1': {
    'b0_g0': { id: 'b1_b0_g0', title: 'Game 1', words: [] },
    'b0_g1': { id: 'b1_b0_g1', title: 'Game 2', words: [] },
    'b0_g2': { id: 'b1_b0_g2', title: 'Game 3', words: [] },
    'b1_g0': { id: 'b1_b1_g0', title: 'Game 4', words: [] },
    'b1_g1': { id: 'b1_b1_g1', title: 'Game 5', words: [] },
    'b2_g0': { id: 'b1_b2_g0', title: 'Game 6', words: [] },
    'b3_g0': { id: 'b1_b3_g0', title: 'Game 7', words: [] },
    'b3_g1': { id: 'b1_b3_g1', title: 'Game 8', words: [] },
    'b4_g0': { id: 'b1_b4_g0', title: 'Game 9',  words: [] },
    'b4_g1': { id: 'b1_b4_g1', title: 'Game 10', words: [] },
    'b5_g0': { id: 'b1_b5_g0', title: 'Game 11', words: [] },
    'b5_g1': { id: 'b1_b5_g1', title: 'Game 12', words: [] },
    'b6_g0': { id: 'b1_b6_g0', title: 'Game 13', words: [] },
    'b7_g0': { id: 'b1_b7_g0', title: 'Game 14', words: [] },
    'b7_g1': { id: 'b1_b7_g1', title: 'Game 15', words: [] },
  },

  // ── B2 ─────────────────────────────────────────────────
  // Blok 0 → [0,1] → 2 quiz → 1 game
  // Blok 1 → [3,4,5] → 3 quiz → 2 game
  // Blok 2 → [7,8,9,10] → 4 quiz → 3 game
  // Blok 3 → [12,13,14] → 3 quiz → 2 game
  // Blok 4 → [16,17] → 2 quiz → 1 game
  // Blok 5 → [19,20] → 2 quiz → 1 game
  // Blok 6 → [22,23,24,25] → 4 quiz → 3 game
  // Blok 7 → [27,28,29,30] → 4 quiz → 3 game
  // Blok 8 → [32,33] → 2 quiz → 1 game
  // Blok 9 → [35,36] → 2 quiz → 1 game
  // Blok 10 → [38,39] → 2 quiz → 1 game
  // Blok 11 → [41,42] → 2 quiz → 1 game
  // Blok 12 → [44,45,46] → 3 quiz → 2 game
  // Blok 13 → [48,49,50] → 3 quiz → 2 game
  // Blok 14 → [52,53] → 2 quiz → 1 game
  'b2': {
    'b0_g0':  { id: 'b2_b0_g0',  title: 'Game 1',  words: [] },
    'b1_g0':  { id: 'b2_b1_g0',  title: 'Game 2',  words: [] },
    'b1_g1':  { id: 'b2_b1_g1',  title: 'Game 3',  words: [] },
    'b2_g0':  { id: 'b2_b2_g0',  title: 'Game 4',  words: [] },
    'b2_g1':  { id: 'b2_b2_g1',  title: 'Game 5',  words: [] },
    'b2_g2':  { id: 'b2_b2_g2',  title: 'Game 6',  words: [] },
    'b3_g0':  { id: 'b2_b3_g0',  title: 'Game 7',  words: [] },
    'b3_g1':  { id: 'b2_b3_g1',  title: 'Game 8',  words: [] },
    'b4_g0':  { id: 'b2_b4_g0',  title: 'Game 9',  words: [] },
    'b5_g0':  { id: 'b2_b5_g0',  title: 'Game 10', words: [] },
    'b6_g0':  { id: 'b2_b6_g0',  title: 'Game 11', words: [] },
    'b6_g1':  { id: 'b2_b6_g1',  title: 'Game 12', words: [] },
    'b6_g2':  { id: 'b2_b6_g2',  title: 'Game 13', words: [] },
    'b7_g0':  { id: 'b2_b7_g0',  title: 'Game 14', words: [] },
    'b7_g1':  { id: 'b2_b7_g1',  title: 'Game 15', words: [] },
    'b7_g2':  { id: 'b2_b7_g2',  title: 'Game 16', words: [] },
    'b8_g0':  { id: 'b2_b8_g0',  title: 'Game 17', words: [] },
    'b9_g0':  { id: 'b2_b9_g0',  title: 'Game 18', words: [] },
    'b10_g0': { id: 'b2_b10_g0', title: 'Game 19', words: [] },
    'b11_g0': { id: 'b2_b11_g0', title: 'Game 20', words: [] },
    'b12_g0': { id: 'b2_b12_g0', title: 'Game 21', words: [] },
    'b12_g1': { id: 'b2_b12_g1', title: 'Game 22', words: [] },
    'b13_g0': { id: 'b2_b13_g0', title: 'Game 23', words: [] },
    'b13_g1': { id: 'b2_b13_g1', title: 'Game 24', words: [] },
    'b14_g0': { id: 'b2_b14_g0', title: 'Game 25', words: [] },
  },

  // ── C1 ─────────────────────────────────────────────────
  // Blok 0 → [0,1] → 2 quiz → 1 game
  // Blok 1 → [3,4] → 2 quiz → 1 game
  // Blok 2 → [6,7,8] → 3 quiz → 2 game
  // Blok 3 → [10,11] → 2 quiz → 1 game
  // Blok 4 → [13,14,15] → 3 quiz → 2 game
  // Blok 5 → [17,18,19] → 3 quiz → 2 game
  // Blok 6 → [21,22,23] → 3 quiz → 2 game
  // Blok 7 → [25,26,27] → 3 quiz → 2 game
  // Blok 8 → [29,30,31] → 3 quiz → 2 game
  // Blok 9 → [33,34,35] → 3 quiz → 2 game
  // Blok 10 → [37,38,39] → 3 quiz → 2 game
  // Blok 11 → [41,42,43] → 3 quiz → 2 game
  // Blok 12 → [45,46,47] → 3 quiz → 2 game
  // Blok 13 → [49,50,51,52] → 4 quiz → 3 game
  'c1': {
    'b0_g0':  { id: 'c1_b0_g0',  title: 'Game 1',  words: [] },
    'b1_g0':  { id: 'c1_b1_g0',  title: 'Game 2',  words: [] },
    'b2_g0':  { id: 'c1_b2_g0',  title: 'Game 3',  words: [] },
    'b2_g1':  { id: 'c1_b2_g1',  title: 'Game 4',  words: [] },
    'b3_g0':  { id: 'c1_b3_g0',  title: 'Game 5',  words: [] },
    'b4_g0':  { id: 'c1_b4_g0',  title: 'Game 6',  words: [] },
    'b4_g1':  { id: 'c1_b4_g1',  title: 'Game 7',  words: [] },
    'b5_g0':  { id: 'c1_b5_g0',  title: 'Game 8',  words: [] },
    'b5_g1':  { id: 'c1_b5_g1',  title: 'Game 9',  words: [] },
    'b6_g0':  { id: 'c1_b6_g0',  title: 'Game 10', words: [] },
    'b6_g1':  { id: 'c1_b6_g1',  title: 'Game 11', words: [] },
    'b7_g0':  { id: 'c1_b7_g0',  title: 'Game 12', words: [] },
    'b7_g1':  { id: 'c1_b7_g1',  title: 'Game 13', words: [] },
    'b8_g0':  { id: 'c1_b8_g0',  title: 'Game 14', words: [] },
    'b8_g1':  { id: 'c1_b8_g1',  title: 'Game 15', words: [] },
    'b9_g0':  { id: 'c1_b9_g0',  title: 'Game 16', words: [] },
    'b9_g1':  { id: 'c1_b9_g1',  title: 'Game 17', words: [] },
    'b10_g0': { id: 'c1_b10_g0', title: 'Game 18', words: [] },
    'b10_g1': { id: 'c1_b10_g1', title: 'Game 19', words: [] },
    'b11_g0': { id: 'c1_b11_g0', title: 'Game 20', words: [] },
    'b11_g1': { id: 'c1_b11_g1', title: 'Game 21', words: [] },
    'b12_g0': { id: 'c1_b12_g0', title: 'Game 22', words: [] },
    'b12_g1': { id: 'c1_b12_g1', title: 'Game 23', words: [] },
    'b13_g0': { id: 'c1_b13_g0', title: 'Game 24', words: [] },
    'b13_g1': { id: 'c1_b13_g1', title: 'Game 25', words: [] },
    'b13_g2': { id: 'c1_b13_g2', title: 'Game 26', words: [] },
  },

  // ── C2 ─────────────────────────────────────────────────
  // Blok 0 → [0,1] → 2 → 1 game
  // Blok 1 → [3,4] → 2 → 1 game
  // Blok 2 → [6,7,8,9] → 4 → 3 game
  // Blok 3 → [11,12,13,14] → 4 → 3 game
  // Blok 4 → [16,17,18] → 3 → 2 game
  // Blok 5 → [20,21,22,23] → 4 → 3 game
  // Blok 6 → [25,26,27] → 3 → 2 game
  // Blok 7 → [29,30,31,32] → 4 → 3 game
  // Blok 8 → [34,35,36,37] → 4 → 3 game
  // Blok 9 → [39,40,41] → 3 → 2 game
  // Blok 10 → [43,44] → 2 → 1 game
  // Blok 11 → [46,47] → 2 → 1 game
  // Blok 12 → [49,50] → 2 → 1 game
  // Blok 13 → [52,53,54] → 3 → 2 game
  // Blok 14 → [56,57] → 2 → 1 game
  // Blok 15 → [59,60,61] → 3 → 2 game
  // Blok 16 → [63,64] → 2 → 1 game
  // Blok 17 → [66,67,68] → 3 → 2 game
  // Blok 18 → [70,71,72] → 3 → 2 game
  'c2': {
    'b0_g0':  { id: 'c2_b0_g0',  title: 'Game 1',  words: [] },
    'b1_g0':  { id: 'c2_b1_g0',  title: 'Game 2',  words: [] },
    'b2_g0':  { id: 'c2_b2_g0',  title: 'Game 3',  words: [] },
    'b2_g1':  { id: 'c2_b2_g1',  title: 'Game 4',  words: [] },
    'b2_g2':  { id: 'c2_b2_g2',  title: 'Game 5',  words: [] },
    'b3_g0':  { id: 'c2_b3_g0',  title: 'Game 6',  words: [] },
    'b3_g1':  { id: 'c2_b3_g1',  title: 'Game 7',  words: [] },
    'b3_g2':  { id: 'c2_b3_g2',  title: 'Game 8',  words: [] },
    'b4_g0':  { id: 'c2_b4_g0',  title: 'Game 9',  words: [] },
    'b4_g1':  { id: 'c2_b4_g1',  title: 'Game 10', words: [] },
    'b5_g0':  { id: 'c2_b5_g0',  title: 'Game 11', words: [] },
    'b5_g1':  { id: 'c2_b5_g1',  title: 'Game 12', words: [] },
    'b5_g2':  { id: 'c2_b5_g2',  title: 'Game 13', words: [] },
    'b6_g0':  { id: 'c2_b6_g0',  title: 'Game 14', words: [] },
    'b6_g1':  { id: 'c2_b6_g1',  title: 'Game 15', words: [] },
    'b7_g0':  { id: 'c2_b7_g0',  title: 'Game 16', words: [] },
    'b7_g1':  { id: 'c2_b7_g1',  title: 'Game 17', words: [] },
    'b7_g2':  { id: 'c2_b7_g2',  title: 'Game 18', words: [] },
    'b8_g0':  { id: 'c2_b8_g0',  title: 'Game 19', words: [] },
    'b8_g1':  { id: 'c2_b8_g1',  title: 'Game 20', words: [] },
    'b8_g2':  { id: 'c2_b8_g2',  title: 'Game 21', words: [] },
    'b9_g0':  { id: 'c2_b9_g0',  title: 'Game 22', words: [] },
    'b9_g1':  { id: 'c2_b9_g1',  title: 'Game 23', words: [] },
    'b10_g0': { id: 'c2_b10_g0', title: 'Game 24', words: [] },
    'b11_g0': { id: 'c2_b11_g0', title: 'Game 25', words: [] },
    'b12_g0': { id: 'c2_b12_g0', title: 'Game 26', words: [] },
    'b13_g0': { id: 'c2_b13_g0', title: 'Game 27', words: [] },
    'b13_g1': { id: 'c2_b13_g1', title: 'Game 28', words: [] },
    'b14_g0': { id: 'c2_b14_g0', title: 'Game 29', words: [] },
    'b15_g0': { id: 'c2_b15_g0', title: 'Game 30', words: [] },
    'b15_g1': { id: 'c2_b15_g1', title: 'Game 31', words: [] },
    'b16_g0': { id: 'c2_b16_g0', title: 'Game 32', words: [] },
    'b17_g0': { id: 'c2_b17_g0', title: 'Game 33', words: [] },
    'b17_g1': { id: 'c2_b17_g1', title: 'Game 34', words: [] },
    'b18_g0': { id: 'c2_b18_g0', title: 'Game 35', words: [] },
    'b18_g1': { id: 'c2_b18_g1', title: 'Game 36', words: [] },
  },
};

// ── Köməkçi funksiya: levelId + gameId ilə data al ────────
function getGameData(levelId, gameId) {
  return GAME_DATA[levelId]?.[gameId] || null;
}

// ── Global export ─────────────────────────────────────────
window.GAME_DATA   = GAME_DATA;
window.getGameData = getGameData;
