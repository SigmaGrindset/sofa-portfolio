import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

gsap.registerPlugin(ScrollTrigger);

const EMAIL = 'antoniobnoni@gmail.com';
const PHONE = '091 948 6264';
const GITHUB = 'github.com/SigmaGrindset';

export function Contact() {
  const { language } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-email .ch', {
        y: 40,
        opacity: 0,
        stagger: 0.02,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 70%' },
      });
      gsap.from('.contact-row', {
        y: 16,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      });
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
          className="contact-email group block break-all font-display text-4xl font-black tracking-tight text-fg transition-colors hover:text-[var(--color-accent)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {Array.from(EMAIL).map((c, i) => (
            <span key={i} className="ch inline-block transition-transform duration-300 group-hover:-translate-y-1" style={{ transitionDelay: `${i * 8}ms` }}>
              {c}
            </span>
          ))}
        </a>

        <div className="glass mt-16 grid gap-px overflow-hidden rounded-2xl md:grid-cols-3">
          <ContactRow label={translations.contact.phone[language]} value={PHONE} href={`tel:${PHONE.replace(/\s+/g, '')}`} />
          <ContactRow label={translations.contact.email[language]} value={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactRow label={translations.contact.github[language]} value={GITHUB} href={`https://${GITHUB}`} external />
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="contact-row group flex items-center justify-between gap-4 border-r border-b border-default p-6 transition-colors last:border-r-0 hover:bg-white/[0.03] md:[&:nth-child(3n)]:border-r-0"
    >
      <div>
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">{label}</div>
        <div className="mt-1 text-fg">{value}</div>
      </div>
      <span className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-accent)]">
        →
      </span>
    </a>
  );
}
