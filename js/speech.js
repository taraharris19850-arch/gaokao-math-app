/**
 * 中文语音讲解 — Web Speech API
 * 支持单段与多段连续队列（题干→步骤→…一次播完）
 */
(function (global) {
  let stopped = false;
  let queueToken = 0;

  function supported() {
    return typeof window !== "undefined" && "speechSynthesis" in window;
  }

  function pickZhVoice() {
    const voices = window.speechSynthesis.getVoices() || [];
    const zh = voices.filter((v) => /zh(-|_)?CN|Chinese|中文|普通话|国语/i.test(v.lang + v.name));
    return zh.find((v) => /CN|中国|普通话/i.test(v.lang + v.name)) || zh[0] || null;
  }

  function stop() {
    stopped = true;
    queueToken++;
    if (supported()) window.speechSynthesis.cancel();
  }

  function pause() {
    if (supported()) speechSynthesis.pause();
  }
  function resume() {
    if (supported()) speechSynthesis.resume();
  }

  function speakUtterance(text, opts) {
    return new Promise((resolve, reject) => {
      if (!supported()) {
        reject(new Error("当前浏览器不支持语音合成"));
        return;
      }
      if (stopped) {
        resolve({ stopped: true });
        return;
      }
      const utter = new SpeechSynthesisUtterance(String(text || "").slice(0, 4000));
      utter.lang = "zh-CN";
      utter.rate = (opts && opts.rate) || 1.0;
      utter.pitch = 1;
      const voice = pickZhVoice();
      if (voice) utter.voice = voice;
      utter.onend = () => resolve({ stopped: false });
      utter.onerror = (e) => {
        if (stopped) resolve({ stopped: true });
        else reject(e);
      };
      const run = () => {
        if (stopped) {
          resolve({ stopped: true });
          return;
        }
        const v = pickZhVoice();
        if (v) utter.voice = v;
        window.speechSynthesis.speak(utter);
      };
      if (speechSynthesis.getVoices().length === 0) {
        speechSynthesis.addEventListener("voiceschanged", run, { once: true });
        setTimeout(run, 280);
      } else {
        run();
      }
    });
  }

  function speakSteps(steps, opts) {
    stop();
    stopped = false;
    const text = (steps || []).map((s, i) => "第" + (i + 1) + "步。" + s).join("。");
    speakUtterance(text, opts)
      .then((r) => {
        if (!r.stopped && opts && opts.onEnd) opts.onEnd();
      })
      .catch(() => {
        if (opts && opts.onError) opts.onError("播放失败");
      });
  }

  function speakText(text, opts) {
    speakSteps([text], opts);
  }

  /**
   * 连续播放多段：segments = [{ id, title, text, onStart?, onEnd? }, ...]
   * 段与段之间自动衔接，无需用户点击。
   */
  async function speakQueue(segments, opts) {
    stop();
    stopped = false;
    const my = queueToken;
    const list = (segments || []).filter((s) => s && String(s.text || "").trim());
    try {
      for (let i = 0; i < list.length; i++) {
        if (stopped || my !== queueToken) return;
        const seg = list[i];
        if (opts && opts.onSegmentStart) opts.onSegmentStart(seg, i, list.length);
        if (seg.onStart) seg.onStart(seg, i);
        const prefix = seg.title ? seg.title + "。" : "";
        const result = await speakUtterance(prefix + seg.text, opts);
        if (result.stopped || stopped || my !== queueToken) return;
        if (seg.onEnd) seg.onEnd(seg, i);
        if (opts && opts.onSegmentEnd) opts.onSegmentEnd(seg, i, list.length);
      }
      if (!stopped && my === queueToken && opts && opts.onEnd) opts.onEnd();
    } catch (e) {
      if (opts && opts.onError) opts.onError(String(e && e.message || e));
    }
  }

  global.GaokaoSpeech = {
    supported,
    speakSteps,
    speakText,
    speakQueue,
    speakUtterance,
    stop,
    pause,
    resume,
    pickZhVoice
  };
})(window);
