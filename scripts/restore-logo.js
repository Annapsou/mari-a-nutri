import fs from 'node:fs';
import path from 'node:path';

// Clean, modern, official logo matching the initial design
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 80" width="360" height="80">
  <defs>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0D9488" />
      <stop offset="100%" stop-color="#042F2E" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
  </defs>

  <!-- Emblem: Stylized Leaf / Apple / Wellness Shield -->
  <g transform="translate(10, 8)">
    <rect x="0" y="0" width="64" height="64" rx="18" fill="url(#tealGrad)" />
    <!-- Leaf / Sprout shape -->
    <path d="M32 16 C42 16 50 24 50 34 C50 44 42 50 32 50 C24 50 18 44 18 36 C18 26 24 16 32 16 Z" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" />
    <path d="M25 38 C28 32 35 28 41 27" fill="none" stroke="url(#goldGrad)" stroke-width="3" stroke-linecap="round" />
    <circle cx="32" cy="33" r="3.5" fill="#FFFFFF" />
  </g>

  <!-- Text -->
  <text x="88" y="38" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="24" font-weight="800" fill="#0F172A" letter-spacing="-0.03em">
    Clínica Maria Nutri
  </text>
  <text x="88" y="56" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="10.5" font-weight="600" fill="#0D9488" letter-spacing="0.12em">
    NUTRIÇÃO CLÍNICA &amp; EMAGRECIMENTO
  </text>
</svg>`;

const dirs = [
  path.join(process.cwd(), 'public', 'assets', 'img'),
  path.join(process.cwd(), 'site', 'assets', 'img'),
  path.join(process.cwd(), 'dist', 'assets', 'img')
];

dirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, 'logo.svg'), logoSvg);
    fs.writeFileSync(path.join(dir, 'logo-header.svg'), logoSvg);
  }
});

console.log('Restored original clean official header logo in all directories!');
