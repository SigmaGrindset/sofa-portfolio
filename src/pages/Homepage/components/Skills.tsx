import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/hooks/useLanguage';
import { translations, skillGroups } from '@/data/translations';

gsap.registerPlugin(ScrollTrigger);

export function Skills() {
  const { language } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-group', {
        y: 24,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 75%' },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const groups = [
    { key: 'frontend' as const, items: skillGroups.frontend },
    { key: 'backend' as const, items: skillGroups.backend },
    { key: 'design' as const, items: skillGroups.design },
    { key: 'other' as const, items: skillGroups.other },
  ];

  const marqueeItems = [...skillGroups.frontend, ...skillGroups.backend, ...skillGroups.design];

  return (
    <section ref={rootRef} id="skills" className="border-t border-default py-24 md:py-32">
      <div className="container-page">
        <div className="mb-14 grid items-end gap-4 md:grid-cols-12">
          <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            02 — {translations.skills.heading[language]}
          </div>
          <h2 className="md:col-span-9 font-display text-4xl font-bold tracking-tight md:text-5xl">
            {translations.skills.tagline[language]}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {groups.map(({ key, items }) => (
            <div key={key} className="skill-group">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                {translations.skills.groups[key][language]}
              </div>
              <ul className="space-y-2">
                {items.map((s) => (
                  <li key={s} className="text-fg">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 overflow-hidden border-y border-default py-6">
        <div className="flex w-max animate-marquee gap-12 font-display text-2xl font-bold uppercase tracking-tight text-muted md:text-4xl">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-12">
              {item}
              <span className="text-[var(--color-accent)]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
