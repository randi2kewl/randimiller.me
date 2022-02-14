const colors = require('tailwindcss/colors');

// tailwind.config.cjs
module.exports = {
    mode: 'jit',
    // you dont need `purge: enabled: production` because you are using jit
    purge: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [],
  }
