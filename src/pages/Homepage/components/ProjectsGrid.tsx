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
      gsap.from('.project-card', {
        y: 36,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 90%',
          once: true,
        },
      });
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

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
      className={`project-card glass group relative isolate flex flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${
        featured ? 'md:p-8' : ''
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

      <div className="relative mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        <span>{project.year}</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>

      <h3
        className={`relative font-display font-bold tracking-tight text-fg ${
          featured ? 'text-3xl md:text-4xl' : 'text-2xl'
        }`}
      >
        {project.title}
      </h3>
      <p className="relative mt-2 text-muted">{project.tagline[language]}</p>

      {featured && (
        <div className="relative mt-6 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 6).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </Link>
  );
}
