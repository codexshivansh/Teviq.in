import BrainLogo from './ui/BrainLogo';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from '../lib/router';
import {
  FiArrowRight,
  FiCheck,
  FiGlobe,
  FiInstagram,
  FiMessageCircle,
  FiZap,
} from 'react-icons/fi';

const channelItems = [
  { label: 'Website', icon: FiGlobe },
  { label: 'WhatsApp', icon: FiMessageCircle },
  { label: 'Instagram', icon: FiInstagram },
];

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="hero-stage relative isolate overflow-hidden">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-glow hero-glow--one absolute rounded-full" aria-hidden="true" />
      <div className="hero-glow hero-glow--two absolute rounded-full" aria-hidden="true" />

      <div className="container-shell relative z-10 grid min-h-[760px] items-center gap-12 pb-20 pt-32 lg:min-h-[820px] lg:grid-cols-[0.94fr_1.06fr] lg:gap-10 lg:pb-24 lg:pt-36">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[640px]"
        >
          <div className="hero-kicker inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em]">
            <span className="hero-kicker-dot" /> AI support for growing D2C brands
          </div>
          <h1 className="mt-7 max-w-[720px] text-balance text-[46px] font-semibold leading-[0.98] tracking-[-0.065em] text-white sm:text-[62px] lg:text-[74px] xl:text-[82px]">
            Every customer question. <span className="hero-title-accent">One brand-aware brain.</span>
          </h1>
          <p className="mt-7 max-w-[510px] text-[16px] leading-[1.8] text-white/65 sm:text-[18px]">
            Teviq helps ecommerce teams answer shoppers across website chat, WhatsApp and Instagram—with the same policies, product context and conversation history.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/book-demo" className="hero-primary-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold">
              See Teviq in action <FiArrowRight />
            </Link>
            <Link to="/pricing" className="hero-secondary-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold">
              Explore plans <FiArrowRight />
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] font-medium text-white/55">
            <span className="inline-flex items-center gap-2"><FiCheck className="text-[#B7F477]" /> Shared brand knowledge</span>
            <span className="inline-flex items-center gap-2"><FiCheck className="text-[#B7F477]" /> Human handoff when needed</span>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="hero-demo-wrap relative mx-auto w-full max-w-[660px]"
        >
          <div className="hero-demo-orbit hero-demo-orbit--outer" aria-hidden="true" />
          <div className="hero-demo-orbit hero-demo-orbit--inner" aria-hidden="true" />
          <div className="hero-float-note hero-float-note--top hidden sm:flex">
            <span className="hero-live-pip" /> All channels connected
          </div>
          <div className="hero-float-note hero-float-note--bottom hidden sm:flex">
            <FiZap className="text-[#B7F477]" /> Powered by your brand knowledge
          </div>

          <div className="hero-console relative z-10 overflow-hidden rounded-[28px] border p-4 shadow-2xl sm:p-5">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-1 pb-4">
              <div className="flex items-center gap-3">
                <BrainLogo className="hero-mark" />
                <div>
                  <p className="text-[13px] font-bold text-white">Teviq Inbox</p>
                  <p className="mt-0.5 text-[10px] font-medium text-white/45">One view. Every conversation.</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-semibold text-white/55">Product preview</span>
            </div>

            <div className="flex flex-wrap gap-2 py-4">
              {channelItems.map(({ label, icon: Icon }, index) => (
                <motion.span
                  key={label}
                  animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
                  transition={{ duration: 3.2, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
                  className={`hero-channel-pill inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[11px] font-semibold ${index === 0 ? 'hero-channel-pill--active' : ''}`}
                >
                  <Icon className="h-3.5 w-3.5" /> {label}
                </motion.span>
              ))}
            </div>

            <div className="hero-chat-card rounded-[20px] border p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="hero-avatar flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold">AR</div>
                  <div>
                    <p className="text-[12px] font-bold text-white">Aarav Mehta</p>
                    <p className="mt-0.5 text-[10px] text-white/40">Sample conversation · Website</p>
                  </div>
                </div>
                <span className="rounded-full bg-[#B7F477]/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#B7F477]">AI assisted</span>
              </div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55, duration: 0.45 }}
                className="hero-message hero-message--customer mt-5 ml-auto max-w-[88%] rounded-2xl rounded-tr-md px-4 py-3 text-[12px] leading-[1.65] text-white/85"
              >
                Is this jacket available in a size M?
              </motion.div>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="hero-message hero-message--ai mt-3 max-w-[94%] rounded-2xl rounded-tl-md px-4 py-3.5 text-[12px] leading-[1.7] text-white/90"
              >
                <span className="mb-2 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#B7F477]"><FiZap /> Teviq Brain</span>
                Yes—it’s available in M. I can show you the fit details and product link.
                <div className="hero-product-chip mt-3 flex items-center gap-3 rounded-xl border p-2.5">
                  <div className="hero-product-swatch h-9 w-9 rounded-lg" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[10px] font-bold text-white">Everyday Utility Jacket</p>
                    <p className="mt-1 text-[9px] text-white/45">Sample product card</p>
                  </div>
                  <FiArrowRight className="text-white/55" />
                </div>
              </motion.div>
            </div>

            <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.025] px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="hero-brain-pulse flex h-8 w-8 items-center justify-center rounded-full"><FiZap /></div>
                <div>
                  <p className="text-[10px] font-bold text-white/80">Answers grounded in your setup</p>
                  <p className="mt-0.5 text-[9px] text-white/40">Policies · Products · Team handoff</p>
                </div>
              </div>
              <span className="text-[9px] font-semibold text-[#B7F477]">Connected</span>
            </div>
          </div>
          <p className="mt-3 text-center text-[10px] font-medium text-white/35">Illustrative product preview—not a real customer conversation.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
