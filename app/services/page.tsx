import { SectionIntro } from '@/components/SectionIntro';
import { ServicesGrid } from '@/components/ServicesGrid';

export default function ServicesPage() {
  return (
    <main className="container-shell py-16">
      <SectionIntro
        eyebrow="Services"
        heading="Legal services shaped around the matters clients bring most often."
        body="The original firm site positions Njozela Attorneys Inc around practical community-facing legal work, with Road Accident Fund claims as a major focus and supporting services in housing and civil matters."
      />
      <div className="mt-10">
        <ServicesGrid />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">RAF claim focus</h3>
          <p className="mt-4 leading-8 text-slate-600">
            The firm&apos;s strongest service line is Road Accident Fund work, where it assists people affected by motor vehicle and pedestrian accidents through the legal claims process.
          </p>
        </div>
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">Community accessibility</h3>
          <p className="mt-4 leading-8 text-slate-600">
            Services are framed for clients who need legal support that is direct, understandable, and locally accessible from Khayelitsha and surrounding areas.
          </p>
        </div>
        <div className="card p-8">
          <h3 className="text-xl font-semibold text-slate-900">Consultation-led support</h3>
          <p className="mt-4 leading-8 text-slate-600">
            Whether a matter proceeds as a RAF claim, a housing transfer, or a civil issue, the firm&apos;s role is to guide clients clearly on documents, process, and next steps.
          </p>
        </div>
      </div>
    </main>
  );
}
