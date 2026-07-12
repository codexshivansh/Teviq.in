import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheck, FiSend } from 'react-icons/fi';

// A self-contained, code-driven hero background — no video file, no feature
// tour. One calm, continuous story plays on loop inside a widget mockup that
// mirrors the real Teviq product (dark glass header, frosted body, message
// bubble styling lifted from widget.js). The goal is trust in five seconds,
// not a demo: a single question gets answered, a single request gets
// resolved, and a barely-there dashboard glimpse hints that it's all tracked
// — nothing competes with the headline, which owns the left side of frame.
const EASE = [0.16, 1, 0.3, 1];
const LOOP_DURATION = 12200;

const STORY = {
  userQuestion: 'Where is my order?',
  botReply: "It's out for delivery — arriving today by 6 PM.",
  statusLabel: 'Out for delivery',
  userFollowUp: "I'd like to exchange it for a different size.",
  botConfirm: 'Done — return approved, pickup is scheduled.',
};

const T = {
  typeQ1Start: 300,
  userMsg1: 1500,
  botTypingStart: 1800,
  botMsg1: 2900,
  statusPill: 3400,
  typeQ2Start: 5200,
  userMsg2: 6300,
  botTypingStart2: 6600,
  botMsg2: 7700,
  checkMark: 8100,
  syncGlimpse: 9200,
  syncGlimpseOut: 10700,
};

function HeroCinematicBackground() {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCycle((value) => value + 1), LOOP_DURATION);
    return () => clearTimeout(timer);
  }, [cycle]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0A0A0A]">
      <AmbientBackdrop />

      <div className="absolute right-8 top-8 z-10 hidden items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/35 lg:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
        Live on your storefront
      </div>

      {/* Widget lives in the right ~46% of the frame — the left stays clear for the headline */}
      <motion.div
        className="absolute inset-y-0 right-[4%] hidden w-[52%] items-center justify-center md:flex lg:right-[8%] lg:w-[46%]"
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <AnimatePresence mode="wait">
          <WidgetScene key={cycle} />
        </AnimatePresence>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent" />
    </div>
  );
}

function AmbientBackdrop() {
  return (
    <>
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:56px_56px]" />
      <motion.div
        className="pointer-events-none absolute right-[-6%] top-[16%] h-[620px] w-[620px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.22),transparent_65%)] blur-3xl"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[-10%] left-[10%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14),transparent_65%)] blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
    </>
  );
}

function TypingDots() {
  return (
    <div className="flex w-fit items-center gap-1 rounded-2xl bg-white/[0.06] px-4 py-3">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.15 }}
          className="h-1.5 w-1.5 rounded-full bg-white/60"
        />
      ))}
    </div>
  );
}

// Reveals `text` character by character starting `start` ms after mount, then
// clears back to empty at `clearAt` — simulating someone typing and sending.
function Typewriter({ text, start, clearAt, speed = 30 }) {
  const [shown, setShown] = useState('');

  useEffect(() => {
    let charInterval;
    const startTimer = setTimeout(() => {
      let i = 0;
      charInterval = setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) clearInterval(charInterval);
      }, speed);
    }, start);
    const clearTimer = setTimeout(() => setShown(''), clearAt);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(clearTimer);
      if (charInterval) clearInterval(charInterval);
    };
  }, [text, start, clearAt, speed]);

  return shown || null;
}

