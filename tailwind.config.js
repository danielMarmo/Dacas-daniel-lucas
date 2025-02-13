module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hover': '#251e5b',
        'primary': '#111535',
        'secondary': '#493f8b',
        'support': '#1a202c',
      },
      fontSize: {
        'paragraph-h3': ['0.75rem', { lineHeight: '1' }],
        'paragraph-h2': ['0.875rem', { lineHeight: '1.25' }],
        'paragraph-h1': ['1rem', { lineHeight: '1.5' }],
        'subtitle-h3': ['1.375rem', { lineHeight: '1.75' }],
        'subtitle-h2': ['1.5rem', { lineHeight: '2' }],
        'subtitle-h1': ['1.875rem', { lineHeight: '2.25' }],
        'title-h3': ['2.5rem', { lineHeight: '3' }],
        'title-h2': ['3.125rem', { lineHeight: '3.5' }],
        'title-h1': ['4.6875rem', { lineHeight: '5' }],
        'big-title': ['8.75rem', { lineHeight: '9' }],
      },
      fontFamily: {
        'lexend': ['Lexend', 'sans-serif'],
      },
      fontWeight: {
        'bold': '700', // Assuming Bold is meant for 700 or similar
        'regular': '400',
        'semibold': '600',
      },
    },
  },
  plugins: [],
}