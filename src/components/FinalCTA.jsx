import { FiArrowUpRight, FiMessageCircle } from 'react-icons/fi';
import { Link } from '../lib/router';
import Reveal from './experience/Reveal';

export default function FinalCTA() {
  return <section id="demo" className="closing-section"><div className="container-shell"><Reveal className="closing-card">
    <div className="closing-orbits" aria-hidden="true"><i/><i/><i/></div>
    <div className="closing-topline"><span>GOOD CONVERSATIONS START HERE.</span><span className="closing-spark" aria-hidden="true">✳</span></div>
    <div className="closing-story"><h2>See Teviq in action.<br /><em>Bring your questions.</em></h2>
      <figure className="closing-customer-art"><img src="/customer-demo-moment.jpg" alt="AI-generated illustration of a smiling business owner viewing a demo on a tablet in a lilac armchair." width="1536" height="1024" loading="lazy" decoding="async" /><figcaption>AI illustration · Not a customer testimonial</figcaption></figure>
    </div>
    <div className="closing-bottom"><p>Explore support replies, sales questions and objection handling.<br />We’ll help you work out which channels fit your business.</p><div><Link to="/book-demo" className="button-white">Book a free demo <FiArrowUpRight /></Link><a href="https://wa.me/919555144436" className="closing-chat"><FiMessageCircle /> Or say hello on WhatsApp</a></div></div>
  </Reveal></div></section>;
}
