import fs from 'node:fs';
import path from 'node:path';

// Logo for "Mari a Nutri" (Dra. Mariana Saldanha)
// Colors: Primária #6F8F7A, Secundária #C5A267, Texto #253D34
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 80" width="380" height="80">
  <defs>
    <linearGradient id="goldMonogram" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A267" />
      <stop offset="100%" stop-color="#9E7E45" />
    </linearGradient>
    <linearGradient id="sageMonogram" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6F8F7A" />
      <stop offset="100%" stop-color="#4F6E5B" />
    </linearGradient>
  </defs>

  <!-- Stylized Emblem: Organic Golden Leaf & Sage Drop -->
  <g transform="translate(10, 8)">
    <rect x="0" y="0" width="64" height="64" rx="16" fill="#FAF9F5" stroke="#C5A267" stroke-width="1.5" />
    <!-- Golden left curve / leaf -->
    <path d="M32 14 C44 14 50 24 50 36 C50 48 40 52 32 52 C22 52 14 44 14 34 C14 22 22 14 32 14 Z" 
          fill="none" stroke="url(#goldMonogram)" stroke-width="2.5" stroke-linecap="round" />
    <!-- Sage green internal sprout & seed -->
    <path d="M26 38 C28 30 35 25 42 24" 
          fill="none" stroke="url(#sageMonogram)" stroke-width="2.5" stroke-linecap="round" />
    <circle cx="32" cy="33" r="3.5" fill="#6F8F7A" />
  </g>

  <!-- Typography: Mari a Nutri -->
  <text x="88" y="38" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="25" font-weight="800" fill="#253D34" letter-spacing="-0.02em">
    Mari a Nutri
  </text>
  <text x="88" y="56" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="10" font-weight="600" fill="#C5A267" letter-spacing="0.16em">
    DRA. MARIANA SALDANHA • NUTRIÇÃO
  </text>
</svg>`;

// Horizontal Header Logo
const logoHeaderSvg = logoSvg;

const targetDirs = [
  path.join(process.cwd(), 'public', 'assets', 'img'),
  path.join(process.cwd(), 'site', 'assets', 'img'),
  path.join(process.cwd(), 'dist', 'assets', 'img')
];

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, 'logo.svg'), logoSvg);
    fs.writeFileSync(path.join(dir, 'logo-header.svg'), logoHeaderSvg);
  }
});

console.log('✓ Successfully created Mari a Nutri logo with new branding palette in all directories!');
