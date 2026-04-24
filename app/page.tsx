import Image from 'next/image';
import Link from 'next/link';
import { ContactCard } from '@/components/ContactCard';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/components/site';

const services = [
  {
    number: '01',
    title: 'Road Accident Fund Claims',
    body: 'Our core focus is helping injured clients and affected families pursue fair compensation through a clearer, guided claims process.',
    icon: 'road',
    highlight: true,
  },
  {
    number: '02',
    title: 'Personal Injury Matters',
    body: 'We assist clients with injury-related legal matters and practical advice shaped around the realities of recovery and financial strain.',
    icon: 'health',
  },
  {
    number: '03',
    title: 'Legal Consultations',
    body: 'Clients can access direct legal guidance, document review, and case direction before deciding on the next legal step.',
    icon: 'justice',
  },
];

const facts = [
  { label: 'Main Office', value: 'Khayelitsha, Cape Town', icon: 'location' },
  { label: 'Branch', value: 'Lithapark, Cape Town', icon: 'location' },
  { label: 'Founded', value: 'Serving clients since 2002', icon: 'justice' },
  { label: 'Focus', value: 'RAF claims and legal consultations', icon: 'people' },
];

const pillars = [
  { name: 'Justice', icon: 'justice' },
  { name: 'Integrity', icon: 'handshake' },
  { name: 'Compassion', icon: 'heart' },
  { name: 'Community', icon: 'globe' },
  { name: 'Excellence', icon: 'spark' },
];

const team = [
  {
    image: '/images/m-njozela.jpg',
    role: 'Managing Director',
    name: 'Mr. Mbuyekezo Njozela',
    credentials: ['B. Juris LLB (UNITRA)', 'Dip. Corporate Law (UNISA)', 'Investment Management (UCT)'],
    body: 'Leads the firm with a grounded legal and commercial background that supports the practice’s long-standing client and community focus.',
    featured: true,
  },
  {
    image: '/images/sombo.jpg',
    role: 'Admitted Attorney',
    name: 'Mr. Vuyisa Sombo',
    credentials: ['LLB (UWC)', 'PVT (UCT School of Law)', 'Cert. Trial Advocacy (UCT)'],
    body: 'Supports clients with admitted-attorney experience and a practice approach shaped by litigation training and courtroom preparation.',
  },
  {
    image: '/images/madiba.jpg',
    role: 'Candidate Legal Practitioner',
    name: 'Mr. Obakeng Madiba',
    credentials: [
      'LLB (UFS)',
      'Cert. Commercial Law (Bowmans)',
      'Cert. Parliamentarian Health and Security Preparedness (WHO)',
    ],
    body: 'Brings developing legal practice experience with added exposure to commercial law and public-sector health preparedness.',
  },
  {
    image: '/images/ndunyana.jpg',
    role: 'Candidate Legal Practitioner',
    name: 'Ms. Khanyisiwe Ndunyana',
    credentials: ['LLB (UFS)', 'PVT (UCT-Leads)', 'Cert. Trial Advocacy (UCT)'],
    body: 'Contributes to client matters with legal training that combines academic grounding, vocational preparation, and trial advocacy.',
  },
  {
    image: '/images/tobi.jpg',
    role: 'Senior Legal Administrator',
    name: 'Mr. Phumlani Tobi',
    credentials: ['LLB (NMU)'],
    body: 'Helps keep legal processes organised and responsive by connecting administrative delivery with legal training.',
  },
  {
    image: '/images/papa.jpg',
    role: 'Administrator',
    name: 'Ms. Ncedisa Papa',
    credentials: ['Office Administration (CPUT)'],
    body: 'Supports the day-to-day running of the practice through structured office administration and client-facing coordination.',
  },
  {
    image: '/images/silwana.jpg',
    role: 'Administrator',
    name: 'Mr. Collen Silwana',
    credentials: ['Public Sector Management and Administration (UFH)', 'B. Administration'],
    body: 'Strengthens operational delivery with administrative support informed by public-sector management training.',
  },
  {
    image: '/images/jokazi.jpg',
    role: 'Reception and Administration',
    name: 'Ms. Gcobisa Jokazi',
    credentials: ['Business Management (Boland College)'],
    body: 'Welcomes clients into the practice and supports front-desk administration with a strong service orientation.',
  },
  {
    image: '/images/mbovane.jpg',
    role: 'Runner',
    name: 'Ms. Sandiswa Mbovane',
    credentials: [],
    body: 'Provides essential delivery and support work that helps matters move smoothly across the firm’s daily operations.',
  },
];

