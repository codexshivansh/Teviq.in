import { FiArrowUpRight, FiShoppingBag, FiHeadphones, FiDroplet } from 'react-icons/fi';
import { demoOptions } from '../data/content';
import Reveal from '../components/experience/Reveal';
import { Link } from '../lib/router';
import FinalCTA from '../components/FinalCTA';
const icons=[FiShoppingBag,FiHeadphones,FiDroplet];
export default function LiveDemoPage(){
 return <main><section className="page-hero"><div className="container-shell"><Reveal><span className="section-kicker"><span/>LESS EXPLAINING. MORE EXPLORING.</span><h1>Explore the storefront.<br /><em>See where support fits.</em></h1><p className="page-lead">Browse sample storefront layouts and widget placement. AI replies in these sample stores are currently unavailable. Book a guided walkthrough to test questions with the team.</p></Reveal></div></section><section className="container-shell demo-store-grid" aria-label="Demo storefronts">{demoOptions.map((demo,index)=>{const Icon=icons[index];return <Reveal key={demo.title} delay={index*.1} className="demo-store-card"><div className="demo-store-cover"><span>DEMO STOREFRONT / 0{index+1}</span><div><Icon/></div></div><div className="demo-store-body"><h2>{demo.title}</h2><p>{demo.body}</p><a href={demo.href} target="_blank" rel="noreferrer" className="button-outline">Preview storefront <FiArrowUpRight/><span className="sr-only"> (opens in a new tab)</span></a></div></Reveal>;})}</section><div className="container-shell demo-disclaimer">These previews use sample content, not live customer orders. Your Teviq setup uses your own brand knowledge. <Link to="/book-demo">Book a guided walkthrough</Link>.</div><FinalCTA/></main>;
}
