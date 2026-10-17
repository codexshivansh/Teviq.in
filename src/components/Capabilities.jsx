import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../lib/animations';
import { capabilities } from '../data/content';
import SectionHeader from './ui/SectionHeader';

function Capabilities() {
  return (
    <section className="section-light">
      <motion.div
        className="container-shell"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <SectionHeader
          label="Beyond a chat bubble"
          title="Not a bot that deflects tickets. A support brain that runs your front line."
          subtitle="Teviq connects to your real store data, understands your policies, and knows when to sell, when to escalate, and when to stay quiet."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="relative overflow-hidden rounded-[24px] border border-zinc-100 bg-white p-8 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-cardHover"
            >
              <span className="pointer-events-none absolute -right-6 -top-8 select-none text-[120px] font-black leading-none tracking-[-0.05em] text-zinc-50">
                0{index + 1}
              </span>
              <div className="relative flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo to-sky text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-xl font-bold tracking-[-0.01em] text-black">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-zinc-500">{item.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Capabilities;
