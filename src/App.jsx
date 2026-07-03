import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import {
  FiAlertTriangle,
  FiArrowDown,
  FiArrowRight,
  FiBarChart2,
  FiBox,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiFileText,
  FiGlobe,
  FiHelpCircle,
  FiHome,
  FiMenu,
  FiMessageCircle,
  FiMinus,
  FiPlus,
  FiRefreshCw,
  FiSend,
  FiShield,
  FiShoppingBag,
  FiX,
  FiZap,
} from 'react-icons/fi';

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const navLinks = [
  { label: 'Product', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Live Demo', href: '#live-demo' },
];

const siteUrl = 'https://teviq.in';

const seoByPath = {
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

const productModules = [
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

const resourceNavItems = [
  { title: 'Blog', subtitle: 'Ideas for AI-led support teams', icon: FiFileText, href: '/blog' },
  { title: 'Help Center', subtitle: 'Guides, setup, and support', icon: FiHelpCircle, href: '/help' },
  { title: 'Privacy Policy', subtitle: 'How Teviq handles data', icon: FiShield, href: '/privacy' },
  { title: 'Terms of Service', subtitle: 'Usage terms and service policies', icon: FiShield, href: '/terms' },
];

const caseStudyResults = [
  {
    title: 'Instant answers',
    metric: '24/7',
    body: 'Designed to answer common support questions even when your team is offline.',
  },
  {
    title: 'Less repetitive work',
    metric: '50–80%',
    body: 'Can help automate a large share of repetitive order, return, shipping and FAQ queries.',
  },
  {
    title: 'Faster resolution',
    metric: '1 flow',
    body: 'Order tracking, return checks, knowledge answers and human escalation in one support layer.',
  },
];

const platformCards = [
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

const painCards = [
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

const features = [
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

const comparisonRows = [
  ['Brand-specific policies', 'no', 'limited', 'yes'],
  ['Order-aware replies', 'no', 'limited', 'yes'],
  ['Return logic check', 'no', 'no', 'yes'],
  ['Knowledge uploads', 'no', 'limited', 'yes'],
  ['Human escalation rules', 'no', 'limited', 'yes'],
  ['Founder-friendly pricing', 'yes', 'no', 'yes'],
  ['India-built', 'no', 'no', 'yes'],
];

const pricing = [
  {
    name: 'Standard',
    setupLabel: 'Pilot setup',
    setup: 'Free for first pilot brands',
    monthly: '₹999/month',
    features: ['Website AI support widget', 'Brand policy and FAQ training', 'Order tracking responses', 'Returns & exchange guidance', 'Product FAQ automation', '14-day pilot available'],
    cta: 'Book a Free Demo',
  },
  {
    name: 'Growth Roadmap',
    tag: 'Website + WhatsApp-ready roadmap',
    description: 'For brands that want website support now and want their support flow prepared for WhatsApp integration as Teviq expands channels.',
    setupLabel: 'Pilot setup',
    setup: 'Free for first pilot brands',
    monthly: '₹1,499/month',
    features: ['Everything in Website AI Support', 'WhatsApp integration roadmap readiness', 'Knowledge Brain setup support', 'Shopify-style connector demo', 'Analytics preview', 'Priority pilot onboarding'],
    cta: 'Get Started',
    note: 'WhatsApp integration is roadmap positioning, not a live channel claim.',
    highlighted: true,
  },
];

const steps = [
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

const faqs = [
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
    answer: 'Yes. We are offering a 14-day pilot and free setup for selected early D2C brands.',
  },
  {
    question: 'Can I update policies later?',
    answer: 'Yes. Brand knowledge is designed to be updated as your return rules, shipping rules, FAQs and products change.',
  },
];

const roiMetrics = [
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

const dashboardPreview = [
  ['Knowledge uploads', 'Upload PDFs, policies, FAQs and brand rules.'],
  ['AI playground', 'Test answers before customers see them.'],
  ['Shopify status', 'Preview product and order connector readiness.'],
  ['Analytics', 'Track intents, escalations and unresolved questions.'],
  ['Widget install', 'Copy the one-script storefront embed.'],
  ['Conversations', 'Review demo support history and handoff status.'],
];

const demoOptions = [
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

const trustPoints = [
  'Brand-isolated knowledge and widget configuration',
  'HTTPS APIs for production deployments',
  'Order and knowledge retrieval filtered by brand ID',
  'Human escalation for fraud, legal, abuse and sensitive issues',
  'Policies, FAQs and knowledge can be updated anytime',
];

function App() {
  return (
    <BrowserRouter>
      <SiteShell />
    </BrowserRouter>
  );
}

function SiteShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  useEffect(() => {
    const seo = seoByPath[pathname] || seoByPath['/'];
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '/' : pathname}`;
    const setMeta = (selector, attribute, value) => {
      const element = document.head.querySelector(selector);
      if (element) element.setAttribute(attribute, value);
    };
    let canonical = document.head.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    document.title = seo.title;
    canonical.setAttribute('href', canonicalUrl);
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', seo.title);
    setMeta('meta[name="twitter:description"]', 'content', seo.description);
  }, [pathname]);

  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (target) {
      window.requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [pathname]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-white font-sans text-black">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} closeMenu={closeMenu} />
      <Routes>
        <Route path="/" element={<HomePage openFaq={openFaq} setOpenFaq={setOpenFaq} />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/book-demo" element={<BookDemoPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/privacy" element={<LegalPage type="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="/blog" element={<PlaceholderPage eyebrow="BLOG" title="Insights for AI-led ecommerce support" subtitle="Articles, playbooks, and product thinking from Teviq are coming soon." />} />
        <Route path="/help" element={<PlaceholderPage eyebrow="HELP CENTER" title="Teviq Help Center" subtitle="Setup guides, product support, and implementation resources are coming soon." />} />
      </Routes>
      <Footer />
    </div>
  );
}

function HomePage({ openFaq, setOpenFaq }) {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Platform />
      <Pain />
      <Features />
      <HowItWorks />
      <ROISection />
      <DashboardPreview />
      <LiveDemo />
      <Pricing />
      <TrustSafety />
      <FounderPresence />
      <Comparison />
      <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <FinalCTA />
    </main>
  );
}

function Navbar({ isMenuOpen, setIsMenuOpen, closeMenu }) {
  const { pathname } = useLocation();
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesRef = useRef(null);
  const sectionHref = (hash) => {
    if (hash === '#') return '#';
    return pathname === '/' ? hash : `/${hash}`;
  };
  const navClass = (href) => `nav-link ${pathname === href ? 'text-black' : ''}`;

  useEffect(() => {
    const onPointerDown = (event) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target)) {
        setIsResourcesOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur-md">
      <nav className="container-shell flex h-[72px] items-center justify-between">
        <Link to="/" className="inline-flex p-1" onClick={closeMenu} aria-label="Teviq home">
          <BrandLogo variant="light" className="h-7 md:h-[34px]" />
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.href} className={navClass(link.href)}>
                {link.label}
              </Link>
            )
          ))}
          <div
            ref={resourcesRef}
            className="relative"
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
          >
            <button
              type="button"
              className={`nav-link flex items-center gap-1 ${isResourcesOpen ? 'text-black' : ''}`}
              onClick={() => setIsResourcesOpen((open) => !open)}
              aria-expanded={isResourcesOpen}
            >
              Resources <FiChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute inset-x-0 top-full h-3" />
            <div className={`absolute right-0 top-[calc(100%+10px)] w-[360px] max-w-[calc(100vw-40px)] rounded-2xl border border-zinc-100 bg-white p-2 shadow-dropdown transition duration-150 ${isResourcesOpen ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'}`}>
              {resourceNavItems.map((item) => (
                <DropdownItem key={item.title} href={item.href} icon={item.icon} title={item.title} subtitle={item.subtitle} onClick={() => setIsResourcesOpen(false)} />
              ))}
            </div>
          </div>
        </div>

        <Link to="/book-demo" className="primary-button hidden lg:inline-flex">
          Book a Free Demo <FiArrowRight />
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsMenuOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-100 bg-white text-black lg:hidden"
        >
          {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.2 }}
            className="container-shell pb-5 lg:hidden"
          >
            <div className="rounded-2xl border border-zinc-100 bg-white p-2 shadow-card">
              {navLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-black"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} to={link.href} onClick={closeMenu} className={`block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-zinc-50 hover:text-black ${pathname === link.href ? 'text-black' : 'text-zinc-600'}`}>
                    {link.label}
                  </Link>
                )
              ))}
              <div className="my-2 h-px bg-zinc-100" />
              <MobileResourceMenu closeMenu={closeMenu} pathname={pathname} />
              <Link to="/book-demo" onClick={closeMenu} className="primary-button mt-3 w-full">
                Book a Free Demo <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DropdownItem({ href, icon: Icon, title, subtitle, onClick }) {
  const isInternalRoute = href.startsWith('/');
  const className = "flex gap-3 rounded-xl px-4 py-3 transition hover:bg-[#F8FAFC]";

  const content = (
    <>
      <span className="icon-box shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-sm font-bold tracking-[-0.01em] text-black">{title}</span>
        <span className="mt-1 block text-xs font-medium text-zinc-500">{subtitle}</span>
      </span>
    </>
  );

  if (isInternalRoute) {
    return (
      <Link to={href} onClick={onClick} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} onClick={onClick} className={className}>
      {content}
    </a>
  );
}

function MobileResourceMenu({ closeMenu, pathname }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-zinc-600 hover:bg-zinc-50 hover:text-black"
        aria-expanded={isOpen}
      >
        Resources
        <FiChevronDown className={`h-4 w-4 transition ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="space-y-1 py-2">
              {resourceNavItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-zinc-50 hover:text-black ${pathname === item.href ? 'text-black' : 'text-zinc-600'}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Hero() {
  const title = 'AI Customer Support for D2C Brands';

  return (
    <section id="top" className="bg-white pt-32 md:pt-[140px]">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-left">
            <motion.p variants={heroItem(0)} className="eyebrow">
              TEVIQ AI
            </motion.p>
            <motion.h1 variants={heroItem(0.12)} className="mt-6 max-w-[620px] text-balance text-[38px] font-black leading-[1.05] tracking-[-0.035em] text-black sm:text-[48px] md:text-[56px] lg:text-[64px]">
              {title}
            </motion.h1>
            <motion.p variants={heroItem(0.3)} className="mt-6 max-w-xl text-[17px] leading-[1.7] text-zinc-500 md:text-[18px]">
              Automate order tracking, returns, FAQs and more with AI. Reduce support workload and delight your customers 24/7.
            </motion.p>
            <motion.div variants={heroItem(0.5)} className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
              <Link to="/book-demo" className="primary-button w-full sm:w-auto">
                Book a Free Demo <FiArrowRight />
              </Link>
              <a href="#live-demo" className="ghost-button-light w-full sm:w-auto">
                Try Live Demo <FiArrowDown />
              </a>
            </motion.div>

            <motion.p variants={heroItem(0.62)} className="mt-5 text-sm font-semibold text-zinc-500">
              Setup in minutes • Website widget • Shopify-ready roadmap • Built for Indian D2C brands
            </motion.p>

            <motion.div variants={heroItem(0.7)} className="mt-12 border-t border-zinc-100 pt-9">
              <div className="grid gap-6 sm:grid-cols-3 sm:gap-0">
                {[
                  ['Orders', 'Track and explain status'],
                  ['Returns', 'Policy-aware guidance'],
                  ['FAQs', 'Instant brand answers'],
                ].map(([value, label], index) => (
                  <div key={value} className={`min-w-0 px-4 text-center lg:px-5 lg:text-left ${index > 0 ? 'sm:border-l sm:border-zinc-200' : ''}`}>
                    <p className="mx-auto max-w-[11rem] text-pretty text-[22px] font-black leading-[1.05] tracking-[-0.04em] text-black sm:text-[18px] md:text-[20px] lg:mx-0 xl:text-[22px]">
                      {value}
                    </p>
                    <p className="mt-3 text-sm font-medium text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={heroItem(0.35)} className="lg:justify-self-end">
            <ProductDemoFrame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductDemoFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[720px] lg:max-w-[750px] xl:max-w-[760px]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/15 bg-black shadow-demo">
        <DemoFallback />

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="absolute bottom-6 left-6 hidden max-w-[260px] md:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">Live AI support layer</p>
          <p className="mt-2 text-xl font-bold tracking-[-0.03em] text-white">Ecommerce support, handled in seconds.</p>
        </div>
        <ChatbotOverlay />
      </div>
    </div>
  );
}

function DemoFallback() {
  return (
    <div className="absolute inset-0 bg-[#0A0A0A]">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute left-8 top-16 w-[52%] space-y-4">
        <div className="h-4 w-32 rounded-full bg-white/12" />
        <div className="h-24 rounded-3xl border border-white/10 bg-white/[0.06]" />
        <div className="grid grid-cols-3 gap-3">
          <div className="h-20 rounded-2xl border border-white/10 bg-white/[0.05]" />
          <div className="h-20 rounded-2xl border border-white/10 bg-white/[0.05]" />
          <div className="h-20 rounded-2xl border border-white/10 bg-white/[0.05]" />
        </div>
      </div>
    </div>
  );
}

function ChatbotOverlay() {
  const bubbles = [
    { side: 'user', text: 'Where is my order #TVQ1024?' },
    { side: 'bot', text: 'Your order is out for delivery today. Expected by 7 PM.' },
    { side: 'user', text: 'Can I return it if size does not fit?' },
    { side: 'bot', text: 'Yes. Once delivered, I can help start the return flow instantly.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute right-4 top-3 w-[min(330px,calc(100%-32px))] rounded-[24px] border border-white/55 bg-white/[0.88] p-4 shadow-chat backdrop-blur-2xl sm:right-5 sm:top-5 md:right-7 md:top-6 md:w-[340px] md:p-5 lg:right-8 lg:top-7 xl:right-9 xl:top-8 xl:w-[350px]"
    >
      <div className="flex items-center justify-between border-b border-zinc-200/70 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo text-white">
            <FiMessageCircle className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold tracking-[-0.01em] text-black">Teviq Support AI</p>
            <p className="mt-0.5 text-xs font-medium text-zinc-500">Online</p>
          </div>
        </div>
        <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
      </div>

      <div className="mt-4 space-y-3">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={`${bubble.side}-${bubble.text}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.9 + index * 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className={`flex ${bubble.side === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${bubble.side === 'user' ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-700'}`}>
              {bubble.text}
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.65, duration: 0.35 }}
          className="flex justify-start"
        >
          <div className="flex items-center gap-1 rounded-2xl bg-zinc-100 px-4 py-3">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1, repeat: Infinity, delay: dot * 0.15 }}
                className="h-1.5 w-1.5 rounded-full bg-zinc-500"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5">
        <span className="min-w-0 flex-1 truncate text-sm text-zinc-400">Ask about your order...</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo text-white">
          <FiSend className="h-4 w-4" />
        </span>
      </div>
    </motion.div>
  );
}

function heroItem(delay) {
  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  };
}

function TrustedBy() {
  const categories = ['Fashion', 'Beauty', 'Skincare', 'Electronics', 'Jewellery', 'Footwear', 'Lifestyle', 'Home Decor', 'Furniture', 'Pet Brands', 'Supplements', 'Gifting'];

  return (
    <section className="bg-white py-16 md:py-20">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeInUp} className="rounded-[28px] border border-zinc-100 bg-zinc-50/60 px-6 py-8 md:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <p className="eyebrow">BUILT FOR</p>
              <p className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-black">Fast-growing ecommerce categories with repeat support questions.</p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {categories.map((category) => (
                <div key={category} className="rounded-full border border-zinc-100 bg-white px-4 py-2 text-center text-sm font-semibold text-zinc-600 shadow-sm">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SectionHeader({ label, title, subtitle, dark = false }) {
  return (
    <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center">
      {label && <p className="eyebrow">{label}</p>}
      <h2 className={`mx-auto mt-5 max-w-3xl text-balance text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-5xl lg:text-[62px] ${dark ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
      {subtitle && <p className={`mx-auto mt-6 max-w-xl text-[17px] leading-[1.7] ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>{subtitle}</p>}
    </motion.div>
  );
}

function Platform() {
  return (
    <section id="platform" className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="More Than A Chatbot"
          title="A support brain for your store."
          subtitle="Teviq combines a premium website widget, brand knowledge, order context, policy logic, analytics and a client dashboard into one support system."
        />
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {platformCards.map((card) => (
            <LightCard key={card.title} className="flex min-h-[390px] flex-col p-8">
              <span className={`inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold ${card.badgeStyle}`}>{card.badge}</span>
              <IconBox icon={card.icon} className="mt-10" />
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{card.title}</h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-zinc-500">{card.body}</p>
              {card.note && <p className="mt-auto pt-10 text-sm font-semibold text-zinc-400">{card.note}</p>}
            </LightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Pain() {
  return (
    <section className="section-dark">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="The Problem"
          title="Support slows down exactly when your store needs speed."
          subtitle="Founders do not lose time only on tickets. They lose repeat purchases, trust and momentum when routine questions stay unanswered."
          dark
        />
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {painCards.map((card) => (
            <DarkCard key={card.title} className="p-8">
              <IconBox icon={card.icon} dark />
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-white">{card.title}</h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-zinc-400">{card.body}</p>
            </DarkCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="What Teviq Handles"
          title="Your most common support flows, answered with brand context."
          subtitle="From order status to product questions, Teviq is designed to reduce the repetitive work that keeps founders and support teams busy."
        />
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <LightCard key={feature.title} className="p-8">
              <IconBox icon={feature.icon} />
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{feature.title}</h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-zinc-500">{feature.body}</p>
            </LightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Comparison() {
  return (
    <section id="comparison" className="section-dark">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader label="Why Teviq" title="Not just another support bot." dark />
        <motion.div variants={fadeInUp} className="mx-auto mt-20 max-w-5xl overflow-x-auto rounded-2xl border border-zinc-800 bg-[#111111] p-2">
          <div className="min-w-[820px]">
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1.05fr]">
              {['Feature', 'Free/Cheap Bot', 'Generic AI Bot', 'Teviq AI'].map((heading, index) => (
                <div key={heading} className={`border-b border-[#1C1C1E] px-5 py-5 text-[13px] font-semibold uppercase tracking-[0.12em] ${index === 3 ? 'rounded-t-xl border border-b-0 border-indigo/30 bg-teviq-column text-white' : 'text-zinc-400'}`}>
                  {heading}
                </div>
              ))}
              {comparisonRows.map(([label, cheap, generic, teviq], index) => (
                <ComparisonRow key={label} label={label} cheap={cheap} generic={generic} teviq={teviq} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ComparisonRow({ label, cheap, generic, teviq, index }) {
  const rowBg = index % 2 ? 'bg-white/[0.02]' : 'bg-transparent';
  return (
    <>
      <div className={`border-b border-[#1C1C1E] px-5 py-5 text-sm font-semibold text-white ${rowBg}`}>{label}</div>
      <Status value={cheap} className={rowBg} />
      <Status value={generic} className={rowBg} />
      <Status value={teviq} highlight className={rowBg} isLast={index === comparisonRows.length - 1} />
    </>
  );
}

function Status({ value, highlight = false, className = '', isLast = false }) {
  const content = {
    yes: { label: 'Yes', className: 'text-[#4ADE80]', icon: FiCheck },
    no: { label: 'No', className: 'text-zinc-700', icon: FiX },
    limited: { label: 'Limited', className: 'text-[#FCD34D]', icon: FiAlertTriangle },
  }[value];
  const Icon = content.icon;

  return (
    <div className={`flex items-center gap-2 border-b border-[#1C1C1E] px-5 py-5 text-sm font-semibold ${className} ${highlight ? `border-x border-indigo/30 bg-teviq-column ${isLast ? 'rounded-b-xl' : ''}` : ''}`}>
      <Icon className={`h-5 w-5 ${content.className}`} />
      <span className={content.className}>{content.label}</span>
    </div>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-white pb-24 pt-32 md:pb-[150px] md:pt-[150px]">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="Pilot Offer"
          title="Become one of our first pilot D2C brands."
          subtitle="We’ll help set up Teviq on your store and customize it for your support flow. Simple pricing, clear pilot terms, no unnecessary enterprise complexity."
        />
        <motion.p variants={fadeInUp} className="mx-auto mt-10 max-w-[700px] text-center text-[15px] leading-6 text-zinc-500">
          Free setup is available for selected early pilot brands. The pilot helps you test website AI support on real customer questions before committing long-term.
        </motion.p>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 lg:grid-cols-2 lg:items-stretch">
          {pricing.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative flex h-full flex-col rounded-2xl bg-white p-8 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-cardHover ${plan.highlighted ? 'border-2 border-indigo pt-10 shadow-highlight' : 'border border-zinc-100'}`}
            >
              {plan.highlighted && <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-2xl bg-indigo px-3 py-1 text-xs font-semibold text-white">Most Popular</span>}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{plan.name}</p>
                {plan.tag && <p className="mt-3 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500">{plan.tag}</p>}
                {plan.description && <p className="mt-5 text-sm leading-6 text-zinc-500">{plan.description}</p>}
              </div>
              <div className="mt-10">
                <p className="text-sm font-semibold text-zinc-500">{plan.setupLabel || 'Setup'}</p>
                <p className="mt-2 text-3xl font-black tracking-[-0.03em] text-black">{plan.setup}</p>
                <p className="mt-8 text-sm font-semibold text-zinc-500">Monthly</p>
                <p className="mt-2 text-5xl font-black tracking-[-0.03em] text-black">{plan.monthly}</p>
              </div>
              <ul className="mt-10 grow space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <FiCheck className="h-4 w-4 shrink-0 text-indigo" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/book-demo" className={`mt-10 w-full ${plan.highlighted ? 'primary-button' : 'outline-button'}`}>
                {plan.cta} <FiArrowRight />
              </Link>
              {plan.note && <p className="mt-4 text-center text-xs font-medium leading-5 text-zinc-500">{plan.note}</p>}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function PricingPage() {
  return (
    <main>
      <Pricing />
      <FinalCTA />
    </main>
  );
}

function BookDemoPage() {
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const platformOptions = ['Shopify', 'WooCommerce', 'Custom', 'Other'];
  const orderOptions = ['Under 500', '500–2,000', '2,000–10,000', '10,000+'];
  const nextSteps = [
    'We review your business.',
    'We schedule a personalized demo.',
    'We show how Teviq fits your support workflow.',
    'If it’s a good fit, we help you get started.',
  ];
  const inputClass = 'mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-black outline-none transition placeholder:text-zinc-400 focus:border-indigo focus:ring-4 focus:ring-indigo/10';
  const labelClass = 'text-sm font-semibold text-zinc-700';

  const isSubmitting = submitStatus === 'submitting';
  const isSuccess = submitStatus === 'success';

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting || isSuccess) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get('fullName') || '').trim(),
      email: String(formData.get('workEmail') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      brand: String(formData.get('brandName') || '').trim(),
      website: String(formData.get('website') || '').trim(),
      platform: String(formData.get('platform') || '').trim(),
      monthlyOrders: String(formData.get('monthlyOrders') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+()\-\s\d]{7,20}$/;

    if (!values.name || !values.email || !values.phone || !values.brand) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in your name, work email, phone number, and brand name.');
      return;
    }

    if (!emailPattern.test(values.email)) {
      setSubmitStatus('error');
      setSubmitMessage('Please enter a valid work email address.');
      return;
    }

    if (!phonePattern.test(values.phone)) {
      setSubmitStatus('error');
      setSubmitMessage('Please enter a valid phone number.');
      return;
    }

    if (values.website) {
      try {
        const url = new URL(values.website);
        if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Invalid protocol');
      } catch (error) {
        setSubmitStatus('error');
        setSubmitMessage('Please enter a valid website URL, including https://');
        return;
      }
    }

    setSubmitStatus('submitting');
    setSubmitMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      setSubmitStatus('error');
      setSubmitMessage('Web3Forms access key is missing. Add VITE_WEB3FORMS_KEY to the .env file and restart the dev server.');
      return;
    }

    const payload = {
      access_key: accessKey,
      name: values.name,
      email: values.email,
      phone: values.phone,
      brand: values.brand,
      website: values.website,
      platform: values.platform,
      'monthly orders': values.monthlyOrders,
      message: values.message,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit demo request.');
      }

      setSubmitStatus('success');
      setSubmitMessage("Thank you! We've received your demo request. Our team will contact you within 24 business hours.");
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong while sending your request. Please try again or email us at helloteviq@gmail.com.');
    }
  };

  return (
    <main>
      <section className="bg-white pb-24 pt-32 md:pb-[150px] md:pt-[150px]">
        <motion.div className="container-shell" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">BOOK A DEMO</p>
            <h1 className="mt-6 text-balance text-[42px] font-black leading-none tracking-[-0.04em] text-black sm:text-6xl lg:text-[76px]">
              See how Teviq Support AI can automate your customer support.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-[1.7] text-zinc-500">
              Tell us a little about your business and we’ll schedule a personalized walkthrough of Teviq Support AI.
            </p>
          </motion.div>

          <div className="mx-auto mt-20 grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {isSuccess ? (
              <motion.div variants={fadeInUp} className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-card md:p-8">
                <div className="rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] p-5">
                  <p className="text-xl font-black tracking-[-0.03em] text-black">Demo Request Received</p>
                  <div className="mt-4 space-y-4 text-sm font-medium leading-6 text-[#166534]">
                    <p>Thank you for your interest in Teviq Support AI.</p>
                    <p>We’ve successfully received your request.</p>
                    <p>Our team will review your business and contact you within 24 business hours to schedule a personalized demo.</p>
                    <p>If you have any questions, feel free to contact us.</p>
                  </div>
                  <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                    <div>
                      <p className="font-semibold text-zinc-500">Email</p>
                      <a href="mailto:helloteviq@gmail.com" className="mt-1 block font-bold text-black transition hover:text-indigo">helloteviq@gmail.com</a>
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-500">Phone</p>
                      <a href="tel:+919555144436" className="mt-1 block font-bold text-black transition hover:text-indigo">+91 9555144436</a>
                    </div>
                  </div>
                  <Link to="/" className="primary-button mt-8">
                    Back to Home <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ) : (
            <motion.form variants={fadeInUp} onSubmit={handleSubmit} noValidate className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-card md:p-8">
              {submitMessage && (
                <div className="mb-6 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] p-4 text-sm font-semibold leading-6 text-[#991B1B]">
                  {submitMessage}
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <label className={labelClass}>
                  Full Name *
                  <input className={inputClass} name="fullName" type="text" required />
                </label>
                <label className={labelClass}>
                  Work Email *
                  <input className={inputClass} name="workEmail" type="email" required />
                </label>
                <label className={labelClass}>
                  Phone Number *
                  <input className={inputClass} name="phone" type="tel" required />
                </label>
                <label className={labelClass}>
                  Brand Name *
                  <input className={inputClass} name="brandName" type="text" required />
                </label>
                <label className={labelClass}>
                  Website URL
                  <input className={inputClass} name="website" type="url" placeholder="https://yourbrand.com" />
                </label>
                <label className={labelClass}>
                  Platform
                  <select className={inputClass} name="platform" defaultValue="">
                    <option value="" disabled>Select platform</option>
                    {platformOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className={`${labelClass} md:col-span-2`}>
                  Monthly Orders
                  <select className={inputClass} name="monthlyOrders" defaultValue="">
                    <option value="" disabled>Select orders</option>
                    {orderOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className={`${labelClass} md:col-span-2`}>
                  Message
                  <textarea
                    className={`${inputClass} min-h-[140px] resize-y`}
                    name="message"
                    placeholder="Tell us about your customer support workflow or biggest challenge."
                  />
                </label>
              </div>

              <button type="submit" disabled={isSubmitting || isSuccess} className="primary-button mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                {isSubmitting ? 'Sending...' : isSuccess ? 'Request Sent ✓' : 'Request Demo'} {!isSubmitting && !isSuccess && <FiArrowRight />}
              </button>
            </motion.form>
            )}

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="rounded-[20px] border border-zinc-100 bg-white p-8 shadow-card">
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">What happens next?</h2>
                <div className="mt-8 space-y-5">
                  {nextSteps.map((step) => (
                    <div key={step} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-indigo">
                        <FiCheck className="h-4 w-4" />
                      </span>
                      <p className="text-[15px] font-medium leading-6 text-zinc-600">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-zinc-100 pt-6">
                  <p className="text-sm font-semibold text-zinc-500">Typical response time</p>
                  <p className="mt-2 text-xl font-black tracking-[-0.03em] text-black">Within 24 business hours.</p>
                </div>
              </div>

              <div className="rounded-[20px] border border-zinc-100 bg-white p-8 shadow-card">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <p className="text-sm font-semibold text-zinc-500">Email</p>
                    <a href="mailto:helloteviq@gmail.com" className="mt-2 block text-base font-bold text-black transition hover:text-indigo">helloteviq@gmail.com</a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-500">Phone</p>
                    <a href="tel:+919555144436" className="mt-2 block text-base font-bold text-black transition hover:text-indigo">+91 9555144436</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function ProductPage() {
  return (
    <main>
      <section className="bg-white pb-24 pt-32 md:pb-[150px] md:pt-[150px]">
        <motion.div className="container-shell" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">PRODUCT</p>
            <h1 className="mt-6 text-balance text-[42px] font-black leading-none tracking-[-0.04em] text-black sm:text-6xl lg:text-[84px]">
              Teviq Support AI
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.7] text-zinc-500">
              Website AI support for orders, returns, FAQs, products and human escalation.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productModules.map((module) => (
              <LightCard key={module.title} className="p-8">
                <IconBox icon={module.icon} />
                <h2 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{module.title}</h2>
                <p className="mt-4 text-[17px] leading-[1.7] text-zinc-500">{module.subtitle}</p>
              </LightCard>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mx-auto mt-16 flex justify-center">
            <Link to="/book-demo" className="primary-button">
              Book a Free Demo <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <FinalCTA />
    </main>
  );
}

function CaseStudiesPage() {
  return (
    <main>
      <CaseStudies />
      <section className="bg-white pb-24 md:pb-[150px]">
        <div className="container-shell flex justify-center">
          <Link to="/book-demo" className="primary-button">
            Book a Demo <FiArrowRight />
          </Link>
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}

function PlaceholderPage({ eyebrow, title, subtitle }) {
  return (
    <main>
      <section className="bg-white pb-24 pt-32 md:pb-[150px] md:pt-[150px]">
        <motion.div className="container-shell text-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeInUp} className="eyebrow">{eyebrow}</motion.p>
          <motion.h1 variants={fadeInUp} className="mx-auto mt-6 max-w-4xl text-balance text-[42px] font-black leading-none tracking-[-0.04em] text-black sm:text-6xl lg:text-[80px]">
            {title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.7] text-zinc-500">
            {subtitle}
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10">
            <Link to="/book-demo" className="primary-button">
              Book a Free Demo <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <FinalCTA />
    </main>
  );
}

function LegalPage({ type }) {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';
  const subtitle = isPrivacy
    ? 'How Teviq handles data, access, and customer support information.'
    : 'The service terms for using Teviq products and implementation support.';
  const points = isPrivacy
    ? ['We only use shared store and support data to configure and operate Teviq.', 'Sensitive issues can be escalated to your team for human review.', 'Brands can request updates or removal of implementation data by contacting Teviq.']
    : ['Teviq setup, pricing, and support terms are governed by the plan agreed with your team.', 'Brands are responsible for providing accurate store policies and support rules.', 'Support automation should be reviewed regularly as brand policies change.'];

  return (
    <main>
      <section className="bg-white pb-24 pt-32 md:pb-[150px] md:pt-[150px]">
        <motion.div className="container-shell max-w-3xl" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeInUp} className="eyebrow">{isPrivacy ? 'PRIVACY' : 'TERMS'}</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-6 text-balance text-[42px] font-black leading-none tracking-[-0.04em] text-black sm:text-6xl">
            {title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-7 text-[17px] leading-[1.7] text-zinc-500">
            {subtitle}
          </motion.p>
          <motion.div variants={stagger} className="mt-14 space-y-4">
            {points.map((point) => (
              <motion.div key={point} variants={fadeInUp} className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-card">
                <p className="text-[17px] leading-[1.7] text-zinc-600">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <FinalCTA />
    </main>
  );
}

function HowItWorks() {
  return (
    <section id="works" className="section-dark">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="How It Works"
          title="From brand knowledge to live widget in four clear steps."
          subtitle="Keep the setup simple: connect or upload what Teviq needs, test the AI, then add one widget script to your storefront."
          dark
        />
        <div className="mx-auto mt-20 max-w-4xl">
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={fadeInUp} className={`grid gap-6 py-10 md:grid-cols-[180px_1fr] md:items-center ${index > 0 ? 'border-t border-zinc-800' : ''}`}>
              <div className="text-7xl font-black leading-none tracking-[-0.03em] text-white/[0.06] md:text-8xl">{step.number}</div>
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.01em] text-white">{step.title}</h3>
                <p className="mt-4 max-w-xl text-[17px] leading-[1.7] text-zinc-400">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ROISection() {
  return (
    <section className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="Business Value"
          title="Reduce repetitive support workload without making support feel robotic."
          subtitle="Teviq is designed to automate the common questions customers ask before and after purchase, while keeping sensitive issues ready for human attention."
        />
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {roiMetrics.map((metric) => (
            <LightCard key={metric.title} className="p-8">
              <p className="text-5xl font-black leading-none tracking-[-0.04em] text-black md:text-6xl">{metric.value}</p>
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{metric.title}</h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-zinc-500">{metric.body}</p>
            </LightCard>
          ))}
        </div>
        <motion.p variants={fadeInUp} className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-zinc-500">
          Results depend on query volume, policy clarity and setup quality. We keep pilot claims realistic and measurable.
        </motion.p>
      </motion.div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section className="section-dark">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <SectionHeader
            label="Brand Dashboard"
            title="More than a chat widget. A support command center."
            subtitle="Brands can manage knowledge, test AI answers, preview Shopify-style sync, see analytics and copy the widget install script from one dashboard."
            dark
          />
          <motion.div variants={fadeInUp} className="rounded-[28px] border border-zinc-800 bg-[#111111] p-4 shadow-demo">
            <div className="rounded-[22px] border border-zinc-800 bg-black p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Teviq Admin</p>
                  <p className="mt-1 text-lg font-bold tracking-[-0.02em] text-white">Support setup progress</p>
                </div>
                <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-bold text-[#16A34A]">Ready</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {dashboardPreview.map(([title, body]) => (
                  <div key={title} className="rounded-2xl border border-zinc-800 bg-white/[0.04] p-4">
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="mt-2 text-xs leading-5 text-zinc-500">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function LiveDemo() {
  return (
    <section id="live-demo" className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="Live Demo"
          title="Try Teviq on three demo storefronts."
          subtitle="Use the demos to test common D2C flows like order tracking, returns, product questions, shipping and human escalation."
        />
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {demoOptions.map((demo) => (
            <LightCard key={demo.title} className="flex min-h-[280px] flex-col p-8">
              <IconBox icon={FiShoppingBag} />
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{demo.title}</h3>
              <p className="mt-4 grow text-[17px] leading-[1.7] text-zinc-500">{demo.body}</p>
              <a href={demo.href} target="_blank" rel="noreferrer" className="outline-button mt-8 w-full">
                Try Demo <FiArrowRight />
              </a>
            </LightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TrustSafety() {
  return (
    <section className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="rounded-[28px] border border-zinc-100 bg-zinc-50/70 p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div variants={fadeInUp}>
              <p className="eyebrow">Trust & Safety</p>
              <h2 className="mt-5 text-balance text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-black sm:text-5xl">
                Built to answer carefully, not creatively.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.7] text-zinc-500">
                Support automation should follow brand policy. Teviq keeps brand data scoped, avoids invented order or refund claims, and escalates sensitive issues.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid gap-3">
              {trustPoints.map((point) => (
                <motion.div key={point} variants={fadeInUp} className="flex gap-3 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                    <FiCheck className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold leading-6 text-zinc-700">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FounderPresence() {
  return (
    <section className="bg-white pb-24 md:pb-[120px]">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeInUp} className="rounded-[28px] border border-zinc-100 bg-white p-8 text-center shadow-card md:p-10">
          <p className="eyebrow">Founder Note</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-[30px] font-extrabold leading-[1.15] tracking-[-0.03em] text-black sm:text-4xl">
            Built by Shivansh Gupta and team at Teviq AI for fast-growing Indian D2C brands.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.7] text-zinc-500">
            We are onboarding early pilot brands personally, helping them set up the support widget, brand knowledge and demo flows for their storefront.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

function CaseStudies() {
  const results = [
    {
      title: 'Instant customer replies',
      metric: '24/7',
      body: 'Designed to answer common ecommerce support questions whenever shoppers ask.',
    },
    {
      title: 'Less manual workload',
      metric: '50–80%',
      body: 'Can help automate a meaningful share of repetitive order, return, refund and FAQ queries.',
    },
    {
      title: 'Pilot-first setup',
      metric: '14 days',
      body: 'Early brands can test Teviq on their support flow before making a larger rollout decision.',
    },
  ];

  return (
    <section id="case-studies" className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="PILOT OUTCOMES"
          title="What we measure during a pilot."
          subtitle="We are not publishing client case studies yet. During pilots, we focus on support workload, response speed and unresolved questions."
        />
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {results.map((result) => (
            <LightCard key={result.title} className="p-8">
              <p className="text-5xl font-black leading-none tracking-[-0.04em] text-black md:text-6xl">{result.metric}</p>
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{result.title}</h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-zinc-500">{result.body}</p>
            </LightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function FAQ({ openFaq, setOpenFaq }) {
  return (
    <section id="faq" className="section-light pt-0 md:pt-0">
      <motion.div className="container-shell max-w-2xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader title="Common Questions" />
        <div className="mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div key={faq.question} variants={fadeInUp} className="border-b border-zinc-100">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left text-[17px] font-semibold text-black"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <FiMinus className="h-5 w-5 shrink-0 text-indigo" /> : <FiPlus className="h-5 w-5 shrink-0 text-indigo" />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="pb-6 text-[15px] leading-[1.7] text-zinc-500">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="demo" className="section-dark">
      <motion.div className="container-shell text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.h2 variants={fadeInUp} className="mx-auto max-w-4xl text-balance text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-[64px]">
          Want Teviq running on your store this week?
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.7] text-zinc-400">
          Book a free demo and we’ll show how Teviq can answer your store’s common order, return, shipping and FAQ questions.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/book-demo" className="primary-button">
            Book a Free Demo <FiArrowRight />
          </Link>
          <a href="https://wa.me/919555144436" className="ghost-button-dark">
            WhatsApp Us <FiArrowRight />
          </a>
        </motion.div>
        <motion.div variants={fadeInUp} className="mt-12 flex flex-col items-center justify-center gap-3 text-sm font-medium text-zinc-400 sm:flex-row sm:gap-8">
          <a href="https://wa.me/919555144436" className="transition hover:text-white">WhatsApp: +91 9555144436</a>
          <a href="mailto:helloteviq@gmail.com" className="transition hover:text-white">Email: helloteviq@gmail.com</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Footer() {
  const { pathname } = useLocation();
  const sectionHref = (hash) => (pathname === '/' ? hash : `/${hash}`);

  return (
    <footer className="border-t border-zinc-800 bg-black py-12 text-white">
      <div className="container-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div>
            <Link to="/" className="inline-flex p-1" aria-label="Teviq home">
              <BrandLogo variant="dark" className="h-9 md:h-11" />
            </Link>
            <p className="mt-4 text-sm text-zinc-400">AI customer support for D2C ecommerce brands.</p>
            <p className="mt-5 text-sm text-zinc-500">Teviq Support AI · Order Tracking · Returns & Exchanges · Knowledge Brain · Analytics</p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-medium text-zinc-400">
            <Link to="/product" className="transition hover:text-white">Product</Link>
            <a href={sectionHref('#features')} className="transition hover:text-white">Features</a>
            <Link to="/pricing" className="transition hover:text-white">Pricing</Link>
            <Link to="/case-studies" className="transition hover:text-white">Case Studies</Link>
            <Link to="/book-demo" className="transition hover:text-white">Demo</Link>
            <Link to="/privacy" className="transition hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="transition hover:text-white">Terms of Service</Link>
          </div>
        </div>
        <div className="mt-10 border-t border-zinc-800 pt-6 text-sm text-zinc-500">© {new Date().getFullYear()} Teviq AI. All rights reserved.</div>
      </div>
    </footer>
  );
}

function LightCard({ children, className = '' }) {
  return (
    <motion.div variants={fadeInUp} className={`card-light ${className}`}>
      {children}
    </motion.div>
  );
}

function DarkCard({ children, className = '' }) {
  return (
    <motion.div variants={fadeInUp} className={`card-dark ${className}`}>
      {children}
    </motion.div>
  );
}

function IconBox({ icon: Icon, dark = false, className = '' }) {
  return (
    <span className={`icon-box ${dark ? 'icon-box-dark' : ''} ${className}`}>
      <Icon className="h-5 w-5" />
    </span>
  );
}

function BrandLogo({ variant = 'light', className = '' }) {
  const src = variant === 'dark' ? '/logo-dark.png' : '/logo-light.png';

  return <img src={src} alt="Teviq.in" className={`w-auto object-contain ${className}`} />;
}

export default App;
