'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/about', label: 'About' },
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
        isScrolled ? 'border-b border-(--border) bg-[rgba(255,255,255,0.95)] backdrop-blur shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-shell py-3">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Image
              src={isScrolled ? '/images/logo.jpeg' : '/images/logo-blue.jpeg'}
              alt="Njozela Attorneys Inc"
              width={160}
              height={90}
              className="h-10 w-auto object-contain transition-all duration-300"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const isDarkSection = isHome && !scrolled;
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
            <Link href="/contact" className="bg-(--foreground) px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-(--brand) hover:text-white">
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
