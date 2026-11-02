export const policyLastUpdated = '1 November 2026';

export const publicPolicies = [
  {
    slug: 'refund-policy',
    href: '/policies/refund-policy',
    label: 'Billing',
    title: 'Refund Policy',
    summary: 'Free-trial access, paid subscription refunds, and billing-cycle terms.',
    paragraphs: [
      'When offered and activated for your workspace, the Teviq free trial runs for 3 days from activation. Configured reply and AI usage limits apply; confirm the applicable limits in your trial details. Paid subscription prices and billing terms are provided before payment. Once your paid subscription begins, payments are non-refundable. We do not offer partial or prorated refunds for unused time within a billing cycle. If you experience technical issues during setup, our support team will work with you to resolve them — please contact us before requesting a refund.',
    ],
  },
  {
    slug: 'subscription-cancellation',
    href: '/policies/subscription-cancellation',
    label: 'Subscription',
    title: 'Subscription Cancellation Policy',
    summary: 'How cancellation works, when access ends, and what happens on resubscription.',
    paragraphs: [
      'You can cancel your Teviq subscription anytime. There is no minimum commitment period or notice period. After cancellation, access continues until the end of the current billing cycle and you will not be charged again. If you later resubscribe, the price will be the then-current standard rate. Contact Teviq support to request cancellation and obtain confirmation.',
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
      'You can cancel your Teviq subscription anytime. There is no minimum commitment period or notice period. After cancellation, access continues until the end of the current billing cycle and you will not be charged again. If you later resubscribe, the price will be the then-current standard rate. Contact Teviq support to request cancellation and obtain confirmation.',
    ],
  },
  {
    slug: 'support-response-time',
    href: '/policies/support-response-time',
    label: 'Support',
    title: 'Support Response Time (SLA)',
    summary: 'Support availability, response expectations, and contact details.',
    paragraphs: [
      'For help, use the current support contact details shown here or in your dashboard. Support availability follows the published business hours. If an issue affects live customer support, describe the impact and mark your message urgent so the team can assess its priority. A support request does not guarantee immediate resolution.',
    ],
  },
  {
    slug: 'setup-and-onboarding',
    href: '/policies/setup-and-onboarding',
    label: 'Implementation',
    title: 'Setup & Onboarding',
    summary: 'What is involved in setup, installation, and connecting store data.',
    paragraphs: [
      'Installing the Teviq website widget usually takes 15–20 minutes. Instagram connection and testing usually take 15–30 minutes when the Instagram Professional account and required access are ready. WhatsApp Business connection and testing usually take 30–60 minutes when the WhatsApp Business account, eligible number, and required access are ready. These estimates assume the required storefront or business-account access, permissions, and setup information are available when onboarding starts. Meta eligibility checks, verification, or approval can add waiting time outside Teviq\'s control and may extend the timeline from a few hours to several days. These are estimates, not guarantees. Shopify product or order-data connection is a separate setup step.',
    ],
  },
];

export const policyBySlug = Object.fromEntries(
  publicPolicies.map((policy) => [policy.slug, policy]),
);
