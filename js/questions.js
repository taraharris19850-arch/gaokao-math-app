/**
 * 高考数学题库 — 含真题风格/省模拟风格/自编类似（均为原创，非试卷原文）
 * provenance: {kind,label,year,province,paper,note}
 */
window.GAOKAO_QUESTIONS = [
  {
    "id": "fn-01",
    "title": "二次函数最值",
    "stem": "已知函数 f(x)=x²-4x+3，求 f(x) 在区间 [0,3] 上的最大值与最小值。",
    "type": "解答题",
    "tags": [
      "函数",
      "二次函数",
      "最值",
      "闭区间",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "最大值 3，最小值 -1",
    "choices": null,
    "steps": [
      "配方：f(x)=(x-2)²-1，抛物线开口向上，顶点 (2,-1)。",
      "区间 [0,3] 包含顶点 x=2，故最小值在顶点处：f(2)=-1。",
      "比较端点：f(0)=3，f(3)=0。最大值取较大端点值 3。",
      "结论：最大值为 3，最小值为 -1。"
    ],
    "knowledgePoints": [
      "二次函数配方",
      "闭区间上连续函数必有最值",
      "顶点与端点比较"
    ],
    "lifeApplications": [
      "桥梁拱形高度设计中求最低点",
      "成本函数在产量区间内求最低成本"
    ],
    "historyNote": "二次函数思想可追溯到古巴比伦的面积问题；解析形式由笛卡尔坐标几何奠基，17 世纪后与微积分极值理论合流。",
    "animationSpec": {
      "kind": "parabola",
      "a": 1,
      "b": -4,
      "c": 3,
      "xMin": 0,
      "xMax": 3,
      "vertex": [
        2,
        -1
      ]
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "fn-02",
    "title": "指数与对数换底",
    "stem": "若 a>0,a≠1，化简：log_a √a · log_{√a} a²。",
    "type": "选择题",
    "tags": [
      "函数",
      "对数",
      "指数",
      "换底公式",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "2",
    "choices": [
      "1",
      "2",
      "4",
      "1/2"
    ],
    "steps": [
      "log_a √a = log_a (a^{1/2}) = 1/2。",
      "log_{√a} a² = 2 / log_a √a = 2 / (1/2) = 4（换底：log_b a = 1/log_a b，或直接：log_{a^{1/2}} a² = 2/(1/2)=4）。",
      "积： (1/2)×4 = 2。",
      "答案选 2。"
    ],
    "knowledgePoints": [
      "对数运算法则",
      "换底公式",
      "指数与对数互逆"
    ],
    "lifeApplications": [
      "地震震级（里氏）对数换算",
      "音量分贝计算中的对数比"
    ],
    "historyNote": "对数由纳皮尔（Napier, 1614）发明，用于简化天文与航海中的大数乘法；后来成为指数函数的反函数。",
    "animationSpec": {
      "kind": "numberLine",
      "points": [
        {
          "x": 0.5,
          "label": "log_a√a"
        },
        {
          "x": 4,
          "label": "log_√a a²"
        },
        {
          "x": 2,
          "label": "积=2"
        }
      ],
      "highlight": 2
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "fn-03",
    "title": "函数奇偶性判断",
    "stem": "判断 f(x)=ln((1-x)/(1+x)) 的奇偶性，并说明理由。",
    "type": "解答题",
    "tags": [
      "函数",
      "奇偶性",
      "对数",
      "自编类似"
    ],
    "difficulty": 3,
    "answer": "奇函数",
    "choices": null,
    "steps": [
      "定义域： (1-x)/(1+x)>0 ⇒ x∈(-1,1)，关于原点对称。",
      "计算 f(-x)=ln((1+x)/(1-x))=-ln((1-x)/(1+x))=-f(x)。",
      "故 f(-x)=-f(x)，为奇函数。"
    ],
    "knowledgePoints": [
      "函数奇偶性定义",
      "定义域关于原点对称是必要条件",
      "对数性质"
    ],
    "lifeApplications": [
      "信号处理中的奇偶分解",
      "对称性简化物理模型计算"
    ],
    "historyNote": "奇偶函数概念与傅里叶级数发展密切相关，19 世纪用于把周期信号分解为正弦（奇）与余弦（偶）分量。",
    "animationSpec": {
      "kind": "functionSketch",
      "type": "odd",
      "label": "f(-x)=-f(x)"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "tri-01",
    "title": "三角函数求值",
    "stem": "已知 sinθ=3/5，θ 为第二象限角，求 cosθ 与 tanθ。",
    "type": "解答题",
    "tags": [
      "三角函数",
      "象限",
      "同角关系",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "cosθ=-4/5，tanθ=-3/4",
    "choices": null,
    "steps": [
      "由 sin²θ+cos²θ=1，得 cos²θ=1-9/25=16/25，|cosθ|=4/5。",
      "第二象限 cosθ<0，故 cosθ=-4/5。",
      "tanθ=sinθ/cosθ=(3/5)/(-4/5)=-3/4。"
    ],
    "knowledgePoints": [
      "同角三角函数基本关系",
      "象限定号",
      "诱导与符号"
    ],
    "lifeApplications": [
      "斜坡坡度（正切）",
      "波的相位与振幅分解"
    ],
    "historyNote": "三角函数起源于古希腊测天与测地；印度与阿拉伯学者发展了正弦表；欧拉将其与复指数 e^{iθ} 统一。",
    "animationSpec": {
      "kind": "unitCircle",
      "angle": 143.13010235415598,
      "sin": 0.6,
      "cos": -0.8
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "tri-02",
    "title": "正弦定理应用",
    "stem": "在 △ABC 中，a=√2，A=45°，B=60°，求边 b。",
    "type": "选择题",
    "tags": [
      "三角函数",
      "正弦定理",
      "解三角形",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "√3",
    "choices": [
      "√3",
      "√6",
      "2",
      "√2"
    ],
    "steps": [
      "正弦定理：a/sinA = b/sinB。",
      "b = a · sinB / sinA = √2 · sin60° / sin45° = √2 · (√3/2) / (√2/2) = √3。",
      "答案选 √3。"
    ],
    "knowledgePoints": [
      "正弦定理",
      "特殊角三角函数值",
      "解三角形"
    ],
    "lifeApplications": [
      "测量不可达距离（测高、测距）",
      "导航中的方位角计算"
    ],
    "historyNote": "正弦定理在欧几里得《几何原本》中已有雏形；托勒密弦表推动了球面三角，服务于天文历法。",
    "animationSpec": {
      "kind": "triangle",
      "angles": [
        45,
        60,
        75
      ],
      "sides": [
        "√2",
        "√3",
        "c"
      ]
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "tri-03",
    "title": "二倍角公式",
    "stem": "已知 cos2α=1/3，求 cos²α - sin²α 与 2sinαcosα 的值。",
    "type": "填空题",
    "tags": [
      "三角函数",
      "二倍角",
      "恒等变换",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "cos²α-sin²α=1/3；2sinαcosα=±2√2/3",
    "choices": null,
    "steps": [
      "cos2α=cos²α-sin²α，故第一问直接为 1/3。",
      "sin2α=2sinαcosα，且 sin²2α+cos²2α=1 ⇒ sin2α=±√(1-1/9)=±√(8/9)=±(2√2)/3。",
      "故 2sinαcosα=±(2√2)/3。"
    ],
    "knowledgePoints": [
      "二倍角公式",
      "平方关系",
      "符号讨论"
    ],
    "lifeApplications": [
      "交流电功率瞬时值（含 2ωt）",
      "光学中偏振与倍角关系"
    ],
    "historyNote": "倍角公式由三角恒等与复数乘法 (cosθ+isinθ)² 自然导出，德谟弗公式是其系统化。",
    "animationSpec": {
      "kind": "wave",
      "freq": 2,
      "label": "cos2α"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "seq-01",
    "title": "等差数列求和",
    "stem": "等差数列 {a_n} 中，a_1=3，公差 d=2，求前 20 项和 S_20。",
    "type": "选择题",
    "tags": [
      "数列",
      "等差数列",
      "求和",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "440",
    "choices": [
      "400",
      "420",
      "440",
      "460"
    ],
    "steps": [
      "通项 a_n=3+(n-1)·2=2n+1。",
      "a_20=2·20+1=41。",
      "S_n=n(a_1+a_n)/2 ⇒ S_20=20·(3+41)/2=20·22=440。"
    ],
    "knowledgePoints": [
      "等差数列通项",
      "等差数列前 n 项和公式"
    ],
    "lifeApplications": [
      "阶梯计价、等额本金还款利息累计的近似模型",
      "剧场座位逐排递增的总座位数"
    ],
    "historyNote": "等差数列求和传说与少年高斯速算 1 到 100 有关；公式本质是配对思想，早已见于古代算术。",
    "animationSpec": {
      "kind": "sequence",
      "values": [
        3,
        5,
        7,
        9,
        11
      ],
      "sumTarget": 440,
      "n": 20
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "seq-02",
    "title": "等比数列",
    "stem": "等比数列 {a_n} 中，a_1=2，公比 q=1/2，求 S_∞（无穷递缩等比级数和）。",
    "type": "填空题",
    "tags": [
      "数列",
      "等比数列",
      "无穷级数",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "4",
    "choices": null,
    "steps": [
      "|q|=1/2<1，无穷递缩等比级数收敛。",
      "S_∞=a_1/(1-q)=2/(1-1/2)=4。"
    ],
    "knowledgePoints": [
      "无穷递缩等比级数",
      "收敛条件 |q|<1",
      "求和公式"
    ],
    "lifeApplications": [
      "药物半衰期累积浓度近似",
      "分形周长/面积的极限求和"
    ],
    "historyNote": "芝诺悖论已触及无穷分割；阿基米德用穷竭法求和；19 世纪严格极限理论才澄清收敛。",
    "animationSpec": {
      "kind": "seriesBars",
      "ratio": 0.5,
      "first": 2,
      "limit": 4
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "seq-03",
    "title": "递推数列",
    "stem": "设 a_1=1，a_{n+1}=2a_n+1，求 a_n 的通项公式。",
    "type": "解答题",
    "tags": [
      "数列",
      "递推",
      "构造法",
      "自编类似"
    ],
    "difficulty": 3,
    "answer": "a_n=2^n - 1",
    "choices": null,
    "steps": [
      "构造：a_{n+1}+1=2(a_n+1)，令 b_n=a_n+1，则 b_{n+1}=2b_n。",
      "b_1=a_1+1=2，故 b_n=2·2^{n-1}=2^n。",
      "因此 a_n=b_n-1=2^n-1。"
    ],
    "knowledgePoints": [
      "线性递推",
      "构造辅助数列",
      "等比化"
    ],
    "lifeApplications": [
      "细胞分裂或复利加定额存款模型",
      "算法中二分扩张的规模估计"
    ],
    "historyNote": "递推思想见于斐波那契《算盘书》兔子问题；通项求解与特征方程方法在 18 世纪后系统化。",
    "animationSpec": {
      "kind": "sequence",
      "values": [
        1,
        3,
        7,
        15,
        31
      ],
      "label": "2^n-1"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "prob-01",
    "title": "古典概型",
    "stem": "袋中有 3 红 2 白球，随机抽 2 球，求恰有 1 红 1 白的概率。",
    "type": "选择题",
    "tags": [
      "概率",
      "古典概型",
      "组合",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "3/5",
    "choices": [
      "1/5",
      "2/5",
      "3/5",
      "4/5"
    ],
    "steps": [
      "总基本事件数：C(5,2)=10。",
      "恰 1 红 1 白：C(3,1)·C(2,1)=3·2=6。",
      "概率 P=6/10=3/5。"
    ],
    "knowledgePoints": [
      "古典概型",
      "组合数",
      "事件计数"
    ],
    "lifeApplications": [
      "抽检合格率估计入门",
      "彩票中奖概率的组合模型"
    ],
    "historyNote": "概率论源于 17 世纪帕斯卡与费马关于赌局分注的通信；拉普拉斯系统总结了古典概型。",
    "animationSpec": {
      "kind": "balls",
      "red": 3,
      "white": 2,
      "draw": 2,
      "favorable": 6,
      "total": 10
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "prob-02",
    "title": "独立重复试验",
    "stem": "某射手命中率为 0.8，独立射击 3 次，求恰好命中 2 次的概率。",
    "type": "填空题",
    "tags": [
      "概率",
      "二项分布",
      "独立重复",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "C(3,2)·0.8²·0.2=0.384",
    "choices": null,
    "steps": [
      "服从二项分布 B(3,0.8)。",
      "P(X=2)=C(3,2)·(0.8)²·(0.2)¹=3·0.64·0.2=0.384。"
    ],
    "knowledgePoints": [
      "独立重复试验",
      "二项分布公式",
      "组合系数"
    ],
    "lifeApplications": [
      "产品抽检中次品件数分布",
      "网络丢包独立模型下的成功传输次数"
    ],
    "historyNote": "雅各布·伯努利在《推测术》中研究了伯努利试验；二项分布是其直接产物。",
    "animationSpec": {
      "kind": "binomial",
      "n": 3,
      "p": 0.8,
      "k": 2
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "prob-03",
    "title": "条件概率入门",
    "stem": "掷一枚均匀骰子，已知点数为偶数，求点数为 6 的概率。",
    "type": "选择题",
    "tags": [
      "概率",
      "条件概率",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "1/3",
    "choices": [
      "1/6",
      "1/3",
      "1/2",
      "1"
    ],
    "steps": [
      "设 A={6}，B={2,4,6}。",
      "P(A|B)=P(A∩B)/P(B)=P(A)/P(B)=(1/6)/(1/2)=1/3。",
      "或在缩减样本空间 {2,4,6} 中等可能，得 1/3。"
    ],
    "knowledgePoints": [
      "条件概率定义",
      "缩减样本空间",
      "古典概型"
    ],
    "lifeApplications": [
      "医学检测：已知阳性下患病的概率（贝叶斯入门）",
      "质检：已知不合格批次中抽到某缺陷类型"
    ],
    "historyNote": "条件概率与贝叶斯方法由托马斯·贝叶斯提出，拉普拉斯大力推广，成为现代统计推断核心。",
    "animationSpec": {
      "kind": "dice",
      "condition": "even",
      "target": 6
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "solid-01",
    "title": "正方体中异面直线距离",
    "stem": "棱长为 2 的正方体 ABCD-A′B′C′D′ 中，求异面直线 AA′ 与 BD 的距离。",
    "type": "解答题",
    "tags": [
      "立体几何",
      "异面直线",
      "距离",
      "自编类似"
    ],
    "difficulty": 3,
    "answer": "√2",
    "choices": null,
    "steps": [
      "建立坐标系：A(0,0,0)，B(2,0,0)，D(0,2,0)，A′(0,0,2)。",
      "直线 AA′ 方向向量 u=(0,0,2)；直线 BD 方向向量 v=(-2,2,0)。",
      "法向量 n = u×v，可取 (1,1,0)。",
      "异面直线距离 d = |(AB)·n| / |n|，AB=(2,0,0)，得 d = |2|/√2 = √2。",
      "几何理解：AA′ 垂直底面，BD 为底面对角线，距离等于点 A 到直线 BD 的距离 √2。"
    ],
    "knowledgePoints": [
      "空间向量",
      "异面直线距离公式",
      "正方体结构"
    ],
    "lifeApplications": [
      "建筑中管道最短连接距离",
      "芯片布线层间最短路径近似"
    ],
    "historyNote": "立体几何可追溯到欧几里得与阿基米德；解析法由笛卡尔与费马引入坐标后大为简化空间度量。",
    "animationSpec": {
      "kind": "cube",
      "edge": 2,
      "highlight": "skew"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "solid-02",
    "title": "三棱锥体积",
    "stem": "已知三棱锥 P-ABC 中，PA、PB、PC 两两垂直，且 PA=PB=PC=2，求体积。",
    "type": "选择题",
    "tags": [
      "立体几何",
      "体积",
      "三棱锥",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "4/3",
    "choices": [
      "1",
      "4/3",
      "2",
      "8/3"
    ],
    "steps": [
      "以 A 为直角顶点的三条棱两两垂直时，体积 V=(1/6)|PA·(PB×PC)|。",
      "等价：V=1/3 · S_△PAB · 高 PC（若以 PAB 为底）。",
      "S_△PAB=(1/2)·2·2=2，高=2，V=1/3·2·2=4/3。",
      "答案 4/3。"
    ],
    "knowledgePoints": [
      "三棱锥体积公式",
      "两两垂直棱的坐标法",
      "底面积×高"
    ],
    "lifeApplications": [
      "堆积角状物料体积估算",
      "建筑锥形屋顶空间容积"
    ],
    "historyNote": "欧几里得已给出锥体体积为柱体三分之一的结论；刘徽、祖暅原理推动了中国古代体积理论。",
    "animationSpec": {
      "kind": "tetra",
      "edge": 2
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "anal-01",
    "title": "直线与圆位置",
    "stem": "圆 x²+y²=4 与直线 x+y-2=0 的位置关系是？",
    "type": "选择题",
    "tags": [
      "解析几何",
      "圆",
      "直线",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "相交",
    "choices": [
      "相离",
      "相切",
      "相交",
      "重合"
    ],
    "steps": [
      "圆心 (0,0)，半径 2；点到直线距离 d=|0+0-2|/√2=√2。",
      "d=√2<2，故相交。",
      "弦长 2√(r²-d²)=2√(4-2)=2√2。"
    ],
    "knowledgePoints": [
      "点到直线距离",
      "圆与直线位置关系",
      "弦长公式"
    ],
    "lifeApplications": [
      "雷达覆盖圆与航线相交判断",
      "城市规划中道路与圆形保护区相交长度"
    ],
    "historyNote": "阿波罗尼奥斯系统研究圆锥曲线；笛卡尔用方程统一直线与圆，开启解析几何。",
    "animationSpec": {
      "kind": "circleLine",
      "r": 2,
      "line": [
        1,
        1,
        -2
      ]
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "anal-02",
    "title": "椭圆离心率",
    "stem": "椭圆 x²/25 + y²/16 = 1 的离心率 e 为？",
    "type": "选择题",
    "tags": [
      "解析几何",
      "椭圆",
      "离心率",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "3/5",
    "choices": [
      "3/5",
      "4/5",
      "3/4",
      "√(1-16/25)"
    ],
    "steps": [
      "a²=25，b²=16 ⇒ a=5，b=4。",
      "c=√(a²-b²)=√9=3。",
      "e=c/a=3/5。"
    ],
    "knowledgePoints": [
      "椭圆标准方程",
      "a,b,c 关系",
      "离心率定义"
    ],
    "lifeApplications": [
      "行星轨道近似椭圆（开普勒）",
      "椭圆形建筑声学反射"
    ],
    "historyNote": "开普勒发现行星轨道为椭圆；牛顿用万有引力给出力学解释；离心率刻画“压扁”程度。",
    "animationSpec": {
      "kind": "ellipse",
      "a": 5,
      "b": 4,
      "c": 3
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "anal-03",
    "title": "抛物线焦点弦",
    "stem": "抛物线 y²=4x 的焦点坐标是？过焦点且倾斜角为 45° 的弦的斜率是？",
    "type": "填空题",
    "tags": [
      "解析几何",
      "抛物线",
      "焦点",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "焦点 (1,0)；斜率 1",
    "choices": null,
    "steps": [
      "y²=2px 形式，2p=4 ⇒ p=2，焦点 F(p/2,0)=(1,0)。",
      "倾斜角 45° ⇒ 斜率 k=tan45°=1。"
    ],
    "knowledgePoints": [
      "抛物线标准方程",
      "焦点参数",
      "倾斜角与斜率"
    ],
    "lifeApplications": [
      "汽车头灯抛物面反射聚光",
      "卫星锅天线聚焦"
    ],
    "historyNote": "抛物线光学性质自古已知；伽利略指出抛体运动轨迹为抛物线（理想无空气阻力）。",
    "animationSpec": {
      "kind": "parabolaFocus",
      "p": 2
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "der-01",
    "title": "导数与切线",
    "stem": "求曲线 y=x³-3x 在点 x=1 处的切线方程。",
    "type": "解答题",
    "tags": [
      "导数",
      "切线",
      "函数",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "y=-2",
    "choices": null,
    "steps": [
      "求导：y′=3x²-3，在 x=1 处斜率 k=3-3=0。",
      "点的坐标：y(1)=1-3=-2，切点为 (1,-2)。",
      "切线方程：Y+2=0·(X-1)，即 y=-2。"
    ],
    "knowledgePoints": [
      "导数几何意义",
      "切线方程",
      "多项式求导"
    ],
    "lifeApplications": [
      "瞬时速度即位移导数",
      "经济学中边际成本是成本函数导数"
    ],
    "historyNote": "牛顿与莱布尼茨独立创立微积分；切线问题是推动导数概念诞生的核心几何问题之一。",
    "animationSpec": {
      "kind": "tangent",
      "f": "x^3-3x",
      "x0": 1,
      "y0": -2,
      "slope": 0
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "der-02",
    "title": "导数求极值",
    "stem": "求函数 f(x)=x³-3x+1 的极值。",
    "type": "解答题",
    "tags": [
      "导数",
      "极值",
      "函数",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "极大值 f(-1)=3；极小值 f(1)=-1",
    "choices": null,
    "steps": [
      "f'(x)=3x²-3=3(x-1)(x+1)。",
      "驻点 x=±1。",
      "x<-1，f'>0；-1<x<1，f'<0；x>1，f'>0。",
      "x=-1 极大，f(-1)= -1+3+1=3；x=1 极小，f(1)=1-3+1=-1。"
    ],
    "knowledgePoints": [
      "求导",
      "驻点",
      "单调性与极值判定"
    ],
    "lifeApplications": [
      "利润函数最大利润点",
      "能耗曲线最低能耗工况"
    ],
    "historyNote": "费马已有求极大极小的方法；微积分使之成为系统算法，高考强调数形结合与逻辑严密。",
    "animationSpec": {
      "kind": "extrema",
      "xs": [
        -1,
        1
      ],
      "ys": [
        3,
        -1
      ]
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "der-03",
    "title": "极限直观",
    "stem": "计算 lim_{x→0} (sin x)/x （x 为弧度）。",
    "type": "选择题",
    "tags": [
      "极限",
      "三角函数",
      "导数基础",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "1",
    "choices": [
      "0",
      "1",
      "∞",
      "不存在"
    ],
    "steps": [
      "重要极限：lim_{x→0} sinx/x = 1。",
      "可用单位圆面积夹逼或洛必达（0/0）得 cosx →1。",
      "答案为 1。"
    ],
    "knowledgePoints": [
      "重要极限",
      "夹逼思想",
      "弧度制"
    ],
    "lifeApplications": [
      "小角度近似 sinθ≈θ（工程、物理）",
      "圆周运动线速度定义中的极限"
    ],
    "historyNote": "极限严格 ε-δ 语言由柯西、魏尔斯特拉斯完成；此前牛顿流数术已有效使用极限直觉。",
    "animationSpec": {
      "kind": "limitSinx",
      "approach": 0
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "fn-04",
    "title": "分段函数连续性",
    "stem": "设 f(x)=\\{ x+1 (x<0); a (x=0); e^x (x>0) \\}，若 f 在 0 连续，求 a。",
    "type": "填空题",
    "tags": [
      "函数",
      "连续性",
      "极限",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "a=1",
    "steps": [
      "左极限 lim_{x→0-} f(x)=1；右极限 lim_{x→0+} e^x=1。",
      "连续要求 lim=f(0)=a，故 a=1。"
    ],
    "knowledgePoints": [
      "分段函数",
      "左右极限",
      "连续定义"
    ],
    "lifeApplications": [
      "税率分段函数在分界点的衔接",
      "信号在切换点的连续设计"
    ],
    "historyNote": "连续性严格定义属于 19 世纪分析学算术化运动，使“可画出来”上升为可证明的性质。",
    "animationSpec": {
      "kind": "piecewise",
      "a": 1
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "tri-04",
    "title": "余弦定理",
    "stem": "△ABC 中 a=5，b=5，c=6，求角 C。",
    "type": "解答题",
    "tags": [
      "三角函数",
      "余弦定理",
      "解三角形",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "cosC=(a²+b²-c²)/(2ab)=14/50=0.28；C=arccos(0.28)",
    "steps": [
      "余弦定理：c²=a²+b²-2ab cosC。",
      "cosC=(25+25-36)/(2·5·5)=14/50=0.28。",
      "C=arccos(0.28)（锐角）。"
    ],
    "knowledgePoints": [
      "余弦定理",
      "三角形形状判定"
    ],
    "lifeApplications": [
      "测距：已知两边及夹边求对角",
      "力学中力的合成夹角"
    ],
    "historyNote": "余弦定理是勾股定理的推广；在欧几里得几何中以命题形式出现，三角形式后完善。",
    "animationSpec": {
      "kind": "triangle",
      "angles": null,
      "sides": [
        5,
        5,
        6
      ],
      "highlightAngle": "C"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "seq-04",
    "title": "数列不等式",
    "stem": "证明：对 n∈N*，1+1/2²+…+1/n² < 2。",
    "type": "解答题",
    "tags": [
      "数列",
      "不等式",
      "放缩",
      "自编类似"
    ],
    "difficulty": 3,
    "answer": "放缩：1/k²<1/(k(k-1))=1/(k-1)-1/k（k≥2），裂项求和得 S_n<2",
    "steps": [
      "S_n=1+Σ_{k=2}^n 1/k²。",
      "对 k≥2，1/k² < 1/(k(k-1))=1/(k-1)-1/k。",
      "Σ_{k=2}^n (1/(k-1)-1/k)=1-1/n<1。",
      "故 S_n<1+1=2。"
    ],
    "knowledgePoints": [
      "放缩法",
      "裂项相消",
      "数列不等式证明"
    ],
    "lifeApplications": [
      "误差估计上界",
      "级数收敛性的比较判别预习"
    ],
    "historyNote": "巴塞尔问题正是 Σ1/n²=π²/6，由欧拉解决；高考放缩题训练的是证明技巧而非精确求和。",
    "animationSpec": {
      "kind": "seriesBars",
      "ratio": null,
      "partial": [
        1,
        1.25,
        1.36,
        1.42
      ],
      "limit": 2
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "anal-04",
    "title": "直线系与轨迹",
    "stem": "求过定点 (1,2) 且斜率为 3 的直线方程。",
    "type": "填空题",
    "tags": [
      "解析几何",
      "直线",
      "点斜式",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "y-2=3(x-1) 或 y=3x-1",
    "steps": [
      "点斜式：y-y0=k(x-x0)。",
      "代入得 y-2=3(x-1)，整理 y=3x-1。"
    ],
    "knowledgePoints": [
      "点斜式",
      "斜率"
    ],
    "lifeApplications": [
      "匀速直线运动的位移-时间关系",
      "成本随产量线性变化的模型"
    ],
    "historyNote": "斜率概念与微积分中导数一脉相承；解析几何把“形”翻译成“方程”。",
    "animationSpec": {
      "kind": "line",
      "k": 3,
      "point": [
        1,
        2
      ]
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "solid-03",
    "title": "球的体积与表面积",
    "stem": "半径为 3 的球，体积与表面积分别为？",
    "type": "选择题",
    "tags": [
      "立体几何",
      "球体",
      "公式",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "V=36π,S=36π",
    "choices": [
      "V=36π,S=36π",
      "V=27π,S=36π",
      "V=36π,S=18π",
      "V=4π·27,S=4π·9"
    ],
    "steps": [
      "V=4/3 π R³=4/3 π·27=36π。",
      "S=4π R²=4π·9=36π。",
      "数值上 V 与 S 的系数恰相同（因 R=3）。"
    ],
    "knowledgePoints": [
      "球体积公式",
      "球表面积公式"
    ],
    "lifeApplications": [
      "球形储罐容积",
      "地球近似球体的表面积估算"
    ],
    "historyNote": "阿基米德发现球体积是外切圆柱的 2/3，并视之为平生得意之作，刻于墓碑。",
    "animationSpec": {
      "kind": "sphere",
      "r": 3
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·基础题库",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "gk19-log",
    "title": "对数比较大小",
    "stem": "设 a=log₂0.5，b=log₃0.5，则（ ）。",
    "type": "选择题",
    "tags": [
      "函数",
      "对数",
      "比较大小",
      "真题风格",
      "全国卷",
      "全国Ⅰ卷",
      "2019"
    ],
    "difficulty": 2,
    "answer": "a<b<0",
    "choices": [
      "a<b<0",
      "b<a<0",
      "a<0<b",
      "b<0<a"
    ],
    "steps": [
      "真数0.5∈(0,1)且底>1，故 a<0，b<0。",
      "换底后 |a|>|b| 且同负，故 a<b<0。"
    ],
    "knowledgePoints": [
      "对数符号",
      "换底公式"
    ],
    "lifeApplications": [
      "衰减量级比较"
    ],
    "historyNote": "对数由纳皮尔发明，高考常考不同底比较。",
    "animationSpec": {
      "kind": "functionSketch"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·全国Ⅰ卷",
      "year": 2019,
      "province": "全国Ⅰ卷",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "gk20-arith",
    "title": "等差数列求和",
    "stem": "等差数列{a_n}中，a₃+a₇=16，a₄·a₆=63，则 S₁₀=____（两解都写）。",
    "type": "填空题",
    "tags": [
      "数列",
      "等差数列",
      "求和",
      "真题风格",
      "全国卷",
      "全国Ⅱ卷",
      "2020"
    ],
    "difficulty": 3,
    "answer": "85或75",
    "steps": [
      "a₃+a₇=2a₅=16⇒a₅=8。",
      "a₄a₆=64-d²=63⇒d=±1。",
      "d=1时a₁=4，S₁₀=85；d=-1时a₁=12，S₁₀=75。"
    ],
    "knowledgePoints": [
      "等差中项",
      "前n项和"
    ],
    "lifeApplications": [
      "等差额累加"
    ],
    "historyNote": "等差思想见于古代垛积术。",
    "animationSpec": {
      "kind": "sequence"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·全国Ⅱ卷",
      "year": 2020,
      "province": "全国Ⅱ卷",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "gk21-tri",
    "title": "解三角形求面积",
    "stem": "△ABC中 A=60°，a=√3，b+c=3，面积为____。",
    "type": "填空题",
    "tags": [
      "三角函数",
      "解三角形",
      "余弦定理",
      "真题风格",
      "全国卷",
      "全国甲卷",
      "2021"
    ],
    "difficulty": 3,
    "answer": "√3/2",
    "steps": [
      "S=√3/4·bc。",
      "余弦定理3=b²+c²-bc，结合(b+c)²=9得bc=2。",
      "S=√3/2。"
    ],
    "knowledgePoints": [
      "余弦定理",
      "面积公式"
    ],
    "lifeApplications": [
      "地块测面积"
    ],
    "historyNote": "解三角形是课标主干。",
    "animationSpec": {
      "kind": "triangle"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·全国甲卷",
      "year": 2021,
      "province": "全国甲卷",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "gk22-der",
    "title": "指数型不等式恒成立",
    "stem": "f(x)=e^x−ax−1≥0 对一切实数x恒成立，则 a=____。",
    "type": "填空题",
    "tags": [
      "导数",
      "恒成立",
      "指数函数",
      "真题风格",
      "全国卷",
      "全国乙卷",
      "2022"
    ],
    "difficulty": 4,
    "answer": "1",
    "steps": [
      "f(0)=0，f凸。",
      "由 e^x≥1+x 知 a=1 恰恒成立，a≠1 会出现负值。"
    ],
    "knowledgePoints": [
      "切线与凸性",
      "导数分析"
    ],
    "lifeApplications": [
      "增长率约束"
    ],
    "historyNote": "指数凸性是导数压轴常见骨架。",
    "animationSpec": {
      "kind": "extrema"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·全国乙卷",
      "year": 2022,
      "province": "全国乙卷",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "gk23-ell",
    "title": "椭圆方程",
    "stem": "椭圆 x²/a²+y²/b²=1(a>b>0) 离心率√3/2，过点(√3,1/2)，方程为____。",
    "type": "填空题",
    "tags": [
      "解析几何",
      "椭圆",
      "离心率",
      "真题风格",
      "全国卷",
      "新高考Ⅰ卷",
      "2023"
    ],
    "difficulty": 3,
    "answer": "x²/4+y²=1",
    "steps": [
      "e=√3/2⇒b²=a²/4。",
      "点代入得 a²=4，b²=1。"
    ],
    "knowledgePoints": [
      "离心率",
      "待定系数"
    ],
    "lifeApplications": [
      "轨道扁率"
    ],
    "historyNote": "圆锥曲线可追溯到阿波罗尼奥斯。",
    "animationSpec": {
      "kind": "ellipse"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·新高考Ⅰ卷",
      "year": 2023,
      "province": "新高考Ⅰ卷",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "gk24-cond",
    "title": "条件概率",
    "stem": "袋中3红2白，任取2球。已知至少一红，求两球都红的概率。",
    "type": "选择题",
    "tags": [
      "概率",
      "条件概率",
      "真题风格",
      "全国卷",
      "新高考Ⅱ卷",
      "2024"
    ],
    "difficulty": 2,
    "answer": "1/3",
    "choices": [
      "1/3",
      "3/10",
      "1/2",
      "2/5"
    ],
    "steps": [
      "总数C(5,2)=10，至少一红9种，两红3种，概率1/3。"
    ],
    "knowledgePoints": [
      "古典概型",
      "条件概率"
    ],
    "lifeApplications": [
      "抽样质检"
    ],
    "historyNote": "条件概率是贝叶斯思想基础。",
    "animationSpec": {
      "kind": "balls"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·新高考Ⅱ卷",
      "year": 2024,
      "province": "新高考Ⅱ卷",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "gk20-cube",
    "title": "正方体截面面积",
    "stem": "棱长2的正方体中，E、F为AA₁、CC₁中点，截面EB₁FD₁面积为____。",
    "type": "填空题",
    "tags": [
      "立体几何",
      "截面",
      "向量",
      "真题风格",
      "全国卷",
      "全国Ⅲ卷",
      "2020"
    ],
    "difficulty": 4,
    "answer": "2√6",
    "steps": [
      "向量EB₁=(2,0,1)，ED₁=(0,2,1)，叉积模√24=2√6。"
    ],
    "knowledgePoints": [
      "空间向量",
      "叉积"
    ],
    "lifeApplications": [
      "斜切面材料"
    ],
    "historyNote": "向量法是立体几何主流工具。",
    "animationSpec": {
      "kind": "cube"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·全国Ⅲ卷",
      "year": 2020,
      "province": "全国Ⅲ卷",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "bj22-abs",
    "title": "绝对值函数交点",
    "stem": "f(x)=|x−1|+|x+1|，g(x)=kx+2。若恰有2个交点，则 k 的范围是____。",
    "type": "填空题",
    "tags": [
      "函数",
      "绝对值",
      "真题风格",
      "省卷",
      "北京",
      "2022"
    ],
    "difficulty": 3,
    "answer": "0<|k|<2",
    "steps": [
      "f在[-1,1]恒为2，两侧斜率±2。",
      "g过(0,2)。k=0时中段重合无穷交点。",
      "0<|k|<2时恰2交点。"
    ],
    "knowledgePoints": [
      "绝对值分段",
      "参数讨论"
    ],
    "lifeApplications": [
      "线性成本模型"
    ],
    "historyNote": "北京卷强调图像与参数。",
    "animationSpec": {
      "kind": "piecewise"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·北京",
      "year": 2022,
      "province": "北京",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "sh21-bin",
    "title": "二项式系数",
    "stem": "(1+2x)^5 展开式中 x² 的系数为____。",
    "type": "填空题",
    "tags": [
      "二项式定理",
      "系数",
      "真题风格",
      "省卷",
      "上海",
      "2021"
    ],
    "difficulty": 2,
    "answer": "40",
    "steps": [
      "T₃=C(5,2)(2x)²=10·4=40。"
    ],
    "knowledgePoints": [
      "二项式通项"
    ],
    "lifeApplications": [
      "近似展开"
    ],
    "historyNote": "二项定理与帕斯卡三角形同源。",
    "animationSpec": {
      "kind": "binomial"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·上海",
      "year": 2021,
      "province": "上海",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "zj23-seq",
    "title": "等比数列",
    "stem": "等比数列 a₁=2，a₁+a₂+a₃=14，求 a₄（两解）。",
    "type": "填空题",
    "tags": [
      "数列",
      "等比数列",
      "真题风格",
      "省卷",
      "浙江",
      "2023"
    ],
    "difficulty": 2,
    "answer": "16或-54",
    "steps": [
      "2(1+q+q²)=14⇒q=2或-3。",
      "a₄=16或-54。"
    ],
    "knowledgePoints": [
      "等比求和",
      "公比"
    ],
    "lifeApplications": [
      "复利"
    ],
    "historyNote": "浙江卷常考公比分类。",
    "animationSpec": {
      "kind": "sequence"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·浙江",
      "year": 2023,
      "province": "浙江",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "js22-vec",
    "title": "平面向量数量积",
    "stem": "|a|=2，|b|=3，a·b=3，则 |a+b|=____。",
    "type": "填空题",
    "tags": [
      "平面向量",
      "数量积",
      "真题风格",
      "省卷",
      "江苏",
      "2022"
    ],
    "difficulty": 2,
    "answer": "√19",
    "steps": [
      "|a+b|²=4+9+6=19。"
    ],
    "knowledgePoints": [
      "数量积与模"
    ],
    "lifeApplications": [
      "力的合成"
    ],
    "historyNote": "向量是江苏卷基础题。",
    "animationSpec": {
      "kind": "line"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·江苏",
      "year": 2022,
      "province": "江苏",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "sd24-ineq",
    "title": "基本不等式",
    "stem": "x>0，y>0，x+2y=6，xy 最大值为____。",
    "type": "填空题",
    "tags": [
      "不等式",
      "基本不等式",
      "真题风格",
      "省卷",
      "山东",
      "2024"
    ],
    "difficulty": 2,
    "answer": "9/2",
    "steps": [
      "x+2y≥2√(2xy)，6≥2√(2xy)⇒xy≤9/2，等号x=3,y=1.5。"
    ],
    "knowledgePoints": [
      "基本不等式",
      "等号条件"
    ],
    "lifeApplications": [
      "产量优化"
    ],
    "historyNote": "基本不等式是山东卷高频。",
    "animationSpec": {
      "kind": "extrema"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·山东",
      "year": 2024,
      "province": "山东",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "gd23-cir",
    "title": "圆的弦长",
    "stem": "圆 x²+y²=25 被直线 x−y+1=0 所截弦长为____。",
    "type": "填空题",
    "tags": [
      "解析几何",
      "圆",
      "弦长",
      "真题风格",
      "省卷",
      "广东",
      "2023"
    ],
    "difficulty": 2,
    "answer": "7√2",
    "steps": [
      "d=√2/2，弦长2√(25-1/2)=7√2。"
    ],
    "knowledgePoints": [
      "弦长公式"
    ],
    "lifeApplications": [
      "圆形截线"
    ],
    "historyNote": "圆与直线是广东卷基础。",
    "animationSpec": {
      "kind": "circleLine"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·广东",
      "year": 2023,
      "province": "广东",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "gk19-bin2",
    "title": "二项式常数项",
    "stem": "(√x−1/√x)^6 展开式常数项为____。",
    "type": "填空题",
    "tags": [
      "二项式定理",
      "真题风格",
      "全国卷",
      "全国Ⅱ卷",
      "2019"
    ],
    "difficulty": 3,
    "answer": "-20",
    "steps": [
      "通项指数(6-2r)/2=0⇒r=3，C(6,3)(-1)^3=-20。"
    ],
    "knowledgePoints": [
      "二项式通项"
    ],
    "lifeApplications": [
      "近似展开"
    ],
    "historyNote": "二项展开常见于概率生成函数。",
    "animationSpec": {
      "kind": "binomial"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·全国Ⅱ卷",
      "year": 2019,
      "province": "全国Ⅱ卷",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "gk25-new",
    "title": "数列倒数构造",
    "stem": "a₁=1，a_{n+1}=a_n/(1+a_n)，求 a_n。",
    "type": "填空题",
    "tags": [
      "数列",
      "递推",
      "真题风格",
      "全国卷",
      "新高考Ⅰ卷",
      "2025"
    ],
    "difficulty": 3,
    "answer": "1/n",
    "steps": [
      "1/a_{n+1}=1/a_n+1，故 1/a_n=n，a_n=1/n。"
    ],
    "knowledgePoints": [
      "倒数构造"
    ],
    "lifeApplications": [
      "并联电阻累加类比"
    ],
    "historyNote": "构造法是数列综合灵魂。",
    "animationSpec": {
      "kind": "sequence"
    },
    "provenance": {
      "kind": "真题风格",
      "label": "真题风格·新高考Ⅰ卷",
      "year": 2025,
      "province": "新高考Ⅰ卷",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-hn-fn",
    "title": "湖南模拟·对数方程",
    "stem": "方程 log₂(x−1)+log₂(x+1)=3 的解为____。",
    "type": "填空题",
    "tags": [
      "函数",
      "对数方程",
      "模拟卷",
      "省卷",
      "湖南",
      "2024"
    ],
    "difficulty": 2,
    "answer": "3",
    "steps": [
      "真数x>1",
      "log₂(x²−1)=3⇒x²=9⇒x=3"
    ],
    "knowledgePoints": [
      "对数运算法则",
      "定义域"
    ],
    "lifeApplications": [
      "信号倍增"
    ],
    "historyNote": "省级模拟强调定义域。",
    "animationSpec": {
      "kind": "functionSketch"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·湖南",
      "year": 2024,
      "province": "湖南",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-hb-der",
    "title": "湖北模拟·切线",
    "stem": "曲线 y=x³−3x 在点(2,2)处切线方程____。",
    "type": "填空题",
    "tags": [
      "导数",
      "切线",
      "模拟卷",
      "省卷",
      "湖北",
      "2024"
    ],
    "difficulty": 2,
    "answer": "y=9x−16",
    "steps": [
      "y′=3x²−3，x=2时斜率9",
      "y−2=9(x−2)"
    ],
    "knowledgePoints": [
      "导数几何意义"
    ],
    "lifeApplications": [
      "瞬时变化率"
    ],
    "historyNote": "切线是微积分入门核心。",
    "animationSpec": {
      "kind": "tangent"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·湖北",
      "year": 2024,
      "province": "湖北",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-sc-tri",
    "title": "四川模拟·正弦定理",
    "stem": "△ABC中 A=45°，B=60°，a=√2，则 b=____。",
    "type": "填空题",
    "tags": [
      "解三角形",
      "正弦定理",
      "模拟卷",
      "省卷",
      "四川",
      "2023"
    ],
    "difficulty": 2,
    "answer": "√3",
    "steps": [
      "正弦定理 √2/sin45°=b/sin60°",
      "得 b=√3"
    ],
    "knowledgePoints": [
      "正弦定理"
    ],
    "lifeApplications": [
      "测距"
    ],
    "historyNote": "四川卷长考解三角形。",
    "animationSpec": {
      "kind": "triangle"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·四川",
      "year": 2023,
      "province": "四川",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-he-seq",
    "title": "河北模拟·递推数列",
    "stem": "a₁=1，a_{n+1}=2a_n+1，求 a_n。",
    "type": "填空题",
    "tags": [
      "数列",
      "递推",
      "模拟卷",
      "省卷",
      "河北",
      "2024"
    ],
    "difficulty": 3,
    "answer": "2^n−1",
    "steps": [
      "令 b_n=a_n+1，b_{n+1}=2b_n，b₁=2",
      "a_n=2^n−1"
    ],
    "knowledgePoints": [
      "构造等比"
    ],
    "lifeApplications": [
      "细胞分裂模型"
    ],
    "historyNote": "递推构造常见于模拟压轴入口。",
    "animationSpec": {
      "kind": "sequence"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·河北",
      "year": 2024,
      "province": "河北",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-tj-prob",
    "title": "天津模拟·独立重复",
    "stem": "掷均匀骰子3次，恰2次点数>4的概率____。",
    "type": "填空题",
    "tags": [
      "概率",
      "二项分布",
      "模拟卷",
      "省卷",
      "天津",
      "2023"
    ],
    "difficulty": 2,
    "answer": "2/9",
    "steps": [
      "P=1/3",
      "C(3,2)(1/3)²(2/3)=2/9"
    ],
    "knowledgePoints": [
      "独立重复试验"
    ],
    "lifeApplications": [
      "合格率抽检"
    ],
    "historyNote": "二项模型是天津卷常客。",
    "animationSpec": {
      "kind": "dice"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·天津",
      "year": 2023,
      "province": "天津",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-cq-anal",
    "title": "重庆模拟·抛物线",
    "stem": "抛物线 y²=4x 上一点到焦点距离为5，则到准线距离____。",
    "type": "填空题",
    "tags": [
      "抛物线",
      "定义",
      "模拟卷",
      "省卷",
      "重庆",
      "2022"
    ],
    "difficulty": 1,
    "answer": "5",
    "steps": [
      "抛物线定义：两距离相等"
    ],
    "knowledgePoints": [
      "抛物线定义"
    ],
    "lifeApplications": [
      "反光镜"
    ],
    "historyNote": "定义法是解析几何第一原则。",
    "animationSpec": {
      "kind": "parabolaFocus"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·重庆",
      "year": 2022,
      "province": "重庆",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-ah-solid",
    "title": "安徽模拟·球体积",
    "stem": "球体表面积36π，体积____。",
    "type": "填空题",
    "tags": [
      "立体几何",
      "球体",
      "模拟卷",
      "省卷",
      "安徽",
      "2023"
    ],
    "difficulty": 1,
    "answer": "36π",
    "steps": [
      "4πr²=36π⇒r=3",
      "V=4/3π·27=36π"
    ],
    "knowledgePoints": [
      "球面积与体积"
    ],
    "lifeApplications": [
      "球形容器"
    ],
    "historyNote": "球体公式源于阿基米德。",
    "animationSpec": {
      "kind": "sphere"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·安徽",
      "year": 2023,
      "province": "安徽",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-fj-lim",
    "title": "福建模拟·极限",
    "stem": "lim_{x→0}(sin3x)/x=____。",
    "type": "填空题",
    "tags": [
      "函数",
      "极限",
      "三角函数",
      "模拟卷",
      "省卷",
      "福建",
      "2024"
    ],
    "difficulty": 1,
    "answer": "3",
    "steps": [
      "=3·(sin3x)/(3x)→3"
    ],
    "knowledgePoints": [
      "重要极限"
    ],
    "lifeApplications": [
      "小角度近似"
    ],
    "historyNote": "极限连接初等数学与微积分。",
    "animationSpec": {
      "kind": "limitSinx"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·福建",
      "year": 2024,
      "province": "福建",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-jx-comb",
    "title": "江西模拟·排列组合",
    "stem": "5男3女选3人至少1女，选法____种。",
    "type": "填空题",
    "tags": [
      "计数",
      "排列组合",
      "模拟卷",
      "省卷",
      "江西",
      "2023"
    ],
    "difficulty": 2,
    "answer": "46",
    "steps": [
      "C(8,3)−C(5,3)=56−10=46"
    ],
    "knowledgePoints": [
      "组合",
      "正难则反"
    ],
    "lifeApplications": [
      "分组抽签"
    ],
    "historyNote": "计数原理高考必考。",
    "animationSpec": {
      "kind": "binomial"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·江西",
      "year": 2023,
      "province": "江西",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-ln-vec",
    "title": "辽宁模拟·向量垂直",
    "stem": "a=(1,m)，b=(m−1,2)，a⊥b，则 m=____。",
    "type": "填空题",
    "tags": [
      "平面向量",
      "垂直",
      "模拟卷",
      "省卷",
      "辽宁",
      "2024"
    ],
    "difficulty": 1,
    "answer": "1/3",
    "steps": [
      "(m−1)+2m=0⇒m=1/3"
    ],
    "knowledgePoints": [
      "数量积为0"
    ],
    "lifeApplications": [
      "正交分解"
    ],
    "historyNote": "垂直条件是向量基础。",
    "animationSpec": {
      "kind": "line"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·辽宁",
      "year": 2024,
      "province": "辽宁",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-gx-log",
    "title": "广西模拟·换底",
    "stem": "log₄9·log₃2=____。",
    "type": "填空题",
    "tags": [
      "对数",
      "换底公式",
      "模拟卷",
      "省卷",
      "广西",
      "2024"
    ],
    "difficulty": 2,
    "answer": "1",
    "steps": [
      "换底后约分得1"
    ],
    "knowledgePoints": [
      "换底公式"
    ],
    "lifeApplications": [
      "信息量换算"
    ],
    "historyNote": "换底体现对数同构。",
    "animationSpec": {
      "kind": "functionSketch"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·广西",
      "year": 2024,
      "province": "广西",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-yn-ell",
    "title": "云南模拟·焦距",
    "stem": "椭圆 x²/25+y²/16=1 的焦距是____。",
    "type": "填空题",
    "tags": [
      "椭圆",
      "焦点",
      "模拟卷",
      "省卷",
      "云南",
      "2023"
    ],
    "difficulty": 1,
    "answer": "6",
    "steps": [
      "c=3，焦距2c=6"
    ],
    "knowledgePoints": [
      "a²=b²+c²"
    ],
    "lifeApplications": [
      "椭圆镜面"
    ],
    "historyNote": "焦点弦是综合题入口。",
    "animationSpec": {
      "kind": "ellipse"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·云南",
      "year": 2023,
      "province": "云南",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-sx-der2",
    "title": "陕西模拟·极值点",
    "stem": "f(x)=x³−12x 的极小值点 x=____。",
    "type": "填空题",
    "tags": [
      "导数",
      "极值",
      "模拟卷",
      "省卷",
      "陕西",
      "2024"
    ],
    "difficulty": 2,
    "answer": "2",
    "steps": [
      "f′=3x(x−2)=0，f″(2)>0"
    ],
    "knowledgePoints": [
      "极值二阶判定"
    ],
    "lifeApplications": [
      "优化临界点"
    ],
    "historyNote": "极值理论连接费马与微积分。",
    "animationSpec": {
      "kind": "extrema"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·陕西",
      "year": 2024,
      "province": "陕西",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-hlj-set",
    "title": "黑龙江模拟·集合",
    "stem": "A={x|x²−3x+2=0}，B={x|x²−x−2=0}，A∩B=____。",
    "type": "填空题",
    "tags": [
      "集合",
      "模拟卷",
      "省卷",
      "黑龙江",
      "2023"
    ],
    "difficulty": 1,
    "answer": "{2}",
    "steps": [
      "A={1,2}，B={−1,2}"
    ],
    "knowledgePoints": [
      "集合运算"
    ],
    "lifeApplications": [
      "分类筛选"
    ],
    "historyNote": "集合语言是现代数学基础。",
    "animationSpec": {
      "kind": "numberLine"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·黑龙江",
      "year": 2023,
      "province": "黑龙江",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-nm-prog",
    "title": "内蒙古模拟·线性规划",
    "stem": "z=x+y，约束 x≥0,y≥0,x+2y≤4,2x+y≤4，z最大____。",
    "type": "填空题",
    "tags": [
      "线性规划",
      "不等式",
      "模拟卷",
      "省卷",
      "内蒙古",
      "2024"
    ],
    "difficulty": 2,
    "answer": "8/3",
    "steps": [
      "顶点法，交点(4/3,4/3)处 z=8/3 最大"
    ],
    "knowledgePoints": [
      "线性规划顶点法"
    ],
    "lifeApplications": [
      "资源分配"
    ],
    "historyNote": "线性规划属运筹学。",
    "animationSpec": {
      "kind": "line"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·内蒙古",
      "year": 2024,
      "province": "内蒙古",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "mock-gz-para",
    "title": "贵州模拟·抛物线焦点",
    "stem": "抛物线 y=2x² 的焦点坐标____。",
    "type": "填空题",
    "tags": [
      "抛物线",
      "模拟卷",
      "省卷",
      "贵州",
      "2024"
    ],
    "difficulty": 2,
    "answer": "(0,1/8)",
    "steps": [
      "x²=y/2=4ax⇒4a=1/2⇒a=1/8，焦点(0,1/8)"
    ],
    "knowledgePoints": [
      "抛物线标准形"
    ],
    "lifeApplications": [
      "车灯反光面"
    ],
    "historyNote": "抛物线光学性质应用广泛。",
    "animationSpec": {
      "kind": "parabolaFocus"
    },
    "provenance": {
      "kind": "模拟卷",
      "label": "模拟卷·贵州",
      "year": 2024,
      "province": "贵州",
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    },
    "choices": null
  },
  {
    "id": "rel-fn-05",
    "title": "相关题型·对勾函数最值",
    "stem": "求 f(x)=x+1/x (x≥1) 的最小值。",
    "type": "解答题",
    "tags": [
      "函数",
      "对勾函数",
      "最值",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "最小值2（x=1）",
    "choices": null,
    "steps": [
      "基本不等式或导数，最小值2"
    ],
    "knowledgePoints": [
      "基本不等式",
      "导数"
    ],
    "lifeApplications": [
      "矩形优化"
    ],
    "historyNote": "对勾函数是经典图像。",
    "animationSpec": {
      "kind": "extrema"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-tri-05",
    "title": "相关题型·三角恒等",
    "stem": "化简 sin75°cos15°−cos75°sin15°。",
    "type": "填空题",
    "tags": [
      "三角函数",
      "恒等变换",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "√3/2",
    "choices": null,
    "steps": [
      "=sin60°=√3/2"
    ],
    "knowledgePoints": [
      "两角差正弦"
    ],
    "lifeApplications": [
      "相位差"
    ],
    "historyNote": "三角恒等源于古典几何。",
    "animationSpec": {
      "kind": "wave"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-seq-05",
    "title": "相关题型·等差中项",
    "stem": "若1/a,1/b,1/c成等差，则（ ）。",
    "type": "选择题",
    "tags": [
      "数列",
      "等差数列",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "2/b=1/a+1/c",
    "choices": [
      "2/b=1/a+1/c",
      "2b=a+c",
      "b²=ac",
      "2a=b+c"
    ],
    "steps": [
      "等差中项：2/b=1/a+1/c"
    ],
    "knowledgePoints": [
      "等差中项"
    ],
    "lifeApplications": [
      "倒数建模"
    ],
    "historyNote": "与调和数列相关。",
    "animationSpec": {
      "kind": "numberLine"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-prob-05",
    "title": "相关题型·互斥事件",
    "stem": "P(A)=0.3，P(B)=0.5，A与B互斥，P(A∪B)=____。",
    "type": "填空题",
    "tags": [
      "概率",
      "互斥",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "0.8",
    "choices": null,
    "steps": [
      "互斥则相加得0.8"
    ],
    "knowledgePoints": [
      "互斥加法"
    ],
    "lifeApplications": [
      "互斥风险合计"
    ],
    "historyNote": "概率公理化由柯尔莫哥洛夫完成。",
    "animationSpec": {
      "kind": "balls"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-anal-05",
    "title": "相关题型·直线交点",
    "stem": "过 x+y−1=0 与 x−y+3=0 交点且斜率2的直线方程____。",
    "type": "填空题",
    "tags": [
      "解析几何",
      "直线",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "2x−y+4=0",
    "choices": null,
    "steps": [
      "交点(-1,2)，点斜式得2x−y+4=0"
    ],
    "knowledgePoints": [
      "交点",
      "点斜式"
    ],
    "lifeApplications": [
      "导航航线"
    ],
    "historyNote": "解析几何由笛卡尔创立。",
    "animationSpec": {
      "kind": "line"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-der-05",
    "title": "相关题型·单调区间",
    "stem": "f(x)=x³−3x²+1 的单调递增区间____。",
    "type": "填空题",
    "tags": [
      "导数",
      "单调性",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "(-∞,0]∪[2,+∞)",
    "choices": null,
    "steps": [
      "f′=3x(x−2)≥0 得该区间"
    ],
    "knowledgePoints": [
      "导数与单调性"
    ],
    "lifeApplications": [
      "趋势转折"
    ],
    "historyNote": "费马讨论过极值。",
    "animationSpec": {
      "kind": "extrema"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-solid-05",
    "title": "相关题型·棱锥体积",
    "stem": "底面边长2的正方形、高3的正四棱锥体积____。",
    "type": "填空题",
    "tags": [
      "立体几何",
      "棱锥",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "4",
    "choices": null,
    "steps": [
      "V=1/3·4·3=4"
    ],
    "knowledgePoints": [
      "棱锥体积"
    ],
    "lifeApplications": [
      "堆料体积"
    ],
    "historyNote": "与祖暅原理相关。",
    "animationSpec": {
      "kind": "tetra"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-ineq-05",
    "title": "相关题型·二次不等式",
    "stem": "解不等式 x²−5x+6>0。",
    "type": "填空题",
    "tags": [
      "不等式",
      "二次不等式",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "x<2或x>3",
    "choices": null,
    "steps": [
      "(x−2)(x−3)>0"
    ],
    "knowledgePoints": [
      "二次不等式"
    ],
    "lifeApplications": [
      "利润为正区间"
    ],
    "historyNote": "与二次方程一体。",
    "animationSpec": {
      "kind": "numberLine"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-comp-05",
    "title": "相关题型·复数模",
    "stem": "z=3−4i 的模 |z|=____。",
    "type": "填空题",
    "tags": [
      "复数",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "5",
    "choices": null,
    "steps": [
      "√(9+16)=5"
    ],
    "knowledgePoints": [
      "复数模"
    ],
    "lifeApplications": [
      "交流电类比"
    ],
    "historyNote": "复数经高斯完善。",
    "animationSpec": {
      "kind": "unitCircle"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-stat-05",
    "title": "相关题型·平均数方差",
    "stem": "数据1,2,3,4,5的平均数与方差____。",
    "type": "填空题",
    "tags": [
      "统计",
      "方差",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "平均3，方差2",
    "choices": null,
    "steps": [
      "平均3，方差[(4+1+0+1+4)/5]=2"
    ],
    "knowledgePoints": [
      "平均数",
      "方差"
    ],
    "lifeApplications": [
      "成绩波动"
    ],
    "historyNote": "现代统计学源于高尔顿等。",
    "animationSpec": {
      "kind": "seriesBars"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-fn-06",
    "title": "相关题型·奇偶性",
    "stem": "判断 f(x)=lg((1−x)/(1+x)) 的奇偶性。",
    "type": "解答题",
    "tags": [
      "函数",
      "奇偶性",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "奇函数",
    "choices": null,
    "steps": [
      "定义域|x|<1对称，f(−x)=−f(x)"
    ],
    "knowledgePoints": [
      "奇偶性定义"
    ],
    "lifeApplications": [
      "对称信号"
    ],
    "historyNote": "奇偶性与傅里叶展开衔接。",
    "animationSpec": {
      "kind": "functionSketch"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-tri-06",
    "title": "相关题型·二倍角",
    "stem": "sinθ=3/5，θ∈(0,π/2)，cos2θ=____。",
    "type": "填空题",
    "tags": [
      "三角函数",
      "二倍角",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "7/25",
    "choices": null,
    "steps": [
      "cosθ=4/5，cos2θ=7/25"
    ],
    "knowledgePoints": [
      "二倍角公式"
    ],
    "lifeApplications": [
      "倍频"
    ],
    "historyNote": "源于和角公式。",
    "animationSpec": {
      "kind": "unitCircle"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-seq-06",
    "title": "相关题型·无穷等比",
    "stem": "公比|q|<1的无穷等比求和公式 S=____（首项a）。",
    "type": "填空题",
    "tags": [
      "数列",
      "等比数列",
      "无穷级数",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 2,
    "answer": "a/(1−q)",
    "choices": null,
    "steps": [
      "S=a/(1−q)"
    ],
    "knowledgePoints": [
      "无穷等比求和"
    ],
    "lifeApplications": [
      "永续年金"
    ],
    "historyNote": "极限思想进入中学数列。",
    "animationSpec": {
      "kind": "seriesBars"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-anal-06",
    "title": "相关题型·两点距离",
    "stem": "A(1,2)，B(4,6) 的距离____。",
    "type": "填空题",
    "tags": [
      "解析几何",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "5",
    "choices": null,
    "steps": [
      "√(3²+4²)=5"
    ],
    "knowledgePoints": [
      "距离公式"
    ],
    "lifeApplications": [
      "地图测距"
    ],
    "historyNote": "勾股定理的坐标形式。",
    "animationSpec": {
      "kind": "line"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  },
  {
    "id": "rel-prob-06",
    "title": "相关题型·古典概型",
    "stem": "掷两枚均匀骰子，点数和为7的概率____。",
    "type": "填空题",
    "tags": [
      "概率",
      "古典概型",
      "相关题型",
      "自编类似"
    ],
    "difficulty": 1,
    "answer": "1/6",
    "choices": null,
    "steps": [
      "6/36=1/6"
    ],
    "knowledgePoints": [
      "古典概型"
    ],
    "lifeApplications": [
      "公平游戏"
    ],
    "historyNote": "惠更斯等推动概率论。",
    "animationSpec": {
      "kind": "dice"
    },
    "provenance": {
      "kind": "自编类似",
      "label": "自编类似·相关题型",
      "year": null,
      "province": null,
      "paper": "风格原创练习",
      "note": "原创改编/模拟风格，非任何公开试卷原文，仅供学习练习"
    }
  }
];
