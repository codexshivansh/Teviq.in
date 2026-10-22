import { FiArrowUpRight, FiShoppingBag, FiHeadphones, FiDroplet } from 'react-icons/fi';
import { demoOptions } from '../data/content';
import Reveal from '../components/experience/Reveal';
import FinalCTA from '../components/FinalCTA';
const icons=[FiShoppingBag,FiHeadphones,FiDroplet];
export default function LiveDemoPage(){
 return <main><section className="page-hero"><div className="container-shell"><Reveal><span className="section-kicker"><span/>LESS EXPLAINING. MORE EXPLORING.</span><h1>Don’t just read about it.<br /><em>Ask it something.</em></h1><p className="page-lead">Step into a demo storefront and try the support experience. Ask a product question, explore a return, or see how a conversation unfolds.</p></Reveal></div></section><section className="container-shell demo-store-grid" aria-label="Demo storefronts">{demoOptions.map((demo,index)=>{const Icon=icons[index];return <Reveal key={demo.title} delay={index*.1} className="demo-store-card"><div className="demo-store-cover"><span>DEMO STOREFRONT / 0{index+1}</span><div><Icon/></div></div><div className="demo-store-body"><h2>{demo.title}</h2><p>{demo.body}</p><a href={demo.href} target="_blank" rel="noreferrer" className="button-outline">Explore storefront <FiArrowUpRight/><span className="sr-only"> (opens in a new tab)</span></a></div></Reveal>;})}</section><div className="container-shell demo-disclaimer">These are demo stores with sample content. Your Teviq setup uses your own brand knowledge.</div><FinalCTA/></main>;
}
