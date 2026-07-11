import { AnimatePresence, motion } from 'framer-motion';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';
import { faqs } from '../data/content';
import SectionHeader from './ui/SectionHeader';

function FAQ({ openFaq, setOpenFaq }) {
  return (
    <section id="faq" className="section-light pt-0 md:pt-0">
      <motion.div className="container-shell max-w-2xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <SectionHeader title="Common Questions" />
        <div className="mt-16">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div key={faq.question} variants={fadeInUp} className="border-b border-zinc-100">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left text-[17px] font-semibold text-black"
                >
                  <span>{faq.question}</span>
                  {isOpen ? <FiMinus className="h-5 w-5 shrink-0 text-indigo" /> : <FiPlus className="h-5 w-5 shrink-0 text-indigo" />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                    >
                      <p className="pb-6 text-[15px] leading-[1.7] text-zinc-500">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default FAQ;
