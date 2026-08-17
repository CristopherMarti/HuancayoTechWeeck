const fs = require('fs');

// 1. Navbar
let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navbar = navbar.replace(/bg-google-white\/80 dark:bg-google-grey-900\/80 backdrop-blur-2xl border border-google-grey-100 dark:border-google-grey-800/g, 'bg-white/20 dark:bg-black/40 backdrop-blur-xl border border-white/30 dark:border-white/10');
navbar = navbar.replace(/bg-google-white\/95 dark:bg-google-grey-900\/95 backdrop-blur-xl border border-google-grey-100 dark:border-google-grey-800/g, 'bg-white/20 dark:bg-black/40 backdrop-blur-2xl border border-white/30 dark:border-white/10');
fs.writeFileSync('src/components/Navbar.tsx', navbar);

// 2. Hero
let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
// Fix text legibility by wrapping in a glass card if needed, or just improve the pill and marquee
hero = hero.replace(/bg-google-yellow-500\/10 backdrop-blur-sm/g, 'bg-google-yellow-500/20 backdrop-blur-md border border-google-yellow-500/30');
hero = hero.replace(/border-y-2 border-google-black\/10 dark:border-google-white\/10 bg-google-white\/30 dark:bg-google-black\/30 backdrop-blur-md/g, 'border-y border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/30 backdrop-blur-xl');
hero = hero.replace(/text-google-black dark:text-google-white/g, 'text-google-black dark:text-white drop-shadow-md');
fs.writeFileSync('src/components/Hero.tsx', hero);

// 3. TechWeek
let techweek = fs.readFileSync('src/components/TechWeek.tsx', 'utf8');
techweek = techweek.replace(/bg-google-white\/50 dark:bg-google-black\/50 backdrop-blur-md/g, 'bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10');
techweek = techweek.replace(/border-google-black\/10 dark:border-google-white\/10 bg-google-white dark:bg-google-grey-800/g, 'border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/40 backdrop-blur-lg');
techweek = techweek.replace(/shadow-lg -translate-y-2 bg-google-white dark:bg-google-grey-900/g, 'shadow-lg -translate-y-2 bg-white/40 dark:bg-black/60 backdrop-blur-xl');
techweek = techweek.replace(/bg-google-white border-2 border-google-black\/10/g, 'bg-white/20 dark:bg-black/40 backdrop-blur-lg border border-white/30 dark:border-white/10');
techweek = techweek.replace(/text-google-black mb-2/g, 'text-google-black dark:text-white mb-2');
techweek = techweek.replace(/text-google-grey-600 text-sm md:text-base font-medium/g, 'text-google-grey-700 dark:text-google-grey-300 text-sm md:text-base font-medium');
fs.writeFileSync('src/components/TechWeek.tsx', techweek);

// 4. Gallery
let gallery = fs.readFileSync('src/components/Gallery.tsx', 'utf8');
gallery = gallery.replace(/border-google-black\/10 dark:border-google-white\/10 rounded-\[2rem\] group w-\[300px\] h-\[300px\] md:w-\[450px\] md:h-\[400px\] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 shrink-0 bg-google-white dark:bg-google-black/g, 'border-white/20 dark:border-white/10 rounded-[2rem] group w-[300px] h-[300px] md:w-[450px] md:h-[400px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 shrink-0 bg-white/10 dark:bg-black/30 backdrop-blur-md p-2');
gallery = gallery.replace(/className="w-full h-full object-cover/g, 'className="rounded-[1.5rem] w-full h-full object-cover');
fs.writeFileSync('src/components/Gallery.tsx', gallery);

console.log('Glass style applied.');
