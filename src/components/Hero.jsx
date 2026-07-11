import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowDown, FiArrowRight, FiMessageCircle, FiSend } from 'react-icons/fi';
import { heroItem, stagger } from '../lib/animations';

function Hero() {
  const title = 'AI Customer Support for D2C Brands';

  return (
    <section id="top" className="bg-white pt-32 md:pt-[140px]">
      <div className="container-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-16">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="text-left">
            <motion.p variants={heroItem(0)} className="eyebrow">
              TEVIQ AI
            </motion.p>
            <motion.h1 variants={heroItem(0.12)} className="mt-6 max-w-[620px] text-balance text-[38px] font-black leading-[1.05] tracking-[-0.035em] text-black sm:text-[48px] md:text-[56px] lg:text-[64px]">
              {title}
            </motion.h1>
            <motion.p variants={heroItem(0.3)} className="mt-6 max-w-xl text-[17px] leading-[1.7] text-zinc-500 md:text-[18px]">
              Automate order tracking, returns, FAQs and more with AI. Reduce support workload and delight your customers 24/7.
            </motion.p>
            <motion.div variants={heroItem(0.5)} className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-start">
              <Link to="/book-demo" className="primary-button w-full sm:w-auto">
                Book a Free Demo <FiArrowRight />
              </Link>
              <a href="#live-demo" className="ghost-button-light w-full sm:w-auto">
                Try Live Demo <FiArrowDown />
              </a>
            </motion.div>

            <motion.p variants={heroItem(0.62)} className="mt-5 text-sm font-semibold text-zinc-500">
              Setup in minutes • Website widget • Shopify-ready roadmap • Built for Indian D2C brands
            </motion.p>

            <motion.div variants={heroItem(0.7)} className="mt-12 border-t border-zinc-100 pt-9">
              <div className="grid gap-6 sm:grid-cols-3 sm:gap-0">
                {[
                  ['Orders', 'Track and explain status'],
                  ['Returns', 'Policy-aware guidance'],
                  ['FAQs', 'Instant brand answers'],
                ].map(([value, label], index) => (
                  <div key={value} className={`min-w-0 px-4 text-center lg:px-5 lg:text-left ${index > 0 ? 'sm:border-l sm:border-zinc-200' : ''}`}>
                    <p className="mx-auto max-w-[11rem] text-pretty text-[22px] font-black leading-[1.05] tracking-[-0.04em] text-black sm:text-[18px] md:text-[20px] lg:mx-0 xl:text-[22px]">
                      {value}
                    </p>
                    <p className="mt-3 text-sm font-medium text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={heroItem(0.35)} className="lg:justify-self-end">
            <ProductDemoFrame />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductDemoFrame() {
  return (
    <div className="relative mx-auto w-full max-w-[720px] lg:max-w-[750px] xl:max-w-[760px]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] border border-white/15 bg-black shadow-demo">
        <DemoFallback />

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="absolute bottom-6 left-6 hidden max-w-[260px] md:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">Live AI support layer</p>
          <p className="mt-2 text-xl font-bold tracking-[-0.03em] text-white">Ecommerce support, handled in seconds.</p>
        </div>
         <ChatbotOverlay />
      </div>
    </div>
  );
}

function DemoFallback() {
  return (
    <div className="absolute inset-0 bg-[#0A0A0A]">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute left-8 top-16 w-[52%] space-y-4">
        <div className="h-4 w-32 rounded-full bg-white/12" />
        <div className="h-24 rounded-3xl border border-white/10 bg-white/[0.06]" />
        <div className="grid grid-cols-3 gap-3">
          <div className="h-20 rounded-2xl border border-white/10 bg-white/[0.05]" />
          <div className="h-20 rounded-2xl border border-white/10 bg-white/[0.05]" />
          <div className="h-20 rounded-2xl border border-white/10 bg-white/[0.05]" />
        </div>
      </div>
    </div>
  );
}

function ChatbotOverlay() {
  const bubbles = [
    { side: 'user', text: 'Where is my order #TVQ1024?' },
    { side: 'bot', text: 'Your order is out for delivery today. Expected by 7 PM.' },
    { side: 'user', text: 'Can I return it if size does not fit?' },
    { side: 'bot', text: 'Yes. Once delivered, I can help start the return flow instantly.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute right-4 top-3 w-[min(330px,calc(100%-32px))] rounded-[24px] border border-white/55 bg-white/[0.88] p-4 shadow-chat backdrop-blur-2xl sm:right-5 sm:top-5 md:right-7 md:top-6 md:w-[340px] md:p-5 lg:right-8 lg:top-7 xl:right-9 xl:top-8 xl:w-[350px]"
    >
      <div className="flex items-center justify-between border-b border-zinc-200/70 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo text-white">
            <FiMessageCircle className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold tracking-[-0.01em] text-black">Teviq Support AI</p>
            <p className="mt-0.5 text-xs font-medium text-zinc-500">Online</p>
          </div>
        </div>
        <span className="h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
      </div>

      <div className="mt-4 space-y-3">
        {bubbles.map((bubble, index) => (
          <motion.div
            key={`${bubble.side}-${bubble.text}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.9 + index * 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className={`flex ${bubble.side === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${bubble.side === 'user' ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-700'}`}>
              {bubble.text}
            </div>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.65, duration: 0.35 }}
          className="flex justify-start"
        >
          <div className="flex items-center gap-1 rounded-2xl bg-zinc-100 px-4 py-3">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                animate={{ opacity: [0.35, 1, 0.35] }}
                transition={{ duration: 1, repeat: Infinity, delay: dot * 0.15 }}
                className="h-1.5 w-1.5 rounded-full bg-zinc-500"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5">
        <span className="min-w-0 flex-1 truncate text-sm text-zinc-400">Ask about your order...</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo text-white">
          <FiSend className="h-4 w-4" />
        </span>
      </div>
    </motion.div>
  );
}

export default Hero;
