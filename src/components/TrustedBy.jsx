import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../lib/animations';

function TrustedBy() {
  const categories = ['Fashion', 'Beauty', 'Skincare', 'Electronics', 'Jewellery', 'Footwear', 'Lifestyle', 'Home Decor', 'Furniture', 'Pet Brands', 'Supplements', 'Gifting'];

  return (
    <section className="bg-white py-16 md:py-20">
      <motion.div className="container-shell" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
        <motion.div variants={fadeInUp} className="rounded-[28px] border border-zinc-100 bg-zinc-50/60 px-6 py-8 md:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <p className="eyebrow">BUILT FOR</p>
              <p className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-black">Fast-growing ecommerce categories with repeat support questions.</p>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {categories.map((category) => (
                <div key={category} className="rounded-full border border-zinc-100 bg-white px-4 py-2 text-center text-sm font-semibold text-zinc-600 shadow-sm">
                  {category}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default TrustedBy;
