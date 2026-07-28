import { motion } from 'framer-motion';
import { Link } from '../lib/router';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';
import { foundingOffer, futurePricingTiers } from '../data/content';
import SectionHeader from './ui/SectionHeader';

function Pricing() {
  return (
    <section id="pricing" className="bg-white pb-24 pt-32 md:pb-[160px] md:pt-[160px]">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="Founding Offer"
          title="No setup fees. ₹999/month for our first 10 clients."
          subtitle="Try Teviq free for 7 days with a quick widget install and guided brand setup — no setup cost."
        />

        <motion.div variants={fadeInUp} className="mx-auto mt-16 max-w-xl rounded-[28px] border-2 border-indigo bg-white p-8 shadow-highlight md:p-10">
          <span className="inline-flex w-fit rounded-full bg-indigo/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-indigo">
            {foundingOffer.badge}
          </span>

          <p className="mt-8 text-4xl font-black tracking-[-0.03em] text-black sm:text-5xl md:text-7xl">{foundingOffer.monthly}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {foundingOffer.highlights.map((highlight) => (
              <div key={highlight.label} className="flex items-center gap-2 rounded-xl bg-zinc-50 px-3 py-2.5">
                <highlight.icon className="h-4 w-4 shrink-0 text-indigo" />
                <span className="text-sm font-semibold text-zinc-700">{highlight.label}</span>
              </div>
            ))}
          </div>

          <ul className="mt-8 space-y-4 border-t border-zinc-100 pt-8">
            {foundingOffer.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                <FiCheck className="h-4 w-4 shrink-0 text-indigo" />
                {feature}
              </li>
            ))}
          </ul>

          <Link to="/book-demo" className="primary-button mt-10 w-full">
            {foundingOffer.cta} <FiArrowRight />
          </Link>
          <p className="mt-4 text-center text-xs font-medium leading-5 text-zinc-500">{foundingOffer.note}</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mx-auto mt-14 max-w-2xl">
          <p className="text-center text-sm font-semibold text-zinc-400">Pricing after our founding spots fill</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {futurePricingTiers.map((tier) => (
              <div key={tier.name} className="rounded-2xl border border-zinc-100 bg-zinc-50/60 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{tier.name}</p>
                <p className="mt-2 text-2xl font-black tracking-[-0.02em] text-black">{tier.monthly}</p>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{tier.description}</p>
                {tier.note && <p className="mt-3 text-xs font-medium leading-5 text-zinc-400">{tier.note}</p>}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Pricing;
