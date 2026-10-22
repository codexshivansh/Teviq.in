import { FaBrain } from 'react-icons/fa';

export default function BrainLogo({ className = '' }) {
  return <span className={`teviq-symbol brain-logo ${className}`} aria-label="Teviq Brain"><strong>Teviq</strong><FaBrain aria-hidden="true" /></span>;
}
