import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { heroItem, stagger } from '../lib/animations';
import HeroPitchReel from './HeroPitchReel';

function Hero() {
  const title = 'AI Customer Support for D2C Brands';

  return (
    <section id="top" className="bg-white pt-36 md:pt-[170px]">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-left">
            <motion.p variants={heroItem(0)} className="eyebrow">
              TEVIQ AI
            </motion.p>
            <motion.h1 variants={heroItem(0.12)} className="mt-7 max-w-[680px] text-balance text-[44px] font-black leading-[1.02] tracking-[-0.04em] text-black sm:text-[56px] md:text-[68px] lg:text-[76px] xl:text-[84px]">
              {title}
            </motion.h1>
            <motion.p variants={heroItem(0.3)} className="mt-8 max-w-xl text-[18px] leading-[1.7] text-zinc-500 md:text-[19px]">
              Automate order tracking, returns, FAQs and more with AI. Reduce support workload and delight your customers 24/7.
            </motion.p>
            <motion.div variants={heroItem(0.5)} className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
              <Link to="/book-demo" className="primary-button w-full sm:w-auto">
                Book a Free Demo <FiArrowRight />
              </Link>
              <Link to="/live-demo" className="ghost-button-light w-full sm:w-auto">
                Try Live Demo <FiArrowRight />
              </Link>
            </motion.div>

            <motion.p variants={heroItem(0.62)} className="mt-5 text-sm font-semibold text-zinc-500">
              Setup in minutes • Website widget • Shopify-ready roadmap • Built for Indian D2C brands
            </motion.p>

            <motion.div variants={heroItem(0.7)} className="mt-12 border-t border-zinc-100 pt-9">
              <div className="grid gap-6 sm:grid-cols-3 sm:gap-0">
                {[
                  ['Orders', 'Track and explain status'],
                  ['Returns', 'Policy-aware guidance'],
                  ['FAQs', 'Instant brand answers'],
                ].map(([value, label], index) => (
                  <div key={value} className={`min-w-0 px-4 text-center lg:px-5 lg:text-left ${index > 0 ? 'sm:border-l sm:border-zinc-200' : ''}`}>
                    <p className="mx-auto max-w-[11rem] text-pretty text-[22px] font-black leading-[1.05] tracking-[-0.04em] text-black sm:text-[18px] md:text-[20px] lg:mx-0 xl:text-[22px]">
                      {value}
                    </p>
                    <p className="mt-3 text-sm font-medium text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={heroItem(0.35)} className="lg:justify-self-end">
            <HeroPitchReel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
