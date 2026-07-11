import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../lib/animations';
import { roiMetrics } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import LightCard from './ui/LightCard';

function ROISection() {
  return (
    <section className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="Business Value"
          title="Reduce repetitive support workload without making support feel robotic."
          subtitle="Teviq is designed to automate the common questions customers ask before and after purchase, while keeping sensitive issues ready for human attention."
        />
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {roiMetrics.map((metric) => (
            <LightCard key={metric.title} className="p-8">
              <p className="text-5xl font-black leading-none tracking-[-0.04em] text-black md:text-6xl">{metric.value}</p>
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{metric.title}</h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-zinc-500">{metric.body}</p>
            </LightCard>
          ))}
        </div>
        <motion.p variants={fadeInUp} className="mx-auto mt-8 max-w-2xl text-center text-sm leading-6 text-zinc-500">
          Results depend on query volume, policy clarity and setup quality. We keep pilot claims realistic and measurable.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default ROISection;
