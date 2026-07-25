import { motion } from 'framer-motion';
import { Link } from '../lib/router';
import { FiArrowRight } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';
import { productModules } from '../data/content';
import LightCard from '../components/ui/LightCard';
import IconBox from '../components/ui/IconBox';
import FinalCTA from '../components/FinalCTA';

function ProductPage() {
  return (
    <main>
      <section className="bg-white pb-24 pt-32 md:pb-[150px] md:pt-[150px]">
        <motion.div className="container-shell" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">PRODUCT</p>
            <h1 className="mt-6 text-balance text-[42px] font-black leading-none tracking-[-0.04em] text-black sm:text-6xl lg:text-[84px]">
              Teviq Support AI
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.7] text-zinc-500">
              Website AI support for orders, returns, FAQs, products and human escalation.
            </p>
          </motion.div>

          <motion.div variants={stagger} className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {productModules.map((module) => (
              <LightCard key={module.title} className="p-8">
                <IconBox icon={module.icon} />
                <h2 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{module.title}</h2>
                <p className="mt-4 text-[17px] leading-[1.7] text-zinc-500">{module.subtitle}</p>
              </LightCard>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mx-auto mt-16 flex justify-center">
            <Link to="/book-demo" className="primary-button">
              Book a Free Demo <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <FinalCTA />
    </main>
  );
}

export default ProductPage;
