import { FiArrowUpRight, FiBriefcase, FiCheck, FiShoppingBag } from 'react-icons/fi';
import { Link } from '../../lib/router';
import Reveal from './Reveal';
import { SectionIntro } from './ExperienceSections';

const audiences = [
  {
    label: 'B2B BUSINESSES', Icon: FiBriefcase, className: 'audience-b2b',
    title: 'Explain your offering. Help buyers decide.',
    description: 'For businesses selling products or services to other businesses.',
    tasks: ['Explain packages, scope and onboarding', 'Answer pricing and suitability questions', 'Handle objections and involve your team when needed'],
    question: '“Is this the right fit for our team?”',
  },
  {
    label: 'D2C BRANDS', Icon: FiShoppingBag, className: 'audience-d2c',
    title: 'Help customers choose. Support them after.',
    description: 'For brands selling directly to customers, across product categories.',
    tasks: ['Explain products and help compare options', 'Answer delivery, returns and policy questions', 'Address purchase concerns using your product information'],
    question: '“Which option works for me?”',
  },
];

export default function AudienceSection() {
  return <section id="who-its-for" className="experience-section audience-section">
    <div className="container-shell">
      <div className="section-heading-row">
        <SectionIntro label="WHO TEVIQ IS FOR" title={<>Selling to businesses?<br /><em>Or directly to customers?</em></>} description="Teviq helps with both. Give it the facts about your business, and it can support the questions your customers actually ask." />
        <Reveal><Link to="/book-demo" className="button-text">See how it fits your business <FiArrowUpRight /></Link></Reveal>
      </div>
      <div className="audience-grid">{audiences.map(({ label, Icon, className, title, description, tasks, question }, index) =>
        <Reveal key={label} delay={index * .08} className={`audience-card ${className}`}>
          <div className="audience-label"><span><Icon aria-hidden="true" /></span>{label}</div>
          <h3>{title}</h3><p>{description}</p>
          <ul>{tasks.map(task => <li key={task}><FiCheck aria-hidden="true" /><span>{task}</span></li>)}</ul>
          <div className="audience-question"><span>THE KIND OF QUESTION TEVIQ CAN HELP WITH</span><p>{question}</p></div>
        </Reveal>
      )}</div>
      <p className="audience-boundary">Answers depend on the knowledge and channels you connect. Store integrations such as live order tracking apply only where supported.</p>
    </div>
  </section>;
}
