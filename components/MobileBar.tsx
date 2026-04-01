import { site } from './site';

export function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-[rgba(247,244,239,0.98)] p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a href={site.phoneHref} className="btn-secondary-dark px-4 py-3">Call Office</a>
        <a href={site.whatsappHref} className="btn-primary px-4 py-3">WhatsApp</a>
      </div>
    </div>
  );
}
