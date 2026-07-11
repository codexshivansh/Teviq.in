import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';
import { trustPoints } from '../data/content';

function TrustSafety() {
  return (
    <section className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="rounded-[28px] border border-zinc-100 bg-zinc-50/70 p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div variants={fadeInUp}>
              <p className="eyebrow">Trust & Safety</p>
              <h2 className="mt-5 text-balance text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-black sm:text-5xl">
                Built to answer carefully, not creatively.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.7] text-zinc-500">
                Support automation should follow brand policy. Teviq keeps brand data scoped, avoids invented order or refund claims, and escalates sensitive issues.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid gap-3">
              {trustPoints.map((point) => (
                <motion.div key={point} variants={fadeInUp} className="flex gap-3 rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]">
                    <FiCheck className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold leading-6 text-zinc-700">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default TrustSafety;
