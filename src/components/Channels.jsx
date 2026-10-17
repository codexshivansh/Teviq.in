import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../lib/animations';
import { channels } from '../data/content';
import SectionHeader from './ui/SectionHeader';

function Channels() {
  return (
    <section id="channels" className="section-dark">
      <motion.div
        className="container-shell"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <SectionHeader
          label="One brain, every channel"
          title="Your customers are on chat and WhatsApp. Now so is Teviq."
          subtitle="The same support brain — same policies, order context and conversation memory — answers wherever your customers reach out. No separate bot to train per channel."
          dark
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => {
            const isLive = channel.status === 'Live';
            return (
              <motion.div
                key={channel.name}
                variants={fadeInUp}
                className={`group relative flex flex-col rounded-[20px] border p-6 transition duration-200 ${
                  isLive
                    ? 'border-indigo/40 bg-teviq-column hover:-translate-y-0.5'
                    : 'border-zinc-800 bg-[#111111] hover:-translate-y-0.5 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${isLive ? 'bg-white/10 text-white' : 'bg-[#1C1C1E] text-indigo'}`}>
                    <channel.icon className="h-5 w-5" />
                  </span>
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold ${channel.statusStyle}`}>
                    {isLive && <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                    </span>}
                    {channel.status}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold tracking-[-0.01em] text-white">{channel.name}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{channel.body}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Channels;
