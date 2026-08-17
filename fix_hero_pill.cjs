const fs = require('fs');

let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// Fix pill
hero = hero.replace(/border-4 border-google-yellow-500 bg-google-yellow-500\/20 backdrop-blur-md border border-google-yellow-500\/30/g, 'border-4 border-google-yellow-500 bg-google-yellow-500/10 backdrop-blur-sm');

// Fix marquee
hero = hero.replace(/border-y border-white\/20 dark:border-white\/10 bg-white\/10 dark:bg-black\/30 backdrop-blur-xl/g, 'border-y-2 border-google-grey-200 dark:border-google-grey-800 bg-google-white dark:bg-google-grey-900');

fs.writeFileSync('src/components/Hero.tsx', hero);
console.log('Hero fixed.');
