/**
 * 高考数学题库 MVP — 内嵌题目数据
 * 每题含：题干、标签、难度、答案、步骤、知识点、生活应用、历史、动画规格
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
      "闭区间"
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
      "换底公式"
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
      "对数"
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
      "同角关系"
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
      "解三角形"
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
      "恒等变换"
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
      "求和"
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
      "无穷级数"
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
      "构造法"
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
      "组合"
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
      "独立重复"
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
    }
  },
  {
    "id": "prob-03",
    "title": "条件概率入门",
    "stem": "掷一枚均匀骰子，已知点数为偶数，求点数为 6 的概率。",
    "type": "选择题",
    "tags": [
      "概率",
      "条件概率"
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
      "距离"
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
      "三棱锥"
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
      "直线"
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
      "离心率"
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
      "焦点"
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
      "函数"
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
      "函数"
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
      "导数基础"
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
      "极限"
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
      "解三角形"
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
      "放缩"
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
      "点斜式"
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
      "公式"
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
    }
  }
];
