import Link from 'next/link';
import { site } from './site';

export function Footer() {
  return (
    <footer className="bg-[var(--surface-dark)] text-white">
      <div className="container-shell py-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="h-7 w-7 shrink-0 bg-[var(--brand)] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
              <span className="serif text-3xl text-white">Njozela Attorneys Inc</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
              Providing justice for our community since 2002, with focused support in Road Accident Fund claims and related legal services in Khayelitsha.
            </p>
          </div>

          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              Quick Links
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <Link href="/about" className="transition hover:text-[var(--brand-light)]">About</Link>
              <Link href="/services" className="transition hover:text-[var(--brand-light)]">Services</Link>
              <Link href="/raf-claims" className="transition hover:text-[var(--brand-light)]">RAF Claims</Link>
              <Link href="/contact" className="transition hover:text-[var(--brand-light)]">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              Contact
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <a href={site.phoneHref} className="transition hover:text-[var(--brand-light)]">{site.phoneDisplay}</a>
              <a href={site.whatsappHref} className="transition hover:text-[var(--brand-light)]">{site.whatsappDisplay}</a>
              {site.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="transition hover:text-[var(--brand-light)]">
                  {email}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Njozela Attorneys Inc. All rights reserved.</div>
          <div>Built with ❤️ by <a href='https://mlkcomputer.com' className="transition hover:text-[var(--brand-light)]">MLK Computer Consulting</a></div>
        </div>
      </div>
    </footer>
  );
}
