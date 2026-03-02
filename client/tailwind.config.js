// Design rationale: handcrafted, flat visual language with royal-purple as primary brand.
// Token usage: semantic colors, shared radii, border color, and shadow scales for cohesive UI.
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-purple': '#5b21b6',
        'royal-purple-600': '#4b1aa0',
        'lavender-100': '#efe9ff',
        'neutral-50': '#f9fafb',
        'neutral-300': '#d1d5db',
        'charcoal-700': '#374151',
        'accent-amber': '#f59e0b',
      },
      borderColor: {
        base: 'var(--border-color)',
      },
      borderRadius: {
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        softHover: 'var(--shadow-soft-hover)',
      },
    },
  },
}
