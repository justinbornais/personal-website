module.exports = {
    content: [
      './src/**/*.{astro,html,js,jsx,ts,tsx}',
      // 'node_modules/flowbite/**/*.js'
    ],
    theme: {
      extend: {},
    },
    darkMode: 'media',
    plugins: [require('flowbite/plugin')],
  };