function WidgetScene() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: EASE } }}
      transition={{ duration: 0.6, ease: EASE }}
      className="relative w-[368px] overflow-hidden rounded-[22px] border border-white/[0.24] shadow-chat"
      style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
    >
      {/* Slow glass reflection sweep across the whole card */}
      <motion.div
        className="pointer-events-none absolute -inset-y-10 left-0 z-10 w-1/3 -rotate-12 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
        initial={{ x: '-160%' }}
        animate={{ x: '420%' }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
      />

      {/* Header — mirrors the real widget: double gradient with white highlight + navy base */}
      <div
        className="relative flex items-center justify-between px-5 py-4"
        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.1), transparent), linear-gradient(135deg, rgba(16,24,40,0.96), #111827)' }}
      >
        <div>
          <p className="text-sm font-bold tracking-[-0.01em] text-white">Teviq</p>
          <p className="mt-0.5 text-[11px] font-medium text-white/60">Online</p>
        </div>
        <span className="h-2 w-2 rounded-full bg-[#34D399]" />
      </div>

      <div className="relative min-h-[264px] px-5 py-5">
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: T.userMsg1 / 1000, duration: 0.4, ease: EASE }}
            className="flex justify-end"
          >
            <div className="max-w-[82%] rounded-2xl bg-white/90 px-4 py-2.5 text-[13px] leading-5 text-[#111827]">
              {STORY.userQuestion}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{ delay: T.botTypingStart / 1000, duration: (T.botMsg1 - T.botTypingStart) / 1000, times: [0, 0.8, 1] }}
            className="flex justify-start"
          >
            <TypingDots />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: T.botMsg1 / 1000, duration: 0.4, ease: EASE }}
            className="flex flex-col items-start gap-1.5"
          >
            <div
              className="max-w-[86%] rounded-2xl px-4 py-2.5 text-[13px] leading-5 text-white"
              style={{ background: 'linear-gradient(135deg, rgba(16,24,40,0.98), #111827)' }}
            >
              {STORY.botReply}
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: T.statusPill / 1000, duration: 0.35 }}
              className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-[#22C55E]/10 px-2.5 py-1 text-[10px] font-semibold text-[#4ADE80]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" /> {STORY.statusLabel}
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: T.userMsg2 / 1000, duration: 0.4, ease: EASE }}
            className="flex justify-end"
          >
            <div className="max-w-[82%] rounded-2xl bg-white/90 px-4 py-2.5 text-[13px] leading-5 text-[#111827]">
              {STORY.userFollowUp}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 1, 0] }}
            transition={{ delay: T.botTypingStart2 / 1000, duration: (T.botMsg2 - T.botTypingStart2) / 1000, times: [0, 0.8, 1] }}
            className="flex justify-start"
          >
            <TypingDots />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: T.botMsg2 / 1000, duration: 0.4, ease: EASE }}
            className="flex items-center gap-2"
          >
            <div
              className="max-w-[80%] rounded-2xl px-4 py-2.5 text-[13px] leading-5 text-white"
              style={{ background: 'linear-gradient(135deg, rgba(16,24,40,0.98), #111827)' }}
            >
              {STORY.botConfirm}
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: T.checkMark / 1000, duration: 0.3, ease: EASE }}
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E]/15 text-[#4ADE80]"
            >
              <FiCheck className="h-3 w-3" />
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Input bar — a typewriter effect plays here right before each message sends */}
      <div className="relative flex items-center gap-2 border-t border-white/[0.08] px-4 py-3">
        <div className="min-w-0 flex-1 text-[12px] text-white/50">
          <Typewriter text={STORY.userQuestion} start={T.typeQ1Start} clearAt={T.userMsg1} />
          <Typewriter text={STORY.userFollowUp} start={T.typeQ2Start} clearAt={T.userMsg2} />
        </div>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/70">
          <FiSend className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* Barely-there confirmation that it's all tracked — a hint, not a feature tour */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: [0, 1, 1, 0], y: 0 }}
        transition={{ delay: T.syncGlimpse / 1000, duration: (T.syncGlimpseOut - T.syncGlimpse) / 1000, times: [0, 0.15, 0.85, 1] }}
        className="pointer-events-none absolute -bottom-3 -right-3 flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0A0A]/90 px-3 py-1.5 text-[10px] font-medium text-white/60 shadow-chat"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
        Synced to dashboard
      </motion.div>
    </motion.div>
  );
}

export default HeroCinematicBackground;
