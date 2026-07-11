import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';
import { pricing } from '../data/content';
import SectionHeader from './ui/SectionHeader';

function Pricing() {
  return (
    <section id="pricing" className="bg-white pb-24 pt-32 md:pb-[150px] md:pt-[150px]">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="Pilot Offer"
          title="Become one of our first pilot D2C brands."
          subtitle="We’ll help set up Teviq on your store and customize it for your support flow. Simple pricing, clear pilot terms, no unnecessary enterprise complexity."
        />
        <motion.p variants={fadeInUp} className="mx-auto mt-10 max-w-[700px] text-center text-[15px] leading-6 text-zinc-500">
          Free setup is available for selected early pilot brands. The pilot helps you test website AI support on real customer questions before committing long-term.
        </motion.p>
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 lg:grid-cols-2 lg:items-stretch">
          {pricing.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative flex h-full flex-col rounded-2xl bg-white p-8 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-cardHover ${plan.highlighted ? 'border-2 border-indigo pt-10 shadow-highlight' : 'border border-zinc-100'}`}
            >
              {plan.highlighted && <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-2xl bg-indigo px-3 py-1 text-xs font-semibold text-white">Most Popular</span>}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{plan.name}</p>
                {plan.tag && <p className="mt-3 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-500">{plan.tag}</p>}
                {plan.description && <p className="mt-5 text-sm leading-6 text-zinc-500">{plan.description}</p>}
              </div>
              <div className="mt-10">
                <p className="text-sm font-semibold text-zinc-500">{plan.setupLabel || 'Setup'}</p>
                <p className="mt-2 text-3xl font-black tracking-[-0.03em] text-black">{plan.setup}</p>
                <p className="mt-8 text-sm font-semibold text-zinc-500">Monthly</p>
                <p className="mt-2 text-5xl font-black tracking-[-0.03em] text-black">{plan.monthly}</p>
              </div>
              <ul className="mt-10 grow space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium text-zinc-700">
                    <FiCheck className="h-4 w-4 shrink-0 text-indigo" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/book-demo" className={`mt-10 w-full ${plan.highlighted ? 'primary-button' : 'outline-button'}`}>
                {plan.cta} <FiArrowRight />
              </Link>
              {plan.note && <p className="mt-4 text-center text-xs font-medium leading-5 text-zinc-500">{plan.note}</p>}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Pricing;
