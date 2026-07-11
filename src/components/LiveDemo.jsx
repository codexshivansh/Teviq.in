import { motion } from 'framer-motion';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { stagger } from '../lib/animations';
import { demoOptions } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import LightCard from './ui/LightCard';
import IconBox from './ui/IconBox';

function LiveDemo() {
  return (
    <section id="live-demo" className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="Live Demo"
          title="Try Teviq on three demo storefronts."
          subtitle="Use the demos to test common D2C flows like order tracking, returns, product questions, shipping and human escalation."
        />
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {demoOptions.map((demo) => (
            <LightCard key={demo.title} className="flex min-h-[280px] flex-col p-8">
              <IconBox icon={FiShoppingBag} />
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{demo.title}</h3>
              <p className="mt-4 grow text-[17px] leading-[1.7] text-zinc-500">{demo.body}</p>
              <a href={demo.href} target="_blank" rel="noreferrer" className="outline-button mt-8 w-full">
                Try Demo <FiArrowRight />
              </a>
            </LightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default LiveDemo;
