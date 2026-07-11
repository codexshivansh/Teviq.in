import { motion } from 'framer-motion';
import { stagger } from '../lib/animations';
import { painCards } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import DarkCard from './ui/DarkCard';
import IconBox from './ui/IconBox';

function Pain() {
  return (
    <section className="section-dark">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="The Problem"
          title="Support slows down exactly when your store needs speed."
          subtitle="Founders do not lose time only on tickets. They lose repeat purchases, trust and momentum when routine questions stay unanswered."
          dark
        />
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {painCards.map((card) => (
            <DarkCard key={card.title} className="p-8">
              <IconBox icon={card.icon} dark />
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-white">{card.title}</h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-zinc-400">{card.body}</p>
            </DarkCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Pain;
