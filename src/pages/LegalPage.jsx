import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../lib/animations';
import FinalCTA from '../components/FinalCTA';

function LegalPage({ type }) {
  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';
  const subtitle = isPrivacy
    ? 'How Teviq handles data, access, and customer support information.'
    : 'The service terms for using Teviq products and implementation support.';
  const points = isPrivacy
    ? ['We only use shared store and support data to configure and operate Teviq.', 'Sensitive issues can be escalated to your team for human review.', 'Brands can request updates or removal of implementation data by contacting Teviq.']
    : ['Teviq setup, pricing, and support terms are governed by the plan agreed with your team.', 'Brands are responsible for providing accurate store policies and support rules.', 'Support automation should be reviewed regularly as brand policies change.'];

  return (
    <main>
      <section className="bg-white pb-24 pt-32 md:pb-[150px] md:pt-[150px]">
        <motion.div className="container-shell max-w-3xl" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeInUp} className="eyebrow">{isPrivacy ? 'PRIVACY' : 'TERMS'}</motion.p>
          <motion.h1 variants={fadeInUp} className="mt-6 text-balance text-[42px] font-black leading-none tracking-[-0.04em] text-black sm:text-6xl">
            {title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-7 text-[17px] leading-[1.7] text-zinc-500">
            {subtitle}
          </motion.p>
          <motion.div variants={stagger} className="mt-14 space-y-4">
            {points.map((point) => (
              <motion.div key={point} variants={fadeInUp} className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-card">
                <p className="text-[17px] leading-[1.7] text-zinc-600">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <FinalCTA />
    </main>
  );
}

export default LegalPage;
