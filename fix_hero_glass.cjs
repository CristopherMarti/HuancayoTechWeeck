const fs = require('fs');
let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');

// The main hero text section
hero = hero.replace(
  /className="flex flex-col items-center sm:items-start text-center sm:text-left font-display font-black tracking-tighter leading-\[0\.85\] max-w-full px-2"/g,
  'className="flex flex-col items-center sm:items-start text-center sm:text-left font-display font-black tracking-tighter leading-[0.85] max-w-full px-8 py-10 bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl"'
);

fs.writeFileSync('src/components/Hero.tsx', hero);
console.log('Hero text glass added');
