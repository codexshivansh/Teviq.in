import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

function LightCard({ children, className = '' }) {
  return (
    <motion.div variants={fadeInUp} className={`card-light ${className}`}>
      {children}
    </motion.div>
  );
}

export default LightCard;
