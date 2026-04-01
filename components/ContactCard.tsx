import { site } from './site';

function ContactIcon({ kind }: { kind: 'location' | 'phone' | 'email' | 'whatsapp' }) {
  const common = 'h-5 w-5';

  if (kind === 'location') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
        <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.3" />
      </svg>
    );
  }

  if (kind === 'phone') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
        <path d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
      </svg>
    );
  }

  if (kind === 'email') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common} aria-hidden="true">
      <path d="M20 11.5a8 8 0 0 1-11.8 7l-4.2 1 1.1-4A8 8 0 1 1 20 11.5Z" />
      <path d="M9.5 10.2c.3 1.2 2.1 3 3.3 3.3l1.1-1.1c.2-.2.5-.3.8-.2l1.8.6c.4.1.6.5.6.9v1c0 .5-.4 1-.9 1-4.6.2-8.5-3.7-8.3-8.3 0-.5.4-.9 1-.9h1c.4 0 .8.2.9.6l.6 1.8c.1.3 0 .6-.2.8l-1.1 1.1Z" />
    </svg>
  );
}

export function ContactCard() {
  return (
    <div className="space-y-8">
      <div>
        <div className="section-eyebrow">Get In Touch</div>
        <h3 className="template-title mt-4">Start your <em>claim</em> today.</h3>
      </div>

      <div className="space-y-6">
        <div className="contact-item">
          <div className="contact-icon">
            <ContactIcon kind="location" />
          </div>
          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Main Office</div>
            <div className="mt-2 text-sm leading-7 text-[var(--foreground)]">{site.locations[0]}</div>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <ContactIcon kind="location" />
          </div>
          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Branch Office</div>
            <div className="mt-2 text-sm leading-7 text-[var(--foreground)]">{site.locations[1]}</div>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <ContactIcon kind="phone" />
          </div>
          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Phone</div>
            <a className="mt-2 block text-sm leading-7 text-[var(--foreground)] transition hover:text-[var(--brand-dark)]" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">
            <ContactIcon kind="email" />
          </div>
          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">Email</div>
            <div className="mt-2 space-y-1">
              {site.emails.map((email) => (
                <a
                  key={email}
                  className="block text-sm leading-7 text-[var(--foreground)] transition hover:text-[var(--brand-dark)]"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href={site.whatsappHref} className="inline-flex items-center gap-3 bg-[#25d366] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#1da851]">
        <ContactIcon kind="whatsapp" />
        Chat on WhatsApp
      </a>
    </div>
  );
}
