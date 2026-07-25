import { motion } from 'framer-motion';
import { Link } from '../lib/router';
import { FiArrowRight } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';
import { roiMetrics, dashboardPreview } from '../data/content';
import SectionHeader from './ui/SectionHeader';

function SeeItWorking() {
  return (
    <section className="section-dark">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger}>
        <SectionHeader
          label="See It Working"
          title="More than a chat widget — a support system, live."
          subtitle="The impact founders can expect, and the dashboard behind it."
          dark
        />

        <motion.div variants={fadeInUp} className="mt-16 grid gap-8 rounded-[28px] border border-zinc-800 bg-[#111111] p-8 sm:grid-cols-3 md:p-10">
          {roiMetrics.map((metric) => (
            <div key={metric.title}>
              <p className="text-4xl font-black tracking-[-0.03em] text-white md:text-5xl">{metric.value}</p>
              <p className="mt-3 text-sm font-semibold text-zinc-300">{metric.title}</p>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-8 rounded-[28px] border border-zinc-800 bg-[#111111] p-4 shadow-demo md:p-6">
          <div className="rounded-[22px] border border-zinc-800 bg-black p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Teviq Admin</p>
                <p className="mt-1 text-lg font-bold tracking-[-0.02em] text-white">Support setup progress</p>
              </div>
              <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-bold text-[#16A34A]">Ready</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {dashboardPreview.map(([title, body]) => (
                <div key={title} className="rounded-2xl border border-zinc-800 bg-white/[0.04] p-4">
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-16 text-center">
          <Link to="/live-demo" className="ghost-button-dark">
            Try It Yourself on 3 Demo Storefronts <FiArrowRight />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default SeeItWorking;
