export interface SkillCard {
  name: string;
  description: string;
  icon: 'code' | 'server' | 'database' | 'cloud';
  shape: 'circle' | 'triangle' | 'hexagon' | 'diamond';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  logo: string;
  shape: 'circle' | 'triangle' | 'hexagon';
}

export interface Project {
  id: number;
  title: string;
  overview: string;
  contributions: string[];
  tech: string[];
  improvements: string[];
  category: 'full' | 'back-only' | 'front-only';
  image: string;
  shape: 'rounded' | 'cut-corner' | 'wave' | 'hex';
}

export const profile = {
  name: 'Fatma Tarek',
  initials: 'FT',
  title: 'Full Stack Developer',
  subtitle: 'Angular · Ionic · Swift · NestJS · .NET',
  tagline:
    'Building scalable web and mobile experiences with Angular, React, NestJS, and .NET',
  location: 'Alexandria, Egypt',
  email: 'fatma.tarek204@gmail.com',
  github: 'https://github.com/Fatma-Tarek',
  githubHandle: 'Fatma-Tarek',
  linkedin: 'https://www.linkedin.com/in/fatma-tarek-77729b118/',
  linkedinHandle: 'fatma-tarek-77729b118',
  whatsapp: 'https://wa.me/201099820528',
  whatsappDisplay: '+20 109 982 0528',
  photoUrl: 'profile-photo.jpeg',
  resumeUrl: '',
  summary:
    'Full stack developer with 4+ years of experience delivering enterprise and consumer applications. Currently at ULTATEL, specializing in Angular, NestJS, and cross-platform mobile development with Ionic and Swift.',
  focus:
    'Passionate about building reliable APIs, intuitive user interfaces, and cross-platform mobile solutions that solve real business problems.',
};

export const stats = [
  { label: 'Years Experience', value: '4+', shape: 'circle' as const },
  { label: 'Technologies', value: '10+', shape: 'triangle' as const },
  { label: 'Projects', value: '15+', shape: 'hexagon' as const },
  { label: 'Companies', value: '2', shape: 'diamond' as const },
];

export const skills: SkillCard[] = [
  {
    name: 'Frontend Development',
    description: 'Angular, React, TypeScript, Ionic',
    icon: 'code',
    shape: 'circle',
  },
  {
    name: 'Backend Development',
    description: 'NestJS, .NET, Node.js',
    icon: 'server',
    shape: 'triangle',
  },
  {
    name: 'Mobile Development',
    description: 'Ionic, Swift, cross-platform apps',
    icon: 'database',
    shape: 'hexagon',
  },
  {
    name: 'Tools & Practices',
    description: 'SQL, Git, REST APIs, Docker',
    icon: 'cloud',
    shape: 'diamond',
  },
];

export const experience: Experience[] = [
  {
    company: 'ULTATEL',
    role: 'Full Stack Developer',
    period: '2023 – Present',
    location: 'Alexandria, Egypt',
    highlights: [
      'Develop and maintain telecom and VoIP solutions using Angular and NestJS.',
      'Build real-time dashboards, REST APIs, and third-party integrations for enterprise clients.',
    ],
    logo: 'companies/ultatel.svg',
    shape: 'circle',
  },
  {
    company: 'ISFP',
    role: 'Software Developer',
    period: '2022 – 2023',
    location: 'Alexandria, Egypt',
    highlights: [
      'Built enterprise web applications with .NET backends and modern JavaScript frontends.',
      'Participated in requirements gathering, code reviews, and production deployments.',
    ],
    logo: 'companies/isfp.svg',
    shape: 'triangle',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Social Network (Django)',
    overview:
      'Social platform with user profiles, posts, likes, and real-time interactions.',
    contributions: [
      'Built user authentication and profile management',
      'Implemented REST API endpoints for posts and interactions',
    ],
    tech: ['Python', 'Django', 'REST API'],
    improvements: ['Add real-time notifications with WebSockets'],
    category: 'full',
    image: 'projects/social-network.svg',
    shape: 'cut-corner',
  },
  {
    id: 2,
    title: 'Perfect Store',
    overview:
      'E-commerce store with product catalog, shopping cart, and order management.',
    contributions: [
      'Developed product catalog and cart functionality',
      'Built order management backend with Node.js',
    ],
    tech: ['Node.js', 'JavaScript', 'MongoDB'],
    improvements: ['Add payment gateway integration'],
    category: 'full',
    image: 'projects/perfect-store.svg',
    shape: 'wave',
  },
  {
    id: 3,
    title: 'Glasses Store',
    overview:
      'Online glasses shop with product browsing, cart, and checkout flow.',
    contributions: [
      'Built product browsing and filtering pages',
      'Implemented cart and checkout with PHP and MySQL',
    ],
    tech: ['PHP', 'MySQL', 'HTML/CSS'],
    improvements: ['Add admin dashboard for inventory management'],
    category: 'full',
    image: 'projects/glasses-store.svg',
    shape: 'rounded',
  },
  {
    id: 4,
    title: 'Weather API',
    overview:
      'Weather application consuming external REST APIs with location-based forecasts.',
    contributions: [
      'Integrated external weather REST APIs',
      'Built location-based forecast display',
    ],
    tech: ['PHP', 'REST API', 'JSON'],
    improvements: ['Add caching for API responses'],
    category: 'back-only',
    image: 'projects/weather.svg',
    shape: 'hex',
  },
  {
    id: 5,
    title: 'TIC-TAC-TOE',
    overview:
      'Desktop Tic-Tac-Toe game with player vs player mode built using JavaFX.',
    contributions: ['Implemented game logic and JavaFX UI', 'Added player vs player mode'],
    tech: ['Java', 'JavaFX'],
    improvements: ['Add AI opponent mode'],
    category: 'front-only',
    image: 'projects/tictactoe.svg',
    shape: 'cut-corner',
  },
  {
    id: 6,
    title: 'Hotel Management System',
    overview:
      'Laravel-based hotel booking and room management system with admin dashboard.',
    contributions: [
      'Contributed to room booking and management features',
      'Worked on admin dashboard for hotel operations',
    ],
    tech: ['PHP', 'Laravel', 'MySQL'],
    improvements: ['Add online payment integration'],
    category: 'full',
    image: 'projects/hotel.svg',
    shape: 'wave',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const projectFilters = [
  { key: 'all', label: 'All Projects' },
  { key: 'full', label: 'Full-stack' },
  { key: 'back-only', label: 'Backend' },
  { key: 'front-only', label: 'Frontend' },
];
