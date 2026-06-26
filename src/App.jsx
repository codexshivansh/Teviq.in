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
  FiStar,
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
  { label: 'Case Studies', href: '/case-studies' },
];

const siteUrl = 'https://teviq.in';

const seoByPath = {
  '/': {
    title: 'Teviq AI | AI Customer Support for D2C Ecommerce',
    description: 'Teviq AI is a premium AI customer support platform for D2C ecommerce brands.',
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
    subtitle: 'Real-time order status and delivery support',
    icon: FiBox,
  },
  {
    title: 'Returns & Exchanges',
    subtitle: 'Automated return and exchange workflows',
    icon: FiRefreshCw,
  },
  {
    title: 'FAQs',
    subtitle: 'Instant answers for common customer questions',
    icon: FiMessageCircle,
  },
  {
    title: 'Product Recommendations',
    subtitle: 'Relevant product suggestions from your catalog',
    icon: FiShoppingBag,
  },
  {
    title: 'WhatsApp Support',
    subtitle: 'Support automation across WhatsApp',
    icon: FiSend,
  },
  {
    title: 'Human Handoff',
    subtitle: 'Escalate sensitive or complex issues to your team',
    icon: FiHelpCircle,
  },
  {
    title: 'Analytics',
    subtitle: 'Customer insights and support performance',
    icon: FiBarChart2,
  },
  {
    title: 'Custom Knowledge Base',
    subtitle: 'Brand policies, product rules, and support tone in one place',
    icon: FiFileText,
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
    title: 'Faster customer replies',
    metric: '40%+',
    body: 'Support response time reduced with AI-powered instant answers.',
  },
  {
    title: 'More conversations handled',
    metric: '6 lakh+',
    body: 'Customer conversations handled across product, order, FAQ, and support journeys.',
  },
  {
    title: 'Built for growing D2C teams',
    metric: '200+',
    body: 'Designed for brands that want support automation without losing customer experience.',
  },
];

const platformCards = [
  {
    badge: 'Available Now',
    badgeStyle: 'bg-[#DCFCE7] text-[#16A34A]',
    icon: FiMessageCircle,
    title: 'Teviq Support AI',
    body: 'AI customer support for D2C ecommerce brands. Order tracking, returns, cancellations - handled.',
    note: 'Our current focus',
  },
  {
    badge: 'Coming Soon',
    badgeStyle: 'bg-[#DBEAFE] text-[#1D4ED8]',
    icon: FiBarChart2,
    title: 'Teviq Analytics',
    body: 'Your personal AI business analyst. Weekly ROAS clarity, restock alerts, abandoned cart recovery - delivered to WhatsApp every Monday.',
  },
  {
    badge: 'In the Works',
    badgeStyle: 'bg-[#EDE9FE] text-[#6D28D9]',
    icon: FiHome,
    title: 'More Ecommerce Modules',
    body: 'Beauty. Skincare. Electronics. Jewellery. Footwear. Lifestyle. Teviq is building AI support infrastructure for ambitious D2C categories.',
  },
];

const painCards = [
  {
    icon: FiMessageCircle,
    title: 'Repetitive questions, every day',
    body: "Where's my order? Can I return this? What's your exchange policy? - the same 10 questions, answered manually, again and again.",
  },
  {
    icon: FiClock,
    title: 'Delayed replies = lost trust',
    body: "Every unanswered message is a customer who won't order again. Small brands lose customers not on price - but on response time.",
  },
  {
    icon: FiRefreshCw,
    title: 'Returns mishandled = bad reviews',
    body: "Telling a customer they can return an item that hasn't been delivered yet isn't just wrong - it's expensive.",
  },
];

const features = [
  {
    icon: FiBox,
    title: 'Real-Time Order Tracking',
    body: 'Customer types their Order ID - Teviq fetches live status instantly. Shipped, out for delivery, delivered - accurate every time.',
  },
  {
    icon: FiRefreshCw,
    title: 'Return & Cancellation - Handled',
    body: 'Bot checks if the order is actually delivered before confirming return eligibility. No false promises. No angry customers.',
  },
  {
    icon: FiAlertTriangle,
    title: 'Fraud & Abuse Auto-Escalation',
    body: 'Sensitive complaints never reach the AI. Teviq detects abuse keywords and instantly routes to your WhatsApp - serious issues get human attention.',
  },
  {
    icon: FiGlobe,
    title: 'Hinglish Auto-Detection',
    body: 'Your customers switch between Hindi and English mid-sentence. Teviq does too - automatically, naturally, without any setup.',
  },
  {
    icon: FiZap,
    title: 'Zero Downtime - Dual AI Engine',
    body: 'Powered by Gemini with Groq as instant fallback. If one goes down, the other activates in milliseconds. Your support never goes offline.',
  },
  {
    icon: FiShoppingBag,
    title: 'Product Suggestions Built In',
    body: 'Customer asks for a product under Rs. 800 in size M? Teviq filters your catalog and suggests the top 3 - right inside the chat.',
  },
];

