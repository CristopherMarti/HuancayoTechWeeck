const fs = require('fs');

let navbar = fs.readFileSync('src/components/Navbar.tsx', 'utf8');
navbar = navbar.replace(/bg-white\/20 dark:bg-black\/40 backdrop-blur-xl border border-white\/30 dark:border-white\/10/g, 'bg-google-white/95 dark:bg-google-grey-900/95 backdrop-blur-2xl border border-google-grey-200 dark:border-google-grey-800');
navbar = navbar.replace(/bg-white\/20 dark:bg-black\/40 backdrop-blur-2xl border border-white\/30 dark:border-white\/10/g, 'bg-google-white/95 dark:bg-google-grey-900/95 backdrop-blur-2xl border border-google-grey-200 dark:border-google-grey-800');
fs.writeFileSync('src/components/Navbar.tsx', navbar);

let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
hero = hero.replace(/bg-white\/10 dark:bg-black\/30 backdrop-blur-xl border border-white\/20 dark:border-white\/10 rounded-3xl shadow-2xl/g, 'bg-google-white dark:bg-google-grey-900 border border-google-grey-200 dark:border-google-grey-800 rounded-3xl shadow-2xl');
fs.writeFileSync('src/components/Hero.tsx', hero);

let techweek = fs.readFileSync('src/components/TechWeek.tsx', 'utf8');
techweek = techweek.replace(/bg-white\/10 dark:bg-black\/30 backdrop-blur-xl border border-white\/20 dark:border-white\/10/g, 'bg-google-white dark:bg-google-grey-900 border border-google-grey-200 dark:border-google-grey-800 shadow-xl');
techweek = techweek.replace(/border-white\/20 dark:border-white\/10 bg-white\/20 dark:bg-black\/40 backdrop-blur-lg/g, 'border-google-grey-200 dark:border-google-grey-800 bg-google-grey-100 dark:bg-google-grey-800');
techweek = techweek.replace(/shadow-lg -translate-y-2 bg-white\/40 dark:bg-black\/60 backdrop-blur-xl/g, 'shadow-lg -translate-y-2 bg-google-white dark:bg-google-grey-900');
techweek = techweek.replace(/bg-white\/20 dark:bg-black\/40 backdrop-blur-lg border border-white\/30 dark:border-white\/10/g, 'bg-google-white dark:bg-google-grey-900 border border-google-grey-200 dark:border-google-grey-800');
fs.writeFileSync('src/components/TechWeek.tsx', techweek);

let gallery = fs.readFileSync('src/components/Gallery.tsx', 'utf8');
gallery = gallery.replace(/bg-white\/10 dark:bg-black\/30 backdrop-blur-md/g, 'bg-google-white dark:bg-google-grey-900 border border-google-grey-200 dark:border-google-grey-800');
fs.writeFileSync('src/components/Gallery.tsx', gallery);

let tech = fs.readFileSync('src/components/Technologies.tsx', 'utf8');
tech = tech.replace(/bg-white\/10 dark:bg-black\/30 backdrop-blur-md rounded-\[2rem\] p-6 shadow-lg border border-white\/20 dark:border-white\/10/g, 'bg-google-white dark:bg-google-grey-900 rounded-[2rem] p-6 shadow-sm border border-google-grey-200 dark:border-google-grey-800');
fs.writeFileSync('src/components/Technologies.tsx', tech);

let speakers = fs.readFileSync('src/components/Speakers.tsx', 'utf8');
speakers = speakers.replace(/bg-white\/10 dark:bg-black\/30 backdrop-blur-md border border-white\/20 dark:border-white\/10/g, 'bg-google-white dark:bg-google-grey-900 border border-google-grey-200 dark:border-google-grey-800');
fs.writeFileSync('src/components/Speakers.tsx', speakers);

let team = fs.readFileSync('src/components/CoreTeam.tsx', 'utf8');
team = team.replace(/bg-white\/10 dark:bg-black\/30 backdrop-blur-md border border-white\/20 dark:border-white\/10/g, 'bg-google-white dark:bg-google-grey-900 border border-google-grey-200 dark:border-google-grey-800');
fs.writeFileSync('src/components/CoreTeam.tsx', team);

let past = fs.readFileSync('src/components/PastEvents.tsx', 'utf8');
past = past.replace(/bg-white\/10 dark:bg-black\/30 backdrop-blur-md border border-white\/20 dark:border-white\/10/g, 'bg-google-white dark:bg-google-grey-900 border border-google-grey-200 dark:border-google-grey-800');
past = past.replace(/bg-white\/30 backdrop-blur-md border border-white\/40/g, 'bg-google-grey-100 dark:bg-google-grey-800 border border-google-grey-200 dark:border-google-grey-700');
fs.writeFileSync('src/components/PastEvents.tsx', past);

console.log('Reverted glass styles to solid styles for better legibility.');
