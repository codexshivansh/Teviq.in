import { motion, useReducedMotion } from 'framer-motion';
export const smoothEase = [0.22, 1, 0.36, 1];
export default function Reveal({ children, className = '', delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.8, delay, ease: smoothEase }} {...props}>{children}</motion.div>;
}
