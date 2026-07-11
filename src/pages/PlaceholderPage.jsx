import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { stagger, fadeInUp } from '../lib/animations';
import FinalCTA from '../components/FinalCTA';

function PlaceholderPage({ eyebrow, title, subtitle }) {
  return (
    <main>
      <section className="bg-white pb-24 pt-32 md:pb-[150px] md:pt-[150px]">
        <motion.div className="container-shell text-center" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeInUp} className="eyebrow">{eyebrow}</motion.p>
          <motion.h1 variants={fadeInUp} className="mx-auto mt-6 max-w-4xl text-balance text-[42px] font-black leading-none tracking-[-0.04em] text-black sm:text-6xl lg:text-[80px]">
            {title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="mx-auto mt-7 max-w-xl text-[17px] leading-[1.7] text-zinc-500">
            {subtitle}
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10">
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

export default PlaceholderPage;
