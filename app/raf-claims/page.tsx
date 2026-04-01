import Link from 'next/link';
import { SectionIntro } from '@/components/SectionIntro';

export default function RafClaimsPage() {
  return (
    <main className="container-shell py-16">
      <SectionIntro
        eyebrow="RAF Claims"
        heading="A flagship service page built to convert serious enquiries."
        body="This page should become the strongest SEO and lead-generation page on the site, with detailed eligibility guidance, supporting documents, and a clear call to consultation."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">How the page is structured</h3>
          <ul className="mt-4 space-y-3 leading-7 text-slate-600">
            <li>• Who may qualify to claim</li>
            <li>• What documents to prepare</li>
            <li>• What the firm does for clients</li>
            <li>• Common questions and timelines</li>
          </ul>
        </div>
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">Best CTA</h3>
          <p className="mt-4 leading-8 text-slate-600">
            Encourage clients to book a consultation or start the conversation on WhatsApp immediately after reading the page.
          </p>
          <Link href="/contact" className="btn-primary mt-6">Book Consultation</Link>
        </div>
      </div>
    </main>
  );
}
