/**
 * WordPath — Grammar Statistika Mühərriki
 */

const GrammarStats = (() => {

  const KEY = "wordpath_grammar_stats";

  function emptyData() {
    return { rules: {} };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : emptyData();
    } catch { return emptyData(); }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
    try {
      if (window.auth?.currentUser && window.db) {
        import("https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js")
          .then(({ doc, setDoc }) => {
            setDoc(
              doc(window.db, "users", window.auth.currentUser.uid),
              { grammarStats: data },
              { merge: true }
            );
          });
      }
    } catch(_) {}
  }

  // ─── Cavab qeydiyyatı ───────────────────────────────────────────────────
  function recordAnswer(ruleId, ruleName, total, questionText, isCorrect, nodeTitle, ruleColor) {
    if (!ruleId || !questionText) return;
    const data = load();

    if (!data.rules[ruleId]) {
      data.rules[ruleId] = { name: ruleName || ruleId, total: total || 0, completed: 0, color: '', questions: {} };
    }

    const rule = data.rules[ruleId];
    if (ruleName)   rule.name  = ruleName;
    if (total)      rule.total = total;
    if (ruleColor)  rule.color = ruleColor;

    if (!rule.questions[questionText]) {
      rule.questions[questionText] = { attempts: 0, correct: 0, errors: 0, nodeTitle: '' };
    }

    const q = rule.questions[questionText];
    q.attempts++;
    if (isCorrect) q.correct++;
    else           q.errors++;
    if (nodeTitle) q.nodeTitle = nodeTitle;
    save(data);
  }

  // ─── Bir node tamamlandı ────────────────────────────────────────────────
  function incrementCompleted(ruleId, ruleName, total, ruleColor) {
    if (!ruleId) return;
    const data = load();

    if (!data.rules[ruleId]) {
      data.rules[ruleId] = { name: ruleName || ruleId, total: total || 0, completed: 0, color: '', questions: {} };
    }

    const rule = data.rules[ruleId];
    if (ruleName)  rule.name  = ruleName;
    if (total)     rule.total = total;
    if (ruleColor) rule.color = ruleColor;

    rule.completed = Math.min(rule.total, (rule.completed || 0) + 1);

    save(data);
  }

  // ─── Hesablanmış statistika ─────────────────────────────────────────────
  function getStats() {
    const data = load();
    const allRules = Object.entries(data.rules);

    const ruleStats = allRules.map(([ruleId, rule]) => {
      const questions   = Object.entries(rule.questions || {});
      const totalQ      = questions.length;
      const correctQ    = questions.filter(([, q]) => q.correct > 0).length;
      const totalErrors = questions.reduce((s, [, q]) => s + q.errors, 0);

      const nodeTotal     = rule.total     || 0;
      const nodeCompleted = rule.completed || 0;
      const pct = nodeTotal > 0
        ? Math.min(100, Math.round((nodeCompleted / nodeTotal) * 100))
        : 0;

      const errorQuestions = questions
        .filter(([, q]) => q.errors > 0)
        .sort(([, a], [, b]) => b.errors - a.errors)
        .map(([text, q]) => ({ text, nodeTitle: q.nodeTitle || '', ...q }));

      return {
        ruleId,
        name:           rule.name  || ruleId,
        color:          rule.color || '#085041',
        total:          nodeTotal,
        completed:      nodeCompleted,
        totalQuestions: totalQ,
        correctQ,
        totalErrors,
        pct,
        errorQuestions,
      };
    });

    const grammarCompletedCount = ruleStats.filter(r => r.completed >= r.total && r.total > 0).length;
    const totalRules  = ruleStats.length;
    const errorRules  = ruleStats
      .filter(r => r.totalErrors > 0)
      .sort((a, b) => b.totalErrors - a.totalErrors);

    return { ruleStats, completedCount: grammarCompletedCount, totalRules, errorRules };
  }

  function reset() { localStorage.removeItem(KEY); }

  return { recordAnswer, incrementCompleted, getStats, load, reset };

})();

window.GrammarStats = GrammarStats;
