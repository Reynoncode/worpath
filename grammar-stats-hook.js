/**
 * WordPath — Grammar Engine Stats Hook
 * Bu fayl grammar-engine.js-ə toxunmadan onun funksiyalarını
 * GrammarStats ilə əlaqələndirir.
 *
 * grammar-engine.js-dən SONRA yüklənməlidir.
 * grammar-stats.js-dən SONRA yüklənməlidir.
 *
 * Etdiyi iş:
 *   1. handleGrammarMiniAnswer — hər cavabı GrammarStats.recordAnswer()-a göndərir
 *   2. finishGrammarLesson     — dərsi GrammarStats.markRuleCompleted()-ə bildirir
 */

(function patchGrammarStats() {

  // ─── handleGrammarMiniAnswer hook ───────────────────────────────────────
  // Orijinal funksiya grammar-engine.js-dədir; biz onu wrap edirik
  const _origMiniAnswer = window.handleGrammarMiniAnswer;

  window.handleGrammarMiniAnswer = function(btn, card, cardIdx) {
    // Orijinal davranışı saxla
    if (_origMiniAnswer) _origMiniAnswer.call(this, btn, card, cardIdx);

    // Stats qeydiyyatı
    try {
      const qi      = parseInt(btn.dataset.qi);
      const chosen  = btn.dataset.opt;
      const q       = card.questions[qi];
      const correct = chosen === q.answer;

      const item    = grammarState?.item;
      const ruleId  = _getRuleId();
      const ruleName = item?.title || ruleId;

      if (window.GrammarStats && ruleId) {
        GrammarStats.recordAnswer(ruleId, ruleName, q.q, correct);
      }
    } catch(e) {
      console.warn('GrammarStats hook (miniAnswer):', e);
    }
  };

  // ─── finishGrammarLesson hook ────────────────────────────────────────────
  const _origFinish = window.finishGrammarLesson;

  window.finishGrammarLesson = function() {
    // Stats qeydiyyatı (finish-dən əvvəl)
    try {
      const item     = grammarState?.item;
      const ruleId   = _getRuleId();
      const ruleName = item?.title || ruleId;
      if (window.GrammarStats && ruleId) {
        GrammarStats.markRuleCompleted(ruleId, ruleName);
      }
    } catch(e) {
      console.warn('GrammarStats hook (finish):', e);
    }

    // Orijinal davranışı saxla
    if (_origFinish) _origFinish.call(this);
  };

  // ─── ruleId köməkçisi ────────────────────────────────────────────────────
  // Qayda ID-si: levelId + "_" + quizIdx (məs: "a1_3")
  // Əgər item-in özündə id varsa onu istifadə edir
  function _getRuleId() {
    const state = window.grammarState;
    if (!state || state.levelIdx === null) return null;

    const item = state.item;
    if (item?.id) return item.id;

    // Fallback: level key + quiz index
    try {
      const LEVELS = window.LEVELS;
      if (LEVELS && LEVELS[state.levelIdx]) {
        const lvlId = LEVELS[state.levelIdx].id || `level${state.levelIdx}`;
        return `${lvlId}_${state.quizIdx}`;
      }
    } catch(_) {}

    return `rule_${state.levelIdx}_${state.quizIdx}`;
  }

})();
