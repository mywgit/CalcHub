import { Language } from "./i18n";

export interface LocalizedText {
  name: string;
  shortDesc: string;
  badge?: string;
  h1: string;
  howToSteps?: string[];
  features?: string[];
  faqs?: { question: string; answer: string }[];
}

export interface CalculatorItem {
  id: string;
  name: string;
  path: string;
  category: string;
  categorySlug: string;
  shortDesc: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  iconName: string;
  badge?: string;
  howToSteps: string[];
  features: string[];
  faqs: { question: string; answer: string }[];
  formulaDesc: string;
  locales: Record<Language, LocalizedText>;
}

export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  locales: Record<Language, { name: string; description: string }>;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: "creator",
    name: "Creator & Social",
    description: "Calculate earnings, RPM, and brand deal rates for YouTube, TikTok & Substack.",
    locales: {
      en: { name: "Creator & Social", description: "Calculate earnings, RPM, and brand deal rates for YouTube, TikTok & Substack." },
      es: { name: "Creadores y Redes Sociales", description: "Calcula ingresos, RPM y tarifas de patrocinio para YouTube, TikTok y Substack." },
      pt: { name: "Criadores e Redes Sociais", description: "Calcule ganhos, RPM e taxas de patrocínio para YouTube, TikTok e Substack." },
      de: { name: "Creator & Social Media", description: "Berechnen Sie Einnahmen, RPM und Sponsoring-Preise für YouTube, TikTok und Substack." },
      fr: { name: "Créateurs et Médias Sociaux", description: "Calculez vos revenus, RPM et tarifs de partenariats pour YouTube, TikTok et Substack." },
      ja: { name: "クリエイター＆SNS", description: "YouTube、TikTok、Substackの収益、RPM、案件単価を計算。" },
      zh: { name: "创作者与社交媒体", description: "测算 YouTube、TikTok 与 Substack 播放量分成、RPM 及商单报价。" },
    },
  },
  {
    id: "business",
    name: "E-Commerce & Stripe",
    description: "Accurate transaction fee and profit margin calculators with real ad costs.",
    locales: {
      en: { name: "E-Commerce & Stripe", description: "Accurate transaction fee and profit margin calculators with real ad costs." },
      es: { name: "Comercio Electrónico y Stripe", description: "Calculadoras de comisiones y margen de beneficio con costes reales de publicidad." },
      pt: { name: "E-Commerce e Stripe", description: "Calculadoras de taxas de transação e margem de lucro com custos de anúncios." },
      de: { name: "E-Commerce & Stripe", description: "Transaktionsgebühren- und Gewinnspannenrechner mit realen Werbekosten." },
      fr: { name: "E-Commerce et Stripe", description: "Calculateurs de frais de transaction et de marge bénéficiaire nette." },
      ja: { name: "EC＆決済手数料", description: "広告費や決済手数料を考慮した正確な利益率と手数料計算。" },
      zh: { name: "跨境电商与支付费率", description: "包含真实广告投流成本的交易手续费与净利润率计算器。" },
    },
  },
  {
    id: "saas",
    name: "SaaS & Growth",
    description: "Model MRR, churn rate, customer lifetime value (LTV), and cash runway.",
    locales: {
      en: { name: "SaaS & Growth", description: "Model MRR, churn rate, customer lifetime value (LTV), and cash runway." },
      es: { name: "SaaS y Crecimiento", description: "Modela MRR, tasa de cancelación (churn), valor de vida del cliente (LTV) y runway." },
      pt: { name: "SaaS e Crescimento", description: "Modele MRR, taxa de cancelamento (churn), LTV e fluxo de caixa (runway)." },
      de: { name: "SaaS & Wachstum", description: "Modellieren Sie MRR, Abwanderungsrate (Churn), Customer Lifetime Value (LTV) und Runway." },
      fr: { name: "SaaS et Croissance", description: "Modélisez le MRR, le taux d'attrition (churn), la valeur vie client (LTV) et le runway." },
      ja: { name: "SaaS＆成長モデル", description: "MRR、解約率（Churn）、顧客生涯価値（LTV）、キャッシュ残存期間をシミュレーション。" },
      zh: { name: "SaaS 与订阅制增长", description: "模拟月经常性收入 (MRR)、流失率、客户终身价值 (LTV) 与资金跑道。" },
    },
  },
  {
    id: "freelance",
    name: "Freelance & Finance",
    description: "Calculate true hourly rates, tax withholdings, and percentage growth.",
    locales: {
      en: { name: "Freelance & Finance", description: "Calculate true hourly rates, tax withholdings, and percentage growth." },
      es: { name: "Freelance y Finanzas", description: "Calcula tarifas por hora reales, retenciones de impuestos y crecimiento porcentual." },
      pt: { name: "Freelance e Finanças", description: "Calcule tarifas por hora reais, impostos e crescimento percentual." },
      de: { name: "Freelancer & Finanzen", description: "Berechnen Sie echte Stundensätze, Steuerabzüge und prozentuales Wachstum." },
      fr: { name: "Freelance et Finances", description: "Calculez vos taux horaires réels, retenues fiscales et croissance en pourcentage." },
      ja: { name: "フリーランス＆財務", description: "実質時給、税金控除、パーセンテージ成長率を正確に算出。" },
      zh: { name: "自由职业与财务管理", description: "计算真实最低时薪、税收扣除与百分比增长。" },
    },
  },
];

