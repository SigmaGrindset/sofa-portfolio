import { useParams, Link } from '@tanstack/react-router';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { getProject, projects } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';
import { Tag } from '@/components/ui/Tag';
import { ProjectHero } from './components/ProjectHero';

export function ProjectDetail() {
  const { projectId } = useParams({ from: '/projects/$projectId' });
  const { language } = useLanguage();
  const project = getProject(projectId);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project) return;
    const ctx = gsap.context(() => {
      gsap.from('.pd-anim', {
        y: 24,
        opacity: 0,
        stagger: 0.06,
        duration: 0.7,
        ease: 'power3.out',
      });
    }, rootRef);
    return () => ctx.revert();
  }, [projectId, project]);

  if (!project) {
    return (
      <div className="container-page flex min-h-[80svh] flex-col items-center justify-center gap-4 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.25em] text-muted">404</div>
        <h1 className="font-display text-4xl font-bold">{translations.projects.notFound[language]}</h1>
        <Link to="/" className="text-[var(--color-accent)] underline">
          ← {translations.projects.back[language]}
        </Link>
      </div>
    );
  }

  const nextIndex = (projects.findIndex((p) => p.id === project.id) + 1) % projects.length;
  const nextProject = projects[nextIndex];

  return (
    <div ref={rootRef} className="pt-24">
      <div className="container-page">
        <Link
          to="/"
          hash="projects"
          className="pd-anim mb-12 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted transition hover:text-fg"
        >
          ← {translations.projects.back[language]}
        </Link>
      </div>

      <ProjectHero project={project} />

      <div className="container-page mt-20 grid gap-12 md:grid-cols-12">
        <div className="pd-anim md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            {translations.projects.overview[language]}
          </div>
        </div>
        <div className="pd-anim md:col-span-9 space-y-6">
          <p className="font-display text-2xl leading-snug text-balance text-fg md:text-3xl">
            {project.tagline[language]}
          </p>
          {project.description[language].map((para, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted">
              {para}
            </p>
          ))}

          {project.note && (
            <div className="glass mt-6 rounded-2xl p-5">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                {translations.projects.note[language]}
              </div>
              <p className="text-sm text-fg">{project.note[language]}</p>
            </div>
          )}
        </div>
      </div>

      <div className="container-page mt-20 grid gap-12 md:grid-cols-12">
        <div className="pd-anim md:col-span-3">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            {translations.projects.features[language]}
          </div>
        </div>
        <div className="pd-anim md:col-span-9">
          <ul className="divide-y divide-[var(--color-border)] border-y border-default">
            {project.features.map((f, i) => (
              <li key={i} className="flex items-start gap-4 py-4">
                <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-fg">{f[language]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-page mt-20 grid gap-8 border-t border-default pt-12 md:grid-cols-3">
        <div className="pd-anim">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            {translations.projects.role[language]}
          </div>
          <div className="mt-2 text-fg">{project.role[language]}</div>
        </div>
        <div className="pd-anim">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            {translations.projects.year[language]}
          </div>
          <div className="mt-2 text-fg">{project.year}</div>
        </div>
        <div className="pd-anim">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            {translations.projects.tech[language]}
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-32 border-t border-default">
        <Link
          to="/projects/$projectId"
          params={{ projectId: nextProject.id }}
          className="group container-page flex items-center justify-between py-12 transition-colors"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              {translations.projects.next[language]}
            </div>
            <div className="mt-2 font-display text-3xl font-bold tracking-tight transition-colors group-hover:text-[var(--color-accent)] md:text-5xl">
              {nextProject.title}
            </div>
          </div>
          <span className="text-3xl text-muted transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--color-accent)]">
            →
          </span>
        </Link>
      </div>
    </div>
  );
}
