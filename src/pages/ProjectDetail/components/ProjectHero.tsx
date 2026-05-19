import type { Project } from '@/data/projects';
import { useLanguage } from '@/hooks/useLanguage';
import { translations } from '@/data/translations';

export function ProjectHero({ project }: { project: Project }) {
  const { language } = useLanguage();
  const github = project.links?.github;
  const live = project.links?.live;
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

      {(github || live) && (
        <div className="pd-anim mt-8 flex flex-wrap items-center gap-3">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-[var(--color-accent-fg)] transition-transform hover:-translate-y-0.5"
            >
              <span>{translations.projects.viewLive[language]}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-fg transition-transform hover:-translate-y-0.5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.84 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.99-.4 3.01-.41 1.02.01 2.05.14 3.01.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>{translations.projects.viewSource[language]}</span>
            </a>
          )}
        </div>
      )}
    </section>
  );
}
