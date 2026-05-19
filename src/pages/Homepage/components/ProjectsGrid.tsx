import { useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';
import { projects } from '@/data/projects';
import { Tag } from '@/components/ui/Tag';

gsap.registerPlugin(ScrollTrigger);

export function ProjectsGrid() {
  const { language } = useLanguage();
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      gsap.set(cards, { opacity: 0, y: 48, scale: 0.96 });
      ScrollTrigger.batch(cards, {
        start: 'top bottom+=120',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: 'power3.out',
            overwrite: true,
          }),
      });
      ScrollTrigger.refresh();

      const failsafe = window.setTimeout(() => {
        gsap.to('.project-card', {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
        });
      }, 2500);
      return () => window.clearTimeout(failsafe);
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section ref={rootRef} id="projects" className="border-t border-default py-24 md:py-32">
      <div className="container-page">
        <div className="mb-14 grid items-end gap-4 md:grid-cols-12">
          <div className="md:col-span-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            03 — {translations.projects.heading[language]}
          </div>
          <h2 className="md:col-span-9 font-display text-4xl font-bold tracking-tight md:text-5xl">
            {translations.projects.tagline[language]}
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: typeof projects[number];
  featured?: boolean;
}) {
  const { language } = useLanguage();
  return (
    <Link
      to="/projects/$projectId"
      params={{ projectId: project.id }}
      className={`project-card glass group relative isolate flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${
        featured ? 'p-8 md:p-12' : 'p-6'
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 30% 0%, rgba(139,92,246,0.22), transparent 55%), radial-gradient(circle at 80% 100%, rgba(34,211,238,0.18), transparent 55%)',
        }}
      />

      {featured && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(236,72,153,0.35), transparent 70%)',
          }}
        />
      )}

      <div className="relative mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        <span className="inline-flex items-center gap-3">
          {project.year}
          {featured && <span className="text-action">★ {translations.projects.featured[language]}</span>}
        </span>
        <span className="inline-flex h-[14px] w-[14px] items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M7 17 17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </span>
      </div>

      {featured ? (
        <div className="relative grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <h3 className="font-display text-3xl font-bold tracking-tight text-fg md:text-5xl lg:text-6xl">
              {project.title}
            </h3>
            <p className="mt-3 max-w-xl text-base text-muted md:text-lg">
              {project.tagline[language]}
            </p>
          </div>
          <div className="md:col-span-4 md:justify-self-end">
            <div className="flex flex-wrap gap-1.5 md:justify-end">
              {project.tech.slice(0, 6).map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <h3 className="relative font-display text-2xl font-bold tracking-tight text-fg">
            {project.title}
          </h3>
          <p className="relative mt-2 text-muted">{project.tagline[language]}</p>
        </>
      )}
    </Link>
  );
}
