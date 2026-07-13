import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';
import { policyBySlug, policyLastUpdated, publicPolicies } from '../data/policies';

function PolicyPage({ policySlug }) {
  const params = useParams();
  const activeSlug = policySlug || params.policySlug;
  const policy = policyBySlug[activeSlug];

  if (!policy) {
    return (
      <main className="bg-white pb-24 pt-32 md:pb-[140px] md:pt-[150px]">
        <div className="container-shell max-w-3xl">
          <p className="eyebrow">Policy not found</p>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.04em] text-black">This policy is not available.</h1>
          <Link to="/policies" className="outline-button mt-8">View all policies</Link>
        </div>
      </main>
    );
  }

  const relatedPolicies = publicPolicies.filter((item) => item.slug !== policy.slug).slice(0, 3);

  return (
    <main>
      <section className="bg-white pb-24 pt-32 md:pb-[140px] md:pt-[150px]">
        <motion.div className="container-shell" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp}>
            <Link
              to="/policies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo/30"
            >
              <FiArrowLeft aria-hidden="true" /> All policies
            </Link>
          </motion.div>

          <div className="mt-10 grid gap-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
            <motion.article variants={stagger} className="max-w-3xl">
              <motion.p variants={fadeInUp} className="eyebrow">{policy.label}</motion.p>
              <motion.h1 variants={fadeInUp} className="mt-6 text-balance text-[42px] font-black leading-[1.02] tracking-[-0.04em] text-black sm:text-6xl">
                {policy.title}
              </motion.h1>
              <motion.p variants={fadeInUp} className="mt-7 text-[17px] leading-[1.7] text-zinc-500">
                {policy.summary}
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-8 border-y border-zinc-100 py-4 text-sm font-medium text-zinc-400">
                Last updated {policyLastUpdated}
              </motion.div>

              <motion.div variants={stagger} className="mt-10 space-y-7">
                {policy.paragraphs.map((paragraph) => (
                  <motion.p key={paragraph} variants={fadeInUp} className="text-[17px] leading-[1.85] text-zinc-700">
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-14 border-t border-zinc-100 pt-8">
                <p className="text-sm leading-6 text-zinc-500">
                  Questions about this policy? Email{' '}
                  <a className="font-semibold text-black underline decoration-zinc-300 underline-offset-4" href="mailto:helloteviq@gmail.com">
                    helloteviq@gmail.com
                  </a>
                  .
                </p>
              </motion.div>
            </motion.article>

            <motion.aside variants={fadeInUp} className="lg:pt-24">
              <div className="border-t border-zinc-100 pt-5 lg:sticky lg:top-28">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-zinc-400">Related information</p>
                <nav className="mt-3" aria-label="Related policies">
                  {relatedPolicies.map((item) => (
                    <Link
                      key={item.slug}
                      to={item.href}
                      className="group flex items-center justify-between gap-4 border-b border-zinc-100 py-4 text-sm font-semibold text-zinc-600 transition hover:text-black"
                    >
                      {item.title}
                      <FiArrowRight className="shrink-0 text-zinc-300 transition group-hover:translate-x-0.5 group-hover:text-black" aria-hidden="true" />
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default PolicyPage;
