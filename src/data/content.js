import {
  FiAlertTriangle,
  FiBarChart2,
  FiBox,
  FiClock,
  FiFileText,
  FiGlobe,
  FiHelpCircle,
  FiHome,
  FiMessageCircle,
  FiRefreshCw,
  FiShield,
  FiShoppingBag,
  FiTag,
  FiZap,
} from 'react-icons/fi';

export const navLinks = [
  { label: 'Product', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Live Demo', href: '#live-demo' },
];

export const siteUrl = 'https://teviq.in';

export const seoByPath = {
  '/': {
    title: 'Teviq Support AI – AI Customer Support for D2C Brands',
    description: 'Automate order tracking, returns, FAQs and customer support for e-commerce brands with Teviq Support AI.',
  },
  '/product': {
    title: 'Product | Teviq Support AI',
    description: 'Explore Teviq Support AI, an AI customer support platform for D2C ecommerce brands.',
  },
  '/pricing': {
    title: 'Pricing | Teviq AI',
    description: 'Simple Teviq AI pricing for D2C ecommerce brands.',
  },
  '/book-demo': {
    title: 'Book a Demo | Teviq AI',
    description: 'Request a personalized walkthrough of Teviq Support AI for your D2C ecommerce brand.',
  },
  '/case-studies': {
    title: 'Case Studies | Teviq AI',
    description: 'See results from Teviq AI customer support automation for growing D2C ecommerce teams.',
  },
  '/privacy': {
    title: 'Privacy Policy | Teviq AI',
    description: 'Learn how Teviq AI handles data, access, and customer support information.',
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

export const productModules = [
  {
    title: 'Order Tracking',
    subtitle: 'Help customers check order status without waiting for your team',
    icon: FiBox,
  },
  {
    title: 'Returns & Exchanges',
    subtitle: 'Guide customers using your return and exchange rules',
    icon: FiRefreshCw,
  },
  {
    title: 'Refund Questions',
    subtitle: 'Answer refund policy questions without making false promises',
    icon: FiClock,
  },
  {
    title: 'Shipping & Delivery',
    subtitle: 'Reduce repetitive delivery-time and shipping-policy tickets',
    icon: FiGlobe,
  },
  {
    title: 'Product FAQs',
    subtitle: 'Answer product, ingredient, warranty and usage questions from your knowledge base',
    icon: FiMessageCircle,
  },
  {
    title: 'Size / Warranty Help',
    subtitle: 'Guide shoppers before purchase and after delivery',
    icon: FiHelpCircle,
  },
  {
    title: 'Human Escalation',
    subtitle: 'Route sensitive complaints to your team instead of letting AI guess',
    icon: FiAlertTriangle,
  },
  {
    title: 'Product Recommendations',
    subtitle: 'Help shoppers find relevant products using catalog context',
    icon: FiShoppingBag,
  },
];

export const resourceNavItems = [
  { title: 'Blog', subtitle: 'Ideas for AI-led support teams', icon: FiFileText, href: '/blog' },
  { title: 'Help Center', subtitle: 'Guides, setup, and support', icon: FiHelpCircle, href: '/help' },
  { title: 'Privacy Policy', subtitle: 'How Teviq handles data', icon: FiShield, href: '/privacy' },
  { title: 'Terms of Service', subtitle: 'Usage terms and service policies', icon: FiShield, href: '/terms' },
];

export const platformCards = [
  {
    badge: 'Available Now',
    badgeStyle: 'bg-[#DCFCE7] text-[#16A34A]',
    icon: FiMessageCircle,
    title: 'Teviq Support AI',
    body: 'AI customer support for D2C ecommerce brands. Orders, returns, FAQs, product questions and escalation - handled with brand context.',
    note: 'Our current focus',
  },
  {
    badge: 'Roadmap',
    badgeStyle: 'bg-[#DBEAFE] text-[#1D4ED8]',
    icon: FiBarChart2,
    title: 'Deeper Analytics',
    body: 'Resolution trends, unresolved questions, support workload insights and FAQ suggestions as brands scale.',
  },
  {
    badge: 'Roadmap',
    badgeStyle: 'bg-[#EDE9FE] text-[#6D28D9]',
    icon: FiHome,
    title: 'Future Channels',
    body: 'Website widget today, with WhatsApp and more commerce channels planned through the same support brain.',
  },
];

export const painCards = [
  {
    icon: FiMessageCircle,
    title: 'Customers ask the same questions every day',
    body: "Where is my order? Can I return this? Is COD available? Your team answers the same support tickets again and again.",
  },
  {
    icon: FiClock,
    title: 'Support teams lose hours on routine queries',
    body: 'Order status, returns, refunds and shipping updates take time away from growth, product and customer recovery.',
  },
  {
    icon: FiRefreshCw,
    title: 'Policy mistakes create angry customers',
    body: 'Manual replies can accidentally promise refunds or returns before checking order status and brand policy.',
  },
  {
    icon: FiShoppingBag,
    title: 'Slow replies cost sales',
    body: 'A shopper waiting for a size, warranty or delivery answer may leave the site before your team responds.',
  },
  {
    icon: FiBarChart2,
    title: 'Manual support does not scale',
    body: 'Peak hours, sale days and ad campaigns create support spikes that small teams cannot handle manually.',
  },
];

export const features = [
  {
    icon: FiBox,
    title: 'Order Tracking',
    body: 'Customers can ask for order status and get a clear next step instead of waiting for a manual reply.',
  },
  {
    icon: FiRefreshCw,
    title: 'Returns & Exchanges',
    body: 'Teviq checks your policy and order context before guiding a customer through return or exchange questions.',
  },
  {
    icon: FiClock,
    title: 'Refund Questions',
    body: 'Customers get policy-aware refund guidance without the AI inventing refund dates or confirmations.',
  },
  {
    icon: FiGlobe,
    title: 'Shipping & Delivery',
    body: 'Reduce repetitive delivery-time, shipping-fee, COD and dispatch questions with instant answers.',
  },
  {
    icon: FiFileText,
    title: 'Product FAQs',
    body: 'Train Teviq on policies, PDFs, FAQs and product knowledge so customers get brand-specific answers.',
  },
  {
    icon: FiHelpCircle,
    title: 'Size / Warranty Help',
    body: 'Answer category-specific questions like size fit, ingredients, warranty, usage and product care.',
  },
  {
    icon: FiAlertTriangle,
    title: 'Human Escalation',
    body: 'Fraud, legal, abuse and sensitive complaints bypass AI and move toward human support.',
  },
  {
    icon: FiShoppingBag,
    title: 'Product Recommendations',
    body: 'Guide shoppers toward relevant products using catalog context and support conversation intent.',
  },
];

export const comparisonRows = [
  ['Brand-specific policies', 'no', 'limited', 'yes'],
  ['Order-aware replies', 'no', 'limited', 'yes'],
  ['Return logic check', 'no', 'no', 'yes'],
  ['Knowledge uploads', 'no', 'limited', 'yes'],
  ['Human escalation rules', 'no', 'limited', 'yes'],
  ['Founder-friendly pricing', 'yes', 'no', 'yes'],
  ['India-built', 'no', 'no', 'yes'],
];

export const foundingOffer = {
  badge: 'Limited to our first 10 clients',
  monthly: '₹999/month',
  highlights: [
    { icon: FiTag, label: 'No setup fees' },
    { icon: FiClock, label: '7-day free trial' },
    { icon: FiZap, label: 'Live in under 15 minutes' },
  ],
  features: [
    'Website AI support widget',
    'Brand policy and FAQ training',
    'Order tracking responses',
    'Returns & exchange guidance',
    'Product FAQ automation',
    'Direct founder onboarding support',
  ],
  cta: 'Claim Founding Price',
  note: 'After our first 10 founding clients, pricing moves to the standard plans below.',
};

export const futurePricingTiers = [
  {
    name: 'Standard',
    monthly: '₹1,999/month',
    description: 'Website AI support, order tracking, returns and FAQ automation.',
  },
  {
    name: 'Growth',
    monthly: '₹2,999/month',
    description: 'Everything in Standard, plus WhatsApp-ready roadmap and priority onboarding.',
    note: 'WhatsApp integration is roadmap positioning, not a live channel claim.',
  },
];

export const steps = [
  {
    number: '01',
    title: 'Connect your store or upload policies',
    body: 'Share product FAQs, return rules, shipping policy and demo commerce data. We shape Teviq around your support flow.',
  },
  {
    number: '02',
    title: 'Teviq learns your brand knowledge',
    body: 'The support brain uses your policies, FAQs, products, orders and escalation rules before answering customers.',
  },
  {
    number: '03',
    title: 'Add the widget to your website',
    body: 'Install one script on your storefront. The widget loads by brand ID and uses your public brand configuration.',
  },
  {
    number: '04',
    title: 'Customers get instant answers',
    body: 'Visitors can ask about orders, returns, shipping and products while sensitive cases move toward human support.',
  },
];

export const faqs = [
  {
    question: 'Do I need technical knowledge to set up Teviq?',
    answer: 'No. We help pilot brands with setup, widget installation and knowledge configuration. You mainly share policies, FAQs and support rules.',
  },
  {
    question: "What happens if the AI doesn't know the answer?",
    answer: "Teviq uses your brand knowledge and policy rules. If confidence is low or the issue is sensitive, it responds carefully and can guide the customer toward human support.",
  },
  {
    question: 'Will it work with my existing Shopify theme?',
    answer: 'The website widget is embedded with one script tag and is designed for storefronts. The current Shopify connector is a demo architecture, with real Shopify integration planned next.',
  },
  {
    question: 'Can Teviq answer in Hinglish?',
    answer: 'Yes. The support brain detects English, Hindi and Hinglish-style messages and keeps replies short and brand-toned.',
  },
  {
    question: 'Is there a pilot available?',
    answer: 'Yes. We are offering a 7-day free trial and no setup fees for our first 10 founding D2C brands.',
  },
  {
    question: 'Can I update policies later?',
    answer: 'Yes. Brand knowledge is designed to be updated as your return rules, shipping rules, FAQs and products change.',
  },
];

export const roiMetrics = [
  {
    value: '24/7',
    title: 'Instant replies',
    body: 'Designed to answer common questions when shoppers need help, not only when your team is online.',
  },
  {
    value: '50–80%',
    title: 'Repetitive query automation',
    body: 'Can help reduce the workload from repeated order, return, shipping and FAQ questions.',
  },
  {
    value: 'Faster',
    title: 'Order, return and FAQ resolution',
    body: 'Gives customers the next best step without waiting for a manual support reply.',
  },
];

export const dashboardPreview = [
  ['Knowledge uploads', 'Upload PDFs, policies, FAQs and brand rules.'],
  ['AI playground', 'Test answers before customers see them.'],
  ['Shopify status', 'Preview product and order connector readiness.'],
  ['Analytics', 'Track intents, escalations and unresolved questions.'],
  ['Widget install', 'Copy the one-script storefront embed.'],
  ['Conversations', 'Review demo support history and handoff status.'],
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
  'Brand-isolated knowledge and widget configuration',
  'HTTPS APIs for production deployments',
  'Order and knowledge retrieval filtered by brand ID',
  'Human escalation for fraud, legal, abuse and sensitive issues',
  'Policies, FAQs and knowledge can be updated anytime',
];
