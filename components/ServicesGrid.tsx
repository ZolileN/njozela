import Link from 'next/link';
import { site } from './site';

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {site.services.map((service) => (
        <div key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
          <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
          <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-amber-700">
            Enquire now →
          </Link>
        </div>
      ))}
    </div>
  );
}
