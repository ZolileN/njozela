import { site } from './site';

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-8 right-8 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 hidden md:flex"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7" aria-hidden="true">
        <path d="M20 11.5a8 8 0 0 1-11.8 7l-4.2 1 1.1-4A8 8 0 1 1 20 11.5Z" />
        <path d="M9.5 10.2c.3 1.2 2.1 3 3.3 3.3l1.1-1.1c.2-.2.5-.3.8-.2l1.8.6c.4.1.6.5.6.9v1c0 .5-.4 1-.9 1-4.6.2-8.5-3.7-8.3-8.3 0-.5.4-.9 1-.9h1c.4 0 .8.2.9.6l.6 1.8c.1.3 0 .6-.2.8l-1.1 1.1Z" />
      </svg>
      <span className="absolute -left-32 top-1/2 -translate-y-1/2 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 opacity-0 shadow-sm transition-opacity group-hover:opacity-100 whitespace-nowrap pointer-events-none md:group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
