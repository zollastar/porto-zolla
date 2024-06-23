// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '16/9': '16 / 9',
      },
      height: {
        '3px': '3px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
