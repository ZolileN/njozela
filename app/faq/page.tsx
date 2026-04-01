import { SectionIntro } from '@/components/SectionIntro';

const items = [
  ['Who can claim from RAF?', 'Eligibility depends on the facts of the accident, injuries, and claim circumstances. A consultation is the best next step.'],
  ['What documents do I need?', 'Common examples include ID, accident details, medical records, expense records, and related correspondence.'],
  ['Can I contact the firm on WhatsApp?', 'Yes. The site includes direct WhatsApp access for faster mobile contact.'],
  ['How do I start?', 'Use the consultation form, call the office, or send a WhatsApp message.'],
];

export default function FaqPage() {
  return (
    <main className="container-shell py-16">
      <SectionIntro eyebrow="FAQ" heading="Answers to common client questions." />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {items.map(([title, copy]) => (
          <div key={title} className="card p-8">
            <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
            <p className="mt-4 leading-8 text-slate-600">{copy}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
