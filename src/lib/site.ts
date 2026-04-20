export const site = {
  name: 'Nikky Amresh',
  role: 'SDE 2 · Platforms Engineering',
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
    { label: 'Writing', href: '/writing' },
    { label: 'Resume', href: '/resume.pdf', external: true },
  ],
  description:
    'Backend engineer with 4+ years full-time experience. Currently SDE 2 at Mindspark — backend for an adaptive learning platform with 500,000+ students. I ship VS Code extensions, write C++ plugins, and build AI tooling ahead of the curve.',
} as const;

export type Site = typeof site;
