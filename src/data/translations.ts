export type Language = 'en' | 'hr';

export const translations = {
  nav: {
    about: { en: 'About', hr: 'O meni' },
    skills: { en: 'Skills', hr: 'Vještine' },
    projects: { en: 'Projects', hr: 'Projekti' },
    contact: { en: 'Contact', hr: 'Kontakt' },
  },
  hero: {
    status: { en: 'Available for opportunities', hr: 'Otvoren za prilike' },
    name: { en: 'Antonio Batarilović', hr: 'Antonio Batarilović' },
    roles: {
      en: ['Frontend Developer', 'FER Student', 'Sofascore Academy'],
      hr: ['Frontend developer', 'Student FER-a', 'Sofascore Academy'],
    },
    intro: {
      en: 'Building thoughtful web experiences with React, TypeScript and an eye for design.',
      hr: 'Gradim promišljena web iskustva uz React, TypeScript i smisao za dizajn.',
    },
    scroll: { en: 'Scroll', hr: 'Skrolaj' },
    downloadCv: { en: 'Download CV', hr: 'Preuzmi CV' },
    getInTouch: { en: 'Get in touch', hr: 'Javi se' },
  },
  about: {
    heading: { en: 'About', hr: 'O meni' },
    body: {
      en: "I'm a third-year Computer Science student at FER (Zagreb) currently in the Sofascore Frontend Academy. I enjoy the overlap between engineering and design — building products that feel as good as they work.",
      hr: 'Student sam treće godine računarstva na FER-u (Zagreb) i trenutno sudjelujem u Sofascore Frontend Academy. Najviše me veseli preklapanje inženjerstva i dizajna — graditi proizvode koji izgledaju jednako dobro koliko i rade.',
    },
    location: { en: 'Based in', hr: 'Lokacija' },
    studying: { en: 'Studying', hr: 'Studiram' },
    currently: { en: 'Currently', hr: 'Trenutno' },
  },
  skills: {
    heading: { en: 'Skills', hr: 'Vještine' },
    groups: {
      frontend: { en: 'Frontend', hr: 'Frontend' },
      backend: { en: 'Backend', hr: 'Backend' },
      design: { en: 'Design', hr: 'Dizajn' },
      other: { en: 'Other', hr: 'Ostalo' },
    },
  },
  projects: {
    heading: { en: 'Selected work', hr: 'Odabrani projekti' },
    viewAll: { en: 'View project', hr: 'Pogledaj projekt' },
    role: { en: 'Role', hr: 'Uloga' },
    tech: { en: 'Stack', hr: 'Tehnologije' },
    year: { en: 'Year', hr: 'Godina' },
    back: { en: 'Back to all', hr: 'Natrag na sve' },
    notFound: { en: 'Project not found', hr: 'Projekt nije pronađen' },
    overview: { en: 'Overview', hr: 'Pregled' },
    features: { en: 'Features', hr: 'Značajke' },
    note: { en: 'Note', hr: 'Napomena' },
    next: { en: 'Next', hr: 'Sljedeći' },
  },
  contact: {
    heading: { en: "Let's talk", hr: 'Kontakt' },
    body: {
      en: 'Open to internships, junior frontend roles and interesting collaborations.',
      hr: 'Otvoren za prakse, junior frontend pozicije i zanimljive suradnje.',
    },
    email: { en: 'Email', hr: 'Email' },
    phone: { en: 'Phone', hr: 'Telefon' },
    github: { en: 'GitHub', hr: 'GitHub' },
    linkedin: { en: 'LinkedIn', hr: 'LinkedIn' },
    cv: { en: 'CV / Resume', hr: 'Životopis' },
  },
  footer: {
    rights: { en: 'All rights reserved', hr: 'Sva prava pridržana' },
  },
} as const;

export const skillGroups = {
  frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TanStack', 'HTML5', 'CSS3', 'Tailwind', 'GSAP'],
  backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Python'],
  design: ['Figma', 'UI/UX'],
  other: ['Git', 'Blender'],
};
