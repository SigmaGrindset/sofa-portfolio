export type LocalizedString = { en: string; hr: string };

export type Project = {
  id: string;
  title: string;
  tagline: LocalizedString;
  description: { en: string[]; hr: string[] };
  features: LocalizedString[];
  role: LocalizedString;
  tech: string[];
  note?: LocalizedString;
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
      en: [
        'A web app that lets employees organize their weekly meals and gives the catering service a clear overview of orders. Built during the Sofascore Frontend Academy.',
        'Employees pick their meals for the week, can transfer a lunch to a colleague if they cannot make it, and leave feedback on the food. Catering manages the menu, admin handles users, unpaid meals and deadlines.',
      ],
      hr: [
        'Web aplikacija koja zaposlenicima omogućuje organizaciju tjednih obroka, a catering službi daje jasan pregled narudžbi. Razvijeno u sklopu Sofascore Frontend Academy.',
        'Zaposlenici biraju obroke za tjedan, mogu prepustiti ručak kolegi i ostaviti povratnu informaciju o hrani. Catering upravlja menijem, admin korisnicima, neplaćenim obrocima i rokovima.',
      ],
    },
    features: [
      {
        en: 'Lunch transfer between colleagues',
        hr: 'Prepuštanje ručka kolegi',
      },
      {
        en: 'Meal feedback and ratings',
        hr: 'Povratne informacije i ocjene jela',
      },
      {
        en: 'Catering menu management',
        hr: 'Upravljanje menijem za catering',
      },
      {
        en: 'Admin: users, payments, deadlines',
        hr: 'Admin: korisnici, plaćanja, rokovi',
      },
    ],
    role: { en: 'Frontend development', hr: 'Izrada frontenda' },
    tech: ['React', 'TypeScript', 'TanStack Router', 'PandaCSS', 'SWR', 'Zustand'],
    featured: true,
    year: '2026',
  },
  {
    id: 'usa-elections',
    title: 'USA Elections',
    tagline: {
      en: 'Visualizing every U.S. presidential election (1789 – 2024)',
      hr: 'Vizualizacija svih američkih predsjedničkih izbora (1789. – 2024.)',
    },
    description: {
      en: [
        'An interactive visualization of every U.S. presidential election from 1789 to 2024 — winner, electoral votes per candidate and state-by-state results.',
        'The standout feature is the comparison view: pick two elections and the app highlights the "swing states" that changed party between them. Data was scraped from the official National Archives pages.',
      ],
      hr: [
        'Interaktivna vizualizacija svih američkih predsjedničkih izbora od 1789. do 2024. — pobjednik, broj elektorskih glasova po kandidatu i rezultati po saveznim državama.',
        'Posebna značajka je usporedni prikaz: odabirom dvaju izbora aplikacija ističe „swing states“, države koje su promijenile stranku. Podaci su scrapeani sa službenih stranica National Archivesa.',
      ],
    },
    features: [
      {
        en: 'Interactive map per election year',
        hr: 'Interaktivna karta po izbornoj godini',
      },
      {
        en: 'Per-candidate electoral vote breakdown',
        hr: 'Razrada elektorskih glasova po kandidatu',
      },
      {
        en: 'Comparison view with swing-state highlighting',
        hr: 'Usporedni prikaz s isticanjem swing-država',
      },
      {
        en: 'Custom National Archives scraper',
        hr: 'Vlastiti scraper s National Archivesa',
      },
    ],
    role: { en: 'Full-stack development', hr: 'Full-stack razvoj' },
    tech: ['Python', 'BeautifulSoup4', 'Node.js', 'Express', 'PostgreSQL', 'React', 'TypeScript', 'TanStack Router', 'Tailwind', 'D3', 'Vercel'],
    featured: true,
    year: '2026',
    links: {
      github: 'https://github.com/SigmaGrindset/usa-elections',
      live: 'https://usa-elections-client.vercel.app/',
    },
  },
  {
    id: 'gearshare',
    title: 'GearShare',
    tagline: {
      en: 'Marketplace for seasonal sports gear rentals',
      hr: 'Tržište za najam sezonske sportske opreme',
    },
    description: {
      en: [
        'A team project for the Software Engineering course at FER. GearShare is a platform for renting seasonal sports gear — skis, snowboards, bikes, kayaks — connecting retailers with customers.',
        'The motivation is to lower the cost of owning seasonal gear and to make existing gear more usable. Customers get flexible access to quality gear; retailers get an extra sales channel with a transparent reservation system and reviews.',
      ],
      hr: [
        'Timski projekt na kolegiju Programsko inženjerstvo na FER-u. GearShare je platforma za najam sezonske sportske opreme — skija, snowboarda, bicikala, kajaka — koja povezuje trgovce s kupcima.',
        'Motivacija je smanjiti trošak posjedovanja sezonske opreme te bolje iskoristiti onu koja već postoji. Kupci dobivaju fleksibilan pristup kvalitetnoj opremi; trgovci dodatni prodajni kanal s transparentnim sustavom rezervacija i recenzijama.',
      ],
    },
    features: [
      {
        en: 'Availability-based reservations',
        hr: 'Rezervacije po dostupnosti',
      },
      {
        en: 'OAuth 2.0 authentication',
        hr: 'Autentikacija putem OAuth 2.0',
      },
      {
        en: 'Role-based access (customer / retailer / admin)',
        hr: 'Uloge i prava (kupac / trgovac / admin)',
      },
      {
        en: 'Reviews of retailers and gear',
        hr: 'Recenzije trgovaca i opreme',
      },
    ],
    role: { en: 'Frontend & UI design', hr: 'Izrada frontenda i dizajn sučelja' },
    tech: ['React', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL', 'OAuth 2.0', 'Figma'],
    featured: false,
    year: '2026',
    links: {
      github: 'https://github.com/NiHorvat67/Pokemoni',
    },
  },
  {
    id: 'learnflow',
    title: 'LearnFlow',
    tagline: {
      en: 'Study planner with time tracking and activity charts',
      hr: 'Planer učenja s praćenjem vremena i grafovima aktivnosti',
    },
    description: {
      en: [
        'A web app that helps pupils and students plan their studying. You enter a daily plan per subject and log the duration and notes of each study session.',
        'From this data the app generates charts so users can spot their study patterns, see where time goes and which subjects weigh on them the most.',
      ],
      hr: [
        'Web aplikacija koja učenicima i studentima pomaže planirati učenje. Unosiš dnevni plan po predmetu i bilježiš trajanje i opis svake sesije učenja.',
        'Iz tih podataka aplikacija generira grafove kako bi korisnici prepoznali obrasce učenja, vidjeli kamo im odlazi vrijeme i koji ih predmeti najviše opterećuju.',
      ],
    },
    features: [
      {
        en: 'Daily study plan per subject',
        hr: 'Dnevni plan po predmetu',
      },
      {
        en: 'Session time tracking with notes',
        hr: 'Praćenje vremena sesija s bilješkama',
      },
      {
        en: 'Activity charts and pattern insights',
        hr: 'Grafovi aktivnosti i uvidi u obrasce',
      },
      {
        en: 'Per-subject time breakdowns',
        hr: 'Razrada vremena po predmetima',
      },
    ],
    role: { en: 'Backend development', hr: 'Backend razvoj' },
    tech: ['Node.js', 'Express', 'EJS', 'PostgreSQL', 'Vercel'],
    year: '2026',
    links: {
      github: 'https://github.com/SigmaGrindset/projekt-r',
      live: 'https://projekt-r-zeta.vercel.app/user',
    },
  },
  {
    id: 'spotilens',
    title: 'SpotiLens',
    tagline: {
      en: 'Deep Spotify listening stats with extended history support',
      hr: 'Detaljna statistika slušanja na Spotifyu s podrškom za proširenu povijest',
    },
    description: {
      en: [
        'A web app that uses the Spotify API to show listening stats — top artists, songs and albums across different time ranges.',
        "Beyond the API data, the app supports uploading the extended streaming history from Spotify's privacy export, unlocking analytics the API alone doesn't expose — like yearly stats, total hours and daily patterns.",
      ],
      hr: [
        'Web aplikacija koja koristi Spotify API za prikaz statistike slušanja — najslušaniji izvođači, pjesme i albumi kroz različite vremenske raspone.',
        'Osim API podataka, aplikacija podržava upload proširene povijesti slušanja iz Spotifyjevog privacy exporta, što otključava analitiku koju sam API ne nudi — godišnje statistike, ukupne sate slušanja i dnevne obrasce.',
      ],
    },
    features: [
      {
        en: 'Top artists, songs and albums by time range',
        hr: 'Top izvođači, pjesme i albumi po rasponu',
      },
      {
        en: 'Spotify OAuth 2.0 sign-in',
        hr: 'Prijava putem Spotify OAuth 2.0',
      },
      {
        en: 'Extended history upload (privacy export)',
        hr: 'Upload proširene povijesti (privacy export)',
      },
      {
        en: 'Yearly stats, total hours, daily patterns',
        hr: 'Godišnje statistike, ukupni sati, dnevni obrasci',
      },
    ],
    note: {
      en: 'Due to recent changes in the Spotify API, apps can no longer get "extended quota mode" and stay stuck in dev mode. The deploy is live but access is limited — it only works for manually-added Spotify accounts.',
      hr: 'Zbog nedavnih promjena u Spotify API-ju, aplikacije više ne mogu dobiti „extended quota mode“ i ostaju zaglavljene u dev modu. Deploy je živ, ali pristup je ograničen — radi samo za ručno dodane Spotify račune.',
    },
    role: { en: 'Full-stack (solo)', hr: 'Samostalni projekt (full-stack)' },
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Spotify API', 'OAuth 2.0', 'Vercel'],
    year: '2025',
    links: {
      github: 'https://github.com/SigmaGrindset/spotify_stats',
      live: 'https://spotify-stats-frontend-phi.vercel.app/',
    },
  },
  {
    id: 'nba-scraper',
    title: 'NBA Stats',
    tagline: {
      en: 'Automated NBA game data collection with a simple web view',
      hr: 'Automatizirano prikupljanje NBA podataka s jednostavnim web prikazom',
    },
    description: {
      en: [
        'A website that automatically collects NBA game data and presents it to the user.',
        'Scraping done with Selenium and BeautifulSoup for sources that require JS rendering. Results are served through a simple Node.js web layer.',
      ],
      hr: [
        'Web stranica koja automatizirano prikuplja podatke o NBA utakmicama i prikazuje ih korisniku.',
        'Scraping je rađen pomoću Seleniuma i BeautifulSoupa za izvore koji zahtijevaju JS rendering. Rezultati se poslužuju kroz jednostavan Node.js web sloj.',
      ],
    },
    features: [
      {
        en: 'Automated NBA game data scraping',
        hr: 'Automatizirano scrapeanje NBA podataka',
      },
      {
        en: 'Selenium for JS-rendered sources',
        hr: 'Selenium za JS-renderirane izvore',
      },
      {
        en: 'BeautifulSoup HTML parsing',
        hr: 'BeautifulSoup za parsiranje HTML-a',
      },
      {
        en: 'Lightweight Node.js web view',
        hr: 'Lagani Node.js web prikaz',
      },
    ],
    role: { en: 'Full-stack (solo)', hr: 'Samostalni projekt (full-stack)' },
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    year: '2023',
    links: {
      github: 'https://github.com/SigmaGrindset/nba-stats',
    },
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
