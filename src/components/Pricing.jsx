import { useState } from 'react';
import { FiArrowUpRight, FiCheck, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from '../lib/router';
import { pricingPlans } from '../data/content';
import Reveal from './experience/Reveal';
import { SectionIntro } from './experience/ExperienceSections';

const channelBadges = [
  { label: 'Website', style: 'web', Icon: null },
  { label: 'WhatsApp', style: 'whatsapp', Icon: FaWhatsapp },
  { label: 'Instagram', style: 'instagram', Icon: FiInstagram },
];
export default function Pricing({ page = false }) {
  const [selected, setSelected] = useState(2);
  return <section id="pricing" className={`experience-section pricing-section ${page ? 'pricing-section--page' : ''}`}>
    <div className="container-shell">
      <div className="pricing-heading"><SectionIntro heading={page ? 'h1' : 'h2'} label="SIMPLE MONTHLY PLANS" title={<>Choose your channels.<br /><em>Pick your plan.</em></>} description="Website only, website + WhatsApp, or all three channels. Start with the conversations you need to handle today." />
        <Reveal className="plan-picker"><span>Where do your customers reach you?</span><div role="group" aria-label="Highlight a plan by channel">{['Website', '+ WhatsApp', '+ Instagram'].map((name,index) => <button key={name} aria-pressed={selected === index} onClick={() => setSelected(index)} className={selected === index ? 'selected' : ''}>{name}</button>)}</div></Reveal>
      </div>
      <div className="new-pricing-grid">{pricingPlans.map((plan,index) => <Reveal key={plan.name} delay={index * 0.07} className={`new-price-card ${selected === index ? 'is-selected' : ''}`}>
        <div className="price-card-top"><span className="plan-number">0{index+1}</span><span className="plan-selection-label">{selected === index ? 'YOUR SELECTED CHANNELS' : index === 2 ? 'THE COMPLETE PICTURE' : 'YOUR NEXT CHAPTER'}</span></div>
        <h3>{plan.name}</h3><p className="plan-description">{plan.tagline}</p>
        <div className="plan-amount">{plan.monthly}<span>/ month</span></div>
        <div className="plan-channel-badges" aria-label={`${plan.name} channels`}>
          {plan.channels.map((channel,i) => { const { label, style, Icon }=channelBadges[i]; return <div key={channel} className={`plan-channel-badge badge-${style}`}><span className="channel-badge-symbol" aria-hidden="true">{Icon ? <Icon /> : <b>www</b>}</span><span>{label}</span></div>; })}
        </div>
        <Link to="/book-demo" className={selected === index ? 'button-violet' : 'button-outline'}>Choose {plan.name} <FiArrowUpRight /></Link>
        <div className="plan-features-heading">WHAT'S INCLUDED</div><ul>{plan.features.map(feature => <li key={feature}><FiCheck />{feature}</li>)}</ul>
      </Reveal>)}</div>
      <Reveal className="pricing-notes"><p>Standard prices · Per store · Billed monthly</p><p>Applicable WhatsApp message charges may be separate from your Teviq plan. <Link to="/policies/pricing-and-plans">View plan terms <FiArrowUpRight /></Link></p></Reveal>
    </div>
  </section>;
}
