import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

// High-resolution SVG of the Mari a Nutri official logo monogram
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="goldIcon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5CA92"/>
      <stop offset="50%" stop-color="#C5A267"/>
      <stop offset="100%" stop-color="#A37E3E"/>
    </linearGradient>
    <linearGradient id="sageIcon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8DB69C"/>
      <stop offset="50%" stop-color="#6F8F7A"/>
      <stop offset="100%" stop-color="#4E6D59"/>
    </linearGradient>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#243B32"/>
      <stop offset="100%" stop-color="#172721"/>
    </linearGradient>
  </defs>

  <!-- Luxury Squircle Background -->
  <rect width="128" height="128" rx="28" fill="url(#bgGrad)"/>
  <rect x="2" y="2" width="124" height="124" rx="26" fill="none" stroke="#C5A267" stroke-width="2" stroke-opacity="0.35"/>

  <!-- Official Mari a Nutri Emblem (Monogram) -->
  <g transform="translate(14, 14) scale(0.96)">
    <!-- Golden left arch -->
    <path d="M45,85 C20,85 10,65 10,48 C10,25 30,10 50,10 C58,10 65,16 67,26 C68,34 65,48 56,60 C48,72 35,80 45,85 Z" 
          fill="none" stroke="url(#goldIcon)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Center stem -->
    <path d="M50,12 C52,40 54,65 55,95" 
          fill="none" stroke="url(#goldIcon)" stroke-width="5" stroke-linecap="round"/>
    <!-- Sage leaf loop -->
    <path d="M55,30 C75,32 95,48 95,70 C95,85 80,95 65,95 C52,95 48,82 55,70 C62,56 78,42 55,30 Z" 
          fill="none" stroke="url(#sageIcon)" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Golden berry -->
    <circle cx="53" cy="52" r="5" fill="#E5CA92" />
  </g>
</svg>`;

// Write temporary SVG for conversion
fs.writeFileSync('/tmp/favicon-source.svg', faviconSvg);

// Generate sizes using ImageMagick
execSync('convert -background none -density 300 /tmp/favicon-source.svg -resize 180x180 /tmp/apple-touch-icon.png');
execSync('convert -background none -density 300 /tmp/favicon-source.svg -resize 32x32 /tmp/favicon-32x32.png');
execSync('convert -background none -density 300 /tmp/favicon-source.svg -resize 16x16 /tmp/favicon-16x16.png');
execSync('convert /tmp/favicon-32x32.png /tmp/favicon-16x16.png /tmp/favicon.ico');

const targetDirs = [
  '/public',
  '/public/assets/img',
  '/site',
  '/site/assets/img',
  '/dist',
  '/dist/assets/img'
];

targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.copyFileSync('/tmp/favicon-source.svg', path.join(dir, 'favicon.svg'));
    fs.copyFileSync('/tmp/favicon-32x32.png', path.join(dir, 'favicon-32x32.png'));
    fs.copyFileSync('/tmp/favicon-16x16.png', path.join(dir, 'favicon-16x16.png'));
    fs.copyFileSync('/tmp/apple-touch-icon.png', path.join(dir, 'apple-touch-icon.png'));
    fs.copyFileSync('/tmp/favicon.ico', path.join(dir, 'favicon.ico'));
  }
});

console.log('Favicons generated successfully across all directories!');
