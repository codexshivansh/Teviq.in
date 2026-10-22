import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from '../lib/router';
import Reveal from '../components/experience/Reveal';
import ProductExperience from '../components/experience/ProductExperience';
import { KnowledgeSection, SectionIntro, TeamSection } from '../components/experience/ExperienceSections';
import FinalCTA from '../components/FinalCTA';

const features=[
 ['Business knowledge','Give Teviq your FAQs, policies, product information and service details. Update the knowledge as your business changes.'],
 ['Three customer channels','Website chat, WhatsApp Business and Instagram DMs, with the channels available in your selected plan.'],
 ['Sales & objection handling','Help B2B and D2C customers compare options and work through concerns about price, scope or suitability, using your product and service information—not invented offers.'],
 ['Store context','Connect Shopify for product and order context. Order lookups use identity checks before sharing customer details.'],
 ['Conversation continuity','Use earlier messages and replies in a customer’s conversation to make the next answer more useful.'],
 ['Human follow-up','Keep conversations visible to your team so they can review and follow up when needed.'],
 ['English, Hindi & Hinglish','Meet customers in the language they use, with answers shaped by your brand knowledge.'],
];
export default function ProductPage(){
 return <main className="product-page"><section className="page-hero"><div className="container-shell"><Reveal><span className="section-kicker"><span/>THE PRODUCT</span><h1>A good conversation<br />starts with <em>context.</em></h1><p className="page-lead">Your products, services and business knowledge. Teviq helps B2B and D2C teams support customers and handle sales enquiries across their channels.</p><Link to="/book-demo" className="button-ink mt-7">See it with your brand <FiArrowUpRight/></Link></Reveal></div></section><section className="product-preview-section"><div className="container-shell"><Reveal><ProductExperience/></Reveal></div></section><KnowledgeSection/><section className="experience-section product-feature-index"><div className="container-shell"><SectionIntro label="THE EVERYDAY ESSENTIALS" title={<>Thoughtful support.<br /><em>From the inside out.</em></>}/>{features.map(([title,body],index)=><Reveal className="feature-index-row" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{body}</p></Reveal>)}</div></section><TeamSection/><FinalCTA/></main>;
}
