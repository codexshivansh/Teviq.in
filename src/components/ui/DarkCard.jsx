import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

function DarkCard({ children, className = '' }) {
  return (
    <motion.div variants={fadeInUp} className={`card-dark ${className}`}>
      {children}
    </motion.div>
  );
}

export default DarkCard;
