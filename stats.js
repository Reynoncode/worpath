/**
 * WordPath — Statistika Mühərriki
 * Bütün məlumatlar cihazda localStorage-da saxlanılır.
 * Bulud və ya server lazım deyil.
 *
 * İSTİFADƏ:
 *   1. <script src="stats.js"></script> əlavə et
 *   2. Testi cavablandıranda çağır:  Stats.recordAnswer("ambiguous", "B1", "qeyri-müəyyən", false)
 *   3. Ulduzla düzəldəndə çağır:     Stats.useStarFix("ambiguous")
 *   4. Statistika səhifəsini göstər: Stats.renderPage("stats-container")
 */

const Stats = (() => {

  const KEY = "wordpath_stats";

  // ─── Boş data strukturu ──────────────────────────────────────────────────
  function emptyData() {
    return {
      stars: 0,
      streak: { count: 0, lastDate: null },
      words: {}
      // words["söz"] = { level, translation, attempts, correct, errors, starFixed }
    };
  }

  // ─── localStorage oxu / yaz ──────────────────────────────────────────────
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : emptyData();
    } catch { return emptyData(); }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  // ─── Streak yeniləmə (tətbiq hər açıldığında çağır) ─────────────────────
  function updateStreak() {
    const data = load();
    const today = new Date().toISOString().slice(0, 10); // "2026-05-15"
    if (data.streak.lastDate === today) return;

    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    data.streak.count = (data.streak.lastDate === yesterday) ? data.streak.count + 1 : 1;
    data.streak.lastDate = today;
    save(data);
  }

  // ─── Cavab qeydiyyatı ────────────────────────────────────────────────────
  // word       — ingilis sözü (unikal açar)
  // level      — "A1", "A2", "B1", "B2", "C1", "C2"
  // translation — azərbaycan tərcüməsi
  // isCorrect  — true / false
  function recordAnswer(word, level, translation, isCorrect) {
    const data = load();
    if (!data.words[word]) {
      data.words[word] = { level, translation, attempts: 0, correct: 0, errors: 0, starFixed: false };
    }
    const w = data.words[word];
    w.attempts++;
    if (isCorrect) w.correct++;
    else           w.errors++;
    save(data);
  }

  // ─── Ulduzla düzəltmə ────────────────────────────────────────────────────
  // Səhv sayı azalmır — sadəcə "ulduzla düzəldildi" işarəsi qoyulur.
  function useStarFix(word) {
    const data = load();
    if (data.stars < 1) return false; // ulduz yoxdur
    if (!data.words[word]) return false;
    data.stars = Math.max(0, data.stars - 1);
    data.words[word].starFixed = true;
    save(data);
    return true;
  }

  // ─── Ulduz əlavə et (test bitirəndə, yaxud mükafat kimi) ─────────────────
  function addStar(count = 1) {
    const data = load();
    data.stars += count;
    save(data);
  }

  // ─── Hesablanmış statistika ───────────────────────────────────────────────
  function getStats() {
    const data = load();

    // Ümumi rəqəmlər
    const allWords    = Object.values(data.words);
    const totalLearned = allWords.filter(w => w.correct > 0).length;
    const totalAttempts = allWords.reduce((s, w) => s + w.attempts, 0);
    const totalCorrect  = allWords.reduce((s, w) => s + w.correct,  0);
    const correctRate   = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    const totalErrors   = allWords.reduce((s, w) => s + w.errors, 0);
    const starFixedCount = allWords.filter(w => w.starFixed).length;

    // Səhvlərə görə sıralama: çox səhv → az səhv
    const errorWords = allWords
      .filter(w => w.errors > 0)
      .sort((a, b) => b.errors - a.errors)
      .map(w => ({
        word: Object.keys(data.words).find(k => data.words[k] === w),
        ...w,
        severity: w.errors >= 3 ? "critical" : w.errors === 2 ? "medium" : "light"
      }));

    return {
      stars:        data.stars,
      streak:       data.streak.count,
      totalLearned,
      correctRate,
      totalErrors,
      starFixedCount,
      errorWords,
      rawWords:     data.words
    };
  }

  // ─── Statistika sıfırla (isteğe bağlı) ───────────────────────────────────
  function reset() {
    localStorage.removeItem(KEY);
  }

  // ─── Public API ───────────────────────────────────────────────────────────
  return { updateStreak, recordAnswer, useStarFix, addStar, getStats, reset, load };

})();
