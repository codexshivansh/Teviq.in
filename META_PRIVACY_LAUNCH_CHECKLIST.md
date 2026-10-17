# Meta Instagram launch: privacy review checklist

Status: working notes for review. Do not enter draft URLs into Meta or publish the app until the public text is checked against production behavior.

## Current pages

- `/privacy` is public with July 2026 text. A local, unpublished October draft now explains website, WhatsApp, and Instagram support flows and removes the unverified 30-day automatic-deletion claim. Review the draft against actual processing, vendors, and legal requirements before deploying it.
- `/data-deletion` is a local draft, not deployed. It gives a contact-based deletion-request process without promising an unverified deadline. Review its wording and operational ownership before publishing.

## Facts to confirm with the business and production setup

- Legal operator name and support/privacy contact details.
- Which customer and brand data are stored for website chat, WhatsApp, Instagram, Shopify, analytics, and AI processing; which vendors receive data.
- The real retention period for each store, whether scheduled deletion is running, and any backups or legally required retention.
- The user chose request-based deletion instead of automatic chat cleanup. The scheduled cleanup workflow and backend cleanup endpoint have been removed; confirm the deployed behavior before publication. A request-fulfillment process still needs an assigned owner and an audit trail.
- How a requester is authenticated, who fulfills deletion requests, the expected response time, and whether deleting a brand workspace also removes connected account tokens and historic chats.
- Which regions and customer types Teviq serves, to determine applicable legal review.

## Meta setup after content approval

1. Deploy the reviewed Privacy Policy and data-deletion instructions pages.
2. In Meta App settings → Basic, enter their public URLs and select the app category. Review any other required fields.
3. Complete Meta App Review for the Instagram profile/basic and manage-messages permissions needed for non-test users. Do not request comments permission unless the product needs it.
4. Request explicit approval before publishing the Meta app. Publishing can enable live delivery of subscribed Instagram events.
5. From a separate test Instagram account, verify incoming DM → signed webhook → Teviq conversation → AI reply. Check backend logs for failures without exposing tokens or message contents.

The account OAuth connection and webhook callback verification are already complete. The `messages` webhook field and `helloteviq` account-level webhook subscription are on, but no live DM test has been confirmed.
