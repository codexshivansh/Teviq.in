import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiFileText } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';
import { policyLastUpdated, publicPolicies } from '../data/policies';

function PoliciesPage() {
  return (
    <main>
      <section className="bg-white pb-24 pt-32 md:pb-[140px] md:pt-[150px]">
        <motion.div className="container-shell" initial="hidden" animate="visible" variants={stagger}>
          <div className="max-w-3xl">
            <motion.p variants={fadeInUp} className="eyebrow">Policies & service information</motion.p>
            <motion.h1 variants={fadeInUp} className="mt-6 text-balance text-[42px] font-black leading-[1.02] tracking-[-0.04em] text-black sm:text-6xl">
              Clear terms, without the fine-print maze.
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-7 max-w-2xl text-[17px] leading-[1.7] text-zinc-500">
              Review Teviq's current subscription, data, pricing, support, and onboarding policies. Each page uses the same approved information available to Teviq Support AI.
            </motion.p>
            <motion.p variants={fadeInUp} className="mt-5 text-sm font-medium text-zinc-400">
              Last updated {policyLastUpdated}
            </motion.p>
          </div>

          <motion.div variants={stagger} className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {publicPolicies.map((policy) => (
              <motion.article
                key={policy.slug}
                variants={fadeInUp}
                className="flex min-h-[250px] flex-col rounded-[20px] border border-zinc-100 bg-white p-6 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-indigo">
                  <FiFileText className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">{policy.label}</p>
                <h2 className="mt-2 text-xl font-bold tracking-[-0.02em] text-black">{policy.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-500">{policy.summary}</p>
                <Link
                  to={policy.href}
                  className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-indigo transition hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo/30"
                  aria-label={`Read ${policy.title}`}
                >
                  Read policy <FiArrowRight aria-hidden="true" />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

export default PoliciesPage;
