import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../lib/animations';
import { painCards, platformCards, features } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import LightCard from './ui/LightCard';
import IconBox from './ui/IconBox';

function ProblemSolution() {
  return (
    <section id="features" className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
        <SectionHeader
          label="Problem → Solution"
          title="Repetitive support questions slow your team down. Teviq answers them instantly."
          subtitle="From the tickets eating your day to the workflows that fix them — here's why founders switch, and everything Teviq handles out of the box."
        />

        <motion.div variants={fadeInUp} className="mt-16 rounded-[28px] bg-black p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">The Problem</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {painCards.map((card) => (
              <div key={card.title} className="flex items-start gap-3 rounded-2xl border border-zinc-800 bg-white/[0.03] p-4">
                <IconBox icon={card.icon} dark />
                <p className="text-sm font-semibold leading-6 text-zinc-200">{card.title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-indigo">The Solution</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {platformCards.map((card) => (
              <span key={card.title} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${card.badgeStyle}`}>
                <card.icon className="h-3.5 w-3.5" />
                {card.title}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <LightCard key={feature.title} className="p-6">
              <IconBox icon={feature.icon} />
              <h3 className="mt-6 text-lg font-bold tracking-[-0.01em] text-black">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{feature.body}</p>
            </LightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default ProblemSolution;
