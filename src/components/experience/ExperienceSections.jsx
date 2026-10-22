import BrainLogo from '../ui/BrainLogo';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowDown, FiArrowRight, FiArrowUpRight, FiCheck, FiCheckCircle, FiFileText, FiGlobe, FiHeart, FiInstagram, FiLayers, FiMessageCircle, FiPackage, FiShield, FiShoppingBag, FiSliders, FiUploadCloud, FiUsers, FiZap } from 'react-icons/fi';
import { Link } from '../../lib/router';
import { FaWhatsapp } from 'react-icons/fa';
import Reveal, { smoothEase } from './Reveal';

export function SectionIntro({ label, title, description, light = false, heading = 'h2' }) {
  const Heading = heading;
  return <Reveal className={`section-intro ${light ? 'section-intro--light' : ''}`}><span className="section-kicker"><span />{label}</span><Heading>{title}</Heading>{description && <p>{description}</p>}</Reveal>;
}

export function ConversationStrip() {
  const questions = ['“What’s included?”', '“Where’s my order?”', '“Why does it cost more?”', '“How do we get started?”'];
  return <div className="conversation-strip"><div className="container-shell"><span className="strip-label">FAMILIAR QUESTIONS.<br />A FRESH WAY TO ANSWER.</span><div className="strip-questions">{questions.map((q) => <span key={q}>{q}</span>)}</div></div></div>;
}

export function ChannelSection() {
  return (
    <section id="features" className="experience-section channel-section">
      <div className="container-shell">
        <div className="section-heading-row"><SectionIntro label="WHERE TEVIQ WORKS" title={<>Your website. WhatsApp.<br /><em>And Instagram.</em></>} description="Answer website enquiries and customer DMs from one workspace, using the same business knowledge. Choose the channels included in your plan." /><Reveal><Link to="/product" className="button-text">Explore the product <FiArrowUpRight /></Link></Reveal></div>
        <div className="channel-showcase-grid">
          <Reveal className="channel-showcase channel-showcase--website"><div className="channel-card-heading"><FiGlobe /><span>01 / WEBSITE</span></div><h3>Turn website visits<br />into useful conversations.</h3><p>Answer product and service questions, clarify what is included and help customers take the next step.</p><div className="website-art" aria-hidden="true"><div className="mini-browser"><span /><span /><span /></div><div className="mini-store"><div className="mini-product"><div className="abstract-product" /></div><div><i /><i /><i /><b>Explore what’s included</b></div></div><div className="mini-bubble"><BrainLogo /> A little help choosing?<span className="bubble-spark">✦</span></div></div><span className="channel-card-foot">Included from Starter <FiArrowUpRight /></span></Reveal>
          <Reveal delay={0.08} className="channel-showcase channel-showcase--whatsapp"><div className="channel-card-heading"><FiMessageCircle /><span>02 / WHATSAPP</span></div><h3>Stay close.<br />Without staying online.</h3><p>Bring your policies and answers to the place your customers already love to message.</p><div className="whatsapp-art" aria-hidden="true"><div className="art-message art-message--customer">Hey! How do returns work?<small>10:42</small></div><div className="art-message art-message--answer">Let me help you with that.<br />Here’s what our policy says…<small>10:42 <FiCheck /></small></div><div className="art-label"><FiFileText /> Answers from your policy</div></div><span className="channel-card-foot">Included from Standard <FiArrowUpRight /></span></Reveal>
          <Reveal delay={0.16} className="channel-showcase channel-showcase--instagram"><div className="channel-card-heading"><FiInstagram /><span>03 / INSTAGRAM</span></div><h3>From “love this”<br />to “tell me more.”</h3><p>Bring support and sales assistance to DMs. Explain your offering while interest is still fresh.</p><div className="instagram-art" aria-hidden="true"><div className="social-post"><span className="social-avatar" /><span>your.brand</span><div className="social-artwork"><span>made for<br /><em>everyday.</em></span><div /></div><div className="social-actions"><FiHeart /><FiMessageCircle /><FiArrowUpRight /></div></div><div className="social-dm">What’s included in this? <FiHeart /></div></div><span className="channel-card-foot">Included in Growth <FiArrowUpRight /></span></Reveal>
        </div>
      </div>
    </section>
  );
}

const knowledgeExamples = [
  { title: 'Your policies', icon: FiFileText, line: 'The details that make your brand yours.', source: 'Returns policy', customer: 'Can I exchange an unused item?', reply: 'Let’s check your order against the store’s exchange policy. Is the item unused and still within the eligible period?', foot: 'Policy-led guidance' },
  { title: 'Products & services', icon: FiShoppingBag, line: 'Guidance and sales objection handling.', source: 'Product & service knowledge', customer: 'It sounds useful, but I’m not sure it’s worth the price.', reply: 'What matters most to you—features, scope or budget? I can walk you through what is included so you can decide whether it meets your needs.', foot: 'Understand the concern. Help the customer decide.' },
  { title: 'Your conversations', icon: FiMessageCircle, line: 'Keep the thread of the conversation.', source: 'Conversation context', customer: 'About the setup we were discussing…', reply: 'We were discussing what your team needs to get started. Would you like to continue with the setup steps or ask something else?', foot: 'Context for the next answer' },
];

