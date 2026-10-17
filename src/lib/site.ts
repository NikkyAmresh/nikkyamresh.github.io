export const site = {
  name: 'Nikky Amresh',
  role: 'Senior SDE · Platforms Engineering',
  company: 'Educational Initiatives (Mindspark)',
  location: 'Bangalore, India',
  url: 'https://nikkyamresh.github.io',
  email: 'nikkyamresh8@gmail.com',
  socials: {
    github: 'https://github.com/NikkyAmresh',
    linkedin: 'https://linkedin.com/in/nikky-amresh',
    twitter: 'https://twitter.com/NikkyAmresh',
  },
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Security', href: '/security' },
    { label: 'Writing', href: '/writing' },
    { label: 'Resume', href: '/resume.pdf', external: true },
  ],
  description:
    'Senior Software Engineer with 4+ years of experience in Python and Node.js. Backend for Mindspark, an adaptive learning platform with 500,000+ students, plus generative AI products: AI agents, MCP servers, a voice assistant and a mobile app live on both stores.',
} as const;

export type Site = typeof site;
