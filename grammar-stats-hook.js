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
      const total = (lvl.quizzes || []).filter(q => {
        if (!q) return false;
        if (Array.isArray(q)) return true;
        if (q.type === 'section_divider') return false;
        if (q.type === 'grammar_lesson') return true;
        return false;
      }).length;
      return {
        ruleId:    lvl.id    || `rule_${state.levelIdx}`,
        ruleName:  lvl.name  || lvl.id || `rule_${state.levelIdx}`,
        ruleColor: lvl.color || '#085041',
        total,
      };
    } catch(_) { return null; }
  }

  // ─── handleGrammarMiniAnswer hook ──────────────────────────────────────
  const _origMiniAnswer = window.handleGrammarMiniAnswer;
  window.handleGrammarMiniAnswer = function(btn, card, cardIdx) {
    if (_origMiniAnswer) _origMiniAnswer.call(this, btn, card, cardIdx);
    try {
      const qi        = parseInt(btn.dataset.qi);
      const chosen    = btn.dataset.opt;
      const q         = card.questions[qi];
      const correct   = chosen === q.answer;
      const rule      = _getRule();
      const nodeTitle = card.title || '';
      if (window.GrammarStats && rule) {
        GrammarStats.recordAnswer(
          rule.ruleId,
          rule.ruleName,
          rule.total,
          q.q,
          correct,
          nodeTitle,
          rule.ruleColor
        );
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
        GrammarStats.incrementCompleted(
          rule.ruleId,
          rule.ruleName,
          rule.total,
          rule.ruleColor
        );
      }
    } catch(e) {
      console.warn('GrammarStats hook (finish):', e);
    }
    if (_origFinish) _origFinish.call(this);
  };

})();
