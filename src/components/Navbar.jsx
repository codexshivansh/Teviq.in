import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion, useScroll } from 'framer-motion';
import { Link, useLocation } from '../lib/router';
import { FiArrowUpRight, FiChevronDown, FiMenu, FiX } from 'react-icons/fi';
import BrandLogo from './ui/BrandLogo';

const links = [{label:'The product',href:'/product'},{label:'Pricing',href:'/pricing'},{label:'Try it live',href:'/live-demo'}];
const resources = [{title:'Our approach',href:'/case-studies',body:'What we measure and how we work.'},{title:'Policies & information',href:'/policies',body:'The details, in plain language.'}];
export default function Navbar({isMenuOpen,setIsMenuOpen,closeMenu}) {
  const {pathname} = useLocation();
  const [resourcesOpen,setResourcesOpen] = useState(false);
  const resourceRef=useRef(null);
  const menuButton=useRef(null);
  const headerRef=useRef(null);
  const reduceMotion=useReducedMotion();
  const {scrollYProgress}=useScroll();
  useEffect(() => { closeMenu();setResourcesOpen(false); },[pathname]);
  useEffect(() => {
    const onPointer=(e)=>{if(resourceRef.current && !resourceRef.current.contains(e.target))setResourcesOpen(false);};
    const onKey=(e)=>{
      if(e.key==='Escape'){setResourcesOpen(false);if(isMenuOpen){closeMenu();menuButton.current?.focus();}}
      if(e.key==='Tab' && isMenuOpen && headerRef.current){
        const nodes=Array.from(headerRef.current.querySelectorAll('a,button')).filter(el=>el.offsetParent!==null);
        const first=nodes[0],last=nodes[nodes.length-1];
        if(e.shiftKey && document.activeElement===first){e.preventDefault();last?.focus();}
        else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first?.focus();}
      }
    };
    document.addEventListener('pointerdown',onPointer);document.addEventListener('keydown',onKey);
    return()=>{document.removeEventListener('pointerdown',onPointer);document.removeEventListener('keydown',onKey);};
  },[isMenuOpen]);
  return <header ref={headerRef} className="experience-nav"><div className="nav-capsule"><nav aria-label="Main navigation" className="new-nav-inner"><Link to="/" aria-label="Teviq home" onClick={closeMenu} className="new-nav-logo"><BrandLogo className="h-7"/></Link><div className="new-nav-links">{links.map(link=><Link key={link.href} to={link.href} aria-current={pathname===link.href?'page':undefined} className={pathname===link.href?'active':''}>{link.label}</Link>)}<div ref={resourceRef} className="nav-resources"><button onClick={()=>setResourcesOpen(v=>!v)} aria-expanded={resourcesOpen} aria-controls="resource-menu">Resources <FiChevronDown className={resourcesOpen?'rotated':''}/></button><AnimatePresence>{resourcesOpen&&<motion.div id="resource-menu" className="new-resource-menu" initial={{opacity:0,y:reduceMotion?0:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:reduceMotion?0:8}} transition={{duration:.18}}>{resources.map(item=><Link key={item.href} to={item.href} onClick={()=>setResourcesOpen(false)}><span>{item.title}<small>{item.body}</small></span><FiArrowUpRight/></Link>)}</motion.div>}</AnimatePresence></div></div><Link to="/book-demo" className="button-ink nav-demo">Let’s talk <FiArrowUpRight/></Link><button ref={menuButton} className="nav-menu-toggle" aria-label={isMenuOpen?'Close navigation':'Open navigation'} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={()=>setIsMenuOpen(v=>!v)}>{isMenuOpen?<FiX/>:<FiMenu/>}</button></nav><AnimatePresence>{isMenuOpen&&<motion.nav id="mobile-navigation" aria-label="Mobile navigation" className="new-mobile-nav" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduceMotion?0:.3}}>{[...links,...resources.map(r=>({label:r.title,href:r.href}))].map((link,i)=><Link key={link.href} to={link.href} onClick={closeMenu}><small>0{i+1}</small>{link.label}<FiArrowUpRight/></Link>)}<Link to="/book-demo" className="button-violet" onClick={closeMenu}>Book a free demo <FiArrowUpRight/></Link></motion.nav>}</AnimatePresence><motion.div className="nav-reading-progress" style={{scaleX:scrollYProgress}}/></div></header>;
}