export const CALCULATORS: CalculatorItem[] = [
  {
    id: "stripe-fee-calculator",
    name: "Stripe & PayPal Fee Calculator (2026)",
    path: "/stripe-fee-calculator",
    category: "E-Commerce & Stripe",
    categorySlug: "business",
    shortDesc: "Calculate exact Stripe, PayPal, and credit card processing fees for domestic and international sales.",
    primaryKeyword: "Stripe Fee Calculator",
    secondaryKeywords: ["paypal fee calculator", "credit card processing fee", "stripe fee calculator 2026", "stripe invoice fee"],
    metaTitle: "Stripe Fee Calculator (2026 Updated) - Exact Net Payout & Domestic/Intl Solver",
    metaDescription: "Free online Stripe & payment fee calculator (2026). Calculate exact credit card transaction fees, net payout, and reverse invoice amounts.",
    h1: "Stripe & Payment Processing Fee Calculator (2026)",
    iconName: "CreditCard",
    badge: "Updated for 2026",
    howToSteps: [
      "Enter the transaction amount you plan to charge your customer.",
      "Select your region (US, UK, EU, or International) and payment method.",
      "View the exact processing fee, net payout amount, and how much to charge to receive the full amount."
    ],
    features: [
      "Supports latest 2026 standard Stripe rates (2.9% + $0.30) and international card fees (+1.5%).",
      "Reverse calculation: Calculates exactly what to invoice to net your desired target amount.",
      "100% private in-browser calculation with zero server logging."
    ],
    faqs: [
      {
        question: "What is the standard Stripe transaction fee?",
        answer: "For standard US transactions, Stripe charges 2.9% + $0.30 per successful card charge. For international cards, an additional 1.5% fee applies, plus 1% for currency conversion if applicable."
      },
      {
        question: "How do I calculate what to charge a client so I receive a specific net amount?",
        answer: "Use the formula: Invoice Amount = (Desired Net + Fixed Fee) / (1 - Percentage Rate). Our tool computes this reverse fee automatically."
      }
    ],
    formulaDesc: "Fee = (Amount × Percentage Rate) + Fixed Fee | Net = Amount - Fee",
    locales: {
      en: {
        name: "Stripe & PayPal Fee Calculator",
        shortDesc: "Calculate exact Stripe, PayPal, and credit card processing fees for domestic and international sales.",
        badge: "Updated for 2026",
        h1: "Stripe & Payment Processing Fee Calculator",
      },
      es: {
        name: "Calculadora de Comisiones Stripe y PayPal",
        shortDesc: "Calcula comisiones exactas de Stripe, PayPal y tarjetas para ventas nacionales e internacionales.",
        badge: "Tarifas 2026",
        h1: "Calculadora de Comisiones de Procesamiento Stripe",
        howToSteps: [
          "Ingresa el monto de la transacción que planeas cobrar a tu cliente.",
          "Selecciona tu región o método de pago (Stripe estándar, internacional o PayPal).",
          "Consulta al instante la comisión exacta, el neto a recibir y cuánto facturar para cobrar el monto íntegro."
        ],
        features: [
          "Compatible con tarifas estándar 2026 de Stripe (2.9% + $0.30) y recargo internacional (+1.5%).",
          "Cálculo inverso: Calcula cuánto facturar para que tras comisiones recibas tu monto neto exacto.",
          "100% privado en el navegador sin almacenamiento en servidores."
        ],
        faqs: [
          {
            question: "¿Cuál es la tarifa estándar de procesamiento de Stripe?",
            answer: "Para transacciones estándar en EE. UU., Stripe cobra un 2.9% + $0.30 por cargo exitoso. Para tarjetas internacionales se aplica un 1.5% adicional."
          },
          {
            question: "¿Cómo calculo cuánto cobrar para recibir una cantidad neta exacta?",
            answer: "Usa la fórmula: Monto a Facturar = (Neto Deseado + Tarifa Fija) / (1 - Tasa Porcentual). Esta herramienta lo calcula de forma automática."
          }
        ]
      },
      pt: {
        name: "Calculadora de Taxas Stripe e PayPal",
        shortDesc: "Calcule taxas exatas de Stripe, PayPal e cartões para vendas nacionais e internacionais.",
        badge: "Taxas 2026",
        h1: "Calculadora de Taxas de Pagamento Stripe",
      },
      de: {
        name: "Stripe & PayPal Gebührenrechner",
        shortDesc: "Berechnen Sie exakte Stripe-, PayPal- und Kreditkartengebühren für nationale und internationale Zahlungen.",
        badge: "2026 Aktualisiert",
        h1: "Stripe & Zahlungsabwicklungs-Gebührenrechner",
      },
      fr: {
        name: "Calculateur de Frais Stripe et PayPal",
        shortDesc: "Calculez les frais exacts Stripe, PayPal et cartes bancaires pour vos ventes locales et internationales.",
        badge: "Tarifs 2026",
        h1: "Calculateur de Frais de Traitement des Paiements Stripe",
      },
      ja: {
        name: "Stripe＆PayPal 手数料計算ツール",
        shortDesc: "国内・国際決済におけるStripe、PayPal、クレジットカード決済手数料と手取り額を正確に計算。",
        badge: "2026年最新料率",
        h1: "Stripe決済手数料・請求額計算ツール",
        howToSteps: [
          "顧客に請求する予定の取引金額を入力します。",
          "決済ゲートウェイの種類（Stripe標準、国際カード、PayPal）を選択します。",
          "差し引かれる決済手数料、実際の入金手取り額、および希望金額を満額受け取るための逆算請求額を確認します。"
        ],
        features: [
          "2026年最新のStripe標準料率（2.9% + $0.30）および国際カード手数料（+1.5%）に対応。",
          "逆算請求機能：手数料引き去り後に希望額が手元に残る正確な請求額を自動計算。",
          "100% ブラウザ内完結のプライバシー保護。サーバーへのデータ送信なし。"
        ],
        faqs: [
          {
            question: "Stripeの標準決済手数料はいくらですか？",
            answer: "標準的な米ドル取引の場合、Stripeは決済成功ごとに2.9% + $0.30を手数料として徴収します。国際カードの場合はさらに+1.5%が加算されます。"
          },
          {
            question: "手取り額を満額にするにはいくら請求すればよいですか？",
            answer: "逆算数式：【請求額 = (希望手取り額 + 固定手数料) ÷ (1 - 料率)】を使用します。当ツールが自動計算します。"
          }
        ]
      },
      zh: {
        name: "Stripe 与 PayPal 手续费计算器",
        shortDesc: "精确计算国内与国际信用卡交易扣费、净到手金额与反向开票金额。",
        badge: "已更新2026费率",
        h1: "Stripe 与主流支付网关费率计算器",
        howToSteps: [
          "输入你计划向客户收取的交易金额（例如 $100.00）。",
          "选择支付通道预设（Stripe 美国标准 2.9%+$0.30、国际卡 +1.5% 或 PayPal）。",
          "查看扣除费率后的到手净额，以及为了实收足额而需要向客户开票的【反向开票金额】。"
        ],
        features: [
          "已全面适配 2026 全球主流费率，支持国际卡（+1.5%）跨境交易计算。",
          "独家反向开票算法：自动反推应向客户报价多少，才能确保扣完手续费后分文不少。",
          "100% 浏览器本地离线运行，绝不记录任何商业交易数据与敏感数字。"
        ],
        faqs: [
          {
            question: "Stripe 的标准扣费费率是多少？",
            answer: "对于标准的美国本土交易，Stripe 收取每笔成功刷卡 2.9% + $0.30 美元。如果是国际信用卡，通常会额外加收 1.5% 跨境费，涉及币种转换时再加 1%。"
          },
          {
            question: "什么是【反向开票金额】？如何向客户报价？",
            answer: "因为支付网关会扣除比例与固定费，如果你想净赚 $100，直接收 $100 会被扣到只剩 $96.80。反向开票通过公式：(目标净额 + 固定费) / (1 - 费率)，算出你应向客户收 $103.30，扣完费刚好到手 $100.00！"
          }
        ]
      },
    },
  },
  {
    id: "tiktok-money-calculator",
    name: "TikTok Creator Rewards Program Calculator",
    path: "/tiktok-money-calculator",
    category: "Creator & Social",
    categorySlug: "creator",
    shortDesc: "Estimate your earnings from the TikTok Creator Rewards Program based on qualified views and RPM.",
    primaryKeyword: "TikTok Money Calculator",
    secondaryKeywords: ["tiktok creator rewards calculator", "tiktok rpm calculator", "how much tiktok pays", "tiktok money calculator 2026"],
    metaTitle: "TikTok Money Calculator 2026 - Instant Creator Rewards Earnings Estimator",
    metaDescription: "Free 2026 TikTok Creator Rewards Program earnings calculator. Calculate payouts based on qualified views, duration, and RPM ($0.40 - $1.35+).",
    h1: "TikTok Creator Rewards Earnings Calculator (2026)",
    iconName: "Video",
    badge: "Creator Rewards",
    howToSteps: [
      "Input your total video views or monthly expected view count.",
      "Adjust the Qualified Views percentage (typically 40% - 70% of total views).",
      "Set your niche RPM ($0.40 - $1.50 per 1,000 qualified views) to see estimated payouts."
    ],
    features: [
      "Accurate modeling based on 1-minute+ video Creator Rewards eligibility rules.",
      "Interactive RPM slider with presets for US, UK, Tier 1, and Global viewers.",
      "Monthly & Yearly projection breakdown with interactive earnings scale."
    ],
    faqs: [
      {
        question: "What is a good RPM on the TikTok Creator Rewards Program?",
        answer: "RPM (Revenue Per Mille) on TikTok typically ranges from $0.40 to $1.20+ for US/UK audiences on 1-minute+ videos. Niche topics like finance, tech, and business often see RPMs above $1.00."
      },
      {
        question: "What counts as a Qualified View on TikTok?",
        answer: "A qualified view comes from an eligible region, watches at least 5 seconds of a 1-minute+ video, is from the 'For You' feed, and does not violate community guidelines."
      }
    ],
    formulaDesc: "Earnings = (Qualified Views / 1,000) × RPM",
    locales: {
      en: {
        name: "TikTok Creator Rewards Calculator",
        shortDesc: "Estimate your earnings from the TikTok Creator Rewards Program based on qualified views and RPM.",
        badge: "Creator Rewards",
        h1: "TikTok Creator Rewards Earnings Calculator",
      },
      es: {
        name: "Calculadora de Ganancias TikTok Creator Rewards",
        shortDesc: "Estima tus ingresos del programa TikTok Creator Rewards según reproducciones cualificadas y RPM.",
        badge: "Programa Creadores",
        h1: "Calculadora de Ingresos TikTok Creator Rewards",
      },
      pt: {
        name: "Calculadora de Ganhos TikTok Creator Rewards",
        shortDesc: "Estime seus ganhos no programa TikTok Creator Rewards com base em visualizações qualificadas e RPM.",
        badge: "Recompensas Criador",
        h1: "Calculadora de Ganhos do TikTok Creator Rewards",
      },
      de: {
        name: "TikTok Creator Rewards Einnahmen Rechner",
        shortDesc: "Schätzen Sie Ihre Einnahmen aus dem TikTok Creator Rewards Programm basierend auf qualifizierten Aufrufen und RPM.",
        badge: "Creator Rewards",
        h1: "TikTok Creator Rewards Verdienst-Rechner",
      },
      fr: {
        name: "Calculateur de Revenus TikTok Creator Rewards",
        shortDesc: "Estimez vos revenus du programme TikTok Creator Rewards en fonction des vues qualifiées et du RPM.",
        badge: "Programme Créateurs",
        h1: "Calculateur de Revenus TikTok Creator Rewards",
      },
      ja: {
        name: "TikTok クリエイター報酬計算ツール",
        shortDesc: "対象再生回数とRPM（千回再生単価）に基づいてTikTok Creator Rewardsの推定収益を算出。",
        badge: "クリエイター報酬",
        h1: "TikTok Creator Rewards 収益推定計算ツール",
      },
      zh: {
        name: "TikTok 创作者分成计算器",
        shortDesc: "根据合格播放量 (Qualified Views) 与 RPM 估算 TikTok Creator Rewards 收益。",
        badge: "创作者分成",
        h1: "TikTok 创作者奖励计划收益计算器",
        howToSteps: [
          "拖动总播放量滑块，输入单条视频或当月预计的总播放量（例如 50 万播放）。",
          "调整【合格播放比例】（通常 1 分钟以上视频中，完播 ≥5 秒的合格播放占比约 50%~70%）。",
          "根据你的赛道选择或微调 RPM（千次合格播放单价，美区通常在 $0.40 ~ $1.35 美元）。"
        ],
        features: [
          "严格遵循 TikTok 2026 最新 1 分钟以上长视频创作者激励计划 (Creator Rewards Program) 算法规则。",
          "内置生活搞笑、游戏科技、出海金融商业等不同赛道与地区的 RPM 预设档位。",
          "实时推算单条视频分成、4 支爆款视频月收入以及年化潜在收益。"
        ],
        faqs: [
          {
            question: "TikTok Creator Rewards 创作者分成计划的 RPM 一般是多少？",
            answer: "对于 1 分钟以上的原创视频，如果观众主要来自美国、英国等一级地区，RPM 通常在 $0.40 到 $1.20 美元之间。金融、科技、商业教育等高单价垂直领域的 RPM 经常能突破 $1.30+。"
          },
          {
            question: "什么才算 TikTok 的【合格播放量 (Qualified Views)】？",
            answer: "必须满足 4 个条件：1. 视频时长大于 1 分钟；2. 用户在 For You 推荐流中观看；3. 单人观看时长不少于 5 秒；4. 排除同一用户的重复刷量及违规违规判定。"
          }
        ]
      },
    },
  },
  {
    id: "youtube-money-calculator",
    name: "YouTube Video & Shorts Revenue Calculator",
    path: "/youtube-money-calculator",
    category: "Creator & Social",
    categorySlug: "creator",
    shortDesc: "Estimate YouTube AdSense revenue for Long-form Videos and Shorts by views, niche, and audience geography.",
    primaryKeyword: "YouTube Money Calculator",
    secondaryKeywords: ["youtube shorts revenue calculator", "youtube earnings calculator", "youtube cpm calculator", "youtube money calculator 2026"],
    metaTitle: "YouTube Money Calculator 2026 - Long-Form & Shorts AdSense Revenue Estimator",
    metaDescription: "Free online 2026 YouTube money calculator. Accurately model RPM, daily views, niche AdSense rates, and YouTube Shorts payouts.",
    h1: "YouTube Video & Shorts Revenue Calculator (2026)",
    iconName: "PlayCircle",
    badge: "Long-form & Shorts",
    howToSteps: [
      "Select your content format: Long-form Video (8m+ or standard) vs YouTube Shorts.",
      "Enter your estimated daily or monthly view count.",
      "Select your channel niche (Tech, Finance, Gaming, Vlog) to apply realistic RPM benchmarks."
    ],
    features: [
      "Separate dedicated models for Long-form Videos ($2 - $12 RPM) and YouTube Shorts ($0.03 - $0.15 RPM).",
      "Preset niche RPM filters for Tech, Finance, Gaming, Education, and Entertainment.",
      "Dynamic annual revenue projection with visual breakdown."
    ],
    faqs: [
      {
        question: "How much does YouTube pay per 1,000 views?",
        answer: "For standard long-form videos, YouTube creators typically earn between $2.00 and $10.00+ per 1,000 views (RPM). For YouTube Shorts, creators earn between $0.03 and $0.15 per 1,000 views."
      }
    ],
    formulaDesc: "Revenue = (Total Views / 1,000) × RPM",
    locales: {
      en: {
        name: "YouTube Video & Shorts Revenue Calculator",
        shortDesc: "Estimate YouTube AdSense revenue for Long-form Videos and Shorts by views, niche, and audience geography.",
        badge: "Long-form & Shorts",
        h1: "YouTube Video & Shorts Earnings Calculator",
      },
      es: {
        name: "Calculadora de Ingresos YouTube y Shorts",
        shortDesc: "Estima los ingresos de YouTube AdSense para vídeos largos y Shorts según visitas, nicho y país.",
        badge: "Vídeos y Shorts",
        h1: "Calculadora de Ingresos de YouTube y Shorts",
      },
      pt: {
        name: "Calculadora de Receita YouTube e Shorts",
        shortDesc: "Estime a receita do YouTube AdSense para vídeos longos e Shorts por visualizações e nicho.",
        badge: "Vídeos e Shorts",
        h1: "Calculadora de Receita do YouTube e Shorts",
      },
      de: {
        name: "YouTube Video & Shorts Einnahmen Rechner",
        shortDesc: "Schätzen Sie YouTube AdSense-Einnahmen für Long-Form-Videos und Shorts nach Aufrufen und Nische.",
        badge: "Videos & Shorts",
        h1: "YouTube Einnahmen & Shorts Rechner",
      },
      fr: {
        name: "Calculateur de Revenus YouTube et Shorts",
        shortDesc: "Estimez les revenus YouTube AdSense pour les vidéos longues et les Shorts selon les vues et la thématique.",
        badge: "Vidéos et Shorts",
        h1: "Calculateur de Revenus YouTube Vidéos et Shorts",
      },
      ja: {
        name: "YouTube 動画＆Shorts 収益計算ツール",
        shortDesc: "再生回数、ジャンル、視聴者地域に基づいて長尺動画とShortsの推定AdSense収益を算出。",
        badge: "長尺動画＆Shorts",
        h1: "YouTube 動画＆Shorts 収益推定計算ツール",
      },
      zh: {
        name: "YouTube 视频与 Shorts 收益计算器",
        shortDesc: "根据播放量、频道领域与观众地区，估算 YouTube 长视频与 Shorts 广告分成。",
        badge: "长视频与Shorts",
        h1: "YouTube 长视频与 Shorts 创作者收益计算器",
        howToSteps: [
          "选择内容形态：【长视频（8分钟以上或普通长视频）】或【YouTube Shorts 短视频】。",
          "拖动滑块设置你的频道每月总播放量（例如 20 万长视频播放 或 200 万 Shorts 播放）。",
          "根据频道受众国家与赛道（科技、金融、游戏、日常 Vlogs）调整 RPM 单价。"
        ],
        features: [
          "长视频与 Shorts 双模型独立算法（长视频 RPM $2~$12，Shorts 短视频 RPM $0.03~$0.15）。",
          "内置全球欧美高价值地区（Tier 1）的真实广告单价基准数据。",
          "一键换算月度收入、年度收益及日均收益流水。"
        ],
        faqs: [
          {
            question: "YouTube 每 1,000 次播放能赚多少美金？",
            answer: "对于欧美受众的标准长视频，创作者千次播放净收入 (RPM) 通常在 $2.00 到 $10.00 美元之间；金融类长视频甚至可达 $15+。而 Shorts 短视频因为广告分成池机制，每千次播放收益通常在 $0.03 到 $0.15 美元之间。"
          }
        ]
      },
    },
  },
  {
    id: "saas-mrr-calculator",
    name: "SaaS MRR, Churn & LTV Growth Simulator",
    path: "/saas-mrr-calculator",
    category: "SaaS & Growth",
    categorySlug: "saas",
    shortDesc: "Simulate your subscription SaaS growth, churn rate impact, customer lifetime value (LTV), and 12-month ARR.",
    primaryKeyword: "SaaS MRR Calculator",
    secondaryKeywords: ["saas churn calculator", "saas ltv calculator", "saas growth simulator", "saas mrr calculator 2026"],
    metaTitle: "SaaS MRR & Churn Calculator 2026 - 12-Month ARR Growth Simulator",
    metaDescription: "Free online 2026 SaaS financial modeling tool. Simulate Monthly Recurring Revenue (MRR), Churn rate impact, Customer Lifetime Value (LTV), and ARR.",
    h1: "SaaS MRR, Churn & LTV Growth Calculator (2026)",
    iconName: "TrendingUp",
    badge: "B2B & Micro-SaaS",
    howToSteps: [
      "Enter your current customer count and Average Revenue Per User (ARPU / $/month).",
      "Input your monthly new customer acquisition rate and monthly churn percentage.",
      "Inspect the 12-month projection chart showing Net New MRR, ARR, and Customer Lifetime Value."
    ],
    features: [
      "Live 12-month compounded MRR and ARR growth curve visualization.",
      "Calculates Customer Lifetime (months), LTV, and Churned Revenue in real-time.",
      "Interactive sliders for quick scenario planning (Best Case vs Churn Risk)."
    ],
    faqs: [
      {
        question: "How is Customer Lifetime Value (LTV) calculated?",
        answer: "LTV is calculated as: LTV = ARPU / Monthly Churn Rate. For example, a $50/mo plan with 5% churn yields an LTV of $1,000."
      }
    ],
    formulaDesc: "LTV = ARPU / Churn Rate | Next MRR = (Current Users + New - Churned) × ARPU",
    locales: {
      en: {
        name: "SaaS MRR, Churn & LTV Growth Simulator",
        shortDesc: "Simulate your subscription SaaS growth, churn rate impact, customer lifetime value (LTV), and 12-month ARR.",
        badge: "B2B & Micro-SaaS",
        h1: "SaaS Growth, MRR & Churn Calculator",
      },
      es: {
        name: "Simulador de MRR, Churn y LTV para SaaS",
        shortDesc: "Simula el crecimiento de tu SaaS por suscripción, impacto de cancelación, LTV y ARR a 12 meses.",
        badge: "B2B y Micro-SaaS",
        h1: "Calculadora de Crecimiento, MRR y Churn de SaaS",
      },
      pt: {
        name: "Simulador de MRR, Churn e LTV para SaaS",
        shortDesc: "Simule o crescimento do seu SaaS por assinatura, taxa de churn, valor de vida (LTV) e projeção de 12 meses.",
        badge: "B2B e Micro-SaaS",
        h1: "Calculadora de Crescimento, MRR e Churn para SaaS",
      },
      de: {
        name: "SaaS MRR, Churn & LTV Wachstums-Simulator",
        shortDesc: "Simulieren Sie Ihr SaaS-Abonnement-Wachstum, Churn-Auswirkungen, Customer Lifetime Value (LTV) und 12-Monats-ARR.",
        badge: "B2B & Micro-SaaS",
        h1: "SaaS Wachstum, MRR & Churn Rechner",
      },
      fr: {
        name: "Simulateur de Croissance MRR, Churn et LTV SaaS",
        shortDesc: "Modélisez la croissance de votre SaaS, l'impact du churn, la valeur vie client (LTV) et les projections ARR sur 12 mois.",
        badge: "B2B et Micro-SaaS",
        h1: "Calculateur de Croissance MRR et Churn SaaS",
      },
      ja: {
        name: "SaaS MRR・解約率・LTV成長シミュレーター",
        shortDesc: "サブスクリプション型SaaSの成長、解約率（Churn）の影響、LTV、12ヶ月のARR予測をシミュレーション。",
        badge: "B2B＆個人SaaS",
        h1: "SaaS成長・MRR・解約率シミュレーター",
      },
      zh: {
        name: "SaaS MRR、流失率与 LTV 增长模拟器",
        shortDesc: "模拟订阅制 SaaS 业务增长，计算月经常性收入 (MRR)、客户流失率及 12 个月复利预测。",
        badge: "B2B微型SaaS",
        h1: "SaaS 订阅制业务增长、MRR 与流失率模拟器",
        howToSteps: [
          "输入当前付费活跃用户数与客单价（ARPU，例如 $49/月）。",
          "输入每月新增付费客户数与月度流失率百分比（例如每月流失 5%）。",
          "查看右侧 12 个月动态复利增长曲线柱状图、LTV 客户终身价值及预期 ARR。"
        ],
        features: [
          "内置动态 12 个月复利增长模拟算法，直观展示用户流失对长期收入的蚕食影响。",
          "实时推算客户平均留存月数与单个客户终身价值 (LTV)。",
          "帮助独立创客与初创团队快速制定定价策略与保本线。"
        ],
        faqs: [
          {
            question: "客户终身价值 (LTV) 是如何计算的？",
            answer: "计算公式为：LTV = 客单价 (ARPU) ÷ 月流失率。例如，一个每月收费 $49、月流失率为 5% 的产品，其每个客户的平均生命周期价值高达 $980 美元！"
          }
        ]
      },
    },
  },
  {
    id: "shopify-profit-calculator",
    name: "Shopify Profit Margin & ROAS Calculator",
    path: "/shopify-profit-calculator",
    category: "E-Commerce & Stripe",
    categorySlug: "business",
    shortDesc: "Calculate true e-commerce net profit margins factoring in product COGS, ad spend (ROAS), shipping, and payment fees.",
    primaryKeyword: "Shopify Profit Margin Calculator",
    secondaryKeywords: ["ecommerce profit calculator", "roas profit calculator", "dropshipping margin calculator", "shopify calculator 2026"],
    metaTitle: "Shopify Profit Margin & ROAS Calculator 2026 - True Net Profit Solver",
    metaDescription: "Free 2026 Shopify & e-commerce profit calculator. Deduct COGS, ad spend (ROAS/CPA), shipping, and gateway fees to see true net margins.",
    h1: "Shopify & E-Commerce Profit Margin Calculator (2026)",
    iconName: "ShoppingBag",
    badge: "E-Commerce",
    howToSteps: [
      "Enter your product selling price and Cost of Goods Sold (COGS).",
      "Input your estimated Customer Acquisition Cost (Ad Spend / CPA) and shipping expenses.",
      "View your real Net Profit, Net Margin %, and minimum required ROAS to break even."
    ],
    features: [
      "Comprehensive cost breakdown: COGS, Ad Spend, Payment Fees (2.9%+0.30), Shipping, and Returns.",
      "Calculates exact Break-Even ROAS (Return on Ad Spend) required to stay profitable.",
      "Instant visual profit distribution pie and margin indicator."
    ],
    faqs: [
      {
        question: "What is a healthy profit margin for Shopify and e-commerce?",
        answer: "A healthy net profit margin for e-commerce after ad spend, shipping, and COGS is typically between 15% and 25%. Margins above 30% are considered exceptional."
      }
    ],
    formulaDesc: "Net Profit = Revenue - (COGS + Ad Spend + Shipping + Payment Fees)",
    locales: {
      en: {
        name: "Shopify Profit Margin & ROAS Calculator",
        shortDesc: "Calculate true e-commerce net profit margins factoring in product COGS, ad spend (ROAS), shipping, and payment fees.",
        badge: "E-Commerce",
        h1: "E-Commerce & Shopify Net Profit Calculator",
      },
      es: {
        name: "Calculadora de Margen de Beneficio Shopify y ROAS",
        shortDesc: "Calcula el margen neto real considerando coste del producto, publicidad (ROAS), envío y pasarelas de pago.",
        badge: "E-Commerce",
        h1: "Calculadora de Beneficio Neto para Shopify y E-Commerce",
      },
      pt: {
        name: "Calculadora de Margem de Lucro Shopify e ROAS",
        shortDesc: "Calcule a margem de lucro líquido real considerando custos de produto, tráfego pago (ROAS), frete e taxas.",
        badge: "E-Commerce",
        h1: "Calculadora de Lucro Líquido para Shopify e E-Commerce",
      },
      de: {
        name: "Shopify Gewinnspannen & ROAS Rechner",
        shortDesc: "Berechnen Sie echte E-Commerce-Nettogewinnspannen unter Berücksichtigung von Wareneinsatz, Werbekosten (ROAS), Versand und Gebühren.",
        badge: "E-Commerce",
        h1: "E-Commerce & Shopify Reingewinn-Rechner",
      },
      fr: {
        name: "Calculateur de Marge Bénéficiaire Shopify et ROAS",
        shortDesc: "Calculez vos marges nettes réelles en tenant compte du coût produit, des dépenses publicitaires (ROAS), des frais de port et bancaires.",
        badge: "E-Commerce",
        h1: "Calculateur de Bénéfice Net E-Commerce et Shopify",
      },
      ja: {
        name: "Shopify 利益率＆ROAS計算ツール",
        shortDesc: "原価、広告費（ROAS）、送料、決済手数料を考慮してECショップの真の純利益率と損益分岐点を計算。",
        badge: "EC・通販",
        h1: "EC・Shopify 純利益＆ROAS計算ツール",
      },
      zh: {
        name: "Shopify 净利润率与保本 ROAS 计算器",
        shortDesc: "综合商品成本 (COGS)、广告投流费 (CPA)、运费与支付手续费，计算真实净利润。",
        badge: "跨境电商",
        h1: "跨境电商与 Shopify 净利润率及保本 ROAS 计算器",
        howToSteps: [
          "输入单个商品的零售售价与进货/生产成本 (COGS)。",
          "输入每单平均广告投放获客成本 (CPA) 及包装运费。",
          "实时查看单件真实净利润、净利率百分比，以及广告保本最低必须达到的【保本 ROAS】。"
        ],
        features: [
          "全面扣除商品成本、FB/TikTok 广告费、Stripe 手续费（2.9%+$0.30）与运费。",
          "精准推算广告保本点 (Break-Even ROAS)，防止跨境卖家“出单越多亏得越多”。",
          "支持调节每月出单量，直接推算当月电商净利润规模。"
        ],
        faqs: [
          {
            question: "独立站与跨境电商多高的净利润率算健康？",
            answer: "在扣除全部广告投放买量成本、运费、网关手续费和进货成本后，通常 15% 到 25% 的净利润率属于非常健康的独立站业务；若净利润率高于 30%，则属于极具竞争力的超级爆品。"
          }
        ]
      },
    },
  },
  {
    id: "freelance-rate-calculator",
    name: "Freelance Hourly Rate & Tax Calculator",
    path: "/freelance-rate-calculator",
    category: "Freelance & Finance",
    categorySlug: "freelance",
    shortDesc: "Calculate what hourly rate you need to charge to hit your desired annual take-home pay after taxes and overhead.",
    primaryKeyword: "Freelance Hourly Rate Calculator",
    secondaryKeywords: ["hourly to salary calculator", "freelance rate calculator", "consulting rate formula"],
    metaTitle: "Freelance Hourly Rate Calculator - Hit Your Target Income",
    metaDescription: "Calculate the exact hourly rate you should charge as a freelancer or consultant to meet your annual income goals after taxes and unpaid time off.",
    h1: "Freelance Rate & Target Income Calculator",
    iconName: "Briefcase",
    badge: "Freelance",
    howToSteps: [
      "Enter your target annual net take-home salary.",
      "Add your estimated annual business overhead, health insurance, and tax percentage.",
      "Specify your billable hours per week and annual vacation weeks to get your exact minimum hourly rate."
    ],
    features: [
      "Accounts for non-billable administrative time (only 60-70% of freelancer time is billable).",
      "Integrates self-employment taxes, health insurance, and PTO days.",
      "Provides day rate, weekly retainer, and project pricing equivalents."
    ],
    faqs: [
      {
        question: "How many billable hours does a freelancer work per year?",
        answer: "Most full-time freelancers bill between 1,000 and 1,500 hours per year (20-30 billable hours per week), as 25-40% of time is spent on non-billable client acquisition, admin, and learning."
      }
    ],
    formulaDesc: "Hourly Rate = (Target Net + Taxes + Expenses) / (Billable Weeks × Billable Hours/Week)",
    locales: {
      en: {
        name: "Freelance Hourly Rate & Tax Calculator",
        shortDesc: "Calculate what hourly rate you need to charge to hit your desired annual take-home pay after taxes and overhead.",
        badge: "Freelance",
        h1: "Freelance Rate & Target Income Calculator",
      },
      es: {
        name: "Calculadora de Tarifa por Hora para Freelancers",
        shortDesc: "Calcula qué tarifa por hora debes cobrar para alcanzar tus ingresos deseados después de impuestos y gastos.",
        badge: "Freelance",
        h1: "Calculadora de Tarifa por Hora e Ingresos Freelance",
      },
      pt: {
        name: "Calculadora de Valor por Hora para Freelancers",
        shortDesc: "Calcule quanto cobrar por hora para atingir sua meta de renda anual após impostos e despesas.",
        badge: "Freelancer",
        h1: "Calculadora de Valor por Hora para Freelancers",
      },
      de: {
        name: "Freelancer Stundensatz & Steuer Rechner",
        shortDesc: "Berechnen Sie den Stundensatz, den Sie verlangen müssen, um Ihr gewünschtes Nettoeinkommen nach Steuern zu erreichen.",
        badge: "Freelancer",
        h1: "Freelancer Stundensatz- & Einkommensrechner",
      },
      fr: {
        name: "Calculateur de Taux Horaire Freelance et Impôts",
        shortDesc: "Calculez le tarif horaire à facturer pour atteindre vos objectifs de revenu net annuel après impôts et charges.",
        badge: "Freelance",
        h1: "Calculateur de Tarif Horaire pour Freelances",
      },
      ja: {
        name: "フリーランス時給＆税金計算ツール",
        shortDesc: "目標年収、経費、税率、稼働時間から逆算して、設定すべき適正な最低時給・日給を算出。",
        badge: "フリーランス",
        h1: "フリーランス適正時給＆目標年収逆算ツール",
      },
      zh: {
        name: "自由职业者真实时薪与税费计算器",
        shortDesc: "结合目标税后年薪、日常开销、税率与可计费工时，反推自由职业者最低应收取的时薪。",
        badge: "自由职业",
        h1: "自由职业者目标年薪与最低计费时薪计算器",
        howToSteps: [
          "输入你期望的年度税后纯到手薪资（例如 $85,000 美元/年）。",
          "输入每年的商业开销、医保与预估综合税率（例如 25%）。",
          "设置每周实际可计费工时与带薪休假周数，系统将自动反推最低安全时薪与日薪。"
        ],
        features: [
          "考虑自由职业者 30%~40% 的非计费时间（找客户、沟通、学习无法计费）。",
          "综合自雇税收、社保成本与无薪休假，杜绝低价接单亏本陷阱。",
          "同时给出时薪报价、日薪报价与按月签约（Monthly Retainer）的标准价格。"
        ],
        faqs: [
          {
            question: "自由职业者一年通常有多少小时能真正计费？",
            answer: "全职自由职业者一年真正能向客户计费的工时一般在 1,000 到 1,400 小时之间（每周约 20~25 小时）。因为大量时间需要用于商务沟通、开票管理与技术沉淀，所以不能直接拿 40 小时折算时薪！"
          }
        ]
      },
    },
  },
  {
    id: "percentage-calculator",
    name: "Fast Percentage & Discount Calculator",
    path: "/percentage-calculator",
    category: "Freelance & Finance",
    categorySlug: "freelance",
    shortDesc: "Quickly compute percentage increase/decrease, discount savings, percentage of a number, and reverse percentages.",
    primaryKeyword: "Percentage Calculator",
    secondaryKeywords: ["discount calculator", "percentage increase calculator", "percent change"],
    metaTitle: "Percentage Calculator - Fast Percent Increase, Discount & Change",
    metaDescription: "Free online percentage calculator. Calculate percentage increase, decrease, discount savings, and fraction to percentage instantly.",
    h1: "Online Percentage & Discount Calculator",
    iconName: "Percent",
    badge: "Essential",
    howToSteps: [
      "Choose your calculation mode: Percentage of a Value, Percent Increase/Decrease, or Discount.",
      "Enter the numbers in the respective input fields.",
      "Results and step-by-step mathematical breakdown update in real time."
    ],
    features: [
      "3-in-1 tool: What is X% of Y, Percentage Change (Increase/Decrease), and Sale Discount.",
      "Real-time instant calculation on every keystroke.",
      "Step-by-step mathematical explanation included."
    ],
    faqs: [
      {
        question: "How do you calculate percentage increase?",
        answer: "Percentage Increase = ((New Value - Original Value) / Original Value) × 100%."
      }
    ],
    formulaDesc: "Result = (Percentage / 100) × Total Value",
    locales: {
      en: {
        name: "Fast Percentage & Discount Calculator",
        shortDesc: "Quickly compute percentage increase/decrease, discount savings, percentage of a number, and reverse percentages.",
        badge: "Essential",
        h1: "Online Percentage & Discount Calculator",
      },
      es: {
        name: "Calculadora Rápida de Porcentajes y Descuentos",
        shortDesc: "Calcula rápidamente aumentos/disminuciones porcentuales, ahorros de descuento y porcentajes de números.",
        badge: "Esencial",
        h1: "Calculadora de Porcentajes y Descuentos en Línea",
      },
      pt: {
        name: "Calculadora Rápida de Porcentagem e Descontos",
        shortDesc: "Calcule aumentos/reduções percentuais, descontos de compras e porcentagem de valores rapidamente.",
        badge: "Essencial",
        h1: "Calculadora de Porcentagem e Descontos Online",
      },
      de: {
        name: "Schneller Prozent- & Rabattrechner",
        shortDesc: "Berechnen Sie prozentuale Steigerungen/Senkungen, Rabattersparnisse und Anteile in Sekundenschnelle.",
        badge: "Basis",
        h1: "Online Prozent- & Rabattrechner",
      },
      fr: {
        name: "Calculateur Rapide de Pourcentage et Remise",
        shortDesc: "Calculez rapidement les augmentations/diminutions en pourcentage, remises et calculs inverses.",
        badge: "Essentiel",
        h1: "Calculateur de Pourcentage et Remise en Ligne"
      },
      ja: {
        name: "高速パーセント＆割引計算ツール",
        shortDesc: "割合計算、パーセント増減率、セール割引額、逆算パーセンテージを即座に計算。",
        badge: "必須ツール",
        h1: "オンライン パーセント＆割引計算ツール",
      },
      zh: {
        name: "极速百分比与打折计算器",
        shortDesc: "快速计算百分比增减、折扣节省金额、数值百分比及逆向百分比换算。",
        badge: "基础高频",
        h1: "在线百分比与打折收益计算器",
        howToSteps: [
          "选择你需要计算的模式：【数值的百分之几】、【百分比增减幅度】或【购物打折省多少】。",
          "在对应的输入框中填入数值，结果将即时呈现。",
          "查看下方自动生成的数学运算逻辑与公式说明。"
        ],
        features: [
          "三合一高频聚合：覆盖 X 的 Y% 是多少、涨跌幅百分比与打折立减计算。",
          "随输随算，0 毫秒即时刷新结果。",
          "提供清晰的数学公式推导与分步解释。"
        ],
        faqs: [
          {
            question: "百分比增加（涨幅）是如何计算的？",
            answer: "计算公式为：涨幅百分比 = ((新数值 - 原数值) ÷ 原数值) × 100%。例如从 80 涨到 120，涨幅为 ((120-80)/80) × 100% = +50%。"
          }
        ]
      },
    },
  },
  {
    id: "paypal-fee-calculator",
    name: "PayPal Fee Calculator (2026)",
    path: "/paypal-fee-calculator",
    category: "E-Commerce & Stripe",
    categorySlug: "business",
    shortDesc: "Calculate exact PayPal merchant, friends & family, and international cross-border transaction fees.",
    primaryKeyword: "PayPal Fee Calculator",
    secondaryKeywords: ["paypal fee calculator 2026", "paypal seller fee calculator", "paypal fees invoice reverse"],
    metaTitle: "PayPal Fee Calculator 2026 - Exact Domestic & International Seller Fees",
    metaDescription: "Free online 2026 PayPal fee calculator. Calculate exact domestic (3.49% + $0.49), invoicing (2.99%), and international cross-border seller fees with reverse solver.",
    h1: "PayPal Fee & Net Payout Calculator (2026)",
    iconName: "CreditCard",
    badge: "PayPal 2026",
    howToSteps: [
      "Enter the transaction amount you want to receive or charge.",
      "Select your payment scenario: Standard Goods & Services (3.49% + $0.49), Invoicing (2.99%), or International (+1.50%).",
      "View exact deductions, final balance, and the exact reverse amount to invoice to cover all fees."
    ],
    features: [
      "Official 2026 PayPal US merchant rates (3.49% + $0.49) and invoicing rates (2.99% + $0.49).",
      "Reverse fee calculation: Calculates the exact billable amount to net full value.",
      "100% private in-browser computation with zero server logging."
    ],
    faqs: [
      {
        question: "What are the standard PayPal seller fees in 2026?",
        answer: "For standard US transactions, PayPal charges 3.49% + $0.49 per transaction. For invoices and checkout, the rate is 2.99% + $0.49. International transactions carry an additional 1.50% fee."
      },
      {
        question: "How do I avoid losing money to PayPal fees?",
        answer: "Use the reverse calculation feature to invoice your client the gross amount, so that after PayPal deducts its percentage and fixed fee, you receive 100% of your target net."
      }
    ],
    formulaDesc: "Fee = (Amount × Rate) + Fixed Fee | Net = Amount - Fee | Reverse = (Target + Fixed) / (1 - Rate)",
    locales: {
      en: {
        name: "PayPal Fee Calculator",
        shortDesc: "Calculate exact PayPal merchant, invoicing, and international cross-border transaction fees.",
        badge: "PayPal 2026",
        h1: "PayPal Fee & Net Payout Calculator",
      },
      es: {
        name: "Calculadora de Comisiones PayPal",
        shortDesc: "Calcula comisiones exactas de ventas PayPal nacionales e internacionales.",
        badge: "PayPal 2026",
        h1: "Calculadora de Comisiones de PayPal",
      },
      pt: {
        name: "Calculadora de Taxas PayPal",
        shortDesc: "Calcule taxas de vendas PayPal nacionais e internacionais e valor líquido.",
        badge: "PayPal 2026",
        h1: "Calculadora de Taxas do PayPal",
      },
      de: {
        name: "PayPal Gebührenrechner",
        shortDesc: "Berechnen Sie exakte PayPal-Verkäufergebühren und internationale Transaktionen.",
        badge: "PayPal 2026",
        h1: "PayPal Gebühren- & Auszahlungsrechner",
      },
      fr: {
        name: "Calculateur de Frais PayPal",
        shortDesc: "Calculez les frais de vente PayPal nationaux et internationaux exacts.",
        badge: "PayPal 2026",
        h1: "Calculateur de Frais PayPal Marchand",
      },
      ja: {
        name: "PayPal 手数料計算ツール",
        shortDesc: "PayPalの国内・海外取引手数料、請求書決済手数料、逆算受取額を正確に計算。",
        badge: "PayPal 2026",
        h1: "PayPal 決済手数料＆手取り額計算ツール",
      },
      zh: {
        name: "PayPal 交易手续费计算器",
        shortDesc: "精确计算 PayPal 标准商户收款 (3.49%+$0.49)、账单开票 (2.99%) 与跨境国际卡扣费及反向开票金额。",
        badge: "PayPal 2026",
        h1: "PayPal 卖家交易手续费与反向开票计算器",
        howToSteps: [
          "输入计划收取的交易总额（例如 $100.00 美元）。",
          "选择预设模式：【标准买家付款 (3.49%+$0.49)】、【PayPal 账单 (2.99%+$0.49)】或勾选【跨境国际卡 (+1.5%)】。",
          "实时查看扣除的 PayPal 手续费净额，以及确保实收到手不打折的【反向开票推荐金额】。"
        ],
        features: [
          "适配 2026 PayPal 最新商户与个人收单阶梯费率规则。",
          "独家反向开票公式：直接算出向买家收多少钱，扣完手续费刚好到手目标金额。",
          "100% 浏览器纯本地计算，零延迟秒出结果，绝不保存任何商业敏感数字。"
        ],
        faqs: [
          {
            question: "PayPal 2026 年的标准商户费率是多少？",
            answer: "美国本土标准商品与服务收款为 3.49% + $0.49 美元；在线结账/账单为 2.99% + $0.49 美元；跨境国际付款需额外加收 1.50% 跨境附加费。"
          }
        ]
      },
    },
  },
  {
    id: "etsy-fee-calculator",
    name: "Etsy Fee & Profit Calculator (2026)",
    path: "/etsy-fee-calculator",
    category: "E-Commerce & Stripe",
    categorySlug: "business",
    shortDesc: "Calculate exact Etsy seller fees, listing costs, payment processing, offsite ads, and true net profit margin.",
    primaryKeyword: "Etsy Fee Calculator",
    secondaryKeywords: ["etsy profit calculator", "etsy seller fees 2026", "etsy margin calculator", "etsy pricing tool"],
    metaTitle: "Etsy Fee & Profit Calculator 2026 - Exact Listing & Transaction Margins",
    metaDescription: "Free online 2026 Etsy fee and profit calculator. Factor in listing fees ($0.20), 6.5% transaction fee, 3%+$0.25 payment processing, and offsite ads.",
    h1: "Etsy Fee & Net Profit Calculator (2026)",
    iconName: "ShoppingBag",
    badge: "Etsy 2026",
    howToSteps: [
      "Enter your item sale price and shipping fee charged to the buyer.",
      "Input your item production/material cost (COGS) and actual postage packaging expenses.",
      "Select your Etsy Offsite Ads status (0%, 12%, or 15%) to view your real net profit and margin %."
    ],
    features: [
      "Fully compliant with latest 2026 Etsy official fee structure: $0.20 Listing + 6.5% Transaction + 3%+$0.25 Payment Processing.",
      "Supports 12% and 15% Etsy Offsite Ads deduction modeling.",
      "Instant visual profit margin % indicator and copyable calculation summary."
    ],
    faqs: [
      {
        question: "How much does Etsy take per sale in 2026?",
        answer: "Etsy charges a $0.20 listing fee, a 6.5% transaction fee on total order value (item + shipping charged), and a 3% + $0.25 payment processing fee (in the US). In total, Etsy takes roughly 9.5% to 10% + $0.45 per sale without Offsite Ads."
      },
      {
        question: "What is the Etsy Offsite Ads fee?",
        answer: "If a sale is generated from Etsy's Google/Bing/social media advertising, Etsy charges an additional 15% (for shops making under $10k/yr) or 12% (mandatory for shops making over $10k/yr)."
      }
    ],
    formulaDesc: "Profit = Revenue - (COGS + Postage + $0.20 Listing + 6.5% Trans + (3% + $0.25) Processing + Offsite Ads)",
    locales: {
      en: {
        name: "Etsy Fee & Profit Calculator",
        shortDesc: "Calculate exact Etsy seller fees, listing costs, payment processing, offsite ads, and true net profit margin.",
        badge: "Etsy 2026",
        h1: "Etsy Fee & Net Profit Calculator",
      },
      es: {
        name: "Calculadora de Comisiones y Beneficio Etsy",
        shortDesc: "Calcula comisiones exactas de Etsy, publicación, pasarela y margen neto real.",
        badge: "Etsy 2026",
        h1: "Calculadora de Comisiones y Beneficio de Etsy",
      },
      pt: {
        name: "Calculadora de Taxas e Lucro Etsy",
        shortDesc: "Calcule taxas do Etsy, anúncio, processamento de pagamento e lucro líquido real.",
        badge: "Etsy 2026",
        h1: "Calculadora de Taxas e Lucro para Etsy",
      },
      de: {
        name: "Etsy Gebühren- & Reingewinn-Rechner",
        shortDesc: "Berechnen Sie exakte Etsy-Verkäufergebühren, Einstellgebühren und Reingewinnspannen.",
        badge: "Etsy 2026",
        h1: "Etsy Gebühren- & Gewinnspannen-Rechner",
      },
      fr: {
        name: "Calculateur de Frais et Bénéfice Etsy",
        shortDesc: "Calculez les frais de vente Etsy exacts, frais de mise en vente et marge nette réelle.",
        badge: "Etsy 2026",
        h1: "Calculateur de Frais et Bénéfice Net Etsy",
      },
      ja: {
        name: "Etsy 手数料＆純利益計算ツール",
        shortDesc: "出品料（$0.20）、取引手数料（6.5%）、決済手数料（3%+$0.25）、外部広告費を差し引いたEtsyの真の純利益率を算出。",
        badge: "Etsy 2026",
        h1: "Etsy 販売手数料＆利益率計算ツール",
      },
      zh: {
        name: "Etsy 卖家手续费与净利润率计算器",
        shortDesc: "扣除刊登费 ($0.20)、交易费 (6.5%)、支付处理费 (3%+$0.25) 与站外广告分成，计算手作与独立电商真实净利润。",
        badge: "Etsy 2026",
        h1: "Etsy 卖家全项抽成与单件净利润率计算器",
        howToSteps: [
          "输入商品售价与向买家收取的运费金额（总订单金额）。",
          "输入商品制作原材料成本 (COGS) 与打包发货的真实物流支出。",
          "选择是否出单触发了 Etsy 站外广告 (Offsite Ads 15% 或 12%)，立即得出单笔真实净赚美金数与净利率。"
        ],
        features: [
          "严格适配 2026 Etsy 官方标准：$0.20 刊登费 + 6.5% 订单交易费 + 3%+$0.25 支付处理费。",
          "全网首家支持 Etsy 站外广告 (Offsite Ads 12%/15%) 阶梯抽成模拟。",
          "一键复制标准化测算摘要，方便手作达人与跨境卖家快速定价核算。"
        ],
        faqs: [
          {
            question: "Etsy 2026 年每笔订单大约抽成多少？",
            answer: "Etsy 基础抽成约为：每件刊登费 $0.20 + 订单总额 6.5% 交易费 + 3%+$0.25 支付手续费。在没有触发站外广告的情况下，综合扣费比例约为订单总额的 9.5% ~ 10% + $0.45 美元。"
          }
        ]
      },
    },
  }
];

export function getCalculatorById(id: string): CalculatorItem | undefined {
  return CALCULATORS.find((calc) => calc.id === id);
}

export function getCalculatorsByCategory(categorySlug: string): CalculatorItem[] {
  return CALCULATORS.filter((calc) => calc.categorySlug === categorySlug);
}

export function getLocalizedCalculator(calc: CalculatorItem, lang: Language) {
  const loc = calc.locales[lang] || calc.locales.en;
  const rawCat = CATEGORIES.find((c) => c.id === calc.categorySlug);
  const localizedCatName = rawCat ? (rawCat.locales[lang]?.name || rawCat.name) : calc.category;
  return {
    ...calc,
    category: localizedCatName,
    name: loc.name,
    shortDesc: loc.shortDesc,
    badge: loc.badge || calc.badge,
    h1: loc.h1,
    howToSteps: loc.howToSteps || calc.howToSteps,
    features: loc.features || calc.features,
    faqs: loc.faqs || calc.faqs,
  };
}

export function getLocalizedCategory(cat: CategoryItem, lang: Language) {
  const loc = cat.locales[lang] || cat.locales.en;
  return {
    ...cat,
    name: loc.name,
    description: loc.description,
  };
}
