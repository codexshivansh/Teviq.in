import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../lib/animations';

/**
 * A 3D flip card. The front is shown while scrolling; hover (desktop) or
 * tap (touch) flips it to reveal the back. Keyboard users can flip with
 * Enter/Space, and reduced-motion users get an instant swap (see index.css).
 */
function FlipCard({ front, back, className = '', faceClassName = '', ariaLabel }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div variants={fadeInUp} className={className}>
      <div
        className={`flip-card h-full w-full ${flipped ? 'is-flipped' : ''}`}
        role="button"
        tabIndex={0}
        aria-label={ariaLabel}
        onClick={() => setFlipped((v) => !v)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setFlipped((v) => !v);
          }
        }}
      >
        <div className="flip-inner">
          <div className={`flip-face ${faceClassName}`}>{front}</div>
          <div className={`flip-face flip-face--back ${faceClassName}`}>{back}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default FlipCard;
