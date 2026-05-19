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
        'A web app that lets employees organize their weekly meals and gives the catering service a clear overview of orders for meal prep. Built during the Sofascore Frontend Academy.',
        'One-stop shop for managing office lunches. Employees pick their meals for the week, can transfer a lunch to a colleague if they cannot make it, and leave feedback on the food.',
        'The catering service manages the meal catalog and plans the weekly menus. The admin role covers toggling users on/off, tracking unpaid meals and setting order deadlines.',
        'The academy simulated working inside a company — we worked in a team with mentors, through Scrum sprints. I took away much more than just code: how teamwork actually plays out, how to read Figma designs, how code review raises quality and how to plan sprints.',
      ],
      hr: [
        'Web aplikacija koja zaposlenicima omogućuje organizaciju tjednih obroka, a catering službi daje jasan pregled narudžbi za pripremu jela. Razvijeno u sklopu Sofascore Frontend Academy.',
        'Jedinstveno mjesto za upravljanje ručkovima u uredu. Zaposlenici biraju obroke za tjedan, mogu prepustiti ručak kolegi ako ne mogu doći i ostaviti povratnu informaciju o hrani.',
        'Catering služba upravlja katalogom jela i planira tjedne menije. Admin uloga pokriva uključivanje/isključivanje korisnika, praćenje neplaćenih obroka i postavljanje rokova za narudžbe.',
        'Akademija je simulirala rad u firmi — radili smo u timu uz mentore, kroz Scrum sprintove. Iz toga sam ponio puno više od samog koda: kako timski rad zaista funkcionira, kako se čita Figma dizajn, kako code review podiže kvalitetu i kako planirati sprintove.',
      ],
    },
    features: [
      {
        en: 'Weekly meal selection per employee',
        hr: 'Tjedni odabir obroka po zaposleniku',
      },
      {
        en: 'Transfer a lunch to a colleague',
        hr: 'Prepuštanje ručka kolegi',
      },
      {
        en: 'Feedback and ratings on meals',
        hr: 'Povratne informacije i ocjene jela',
      },
      {
        en: 'Catering: manage meal catalog and weekly menus',
        hr: 'Catering: upravljanje katalogom jela i tjednim menijima',
      },
      {
        en: 'Admin: user toggles, unpaid meals tracking, order deadlines',
        hr: 'Admin: upravljanje korisnicima, praćenje neplaćenih obroka, rokovi narudžbi',
      },
    ],
    role: { en: 'Frontend development', hr: 'Izrada frontenda' },
    tech: ['React', 'TypeScript', 'TanStack Router', 'PandaCSS', 'SWR', 'Zustand', 'Figma'],
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
        'An interactive visualization of every U.S. presidential election from 1789 to 2024. For each year you can see the winner, the electoral vote count per candidate and the results in each state.',
        'A standout feature is the comparison view — pick two elections and the app highlights the "swing states", the ones that changed party between them.',
        'Data was collected by scraping the official National Archives pages (archives.gov/electoral-college).',
      ],
      hr: [
        'Interaktivna vizualizacija svih američkih predsjedničkih izbora od 1789. do 2024. Za svaku godinu prikazan je pobjednik, broj elektorskih glasova po kandidatu te rezultati po saveznim državama.',
        'Posebna značajka je usporedni prikaz — odabirom dvaju izbora aplikacija ističe „swing states“, države koje su između tih izbora promijenile stranku.',
        'Podaci su prikupljeni scrapeanjem službenih stranica National Archivesa (archives.gov/electoral-college).',
      ],
    },
    features: [
      {
        en: 'Interactive state map for every election year',
        hr: 'Interaktivna karta saveznih država za svaku izbornu godinu',
      },
      {
        en: 'Per-candidate electoral vote breakdown',
        hr: 'Razrada elektorskih glasova po kandidatu',
      },
      {
        en: 'State-by-state results',
        hr: 'Rezultati po saveznim državama',
      },
      {
        en: 'Comparison view with swing-state highlighting',
        hr: 'Usporedni prikaz s isticanjem swing-država',
      },
      {
        en: 'Custom scraper pipeline from the National Archives',
        hr: 'Vlastiti scraper pipeline s National Archivesa',
      },
    ],
    role: { en: 'Full-stack development', hr: 'Full-stack razvoj' },
    tech: ['Python', 'BeautifulSoup4', 'Node.js', 'Express', 'PostgreSQL', 'React', 'TypeScript', 'TanStack Router', 'Tailwind', 'D3'],
    featured: true,
    year: '2024',
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
        'The outcome of a team project for the Software Engineering course at FER. GearShare is a platform for renting seasonal sports gear — skis, snowboards, bikes, kayaks — connecting retailers with customers.',
        'The motivation is to lower the cost and hassle of owning seasonal gear and to make existing gear more usable. Customers get flexible access to quality gear when they need it; retailers get an extra sales channel and a transparent reservation system with reviews.',
        'Through development we picked up modern web architecture patterns, OAuth 2.0 integration, role and permission management, and good practices for documentation, testing and team collaboration.',
      ],
      hr: [
        'Rezultat timskog projekta na kolegiju Programsko inženjerstvo na FER-u. GearShare je platforma za najam sezonske sportske opreme — skija, snowboarda, bicikala, kajaka — koja povezuje trgovce s kupcima.',
        'Motivacija je smanjiti trošak i komplikaciju posjedovanja sezonske opreme te bolje iskoristiti onu koja već postoji. Kupci dobivaju fleksibilan pristup kvalitetnoj opremi kada im treba; trgovci dobivaju dodatni prodajni kanal i transparentan sustav rezervacija s recenzijama.',
        'Kroz razvoj smo svladali moderne arhitekturne obrasce za web, OAuth 2.0 integraciju, upravljanje ulogama i pravima te dobre prakse dokumentiranja, testiranja i timske suradnje.',
      ],
    },
    features: [
      {
        en: 'Catalog browsing with filters',
        hr: 'Pregled kataloga uz filtere',
      },
      {
        en: 'Reservation system with availability windows',
        hr: 'Sustav rezervacija s prozorima dostupnosti',
      },
      {
        en: 'Online payment integration',
        hr: 'Integracija online plaćanja',
      },
      {
        en: 'Pickup and return scheduling',
        hr: 'Dogovor preuzimanja i povrata',
      },
      {
        en: 'OAuth 2.0 authentication',
        hr: 'Autentikacija putem OAuth 2.0',
      },
      {
        en: 'Role and permission management (customer / retailer / admin)',
        hr: 'Upravljanje ulogama i pravima (kupac / trgovac / admin)',
      },
      {
        en: 'Customer reviews of retailers and gear',
        hr: 'Recenzije trgovaca i opreme od strane korisnika',
      },
    ],
    role: { en: 'Frontend & UI design', hr: 'Izrada frontenda i dizajn sučelja' },
    tech: ['React', 'TypeScript', 'Spring Boot', 'Java', 'PostgreSQL', 'OAuth 2.0', 'Figma'],
    featured: true,
    year: '2025',
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
        'A web app that helps pupils and students plan their studying. You can enter a daily plan per subject and track the time you actually spent studying, by logging the duration and description of each activity.',
        'From this data the app generates charts so users can spot their study patterns, see where time goes and which subjects weigh on them the most.',
      ],
      hr: [
        'Web aplikacija koja učenicima i studentima pomaže planirati učenje. Mogu unijeti dnevni plan po predmetu i pratiti vrijeme koje su stvarno proveli učeći, kroz unos trajanja i opisa svake aktivnosti.',
        'Iz tih podataka aplikacija generira grafove pomoću kojih korisnici prepoznaju svoje obrasce učenja, vide kamo im odlazi vrijeme i koji ih predmeti najviše opterećuju.',
      ],
    },
    features: [
      {
        en: 'Daily study plan per subject',
        hr: 'Dnevni plan učenja po predmetu',
      },
      {
        en: 'Time tracking with duration and notes per session',
        hr: 'Praćenje vremena s trajanjem i bilješkama po sesiji',
      },
      {
        en: 'Activity charts and study-pattern insights',
        hr: 'Grafovi aktivnosti i uvidi u obrasce učenja',
      },
      {
        en: 'Per-subject time breakdowns',
        hr: 'Razrada vremena po predmetima',
      },
    ],
    role: { en: 'Backend development', hr: 'Backend razvoj' },
    tech: ['Node.js', 'Express', 'EJS', 'PostgreSQL'],
    year: '2024',
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
        en: 'Top artists, songs and albums across time ranges',
        hr: 'Najslušaniji izvođači, pjesme i albumi kroz vremenske raspone',
      },
      {
        en: 'Spotify OAuth 2.0 sign-in',
        hr: 'Prijava putem Spotify OAuth 2.0',
      },
      {
        en: 'Upload of extended streaming history (privacy export)',
        hr: 'Upload proširene povijesti slušanja (privacy export)',
      },
      {
        en: 'Yearly stats, total listening hours, daily patterns',
        hr: 'Godišnje statistike, ukupni sati slušanja, dnevni obrasci',
      },
    ],
    note: {
      en: 'Due to recent changes in the Spotify API, apps can no longer get "extended quota mode" and stay stuck in dev mode. The deploy is live but access is limited — it only works for manually-added Spotify accounts.',
      hr: 'Zbog nedavnih promjena u Spotify API-ju, aplikacije više ne mogu dobiti „extended quota mode“ i ostaju zaglavljene u dev modu. Deploy je živ, ali pristup je ograničen — radi samo za ručno dodane Spotify račune.',
    },
    role: { en: 'Full-stack (solo)', hr: 'Samostalni projekt (full-stack)' },
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Spotify API', 'OAuth 2.0'],
    year: '2023',
  },
  {
    id: 'nba-scraper',
    title: 'NBA Scraper',
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
        en: 'Automated scraping of NBA game data',
        hr: 'Automatizirano scrapeanje podataka o NBA utakmicama',
      },
      {
        en: 'Selenium for JS-rendered sources',
        hr: 'Selenium za izvore koji zahtijevaju JS rendering',
      },
      {
        en: 'BeautifulSoup HTML parsing',
        hr: 'BeautifulSoup za parsiranje HTML-a',
      },
      {
        en: 'Lightweight web view served by Node.js',
        hr: 'Lagani web prikaz poslužen kroz Node.js',
      },
    ],
    role: { en: 'Full-stack (solo)', hr: 'Samostalni projekt (full-stack)' },
    tech: ['Python', 'Selenium', 'BeautifulSoup', 'Node.js', 'HTML', 'CSS', 'JavaScript'],
    year: '2023',
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
