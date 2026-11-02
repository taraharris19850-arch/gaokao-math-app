/**
 * 高考数学练习 MVP — 主应用逻辑
 */
(function () {
  const qs = window.GAOKAO_QUESTIONS || [];
  const { HistoryStore, AnkiStore } = window.GaokaoStorage;

  const state = {
    view: "home",
    filterTag: "",
    search: "",
    problemId: null,
    tab: "stem",
    practiceChoice: null,
    ankiQueue: [],
    ankiCurrent: null,
    ankiFlipped: false
  };

  const TAGS = Array.from(new Set(qs.flatMap((q) => q.tags))).sort();

  function $(sel, root) {
    return (root || document).querySelector(sel);
  }
  function $all(sel, root) {
    return Array.from((root || document).querySelectorAll(sel));
  }

  function similarProblems(problem, limit) {
    const tags = new Set(problem.tags || []);
    return qs
      .filter((q) => q.id !== problem.id)
      .map((q) => {
        const shared = (q.tags || []).filter((t) => tags.has(t));
        return { q, score: shared.length, shared };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || a.q.difficulty - b.q.difficulty)
      .slice(0, limit || 5);
  }

  function difficultyStars(d) {
    return "★".repeat(d || 1) + "☆".repeat(Math.max(0, 5 - (d || 1)));
  }

  function formatTime(ts) {
    try {
      const d = new Date(ts);
      return d.toLocaleString("zh-CN", { hour12: false });
    } catch (e) {
      return ts;
    }
  }

  function navigate(view, opts) {
    state.view = view;
    if (window.GaokaoTelemetry) GaokaoTelemetry.track("navigate", { view: view, problemId: (opts && opts.problemId) || state.problemId || null });
    if (opts && opts.problemId) state.problemId = opts.problemId;
    if (opts && opts.tab) state.tab = opts.tab;
    GaokaoSpeech.stop();
    const host = $("#anim-host");
    if (host) GaokaoAnim.stop(host);
    render();
    window.scrollTo(0, 0);
  }

  function filteredQuestions() {
    const s = (state.search || "").trim();
    return qs.filter((q) => {
      if (state.filterTag && !(q.tags || []).includes(state.filterTag)) return false;
      if (!s) return true;
      const blob = [q.title, q.stem, q.type, (q.tags || []).join(" ")].join(" ");
      return blob.indexOf(s) >= 0;
    });
  }

  /* ---------- Views ---------- */

  function renderHome() {
    const due = AnkiStore.dueCount();
    const histN = HistoryStore.list().length;
    return `
      <section class="hero">
        <h1>高考数学练习</h1>
        <p class="subtitle">题库 · 相似题 · 动画可视化 · 语音讲解 · 间隔记忆</p>
        <div class="hero-actions">
          <button class="btn primary btn-lg" data-go="bank">进入题库</button>
          <button class="btn btn-lg" data-go="anki">记忆卡片${due ? '<span class="badge">' + due + '</span>' : ""}</button>
        </div>
        <div class="stat-row">
          <div class="stat"><b>${qs.length}</b><span>题目</span></div>
          <div class="stat"><b>${TAGS.length}</b><span>知识点标签</span></div>
          <div class="stat"><b>${histN}</b><span>练习记录</span></div>
          <div class="stat"><b>${due}</b><span>今日待复习</span></div>
        </div>
      </section>
      <section class="card">
        <h2>快速开始</h2>
        <div class="chip-wrap">
          ${TAGS.slice(0, 8).map((t) => `<button class="chip" data-tag="${t}">${t}</button>`).join("")}
        </div>
      </section>
      <section class="card muted-card">
        <h3>关于语音</h3>
        <p class="small">当前使用浏览器 Web Speech API（zh-CN）朗读解题步骤。iPhone Safari 需打开系统铃声开关并允许语音。原生 TTS / App Store 版本将后续提供更自然的人声。</p>
      </section>
    `;
  }

  function renderBank() {
    const list = filteredQuestions();
    return `
      <section class="toolbar sticky">
        <input class="search" id="search-input" type="search" placeholder="搜索题目 / 标签" value="${escapeAttr(state.search)}" />
        <select id="tag-filter" class="select">
          <option value="">全部类型</option>
          ${TAGS.map((t) => `<option value="${t}" ${state.filterTag === t ? "selected" : ""}>${t}</option>`).join("")}
        </select>
      </section>
      <p class="result-count">共 ${list.length} 题</p>
      <div class="problem-list">
        ${list.map((q) => `
          <button class="problem-card" data-open="${q.id}">
            <div class="pc-top">
              <span class="tag">${q.type || "题目"}</span>
              <span class="diff">${difficultyStars(q.difficulty)}</span>
            </div>
            <div class="pc-title">${escapeHtml(q.title)}</div>
            <div class="pc-stem">${escapeHtml(q.stem.slice(0, 48))}${q.stem.length > 48 ? "…" : ""}</div>
            <div class="pc-tags">${(q.tags || []).map((t) => `<span class="mini-tag">${t}</span>`).join("")}</div>
          </button>
        `).join("")}
      </div>
    `;
  }

  function renderProblem() {
    const p = qs.find((q) => q.id === state.problemId);
    if (!p) return `<p>题目不存在</p><button class="btn" data-go="bank">返回题库</button>`;
    const tabs = [
      ["stem", "题干"],
      ["steps", "解题步骤"],
      ["knowledge", "知识点"],
      ["life", "生活应用"],
      ["history", "历史"],
      ["anim", "动画"],
      ["similar", "类似题"],
      ["practice", "练习作答"]
    ];
    const sim = similarProblems(p);
    let body = "";
    switch (state.tab) {
      case "stem":
        body = `
          <div class="stem-box">${escapeHtml(p.stem)}</div>
          ${p.choices ? `<ul class="choices">${p.choices.map((c, i) => `<li>${String.fromCharCode(65 + i)}. ${escapeHtml(c)}</li>`).join("")}</ul>` : ""}
          <p class="answer-preview"><button class="btn small" id="reveal-answer">显示答案</button> <span id="answer-slot" hidden><b>答案：</b>${escapeHtml(String(p.answer))}</span></p>
        `;
        break;
      case "steps":
        body = `
          <ol class="steps">${(p.steps || []).map((s) => `<li>${escapeHtml(s)}</li>`).join("")}</ol>
          <div class="speech-bar">
            <button class="btn primary" id="btn-speak">🔊 语音讲解</button>
            <button class="btn" id="btn-speak-stop">停止</button>
          </div>
        `;
        break;
      case "knowledge":
        body = `
          <ul class="kp-list">${(p.knowledgePoints || []).map((k) => `<li>${escapeHtml(k)}</li>`).join("")}</ul>
          <button class="btn" id="btn-add-kp-cards">加入记忆卡片</button>
        `;
        break;
      case "life":
        body = `<ul class="kp-list">${(p.lifeApplications || []).map((k) => `<li>${escapeHtml(k)}</li>`).join("")}</ul>`;
        break;
      case "history":
        body = `<div class="history-note">${escapeHtml(p.historyNote || "暂无")}</div>`;
        break;
      case "anim":
        body = `
          <div id="anim-host" class="anim-host"></div>
          <button class="btn primary" id="btn-replay-anim">重新播放动画</button>
        `;
        break;
      case "similar":
        body = sim.length
          ? `<div class="problem-list">${sim.map(({ q, score, shared }) => `
              <button class="problem-card" data-open="${q.id}">
                <div class="pc-title">${escapeHtml(q.title)} <span class="mini-tag">匹配 ${score}</span></div>
                <div class="pc-tags">${shared.map((t) => `<span class="mini-tag">${t}</span>`).join("")}</div>
              </button>`).join("")}</div>`
          : `<p class="muted">暂无相似题</p>`;
        break;
      case "practice":
        body = renderPractice(p);
        break;
    }
    return `
      <section class="problem-head">
        <button class="btn ghost back" data-go="bank">← 题库</button>
        <h1>${escapeHtml(p.title)}</h1>
        <div class="pc-tags">${(p.tags || []).map((t) => `<span class="mini-tag">${t}</span>`).join("")}
          <span class="diff">${difficultyStars(p.difficulty)}</span>
        </div>
      </section>
      <div class="tabs" role="tablist">
        ${tabs.map(([id, label]) => `<button class="tab ${state.tab === id ? "active" : ""}" data-tab="${id}">${label}</button>`).join("")}
      </div>
      <section class="card tab-body" data-problem="${p.id}">${body}</section>
    `;
  }

  function renderPractice(p) {
    if (p.choices && p.choices.length) {
      return `
        <p>请选择正确答案：</p>
        <div class="choice-btns">
          ${p.choices.map((c, i) => `
            <button class="btn choice-btn ${state.practiceChoice === c ? "selected" : ""}" data-choice="${escapeAttr(c)}">${String.fromCharCode(65 + i)}. ${escapeHtml(c)}</button>
          `).join("")}
        </div>
        <button class="btn primary btn-lg" id="btn-submit-practice" ${state.practiceChoice == null ? "disabled" : ""}>提交</button>
        <div id="practice-result"></div>
      `;
    }
    return `
      <p>请在心中作答后自评：</p>
      <p class="stem-box small-pad">${escapeHtml(p.stem)}</p>
      <details><summary>查看参考答案</summary><p>${escapeHtml(String(p.answer))}</p></details>
      <div class="self-grade">
        <button class="btn primary" data-grade="correct">✓ 我答对了</button>
        <button class="btn danger" data-grade="wrong">✗ 我答错了</button>
      </div>
      <div id="practice-result"></div>
    `;
  }

  function renderHistory() {
    const list = HistoryStore.list();
    return `
      <section class="card">
        <div class="row-between">
          <h2>练习 / 浏览历史</h2>
          <button class="btn small danger" id="btn-clear-hist" ${list.length ? "" : "disabled"}>清空</button>
        </div>
        ${list.length === 0 ? '<p class="muted">暂无记录。打开题目或完成练习后将自动记录。</p>' : ""}
        <ul class="hist-list">
          ${list.map((h) => {
            const p = qs.find((q) => q.id === h.problemId);
            const label = p ? p.title : h.problemId;
            const resMap = { correct: "正确", wrong: "错误", viewed: "浏览", scan: "扫描" };
            return `<li>
              <button class="linkish" data-open="${h.problemId}">${escapeHtml(label)}</button>
              <span class="pill ${h.result}">${resMap[h.result] || h.result}</span>
              <span class="muted small">${formatTime(h.ts)}${h.timeSpentMs ? " · " + Math.round(h.timeSpentMs / 1000) + "s" : ""}</span>
            </li>`;
          }).join("")}
        </ul>
      </section>
    `;
  }

  function renderAnki() {
    const all = AnkiStore.list();
    const due = AnkiStore.dueToday();
    if (state.ankiCurrent) {
      const c = state.ankiCurrent;
      return `
        <section class="card anki-card">
          <p class="muted small">待复习 ${due.length} · 总卡片 ${all.length}</p>
          <div class="anki-front">${escapeHtml(c.front).replace(/\n/g, "<br>")}</div>
          ${state.ankiFlipped ? `<div class="anki-back">${escapeHtml(c.back).replace(/\n/g, "<br>")}</div>
            <div class="anki-actions">
              <button class="btn danger" data-anki-q="0">Again</button>
              <button class="btn" data-anki-q="1">Hard</button>
              <button class="btn primary" data-anki-q="2">Good</button>
              <button class="btn success" data-anki-q="3">Easy</button>
            </div>` : `<button class="btn primary btn-lg" id="anki-show">显示答案</button>`}
        </section>
      `;
    }
    return `
      <section class="card">
        <h2>记忆卡片（间隔重复）</h2>
        <p>基于答错题目与知识点，使用简化 SM-2 算法安排复习。</p>
        <div class="stat-row">
          <div class="stat"><b>${due.length}</b><span>今日到期</span></div>
          <div class="stat"><b>${all.length}</b><span>全部卡片</span></div>
        </div>
        <button class="btn primary btn-lg" id="anki-start" ${due.length ? "" : "disabled"}>开始复习</button>
        ${!all.length ? '<p class="muted">还没有卡片。请在练习中答错，或在题目「知识点」页点击「加入记忆卡片」。</p>' : ""}
        <ul class="hist-list compact">
          ${all.slice(0, 30).map((c) => `<li>
            <span>${escapeHtml(c.front.split("\n")[0].slice(0, 36))}</span>
            <span class="muted small">到期 ${formatTime(c.due)}</span>
          </li>`).join("")}
        </ul>
      </section>
    `;
  }

  function renderFeedback() {
    return `
      <section class="card">
        <h2>体验反馈</h2>
        <p class="small muted">匿名提交，用于改进题库与讲解（不含姓名手机）。</p>
        <label class="small">推荐分 NPS（0–10）</label>
        <input id="nps-input" class="search" type="number" min="0" max="10" placeholder="0-10" />
        <label class="small">想说的话</label>
        <textarea id="fb-text" class="search" rows="3" placeholder="哪里难用？哪类题还要加强？" style="min-height:88px;width:100%;padding:0.65rem;border-radius:12px;border:1px solid var(--border);"></textarea>
        <button class="btn primary btn-lg" id="btn-send-fb" style="margin-top:0.65rem">提交反馈</button>
        <p id="fb-ok" class="ok" hidden>已记录，感谢！</p>
      </section>
    `;
  }

  function renderAbout() {
    return `
      <section class="card">
        <h2>关于本 MVP</h2>
        <ul class="kp-list">
          <li>题库内嵌，无需后端</li>
          <li>按标签匹配相似题</li>
          <li>解题步骤 + 知识点 + 生活应用 + 数学史</li>
          <li>SVG/Canvas 动画可视化</li>
          <li>Web Speech API 中文语音讲解</li>
          <li>练习历史（localStorage）</li>
          <li>Anki 风格间隔重复（SM-2 简化）</li>
          <li>移动优先，适配 iPhone Safari</li>
        </ul>
        <p class="small muted">后续：原生 iOS App、相机扫题 OCR、云同步题库与更高质量 TTS。</p>
      </section>
      ${renderFeedback()}
    `;
  }

  function shell(content) {
    return `
      <header class="app-header">
        <button class="logo" data-go="home" aria-label="首页">高考数学</button>
        <nav class="nav">
          <button data-go="bank" class="${state.view === "bank" || state.view === "problem" ? "active" : ""}">题库</button>
          <button data-go="anki" class="${state.view === "anki" ? "active" : ""}">卡片${AnkiStore.dueCount() ? "(" + AnkiStore.dueCount() + ")" : ""}</button>
          <button data-go="history" class="${state.view === "history" ? "active" : ""}">历史</button>
          <button data-go="about" class="${state.view === "about" ? "active" : ""}">关于</button>
        </nav>
      </header>
      <main class="main">${content}</main>
      <footer class="app-footer">高考数学练习 MVP · 静态网页可直接在 iPhone Safari 打开</footer>
    `;
  }

  function render() {
    const app = $("#app");
    let content = "";
    switch (state.view) {
      case "home": content = renderHome(); break;
      case "bank": content = renderBank(); break;
      case "problem": content = renderProblem(); break;
      case "history": content = renderHistory(); break;
      case "anki": content = renderAnki(); break;
      case "about": content = renderAbout(); break;
      default: content = renderHome();
    }
    app.innerHTML = shell(content);
    bind();
    if (state.view === "problem" && state.tab === "anim") {
      const p = qs.find((q) => q.id === state.problemId);
      const host = $("#anim-host");
      if (p && host) {
        GaokaoAnim.play(p.animationSpec, host);
        if (window.GaokaoTelemetry) GaokaoTelemetry.track("animation_play", { problemId: p.id, kind: p.animationSpec && p.animationSpec.kind });
      }
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, "&#39;");
  }

  function openProblem(id) {
    state.problemId = id;
    state.tab = "stem";
    state.practiceChoice = null;
    state.view = "problem";
    HistoryStore.add({ problemId: id, result: "viewed" });
    const prob = qs.find((q) => q.id === id);
    if (window.GaokaoTelemetry) GaokaoTelemetry.track("problem_open", { problemId: id, tags: (prob && prob.tags) || [], title: prob && prob.title });
    render();
  }

  function finishPractice(problem, result) {
    HistoryStore.add({ problemId: problem.id, result, timeSpentMs: undefined });
    if (window.GaokaoTelemetry) GaokaoTelemetry.track("practice_result", { problemId: problem.id, result: result, tags: problem.tags || [], difficulty: problem.difficulty });
    if (result === "wrong") {
      AnkiStore.ensureFromWrong(problem);
      AnkiStore.ensureKnowledgeCards(problem);
    }
    const slot = $("#practice-result");
    if (slot) {
      slot.innerHTML = result === "correct"
        ? '<p class="ok">回答正确！已记入历史。</p>'
        : '<p class="bad">已记入错题并生成记忆卡片，可在「卡片」中复习。</p>';
    }
  }

  function bind() {
    $all("[data-go]").forEach((el) => el.addEventListener("click", () => {
      state.ankiCurrent = null;
      state.ankiFlipped = false;
      navigate(el.getAttribute("data-go"));
    }));
    $all("[data-tag]").forEach((el) => el.addEventListener("click", () => {
      state.filterTag = el.getAttribute("data-tag");
      state.search = "";
      navigate("bank");
    }));
    $all("[data-open]").forEach((el) => el.addEventListener("click", () => openProblem(el.getAttribute("data-open"))));
    $all("[data-tab]").forEach((el) => el.addEventListener("click", () => {
      state.tab = el.getAttribute("data-tab");
      state.practiceChoice = null;
      render();
    }));

    const search = $("#search-input");
    if (search) {
      search.addEventListener("input", () => {
        state.search = search.value;
        // 轻量重渲染列表：简化起见整页 render
        render();
        const again = $("#search-input");
        if (again) {
          again.focus();
          const v = again.value;
          again.value = "";
          again.value = v;
        }
      });
    }
    const tagFilter = $("#tag-filter");
    if (tagFilter) {
      tagFilter.addEventListener("change", () => {
        state.filterTag = tagFilter.value;
        render();
      });
    }

    const reveal = $("#reveal-answer");
    if (reveal) reveal.addEventListener("click", () => {
      const slot = $("#answer-slot");
      if (slot) slot.hidden = false;
    });

    const speak = $("#btn-speak");
    if (speak) speak.addEventListener("click", () => {
      const p = qs.find((q) => q.id === state.problemId);
      if (!p) return;
      if (!GaokaoSpeech.supported()) {
        alert("当前浏览器不支持语音合成。请使用 Safari / Chrome。");
        return;
      }
      speak.textContent = "讲解中…";
      if (window.GaokaoTelemetry) GaokaoTelemetry.track("tts_play", { problemId: p.id });
      GaokaoSpeech.speakSteps(p.steps, {
        onEnd: () => { speak.textContent = "🔊 语音讲解"; },
        onError: () => { speak.textContent = "🔊 语音讲解"; }
      });
    });
    const stop = $("#btn-speak-stop");
    if (stop) stop.addEventListener("click", () => {
      GaokaoSpeech.stop();
      const b = $("#btn-speak");
      if (b) b.textContent = "🔊 语音讲解";
    });

    const replay = $("#btn-replay-anim");
    if (replay) replay.addEventListener("click", () => {
      const p = qs.find((q) => q.id === state.problemId);
      const host = $("#anim-host");
      if (p && host) {
        GaokaoAnim.play(p.animationSpec, host);
        if (window.GaokaoTelemetry) GaokaoTelemetry.track("animation_play", { problemId: p.id, kind: p.animationSpec && p.animationSpec.kind });
      }
    });

    const addKp = $("#btn-add-kp-cards");
    if (addKp) addKp.addEventListener("click", () => {
      const p = qs.find((q) => q.id === state.problemId);
      if (!p) return;
      AnkiStore.ensureKnowledgeCards(p);
      addKp.textContent = "已加入 ✓";
      addKp.disabled = true;
    });

    $all("[data-choice]").forEach((el) => el.addEventListener("click", () => {
      state.practiceChoice = el.getAttribute("data-choice");
      render();
    }));
    const submit = $("#btn-submit-practice");
    if (submit) submit.addEventListener("click", () => {
      const p = qs.find((q) => q.id === state.problemId);
      if (!p) return;
      const ok = String(state.practiceChoice) === String(p.answer) || String(p.answer).indexOf(String(state.practiceChoice)) >= 0;
      finishPractice(p, ok ? "correct" : "wrong");
    });
    $all("[data-grade]").forEach((el) => el.addEventListener("click", () => {
      const p = qs.find((q) => q.id === state.problemId);
      if (!p) return;
      finishPractice(p, el.getAttribute("data-grade"));
    }));

    const clearHist = $("#btn-clear-hist");
    if (clearHist) clearHist.addEventListener("click", () => {
      if (confirm("确定清空全部历史？")) {
        HistoryStore.clear();
        render();
      }
    });

    const ankiStart = $("#anki-start");
    if (ankiStart) ankiStart.addEventListener("click", () => {
      state.ankiQueue = AnkiStore.dueToday().slice();
      state.ankiCurrent = state.ankiQueue.shift() || null;
      state.ankiFlipped = false;
      render();
    });
    const ankiShow = $("#anki-show");
    if (ankiShow) ankiShow.addEventListener("click", () => {
      state.ankiFlipped = true;
      render();
    });
    $all("[data-anki-q]").forEach((el) => el.addEventListener("click", () => {
      const q = parseInt(el.getAttribute("data-anki-q"), 10);
      if (state.ankiCurrent) {
        AnkiStore.review(state.ankiCurrent.id, q);
        if (window.GaokaoTelemetry) GaokaoTelemetry.track("anki_rate", { cardId: state.ankiCurrent.id, problemId: state.ankiCurrent.problemId, quality: q });
      }
      state.ankiCurrent = state.ankiQueue.shift() || null;
      state.ankiFlipped = false;
      render();
    }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    if (window.GaokaoTelemetry) GaokaoTelemetry.track("page_view", { view: "home" });
    render();
  });
})();
