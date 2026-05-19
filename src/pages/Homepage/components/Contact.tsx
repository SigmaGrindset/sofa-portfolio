import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

gsap.registerPlugin(ScrollTrigger);

const EMAIL = 'antoniobnoni@gmail.com';
const PHONE = '091 948 6264';
const GITHUB = 'github.com/SigmaGrindset';
const LINKEDIN_URL = 'https://www.linkedin.com/in/antonio-batarilovi%C4%87-509a26240/';
const CV_URL = '/cv.pdf';

export function Contact() {
  const { language } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>('.contact-email .ch');
      const rows = gsap.utils.toArray<HTMLElement>('.contact-row');
      gsap.set(chars, { opacity: 0, y: 40 });
      gsap.set(rows, { opacity: 0, y: 16 });

      ScrollTrigger.create({
        trigger: rootRef.current,
        start: 'top bottom-=80',
        once: true,
        onEnter: () => {
          gsap.to(chars, {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.8,
            ease: 'power3.out',
          });
          gsap.to(rows, {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: 'power3.out',
          });
        },
      });
      ScrollTrigger.refresh();

      const failsafe = window.setTimeout(() => {
        gsap.to([...chars, ...rows], {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power3.out',
        });
      }, 2500);
      return () => window.clearTimeout(failsafe);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} id="contact" className="border-t border-default py-24 md:py-40">
      <div className="container-page">
        <div className="mb-12 grid items-end gap-4 md:grid-cols-12">
          <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            04 — {translations.contact.heading[language]}
          </div>
          <p className="md:col-span-9 text-xl text-muted md:text-2xl">
            {translations.contact.body[language]}
          </p>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="contact-email group block break-all font-display text-4xl font-black tracking-tight text-fg transition-colors hover:text-[var(--color-action)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {Array.from(EMAIL).map((c, i) => (
            <span key={i} className="ch inline-block transition-transform duration-300 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 8}ms` }}>
              {c}
            </span>
          ))}
        </a>

        <div className="mt-16 flex flex-wrap gap-2.5">
          <ContactChip label={translations.contact.phone[language]} href={`tel:${PHONE.replace(/\s+/g, '')}`} />
          <ContactChip label={translations.contact.email[language]} href={`mailto:${EMAIL}`} />
          <ContactChip label={translations.contact.github[language]} href={`https://${GITHUB}`} external />
          <ContactChip label={translations.contact.linkedin[language]} href={LINKEDIN_URL} external />
          <ContactChip label={translations.contact.cv[language]} href={CV_URL} external />
        </div>
      </div>
    </section>
  );
}

function ContactChip({
  label,
  href,
  external = false,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="contact-row group inline-flex items-center gap-2 rounded-full border border-default bg-surface/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06] hover:text-fg"
    >
      <span>{label}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        {external ? '↗' : '→'}
      </span>
    </a>
  );
}
