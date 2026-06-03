/**
 * WordPath — Grammar Statistika Mühərriki
 * Grammar suallarının cavablarını, irəliləməsini və səhvlərini izləyir.
 * localStorage-da "wordpath_grammar_stats" açarında saxlanılır.
 *
 * İSTİFADƏ:
 *   grammar-engine.js-də mini_check cavabı veriləndə:
 *     GrammarStats.recordAnswer(ruleId, ruleName, questionText, isCorrect)
 *
 *   Qayda tamamlananda (finishGrammarLesson içərisindən):
 *     GrammarStats.markRuleCompleted(ruleId, ruleName)
 *
 *   Statistika almaq üçün:
 *     GrammarStats.getStats()
 */

const GrammarStats = (() => {

  const KEY = "wordpath_grammar_stats";

  // ─── Boş data strukturu ─────────────────────────────────────────────────
  function emptyData() {
    return {
      rules: {}
      // rules["ruleId"] = {
      //   name: "Qayda adı",
      //   completed: false,
      //   questions: {
      //     "sual mətni": { attempts, correct, errors }
      //   }
      // }
    };
  }

  // ─── localStorage oxu / yaz ─────────────────────────────────────────────
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : emptyData();
    } catch { return emptyData(); }
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  // ─── Cavab qeydiyyatı ───────────────────────────────────────────────────
  // ruleId       — qaydanın unikal ID-si (məs: "a1_present_simple")
  // ruleName     — qaydanın adı (məs: "Present Simple")
  // questionText — sualın mətni (dropdown-da göstəriləcək)
  // isCorrect    — true / false
  function recordAnswer(ruleId, ruleName, questionText, isCorrect) {
    if (!ruleId || !questionText) return;
    const data = load();

    if (!data.rules[ruleId]) {
      data.rules[ruleId] = { name: ruleName || ruleId, completed: false, questions: {} };
    }

    const rule = data.rules[ruleId];
    rule.name = ruleName || rule.name; // adı yenilə

    if (!rule.questions[questionText]) {
      rule.questions[questionText] = { attempts: 0, correct: 0, errors: 0 };
    }

    const q = rule.questions[questionText];
    q.attempts++;
    if (isCorrect) {
      q.correct++;
    } else {
      q.errors++;
    }

    save(data);
  }

  // ─── Qayda tamamlandı işarəsi ───────────────────────────────────────────
  function markRuleCompleted(ruleId, ruleName) {
    if (!ruleId) return;
    const data = load();
    if (!data.rules[ruleId]) {
      data.rules[ruleId] = { name: ruleName || ruleId, completed: false, questions: {} };
    }
    data.rules[ruleId].completed = true;
    if (ruleName) data.rules[ruleId].name = ruleName;
    save(data);
  }

  // ─── Hesablanmış statistika ─────────────────────────────────────────────
  function getStats() {
    const data = load();
    const allRules = Object.entries(data.rules);

    // Hər qayda üçün summary
    const ruleStats = allRules.map(([ruleId, rule]) => {
      const questions = Object.entries(rule.questions || {});
      const totalErrors = questions.reduce((s, [, q]) => s + q.errors, 0);

      // Səhv olan sualları topla
      const errorQuestions = questions
        .filter(([, q]) => q.errors > 0)
        .sort(([, a], [, b]) => b.errors - a.errors)
        .map(([text, q]) => ({ text, ...q }));

      return {
        ruleId,
        name: rule.name,
        completed: rule.completed || false,
        totalQuestions: questions.length,
        totalErrors,
        errorQuestions,
      };
    });

    // İrəliləmə: tamamlanmış qaydalar
    const completedCount = ruleStats.filter(r => r.completed).length;
    const totalRules = ruleStats.length;

    // Səhvli qaydalar (dropdown üçün)
    const errorRules = ruleStats
      .filter(r => r.totalErrors > 0)
      .sort((a, b) => b.totalErrors - a.totalErrors);

    return {
      ruleStats,
      completedCount,
      totalRules,
      errorRules,
    };
  }

  // ─── Sıfırla ────────────────────────────────────────────────────────────
  function reset() {
    localStorage.removeItem(KEY);
  }

  // ─── Public API ─────────────────────────────────────────────────────────
  return { recordAnswer, markRuleCompleted, getStats, load, reset };

})();

window.GrammarStats = GrammarStats;
