'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/raf-claims', label: 'RAF Claims' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = pathname === '/';
  const isScrolled = !isHome || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-(--border) bg-[rgba(247,244,239,0.92)] backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="h-7 w-7 shrink-0 bg-(--brand) [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" />
            <div>
              <div
                className={`serif text-2xl font-semibold tracking-[0.02em] transition-colors duration-300 ${
                  isScrolled ? 'text-(--foreground)' : 'text-white/90'
                }`}
              >
                Njozela Attorneys
              </div>
              <div
                className={`text-[0.65rem] uppercase tracking-[0.22em] transition-colors duration-300 ${
                  isScrolled ? 'text-(--muted)' : 'text-white/45'
                }`}
              >
                Khayelitsha Legal Services
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const isDarkSection = isHome && !scrolled && item.label !== 'About';
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[0.78rem] font-medium uppercase tracking-[0.14em] transition hover:text-(--brand-dark) ${
                    isScrolled || isDarkSection ? 'text-(--foreground)' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link href="/contact" className="bg-(--foreground) px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-(--brand) hover:text-(--foreground)">
              Free Consultation
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            <span className={`h-0.5 w-6 transition-colors duration-300 ${isScrolled ? 'bg-(--foreground)' : 'bg-white'}`} />
            <span className={`h-0.5 w-6 transition-colors duration-300 ${isScrolled ? 'bg-(--foreground)' : 'bg-white'}`} />
            <span className={`h-0.5 w-6 transition-colors duration-300 ${isScrolled ? 'bg-(--foreground)' : 'bg-white'}`} />
          </button>
        </div>

        {open ? (
          <nav className="mt-4 border border-(--border) bg-white md:hidden">
            <div className="flex flex-col px-5 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-b border-(--border) py-4 text-sm uppercase tracking-[0.14em] text-(--foreground) last:border-b-0"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-4 bg-(--foreground) px-5 py-3 text-center text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white"
                onClick={() => setOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
