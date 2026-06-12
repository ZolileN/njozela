import Image from 'next/image';
import Link from 'next/link';
import { site } from './site';

export function Footer() {
  return (
    <footer className="bg-[var(--surface-dark)] text-white">
      <div className="container-shell py-14">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-blue.jpeg"
                alt="Njozela Attorneys Inc"
                width={160}
                height={90}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
              Providing justice for our community since 2002, with focused support in Road Accident Fund claims in Khayelitsha.
            </p>
          </div>

          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-light)]">
              Quick Links
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <Link href="/about" className="transition hover:text-[var(--brand-light)]">About</Link>
              <Link href="/raf-claims" className="transition hover:text-[var(--brand-light)]">RAF Claims</Link>
              <Link href="/contact" className="transition hover:text-[var(--brand-light)]">Contact</Link>
            </div>
          </div>

          <div>
            <div className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand-light)]">
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
