const fs = require('fs');
let code = fs.readFileSync('src/components/TechWeek.tsx', 'utf8');
let oldSchedule = fs.readFileSync('current_schedule.txt', 'utf8');
code = code.replace(/const schedule = \[[\s\S]*?\];/, oldSchedule);
code = code.replace(/sm:grid-cols-3/g, 'sm:grid-cols-5');
fs.writeFileSync('src/components/TechWeek.tsx', code);