const comparisonRows = [
  ['Live order data', 'no', 'limited', 'yes'],
  ['Return logic check', 'no', 'no', 'yes'],
  ['Hinglish support', 'no', 'no', 'yes'],
  ['Dual AI fallback', 'no', 'no', 'yes'],
  ['Fraud escalation', 'no', 'no', 'yes'],
  ['Flat pricing', 'yes', 'no', 'yes'],
  ['India-built', 'no', 'no', 'yes'],
];

const pricing = [
  {
    name: 'Standard',
    setupLabel: 'Setup',
    setup: '₹3,999 (One-time)',
    monthly: '₹999/month',
    features: ['AI customer support agent', 'Website integration', 'Product catalog training', 'Order tracking responses', 'Returns & exchange responses', 'FAQ automation'],
    cta: 'Book a Free Demo',
  },
  {
    name: 'Partner',
    tag: 'For Stravio Media Clients',
    description: "This plan is exclusively available for brands that purchase a marketing package through Stravio Media. The AI product is exactly the same as the Starter plan. The only difference is the discounted setup fee because onboarding is completed alongside your marketing implementation.",
    setupLabel: 'Setup',
    setup: '₹1,499 (One-time)',
    monthly: '₹999/month',
    features: ['Same Teviq Support AI platform', 'AI chatbot setup', 'Website integration', 'Product catalog training', 'Order tracking responses', 'Returns & exchange responses'],
    cta: 'Get Started',
    note: 'Exclusive pricing for brands using Stravio Media’s marketing services.',
    highlighted: true,
  },
];

const steps = [
  {
    number: '01',
    title: 'We connect to your store',
    body: 'Share your Shopify credentials and brand policies. We configure Teviq to your tone, products, and return rules.',
  },
  {
    number: '02',
    title: 'One script. Live instantly.',
    body: 'We embed a single line of code into your theme.liquid - your AI support agent goes live in minutes.',
  },
  {
    number: '03',
    title: 'Your customers get answers',
    body: '24/7. Accurate. No human needed. You check in when you want to - not because you have to.',
  },
];

const testimonials = [
  {
    quote: 'We used to spend 2 hours a day answering the same questions. Now Teviq handles it - we just check in once a week.',
    name: 'D2C brand founder, Jaipur',
  },
  {
    quote: 'The return logic alone saved us from 3 angry customers in the first week. Worth every rupee.',
    name: 'D2C ethnic wear brand, Delhi',
  },
  {
    quote: 'Setup took 20 minutes. We went live the same day.',
    name: 'Accessories brand, Mumbai',
  },
];

