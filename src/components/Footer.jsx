import { Link } from '../lib/router';
import { FiArrowUpRight } from 'react-icons/fi';
import BrandLogo from './ui/BrandLogo';

export default function Footer() {
  const groups = [
    {title:'EXPLORE',links:[['Product','/product'],['Pricing','/pricing'],['Try the demos','/live-demo'],['Book a demo','/book-demo']]},
    {title:'THE DETAILS',links:[['Our approach','/case-studies'],['Service policies','/policies'],['Privacy','/privacy'],['Data deletion','/data-deletion'],['Terms of service','/terms']]},
  ];
  return <footer className="new-footer"><div className="container-shell"><div className="footer-main"><div className="footer-brand"><Link to="/" aria-label="Teviq home"><BrandLogo className="h-9"/></Link><p>A little more care.<br />A lot more possibility.</p><a href="mailto:helloteviq@gmail.com">Let’s talk <FiArrowUpRight /></a></div>{groups.map(group => <div className="footer-link-group" key={group.title}><h2>{group.title}</h2>{group.links.map(([title,href]) => <Link key={href} to={href}>{title}</Link>)}</div>)}<div className="footer-signoff"><span className="footer-asterisk" aria-hidden="true">✳</span><p>Built with care<br />for growing brands.</p><span>WEBSITE · WHATSAPP · INSTAGRAM</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Teviq AI</span><span>Human care. AI possibility.</span><a href="#top" onClick={(event) => {event.preventDefault();window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto':'smooth'});}}>Back to top ↑</a></div></div></footer>;
}