function TemplateIcon({
  kind,
  className = 'h-5 w-5',
}: {
  kind: 'road' | 'health' | 'justice' | 'location' | 'people' | 'handshake' | 'heart' | 'globe' | 'spark';
  className?: string;
}) {
  if (kind === 'road') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="M9 3 7 21" />
        <path d="M15 3 17 21" />
        <path d="M11 7h2" />
        <path d="M10.5 12h3" />
        <path d="M10 17h4" />
      </svg>
    );
  }

  if (kind === 'health') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="M12 5v14" />
        <path d="M5 12h14" />
        <rect x="3" y="3" width="18" height="18" rx="4" />
      </svg>
    );
  }

  if (kind === 'justice') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="M12 4v16" />
        <path d="M7 7h10" />
        <path d="m7 7-3 5a2 2 0 0 0 1.8 3h2.4A2 2 0 0 0 10 12L7 7Z" />
        <path d="m17 7-3 5a2 2 0 0 0 1.8 3h2.4A2 2 0 0 0 20 12l-3-5Z" />
        <path d="M8 20h8" />
      </svg>
    );
  }

  if (kind === 'location') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2.3" />
      </svg>
    );
  }

  if (kind === 'people') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <circle cx="9" cy="9" r="3" />
        <circle cx="17" cy="8" r="2.5" />
        <path d="M4 19a5 5 0 0 1 10 0" />
        <path d="M14 18a4 4 0 0 1 6 0" />
      </svg>
    );
  }

  if (kind === 'handshake') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="m7 12 3 3c.8.8 2 .8 2.8 0l4.2-4.2" />
        <path d="M3 10 7 6l4 4-4 4-4-4Z" />
        <path d="m13 10 4-4 4 4-4 4-4-4Z" />
      </svg>
    );
  }

  if (kind === 'heart') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <path d="M12 20s-7-4.7-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.3-7 10-7 10Z" />
      </svg>
    );
  }

  if (kind === 'globe') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <path d="m12 3 1.7 5.3H19l-4.3 3.1 1.7 5.3-4.4-3.1-4.4 3.1 1.7-5.3L5 8.3h5.3L12 3Z" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="grid min-h-screen lg:grid-cols-2">
        <div className="relative flex items-center bg-[var(--surface-dark)] px-6 pb-16 pt-32 text-white sm:px-10 lg:px-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(184,147,42,0.12),transparent_60%)]" />
          <div className="relative reveal-up max-w-2xl">
            <div className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[var(--brand-light)]">
              <span className="h-px w-7 bg-[var(--brand)]" />
              Established in Khayelitsha
            </div>
            <h1 className="serif mt-8 text-5xl leading-[0.98] font-light sm:text-6xl lg:text-7xl">
              Njozela
              <span className="mt-2 block italic text-[var(--brand-light)]">Attorneys Inc</span>
            </h1>
            <p className="serif mt-4 text-xl font-light italic text-white/55 sm:text-2xl">
              Legal services in Khayelitsha since 2002
            </p>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              With more than two decades of experience, the firm provides accessible legal support with a strong focus on Road Accident Fund claims and client-centred service.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Free Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8">
              {site.stats.slice(1).map((stat) => (
                <div key={stat.label}>
                  <div className="serif text-4xl font-semibold text-[var(--brand-light)]">{stat.value}</div>
                  <div className="mt-1 text-[0.72rem] uppercase tracking-[0.14em] text-white/40">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-grid relative hidden items-end overflow-hidden bg-[var(--surface-soft)] p-16 lg:flex">
          <div className="absolute left-1/2 top-1/2 flex w-[min(380px,80%)] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-6">
            <div className="hero-wheel">
              <div className="hero-wheel-orbit" aria-hidden="true">
                <div className="hero-wheel-ring" />
                <span className="hero-wheel-dot hero-wheel-dot-one" />
                <span className="hero-wheel-dot hero-wheel-dot-two" />
              </div>
              <div className="hero-wheel-core">
                <span className="hero-wheel-kicker">Since</span>
                <span className="hero-wheel-year">2002</span>
                <span className="hero-wheel-est">Est.</span>
              </div>
            </div>
          </div>

          <div className="reveal-up relative ml-auto max-w-xs border-l-[3px] border-[var(--brand)] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.1)]">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
              Our Commitment
            </div>
            <p className="serif mt-3 text-xl leading-8 text-[var(--foreground)]">
              Justice made more accessible to the communities we serve.
            </p>
          </div>
        </div>
      </section>

      <section className="template-section bg-white px-6 sm:px-10 lg:px-16">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[320px]">
            <div className="absolute inset-0 overflow-hidden rounded-[4px] bg-[var(--surface-dark)] p-8">
              <div className="serif absolute left-8 top-4 text-8xl font-semibold leading-none text-white/5">2002</div>
              <div className="relative flex h-full items-end">
                <p className="serif max-w-md text-3xl font-light leading-[1.45] text-white">
                  From a local practice to a trusted community firm with <span className="text-[var(--brand-light)]">decades of service</span>.
                </p>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 flex h-24 w-24 flex-col items-center justify-center rounded-[4px] bg-[var(--brand)] text-center text-[var(--foreground)]">
              <span className="serif text-3xl font-semibold">28</span>
              <span className="text-[0.62rem] uppercase tracking-[0.12em]">Years</span>
            </div>
          </div>

          <div className="reveal-up">
            <div className="section-eyebrow">Our Story</div>
            <h2 className="template-title mt-4">Built on <em>community,</em> driven by justice.</h2>
            <p className="serif mt-6 text-2xl leading-10 text-[var(--foreground)]">
              Njozela Attorneys Inc serves clients with practical legal guidance, local credibility, and a long-standing presence in Khayelitsha.
            </p>
            <div className="mt-8 overflow-hidden rounded-[4px] border border-[var(--border)]">
              {facts.map((fact) => (
                <div key={fact.label} className="fact-row">
                  <span className="fact-icon">
                    <TemplateIcon kind={fact.icon as 'location' | 'justice' | 'people'} />
                  </span>
                  <div className="min-w-24 text-[0.74rem] font-semibold uppercase tracking-[0.08em] text-[var(--foreground)]">
                    {fact.label}
                  </div>
                  <div className="text-sm text-[var(--muted)]">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="template-section bg-[var(--background)] px-6 sm:px-10 lg:px-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <div className="section-eyebrow">What We Do</div>
              <h2 className="template-title mt-4">Our <em>practice</em> areas.</h2>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className={`template-card service-card ${service.highlight ? 'service-highlight' : ''}`}
              >
                <div className={`serif text-6xl font-semibold ${service.highlight ? 'text-[rgba(255,255,255,0.08)]' : 'text-[var(--surface-soft)]'}`}>
                  {service.number}
                </div>
                <div className="service-icon mt-6">
                  <TemplateIcon kind={service.icon as 'road' | 'health' | 'justice'} />
                </div>
                <h3 className={`serif mt-6 text-3xl ${service.highlight ? 'text-[var(--brand-light)]' : 'text-[var(--foreground)]'}`}>
                  {service.title}
                </h3>
                <p className={`mt-4 text-sm leading-8 ${service.highlight ? 'text-white/60' : 'text-[var(--muted)]'}`}>
                  {service.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--surface-dark)] px-6 py-20 text-white sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(184,147,42,0.1),transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(184,147,42,0.08),transparent_50%)]" />
        <div className="container-shell relative text-center">
          <div className="mx-auto w-fit text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand)]">
            Our Purpose
          </div>
          <h2 className="template-title mt-4 text-white">Our <em>mission</em>.</h2>
          <p className="serif mx-auto mt-8 max-w-4xl text-2xl font-light italic leading-10 text-white/75 sm:text-3xl sm:leading-[1.7]">
            To provide surrounding communities and beyond with a fair and just opportunity to engage the legal system for their benefit and improvement.
          </p>
          <div className="mission-pillars mt-10">
            {pillars.map((pillar) => (
              <div key={pillar.name} className="text-center">
                <div className="pillar-icon">
                  <TemplateIcon kind={pillar.icon as 'justice' | 'handshake' | 'heart' | 'globe' | 'spark'} />
                </div>
                <div className="serif mt-3 text-lg text-white">{pillar.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="template-section bg-white px-6 sm:px-10 lg:px-16">
        <div className="container-shell">
          <div className="section-eyebrow">The People</div>
          <h2 className="template-title mt-4">Meet the <em>team</em>.</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {team.map((member) => (
              <article
                key={member.name}
                className={`template-card overflow-hidden bg-white ${member.featured ? 'lg:col-span-3 lg:grid lg:grid-cols-[320px_1fr]' : ''}`}
              >
                <div className="relative min-h-64 bg-[linear-gradient(135deg,var(--surface-soft),var(--background))]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes={member.featured ? '(min-width: 1024px) 320px, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[var(--brand)]">{member.role}</div>
                  <h3 className="serif mt-2 text-3xl text-[var(--foreground)]">{member.name}</h3>
                  <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{member.body}</p>
                  {member.credentials.length > 0 ? (
                    <div className="mt-6 border-t border-[var(--border)] pt-5">
                      <div className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">Qualifications</div>
                      <ul className="mt-3 space-y-2 text-sm leading-7 text-[var(--muted)]">
                        {member.credentials.map((credential) => (
                          <li key={credential}>{credential}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="template-section bg-[var(--background)] px-6 sm:px-10 lg:px-16">
        <div className="container-shell grid gap-12 md:grid-cols-[0.92fr_1.08fr] md:items-start">
          <ContactCard />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
