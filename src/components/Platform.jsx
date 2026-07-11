import { motion } from 'framer-motion';
import { stagger } from '../lib/animations';
import { platformCards } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import LightCard from './ui/LightCard';
import IconBox from './ui/IconBox';

function Platform() {
  return (
    <section id="platform" className="section-light">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="More Than A Chatbot"
          title="A support brain for your store."
          subtitle="Teviq combines a premium website widget, brand knowledge, order context, policy logic, analytics and a client dashboard into one support system."
        />
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {platformCards.map((card) => (
            <LightCard key={card.title} className="flex min-h-[390px] flex-col p-8">
              <span className={`inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold ${card.badgeStyle}`}>{card.badge}</span>
              <IconBox icon={card.icon} className="mt-10" />
              <h3 className="mt-8 text-xl font-bold tracking-[-0.01em] text-black">{card.title}</h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-zinc-500">{card.body}</p>
              {card.note && <p className="mt-auto pt-10 text-sm font-semibold text-zinc-400">{card.note}</p>}
            </LightCard>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Platform;
