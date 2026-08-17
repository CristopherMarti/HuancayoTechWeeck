const fs = require('fs');

let tech = fs.readFileSync('src/components/Technologies.tsx', 'utf8');
tech = tech.replace(/bg-google-white dark:bg-google-black rounded-\[2rem\] p-6 shadow-sm border-2 border-google-black\/10 dark:border-google-white\/10/g, 'bg-white/10 dark:bg-black/30 backdrop-blur-md rounded-[2rem] p-6 shadow-lg border border-white/20 dark:border-white/10');
tech = tech.replace(/text-google-black dark:text-google-white mb-4/g, 'text-google-black dark:text-white drop-shadow-md mb-4');
fs.writeFileSync('src/components/Technologies.tsx', tech);

let speakers = fs.readFileSync('src/components/Speakers.tsx', 'utf8');
speakers = speakers.replace(/bg-google-white border-2 border-google-black\/10/g, 'bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10');
speakers = speakers.replace(/text-google-black mb-1/g, 'text-google-black dark:text-white drop-shadow-sm mb-1');
speakers = speakers.replace(/text-google-black text-xs/g, 'text-google-black dark:text-white text-xs drop-shadow-sm');
speakers = speakers.replace(/text-google-black dark:text-google-white/g, 'text-google-black dark:text-white drop-shadow-md');
fs.writeFileSync('src/components/Speakers.tsx', speakers);

let team = fs.readFileSync('src/components/CoreTeam.tsx', 'utf8');
team = team.replace(/bg-google-white border-2 border-google-black\/10/g, 'bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10');
team = team.replace(/text-google-black mb-1/g, 'text-google-black dark:text-white drop-shadow-sm mb-1');
fs.writeFileSync('src/components/CoreTeam.tsx', team);

let past = fs.readFileSync('src/components/PastEvents.tsx', 'utf8');
past = past.replace(/bg-google-white border-2 border-google-black\/10/g, 'bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10');
past = past.replace(/text-google-black mb-3/g, 'text-google-black dark:text-white mb-3 drop-shadow-sm');
past = past.replace(/bg-google-white\/50 backdrop-blur-sm border border-google-white\/20/g, 'bg-white/30 backdrop-blur-md border border-white/40');
fs.writeFileSync('src/components/PastEvents.tsx', past);

let about = fs.readFileSync('src/components/About.tsx', 'utf8');
about = about.replace(/text-google-black dark:text-google-white/g, 'text-google-black dark:text-white drop-shadow-sm');
fs.writeFileSync('src/components/About.tsx', about);

console.log('Other components styled.');
