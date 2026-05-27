/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#05070c',
        graphite: '#10141b',
        panel: '#151a22',
        line: '#26303b',
        cyan: '#63f4df',
        signal: '#d94f3f',
        ivory: '#f4efe2',
        ash: '#8e98a8',
        amber: '#e2b75f',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Share Tech Mono"', '"Roboto Mono"', 'monospace'],
      },
      boxShadow: {
        signal: '0 0 36px rgba(99, 244, 223, 0.18)',
        insetSignal: 'inset 0 0 24px rgba(99, 244, 223, 0.08)',
      },
    },
  },
  plugins: [],
};
