import { FiMessageCircle, FiCheckCircle, FiUsers, FiArrowUpRight } from 'react-icons/fi';
import { Link } from '../lib/router';
import Reveal from '../components/experience/Reveal';
import FinalCTA from '../components/FinalCTA';
const measures=[
 {icon:FiMessageCircle,title:'Answer quality',body:'Does the reply match the brand’s policies and the customer’s actual question? We look at useful answers, not just fast ones.'},
 {icon:FiCheckCircle,title:'Everyday workload',body:'Which repeat questions can Teviq help with, and which still need a person? That balance shapes the setup.'},
 {icon:FiUsers,title:'The customer experience',body:'Can shoppers get the context they need, and can your team pick up a conversation when it needs more attention?'},
];
export default function CaseStudiesPage(){return <main><section className="page-hero"><div className="container-shell"><Reveal><span className="section-kicker"><span/>OUR APPROACH</span><h1>Good support is more<br />than <em>a fast reply.</em></h1><p className="page-lead">We are building Teviq around the everyday work of ecommerce teams. Here’s what we look at when testing a brand’s support flow.</p></Reveal></div></section><section className="container-shell approach-grid">{measures.map((item,i)=><Reveal key={item.title} delay={i*.1} className="approach-card"><item.icon/><span>0{i+1}</span><h2>{item.title}</h2><p>{item.body}</p></Reveal>)}</section><div className="container-shell approach-note"><p>We aren’t publishing customer case studies yet. A walkthrough is the best way to see how Teviq could fit your brand.</p><Link to="/book-demo" className="button-text">See the product together <FiArrowUpRight/></Link></div><FinalCTA/></main>;}
