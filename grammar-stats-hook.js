/**
 * WordPath — Grammar Engine Stats Hook
 * grammar-engine.js-dən SONRA, grammar-stats.js-dən SONRA yüklənməlidir.
 */
(function patchGrammarStats() {

  // ─── Köməkçi: cari qayda məlumatı ──────────────────────────────────────
  function _getRule() {
    const state = window.grammarState;
    if (!state || state.levelIdx === null) return null;
    try {
      const lvl = window.LEVELS?.[state.levelIdx];
      if (!lvl) return null;

      // Yalnız real node-ları say: section_divider-ləri XARİC et
      const total = (lvl.quizzes || []).filter(q => {
        if (!q) return false;                        // null/undefined → xaric
        if (Array.isArray(q)) return true;           // söz quiz massivi → daxil
        if (q.type === 'section_divider') return false; // bölücü → xaric
        return true;                                 // lesson, quiz → daxil
      }).length;

      return {
        ruleId:   lvl.id   || `rule_${state.levelIdx}`,
        ruleName: lvl.name || lvl.id || `rule_${state.levelIdx}`,
        total,
      };
    } catch(_) { return null; }
  }

  // ─── handleGrammarMiniAnswer hook ──────────────────────────────────────
  const _origMiniAnswer = window.handleGrammarMiniAnswer;
  window.handleGrammarMiniAnswer = function(btn, card, cardIdx) {
    if (_origMiniAnswer) _origMiniAnswer.call(this, btn, card, cardIdx);
    try {
      const qi      = parseInt(btn.dataset.qi);
      const chosen  = btn.dataset.opt;
      const q       = card.questions[qi];
      const correct = chosen === q.answer;
      const rule    = _getRule();
      if (window.GrammarStats && rule) {
        GrammarStats.recordAnswer(rule.ruleId, rule.ruleName, rule.total, q.q, correct);
      }
    } catch(e) {
      console.warn('GrammarStats hook (miniAnswer):', e);
    }
  };

  // ─── finishGrammarLesson hook ───────────────────────────────────────────
  const _origFinish = window.finishGrammarLesson;
  window.finishGrammarLesson = function() {
    try {
      const rule = _getRule();
      if (window.GrammarStats && rule) {
        GrammarStats.incrementCompleted(rule.ruleId, rule.ruleName, rule.total);
      }
    } catch(e) {
      console.warn('GrammarStats hook (finish):', e);
    }
    if (_origFinish) _origFinish.call(this);
  };

})();
