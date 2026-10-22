import BrandLogo from '../ui/BrandLogo';
import { useId, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiCheck, FiChevronDown, FiFileText, FiGlobe, FiInbox, FiInstagram, FiLayers, FiMessageCircle, FiMoreHorizontal, FiSearch, FiShield, FiZap } from 'react-icons/fi';
import { smoothEase } from './Reveal';

const channels = [
  { name: 'Website', icon: FiGlobe, color: 'violet', initials: 'AM', customer: 'Aanya M.', subject: 'Understanding a service package', question: 'What does your service package include? Our team needs help getting started.', answer: 'The demo package includes a setup session and a getting-started guide. Tell me what your team needs, and I can explain the scope or help you reach a person for a custom request.', source: 'Service FAQ', detail: 'B2B demo · Package scope & onboarding', note: 'B2B example: explain service scope and help a prospective customer take the next step.', tag: 'Service enquiry' },
  { name: 'WhatsApp', icon: FiMessageCircle, color: 'mint', initials: 'RK', customer: 'Rohan K.', subject: 'Checking delivery expectations', question: 'How long does delivery usually take?', answer: 'The demo store’s shipping policy estimates 3–5 business days after dispatch. Actual timing can vary by location. Would you like help checking an existing order?', source: 'Shipping policy', detail: 'D2C demo · Illustrative delivery policy', note: 'D2C example: answer delivery questions using the business’s own policy.', tag: 'Policy answer' },
  { name: 'Instagram', icon: FiInstagram, color: 'peach', initials: 'NS', customer: 'Neha S.', subject: 'Working through a price concern', question: 'I’m interested, but the price is higher than I expected.', answer: 'I understand. The sample package includes a setup session and a getting-started guide. Are you comparing what is included, or is the total budget the concern?', source: 'Service package FAQ', detail: 'Sample inclusions · Setup session + guide', note: 'Sales objection example: understand the concern, explain known inclusions, then offer a human follow-up.', tag: 'Pre-purchase guidance' },
];

export default function ProductExperience({ compact = false }) {
  const [active, setActive] = useState(1);
  const reduceMotion = useReducedMotion();
  const tabsRef = useRef([]);
  const id = useId();
  const selected = channels[active];
  const ChannelIcon = selected.icon;
  const selectByKey = (event, index) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % channels.length;
    else if (event.key === 'ArrowLeft') next = (index + channels.length - 1) % channels.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = channels.length - 1;
    else return;
    event.preventDefault(); setActive(next); tabsRef.current[next]?.focus();
  };
  return (
    <div className={`product-experience ${compact ? 'product-experience--compact' : ''}`}>
      <div className="demo-scenarios" role="group" aria-label="Choose a conversation example"><span>SEE WHAT TEVIQ DOES</span><div>{['B2B enquiry', 'Customer support', 'Sales objection'].map((label,index) => <button type="button" key={label} aria-pressed={active === index} onClick={() => setActive(index)}>{label}</button>)}</div></div>
      <div className="experience-channel-tabs" role="tablist" aria-label="Preview a customer channel">
        {channels.map(({ name, icon: Icon }, index) => (
          <button key={name} ref={(node) => { tabsRef.current[index] = node; }} id={`${id}-tab-${index}`} role="tab" aria-selected={active === index} aria-controls={`${id}-panel`} tabIndex={active === index ? 0 : -1} onKeyDown={(e) => selectByKey(e, index)} onClick={() => setActive(index)} className={active === index ? 'is-active' : ''}>
            {active === index && <motion.span className="channel-tab-bg" layoutId={`${id}-indicator`} transition={{ duration: reduceMotion ? 0 : 0.35, ease: smoothEase }} />}
            <Icon /><span>{name}</span>
          </button>
        ))}
      </div>
      <div className="experience-window" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${active}`}>
        <div className="experience-toolbar"><div className="window-dots" aria-hidden="true"><i /><i /><i /></div><span><FiShield /> Your brand workspace</span><span className="sample-label">Interactive preview</span></div>
        <div className="experience-app">
          <aside className="experience-sidebar" aria-label="Illustrative workspace sidebar">
            <div className="workspace-name"><span className="product-brand-logo"><BrandLogo /></span><span>Your business<small>Sample workspace</small></span><FiChevronDown /></div>
            <div className="sidebar-section">WORKSPACE</div>
            <div className="sidebar-link selected"><FiInbox /> Conversations <b>3</b></div>
            <div className="sidebar-link"><FiFileText /> Knowledge</div>
            <div className="sidebar-link"><FiLayers /> Channels</div>
            <div className="sidebar-bottom"><span className="brain-small"><FiZap /></span><span>Your brand brain<small>Context, connected.</small></span></div>
          </aside>
          <div className="experience-conversation-list">
            <div className="list-heading">Inbox <FiSearch /></div>
            {channels.map((channel, index) => (
              <button key={channel.name} onClick={() => setActive(index)} className={`sample-conversation ${index === active ? 'selected' : ''}`} aria-label={`Preview ${channel.name} conversation`} aria-pressed={index === active}>
                <span className={`sample-avatar ${channel.color}`}>{channel.initials}</span>
                <span><strong>{channel.customer}</strong><small>{channel.subject}</small><em><channel.icon /> {channel.name}</em></span>
              </button>
            ))}
            <div className="inbox-note"><FiCheck /><span>One inbox.<br />A little more headspace.</span></div>
          </div>
          <div className="experience-chat">
            <div className="chat-heading"><span className={`sample-avatar ${selected.color}`}>{selected.initials}</span><div><strong>{selected.customer}</strong><small><ChannelIcon /> {selected.name}</small></div><FiMoreHorizontal /></div>
            <div className="chat-body" aria-live="polite" aria-atomic="true">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={active} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }} transition={{ duration: 0.25, ease: smoothEase }}>
                  <div className="chat-date">Sample conversation</div>
                  <div className="customer-message">{selected.question}</div>
                  <div className="brain-status"><FiZap /> Teviq used your brand knowledge</div>
                  <motion.div className="assistant-message" initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 0.13, duration: 0.35 }}>
                    <div className="assistant-label">TEVIQ BRAIN</div>
                    <p>{selected.answer}</p>
                    <div className="knowledge-citation"><FiFileText /><span>{selected.source}<small>{selected.detail}</small></span><FiCheck /></div>
                    {active === 1 && <details className="demo-source"><summary>See the sample policy behind this reply</summary><p><strong>Sample shipping policy:</strong> Estimated delivery is 3–5 business days after dispatch. Timing may vary by destination.</p><small>Example knowledge only—not Teviq’s own shipping terms.</small></details>}
                  </motion.div>
                  {active === 2 && <details className="demo-followup"><summary>See the next exchange</summary><div className="customer-message">The total budget is my concern.</div><div className="assistant-message"><div className="assistant-label">TEVIQ BRAIN</div><p>I don’t have a lower-priced option in the sample FAQ. Would you like me to pass your budget and requirements to the team so they can confirm what’s possible?</p></div><p className="demo-followup-note">Illustrative follow-up · No discount invented. No purchase assumed.</p></details>}
                  <div className="conversation-tag"><FiCheck /> {selected.tag}</div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="sample-composer"><span>AI and your team, in the same conversation.</span><FiArrowUpRight /></div>
          </div>
        </div>
      </div>
      <p className="experience-caption">{selected.note} <span>Illustrative UI · Sample policies and conversations.</span></p>
    </div>
  );
}
