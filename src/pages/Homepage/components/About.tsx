import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const { language } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-line', {
        y: 24,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      });
      gsap.from('.about-meta-item', {
        y: 12,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 70%' },
      });
    }, rootRef);
    return () => ctx.revert();
  }, [language]);

  const meta = [
    { label: translations.about.location[language], value: 'Zagreb, Croatia' },
    { label: translations.about.studying[language], value: 'FER, year 3' },
    { label: translations.about.currently[language], value: 'Sofascore Academy' },
  ];

  return (
    <section ref={rootRef} id="about" className="border-t border-default py-24 md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            01 — {translations.about.heading[language]}
          </div>
        </div>
        <div className="md:col-span-6">
          <p className="about-line font-display text-2xl leading-snug text-balance text-fg md:text-3xl">
            {translations.about.body[language]}
          </p>
        </div>
        <div className="md:col-span-3 md:pl-4">
          <ul className="space-y-5">
            {meta.map((m) => (
              <li key={m.label} className="about-meta-item">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  {m.label}
                </div>
                <div className="mt-1 text-sm text-fg">{m.value}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
