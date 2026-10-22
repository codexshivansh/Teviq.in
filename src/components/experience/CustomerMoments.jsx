import { motion, useReducedMotion } from 'framer-motion';
import { FiCheck, FiMessageCircle } from 'react-icons/fi';
import { SectionIntro } from './ExperienceSections';

export default function CustomerMoments() {
  const reduceMotion = useReducedMotion();
  return <section id="customer-moments" className="customer-moments experience-section">
    <div className="container-shell customer-moments-layout">
      <div><SectionIntro label="THE HUMAN SIDE OF EVERY ANSWER" title={<>A little clarity.<br /><em>A better conversation.</em></>} description="A question answered. A concern understood. A clear next step. Help B2B and D2C customers feel informed, whether they’re choosing a product, exploring a service or asking for support." />
        <p className="customer-moments-note"><FiMessageCircle /> Helpful answers. No pressure.</p>
      </div>
      <figure className="customer-moments-art">
        <img src="/helpful-conversations.jpg" alt="Illustration of two smiling people using a phone and a laptop." width="1536" height="1024" loading="lazy" decoding="async" />
        <motion.div className="customer-moment-bubble" initial={reduceMotion ? false : { opacity: 0, y: 15, scale: .96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .8 }} transition={{ duration: .55, delay: .15 }}><FiCheck /><span>That clears it up. Thank you!</span></motion.div>
        <figcaption>Illustrative customer moment · Not a client testimonial</figcaption>
      </figure>
    </div>
  </section>;
}
