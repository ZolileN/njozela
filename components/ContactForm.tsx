'use client';

import { useEffect, useState } from 'react';

export function ContactForm() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-[540px] p-8 md:p-10" aria-hidden="true" />;
  }

  return (
    <div className="p-8 md:p-10">
      <h3 className="serif text-3xl font-normal text-[var(--foreground)]">Send us a message</h3>

      <form action="https://api.web3forms.com/submit" method="POST" className="mt-8 grid gap-5">
        <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
        <input type="hidden" name="subject" value="New consultation request - Njozela Attorneys Inc" />
        <input type="hidden" name="from_name" value="Njozela Attorneys Inc Website" />

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">First name</label>
            <input name="name" required className="w-full border border-[var(--border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]" placeholder="Your first name" />
          </div>
          <div>
            <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">Last name</label>
            <input name="last_name" className="w-full border border-[var(--border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]" placeholder="Your last name" />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">Phone / WhatsApp</label>
          <input name="phone" className="w-full border border-[var(--border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]" placeholder="+27 ..." />
        </div>

        <div>
          <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">Email</label>
          <input type="email" name="email" required className="w-full border border-[var(--border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]" placeholder="you@example.com" />
        </div>

        <div>
          <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">Nature of enquiry</label>
          <select name="service" className="w-full border border-[var(--border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]" defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Road Accident Fund Claim</option>
            <option>Personal Injury Matter</option>
            <option>Legal Consultation</option>
            <option>Other Legal Matter</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">Message</label>
          <textarea name="message" required rows={5} className="w-full border border-[var(--border)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]" placeholder="Briefly describe your situation..." />
        </div>

        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <button type="submit" className="btn-primary w-full justify-center">Send enquiry</button>
      </form>
    </div>
  );
}
