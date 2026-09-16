import {
  FiAlertTriangle,
  FiBarChart2,
  FiBell,
  FiBox,
  FiClock,
  FiCpu,
  FiFileText,
  FiGlobe,
  FiHelpCircle,
  FiHome,
  FiInstagram,
  FiLayers,
  FiList,
  FiMail,
  FiMessageCircle,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiShoppingBag,
  FiShoppingCart,
  FiTag,
  FiTrendingUp,
  FiZap,
} from 'react-icons/fi';

export const navLinks = [
  { label: 'Product', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Live Demo', href: '/live-demo' },
];

export const siteUrl = 'https://www.teviq.in';

export const seoByPath = {
  '/': {
    title: 'Teviq Support AI – AI Support & Sales for D2C Brands',
    description: 'One AI support brain across your website and WhatsApp. Teviq tracks orders, handles returns, answers with live Shopify data, and turns pre-sale questions into sales for D2C ecommerce brands.',
  },
  '/product': {
    title: 'Product | Teviq Support AI',
    description: 'An AI support brain for D2C brands across website and WhatsApp — order tracking, returns, live Shopify context, pre-sale objection handling, and safe human escalation.',
  },
  '/pricing': {
    title: 'Pricing | Teviq AI',
    description: 'Simple Teviq AI pricing for D2C ecommerce brands. Website widget and WhatsApp support included from day one.',
  },
  '/book-demo': {
    title: 'Book a Demo | Teviq AI',
    description: 'Request a personalized walkthrough of Teviq Support AI for your D2C ecommerce brand.',
  },
  '/case-studies': {
    title: 'Case Studies | Teviq AI',
    description: 'See results from Teviq AI customer support automation for growing D2C ecommerce teams.',
  },
  '/live-demo': {
    title: 'Live Demo | Teviq AI',
    description: 'Try Teviq Support AI on three demo storefronts covering order tracking, returns, and product questions.',
  },
  '/privacy': {
    title: 'Customer Data & Privacy Policy | Teviq AI',
    description: 'Learn how Teviq stores, isolates, retains, and deletes brand and customer support data.',
  },
  '/policies': {
    title: 'Policies & Service Information | Teviq AI',
    description: 'Review Teviq subscription, refund, privacy, pricing, support, and onboarding policies.',
  },
  '/policies/refund-policy': {
    title: 'Refund Policy | Teviq AI',
    description: 'Review Teviq free-trial access, paid subscription refunds, and billing-cycle terms.',
  },
  '/policies/subscription-cancellation': {
    title: 'Subscription Cancellation Policy | Teviq AI',
    description: 'Learn how Teviq subscription cancellation, continued access, and resubscription work.',
  },
  '/policies/pricing-and-plans': {
    title: 'Pricing & Plans Policy | Teviq AI',
    description: 'Review Teviq early-access pricing, price-lock terms, and planned Growth pricing.',
  },
  '/policies/support-response-time': {
    title: 'Support Response Time | Teviq AI',
    description: 'Review Teviq support availability, response expectations, and contact details.',
  },
  '/policies/setup-and-onboarding': {
    title: 'Setup & Onboarding | Teviq AI',
    description: 'Learn what is involved in Teviq setup, widget installation, and store connection.',
  },
  '/terms': {
    title: 'Terms of Service | Teviq AI',
    description: 'Read the terms for using Teviq AI products and implementation support.',
  },
  '/blog': {
    title: 'Blog | Teviq AI',
    description: 'Insights and product thinking from Teviq AI.',
  },
  '/help': {
    title: 'Help Center | Teviq AI',
    description: 'Setup guides and support resources for Teviq AI.',
  },
};

// Support channels the one brain answers across.
export const channels = [
  {
    name: 'Website Widget',
    status: 'Live',
    statusStyle: 'bg-[#DCFCE7] text-[#16A34A]',
    icon: FiMessageCircle,
    body: 'One script on your storefront. A premium support panel that answers instantly, with product cards, order tracking and quick replies.',
  },
  {
    name: 'WhatsApp',
    status: 'Live',
    statusStyle: 'bg-[#DCFCE7] text-[#16A34A]',
    icon: FiMessageCircle,
    body: 'Connect your WhatsApp Business number through the Meta Cloud API. The same support brain replies on WhatsApp, with human handoff inside the 24-hour window.',
  },
  {
    name: 'Instagram DM',
    status: 'Coming soon',
    statusStyle: 'bg-[#DBEAFE] text-[#1D4ED8]',
    icon: FiInstagram,
    body: 'Bring the same brand-aware answers to Instagram direct messages, built on the same channel-adapter layer as WhatsApp.',
  },
  {
    name: 'Email',
    status: 'Roadmap',
    statusStyle: 'bg-[#EDE9FE] text-[#6D28D9]',
    icon: FiMail,
    body: 'Route support inbox threads through the same policies, order context and escalation rules your live channels already use.',
  },
];

// The "beyond a chat bubble" pillars — what makes Teviq more than a bot.
export const capabilities = [
  {
    icon: FiLayers,
    title: 'One brain, every channel',
    body: 'Website and WhatsApp share the same brand knowledge, policies, order context and conversation state — so a customer never repeats themselves when they switch channels.',
  },
  {
    icon: FiTrendingUp,
    title: 'Sells while it supports',
    body: 'Teviq handles pre-purchase objections — price, trust, delivery, COD and size/fit — turning “is this worth it?” hesitation into checkouts instead of lost carts.',
  },
  {
    icon: FiShoppingCart,
    title: 'Live commerce data',
    body: 'A real Shopify connection with encrypted tokens and webhooks. Order status, fulfillment and product answers are pulled live and identity-verified — never guessed.',
  },
  {
    icon: FiSearch,
    title: 'Knowledge Brain (RAG)',
    body: 'Upload PDFs, policies and FAQs. Teviq retrieves the right passage with vector search and answers from your brand — with low-confidence, high-risk questions failing safely instead of hallucinating.',
  },
];

export const productModules = [
  {
    title: 'Order Tracking',
    subtitle: 'Live, identity-verified order status pulled from Shopify — no manual reply, no guessing.',
    icon: FiBox,
  },
  {
    title: 'Returns & Exchanges',
    subtitle: 'A guided, multi-turn flow that checks your policy and order status before starting a return.',
    icon: FiRefreshCw,
  },
  {
    title: 'Order Cancellation',
    subtitle: 'Confirms intent, captures a reason, and cancels through Shopify when eligible.',
    icon: FiClock,
  },
  {
    title: 'Shipping & Delivery',
    subtitle: 'Reduce repetitive delivery-time, shipping-fee, COD and dispatch tickets with instant answers.',
    icon: FiGlobe,
  },
  {
    title: 'Product FAQs & Recommendations',
    subtitle: 'Answers product questions from your knowledge base and shows real catalog cards with links.',
    icon: FiShoppingBag,
  },
  {
    title: 'Pre-Sale Objection Handling',
    subtitle: 'Turns price, trust, delivery, COD and size/fit hesitation into confident purchases.',
    icon: FiTrendingUp,
  },
  {
    title: 'WhatsApp Support',
    subtitle: 'The same brain on your WhatsApp Business number via the Meta Cloud API, with human handoff.',
    icon: FiMessageCircle,
  },
  {
    title: 'Human Escalation',
    subtitle: 'Fraud, legal, abuse and sensitive complaints bypass AI and move toward your team.',
    icon: FiAlertTriangle,
  },
];

export const resourceNavItems = [
  { title: 'Blog', subtitle: 'Ideas for AI-led support teams', icon: FiFileText, href: '/blog' },
  { title: 'Help Center', subtitle: 'Guides, setup, and support', icon: FiHelpCircle, href: '/help' },
  { title: 'Policies', subtitle: 'Billing, data, and service information', icon: FiList, href: '/policies' },
  { title: 'Privacy Policy', subtitle: 'How Teviq handles data', icon: FiShield, href: '/privacy' },
  { title: 'Terms of Service', subtitle: 'Usage terms and service policies', icon: FiShield, href: '/terms' },
];

export const platformCards = [
  {
    badge: 'Live',
    badgeStyle: 'bg-[#DCFCE7] text-[#16A34A]',
    icon: FiMessageCircle,
    title: 'Website + WhatsApp',
    body: 'One AI support brain answering across your storefront widget and WhatsApp Business number today — orders, returns, FAQs, product questions and escalation with full brand context.',
    note: 'Available now',
  },
  {
    badge: 'Live',
    badgeStyle: 'bg-[#DCFCE7] text-[#16A34A]',
    icon: FiShoppingCart,
    title: 'Live Shopify + Knowledge',
    body: 'Real Shopify orders and products, plus a RAG knowledge brain trained on your policies, PDFs and FAQs — answering from your brand, not the open internet.',
  },
  {
    badge: 'Rolling out',
    badgeStyle: 'bg-[#DBEAFE] text-[#1D4ED8]',
    icon: FiInstagram,
    title: 'Instagram & Analytics',
    body: 'Instagram DM support and deeper resolution, escalation and missed-question analytics through the same support brain as brands scale.',
  },
];

export const painCards = [
  {
    icon: FiMessageCircle,
    title: 'The same questions, every single day',
    body: "Where is my order? Can I return this? Is COD available? Your team answers the same tickets again and again across chat and WhatsApp.",
  },
  {
    icon: FiClock,
    title: 'Support eats the hours growth needs',
    body: 'Order status, returns, refunds and shipping updates pull time away from product, marketing and customer recovery.',
  },
  {
    icon: FiRefreshCw,
    title: 'Policy mistakes create angry customers',
    body: 'Manual replies can accidentally promise refunds or returns before checking order status and brand policy.',
  },
  {
    icon: FiShoppingBag,
    title: 'Unanswered questions cost sales',
    body: 'A shopper waiting on a size, COD, trust or delivery answer often leaves before your team responds — a sale lost to silence.',
  },
  {
    icon: FiBarChart2,
    title: 'Manual support does not scale',
    body: 'Peak hours, sale days and ad campaigns create support spikes that small teams cannot handle by hand.',
  },
];

export const features = [
  {
    icon: FiBox,
    title: 'Live Order Tracking',
    body: 'Customers get real, identity-verified order status pulled straight from Shopify — instantly, instead of waiting for a manual reply.',
    image: '',
  },
  {
    icon: FiRefreshCw,
    title: 'Returns & Exchanges',
    body: 'A guided multi-turn flow checks your policy and order context before walking a customer through a return or exchange.',
    image: '',
  },
  {
    icon: FiMessageCircle,
    title: 'WhatsApp Channel',
    body: 'Connect your WhatsApp Business number via the Meta Cloud API. The same brain answers there, with human handoff inside the 24-hour window.',
    image: '',
  },
  {
    icon: FiTrendingUp,
    title: 'Pre-Sale Objection Handling',
    body: 'Price, trust, delivery, COD and size/fit hesitation are handled like a good salesperson — turning browsers into buyers.',
    image: '',
  },
  {
    icon: FiSearch,
    title: 'Knowledge Brain (RAG)',
    body: 'Train Teviq on policies, PDFs and FAQs. Vector search retrieves the right answer and cites its source, so replies stay brand-specific.',
    image: '',
  },
  {
    icon: FiGlobe,
    title: 'Hinglish & Multilingual',
    body: 'The brain detects English, Hindi and Hinglish messages and replies short, natural and on brand.',
    image: '',
  },
  {
    icon: FiAlertTriangle,
    title: 'Safe Human Escalation',
    body: 'Fraud, legal, abuse and sensitive complaints bypass AI entirely and move toward your support team.',
    image: '',
  },
  {
    icon: FiShoppingBag,
    title: 'Product Cards & Recommendations',
    body: 'Answers product questions and surfaces real catalog cards with working links using live store context.',
    image: '',
  },
];

// Honest market comparison. Competitors genuinely do many things well —
// the point is the combination Teviq gives Indian D2C brands, not that
// everyone else scores "no".
export const comparisonColumns = ['Feature', 'DIY / cheap bot', 'Enterprise helpdesk', 'Teviq AI'];

export const comparisonRows = [
  ['Website + WhatsApp in one brain', 'limited', 'yes', 'yes'],
  ['Live Shopify order & product data', 'no', 'yes', 'yes'],
  ['Brand knowledge base (RAG)', 'limited', 'yes', 'yes'],
  ['Handles pre-sale objections', 'no', 'no', 'yes'],
  ['Return & cancellation logic checks', 'no', 'limited', 'yes'],
  ['Hinglish-native replies', 'limited', 'limited', 'yes'],
  ['Human escalation rules', 'limited', 'yes', 'yes'],
  ['Go live in minutes, no dev team', 'yes', 'no', 'yes'],
  ['Deep enterprise/large-team tooling', 'no', 'yes', 'limited'],
  ['Priced for early Indian D2C', 'yes', 'no', 'yes'],
];

export const pricingPlans = [
  {
    name: 'Starter',
    monthly: '₹999',
    period: '/month',
    tagline: 'AI support on your website, live in minutes.',
    channels: ['Website widget'],
    features: [
      'Website AI support widget',
      'Live order tracking & FAQs',
      'Returns & exchange guidance',
      'Brand policy, PDF & FAQ training',
      'Product cards & recommendations',
      'Email support',
    ],
    cta: 'Get Started',
    accent: 'from-zinc-700 to-zinc-900',
  },
  {
    name: 'Standard',
    monthly: '₹2,499',
    period: '/month',
    tagline: 'One brain across your website and WhatsApp.',
    badge: 'Most popular',
    highlight: true,
    channels: ['Website widget', 'WhatsApp'],
    features: [
      'Everything in Starter',
      'WhatsApp Business channel',
      'Unified conversation memory',
      'Pre-sale objection handling',
      'Human handoff on WhatsApp',
      'Priority onboarding',
    ],
    cta: 'Get Started',
    accent: 'from-indigo to-sky',
  },
  {
    name: 'Growth',
    monthly: '₹3,199',
    period: '/month',
    tagline: 'Every channel your customers reach out on.',
    badge: 'Instagram in progress',
    inProgress: true,
    channels: ['Website widget', 'WhatsApp', 'Instagram DM'],
    features: [
      'Everything in Standard',
      'Instagram DM support',
      'Omnichannel inbox',
      'Advanced analytics & insights',
      'Dedicated onboarding support',
    ],
    cta: 'Join the waitlist',
    accent: 'from-fuchsia-500 to-indigo',
  },
];

export const steps = [
  {
    number: '01',
    title: 'Connect your store or upload policies',
    body: 'Connect Shopify or upload product FAQs, return rules and shipping policy. We shape Teviq around your real support flow.',
  },
  {
    number: '02',
    title: 'Teviq learns your brand knowledge',
    body: 'The support brain uses your policies, FAQs, products, live orders and escalation rules before it answers a single customer.',
  },
  {
    number: '03',
    title: 'Go live on website and WhatsApp',
    body: 'Add one script to your storefront and connect your WhatsApp Business number. The same brain answers on both channels.',
  },
  {
    number: '04',
    title: 'Customers get instant answers',
    body: 'Shoppers ask about orders, returns, shipping and products — while sensitive cases move safely toward your human team.',
  },
];

export const faqs = [
  {
    question: 'Which channels does Teviq support today?',
    answer: 'The website widget and WhatsApp are both live. WhatsApp connects through your own WhatsApp Business number via the Meta Cloud API, and both channels share one support brain. Instagram DM and email are on the roadmap.',
  },
  {
    question: 'Do I need technical knowledge to set up Teviq?',
    answer: 'No. We help pilot brands with setup, widget installation, WhatsApp connection and knowledge configuration. You mainly share policies, FAQs and support rules.',
  },
  {
    question: 'Does it connect to my real Shopify store?',
    answer: 'Yes. Teviq has a live Shopify connector with a secure OAuth install and encrypted tokens. It reads order status, fulfillment and products in real time, and verifies identity (order plus matching email or phone) before sharing order details.',
  },
  {
    question: 'Can Teviq actually help me sell, not just support?',
    answer: 'Yes. Teviq handles pre-sale objections — price, trust, delivery, COD and size/fit — the way a good salesperson would, so hesitant shoppers convert instead of leaving.',
  },
  {
    question: "What happens if the AI doesn't know the answer?",
    answer: "Teviq answers from your brand knowledge and policy rules with a confidence check. If confidence is low or the issue is sensitive, it responds carefully and can guide the customer toward human support instead of guessing.",
  },
  {
    question: 'Can Teviq answer in Hinglish?',
    answer: 'Yes. The support brain detects English, Hindi and Hinglish-style messages and keeps replies short and brand-toned.',
  },
  {
    question: 'Can I update policies later?',
    answer: 'Yes. Brand knowledge is designed to be updated anytime your return rules, shipping rules, FAQs and products change.',
  },
];

export const roiMetrics = [
  {
    value: '24/7',
    title: 'Instant replies, both channels',
    body: 'Answers common questions on your website and WhatsApp whenever shoppers need help — not only when your team is online.',
  },
  {
    value: 'Fewer',
    title: 'Repetitive tickets',
    body: 'Order, return, shipping and FAQ workload is deflected automatically so your team focuses on what matters.',
  },
  {
    value: 'More',
    title: 'Carts recovered by answering',
    body: 'Pre-sale objection handling turns price, trust and delivery hesitation into completed checkouts.',
  },
];

export const dashboardPreview = [
  ['Knowledge uploads', 'Upload PDFs, policies, FAQs and brand rules.'],
  ['AI playground', 'Test answers before customers ever see them.'],
  ['Shopify connection', 'Live order, fulfillment and product sync.'],
  ['WhatsApp inbox', 'Read conversations and reply as a human.'],
  ['Analytics', 'Track intents, escalations and unresolved questions.'],
  ['Widget install', 'Copy the one-script storefront embed.'],
];

export const demoOptions = [
  {
    title: 'Fashion Demo',
    body: 'Try order tracking, returns, size help and exchange flows.',
    href: 'https://teviq-support-ai-widget.vercel.app/demo-vastra.html',
  },
  {
    title: 'Electronics Demo',
    body: 'Try warranty, shipping, product help and support escalation.',
    href: 'https://teviq-support-ai-widget.vercel.app/demo-urban.html',
  },
  {
    title: 'Beauty Demo',
    body: 'Try ingredients, usage, product FAQs and delivery questions.',
    href: 'https://teviq-support-ai-widget.vercel.app/demo-beauty.html',
  },
];

export const trustPoints = [
  'Brand-isolated knowledge, orders and widget configuration',
  'Identity-verified order lookups (order plus matching email or phone)',
  'Encrypted Shopify tokens and HMAC-validated webhooks',
  'Clerk-protected dashboard with server-side brand access checks',
  'Human escalation for fraud, legal, abuse and sensitive issues',
  'Policies, FAQs and knowledge can be updated anytime',
];
