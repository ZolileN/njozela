import { ContactCard } from '@/components/ContactCard';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="template-section bg-white px-6 pt-28 sm:px-10 lg:px-16">
      <div className="container-shell">
        <div className="max-w-3xl">
          <h1 className="template-title">Start your <em>claim</em> today.</h1>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-start">
          <ContactCard />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
