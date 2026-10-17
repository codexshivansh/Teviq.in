import { Link } from '../lib/router';

function DataDeletionPage() {
  return (
    <main className="bg-white pb-24 pt-32 md:pb-[140px] md:pt-[150px]">
      <div className="container-shell max-w-3xl">
        <p className="eyebrow">Data & privacy</p>
        <h1 className="mt-6 text-balance text-[42px] font-black leading-[1.02] tracking-[-0.04em] text-black sm:text-6xl">
          Request deletion of your data
        </h1>
        <p className="mt-7 text-[17px] leading-[1.7] text-zinc-600">
          If you have used Teviq through a website chat, WhatsApp, or Instagram, you can ask us to delete personal data associated with your conversations. Brand workspace owners can also request deletion of their workspace data.
        </p>

        <div className="mt-12 space-y-9 text-[17px] leading-[1.8] text-zinc-700">
          <section>
            <h2 className="text-2xl font-bold tracking-tight text-black">How to make a request</h2>
            <p className="mt-3">
              Email <a className="font-semibold text-black underline decoration-zinc-300 underline-offset-4" href="mailto:helloteviq@gmail.com?subject=Data%20deletion%20request">helloteviq@gmail.com</a> with the subject “Data deletion request”. Tell us which Teviq-connected brand you contacted and which channel you used. Include only the email address, phone number, or Instagram username needed to locate your data. Do not send passwords, access tokens, or payment-card details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-black">What happens next</h2>
            <p className="mt-3">
              We may ask you to verify that you control the account or contact detail associated with the request. Once verified, we will identify the relevant Teviq records, explain what can be deleted and whether any information must be retained for legal or security reasons, and confirm when the request has been completed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-black">Connected accounts</h2>
            <p className="mt-3">
              Disconnecting an integration and deleting past support conversations are separate requests. Please tell us if you want both, so we can confirm what action has been taken for your account and Teviq records.
            </p>
          </section>
        </div>

        <p className="mt-12 border-t border-zinc-100 pt-7 text-sm leading-6 text-zinc-500">
          For more information about how Teviq handles support data, read our <Link to="/privacy" className="font-semibold text-black underline decoration-zinc-300 underline-offset-4">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}

export default DataDeletionPage;
