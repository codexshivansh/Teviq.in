import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from '../lib/router';
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import { navLinks, resourceNavItems } from '../data/content';
import BrandLogo from './ui/BrandLogo';
import DropdownItem from './ui/DropdownItem';

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

export default Navbar;
