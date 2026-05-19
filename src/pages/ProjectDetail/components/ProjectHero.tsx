import type { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';

export function ProjectHero({ project }: { project: Project }) {
  const { language } = useLanguage();
  return (
    <section className="container-page">
      <div className="pd-anim mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
        <span>{project.year}</span>
        <span className="h-px w-8 bg-[var(--color-border)]" />
        <span>{project.role[language]}</span>
      </div>
      <h1 className="pd-anim font-display text-5xl font-black leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-8xl">
        {project.title}
      </h1>
      <p className="pd-anim mt-6 max-w-2xl text-xl text-muted md:text-2xl">
        {project.tagline[language]}
      </p>
    </section>
  );
}