export function KnowledgeSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const example = knowledgeExamples[active];
  return (
    <section id="brain" className="knowledge-section experience-section">
      <div className="knowledge-orbit" aria-hidden="true" />
      <div className="container-shell knowledge-layout">
        <div><SectionIntro light label="HOW TEVIQ ANSWERS" title={<>Your business knowledge.<br /><em>Behind every answer.</em></>} description="Add your FAQs, policies and product or service details. Teviq uses that information and available conversation history to ground its replies in your business. Explore the examples below." />
          <div className="knowledge-selectors" aria-label="Explore Teviq knowledge sources">{knowledgeExamples.map(({ title, icon: Icon, line }, index) => <button key={title} onClick={() => setActive(index)} aria-pressed={active === index} className={active === index ? 'is-active' : ''}><Icon /><span><strong>{title}</strong><small>{line}</small></span><FiArrowUpRight /></button>)}</div>
        </div>
        <Reveal className="knowledge-canvas">
          <div className="source-stack"><div /><div /><div><FiFileText /><span>{example.source}<small>Your brand, your rules.</small></span><span className="source-check"><FiCheck /></span></div></div>
          <div className="knowledge-connector" aria-hidden="true"><span /><span /><span /></div>
          <div className="knowledge-core"><span className="core-ring" /><span className="core-ring second" /><BrainLogo /><p>TEVIQ BRAIN</p></div>
          <div className="knowledge-connector short" aria-hidden="true"><span /></div>
          <div className="knowledge-result" aria-live="polite"><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: smoothEase }}><span className="sample-label">ILLUSTRATIVE CONVERSATION</span><h3>“{example.customer}”</h3><p>{example.reply}</p><div><FiCheckCircle />{example.foot}</div></motion.div></AnimatePresence></div>
        </Reveal>
      </div>
    </section>
  );
}

export function TeamSection() {
  return <section className="experience-section team-section"><div className="container-shell team-layout">
    <Reveal className="team-visual"><div className="team-visual-heading"><span className="status-pip" /> PEOPLE + AI</div><div className="handoff-thread"><div className="handoff-message">I’d like to speak with someone about my order.</div><div className="handoff-note"><span className="handoff-teviq-badge">Teviq</span><span>This one needs your team.<small>The conversation stays in view.</small></span></div><div className="handoff-person"><div className="team-avatar"><FiUsers /></div><div><strong>Your team takes it from here.</strong><span>Customer care, with a human touch.</span></div><FiCheck /></div></div><div className="human-caption">More room for the conversations that matter.</div></Reveal>
    <div><SectionIntro label="AUTOMATION WITH GOOD JUDGMENT" title={<>More headspace.<br /><em>Same care.</em></>} description="Let Teviq help with the everyday questions, so your team can focus on the conversations that need a person." /><div className="team-benefits"><div><FiShield /><span><strong>Your knowledge stays scoped to your brand.</strong><p>Brand-specific policies and access keep support grounded in the right information.</p></span></div><div><FiUsers /><span><strong>Your team stays part of the conversation.</strong><p>Review conversations and follow up when a question needs personal attention.</p></span></div><div><FiMessageCircle /><span><strong>English, Hindi, or a little of both.</strong><p>Support that can meet your customers in the language they use.</p></span></div></div></div>
  </div></section>;
}

function JourneyArtwork({ step }) {
  return <div className={`journey-art journey-art-${step}`} aria-hidden="true">
    {step === 0 && <><div className="journey-doc doc-back"><FiFileText /><span>FAQs</span><i /><i /></div><div className="journey-doc doc-front"><FiFileText /><span>Your knowledge</span><small>Products · Services · Policies</small><i /><i /><div className="journey-upload"><FiUploadCloud /><span>Add your files</span></div></div></>}
    {step === 1 && <><svg className="journey-connectors" viewBox="0 0 320 180"><path d="M160 76 L70 132 M160 76 L160 132 M160 76 L250 132" /></svg><BrainLogo className="journey-hub" /><div className="journey-channel-nodes"><span><b>www</b><small>Website</small></span><span><FaWhatsapp /><small>WhatsApp</small></span><span><FiInstagram /><small>Instagram</small></span></div></>}
    {step === 2 && <div className="journey-test-panel"><div><span className="status-pip" /><strong>Review the answers</strong></div><p><FiCheckCircle /><span>Knowledge checked</span></p><p><FiCheckCircle /><span>Channels tested</span></p><div className="journey-ready"><FiCheck /><span>Your team gives the go-ahead</span></div></div>}
  </div>;
}

export function JourneySection() {
  const steps = [
    { icon: FiUploadCloud, label: 'Bring your knowledge', body: 'Add your FAQs, policies, product and service information. Give the brain something real to work with.' },
    { icon: FiLayers, label: 'Connect your channels', body: 'Install the website widget and connect the WhatsApp or Instagram accounts included in your plan.' },
    { icon: FiSliders, label: 'Test. Refine. Go live.', body: 'Ask the questions your customers ask. Review the answers with your team, then start helping customers.' },
  ];
  return <section id="how-it-works" className="experience-section journey-section"><div className="container-shell"><div className="section-heading-row"><SectionIntro label="HOW YOU GET STARTED" title={<>Add knowledge. Connect.<br /><em>Test before you go live.</em></>} /><Reveal><p className="section-side-note">We help with setup. Your team reviews the answers before putting Teviq in front of customers.</p></Reveal></div><div className="journey-grid">{steps.map(({ icon: Icon, label, body }, index) => <Reveal key={label} delay={index * 0.1} className="journey-step"><div className="journey-track"><span><Icon /></span><span className="journey-line" aria-hidden="true" /><b>0{index + 1}</b></div><JourneyArtwork step={index} /><h3>{label}</h3><p>{body}</p></Reveal>)}</div><Reveal className="journey-footnote"><span>Setup time depends on your accounts and verification status.</span><Link to="/policies/setup-and-onboarding">What to expect <FiArrowRight /></Link></Reveal></div></section>;
}
