export interface ComparisonRow {
  feature: string;
  featureZh: string;
  calchub: string;
  calchubZh: string;
  competitor: string;
  competitorZh: string;
}

export interface AlternativePageData {
  slug: string;
  path: string;
  title: string;
  titleZh: string;
  metaDesc: string;
  metaDescZh: string;
  badge: string;
  badgeZh: string;
  h1: string;
  h1Zh: string;
  subheading: string;
  subheadingZh: string;
  competitorName: string;
  whySwitchTitle: string;
  whySwitchTitleZh: string;
  whySwitchDesc: string;
  whySwitchDescZh: string;
  comparisons: ComparisonRow[];
  faqs: { question: string; questionZh: string; answer: string; answerZh: string }[];
}

export const ALTERNATIVE_PAGES: AlternativePageData[] = [
  {
    slug: "calculator-net-alternative",
    path: "/calculator-net-alternative",
    title: "Best Free Calculator.net Alternative (2026) - Clean & Fast | CalcHub",
    titleZh: "Calculator.net 最佳无广告替代品 (2026) - 现代极速纯净 | CalcHub",
    metaDesc: "Looking for a modern, ad-free alternative to Calculator.net? CalcHub offers 100% client-side privacy, beautiful dark mode UI, and instant calculations without annoying banners.",
    metaDescZh: "寻找比 Calculator.net 更现代、清爽无广告的在线计算器？CalcHub 提供 100% 浏览器本地隐私、暗黑磨砂质感与秒级实时计算，告别满屏弹窗广告。",
    badge: "2026 Modern Alternative",
    badgeZh: "2026 现代化替代品",
    h1: "The Best Free, Modern Alternative to Calculator.net",
    h1Zh: "Calculator.net 最佳免费、现代极速替代品",
    subheading: "Say goodbye to bloated 2000s layouts and invasive banner ads. CalcHub is built for creators, e-commerce, and developers with sub-second execution and total privacy.",
    subheadingZh: "告别老旧拥挤的排版与满屏牛皮癣广告。CalcHub 专为出海电商、创作者与独立开发者打造，拥有亚秒级极速响应与 100% 本地隐私。",
    competitorName: "Calculator.net",
    whySwitchTitle: "Why creators & founders switch from Calculator.net to CalcHub",
    whySwitchTitleZh: "为什么创作者与出海卖家纷纷从 Calculator.net 迁移至 CalcHub？",
    whySwitchDesc: "Calculator.net has been around since 2008, but its interface remains cluttered with 5+ ad slots, tracker scripts, and rigid form reloads. CalcHub reimagines financial calculation with real-time reactive sliders, zero cloud uploads, and native multi-language support.",
    whySwitchDescZh: "Calculator.net 自 2008 年上线以来，页面常年充斥着 5 个以上的广告位、第三方跟踪代码以及卡顿的表单提交。CalcHub 用实时响应滑块、0 数据上传和原生 7 门语言重新定义了现代在线计算体验。",
    comparisons: [
      {
        feature: "Ad-Free Experience",
        featureZh: "纯净无广告干扰",
        calchub: "100% Clean, No Pop-ups or Flashing Banners",
        calchubZh: "100% 纯净清爽，无弹窗与闪烁横幅",
        competitor: "Heavy with 4-8 ad banners per page",
        competitorZh: "页面布满 4~8 个广告位与插页",
      },
      {
        feature: "Data Privacy & Security",
        featureZh: "数据隐私与本地运算",
        calchub: "100% In-Browser Execution (Zero Server Logs)",
        calchubZh: "100% 浏览器本地运行（零服务器存储）",
        competitor: "Standard web forms with server requests",
        competitorZh: "传统服务器请求与日志记录",
      },
      {
        feature: "Modern Dark Mode UI",
        featureZh: "现代暗黑高级视觉",
        calchub: "Sleek Dark Glassmorphism & High Contrast",
        calchubZh: "深邃暗黑磨砂玻璃质感与高对比排版",
        competitor: "Outdated 2000s white table design",
        competitorZh: "2000 年代传统白色表格设计",
      },
      {
        feature: "Creator & Modern Niches",
        featureZh: "垂直针对创作者与出海",
        calchub: "Specialized for TikTok, YouTube, Stripe, Shopify, SaaS",
        calchubZh: "深度定制 TikTok、YouTube、Stripe、SaaS、Shopify",
        competitor: "Generic math with outdated commission rates",
        competitorZh: "泛通用数学，缺少新商业分成模型",
      },
      {
        feature: "Multi-Language Support",
        featureZh: "原生全球多语言",
        calchub: "7 Native Global Languages (EN, ES, PT, DE, FR, JA, ZH)",
        calchubZh: "7 门全球主流母语（英、西、葡、德、法、日、中）",
        competitor: "English only (or machine translated)",
        competitorZh: "仅英文或低质机器翻译",
      },
    ],
    faqs: [
      {
        question: "Is CalcHub completely free to use like Calculator.net?",
        questionZh: "CalcHub 和 Calculator.net 一样是完全免费的吗？",
        answer: "Yes! All calculations, presets, and export features on CalcHub are 100% free with unlimited usage.",
        answerZh: "是的！CalcHub 上的所有计算功能、快捷预设和复制导出功能均 100% 免费，且没有任何使用次数限制。",
      },
      {
        question: "Does CalcHub store my revenue or pricing financial numbers?",
        questionZh: "CalcHub 会在云端保存我的营业额或财务敏感数字吗？",
        answer: "No. All financial calculations happen 100% client-side in your local web browser. No numbers are ever sent to our servers.",
        answerZh: "绝不。所有计算均 100% 在您的本地浏览器中完成，任何输入的商业数据都不会被传输到我们的云端服务器。",
      },
    ],
  },
  {
    slug: "omni-calculator-alternative",
    path: "/omni-calculator-alternative",
    title: "Best Omni Calculator Alternative (2026) - Fast & Ad-Free | CalcHub",
    titleZh: "Omni Calculator 最佳极速无干扰替代品 (2026) | CalcHub",
    metaDesc: "Tired of slow-loading Omni Calculator pages and heavy scripts? Switch to CalcHub for lightweight, sub-second interactive financial calculators built for business founders.",
    metaDescZh: "受够了 Omni Calculator 庞大的脚本体积与慢速加载？迁移到 CalcHub，体验为出海创业者与创作者量身定制的轻量、亚秒级响应计算器。",
    badge: "Lightweight & Ultra-Fast",
    badgeZh: "轻量极速架构",
    h1: "The Lightweight, Ad-Free Omni Calculator Alternative",
    h1Zh: "轻量极速、清爽无干扰的 Omni Calculator 替代品",
    subheading: "Omni Calculator has thousands of calculators but takes seconds to load with heavy trackers. CalcHub delivers instant financial answers with zero bloat.",
    subheadingZh: "Omni Calculator 虽有数千计算器，但庞大的跟踪脚本导致加载缓慢。CalcHub 专注于出海商业与创作者核心场景，秒开即用、零冗余。",
    competitorName: "Omni Calculator",
    whySwitchTitle: "Why users prefer CalcHub over Omni Calculator",
    whySwitchTitleZh: "为什么越来越多的出海用户更偏爱 CalcHub？",
    whySwitchDesc: "While Omni Calculator tries to cover everything from physics to gardening, CalcHub is razor-focused on high-value business, freelance, and creator unit economics. It loads 5x faster and provides immediate actionable invoice and revenue breakdowns.",
    whySwitchDescZh: "Omni Calculator 试图覆盖从物理到园艺的所有场景，导致页面庞杂；而 CalcHub 专注于出海商业、自由职业与创作者的高单价单位经济模型，加载速度快 5 倍，且能直接输出精准开票与收益拆解。",
    comparisons: [
      {
        feature: "Page Load Speed",
        featureZh: "页面首屏加载速度",
        calchub: "< 200ms Instant Turbopack & Next.js Engine",
        calchubZh: "< 200ms 极速 Next.js + Turbopack 引擎",
        competitor: "2.5s - 5.0s with multiple third-party scripts",
        competitorZh: "2.5s ~ 5.0s，携带大量外部广告脚本",
      },
      {
        feature: "Focus on Modern Creator Economy",
        featureZh: "专注创作者与新出海经济",
        calchub: "TikTok Creator Rewards 2026, YouTube RPM, Stripe Reverse Invoice",
        calchubZh: "2026 TikTok 创作者分成、YouTube RPM、Stripe 反向开票",
        competitor: "Generic legacy formulas often missing 2026 platform policies",
        competitorZh: "通用老旧公式，缺少 2026 最新平台政策规则",
      },
      {
        feature: "1-Click Client Invoice Copy",
        featureZh: "一键复制客户开票金额",
        calchub: "Built-in reverse fee solver with 1-click clipboard copy",
        calchubZh: "内置反向手续费解算器与一键剪贴板复制",
        competitor: "Manual formula checking required",
        competitorZh: "需用户自行计算倒推",
      },
      {
        feature: "Privacy First",
        featureZh: "隐私优先原则",
        calchub: "Zero cookie banners, zero tracker profiling",
        calchubZh: "无烦人的 Cookie 弹窗，无用户行为画像追踪",
        competitor: "Extensive analytics & advertising network cookies",
        competitorZh: "包含庞大的跨站追踪与广告网络 Cookie",
      },
    ],
    faqs: [
      {
        question: "Can I use CalcHub on my mobile phone?",
        questionZh: "我可以在手机或平板上流畅使用 CalcHub 吗？",
        answer: "Absolutely. CalcHub is 100% responsive and optimized for mobile touchscreens with intuitive range sliders and instant copy buttons.",
        answerZh: "当然可以。CalcHub 针对移动端触摸屏进行了深度优化，拥有大尺寸平滑滑块与一键复制按钮，手机端体验极佳。",
      },
    ],
  },
  {
    slug: "stripe-fee-calculator-reverse-invoice",
    path: "/stripe-fee-calculator-reverse-invoice",
    title: "Stripe Reverse Fee Calculator (2026) - How Much to Invoice Clients | CalcHub",
    titleZh: "Stripe 反向开票净额计算器 (2026) - 精准算出应向客户收取的金额 | CalcHub",
    metaDesc: "Need to receive an exact amount after Stripe processing fees? Use our free Stripe reverse invoice calculator to compute the exact billing amount for US, UK, and international clients.",
    metaDescZh: "扣除 Stripe 手续费后想要净到手指定金额？使用免费 Stripe 反向开票计算器，精准计算出应向美国、英国及海外客户收取的开票总额。",
    badge: "Reverse Invoicing Solver",
    badgeZh: "反向开票解算器",
    h1: "Stripe Reverse Fee & Client Invoicing Calculator (2026)",
    h1Zh: "Stripe 反向手续费与客户开票金额计算器 (2026)",
    subheading: "Stop losing 2.9% + $0.30 (or 4.4% on international cards) out of your own pocket. Calculate the exact invoice amount to ensure you receive 100% of your target payout.",
    subheadingZh: "不要再自掏腰包承担 2.9% + $0.30（或国际卡 4.4%）的手续费损失。精准倒推应向客户开票的金额，确保您的银行账户净到手每一分钱。",
    competitorName: "Standard Payment Calculators",
    whySwitchTitle: "The Problem with Standard Forward Fee Calculators",
    whySwitchTitleZh: "为什么传统的“正向计算器”帮不了你的开票需求？",
    whySwitchDesc: "If you want to receive $1,000 net, charging $1,029.30 will still leave you short because Stripe takes 2.9% of the NEW total! Our reverse solver uses the mathematical formula: [Target Net + Fixed Fee] / (1 - Fee Rate) to guarantee your payout matches to the exact cent.",
    whySwitchDescZh: "如果您想净到手 $1,000，直接加收 $29.30 是错的，因为 Stripe 会对『增加后的总额』按比例扣费！我们的反向计算器采用严谨的代数公式：[目标净额 + 固定费] / (1 - 费率)，确保最终入账分毫不差。",
    comparisons: [
      {
        feature: "Calculation Direction",
        featureZh: "计算方向",
        calchub: "Two-Way (Forward Payout & Reverse Invoice)",
        calchubZh: "双向支持（正向净到手 + 反向开票倒推）",
        competitor: "Forward calculation only",
        competitorZh: "仅支持正向扣费计算",
      },
      {
        feature: "Cross-Border & Currency Conversion",
        featureZh: "跨境与币种转换附加费",
        calchub: "Includes +1.5% International & +1% FX toggles",
        calchubZh: "内置 +1.5% 国际卡与 +1% 汇率转换一键切换",
        competitor: "US domestic cards only",
        competitorZh: "通常仅支持美国本土卡",
      },
      {
        feature: "1-Click Client Invoice Clipboard",
        featureZh: "一键复制开票数额",
        calchub: "Instant copy button with invoice note explanation",
        calchubZh: "一键复制到剪贴板，并附带开票说明文案",
        competitor: "Manual copy-paste required",
        competitorZh: "需手动抄写",
      },
    ],
    faqs: [
      {
        question: "What is the mathematical formula for Stripe reverse fee?",
        questionZh: "Stripe 反向开票手续费的精确计算公式是什么？",
        answer: "Invoice Amount = (Target Net Amount + Fixed Fee) / (1 - Percentage Rate / 100). For example, to net $100 with 2.9% + $0.30 fee: ($100 + $0.30) / (1 - 0.029) = $103.30.",
        answerZh: "应开票金额 = (目标净额 + 固定手续费) / (1 - 费率百分比 / 100)。例如要净实收 $100（标准费率 2.9% + $0.30）：($100 + $0.30) / (1 - 0.029) = $103.30。",
      },
      {
        question: "Is it legal to pass Stripe processing fees to clients?",
        questionZh: "向客户转嫁 Stripe 手续费是否合法合规？",
        answer: "In B2B invoicing, charging a service fee or including processing overhead in your quote is standard commercial practice in the US, UK, and most global jurisdictions.",
        answerZh: "在 B2B 自由职业与出海商业开票中，将支付处理综合成本计入报价或收取合理的服务附加费是欧美及全球绝大多数地区的通行商业惯例。",
      },
    ],
  },
];
