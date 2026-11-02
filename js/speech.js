/**
 * 中文语音讲解 — Web Speech API (speechSynthesis)
 * 说明：浏览器 TTS；原生 iOS / App Store 高质量人声后续接入。
 */
(function (global) {
  let utter = null;
  let stopped = false;

  function supported() {
    return typeof window !== "undefined" && "speechSynthesis" in window;
  }

  function pickZhVoice() {
    const voices = window.speechSynthesis.getVoices() || [];
    const zh = voices.filter((v) => /zh(-|_)?CN|Chinese|中文|普通话|国语/i.test(v.lang + v.name));
    return zh.find((v) => /CN|中国|普通话/i.test(v.lang + v.name)) || zh[0] || null;
  }

  function speakSteps(steps, opts) {
    if (!supported()) {
      if (opts && opts.onError) opts.onError("当前浏览器不支持语音合成");
      return;
    }
    stop();
    stopped = false;
    const text = (steps || []).map((s, i) => "第" + (i + 1) + "步。" + s).join("。");
    utter = new SpeechSynthesisUtterance(text);
    utter.lang = "zh-CN";
    utter.rate = (opts && opts.rate) || 1.0;
    utter.pitch = 1;
    const voice = pickZhVoice();
    if (voice) utter.voice = voice;
    utter.onend = function () {
      if (opts && opts.onEnd) opts.onEnd();
    };
    utter.onerror = function () {
      if (opts && opts.onError) opts.onError("播放失败");
    };
    // Chrome 需要 voiceschanged 后再设 voice
    const run = () => {
      if (stopped) return;
      const v = pickZhVoice();
      if (v) utter.voice = v;
      window.speechSynthesis.speak(utter);
    };
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener("voiceschanged", run, { once: true });
      // 兜底
      setTimeout(run, 300);
    } else {
      run();
    }
  }

  function speakText(text, opts) {
    speakSteps([text], opts);
  }

  function stop() {
    stopped = true;
    if (supported()) {
      window.speechSynthesis.cancel();
    }
    utter = null;
  }

  function pause() {
    if (supported()) speechSynthesis.pause();
  }

  function resume() {
    if (supported()) speechSynthesis.resume();
  }

  global.GaokaoSpeech = { supported, speakSteps, speakText, stop, pause, resume, pickZhVoice };
})(window);
