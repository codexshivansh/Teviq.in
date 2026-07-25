import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '../lib/router';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { fadeInUp, stagger } from '../lib/animations';

function BookDemoPage() {
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState('');
  const platformOptions = ['Shopify', 'WooCommerce', 'Custom', 'Other'];
  const orderOptions = ['Under 500', '500–2,000', '2,000–10,000', '10,000+'];
  const nextSteps = [
    'We review your business.',
    'We schedule a personalized demo.',
    'We show how Teviq fits your support workflow.',
    'If it’s a good fit, we help you get started.',
  ];
  const inputClass = 'mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-black outline-none transition placeholder:text-zinc-400 focus:border-indigo focus:ring-4 focus:ring-indigo/10';
  const labelClass = 'text-sm font-semibold text-zinc-700';

  const isSubmitting = submitStatus === 'submitting';
  const isSuccess = submitStatus === 'success';

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting || isSuccess) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get('fullName') || '').trim(),
      email: String(formData.get('workEmail') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      brand: String(formData.get('brandName') || '').trim(),
      website: String(formData.get('website') || '').trim(),
      platform: String(formData.get('platform') || '').trim(),
      monthlyOrders: String(formData.get('monthlyOrders') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[+()\-\s\d]{7,20}$/;

    if (!values.name || !values.email || !values.phone || !values.brand) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in your name, work email, phone number, and brand name.');
      return;
    }

    if (!emailPattern.test(values.email)) {
      setSubmitStatus('error');
      setSubmitMessage('Please enter a valid work email address.');
      return;
    }

    if (!phonePattern.test(values.phone)) {
      setSubmitStatus('error');
      setSubmitMessage('Please enter a valid phone number.');
      return;
    }

    if (values.website) {
      try {
        const url = new URL(values.website);
        if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Invalid protocol');
      } catch (error) {
        setSubmitStatus('error');
        setSubmitMessage('Please enter a valid website URL, including https://');
        return;
      }
    }

    setSubmitStatus('submitting');
    setSubmitMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!accessKey) {
      setSubmitStatus('error');
      setSubmitMessage('Web3Forms access key is missing. Add VITE_WEB3FORMS_KEY to the .env file and restart the dev server.');
      return;
    }

    const payload = {
      access_key: accessKey,
      name: values.name,
      email: values.email,
      phone: values.phone,
      brand: values.brand,
      website: values.website,
      platform: values.platform,
      'monthly orders': values.monthlyOrders,
      message: values.message,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to submit demo request.');
      }

      setSubmitStatus('success');
      setSubmitMessage("Thank you! We've received your demo request. Our team will contact you within 24 business hours.");
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong while sending your request. Please try again or email us at helloteviq@gmail.com.');
    }
  };

  return (
    <main>
      <section className="bg-white pb-24 pt-32 md:pb-[150px] md:pt-[150px]">
        <motion.div className="container-shell" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">BOOK A DEMO</p>
            <h1 className="mt-6 text-balance text-[42px] font-black leading-none tracking-[-0.04em] text-black sm:text-6xl lg:text-[76px]">
              See how Teviq Support AI can automate your customer support.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-[1.7] text-zinc-500">
              Tell us a little about your business and we’ll schedule a personalized walkthrough of Teviq Support AI.
            </p>
          </motion.div>

          <div className="mx-auto mt-20 grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {isSuccess ? (
              <motion.div variants={fadeInUp} className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-card md:p-8">
                <div className="rounded-2xl border border-[#BBF7D0] bg-[#F0FDF4] p-5">
                  <p className="text-xl font-black tracking-[-0.03em] text-black">Demo Request Received</p>
                  <div className="mt-4 space-y-4 text-sm font-medium leading-6 text-[#166534]">
                    <p>Thank you for your interest in Teviq Support AI.</p>
                    <p>We’ve successfully received your request.</p>
                    <p>Our team will review your business and contact you within 24 business hours to schedule a personalized demo.</p>
                    <p>If you have any questions, feel free to contact us.</p>
                  </div>
                  <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                    <div>
                      <p className="font-semibold text-zinc-500">Email</p>
                      <a href="mailto:helloteviq@gmail.com" className="mt-1 block font-bold text-black transition hover:text-indigo">helloteviq@gmail.com</a>
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-500">Phone</p>
                      <a href="tel:+919555144436" className="mt-1 block font-bold text-black transition hover:text-indigo">+91 9555144436</a>
                    </div>
                  </div>
                  <Link to="/" className="primary-button mt-8">
                    Back to Home <FiArrowRight />
                  </Link>
                </div>
              </motion.div>
            ) : (
            <motion.form variants={fadeInUp} onSubmit={handleSubmit} noValidate className="rounded-[20px] border border-zinc-100 bg-white p-6 shadow-card md:p-8">
              {submitMessage && (
                <div className="mb-6 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] p-4 text-sm font-semibold leading-6 text-[#991B1B]">
                  {submitMessage}
                </div>
              )}

              <div className="grid gap-5 md:grid-cols-2">
                <label className={labelClass}>
                  Full Name *
                  <input className={inputClass} name="fullName" type="text" required />
                </label>
                <label className={labelClass}>
                  Work Email *
                  <input className={inputClass} name="workEmail" type="email" required />
                </label>
                <label className={labelClass}>
                  Phone Number *
                  <input className={inputClass} name="phone" type="tel" required />
                </label>
                <label className={labelClass}>
                  Brand Name *
                  <input className={inputClass} name="brandName" type="text" required />
                </label>
                <label className={labelClass}>
                  Website URL
                  <input className={inputClass} name="website" type="url" placeholder="https://yourbrand.com" />
                </label>
                <label className={labelClass}>
                  Platform
                  <select className={inputClass} name="platform" defaultValue="">
                    <option value="" disabled>Select platform</option>
                    {platformOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className={`${labelClass} md:col-span-2`}>
                  Monthly Orders
                  <select className={inputClass} name="monthlyOrders" defaultValue="">
                    <option value="" disabled>Select orders</option>
                    {orderOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>
                <label className={`${labelClass} md:col-span-2`}>
                  Message
                  <textarea
                    className={`${inputClass} min-h-[140px] resize-y`}
                    name="message"
                    placeholder="Tell us about your customer support workflow or biggest challenge."
                  />
                </label>
              </div>

              <button type="submit" disabled={isSubmitting || isSuccess} className="primary-button mt-8 w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
                {isSubmitting ? 'Sending...' : isSuccess ? 'Request Sent ✓' : 'Request Demo'} {!isSubmitting && !isSuccess && <FiArrowRight />}
              </button>
            </motion.form>
            )}

            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="rounded-[20px] border border-zinc-100 bg-white p-8 shadow-card">
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-black">What happens next?</h2>
                <div className="mt-8 space-y-5">
                  {nextSteps.map((step) => (
                    <div key={step} className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-indigo">
                        <FiCheck className="h-4 w-4" />
                      </span>
                      <p className="text-[15px] font-medium leading-6 text-zinc-600">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 border-t border-zinc-100 pt-6">
                  <p className="text-sm font-semibold text-zinc-500">Typical response time</p>
                  <p className="mt-2 text-xl font-black tracking-[-0.03em] text-black">Within 24 business hours.</p>
                </div>
              </div>

              <div className="rounded-[20px] border border-zinc-100 bg-white p-8 shadow-card">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <p className="text-sm font-semibold text-zinc-500">Email</p>
                    <a href="mailto:helloteviq@gmail.com" className="mt-2 block text-base font-bold text-black transition hover:text-indigo">helloteviq@gmail.com</a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-500">Phone</p>
                    <a href="tel:+919555144436" className="mt-2 block text-base font-bold text-black transition hover:text-indigo">+91 9555144436</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default BookDemoPage;
