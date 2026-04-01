import { SectionIntro } from '@/components/SectionIntro';

export default function AboutPage() {
  return (
    <main className="container-shell py-16">
      <SectionIntro
        eyebrow="About"
        heading="A more credible digital presence for an established legal practice."
        body="This page positions the firm around professional legal service, community accessibility, and experience in Road Accident Fund matters."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">Firm profile</h3>
          <p className="mt-4 leading-8 text-slate-600">
            Njozela Attorneys Inc is presented as an established legal practice serving clients in Khayelitsha and surrounding communities. The refreshed site sharpens the firm&apos;s positioning, improves trust signals, and makes the client journey easier.
          </p>
        </div>
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">What this page should communicate</h3>
          <ul className="mt-4 space-y-3 leading-7 text-slate-600">
            <li>• Longstanding legal experience</li>
            <li>• Strong community-rooted presence</li>
            <li>• Professional client communication</li>
            <li>• Clear service focus and consultation pathway</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
