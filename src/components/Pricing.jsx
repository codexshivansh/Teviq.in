import { Link } from '../lib/router';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { stagger } from '../lib/animations';
import { pricingPlans } from '../data/content';
import SectionHeader from './ui/SectionHeader';
import FlipCard from './ui/FlipCard';

function Pricing() {
  return (
    <section id="pricing" className="bg-white pb-24 pt-32 md:pb-[160px] md:pt-[160px]">
      <motion.div
        className="container-shell"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
      >
        <SectionHeader
          label="Pricing"
          title="Simple pricing that grows with your channels."
          subtitle="Start on your website, add WhatsApp, then go omnichannel. Hover a plan to see everything included — no setup fees, cancel anytime."
        />

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={plan.highlight ? 'lg:-my-2' : ''}>
              <FlipCard
                className={`h-[440px] ${plan.highlight ? 'lg:h-[456px]' : ''}`}
                faceClassName={`rounded-[24px] border ${
                  plan.highlight ? 'border-indigo shadow-highlight' : 'border-zinc-200/80 shadow-card'
                }`}
                ariaLabel={`${plan.name} plan — flip for what's included`}
                front={
                  <div className="relative flex h-full flex-col bg-white p-8">
                    {plan.badge && (
                      <span
                        className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] ${
                          plan.inProgress
                            ? 'bg-[#FEF3C7] text-[#B45309]'
                            : 'bg-indigo/10 text-indigo'
                        }`}
                      >
                        {plan.inProgress && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B45309] opacity-70" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#B45309]" />
                          </span>
                        )}
                        {plan.badge}
                      </span>
                    )}

                    <p className={`text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500 ${plan.badge ? 'mt-6' : ''}`}>
                      {plan.name}
                    </p>

                    <div className="mt-3 flex items-end gap-1">
                      <span className="text-5xl font-black tracking-[-0.03em] text-black">{plan.monthly}</span>
                      <span className="mb-1.5 text-sm font-semibold text-zinc-400">{plan.period}</span>
                    </div>

                    <p className="mt-4 text-[15px] leading-[1.6] text-zinc-500">{plan.tagline}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {plan.channels.map((channel) => (
                        <span
                          key={channel}
                          className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-600"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-indigo to-sky" />
                          {channel}
                        </span>
                      ))}
                    </div>

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-semibold text-indigo">
                      See what&apos;s included <FiArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                }
                back={
                  <div className="flex h-full flex-col bg-zinc-50 p-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-500">{plan.name} includes</p>
                    <ul className="mt-5 flex-1 space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm font-medium text-zinc-700">
                          <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-indigo" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/book-demo"
                      onClick={(event) => event.stopPropagation()}
                      className={plan.highlight ? 'primary-button mt-6 w-full' : 'outline-button mt-6 w-full'}
                    >
                      {plan.cta} <FiArrowRight />
                    </Link>
                  </div>
                }
              />
            </div>
          ))}
        </div>

        <motion.p className="mt-10 text-center text-sm font-medium text-zinc-400">
          Prices are per store, billed monthly. Instagram DM is rolling out and included with Growth as it goes live.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Pricing;
