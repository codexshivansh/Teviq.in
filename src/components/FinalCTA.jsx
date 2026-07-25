import { motion } from 'framer-motion';
import { Link } from '../lib/router';
import { FiArrowRight } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';

function FinalCTA() {
  return (
    <section id="demo" className="section-dark">
      <motion.div className="container-shell text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.h2 variants={fadeInUp} className="mx-auto max-w-4xl text-balance text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl lg:text-[64px]">
          Want Teviq running on your store this week?
        </motion.h2>
        <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.7] text-zinc-400">
          Book a free demo and we’ll show how Teviq can answer your store’s common order, return, shipping and FAQ questions.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/book-demo" className="primary-button">
            Book a Free Demo <FiArrowRight />
          </Link>
          <a href="https://wa.me/919555144436" className="ghost-button-dark">
            WhatsApp Us <FiArrowRight />
          </a>
        </motion.div>
        <motion.div variants={fadeInUp} className="mt-12 flex flex-col items-center justify-center gap-3 text-sm font-medium text-zinc-400 sm:flex-row sm:gap-8">
          <a href="https://wa.me/919555144436" className="transition hover:text-white">WhatsApp: +91 9555144436</a>
          <a href="mailto:helloteviq@gmail.com" className="transition hover:text-white">Email: helloteviq@gmail.com</a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default FinalCTA;