const faqs = [
  {
    question: 'Do I need technical knowledge to set up Teviq?',
    answer: 'No. We handle the entire setup - you just share access. Most brands go live within 48 hours.',
  },
  {
    question: "What happens if the AI doesn't know the answer?",
    answer: "Teviq is trained on your brand's specific policies. Out-of-scope questions are gracefully declined or escalated to you on WhatsApp.",
  },
  {
    question: 'Will it work with my existing Shopify theme?',
    answer: 'Yes. Teviq embeds via a single script tag - compatible with all Shopify themes, no coding required from your side.',
  },
  {
    question: 'What if Gemini goes down?',
    answer: 'Teviq runs on a dual AI engine - Gemini primary, Groq as instant fallback. Your customers never experience downtime.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes - we offer a 2-week free trial for select brands. Book a demo to check eligibility.',
  },
  {
    question: 'Can it handle Hindi and English both?',
    answer: "Automatically. Teviq detects Hinglish mid-conversation and matches the customer's language without any setup.",
  },
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
      <Comparison />
      <HowItWorks />
      <Testimonials />
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
            <Link key={link.label} to={link.href} className={navClass(link.href)}>
                {link.label}
            </Link>
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
                <Link key={link.label} to={link.href} onClick={closeMenu} className={`block rounded-xl px-4 py-3 text-sm font-semibold hover:bg-zinc-50 hover:text-black ${pathname === link.href ? 'text-black' : 'text-zinc-600'}`}>
                  {link.label}
                </Link>
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
  const title = 'AI customer support for D2C ecommerce brands.';

  return (
    <section id="top" className="bg-white pt-32 md:pt-[150px]">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 xl:gap-14">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-center lg:text-left">
            <motion.p variants={heroItem(0)} className="eyebrow">
              TEVIQ AI
            </motion.p>
            <motion.h1 variants={heroItem(0.12)} className="mt-7 max-w-[720px] text-balance text-[44px] font-black leading-[0.98] tracking-[-0.045em] text-black sm:text-[56px] md:text-[64px] lg:text-[clamp(64px,6vw,92px)] lg:tracking-[-0.055em]">
              {title}
            </motion.h1>
            <motion.p variants={heroItem(0.3)} className="mx-auto mt-8 max-w-xl text-[17px] leading-[1.7] text-zinc-500 lg:mx-0">
              Teviq is an AI customer support platform for D2C ecommerce brands across beauty, skincare, electronics, jewellery, footwear, lifestyle, home decor, pet brands, supplements, and gifting.
            </motion.p>
            <motion.div variants={heroItem(0.5)} className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <a href="#features" className="primary-button w-full sm:w-auto">
                See Our First Product <FiArrowRight />
              </a>
              <a href="#platform" className="ghost-button-light w-full sm:w-auto">
                Our Vision <FiArrowDown />
              </a>
            </motion.div>

            <motion.div variants={heroItem(0.7)} className="mt-12 border-t border-zinc-100 pt-9">
              <div className="grid gap-6 sm:grid-cols-3 sm:gap-0">
                {[
                  ['Teviq Support AI', 'Flagship product'],
                  ['D2C Ecommerce', 'Focused platform'],
                  ['India-first', 'Built for Bharat'],
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

          <motion.div initial="hidden" animate="visible" variants={heroItem(0.35)} className="lg:-mt-8 xl:-mt-10">
            <ProductDemoFrame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductDemoFrame() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-[720px] lg:max-w-[750px] xl:max-w-[760px]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/15 bg-black shadow-demo">
        {!videoFailed && (
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline onError={() => setVideoFailed(true)}>
            <source src="/videos/chatbot-demo.mp4" type="video/mp4" />
          </video>
        )}

        {videoFailed && <DemoFallback />}

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
              <p className="eyebrow">TRUSTED BY</p>
              <p className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-black">Built for high-volume D2C ecommerce teams.</p>
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
          label="What We're Building"
          title="The Teviq Platform"
          subtitle="One platform. Multiple AI support modules. Built for D2C ecommerce brands that need speed, accuracy, and trust at scale."
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
        <SectionHeader label="The Problem" title="Your customers message at 2am. Your support team doesn't." dark />
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
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
          label="The Solution"
          title="One AI. Every customer question. Zero human effort."
          subtitle="Teviq AI connects directly to your Shopify store - and handles support the way a trained team member would."
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
          label="PRICING"
          title="No per-conversation traps. No hidden charges. Ever."
          subtitle="Transparent setup and a simple monthly platform fee."
        />
        <motion.p variants={fadeInUp} className="mx-auto mt-10 max-w-[700px] text-center text-[15px] leading-6 text-zinc-500">
          Every new account includes a one-time setup covering AI configuration, product catalog training, website integration, and deployment. After setup, a simple monthly subscription keeps your AI support agent running with ongoing platform updates and maintenance.
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
      setSubmitMessage('Something went wrong while sending your request. Please try again or email us at hello@teviq.in.');
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
                      <a href="mailto:hello@teviq.in" className="mt-1 block font-bold text-black transition hover:text-indigo">hello@teviq.in</a>
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
                    <a href="mailto:hello@teviq.in" className="mt-2 block text-base font-bold text-black transition hover:text-indigo">hello@teviq.in</a>
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
              AI Customer Support Platform for D2C Ecommerce Brands
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
        <SectionHeader label="Setup in 48 Hours" title="You focus on products. We handle the rest." dark />
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

function CaseStudies() {
  const results = [
    {
      title: 'Faster customer replies',
      metric: '40%+',
      body: 'Support response time reduced with AI-powered instant answers.',
    },
    {
      title: 'More conversations handled',
      metric: '6 lakh+',
      body: 'Customer conversations handled across product, order, FAQ, and support journeys.',
    },
    {
      title: 'Built for growing D2C teams',
      metric: '200+',
      body: 'Designed for brands that want support automation without losing customer experience.',
    },
  ];

  return (
    <section id="case-studies" className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="CASE STUDIES"
          title="Results that feel real, not vanity metrics"
          subtitle="Show how Teviq helps D2C brands reduce support load, answer faster, and convert more shoppers."
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

function Testimonials() {
  return (
    <section className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader label="What Brands Say" title="Early brands. Real results." />
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <LightCard key={testimonial.name} className="p-8">
              <div className="flex gap-1 text-indigo">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FiStar key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-8 text-[17px] font-medium leading-[1.7] text-zinc-700">"{testimonial.quote}"</p>
              <p className="mt-8 text-sm font-bold text-black">{testimonial.name}</p>
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
          Ready to stop answering the same questions every day?
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.7] text-zinc-400">
          Book a 15-minute demo - we'll show you Teviq live on a real Shopify store. No commitment. No credit card.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/book-demo" className="primary-button">
            Book a Free Demo <FiArrowRight />
          </Link>
          <a href="https://wa.me/919555144436" className="ghost-button-dark">
            WhatsApp Us Instead <FiArrowRight />
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
            <p className="mt-5 text-sm text-zinc-500">Teviq Support AI · Order Tracking · Returns & Exchanges · WhatsApp AI · Analytics</p>
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
        <div className="mt-10 border-t border-zinc-800 pt-6 text-sm text-zinc-500">© 2025 Teviq AI. Built in India.</div>
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
