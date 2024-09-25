module.exports = {
    content: [
      './src/**/*.astro',
      // 'node_modules/flowbite/**/*.js'
    ],
    theme: {
      extend: {},
    },
    darkMode: 'media',
    plugins: [require('flowbite/plugin')],
  };