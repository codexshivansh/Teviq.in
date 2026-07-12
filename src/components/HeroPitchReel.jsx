import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheckCircle, FiMessageCircle, FiSend } from 'react-icons/fi';
import { dashboardPreview } from '../data/content';

// A self-contained, code-driven "pitch reel" — no video file. It loops through
// three scenes (chat conversation -> success celebration -> dashboard
// preview) to visually tell the product story: customers get instant AI
// replies, and the brand owner controls all of it from one dashboard.
const PHASES = ['chat', 'celebrate', 'dashboard'];
const PHASE_DURATIONS = {
  chat: 5400,
  celebrate: 2000,
  dashboard: 4400,
};

const EASE = [0.25, 0.1, 0.25, 1];

const CONVERSATION = [
  { side: 'user', text: 'Where is my order #TVQ1024?' },
  { side: 'bot', text: 'Your order is out for delivery today. Expected by 7 PM.' },
  { side: 'user', text: 'Can I return it if size does not fit?' },
  { side: 'bot', text: 'Yes — once delivered, I can start the return flow instantly.' },
];

const CELEBRATE_EMOJIS = ['🎉', '✅', '💬', '✨', '⚡'];

const DASHBOARD_ITEMS = dashboardPreview.slice(0, 4);

function HeroPitchReel() {
  const [phase, setPhase] = useState('chat');
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase((current) => {
        const nextIndex = (PHASES.indexOf(current) + 1) % PHASES.length;
        const next = PHASES[nextIndex];
        if (next === 'chat') setCycle((value) => value + 1);
        return next;
      });
    }, PHASE_DURATIONS[phase]);

    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div className="relative mx-auto w-full max-w-[720px] lg:max-w-[760px] xl:max-w-[800px]">
      {/* Ambient glow behind the panel so it reads as a living visual rather than a flat screenshot */}
      <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_62%_38%,rgba(99,102,241,0.18),transparent_60%)] blur-2xl" />

      <div className="relative aspect-[16/11] overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A] shadow-demo">
        <BackgroundGrid />

        <div className="absolute left-5 top-5 z-10 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/40">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
          Teviq — live on your storefront
        </div>

        <AnimatePresence mode="wait">
          {phase === 'chat' ? <ChatScene key={`chat-${cycle}`} /> : null}
          {phase === 'celebrate' ? <CelebrateScene key="celebrate" /> : null}
          {phase === 'dashboard' ? <DashboardScene key="dashboard" /> : null}
        </AnimatePresence>
      </div>

      {/* Fades the panel into the page near the headline so it never competes with the text */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-40 rounded-l-[32px] bg-gradient-to-r from-white via-white/60 to-transparent lg:block" />
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:44px_44px]" />
  );
}

function ChatScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 flex items-center justify-center p-6 md:p-8"
    >
      <div className="w-full max-w-[360px] rounded-[24px] border border-white/55 bg-white/[0.92] p-4 shadow-chat backdrop-blur-2xl md:p-5">
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
          {CONVERSATION.map((bubble, index) => (
            <motion.div
              key={`${bubble.side}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3 + index * 0.62, ease: EASE }}
              className={`flex ${bubble.side === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  bubble.side === 'user' ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-700'
                }`}
              >
                {bubble.text}
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.3 + CONVERSATION.length * 0.62 }}
            className="flex justify-start"
          >
            <div className="flex items-center gap-1 rounded-2xl bg-zinc-100 px-4 py-3">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  animate={{ opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.15 }}
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
      </div>
    </motion.div>
  );
}

function CelebrateScene() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.35 }}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      {CELEBRATE_EMOJIS.map((emoji, index) => (
        <motion.span
          key={emoji}
          initial={{ opacity: 0, y: 30, x: (index - CELEBRATE_EMOJIS.length / 2) * 46, scale: 0.6 }}
          animate={{ opacity: [0, 1, 1, 0], y: -70, scale: 1 }}
          transition={{ duration: 1.7, delay: 0.15 + index * 0.09, ease: EASE }}
          className="absolute text-3xl md:text-4xl"
        >
          {emoji}
        </motion.span>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
        className="flex flex-col items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.06] px-8 py-7 text-center backdrop-blur"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#22C55E]/15 text-[#22C55E]">
          <FiCheckCircle className="h-6 w-6" />
        </span>
        <p className="text-lg font-bold tracking-[-0.02em] text-white">Handled instantly</p>
        <p className="max-w-[220px] text-xs leading-5 text-zinc-400">
          No queue, no wait — resolved in the same conversation.
        </p>
      </motion.div>
    </motion.div>
  );
}

function DashboardScene() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.45, ease: EASE }}
      className="absolute inset-0 flex items-center justify-center p-6 md:p-8"
    >
      <div className="w-full max-w-[420px] rounded-[24px] border border-zinc-800 bg-[#111111] p-5 shadow-chat md:p-6">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">Teviq Admin</p>
            <p className="mt-1 text-base font-bold tracking-[-0.02em] text-white">Run it all from one dashboard</p>
          </div>
          <span className="rounded-full bg-[#DCFCE7] px-3 py-1 text-[11px] font-bold text-[#16A34A]">Live</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {DASHBOARD_ITEMS.map(([title, body], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 + index * 0.1, ease: EASE }}
              className="rounded-2xl border border-zinc-800 bg-white/[0.04] p-3"
            >
              <p className="text-xs font-bold text-white">{title}</p>
              <p className="mt-1.5 text-[11px] leading-4 text-zinc-500">{body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6, ease: EASE }}
          className="mt-3 rounded-2xl border border-zinc-800 bg-white/[0.04] px-4 py-3"
        >
          <p className="text-[11px] font-semibold leading-5 text-zinc-400">
            Every conversation, escalation and resolution is tracked automatically — no manual logging.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroPitchReel;
