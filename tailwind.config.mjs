/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Design tokens — one accent (electric blue), the rest is grayscale
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#60a5fa',
          muted: '#1e3a8a',
        },
        // Semantic neutrals driven by CSS vars set in global.css
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        'bg-subtle': 'rgb(var(--color-bg-subtle) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        text: 'rgb(var(--color-text) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'text-subtle': 'rgb(var(--color-text-subtle) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono Variable"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Match a modest type scale
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      maxWidth: {
        prose: '42rem',      // ~672px — case studies
        layout: '64rem',     // ~1024px — homepage grid
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--color-text))',
            '--tw-prose-headings': 'rgb(var(--color-text))',
            '--tw-prose-links': theme('colors.accent.DEFAULT'),
            '--tw-prose-bold': 'rgb(var(--color-text))',
            '--tw-prose-code': 'rgb(var(--color-text))',
            '--tw-prose-quotes': 'rgb(var(--color-text-muted))',
            '--tw-prose-bullets': 'rgb(var(--color-text-subtle))',
            '--tw-prose-hr': 'rgb(var(--color-border))',
            '--tw-prose-counters': 'rgb(var(--color-text-subtle))',
            maxWidth: 'none',
            fontFamily: theme('fontFamily.sans').join(','),
            code: {
              fontFamily: theme('fontFamily.mono').join(','),
              fontWeight: '500',
              fontSize: '0.9em',
              padding: '0.125rem 0.375rem',
              borderRadius: '0.25rem',
              background: 'rgb(var(--color-bg-subtle))',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            a: {
              textDecoration: 'none',
              borderBottom: '1px solid currentColor',
              transition: 'color 150ms ease',
            },
            'a:hover': { color: theme('colors.accent.hover') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
