/**
 * 题目可视化动画引擎（SVG/Canvas）
 */
(function (global) {
  function clear(el) {
    el.innerHTML = "";
  }

  function svgEl(name, attrs) {
    const e = document.createElementNS("http://www.w3.org/2000/svg", name);
    Object.keys(attrs || {}).forEach((k) => e.setAttribute(k, attrs[k]));
    return e;
  }

  function baseSvg(w, h) {
    const svg = svgEl("svg", {
      viewBox: "0 0 " + w + " " + h,
      width: "100%",
      height: "100%",
      class: "anim-svg"
    });
    return svg;
  }

  function axes(svg, ox, oy, w, h) {
    svg.appendChild(svgEl("line", { x1: 20, y1: oy, x2: w - 10, y2: oy, stroke: "#94a3b8", "stroke-width": 1.5 }));
    svg.appendChild(svgEl("line", { x1: ox, y1: h - 20, x2: ox, y2: 10, stroke: "#94a3b8", "stroke-width": 1.5 }));
  }

  function animatePathDraw(path, duration) {
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    path.getBoundingClientRect();
    path.style.transition = "stroke-dashoffset " + duration + "ms ease";
    path.style.strokeDashoffset = "0";
  }

  const renderers = {
    parabola(spec, host) {
      const w = 320, h = 220, ox = 40, oy = 180, sx = 40, sy = 30;
      const svg = baseSvg(w, h);
      axes(svg, ox, oy, w, h);
      const a = spec.a, b = spec.b, c = spec.c;
      let d = "";
      for (let i = 0; i <= 60; i++) {
        const x = (spec.xMin ?? -1) + i / 60 * ((spec.xMax ?? 5) - (spec.xMin ?? -1) + 1);
        const y = a * x * x + b * x + c;
        const px = ox + x * sx;
        const py = oy - y * sy;
        d += (i === 0 ? "M" : "L") + px + " " + py;
      }
      const path = svgEl("path", { d, fill: "none", stroke: "#2563eb", "stroke-width": 2.5 });
      svg.appendChild(path);
      if (spec.vertex) {
        const [vx, vy] = spec.vertex;
        const dot = svgEl("circle", { cx: ox + vx * sx, cy: oy - vy * sy, r: 5, fill: "#ef4444" });
        svg.appendChild(dot);
        const label = svgEl("text", { x: ox + vx * sx + 8, y: oy - vy * sy - 8, fill: "#ef4444", "font-size": 12 });
        label.textContent = "顶点(" + vx + "," + vy + ")";
        svg.appendChild(label);
      }
      // 区间高亮
      if (spec.xMin != null) {
        const band = svgEl("rect", {
          x: ox + spec.xMin * sx,
          y: 20,
          width: (spec.xMax - spec.xMin) * sx,
          height: h - 40,
          fill: "rgba(37,99,235,0.08)"
        });
        svg.insertBefore(band, svg.firstChild);
      }
      host.appendChild(svg);
      animatePathDraw(path, 1200);
    },

    numberLine(spec, host) {
      const w = 320, h = 100;
      const svg = baseSvg(w, h);
      svg.appendChild(svgEl("line", { x1: 20, y1: 50, x2: 300, y2: 50, stroke: "#64748b", "stroke-width": 2 }));
      (spec.points || []).forEach((p, i) => {
        const x = 40 + p.x * 50;
        const c = svgEl("circle", { cx: x, cy: 50, r: 0, fill: p.x === spec.highlight ? "#ef4444" : "#2563eb" });
        svg.appendChild(c);
        const t = svgEl("text", { x, y: 32, "text-anchor": "middle", "font-size": 11, fill: "#334155" });
        t.textContent = p.label;
        svg.appendChild(t);
        setTimeout(() => {
          c.setAttribute("r", 7);
          c.style.transition = "r 0.4s";
        }, 200 * i);
      });
      host.appendChild(svg);
    },

    functionSketch(spec, host) {
      const w = 320, h = 200, ox = 160, oy = 100;
      const svg = baseSvg(w, h);
      axes(svg, ox, oy, w, h);
      const path = svgEl("path", {
        d: "M40 40 Q160 100 280 160",
        fill: "none",
        stroke: "#7c3aed",
        "stroke-width": 2.5
      });
      const path2 = svgEl("path", {
        d: "M40 160 Q160 100 280 40",
        fill: "none",
        stroke: "#7c3aed",
        "stroke-width": 2.5,
        "stroke-dasharray": "6 4"
      });
      svg.appendChild(path);
      svg.appendChild(path2);
      const t = svgEl("text", { x: 16, y: 24, fill: "#7c3aed", "font-size": 13 });
      t.textContent = spec.label || "奇函数示意";
      svg.appendChild(t);
      host.appendChild(svg);
      animatePathDraw(path, 1000);
    },

    unitCircle(spec, host) {
      const w = 280, h = 280, ox = 140, oy = 140, r = 90;
      const svg = baseSvg(w, h);
      svg.appendChild(svgEl("circle", { cx: ox, cy: oy, r, fill: "none", stroke: "#94a3b8", "stroke-width": 2 }));
      axes(svg, ox, oy, w, h);
      const rad = (spec.angle || 120) * Math.PI / 180;
      const x = ox + r * Math.cos(rad);
      const y = oy - r * Math.sin(rad);
      const line = svgEl("line", { x1: ox, y1: oy, x2: ox, y2: oy, stroke: "#2563eb", "stroke-width": 2.5 });
      svg.appendChild(line);
      const dot = svgEl("circle", { cx: ox, cy: oy, r: 5, fill: "#ef4444" });
      svg.appendChild(dot);
      host.appendChild(svg);
      let t0 = null;
      function frame(ts) {
        if (!t0) t0 = ts;
        const p = Math.min(1, (ts - t0) / 900);
        const a = rad * p;
        const cx = ox + r * Math.cos(a);
        const cy = oy - r * Math.sin(a);
        line.setAttribute("x2", cx);
        line.setAttribute("y2", cy);
        dot.setAttribute("cx", cx);
        dot.setAttribute("cy", cy);
        if (p < 1) requestAnimationFrame(frame);
        else {
          const tx = svgEl("text", { x: 12, y: 22, fill: "#334155", "font-size": 12 });
          tx.textContent = "sin≈" + (spec.sin || Math.sin(rad)).toFixed(2) + " cos≈" + (spec.cos || Math.cos(rad)).toFixed(2);
          svg.appendChild(tx);
        }
      }
      requestAnimationFrame(frame);
    },

    triangle(spec, host) {
      const w = 300, h = 220;
      const svg = baseSvg(w, h);
      const pts = [[40, 180], [260, 180], [120, 40]];
      const poly = svgEl("polygon", {
        points: pts.map((p) => p.join(",")).join(" "),
        fill: "rgba(37,99,235,0.1)",
        stroke: "#2563eb",
        "stroke-width": 2,
        "stroke-dasharray": "400",
        "stroke-dashoffset": "400"
      });
      svg.appendChild(poly);
      (spec.sides || []).forEach((s, i) => {
        const a = pts[i];
        const b = pts[(i + 1) % 3];
        const t = svgEl("text", {
          x: (a[0] + b[0]) / 2,
          y: (a[1] + b[1]) / 2 - 8,
          fill: "#0f172a",
          "font-size": 13,
          "text-anchor": "middle"
        });
        t.textContent = s;
        svg.appendChild(t);
      });
      host.appendChild(svg);
      requestAnimationFrame(() => {
        poly.style.transition = "stroke-dashoffset 1s ease";
        poly.setAttribute("stroke-dashoffset", "0");
      });
    },

    wave(spec, host) {
      const canvas = document.createElement("canvas");
      canvas.width = 320;
      canvas.height = 160;
      canvas.className = "anim-canvas";
      host.appendChild(canvas);
      const ctx = canvas.getContext("2d");
      let phase = 0;
      const freq = spec.freq || 1;
      function draw() {
        ctx.clearRect(0, 0, 320, 160);
        ctx.strokeStyle = "#cbd5e1";
        ctx.beginPath();
        ctx.moveTo(0, 80);
        ctx.lineTo(320, 80);
        ctx.stroke();
        ctx.strokeStyle = "#2563eb";
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < 320; x++) {
          const y = 80 - Math.cos((x / 320) * Math.PI * 2 * freq + phase) * 50;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.fillStyle = "#334155";
        ctx.font = "12px sans-serif";
        ctx.fillText(spec.label || "波形", 8, 16);
        phase += 0.08;
        host._raf = requestAnimationFrame(draw);
      }
      draw();
    },

    sequence(spec, host) {
      const w = 320, h = 180;
      const svg = baseSvg(w, h);
      const vals = spec.values || [];
      vals.forEach((v, i) => {
        const x = 40 + i * 50;
        const barH = Math.min(120, v * 3);
        const rect = svgEl("rect", {
          x: x,
          y: 160,
          width: 28,
          height: 0,
          fill: "#2563eb",
          rx: 4
        });
        svg.appendChild(rect);
        const t = svgEl("text", { x: x + 14, y: 175, "text-anchor": "middle", "font-size": 11, fill: "#64748b" });
        t.textContent = "a" + (i + 1);
        svg.appendChild(t);
        setTimeout(() => {
          rect.setAttribute("y", 160 - barH);
          rect.setAttribute("height", barH);
          rect.style.transition = "all 0.5s ease";
        }, i * 150);
      });
      if (spec.label) {
        const lab = svgEl("text", { x: 16, y: 24, fill: "#0f172a", "font-size": 13 });
        lab.textContent = spec.label;
        svg.appendChild(lab);
      }
      host.appendChild(svg);
    },

    seriesBars(spec, host) {
      const canvas = document.createElement("canvas");
      canvas.width = 320;
      canvas.height = 180;
      host.appendChild(canvas);
      const ctx = canvas.getContext("2d");
      let n = 0;
      const maxN = 12;
      function draw() {
        ctx.clearRect(0, 0, 320, 180);
        let sum = 0;
        let term = spec.first || 1;
        for (let i = 0; i < Math.min(n, maxN); i++) {
          const h = Math.min(140, (spec.partial ? spec.partial[Math.min(i, spec.partial.length - 1)] : sum + term) * 30);
          if (!spec.partial) sum += term;
          ctx.fillStyle = "rgba(37,99,235," + (0.3 + i / maxN * 0.7) + ")";
          ctx.fillRect(20 + i * 24, 160 - (spec.partial ? Math.min(140, spec.partial[Math.min(i, spec.partial.length - 1)] * 50) : Math.min(140, sum * 30)), 20, spec.partial ? Math.min(140, spec.partial[Math.min(i, spec.partial.length - 1)] * 50) : Math.min(140, sum * 30));
          if (spec.ratio) term *= spec.ratio;
        }
        ctx.strokeStyle = "#ef4444";
        ctx.setLineDash([4, 4]);
        const limY = 160 - (spec.limit || 2) * (spec.partial ? 50 : 30);
        ctx.beginPath();
        ctx.moveTo(10, limY);
        ctx.lineTo(310, limY);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = "#ef4444";
        ctx.font = "12px sans-serif";
        ctx.fillText("极限 ≈ " + (spec.limit || ""), 200, limY - 6);
        if (n < maxN) {
          n++;
          host._raf = requestAnimationFrame(() => setTimeout(draw, 120));
        }
      }
      draw();
    },

    balls(spec, host) {
      const w = 300, h = 160;
      const svg = baseSvg(w, h);
      let x = 30;
      for (let i = 0; i < (spec.red || 0); i++) {
        const c = svgEl("circle", { cx: x, cy: 60, r: 0, fill: "#ef4444" });
        svg.appendChild(c);
        setTimeout(() => c.setAttribute("r", 16), i * 80);
        x += 40;
      }
      for (let i = 0; i < (spec.white || 0); i++) {
        const c = svgEl("circle", { cx: x, cy: 60, r: 0, fill: "#f8fafc", stroke: "#94a3b8", "stroke-width": 2 });
        svg.appendChild(c);
        setTimeout(() => c.setAttribute("r", 16), ((spec.red || 0) + i) * 80);
        x += 40;
      }
      const t = svgEl("text", { x: 20, y: 120, fill: "#334155", "font-size": 13 });
      t.textContent = "有利 " + (spec.favorable || "") + " / 总共 " + (spec.total || "");
      svg.appendChild(t);
      host.appendChild(svg);
    },

    binomial(spec, host) {
      const w = 300, h = 180;
      const svg = baseSvg(w, h);
      const n = spec.n || 3;
      // 简易二项概率条
      function comb(n, k) {
        let r = 1;
        for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
        return r;
      }
      for (let k = 0; k <= n; k++) {
        const p = comb(n, k) * Math.pow(spec.p, k) * Math.pow(1 - spec.p, n - k);
        const bh = p * 140;
        const rect = svgEl("rect", { x: 40 + k * 70, y: 160, width: 40, height: 0, fill: k === spec.k ? "#ef4444" : "#2563eb", rx: 4 });
        svg.appendChild(rect);
        const lab = svgEl("text", { x: 60 + k * 70, y: 175, "text-anchor": "middle", "font-size": 11, fill: "#64748b" });
        lab.textContent = "k=" + k;
        svg.appendChild(lab);
        setTimeout(() => {
          rect.setAttribute("y", 160 - bh);
          rect.setAttribute("height", bh);
          rect.style.transition = "all 0.45s";
        }, k * 120);
      }
      host.appendChild(svg);
    },

    dice(spec, host) {
      const w = 300, h = 140;
      const svg = baseSvg(w, h);
      for (let i = 1; i <= 6; i++) {
        const even = i % 2 === 0;
        const active = even && (spec.condition === "even");
        const isTarget = i === spec.target;
        const rect = svgEl("rect", {
          x: 20 + (i - 1) * 45,
          y: 40,
          width: 36,
          height: 36,
          rx: 6,
          fill: isTarget ? "#ef4444" : active ? "#93c5fd" : "#e2e8f0",
          stroke: "#64748b",
          opacity: 0
        });
        svg.appendChild(rect);
        const t = svgEl("text", { x: 38 + (i - 1) * 45, y: 64, "text-anchor": "middle", fill: "#0f172a", "font-size": 14 });
        t.textContent = String(i);
        svg.appendChild(t);
        setTimeout(() => rect.setAttribute("opacity", active || !spec.condition ? "1" : "0.25"), i * 80);
      }
      const tip = svgEl("text", { x: 20, y: 110, fill: "#334155", "font-size": 12 });
      tip.textContent = "条件：偶数 → 样本空间 {2,4,6}";
      svg.appendChild(tip);
      host.appendChild(svg);
    },

    cube(spec, host) {
      const canvas = document.createElement("canvas");
      canvas.width = 280;
      canvas.height = 220;
      host.appendChild(canvas);
      const ctx = canvas.getContext("2d");
      let ang = 0;
      function project(x, y, z) {
        const c = Math.cos(ang), s = Math.sin(ang);
        const x1 = x * c - z * s;
        const z1 = x * s + z * c;
        return [140 + x1 * 50, 110 - y * 50 + z1 * 18];
      }
      function draw() {
        ctx.clearRect(0, 0, 280, 220);
        const e = 1.2;
        const verts = [[-e,-e,-e],[e,-e,-e],[e,e,-e],[-e,e,-e],[-e,-e,e],[e,-e,e],[e,e,e],[-e,e,e]];
        const edges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
        ctx.strokeStyle = "#2563eb";
        ctx.lineWidth = 2;
        edges.forEach(([a, b], i) => {
          const p = project(...verts[a]);
          const q = project(...verts[b]);
          ctx.beginPath();
          ctx.moveTo(p[0], p[1]);
          ctx.lineTo(q[0], q[1]);
          if (spec.highlight === "skew" && (i === 0 || i === 10)) ctx.strokeStyle = "#ef4444";
          else ctx.strokeStyle = "#2563eb";
          ctx.stroke();
        });
        ang += 0.02;
        host._raf = requestAnimationFrame(draw);
      }
      draw();
    },

    tetra(spec, host) {
      this.cube({ highlight: null }, host);
      const tip = document.createElement("div");
      tip.className = "anim-caption";
      tip.textContent = "三棱锥体积示意（旋转立方体辅助观察空间关系）V=4/3";
      host.appendChild(tip);
    },

    circleLine(spec, host) {
      const w = 300, h = 220, ox = 150, oy = 110, scale = 35;
      const svg = baseSvg(w, h);
      axes(svg, ox, oy, w, h);
      const circle = svgEl("circle", { cx: ox, cy: oy, r: 0, fill: "none", stroke: "#2563eb", "stroke-width": 2 });
      svg.appendChild(circle);
      // x+y-2=0 => y=2-x
      const line = svgEl("line", {
        x1: ox - 3 * scale,
        y1: oy - (2 - (-3)) * scale,
        x2: ox + 3 * scale,
        y2: oy - (2 - 3) * scale,
        stroke: "#ef4444",
        "stroke-width": 2
      });
      svg.appendChild(line);
      host.appendChild(svg);
      setTimeout(() => {
        circle.setAttribute("r", (spec.r || 2) * scale);
        circle.style.transition = "r 0.8s ease";
      }, 50);
    },

    ellipse(spec, host) {
      const w = 320, h = 200, ox = 160, oy = 100, sx = 18, sy = 18;
      const svg = baseSvg(w, h);
      axes(svg, ox, oy, w, h);
      const ell = svgEl("ellipse", {
        cx: ox, cy: oy,
        rx: 0, ry: 0,
        fill: "rgba(124,58,237,0.1)",
        stroke: "#7c3aed",
        "stroke-width": 2.5
      });
      svg.appendChild(ell);
      const f1 = svgEl("circle", { cx: ox - (spec.c || 0) * sx, cy: oy, r: 4, fill: "#ef4444" });
      const f2 = svgEl("circle", { cx: ox + (spec.c || 0) * sx, cy: oy, r: 4, fill: "#ef4444" });
      svg.appendChild(f1);
      svg.appendChild(f2);
      host.appendChild(svg);
      setTimeout(() => {
        ell.setAttribute("rx", (spec.a || 5) * sx);
        ell.setAttribute("ry", (spec.b || 4) * sy);
        ell.style.transition = "all 0.9s ease";
      }, 40);
    },

    parabolaFocus(spec, host) {
      const w = 300, h = 220, ox = 40, oy = 110, s = 40;
      const svg = baseSvg(w, h);
      let d = "";
      for (let i = 0; i <= 50; i++) {
        const y = -2.2 + i / 50 * 4.4;
        const x = (y * y) / (spec.p || 2) / 2 * (spec.p ? 1 : 1);
        // y²=4x => x=y²/4
        const xx = (y * y) / 4;
        const px = ox + xx * s;
        const py = oy - y * s;
        d += (i === 0 ? "M" : "L") + px + " " + py;
      }
      const path = svgEl("path", { d, fill: "none", stroke: "#2563eb", "stroke-width": 2.5 });
      svg.appendChild(path);
      const f = svgEl("circle", { cx: ox + 1 * s, cy: oy, r: 5, fill: "#ef4444" });
      svg.appendChild(f);
      const t = svgEl("text", { x: ox + 1 * s + 8, y: oy - 10, fill: "#ef4444", "font-size": 12 });
      t.textContent = "焦点 F(1,0)";
      svg.appendChild(t);
      host.appendChild(svg);
      animatePathDraw(path, 1000);
    },

    tangent(spec, host) {
      const w = 320, h = 220, ox = 160, oy = 110, sx = 40, sy = 25;
      const svg = baseSvg(w, h);
      axes(svg, ox, oy, w, h);
      let d = "";
      for (let i = 0; i <= 60; i++) {
        const x = -2.2 + i / 60 * 4.4;
        const y = x * x * x - 3 * x;
        d += (i === 0 ? "M" : "L") + (ox + x * sx) + " " + (oy - y * sy);
      }
      const path = svgEl("path", { d, fill: "none", stroke: "#2563eb", "stroke-width": 2 });
      svg.appendChild(path);
      const y0 = spec.y0 != null ? spec.y0 : -2;
      const x0 = spec.x0 || 1;
      const tang = svgEl("line", {
        x1: ox + (x0 - 1.5) * sx,
        y1: oy - y0 * sy,
        x2: ox + (x0 + 1.5) * sx,
        y2: oy - y0 * sy,
        stroke: "#ef4444",
        "stroke-width": 2,
        "stroke-dasharray": "120",
        "stroke-dashoffset": "120"
      });
      svg.appendChild(tang);
      host.appendChild(svg);
      animatePathDraw(path, 800);
      setTimeout(() => {
        tang.style.transition = "stroke-dashoffset 0.6s";
        tang.setAttribute("stroke-dashoffset", "0");
      }, 400);
    },

    extrema(spec, host) {
      this.tangent({ x0: 0, y0: 1 }, host);
      const svg = host.querySelector("svg");
      if (!svg) return;
      const ox = 160, oy = 110, sx = 40, sy = 25;
      (spec.xs || []).forEach((x, i) => {
        const y = spec.ys[i];
        const c = svgEl("circle", { cx: ox + x * sx, cy: oy - y * sy, r: 5, fill: i === 0 ? "#16a34a" : "#ef4444" });
        svg.appendChild(c);
      });
    },

    limitSinx(spec, host) {
      const canvas = document.createElement("canvas");
      canvas.width = 320;
      canvas.height = 180;
      host.appendChild(canvas);
      const ctx = canvas.getContext("2d");
      let t = 2;
      function draw() {
        ctx.clearRect(0, 0, 320, 180);
        ctx.strokeStyle = "#e2e8f0";
        ctx.beginPath();
        ctx.moveTo(0, 90);
        ctx.lineTo(320, 90);
        ctx.stroke();
        ctx.strokeStyle = "#2563eb";
        ctx.beginPath();
        for (let px = 0; px < 320; px++) {
          const x = (px - 160) / 50;
          let y = x === 0 ? 1 : Math.sin(x) / x;
          const py = 90 - y * 50;
          if (px === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.stroke();
        const x = t;
        const y = Math.sin(x) / x;
        ctx.fillStyle = "#ef4444";
        ctx.beginPath();
        ctx.arc(160 + x * 50, 90 - y * 50, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#334155";
        ctx.font = "12px sans-serif";
        ctx.fillText("x→0, sinx/x → 1  (x=" + x.toFixed(2) + ")", 12, 20);
        t *= 0.92;
        if (t > 0.05) host._raf = requestAnimationFrame(draw);
      }
      draw();
    },

    piecewise(spec, host) {
      const w = 320, h = 200, ox = 160, oy = 120, s = 40;
      const svg = baseSvg(w, h);
      axes(svg, ox, oy, w, h);
      // x+1 for x<0
      const left = svgEl("line", { x1: ox - 2 * s, y1: oy - (-1) * s, x2: ox, y2: oy - 1 * s, stroke: "#2563eb", "stroke-width": 2.5 });
      svg.appendChild(left);
      const right = svgEl("path", { d: "", fill: "none", stroke: "#16a34a", "stroke-width": 2.5 });
      let d = "";
      for (let i = 0; i <= 30; i++) {
        const x = i / 30 * 2;
        const y = Math.exp(x);
        d += (i === 0 ? "M" : "L") + (ox + x * s) + " " + (oy - Math.min(y, 3) * s);
      }
      right.setAttribute("d", d);
      svg.appendChild(right);
      const dot = svgEl("circle", { cx: ox, cy: oy - (spec.a || 1) * s, r: 6, fill: "#ef4444" });
      svg.appendChild(dot);
      host.appendChild(svg);
    },

    line(spec, host) {
      const w = 300, h = 200, ox = 60, oy = 160, s = 40;
      const svg = baseSvg(w, h);
      axes(svg, ox, oy, w, h);
      const k = spec.k || 1;
      const [px, py] = spec.point || [1, 2];
      const line = svgEl("line", {
        x1: ox,
        y1: oy - (k * (0 - px) + py) * s * 0.5,
        x2: ox + 5 * s,
        y2: oy - (k * (5 - px) + py) * s * 0.5,
        stroke: "#2563eb",
        "stroke-width": 2.5,
        "stroke-dasharray": "300",
        "stroke-dashoffset": "300"
      });
      svg.appendChild(line);
      const c = svgEl("circle", { cx: ox + px * s, cy: oy - py * s * 0.5, r: 5, fill: "#ef4444" });
      svg.appendChild(c);
      host.appendChild(svg);
      setTimeout(() => {
        line.style.transition = "stroke-dashoffset 0.8s";
        line.setAttribute("stroke-dashoffset", "0");
      }, 30);
    },

    sphere(spec, host) {
      const w = 240, h = 240, ox = 120, oy = 120;
      const svg = baseSvg(w, h);
      const ball = svgEl("circle", { cx: ox, cy: oy, r: 0, fill: "url(#grad)", stroke: "#2563eb", "stroke-width": 2 });
      const defs = svgEl("defs", {});
      const grad = svgEl("radialGradient", { id: "grad", cx: "35%", cy: "35%" });
      grad.appendChild(svgEl("stop", { offset: "0%", "stop-color": "#bfdbfe" }));
      grad.appendChild(svgEl("stop", { offset: "100%", "stop-color": "#1d4ed8" }));
      defs.appendChild(grad);
      svg.appendChild(defs);
      svg.appendChild(ball);
      const ell = svgEl("ellipse", { cx: ox, cy: oy, rx: 0, ry: 18, fill: "none", stroke: "#93c5fd", "stroke-width": 1.5 });
      svg.appendChild(ell);
      const t = svgEl("text", { x: 20, y: 28, fill: "#334155", "font-size": 12 });
      t.textContent = "R=" + (spec.r || 3) + "  V=36π  S=36π";
      svg.appendChild(t);
      host.appendChild(svg);
      setTimeout(() => {
        ball.setAttribute("r", 70);
        ell.setAttribute("rx", 70);
        ball.style.transition = "r 0.8s";
        ell.style.transition = "rx 0.8s";
      }, 40);
    }
  };

  function stop(host) {
    if (host && host._raf) {
      cancelAnimationFrame(host._raf);
      host._raf = null;
    }
  }

  function play(spec, host) {
    stop(host);
    clear(host);
    if (!spec || !spec.kind) {
      host.innerHTML = '<p class="muted">本题暂无动画规格</p>';
      return;
    }
    const fn = renderers[spec.kind];
    if (!fn) {
      host.innerHTML = '<p class="muted">未知动画类型：' + spec.kind + "</p>";
      return;
    }
    fn.call(renderers, spec, host);
  }

  global.GaokaoAnim = { play, stop };
})(window);
