/**
 * 匿名使用体验遥测：本地队列 + 上报后端
 * 不含姓名/手机/邮箱等 PII
 */
(function (global) {
  const QKEY = "gaokao_telemetry_queue_v1";
  const SIDKEY = "gaokao_telemetry_sid_v1";
  const FEEDKEY = "gaokao_telemetry_feed_v1"; // 本机可见的事件流（管理台兜底）

  function cfg() {
    return global.GAOKAO_CONFIG || {};
  }

  function uuid() {
    if (crypto && crypto.randomUUID) return crypto.randomUUID();
    return "s_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 10);
  }

  function sessionId() {
    let s = localStorage.getItem(SIDKEY);
    if (!s) {
      s = uuid();
      localStorage.setItem(SIDKEY, s);
    }
    return s;
  }

  function loadQ() {
    try {
      return JSON.parse(localStorage.getItem(QKEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function saveQ(q) {
    localStorage.setItem(QKEY, JSON.stringify(q.slice(-200)));
  }

  function appendFeed(ev) {
    try {
      const feed = JSON.parse(localStorage.getItem(FEEDKEY) || "[]");
      feed.unshift(ev);
      localStorage.setItem(FEEDKEY, JSON.stringify(feed.slice(0, 500)));
    } catch (e) {}
  }

  function baseEnv() {
    return {
      locale: navigator.language || "zh-CN",
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
      ua: (navigator.userAgent || "").slice(0, 180),
      screen: (screen.width || 0) + "x" + (screen.height || 0),
      touch: navigator.maxTouchPoints > 0,
      path: location.pathname + location.hash
    };
  }

  function track(type, payload) {
    if (cfg().telemetryEnabled === false) return;
    const ev = {
      id: uuid(),
      ts: new Date().toISOString(),
      type: type,
      sessionId: sessionId(),
      appVersion: cfg().version || "0",
      payload: payload || {},
      env: baseEnv()
    };
    const q = loadQ();
    q.push(ev);
    saveQ(q);
    appendFeed(ev);
    flushSoon();
    try {
      global.dispatchEvent(new CustomEvent("gaokao-telemetry", { detail: ev }));
    } catch (e) {}
    return ev;
  }

  let flushTimer = null;
  function flushSoon() {
    if (flushTimer) return;
    flushTimer = setTimeout(() => {
      flushTimer = null;
      flush();
    }, 800);
  }

  async function flush() {
    const url = (cfg().telemetryUrl || "").trim();
    if (!url || cfg().telemetryEnabled === false) return { ok: false, reason: "disabled" };
    const q = loadQ();
    if (!q.length) return { ok: true, sent: 0 };
    const batch = q.slice(0, 40);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ events: batch }),
        keepalive: true,
        mode: "cors"
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      saveQ(q.slice(batch.length));
      return { ok: true, sent: batch.length };
    } catch (e) {
      // 静态托管无后端时保留队列，不打断用户
      return { ok: false, reason: String(e && e.message || e) };
    }
  }

  function getLocalFeed() {
    try {
      return JSON.parse(localStorage.getItem(FEEDKEY) || "[]");
    } catch (e) {
      return [];
    }
  }

  function exportQueue() {
    return { queue: loadQ(), feed: getLocalFeed(), exportedAt: new Date().toISOString() };
  }

  // 页面生命周期
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flush();
  });
  window.addEventListener("pagehide", () => flush());

  global.GaokaoTelemetry = {
    track,
    flush,
    sessionId,
    getLocalFeed,
    exportQueue,
    loadQ
  };
})(window);
