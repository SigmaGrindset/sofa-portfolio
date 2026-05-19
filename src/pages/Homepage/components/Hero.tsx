import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

export function Hero() {
  const { language } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = translations.hero.roles[language];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const name = nameRef.current;
      if (!name) return;
      const chars = name.querySelectorAll<HTMLSpanElement>('.hero-char');

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from('.hero-status', { y: 12, opacity: 0, duration: 0.6 })
        .from(chars, { y: 80, opacity: 0, stagger: 0.025, duration: 0.8 }, '-=0.2')
        .from('.hero-intro', { y: 16, opacity: 0, duration: 0.7 }, '-=0.4')
        .from('.hero-meta', { y: 12, opacity: 0, duration: 0.6 }, '-=0.5')
        .from('.hero-scroll', { y: -8, opacity: 0, duration: 0.5 }, '-=0.3');
    }, rootRef);
    return () => ctx.revert();
  }, [language]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, [roles.length]);

  const name = translations.hero.name[language];
  const words = name.split(' ');

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative flex min-h-[100svh] items-center pt-24 pb-12"
    >
      <div className="container-page w-full">
        <div className="hero-status glass mb-8 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted">
          <span className="relative grid h-2 w-2 place-items-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
          {translations.hero.status[language]}
        </div>

        <h1
          ref={nameRef}
          className="font-display text-5xl font-black leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-[9rem]"
        >
          {words.map((word, wi) => (
            <span
              key={wi}
              className={`mr-4 inline-block whitespace-nowrap ${wi === words.length - 1 ? 'aurora-text' : ''}`}
            >
              {Array.from(word).map((ch, ci) => (
                <span key={ci} className="hero-char inline-block">
                  {ch}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <div className="hero-intro mt-8 max-w-2xl text-lg text-muted md:text-xl">
          {translations.hero.intro[language]}
        </div>

        <div className="hero-meta mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-wider text-muted">
          <span>
            <span className="text-fg">→</span>{' '}
            <span key={roleIndex} className="text-fg transition-opacity">
              {roles[roleIndex]}
            </span>
          </span>
          <span className="hidden h-3 w-px bg-[var(--color-border)] md:inline-block" />
          <span>Zagreb, HR</span>
          <span className="hidden h-3 w-px bg-[var(--color-border)] md:inline-block" />
          <span>2026</span>
        </div>
      </div>

      <a
        href="#about"
        className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted transition hover:text-fg"
      >
        <span className="block animate-bounce">↓ {translations.hero.scroll[language]}</span>
      </a>
    </section>
  );
}
