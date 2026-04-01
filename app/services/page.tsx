import { SectionIntro } from '@/components/SectionIntro';
import { ServicesGrid } from '@/components/ServicesGrid';

export default function ServicesPage() {
  return (
    <main className="container-shell py-16">
      <SectionIntro
        eyebrow="Services"
        heading="Professional legal services presented with more clarity."
        body="The production version can expand this page further with dedicated subpages, FAQs, and client-ready explanations for each matter type."
      />
      <div className="mt-10">
        <ServicesGrid />
      </div>
    </main>
  );
}
