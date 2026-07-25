import { motion } from 'framer-motion';
import { Link } from '../lib/router';
import { FiArrowRight } from 'react-icons/fi';
import { heroItem, stagger } from '../lib/animations';
import HeroCinematicBackground from './HeroCinematicBackground';

function Hero() {
  const title = 'AI Customer Support for D2C Brands';

  return (
    <section id="top" className="relative overflow-hidden bg-black">
      <HeroCinematicBackground />

      <div className="container-shell relative z-10 flex min-h-[100svh] max-w-[1440px] flex-col justify-end pb-16 pt-32 md:pb-20 md:pt-36">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-2xl text-left">
          <motion.p variants={heroItem(0)} className="eyebrow">
            TEVIQ AI
          </motion.p>
          <motion.h1 variants={heroItem(0.12)} className="mt-6 max-w-[680px] text-balance text-[40px] font-black leading-[1.03] tracking-[-0.04em] text-white sm:text-[52px] md:text-[64px] lg:text-[72px] xl:text-[80px]">
            {title}
          </motion.h1>
          <motion.p variants={heroItem(0.3)} className="mt-7 max-w-xl text-[17px] leading-[1.7] text-zinc-300 md:text-[19px]">
            Automate order tracking, returns, FAQs and more with AI. Reduce support workload and delight your customers 24/7.
          </motion.p>
          <motion.div variants={heroItem(0.5)} className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
            <Link to="/book-demo" className="primary-button w-full sm:w-auto">
              Book a Free Demo <FiArrowRight />
            </Link>
            <Link to="/live-demo" className="ghost-button-dark w-full sm:w-auto">
              Try Live Demo <FiArrowRight />
            </Link>
          </motion.div>

          <motion.p variants={heroItem(0.62)} className="mt-5 text-sm font-semibold text-zinc-400">
            Setup in minutes • Website widget • Shopify-ready roadmap • Built for Indian D2C brands
          </motion.p>

          <motion.div variants={heroItem(0.7)} className="mt-11 border-t border-white/10 pt-8">
            <div className="grid gap-6 sm:grid-cols-3 sm:gap-0">
              {[
                ['Orders', 'Track and explain status'],
                ['Returns', 'Policy-aware guidance'],
                ['FAQs', 'Instant brand answers'],
              ].map(([value, label], index) => (
                <div key={value} className={`min-w-0 px-4 text-center lg:px-5 lg:text-left ${index > 0 ? 'sm:border-l sm:border-white/10' : ''}`}>
                  <p className="mx-auto max-w-[11rem] text-pretty text-[22px] font-black leading-[1.05] tracking-[-0.04em] text-white sm:text-[18px] md:text-[20px] lg:mx-0 xl:text-[22px]">
                    {value}
                  </p>
                  <p className="mt-3 text-sm font-medium text-zinc-400">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
