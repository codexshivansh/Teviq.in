import { motion } from 'framer-motion';
import { FiAlertTriangle, FiCheck, FiX } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';
import { comparisonRows, comparisonColumns } from '../data/content';
import SectionHeader from './ui/SectionHeader';

function Comparison() {
  return (
    <section id="comparison" className="section-dark">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader
          label="How Teviq compares"
          title="Good tools already exist. Here's where Teviq fits."
          subtitle="Cheap bots are quick to install and enterprise helpdesks are powerful. Teviq's edge is the combination — website plus WhatsApp, live store data, Hinglish and pre-sale selling — priced for early Indian D2C brands."
          dark
        />
        <motion.div variants={fadeInUp} className="mx-auto mt-16 max-w-5xl overflow-x-auto rounded-2xl border border-zinc-800 bg-[#111111] p-2">
          <div className="min-w-[820px]">
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1.05fr]">
              {comparisonColumns.map((heading, index) => (
                <div key={heading} className={`border-b border-[#1C1C1E] px-5 py-5 text-[13px] font-semibold uppercase tracking-[0.12em] ${index === 3 ? 'rounded-t-xl border border-b-0 border-indigo/30 bg-teviq-column text-white' : 'text-zinc-400'}`}>
                  {heading}
                </div>
              ))}
              {comparisonRows.map(([label, cheap, generic, teviq], index) => (
                <ComparisonRow key={label} label={label} cheap={cheap} generic={generic} teviq={teviq} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ComparisonRow({ label, cheap, generic, teviq, index }) {
  const rowBg = index % 2 ? 'bg-white/[0.02]' : 'bg-transparent';
  return (
    <>
      <div className={`border-b border-[#1C1C1E] px-5 py-5 text-sm font-semibold text-white ${rowBg}`}>{label}</div>
      <Status value={cheap} className={rowBg} />
      <Status value={generic} className={rowBg} />
      <Status value={teviq} highlight className={rowBg} isLast={index === comparisonRows.length - 1} />
    </>
  );
}

function Status({ value, highlight = false, className = '', isLast = false }) {
  const content = {
    yes: { label: 'Yes', className: 'text-[#4ADE80]', icon: FiCheck },
    no: { label: 'No', className: 'text-zinc-700', icon: FiX },
    limited: { label: 'Limited', className: 'text-[#FCD34D]', icon: FiAlertTriangle },
  }[value];
  const Icon = content.icon;

  return (
    <div className={`flex items-center gap-2 border-b border-[#1C1C1E] px-5 py-5 text-sm font-semibold ${className} ${highlight ? `border-x border-indigo/30 bg-teviq-column ${isLast ? 'rounded-b-xl' : ''}` : ''}`}>
      <Icon className={`h-5 w-5 ${content.className}`} />
      <span className={content.className}>{content.label}</span>
    </div>
  );
}

export default Comparison;
