const fs = require('fs');

let logo = fs.readFileSync('src/components/Logo.tsx', 'utf8');
logo = `import gdgLogo from '../assets/gdglogo.png';\n` + logo.replace(/src="\/gdglogo\.png"/g, 'src={gdgLogo}');
fs.writeFileSync('src/components/Logo.tsx', logo);

let gallery = fs.readFileSync('src/components/Gallery.tsx', 'utf8');
gallery = `import foto01 from '../assets/foto-01.jpeg';\nimport foto02 from '../assets/foto-02.jpeg';\nimport foto03 from '../assets/foto-03.jpeg';\n` + gallery;
gallery = gallery.replace(/url: "\/foto-01\.jpeg"/g, 'url: foto01');
gallery = gallery.replace(/url: "\/foto-02\.jpeg"/g, 'url: foto02');
gallery = gallery.replace(/url: "\/foto-03\.jpeg"/g, 'url: foto03');
fs.writeFileSync('src/components/Gallery.tsx', gallery);

let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
hero = `import gif1 from '../assets/GDG23_IG_Sticker_01_v01.gif';\nimport gif2 from '../assets/GDG23_IG_Sticker_02_v01.gif';\nimport gif3 from '../assets/GDG23_IG_Sticker_03_v01.gif';\n` + hero;
hero = hero.replace(/src="\/GDG23_IG_Sticker_01_v01\.gif"/g, 'src={gif1}');
hero = hero.replace(/src="\/GDG23_IG_Sticker_02_v01\.gif"/g, 'src={gif2}');
hero = hero.replace(/src="\/GDG23_IG_Sticker_03_v01\.gif"/g, 'src={gif3}');
fs.writeFileSync('src/components/Hero.tsx', hero);

