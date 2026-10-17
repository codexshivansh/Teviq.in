import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';
import { painCards, platformCards, features } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import IconBox from './ui/IconBox';
import FlipCard from './ui/FlipCard';

// Per-card brand backdrops — cohesive (all resolve into deep zinc/black) but
// tinted per category so the grid reads as designed, not repetitive.
const featureThemes = [
  { base: 'from-indigo/80 to-black', glow: 'bg-indigo/50' },
  { base: 'from-sky/70 to-black', glow: 'bg-sky/50' },
  { base: 'from-emerald-600/60 to-black', glow: 'bg-emerald-500/50' },
  { base: 'from-amber-500/55 to-black', glow: 'bg-amber-500/50' },
  { base: 'from-violet-600/65 to-black', glow: 'bg-violet-500/50' },
  { base: 'from-cyan-500/55 to-black', glow: 'bg-cyan-400/50' },
  { base: 'from-rose-600/55 to-black', glow: 'bg-rose-500/50' },
  { base: 'from-fuchsia-600/55 to-black', glow: 'bg-fuchsia-500/50' },
];

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

        <motion.p variants={fadeInUp} className="mt-8 text-center text-sm font-medium text-zinc-400">
          Hover a card <span className="text-zinc-300">(or tap on mobile)</span> to see how each one works.
        </motion.p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const theme = featureThemes[index % featureThemes.length];
            return (
            <FlipCard
              key={feature.title}
              className="h-[320px]"
              faceClassName="rounded-[20px] border border-zinc-200/70"
              ariaLabel={`${feature.title} — flip for details`}
              front={
                <div className="relative h-full w-full overflow-hidden bg-zinc-900">
                  {/* Designed brand backdrop (shows until a real photo is dropped in). */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${theme.base}`} />
                  <div className={`absolute -right-10 -top-12 h-44 w-44 rounded-full blur-3xl ${theme.glow}`} />
                  <div
                    className="absolute inset-0 opacity-[0.14]"
                    style={{
                      backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }}
                  />
                  <feature.icon className="pointer-events-none absolute -bottom-5 right-1 h-40 w-40 text-white/[0.07]" />
                  {/* Real photo layer, if present. */}
                  {feature.image && (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="relative flex h-full flex-col justify-between p-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur">
                      <feature.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[19px] font-bold leading-tight tracking-[-0.01em] text-white">{feature.title}</h3>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-white/70">
                        Learn more <FiArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              }
              back={
                <div className="flex h-full flex-col justify-center bg-white p-6">
                  <IconBox icon={feature.icon} />
                  <h3 className="mt-5 text-lg font-bold tracking-[-0.01em] text-black">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">{feature.body}</p>
                </div>
              }
            />
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default ProblemSolution;
