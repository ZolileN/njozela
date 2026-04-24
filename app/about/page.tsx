import { SectionIntro } from '@/components/SectionIntro';

export default function AboutPage() {
  return (
    <main className="container-shell py-16">
      <SectionIntro
        eyebrow="About"
        heading="A community-rooted legal practice with a long record in Khayelitsha."
        body="Njozela Attorneys Inc traces its history to March 2002 and continues to serve clients through a practice shaped by local presence, practical legal guidance, and sustained work in Road Accident Fund matters."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">Firm story</h3>
          <p className="mt-4 leading-8 text-slate-600">
            The firm was established in March 2002 as M Njozela Attorneys, following the earlier partnership of Njozela Mfazi &amp; Partners. In 2025, the practice reintroduced itself as Njozela Attorneys Inc, carrying its history forward under an incorporated structure while remaining focused on the same community it has served for years.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            From its base at the Khayelitsha Training Centre and its branch in Lithapark, the firm has built a reputation around accessibility, continuity, and service that speaks directly to the realities facing clients in surrounding communities and beyond.
          </p>
        </div>
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">Practice highlights</h3>
          <ul className="mt-4 space-y-3 leading-7 text-slate-600">
            <li>• Established in 2002 and incorporated as Njozela Attorneys Inc in 2025</li>
            <li>• Main office at Khayelitsha Training Centre with a branch in Lithapark</li>
            <li>• Led by Mr Njozela with a team of 8 staff members</li>
            <li>• Known especially for personal injury and RAF claim work</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">Leadership and experience</h3>
          <p className="mt-4 leading-8 text-slate-600">
            The practice is led by Mr Njozela, who was admitted in 1997 and built experience in civil and criminal litigation before establishing his own firm. That depth of experience continues to shape the firm&apos;s client approach, legal judgment, and long-term commitment to Khayelitsha.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            With more than two decades of service and a team built around legal and administrative support, the firm combines professional structure with a direct understanding of the community it serves.
          </p>
        </div>
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">Mission</h3>
          <p className="mt-4 leading-8 text-slate-600">
            Njozela Attorneys Inc exists to provide less privileged people in surrounding communities and beyond with a fair opportunity to engage the legal system for their benefit and improvement.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            That mission continues to guide the firm&apos;s work: making justice more accessible, practical, and real for the people who need it most.
          </p>
        </div>
      </div>
    </main>
  );
}
