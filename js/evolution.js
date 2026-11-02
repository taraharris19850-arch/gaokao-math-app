/**
 * 自进化：从使用事件聚合弱点 → 生成改进提案
 */
(function (global) {
  function analyze(events) {
    const byType = {};
    const wrongByProblem = {};
    const correctByProblem = {};
    const topicWrong = {};
    const ankiHard = {};
    const feedback = [];
    const tts = { play: 0 };
    const anim = { play: 0 };
    let nps = [];

    (events || []).forEach((ev) => {
      byType[ev.type] = (byType[ev.type] || 0) + 1;
      const p = ev.payload || {};
      if (ev.type === "practice_result") {
        const id = p.problemId || "unknown";
        if (p.result === "wrong") {
          wrongByProblem[id] = (wrongByProblem[id] || 0) + 1;
          (p.tags || []).forEach((t) => {
            topicWrong[t] = (topicWrong[t] || 0) + 1;
          });
        } else if (p.result === "correct") {
          correctByProblem[id] = (correctByProblem[id] || 0) + 1;
        }
      }
      if (ev.type === "anki_rate" && (p.quality === 0 || p.quality === 1)) {
        const id = p.cardId || p.problemId || "card";
        ankiHard[id] = (ankiHard[id] || 0) + 1;
      }
      if (ev.type === "tts_play") tts.play++;
      if (ev.type === "animation_play") anim.play++;
      if (ev.type === "feedback") {
        feedback.push({ ts: ev.ts, nps: p.nps, text: p.text || "", sessionId: ev.sessionId });
        if (typeof p.nps === "number") nps.push(p.nps);
      }
    });

    const weakProblems = Object.keys(wrongByProblem)
      .map((id) => ({
        problemId: id,
        wrong: wrongByProblem[id],
        correct: correctByProblem[id] || 0,
        rate: wrongByProblem[id] / (wrongByProblem[id] + (correctByProblem[id] || 0))
      }))
      .sort((a, b) => b.wrong - a.wrong || b.rate - a.rate);

    const weakTopics = Object.keys(topicWrong)
      .map((t) => ({ topic: t, wrong: topicWrong[t] }))
      .sort((a, b) => b.wrong - a.wrong);

    const avgNps = nps.length ? nps.reduce((a, b) => a + b, 0) / nps.length : null;

    return {
      eventCount: (events || []).length,
      byType,
      weakProblems,
      weakTopics,
      ankiHard: Object.keys(ankiHard)
        .map((id) => ({ id, hard: ankiHard[id] }))
        .sort((a, b) => b.hard - a.hard),
      tts,
      anim,
      feedback,
      avgNps,
      analyzedAt: new Date().toISOString()
    };
  }

  function propose(analysis, questions) {
    const qs = questions || global.GAOKAO_QUESTIONS || [];
    const byId = {};
    qs.forEach((q) => (byId[q.id] = q));
    const proposals = [];
    const changelog = [];

    (analysis.weakProblems || []).slice(0, 8).forEach((w) => {
      const q = byId[w.problemId];
      if (!q) return;
      if (w.rate >= 0.5 && w.wrong >= 2) {
        proposals.push({
          kind: "difficulty_retune",
          problemId: q.id,
          from: q.difficulty,
          to: Math.min(5, (q.difficulty || 2) + 1),
          reason: "错误率偏高 (" + Math.round(w.rate * 100) + "%，错" + w.wrong + "次)"
        });
        changelog.push("上调难度 " + q.id + " → " + Math.min(5, (q.difficulty || 2) + 1));
      }
      if (w.wrong >= 3) {
        proposals.push({
          kind: "add_similar_scaffold",
          problemId: q.id,
          title: q.title + "（变式巩固）",
          tags: q.tags,
          reason: "错题集中，建议增加低难度变式与步骤拆解"
        });
        changelog.push("建议为 " + q.id + " 增加变式巩固题");
      }
    });

    (analysis.weakTopics || []).slice(0, 5).forEach((t) => {
      proposals.push({
        kind: "topic_content_boost",
        topic: t.topic,
        reason: "主题「" + t.topic + "」累计错答 " + t.wrong + " 次，建议补充知识点卡片与动画",
        actions: ["新增 1–2 道该主题基础题", "为高频错题加强语音讲解分步", "知识点卡加入间隔重复队列默认到期"]
      });
      changelog.push("加强主题：" + t.topic);
    });

    (analysis.ankiHard || []).slice(0, 5).forEach((c) => {
      proposals.push({
        kind: "card_rewrite",
        cardId: c.id,
        reason: "Again/Hard 较多 (" + c.hard + ")，建议缩短正面、强化背面口诀"
      });
    });

    (analysis.feedback || []).slice(0, 20).forEach((f) => {
      if (f.text && f.text.trim()) {
        proposals.push({
          kind: "feedback_theme",
          nps: f.nps,
          text: f.text.slice(0, 200),
          reason: "用户体验反馈待人工归类"
        });
      }
    });

    // 示例新题草稿（基于最弱主题）
    if (analysis.weakTopics && analysis.weakTopics[0]) {
      const topic = analysis.weakTopics[0].topic;
      const newId = "auto-" + Date.now().toString(36);
      proposals.push({
        kind: "new_question_draft",
        draft: {
          id: newId,
          title: topic + "巩固练",
          stem: "（系统草稿）请围绕「" + topic + "」出一道高考风格基础题，并补全步骤与动画规格。",
          type: "解答题",
          tags: [topic, "自进化草稿"],
          difficulty: 1,
          answer: "待教研填写",
          steps: ["审题", "调用核心公式", "检验"],
          knowledgePoints: [topic],
          lifeApplications: ["待补充"],
          historyNote: "待补充",
          animationSpec: { kind: "numberLine", points: [{ x: 1, label: topic }], highlight: 1 }
        },
        reason: "针对最弱主题自动生成草稿题，需人工润色后入库"
      });
      changelog.push("生成新题草稿 " + newId);
    }

    return {
      id: "prop_" + Date.now(),
      createdAt: new Date().toISOString(),
      basedOnEvents: analysis.eventCount,
      avgNps: analysis.avgNps,
      proposals,
      changelog,
      analysisSummary: {
        weakTopics: analysis.weakTopics.slice(0, 5),
        weakProblems: analysis.weakProblems.slice(0, 5),
        byType: analysis.byType
      }
    };
  }

  function applyDifficultyRetunes(proposalBundle, questions) {
    const qs = (questions || []).map((q) => Object.assign({}, q));
    const applied = [];
    (proposalBundle.proposals || []).forEach((p) => {
      if (p.kind !== "difficulty_retune") return;
      const q = qs.find((x) => x.id === p.problemId);
      if (!q) return;
      q.difficulty = p.to;
      applied.push(p.problemId);
    });
    return { questions: qs, applied };
  }

  global.GaokaoEvolution = { analyze, propose, applyDifficultyRetunes };
})(window);
