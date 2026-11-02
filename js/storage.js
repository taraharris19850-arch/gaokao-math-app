/**
 * 练习历史 + Anki 风格间隔重复（简化 SM-2）
 * 持久化：localStorage
 */
(function (global) {
  const HIST_KEY = "gaokao_math_history_v1";
  const ANKI_KEY = "gaokao_math_anki_v1";

  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function nowISO() {
    return new Date().toISOString();
  }

  function todayStr() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  /** @typedef {{ id:string, ts:string, problemId:string, result:'correct'|'wrong'|'viewed'|'scan', timeSpentMs?:number, note?:string }} HistEntry */

  const HistoryStore = {
    list() {
      return load(HIST_KEY, []);
    },
    add(entry) {
      const list = this.list();
      const row = Object.assign({ id: "h_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7), ts: nowISO() }, entry);
      list.unshift(row);
      // 最多保留 500 条
      save(HIST_KEY, list.slice(0, 500));
      return row;
    },
    clear() {
      save(HIST_KEY, []);
    },
    byProblem(problemId) {
      return this.list().filter((x) => x.problemId === problemId);
    }
  };

  /**
   * SM-2 简化：
   * card: { id, front, back, problemId?, source, ease, interval, repetitions, due, lapses }
   * quality: 0 Again, 1 Hard, 2 Good, 3 Easy  → 映射到 SM-2 的 1,3,4,5
   */
  function mapQuality(q) {
    return [1, 3, 4, 5][q] || 3;
  }

  function sm2Update(card, qualityUi) {
    const q = mapQuality(qualityUi);
    let { ease, interval, repetitions, lapses } = card;
    ease = ease || 2.5;
    interval = interval || 0;
    repetitions = repetitions || 0;
    lapses = lapses || 0;

    if (q < 3) {
      repetitions = 0;
      interval = 0;
      lapses += 1;
      ease = Math.max(1.3, ease - 0.2);
    } else {
      if (repetitions === 0) interval = 1;
      else if (repetitions === 1) interval = qualityUi === 3 ? 4 : 3;
      else interval = Math.round(interval * ease);
      repetitions += 1;
      ease = ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
      if (ease < 1.3) ease = 1.3;
      if (qualityUi === 3) ease += 0.05;
      if (qualityUi === 1) ease -= 0.05;
    }

    const due = new Date();
    if (q < 3) {
      // Again：10 分钟后（用同一天 due + 标记）
      due.setMinutes(due.getMinutes() + 10);
    } else {
      due.setDate(due.getDate() + Math.max(1, interval));
      due.setHours(0, 0, 0, 0);
    }

    return Object.assign({}, card, {
      ease: Math.round(ease * 100) / 100,
      interval,
      repetitions,
      lapses,
      due: due.toISOString(),
      updatedAt: nowISO()
    });
  }

  const AnkiStore = {
    list() {
      return load(ANKI_KEY, []);
    },
    saveAll(cards) {
      save(ANKI_KEY, cards);
    },
    upsert(card) {
      const cards = this.list();
      const i = cards.findIndex((c) => c.id === card.id);
      if (i >= 0) cards[i] = card;
      else cards.push(card);
      this.saveAll(cards);
      return card;
    },
    remove(id) {
      this.saveAll(this.list().filter((c) => c.id !== id));
    },
    dueToday() {
      const now = Date.now();
      return this.list().filter((c) => new Date(c.due).getTime() <= now);
    },
    dueCount() {
      return this.dueToday().length;
    },
    review(id, qualityUi) {
      const cards = this.list();
      const card = cards.find((c) => c.id === id);
      if (!card) return null;
      const updated = sm2Update(card, qualityUi);
      this.upsert(updated);
      return updated;
    },
    /** 答错或知识点 → 生成卡片 */
    ensureFromWrong(problem) {
      const id = "card_prob_" + problem.id;
      const existing = this.list().find((c) => c.id === id);
      if (existing) {
        // 提前到期
        existing.due = nowISO();
        return this.upsert(existing);
      }
      const card = {
        id,
        front: problem.title + "\n" + problem.stem,
        back: "答案：" + problem.answer + "\n\n要点：\n" + (problem.steps || []).slice(0, 3).join("\n"),
        problemId: problem.id,
        source: "wrong",
        ease: 2.5,
        interval: 0,
        repetitions: 0,
        lapses: 0,
        due: nowISO(),
        createdAt: nowISO()
      };
      return this.upsert(card);
    },
    ensureKnowledgeCards(problem) {
      const created = [];
      (problem.knowledgePoints || []).forEach((kp, idx) => {
        const id = "card_kp_" + problem.id + "_" + idx;
        if (this.list().some((c) => c.id === id)) return;
        const card = {
          id,
          front: "知识点：" + kp + "\n（关联题：" + problem.title + "）",
          back: (problem.steps && problem.steps[idx]) || problem.answer || kp,
          problemId: problem.id,
          source: "knowledge",
          ease: 2.5,
          interval: 0,
          repetitions: 0,
          lapses: 0,
          due: nowISO(),
          createdAt: nowISO()
        };
        this.upsert(card);
        created.push(card);
      });
      return created;
    }
  };

  global.GaokaoStorage = { HistoryStore, AnkiStore, todayStr, sm2Update };
})(window);
