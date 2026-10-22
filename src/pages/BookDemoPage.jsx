import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from '../lib/router';
import { FiArrowRight, FiArrowUpRight, FiCheck } from 'react-icons/fi';
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
      setSubmitMessage('The booking form is temporarily unavailable. Please email helloteviq@gmail.com and we will help you arrange a demo.');
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
      setSubmitMessage("Thank you! We've received your demo request. Our team will follow up with the next steps.");
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong while sending your request. Please try again or email us at helloteviq@gmail.com.');
    }
  };

  return (
    <main className="booking-page">
      <section className="booking-section">
        <motion.div className="container-shell booking-layout" initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeInUp} className="booking-intro">
            <span className="section-kicker"><span /> LET'S MAKE IT YOURS</span>
            <h1>See what better<br />support feels like.<br /><em>For your brand.</em></h1>
            <p>Bring your questions. We’ll walk through Teviq together and explore how it fits the way you support customers.</p>
            <div className="booking-agenda">
              <span>IN YOUR WALKTHROUGH</span>
              {['Your channels and customer questions', 'Your products, services and sales objections', 'The right plan and next steps'].map(item => <div key={item}><FiCheck />{item}</div>)}
            </div>
            <div className="booking-contact">Prefer a conversation first?<a href="mailto:helloteviq@gmail.com">helloteviq@gmail.com <FiArrowUpRight /></a></div>
          </motion.div>
          <motion.div variants={fadeInUp} className="booking-form-card">
            {isSuccess ? <div className="booking-success" role="status"><span className="booking-success-icon"><FiCheck /></span><h2>You're on our list.</h2><p>Your demo request has been received. Our team will follow up with the next steps.</p><Link to="/" className="button-ink">Back to Teviq <FiArrowUpRight /></Link></div> :
            <form onSubmit={handleSubmit} noValidate>
              <div className="booking-form-title"><h2>Tell us a little about you.</h2><p>A few details, and we can make the demo useful.</p></div>
              {submitMessage && <div className="booking-error" role="alert">{submitMessage}</div>}
              <div className="grid gap-5 sm:grid-cols-2">
                <label className={labelClass}>Your name <span aria-hidden="true">*</span><input className={inputClass} name="fullName" type="text" autoComplete="name" required placeholder="Full name" /></label>
                <label className={labelClass}>Business name <span aria-hidden="true">*</span><input className={inputClass} name="brandName" type="text" autoComplete="organization" required placeholder="Your B2B or D2C business" /></label>
                <label className={labelClass}>Work email <span aria-hidden="true">*</span><input className={inputClass} name="workEmail" type="email" autoComplete="email" required placeholder="you@yourbrand.com" /></label>
                <label className={labelClass}>Phone number <span aria-hidden="true">*</span><input className={inputClass} name="phone" type="tel" autoComplete="tel" required placeholder="+91" /></label>
              </div>
              <details className="booking-extra"><summary>A little more context <span>Optional</span></summary><div className="grid gap-5 pt-5 sm:grid-cols-2">
                <label className={labelClass}>Website URL<input className={inputClass} name="website" type="url" placeholder="https://yourbrand.com" /></label>
                <label className={labelClass}>Website platform<select className={inputClass} name="platform" defaultValue=""><option value="">Select platform</option>{platformOptions.map(option => <option key={option} value={option}>{option}</option>)}</select></label>
                <label className={labelClass}>Monthly orders (if applicable)<select className={inputClass} name="monthlyOrders" defaultValue=""><option value="">Select orders</option>{orderOptions.map(option => <option key={option} value={option}>{option}</option>)}</select></label>
              </div></details>
              <label className={labelClass}>What would you like help with?<textarea className={`${inputClass} min-h-[105px] resize-y`} name="message" placeholder="Your channels, customer questions, sales objections, or support challenges…" /></label>
              <button type="submit" disabled={isSubmitting} className="button-violet booking-submit disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? 'Sending your request…' : 'Book my free demo'}{!isSubmitting && <FiArrowUpRight />}</button>
              <p className="booking-privacy">Required fields are marked *. Your details help us respond to this request. <Link to="/privacy">Privacy policy</Link></p>
            </form>}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
export default BookDemoPage;
