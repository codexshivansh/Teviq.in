import { motion } from 'framer-motion';
import { FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';
import { demoOptions } from '../data/content';
import LightCard from '../components/ui/LightCard';
import IconBox from '../components/ui/IconBox';
import FinalCTA from '../components/FinalCTA';

function LiveDemoPage() {
  return (
    <main>
      <section className="bg-white pb-24 pt-32 md:pb-[150px] md:pt-[150px]">
        <motion.div className="container-shell" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">LIVE DEMO</p>
            <h1 className="mt-6 text-balance text-[42px] font-black leading-none tracking-[-0.04em] text-black sm:text-6xl lg:text-[76px]">
              Try Teviq on three demo storefronts.
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.7] text-zinc-500">
              Use the demos to test common D2C flows like order tracking, returns, product questions, shipping and human escalation.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="mt-20 grid gap-6 lg:grid-cols-3">
            {demoOptions.map((demo) => (
              <LightCard key={demo.title} className="flex min-h-[280px] flex-col p-8">
                <IconBox icon={FiShoppingBag} />
                <h2 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{demo.title}</h2>
                <p className="mt-4 grow text-[17px] leading-[1.7] text-zinc-500">{demo.body}</p>
                <a href={demo.href} target="_blank" rel="noreferrer" className="outline-button mt-8 w-full">
                  Try Demo <FiArrowRight />
                </a>
              </LightCard>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <FinalCTA />
    </main>
  );
}

export default LiveDemoPage;
