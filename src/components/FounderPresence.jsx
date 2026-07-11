import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../lib/animations';

function FounderPresence() {
  return (
    <section className="bg-white pb-24 md:pb-[120px]">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeInUp} className="rounded-[28px] border border-zinc-100 bg-white p-8 text-center shadow-card md:p-10">
          <p className="eyebrow">Founder Note</p>
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-[30px] font-extrabold leading-[1.15] tracking-[-0.03em] text-black sm:text-4xl">
            Built by Shivansh Gupta and team at Teviq AI for fast-growing Indian D2C brands.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.7] text-zinc-500">
            We are onboarding early pilot brands personally, helping them set up the support widget, brand knowledge and demo flows for their storefront.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FounderPresence;
