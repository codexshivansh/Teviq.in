import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../lib/animations';
import { dashboardPreview } from '../data/content';
import SectionHeader from './ui/SectionHeader';

function DashboardPreview() {
  return (
    <section className="section-dark">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <SectionHeader
            label="Brand Dashboard"
            title="More than a chat widget. A support command center."
            subtitle="Brands can manage knowledge, test AI answers, preview Shopify-style sync, see analytics and copy the widget install script from one dashboard."
            dark
          />
          <motion.div variants={fadeInUp} className="rounded-[28px] border border-zinc-800 bg-[#111111] p-4 shadow-demo">
            <div className="rounded-[22px] border border-zinc-800 bg-black p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">Teviq Admin</p>
                  <p className="mt-1 text-lg font-bold tracking-[-0.02em] text-white">Support setup progress</p>
                </div>
                <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-xs font-bold text-[#16A34A]">Ready</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {dashboardPreview.map(([title, body]) => (
                  <div key={title} className="rounded-2xl border border-zinc-800 bg-white/[0.04] p-4">
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="mt-2 text-xs leading-5 text-zinc-500">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default DashboardPreview;
