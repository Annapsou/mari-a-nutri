import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

function createCRC32Table() {
  const table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  return table;
}

const crcTable = createCRC32Table();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function createPngBuffer(width, height, getPixelRGBA) {
  // 8-byte signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type: RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  const ihdrChunk = createChunk('IHDR', ihdrData);

  // Raw image data with filter byte 0 at start of each row
  const rawData = Buffer.alloc(height * (1 + width * 4));
  let offset = 0;
  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // filter byte: none
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixelRGBA(x, y, width, height);
      rawData[offset++] = r;
      rawData[offset++] = g;
      rawData[offset++] = b;
      rawData[offset++] = a;
    }
  }

  const idatCompressed = zlib.deflateSync(rawData);
  const idatChunk = createChunk('IDAT', idatCompressed);
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const len = data.length;
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(len, 0);

  const crcBuf = Buffer.alloc(4);
  const toCrc = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(toCrc), 0);

  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

// Generate Emerald / Nutrition themed favicon and logo
function generateFavicon(size) {
  return createPngBuffer(size, size, (x, y, w, h) => {
    const cx = w / 2;
    const cy = h / 2;
    const dist = Math.hypot(x - cx, y - cy);
    const radius = w * 0.45;
    if (dist <= radius) {
      // Emerald gradient background
      const ratio = y / h;
      const r = Math.round(15 + ratio * 10);
      const g = Math.round(118 + ratio * 30);
      const b = Math.round(110 - ratio * 20);
      return [r, g, b, 255];
    }
    return [0, 0, 0, 0];
  });
}

function generateLogoPng(w = 280, h = 80) {
  return createPngBuffer(w, h, (x, y) => {
    // Subtle transparent or light background
    if (x < 60) {
      const cx = 35;
      const cy = 40;
      const dist = Math.hypot(x - cx, y - cy);
      if (dist <= 26) {
        return [13, 148, 136, 255]; // teal-600
      }
    }
    return [0, 0, 0, 0];
  });
}

function generatePlaceholderPng(w, h, primaryHex = '#0F766E') {
  const rBase = parseInt(primaryHex.slice(1, 3), 16);
  const gBase = parseInt(primaryHex.slice(3, 5), 16);
  const bBase = parseInt(primaryHex.slice(5, 7), 16);

  return createPngBuffer(w, h, (x, y) => {
    const factor = 0.85 + (x / w) * 0.15 + (y / h) * 0.1;
    const r = Math.min(255, Math.round(rBase * factor));
    const g = Math.min(255, Math.round(gBase * factor));
    const b = Math.min(255, Math.round(bBase * factor));
    return [r, g, b, 255];
  });
}

// Create SVGs
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" width="320" height="80">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F766E"/>
      <stop offset="100%" stop-color="#14B8A6"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D97706"/>
      <stop offset="100%" stop-color="#FBBF24"/>
    </linearGradient>
  </defs>
  <!-- Icon Emblem -->
  <g transform="translate(10, 10)">
    <rect width="60" height="60" rx="16" fill="url(#logoGrad)"/>
    <!-- Organic Leaf / Wellness Curve -->
    <path d="M30 14 C42 14 46 26 46 36 C46 46 38 48 30 48 C22 48 14 46 14 36 C14 26 18 14 30 14 Z" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M30 20 C34 26 36 32 30 44" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
    <circle cx="36" cy="22" r="3" fill="url(#goldGrad)"/>
  </g>
  <!-- Text -->
  <text x="82" y="38" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="700" fill="#0F172A" letter-spacing="-0.02em">
    Clínica Maria Nutri
  </text>
  <text x="82" y="56" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="11" font-weight="500" fill="#0D9488" letter-spacing="0.08em">
    NUTRIÇÃO CLÍNICA & EMAGRECIMENTO
  </text>
</svg>`;

const dirs = [
  path.join(process.cwd(), 'public', 'assets', 'img'),
  path.join(process.cwd(), 'site', 'assets', 'img'),
  path.join(process.cwd(), 'site', 'assets', 'css'),
  path.join(process.cwd(), 'site', 'assets', 'js'),
];

dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

// Write Favicons
const fav16 = generateFavicon(16);
const fav32 = generateFavicon(32);
const fav180 = generateFavicon(180);
const logoPng = generateLogoPng(280, 80);

['public/assets/img', 'site/assets/img'].forEach(base => {
  fs.writeFileSync(path.join(base, 'favicon-16x16.png'), fav16);
  fs.writeFileSync(path.join(base, 'favicon-32x32.png'), fav32);
  fs.writeFileSync(path.join(base, 'apple-touch-icon.png'), fav180);
  fs.writeFileSync(path.join(base, 'logo.png'), logoPng);
  fs.writeFileSync(path.join(base, 'logo.svg'), logoSvg);

  // Placeholder images
  fs.writeFileSync(path.join(base, 'hero-bg.webp'), generatePlaceholderPng(1920, 800, '#0F172A'));
  fs.writeFileSync(path.join(base, 'sobre.webp'), generatePlaceholderPng(800, 600, '#0F766E'));
  fs.writeFileSync(path.join(base, 'servico-1.webp'), generatePlaceholderPng(600, 400, '#115E59'));
  fs.writeFileSync(path.join(base, 'servico-2.webp'), generatePlaceholderPng(600, 400, '#0F766E'));
  fs.writeFileSync(path.join(base, 'servico-3.webp'), generatePlaceholderPng(600, 400, '#0D9488'));
  fs.writeFileSync(path.join(base, 'depoimento-1.webp'), generatePlaceholderPng(200, 200, '#134E4A'));
  fs.writeFileSync(path.join(base, 'depoimento-2.webp'), generatePlaceholderPng(200, 200, '#134E4A'));
  fs.writeFileSync(path.join(base, 'depoimento-3.webp'), generatePlaceholderPng(200, 200, '#134E4A'));
});

console.log('Assets created successfully in public/ and site/');
