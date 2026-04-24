import Link from 'next/link';
import { SectionIntro } from '@/components/SectionIntro';

export default function RafClaimsPage() {
  return (
    <main className="container-shell py-16">
      <SectionIntro
        eyebrow="RAF Claims"
        heading="A long-standing RAF claims practice built around real client outcomes."
        body="The original firm site makes Road Accident Fund work the clearest service focus, highlighting years of claims experience and a record of helping people affected by motor vehicle and pedestrian accidents."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">Why clients come to the firm</h3>
          <p className="mt-4 leading-8 text-slate-600">
            Since 2007, the firm has settled more than 3,000 RAF claims. That experience gives the practice a strong base in understanding the process, preparing supporting documentation, and moving claims forward with care.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            The service is built for people whose lives have been affected by motor vehicle accidents and pedestrian vehicle accidents, with the aim of improving their circumstances through proper legal representation.
          </p>
        </div>
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">What support can include</h3>
          <ul className="mt-4 space-y-3 leading-7 text-slate-600">
            <li>• Consultation on whether a matter may qualify as a RAF claim</li>
            <li>• Guidance on preparing and organising supporting documents</li>
            <li>• Legal handling of the claim process from lodgment to resolution</li>
            <li>• Practical communication that keeps clients informed on next steps</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">How the team supports RAF matters</h3>
          <p className="mt-4 leading-8 text-slate-600">
            The legal team handles client consultations, legal advice, and the preparation of documents needed for the resolution of claims. The administration team supports the preparation, booking coordination, records, and lodgment workflow needed to keep RAF matters moving.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            That combined structure matters in RAF work, where legal judgment and reliable follow-through both have a direct effect on the client experience.
          </p>
        </div>
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">Start the conversation</h3>
          <p className="mt-4 leading-8 text-slate-600">
            If you or a family member has been affected by a road accident, the next step is to speak to the firm about the circumstances of the accident and the documents available.
          </p>
          <Link href="/contact" className="btn-primary mt-6">
            Book Consultation
          </Link>
        </div>
      </div>
    </main>
  );
}
