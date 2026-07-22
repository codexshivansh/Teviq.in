import { motion } from 'framer-motion';
import { stagger } from '../lib/animations';
import SectionHeader from './ui/SectionHeader';
import LightCard from './ui/LightCard';

function CaseStudies() {
  const results = [
    {
      title: 'Instant customer replies',
      metric: '24/7',
      body: 'Designed to answer common ecommerce support questions whenever shoppers ask.',
    },
    {
      title: 'Less manual workload',
      metric: 'Measured',
      body: 'We measure how many repetitive order, return, refund and FAQ queries are handled during each pilot.',
    },
    {
      title: 'Pilot-first setup',
      metric: '14 days',
      body: 'Early brands can test Teviq on their support flow before making a larger rollout decision.',
    },
  ];

  return (
    <section id="case-studies" className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="PILOT OUTCOMES"
          title="What we measure during a pilot."
          subtitle="We are not publishing client case studies yet. During pilots, we focus on support workload, response speed and unresolved questions."
        />
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {results.map((result) => (
            <LightCard key={result.title} className="p-8">
              <p className="text-4xl font-black leading-none tracking-[-0.04em] text-black md:text-5xl">{result.metric}</p>
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{result.title}</h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-zinc-500">{result.body}</p>
            </LightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default CaseStudies;
