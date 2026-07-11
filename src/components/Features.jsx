import { motion } from 'framer-motion';
import { stagger } from '../lib/animations';
import { features } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import LightCard from './ui/LightCard';
import IconBox from './ui/IconBox';

function Features() {
  return (
    <section id="features" className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="What Teviq Handles"
          title="Your most common support flows, answered with brand context."
          subtitle="From order status to product questions, Teviq is designed to reduce the repetitive work that keeps founders and support teams busy."
        />
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <LightCard key={feature.title} className="p-8">
              <IconBox icon={feature.icon} />
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{feature.title}</h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-zinc-500">{feature.body}</p>
            </LightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Features;
