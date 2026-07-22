export const policyLastUpdated = '22 July 2026';

export const publicPolicies = [
  {
    slug: 'refund-policy',
    href: '/policies/refund-policy',
    label: 'Billing',
    title: 'Refund Policy',
    summary: 'Free-trial access, paid subscription refunds, and billing-cycle terms.',
    paragraphs: [
      'Teviq offers a 7-day free trial, giving you full access to test the AI support widget with your own store data before paying anything. Once your paid subscription begins, payments are non-refundable. We do not offer partial or prorated refunds for unused time within a billing cycle. If you experience technical issues during setup, our support team will work with you to resolve them — please contact us before requesting a refund.',
    ],
  },
  {
    slug: 'subscription-cancellation',
    href: '/policies/subscription-cancellation',
    label: 'Subscription',
    title: 'Subscription Cancellation Policy',
    summary: 'How cancellation works, when access ends, and what happens on resubscription.',
    paragraphs: [
      'You can cancel your Teviq subscription anytime — there is no minimum commitment period and no notice period required, including during your first 3-month price-locked period. When you cancel, your access continues until the end of your current billing cycle, and you will not be charged again. Note: if you cancel and later resubscribe, you will be charged the then-current standard rate, not your original locked-in price. You can cancel directly from your dashboard account settings or by contacting support.',
    ],
  },
  {
    slug: 'privacy',
    href: '/privacy',
    label: 'Data & privacy',
    title: 'Customer Data & Privacy Policy',
    summary: 'How Teviq uses, isolates, retains, and deletes brand and customer support data.',
    paragraphs: [
      "Teviq stores brand-scoped product, order, knowledge, and customer chat data only to operate support for that brand. One brand's data is never used to answer another brand's customers.",
      'Customer chat logs are retained for up to 30 days and removed through a scheduled server-side cleanup. Brand configuration, knowledge, and connected-store data remain available while the workspace is active. You can request deletion or disconnection of workspace data at any time by contacting Teviq support.',
    ],
  },
  {
    slug: 'pricing-and-plans',
    href: '/policies/pricing-and-plans',
    label: 'Commercial terms',
    title: 'Pricing & Plans',
    summary: 'Early-access pricing, the three-month price lock, and planned Growth pricing.',
    paragraphs: [
      'Teviq is currently priced at ₹999/month as an early-access offer for our first 10 clients. This includes the full AI support widget — order tracking, returns, FAQs, and brand-specific knowledge, installable on your storefront with a single script tag. This rate is locked in for your first 3 months from signup, regardless of any price changes during that time. From your 4th month onward, your subscription renews at whatever the current standard rate is at that time — for example, once we onboard our first 10 clients, new signups move to ₹1999/month, and any client whose 3-month lock-in has ended will also move to that current rate.',
      'A higher-tier Growth plan is also planned, adding WhatsApp and Instagram support alongside the website widget, priced at ₹3999/month. If the Growth plan launches while you are still within your original 3-month locked period, you can upgrade to it by paying just ₹1999 extra on top of your locked ₹999/month rate (₹2999/month total) — this discounted upgrade price also only holds until your original 3-month lock-in ends. From your 4th month onward, you would pay the standard rate for whichever plan you are on.',
      'You can cancel anytime during or after your 3-month locked period — the 3 months guarantees your price, not a minimum commitment.',
    ],
  },
  {
    slug: 'support-response-time',
    href: '/policies/support-response-time',
    label: 'Support',
    title: 'Support Response Time (SLA)',
    summary: 'Support availability, response expectations, and contact details.',
    paragraphs: [
      'Teviq\'s support team responds to all client queries within 24 hours. Our support hours are Monday to Saturday, 10:00 AM to 9:00 PM IST. You can reach us by WhatsApp at +919555144436 or email at helloteviq@gmail.com. For urgent issues affecting your live widget, mention "urgent" in your message for faster prioritization.',
    ],
  },
  {
    slug: 'setup-and-onboarding',
    href: '/policies/setup-and-onboarding',
    label: 'Implementation',
    title: 'Setup & Onboarding',
    summary: 'What is involved in setup, installation, and connecting store data.',
    paragraphs: [
      'Installing the Teviq widget takes only a few minutes: after signup, you add a single script tag to your Shopify or custom storefront. Full setup time depends on the size and quality of your catalog, policies, FAQs, and support rules. Shopify product and order data can be connected from the dashboard, and answers should be tested in the AI Playground before launch.',
    ],
  },
];

export const policyBySlug = Object.fromEntries(
  publicPolicies.map((policy) => [policy.slug, policy]),
);
