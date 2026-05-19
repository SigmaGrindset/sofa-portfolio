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
            Things I&apos;ve built.
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
          {featured && <span className="text-accent">★ Featured</span>}
        </span>
        <span className="inline-flex items-center gap-3">
          {project.links?.github && (
            <span
              role="link"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.links!.github!, '_blank', 'noopener,noreferrer');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.links!.github!, '_blank', 'noopener,noreferrer');
                }
              }}
              className="cursor-pointer text-muted transition hover:text-fg"
              aria-label="GitHub repository"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.4 3.01-.41 1.02.01 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </span>
          )}
          {project.links?.live && (
            <span
              role="link"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(project.links!.live!, '_blank', 'noopener,noreferrer');
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(project.links!.live!, '_blank', 'noopener,noreferrer');
                }
              }}
              className="cursor-pointer text-muted transition hover:text-fg"
              aria-label="Live demo"
            >
              ⤴
            </span>
          )}
          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            ↗
          </span>
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
