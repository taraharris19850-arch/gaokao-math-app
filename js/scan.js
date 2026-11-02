/**
 * 扫题：相机/相册取景 + 客户端 OCR（Tesseract.js）+ 题库匹配
 * 限制：需 HTTPS 或 localhost；iPhone Safari 建议用 capture 文件输入；
 * OCR 对印刷体尚可、手写/模糊/公式效果有限；失败时可手改题干再匹配。
 */
(function (global) {
  const TESS_CDN = "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js";
  let tessLoading = null;
  let stream = null;

  function loadTesseract() {
    if (global.Tesseract) return Promise.resolve(global.Tesseract);
    if (tessLoading) return tessLoading;
    tessLoading = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = TESS_CDN;
      s.async = true;
      s.onload = () => (global.Tesseract ? resolve(global.Tesseract) : reject(new Error("Tesseract 未挂载")));
      s.onerror = () => reject(new Error("无法加载 Tesseract.js（需网络）"));
      document.head.appendChild(s);
    });
    return tessLoading;
  }

  function normalize(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[，。、；：？！""''（）\(\)\[\]\{\},.;:?!]/g, "");
  }

  function scoreMatch(ocr, stem) {
    const a = normalize(ocr);
    const b = normalize(stem);
    if (!a || !b) return 0;
    if (a.includes(b) || b.includes(a)) return 0.92;
    // bigram overlap
    const grams = (t) => {
      const g = new Set();
      for (let i = 0; i < t.length - 1; i++) g.add(t.slice(i, i + 2));
      return g;
    };
    const A = grams(a);
    const B = grams(b);
    let inter = 0;
    A.forEach((g) => {
      if (B.has(g)) inter++;
    });
    const uni = A.size + B.size - inter || 1;
    return inter / uni;
  }

  function matchBank(ocrText, questions, limit) {
    const list = (questions || [])
      .map((q) => ({ q, score: scoreMatch(ocrText, q.stem), titleScore: scoreMatch(ocrText, q.title) }))
      .map((x) => ({ q: x.q, score: Math.max(x.score, x.titleScore * 0.85) }))
      .filter((x) => x.score > 0.08)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit || 5);
    return list;
  }

  async function ocrImage(fileOrBlob, onProgress) {
    const Tesseract = await loadTesseract();
    const result = await Tesseract.recognize(fileOrBlob, "chi_sim+eng", {
      logger: (m) => {
        if (onProgress && m && m.status) onProgress(m);
      }
    });
    return (result && result.data && result.data.text) || "";
  }

  async function startCamera(videoEl) {
    stopCamera();
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error("当前浏览器不支持 getUserMedia，请改用「拍照/相册」按钮");
    }
    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { facingMode: { ideal: "environment" }, width: { ideal: 1280 }, height: { ideal: 720 } }
    });
    videoEl.srcObject = stream;
    videoEl.setAttribute("playsinline", "true");
    videoEl.muted = true;
    await videoEl.play();
    return stream;
  }

  function stopCamera() {
    if (stream) {
      stream.getTracks().forEach((t) => t.stop());
      stream = null;
    }
  }

  function captureFromVideo(videoEl) {
    const w = videoEl.videoWidth || 640;
    const h = videoEl.videoHeight || 480;
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoEl, 0, 0, w, h);
    return new Promise((resolve) => canvas.toBlob((b) => resolve(b), "image/jpeg", 0.92));
  }

  global.GaokaoScan = {
    loadTesseract,
    ocrImage,
    matchBank,
    startCamera,
    stopCamera,
    captureFromVideo,
    scoreMatch,
    limitsZh:
      "限制说明：①需 HTTPS（GitHub Pages 已满足）或本机 localhost；②iPhone Safari 推荐用系统相机/相册选取；③getUserMedia 需授权；④Tesseract.js 客户端 OCR，对印刷体较好，手写/拍照模糊/复杂公式识别率有限；⑤识别后请人工核对题干，再匹配题库或进入练习。"
  };
})(window);
