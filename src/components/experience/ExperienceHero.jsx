import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { FiArrowUpRight, FiPlay } from 'react-icons/fi';
import { Link } from '../../lib/router';
import ProductExperience from './ProductExperience';
import { smoothEase } from './Reveal';

export default function ExperienceHero() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 0.65], [0, 45]);
  return (
    <section ref={ref} id="top" className="new-hero">
      <div className="hero-aura hero-aura-one" aria-hidden="true" /><div className="hero-aura hero-aura-two" aria-hidden="true" />
      <div className="container-shell hero-content">
        <div className="hero-copy">
        <motion.div className="hero-announcement" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}><span className="status-pip" /> AI support &amp; sales for B2B and D2C</motion.div>
        <h1 className="hero-headline">
          <motion.span initial={reduceMotion ? false : { opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: smoothEase }}>AI that supports</motion.span>
          <motion.span initial={reduceMotion ? false : { opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: smoothEase }}>and <em>helps you sell.</em></motion.span>
        </h1>
        <motion.p className="hero-description" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.22, ease: smoothEase }}>Teviq answers customer questions, explains your products or services, and handles sales objections using your business knowledge. On your website, WhatsApp and Instagram.</motion.p>
        <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.32, ease: smoothEase }}>
          <Link to="/book-demo" className="button-ink">Book a free demo <FiArrowUpRight /></Link>
          <Link to="/live-demo" className="button-text"><span className="play-circle"><FiPlay /></span> Try a live demo</Link>
        </motion.div>
        <div className="hero-footnote">Your knowledge. Your channels. Your team in control.<br />Plans from ₹999 / month</div>
        </div>
        <div className={`hero-art ${reduceMotion ? 'is-motion-paused' : ''}`} aria-hidden="true">
          <img src="/hero-human-ai-network.jpg" alt="" width="1660" height="948" fetchpriority="high" decoding="async" />
          <svg className="hero-network-flow" viewBox="0 0 1600 850" preserveAspectRatio="xMidYMid slice" focusable="false">
            <path className="network-track" d="M850 130 C1080 15 1250 230 1600 70 M820 740 C1080 550 1260 810 1600 670" />
            <path className="network-travel" d="M850 130 C1080 15 1250 230 1600 70 M820 740 C1080 550 1260 810 1600 670" />
            <circle cx="850" cy="130" r="4" /><circle cx="820" cy="740" r="4" />
          </svg>
          <span className="hero-network-signal signal-one" /><span className="hero-network-signal signal-two" />
        </div>
        <motion.div style={reduceMotion ? undefined : { y }} className="hero-product-stage" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.35, ease: smoothEase }}>
          <div className="product-stage-label"><span>THREE CHANNELS. ONE CONVERSATION SPACE.</span></div>
          <ProductExperience />
        </motion.div>
      </div>
    </section>
  );
}
