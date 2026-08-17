const fs = require('fs');
const path = require('path');

const root = __dirname;
const publicDir = path.join(root, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Ensure specific names are enforced for the UI
const expectedFiles = {
  'foto 01.jpeg': 'foto-01.jpeg',
  'foto-01.jpeg': 'foto-01.jpeg',
  'foto 02.jpeg': 'foto-02.jpeg',
  'foto-02.jpeg': 'foto-02.jpeg',
  'foto 03.jpeg': 'foto-03.jpeg',
  'foto-03.jpeg': 'foto-03.jpeg',
  'gdglogo.png': 'gdglogo.png',
  'GDG23_IG_Sticker_01_v01.gif': 'GDG23_IG_Sticker_01_v01.gif',
  'GDG23_IG_Sticker_02_v01.gif': 'GDG23_IG_Sticker_02_v01.gif',
  'GDG23_IG_Sticker_03_v01.gif': 'GDG23_IG_Sticker_03_v01.gif'
};

const files = fs.readdirSync(root);
for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (['.png', '.jpeg', '.jpg', '.gif'].includes(ext)) {
    // If it matches an expected file mapping, rename appropriately. Otherwise replace spaces.
    let newName = expectedFiles[file] || file.replace(/\s+/g, '-');
    // Ensure lowercase extensions for jpegs if uploaded as .JPG etc
    if(newName.endsWith('.JPG')) newName = newName.replace('.JPG', '.jpeg');
    if(newName.endsWith('.jpg')) newName = newName.replace('.jpg', '.jpeg');
    
    fs.renameSync(path.join(root, file), path.join(publicDir, newName));
    console.log(`Moved ${file} to public/${newName}`);
  }
}
