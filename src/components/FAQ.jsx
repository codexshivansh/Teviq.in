import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight, FiMinus, FiPlus } from 'react-icons/fi';
import { faqs } from '../data/content';
import { Link } from '../lib/router';
import Reveal from './experience/Reveal';
import { SectionIntro } from './experience/ExperienceSections';

export default function FAQ({ openFaq, setOpenFaq }) {
  const reduceMotion = useReducedMotion();
  return <section id="faq" className="experience-section faq-section"><div className="container-shell faq-layout">
    <div><SectionIntro label="A FEW GOOD QUESTIONS" title={<>Curious?<br /><em>Good.</em></>} description="Here’s a little more about how Teviq fits into your business." />
      <Reveal className="curious-art"><svg viewBox="0 0 360 240" role="img" aria-label="Illustration of a smiling customer asking questions and finding clear answers">
        <ellipse cx="175" cy="211" rx="143" ry="18" fill="#e6ddec" />
        <circle cx="175" cy="116" r="92" fill="#eee6f5" />
        <path d="M105 209v-30c0-37 27-58 64-58s66 21 66 58v30" fill="#9172bd" />
        <path d="M159 126v25q12 15 25 0v-25" fill="#c38965" />
        <ellipse cx="171" cy="98" rx="39" ry="47" fill="#dba481" />
        <path d="M133 101c-18-44 5-67 36-67 37 0 51 25 42 61-12-3-20-19-22-30-13 20-35 23-56 21" fill="#39283f" />
        <path d="M150 100q5-5 10 0m22 0q5-5 10 0" fill="none" stroke="#39283f" strokeWidth="3" strokeLinecap="round" />
        <path d="M160 117q12 14 24-1" fill="#fff8f0" stroke="#93593f" strokeWidth="2" strokeLinecap="round" />
        <rect x="109" y="168" width="131" height="48" rx="8" fill="#fffaf6" stroke="#c5b0d6" strokeWidth="2" />
        <circle cx="175" cy="189" r="7" fill="#ab8dc7" />
        <g className="curious-question"><path d="M24 43a16 16 0 0 1 16-16h53a16 16 0 0 1 16 16v35a16 16 0 0 1-16 16H75L58 109V94H40a16 16 0 0 1-16-16Z" fill="#fff" stroke="#c5b0d6" strokeWidth="2" /><text x="66" y="74" textAnchor="middle" fill="#7046a0" fontSize="38" fontWeight="600">?</text></g>
        <g className="curious-answer"><rect x="232" y="83" width="108" height="66" rx="18" fill="#e1eee6" stroke="#acc8b7" strokeWidth="2" /><path d="m250 116 8 8 15-17" fill="none" stroke="#347252" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /><path d="M285 109h35m-35 13h25" stroke="#729784" strokeWidth="4" strokeLinecap="round" /></g>
        <path d="M289 31v16m-8-8h16M54 155v12m-6-6h12" stroke="#a68abb" strokeWidth="3" strokeLinecap="round" />
      </svg><span>Good questions. Clear answers.</span></Reveal>
      <Link to="/book-demo" className="button-text faq-contact">Let’s talk about your brand <FiArrowUpRight /></Link></div>
    <Reveal className="new-faq-list">{faqs.map((faq,index) => {const open = openFaq === index; return <div key={faq.question} className={`new-faq-item ${open ? 'is-open' : ''}`}><h3><button type="button" aria-expanded={open} aria-controls={`faq-answer-${index}`} id={`faq-question-${index}`} onClick={() => setOpenFaq(open ? -1 : index)}><span className="faq-index">0{index+1}</span><span>{faq.question}</span>{open ? <FiMinus /> : <FiPlus />}</button></h3><AnimatePresence initial={false}>{open && <motion.div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduceMotion ? 0 : .3}} className="faq-answer"><p>{faq.answer}</p></motion.div>}</AnimatePresence></div>;})}</Reveal>
  </div></section>;
}
