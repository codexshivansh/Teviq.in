import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

function SectionHeader({ label, title, subtitle, dark = false }) {
  return (
    <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center">
      {label && <p className="eyebrow">{label}</p>}
      <h2 className={`mx-auto mt-6 max-w-3xl text-balance text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-5xl lg:text-[62px] ${dark ? 'text-white' : 'text-black'}`}>
        {title}
      </h2>
      {subtitle && <p className={`mx-auto mt-7 max-w-xl text-[17px] leading-[1.7] ${dark ? 'text-zinc-400' : 'text-zinc-500'}`}>{subtitle}</p>}
    </motion.div>
  );
}

export default SectionHeader;
