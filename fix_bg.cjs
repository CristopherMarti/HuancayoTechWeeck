const fs = require('fs');
let bg = fs.readFileSync('src/components/Background.tsx', 'utf8');
bg = bg.replace(/opacity-40/g, 'opacity-20');
bg = bg.replace(/brightness=\{0\.6\}/g, 'brightness={0.4}');
fs.writeFileSync('src/components/Background.tsx', bg);
console.log('Background dimmed');
