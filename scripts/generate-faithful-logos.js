import fs from 'node:fs';
import path from 'node:path';

// Clean tight viewBox (290 x 70) so there is NO extra whitespace on the right
const logoHeaderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 70" width="290" height="70">
  <defs>
    <linearGradient id="goldH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A267"/>
      <stop offset="50%" stop-color="#DEBE84"/>
      <stop offset="100%" stop-color="#9E7E45"/>
    </linearGradient>
    <linearGradient id="sageH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#6F8F7A"/>
      <stop offset="50%" stop-color="#82A38D"/>
      <stop offset="100%" stop-color="#4F6E5B"/>
    </linearGradient>
  </defs>

  <!-- Organic Monogram -->
  <g transform="translate(4, 4) scale(0.66)">
    <!-- Golden left arch -->
    <path d="M45,85 C20,85 10,65 10,48 C10,25 30,10 50,10 C58,10 65,16 67,26 C68,34 65,48 56,60 C48,72 35,80 45,85 Z" 
          fill="none" stroke="url(#goldH)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Center stem -->
    <path d="M50,12 C52,40 54,65 55,95" 
          fill="none" stroke="url(#goldH)" stroke-width="3.5" stroke-linecap="round"/>
    <!-- Sage leaf loop -->
    <path d="M55,30 C75,32 95,48 95,70 C95,85 80,95 65,95 C52,95 48,82 55,70 C62,56 78,42 55,30 Z" 
          fill="none" stroke="url(#sageH)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="53" cy="52" r="3.5" fill="#C5A267" />
  </g>

  <!-- Text: Mari a nutri -->
  <text x="78" y="38" 
        font-family="'Playfair Display', Georgia, serif" 
        font-size="28" 
        font-weight="700" 
        fill="#253D34" 
        letter-spacing="-0.02em">
    Mari a nutri
  </text>
  
  <!-- Subtitle: DRA. MARIANA SALDANHA -->
  <text x="80" y="55" 
        font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
        font-size="9" 
        font-weight="700" 
        fill="#C5A267" 
        letter-spacing="0.16em">
    DRA. MARIANA SALDANHA • NUTRIÇÃO
  </text>
</svg>`;

// Footer Logo (for dark background)
const logoFooterSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 70" width="290" height="70">
  <defs>
    <linearGradient id="goldF" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2C790"/>
      <stop offset="50%" stop-color="#C5A267"/>
      <stop offset="100%" stop-color="#A58348"/>
    </linearGradient>
    <linearGradient id="sageF" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8BB39A"/>
      <stop offset="50%" stop-color="#6F8F7A"/>
      <stop offset="100%" stop-color="#557560"/>
    </linearGradient>
  </defs>

  <!-- Organic Monogram -->
  <g transform="translate(4, 4) scale(0.66)">
    <path d="M45,85 C20,85 10,65 10,48 C10,25 30,10 50,10 C58,10 65,16 67,26 C68,34 65,48 56,60 C48,72 35,80 45,85 Z" 
          fill="none" stroke="url(#goldF)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M50,12 C52,40 54,65 55,95" 
          fill="none" stroke="url(#goldF)" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M55,30 C75,32 95,48 95,70 C95,85 80,95 65,95 C52,95 48,82 55,70 C62,56 78,42 55,30 Z" 
          fill="none" stroke="url(#sageF)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="53" cy="52" r="3.5" fill="#E2C790" />
  </g>

  <!-- Text: Mari a nutri in luminous warm white -->
  <text x="78" y="38" 
        font-family="'Playfair Display', Georgia, serif" 
        font-size="28" 
        font-weight="700" 
        fill="#FAF9F5" 
        letter-spacing="-0.02em">
    Mari a nutri
  </text>
  
  <!-- Subtitle: DRA. MARIANA SALDANHA in gold -->
  <text x="80" y="55" 
        font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
        font-size="9" 
        font-weight="700" 
        fill="#C5A267" 
        letter-spacing="0.16em">
    DRA. MARIANA SALDANHA • NUTRIÇÃO
  </text>
</svg>`;

const targetDirs = [
  path.join(process.cwd(), 'public', 'assets', 'img'),
  path.join(process.cwd(), 'site', 'assets', 'img'),
  path.join(process.cwd(), 'dist', 'assets', 'img')
];

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, 'logo.svg'), logoHeaderSvg);
    fs.writeFileSync(path.join(dir, 'logo-header.svg'), logoHeaderSvg);
    fs.writeFileSync(path.join(dir, 'logo-footer.svg'), logoFooterSvg);
  }
});

console.log('✓ Successfully created perfectly proportioned logos with no empty space!');
