const fs = require('fs');

let logo = fs.readFileSync('src/components/Logo.tsx', 'utf8');
logo = logo.replace(/import gdgLogo from '\.\.\/assets\/gdglogo\.png';\n?/g, '');
logo = logo.replace(/src=\{gdgLogo\}/g, 'src="/gdglogo.png"');
fs.writeFileSync('src/components/Logo.tsx', logo);

let gallery = fs.readFileSync('src/components/Gallery.tsx', 'utf8');
gallery = gallery.replace(/import foto01 from '\.\.\/assets\/foto-01\.jpeg';\n?/g, '');
gallery = gallery.replace(/import foto02 from '\.\.\/assets\/foto-02\.jpeg';\n?/g, '');
gallery = gallery.replace(/import foto03 from '\.\.\/assets\/foto-03\.jpeg';\n?/g, '');
gallery = gallery.replace(/url: foto01/g, 'url: "/foto-01.jpeg"');
gallery = gallery.replace(/url: foto02/g, 'url: "/foto-02.jpeg"');
gallery = gallery.replace(/url: foto03/g, 'url: "/foto-03.jpeg"');
fs.writeFileSync('src/components/Gallery.tsx', gallery);

let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
hero = hero.replace(/import gif1 from '\.\.\/assets\/GDG23_IG_Sticker_01_v01\.gif';\n?/g, '');
hero = hero.replace(/import gif2 from '\.\.\/assets\/GDG23_IG_Sticker_02_v01\.gif';\n?/g, '');
hero = hero.replace(/import gif3 from '\.\.\/assets\/GDG23_IG_Sticker_03_v01\.gif';\n?/g, '');
hero = hero.replace(/src=\{gif1\}/g, 'src="/GDG23_IG_Sticker_01_v01.gif"');
hero = hero.replace(/src=\{gif2\}/g, 'src="/GDG23_IG_Sticker_02_v01.gif"');
hero = hero.replace(/src=\{gif3\}/g, 'src="/GDG23_IG_Sticker_03_v01.gif"');
fs.writeFileSync('src/components/Hero.tsx', hero);
