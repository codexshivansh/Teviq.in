import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { seoByPath, siteUrl } from './data/content';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatGreetingBubble from './components/ChatGreetingBubble';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import PricingPage from './pages/PricingPage';
import BookDemoPage from './pages/BookDemoPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import LiveDemoPage from './pages/LiveDemoPage';
import PlaceholderPage from './pages/PlaceholderPage';
import LegalPage from './pages/LegalPage';
import PoliciesPage from './pages/PoliciesPage';
import PolicyPage from './pages/PolicyPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/live-demo" element={<LiveDemoPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="/policies/:policySlug" element={<PolicyPage />} />
        <Route path="/privacy" element={<PolicyPage policySlug="privacy" />} />
        <Route path="/terms" element={<LegalPage type="terms" />} />
        <Route path="/blog" element={<PlaceholderPage eyebrow="BLOG" title="Insights for AI-led ecommerce support" subtitle="Articles, playbooks, and product thinking from Teviq are coming soon." />} />
        <Route path="/help" element={<PlaceholderPage eyebrow="HELP CENTER" title="Teviq Help Center" subtitle="Setup guides, product support, and implementation resources are coming soon." />} />
      </Routes>
      <Footer />
      <ChatGreetingBubble />
    </div>
  );
}

export default App;
