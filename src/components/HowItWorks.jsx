import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../lib/animations';
import { steps } from '../data/content';
import SectionHeader from './ui/SectionHeader';

function HowItWorks() {
  return (
    <section id="works" className="section-dark">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="How It Works"
          title="From brand knowledge to live widget in four clear steps."
          subtitle="Keep the setup simple: connect or upload what Teviq needs, test the AI, then add one widget script to your storefront."
          dark
        />
        <div className="mx-auto mt-20 max-w-4xl">
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={fadeInUp} className={`grid gap-6 py-10 md:grid-cols-[180px_1fr] md:items-center ${index > 0 ? 'border-t border-zinc-800' : ''}`}>
              <div className="text-7xl font-black leading-none tracking-[-0.03em] text-white/[0.06] md:text-8xl">{step.number}</div>
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.01em] text-white">{step.title}</h3>
                <p className="mt-4 max-w-xl text-[17px] leading-[1.7] text-zinc-400">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default HowItWorks;
