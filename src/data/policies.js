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
      'You can cancel your Teviq subscription anytime. There is no minimum commitment period or notice period. After cancellation, access continues until the end of the current billing cycle and you will not be charged again. If you later resubscribe, the price will be the then-current standard rate. You can cancel in your dashboard account settings or by contacting Teviq support.',
    ],
  },
  {
    slug: 'privacy',
    href: '/privacy',
    label: 'Data & privacy',
    title: 'Customer Data & Privacy Policy',
    summary: 'How Teviq uses, isolates, retains, and deletes brand and customer support data.',
    lastUpdated: '17 October 2026',
    paragraphs: [
      'Teviq processes messages sent through a connected website chat, WhatsApp, or Instagram account to provide customer support and generate or send replies. Support conversations can be stored in the connected brand’s workspace and viewed by its authorized team. Teviq also uses the brand’s supplied knowledge and, where connected, store information to answer relevant questions. A brand’s data is kept separate from other brands’ support conversations.',
      'Messages and account information pass through the relevant channel provider and the service providers used to host and operate Teviq. Connecting or disconnecting a channel is separate from requesting deletion of historical support records.',
      'Teviq does not automatically delete support conversations after a fixed number of days. If a client or customer asks us to delete their data, we review the request, verify their connection to the account, and delete the applicable Teviq records unless they must be retained for legal or security reasons. To request access to or deletion of your data, email helloteviq@gmail.com or follow the instructions on our Data Deletion page.',
    ],
  },
  {
    slug: 'pricing-and-plans',
    href: '/policies/pricing-and-plans',
    label: 'Commercial terms',
    title: 'Pricing & Plans',
    summary: 'Current monthly plans, included channels, and billing details.',
    paragraphs: [
      'Teviq monthly plans: Starter ₹999 for website support; Standard ₹2,499 for website + WhatsApp; Growth ₹3,199 for website + WhatsApp + Instagram. Applicable WhatsApp message charges may be billed separately from the Teviq plan fee. Contact Teviq for current plan availability and onboarding details.',
      'You can cancel your Teviq subscription anytime. There is no minimum commitment period or notice period. After cancellation, access continues until the end of the current billing cycle and you will not be charged again. If you later resubscribe, the price will be the then-current standard rate. You can cancel in your dashboard account settings or by contacting Teviq support.',
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
