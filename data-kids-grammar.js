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
      // Məlumatlar sonra əlavə olunacaq
    ]
  },

  // ╔══════════════════════════════════════════════════╗
  // ║  GRAMMAR BÖLÜMÜ                                 ║
  // ╚══════════════════════════════════════════════════╝
  {
    id: 'grammar',
    name: 'GRAMMAR',
    icon: '📖',
    color: '#8B5CF6',
    quizzes: [
      // Məlumatlar sonra əlavə olunacaq
    ]
  },

];

// Mövcud LEVELS array-inə əlavə et
if (window.LEVELS) {
  window.LEVELS = [...KIDS_GRAMMAR_LEVELS, ...window.LEVELS];
} else {
  window.LEVELS = KIDS_GRAMMAR_LEVELS;
}
