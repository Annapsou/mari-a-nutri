import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// Official Mari a Nutri emblem (golden arch, center stem, sage leaf, gold berry)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="goldFav" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EAD19B"/>
      <stop offset="50%" stop-color="#C5A267"/>
      <stop offset="100%" stop-color="#A58140"/>
    </linearGradient>
    <linearGradient id="sageFav" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8DB69C"/>
      <stop offset="50%" stop-color="#6F8F7A"/>
      <stop offset="100%" stop-color="#4E6D59"/>
    </linearGradient>
    <linearGradient id="bgFav" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#223930"/>
      <stop offset="100%" stop-color="#182A23"/>
    </linearGradient>
  </defs>

  <!-- Luxury Brand Background -->
  <rect width="128" height="128" rx="30" fill="url(#bgFav)"/>
  <rect x="2" y="2" width="124" height="124" rx="28" fill="none" stroke="#C5A267" stroke-width="2.5" stroke-opacity="0.45"/>

  <!-- Logo Monogram -->
  <g transform="translate(14, 14) scale(0.96)">
    <!-- Golden left arch -->
    <path d="M45,85 C20,85 10,65 10,48 C10,25 30,10 50,10 C58,10 65,16 67,26 C68,34 65,48 56,60 C48,72 35,80 45,85 Z" 
          fill="none" stroke="url(#goldFav)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Center stem -->
    <path d="M50,12 C52,40 54,65 55,95" 
          fill="none" stroke="url(#goldFav)" stroke-width="5" stroke-linecap="round"/>
    <!-- Sage leaf loop -->
    <path d="M55,30 C75,32 95,48 95,70 C95,85 80,95 65,95 C52,95 48,82 55,70 C62,56 78,42 55,30 Z" 
          fill="none" stroke="url(#sageFav)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Center golden berry -->
    <circle cx="53" cy="52" r="5" fill="#EAD19B"/>
  </g>
</svg>`;

async function generate() {
  const svgBuffer = Buffer.from(faviconSvg);

  const png180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();

  const cwd = process.cwd();
  const targetDirs = [
    path.join(cwd, 'public'),
    path.join(cwd, 'public/assets/img'),
    path.join(cwd, 'site'),
    path.join(cwd, 'site/assets/img'),
    path.join(cwd, 'dist'),
    path.join(cwd, 'dist/assets/img')
  ];

  targetDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      fs.writeFileSync(path.join(dir, 'favicon.svg'), faviconSvg);
      fs.writeFileSync(path.join(dir, 'favicon-32x32.png'), png32);
      fs.writeFileSync(path.join(dir, 'favicon-16x16.png'), png16);
      fs.writeFileSync(path.join(dir, 'apple-touch-icon.png'), png180);
      fs.writeFileSync(path.join(dir, 'favicon.ico'), png32);
    }
  });

  console.log('All favicons successfully generated using sharp!');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
