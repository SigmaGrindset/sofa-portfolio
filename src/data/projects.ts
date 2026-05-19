export type Project = {
  id: string;
  title: string;
  tagline: { en: string; hr: string };
  description: { en: string; hr: string };
  role: { en: string; hr: string };
  tech: string[];
  featured?: boolean;
  year: string;
  links?: { github?: string; live?: string };
};

export const projects: Project[] = [
  {
    id: 'sofascore-canteen',
    title: 'Sofascore Canteen',
    tagline: {
      en: 'Weekly meal planning for Sofascore employees',
      hr: 'Tjedno planiranje obroka za Sofascore zaposlenike',
    },
    description: {
      en: 'Web application that lets employees organize their weekly meals while giving the catering service an overview of orders for meal preparation. Built during the Sofascore Frontend Academy.',
      hr: 'Web aplikacija koja zaposlenicima omogućuje organizaciju tjednih obroka, a catering službi uvid u narudžbe radi pripreme jela. Razvijeno u sklopu Sofascore Frontend Academy.',
    },
    role: { en: 'Frontend development', hr: 'Izrada frontenda' },
    tech: ['React', 'TanStack Router', 'PandaCSS', 'SWR', 'Zustand'],
    featured: true,
    year: '2026',
  },
  {
    id: 'gearshare',
    title: 'GearShare',
    tagline: {
      en: 'Marketplace for seasonal sports equipment rentals',
      hr: 'Tržište za najam sezonske sportske opreme',
    },
    description: {
      en: 'Web platform connecting seasonal sports equipment vendors with clients — browsing, filtering, reservations, online payment, and pickup/return coordination.',
      hr: 'Web platforma koja povezuje trgovce sezonskom sportskom opremom s klijentima kroz pregled, filtriranje, rezervacije, online naplatu te dogovor oko preuzimanja i povrata opreme.',
    },
    role: { en: 'Frontend & UI design', hr: 'Izrada frontenda i dizajn sučelja' },
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Node.js'],
    featured: true,
    year: '2025',
  },
  {
    id: 'usa-elections',
    title: 'USA Elections',
    tagline: {
      en: 'Visualizing every US presidential election (1789–2024)',
      hr: 'Vizualizacija svih američkih predsjedničkih izbora (1789. – 2024.)',
    },
    description: {
      en: 'Data was scraped from the National Archives using Python and BeautifulSoup4. The app displays results by year on an interactive state map and allows comparison between two elections.',
      hr: 'Podaci su prikupljeni scrapeanjem National Archivesa korištenjem Pythona i BeautifulSoup4. Aplikacija omogućuje pregled rezultata po godini s interaktivnom kartom saveznih država te usporedbu dvaju izbora.',
    },
    role: { en: 'Full-stack development', hr: 'Full-stack razvoj' },
    tech: ['Python', 'BeautifulSoup4', 'Express', 'PostgreSQL', 'React', 'TypeScript', 'D3', 'Tailwind'],
    year: '2024',
  },
  {
    id: 'learnflow',
    title: 'LearnFlow',
    tagline: {
      en: 'Study planning with real-time tracking',
      hr: 'Planiranje učenja s praćenjem u stvarnom vremenu',
    },
    description: {
      en: 'Helps students track their daily study plan and actual time spent learning, generating activity graphs.',
      hr: 'Pomaže studentima u praćenju dnevnog plana i stvarnog vremena utrošenog na učenje uz generiranje grafova aktivnosti.',
    },
    role: { en: 'Backend development', hr: 'Backend razvoj' },
    tech: ['Node.js', 'Express', 'PostgreSQL'],
    year: '2024',
  },
  {
    id: 'spotilens',
    title: 'SpotiLens',
    tagline: {
      en: 'Deep Spotify listening stats',
      hr: 'Detaljna statistika slušanja na Spotifyu',
    },
    description: {
      en: 'Connects to the Spotify API and displays listening statistics — artists, tracks, albums. Lets users upload additional data for stats not available through the API alone.',
      hr: 'Spaja se na Spotify API i prikazuje statistiku slušanja (artisti, pjesme, albumi). Omogućuje upload dodatnih podataka za statistike koje nisu dostupne kroz API.',
    },
    role: { en: 'Full-stack (solo)', hr: 'Samostalni projekt (full-stack)' },
    tech: ['React', 'Node.js', 'Spotify API'],
    year: '2023',
  },
  {
    id: 'nba-scraper',
    title: 'NBA Scraper',
    tagline: {
      en: 'Automated NBA game data collection',
      hr: 'Automatizirano prikupljanje podataka o NBA utakmicama',
    },
    description: {
      en: 'Web app that automatically collects NBA game data and presents it to the user.',
      hr: 'Web stranica koja automatizirano prikuplja podatke o NBA utakmicama i prikazuje ih korisniku.',
    },
    role: { en: 'Full-stack (solo)', hr: 'Samostalni projekt (full-stack)' },
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Node.js'],
    year: '2023',
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
