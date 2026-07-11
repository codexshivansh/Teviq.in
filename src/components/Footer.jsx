import { Link, useLocation } from 'react-router-dom';
import BrandLogo from './ui/BrandLogo';

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

export default Footer;
