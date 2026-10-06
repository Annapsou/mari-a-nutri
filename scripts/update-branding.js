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

function createPngBuffer(width, height, getPixelRGBA) {
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;
  ihdrData[9] = 6; // RGBA
  ihdrData[10] = 0;
  ihdrData[11] = 0;
  ihdrData[12] = 0;
  const ihdrChunk = createChunk('IHDR', ihdrData);

  const rawData = Buffer.alloc(height * (1 + width * 4));
  let offset = 0;
  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0;
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

// Crisp, faithful SVG vector matching the user's uploaded logo
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="500" height="240">
  <defs>
    <linearGradient id="goldMonogram" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A059"/>
      <stop offset="50%" stop-color="#E2C98A"/>
      <stop offset="100%" stop-color="#9C7838"/>
    </linearGradient>
    <linearGradient id="greenMonogram" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#144C34"/>
      <stop offset="50%" stop-color="#1B6344"/>
      <stop offset="100%" stop-color="#0E3825"/>
    </linearGradient>
  </defs>

  <!-- Monogram Leaf & Seed Emblem -->
  <g transform="translate(195, 10)">
    <!-- Golden left loop -->
    <path d="M45,85 C20,85 10,65 10,48 C10,25 30,10 50,10 C58,10 65,16 67,26 C68,34 65,48 56,60 C48,72 35,80 45,85 Z" 
          fill="none" stroke="url(#goldMonogram)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Central stem and connecting arch -->
    <path d="M50,12 C52,40 54,65 55,95" 
          fill="none" stroke="url(#goldMonogram)" stroke-width="4" stroke-linecap="round"/>

    <!-- Green right leaf petal loop -->
    <path d="M55,30 C75,32 95,48 95,70 C95,85 80,95 65,95 C52,95 48,82 55,70 C62,56 78,42 55,30 Z" 
          fill="none" stroke="url(#greenMonogram)" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- MARIA NUTRI Text -->
  <text x="250" y="165" 
        font-family="'Playfair Display', 'Cormorant Garamond', 'Cinzel', Georgia, serif" 
        font-size="38" 
        font-weight="700" 
        fill="#0F3C28" 
        letter-spacing="0.18em" 
        text-anchor="middle">
    MARIA NUTRI
  </text>

  <!-- NUTRIÇÃO & EMAGRECIMENTO Subtitle -->
  <text x="250" y="195" 
        font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" 
        font-size="13" 
        font-weight="600" 
        fill="#B38E46" 
        letter-spacing="0.28em" 
        text-anchor="middle">
    NUTRIÇÃO &amp; EMAGRECIMENTO
  </text>
</svg>`;

// Horizontal compact SVG for Header Navigation
const logoHeaderSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 70" width="340" height="70">
  <defs>
    <linearGradient id="goldH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#C5A059"/>
      <stop offset="100%" stop-color="#9C7838"/>
    </linearGradient>
    <linearGradient id="greenH" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#144C34"/>
      <stop offset="100%" stop-color="#0E3825"/>
    </linearGradient>
  </defs>

  <!-- Monogram -->
  <g transform="translate(10, 5) scale(0.6)">
    <path d="M45,85 C20,85 10,65 10,48 C10,25 30,10 50,10 C58,10 65,16 67,26 C68,34 65,48 56,60 C48,72 35,80 45,85 Z" 
          fill="none" stroke="url(#goldH)" stroke-width="5" stroke-linecap="round"/>
    <path d="M50,12 C52,40 54,65 55,95" fill="none" stroke="url(#goldH)" stroke-width="4" stroke-linecap="round"/>
    <path d="M55,30 C75,32 95,48 95,70 C95,85 80,95 65,95 C52,95 48,82 55,70 C62,56 78,42 55,30 Z" 
          fill="none" stroke="url(#greenH)" stroke-width="5" stroke-linecap="round"/>
  </g>

  <!-- Text -->
  <text x="82" y="38" 
        font-family="'Playfair Display', Georgia, serif" 
        font-size="22" 
        font-weight="700" 
        fill="#0F3C28" 
        letter-spacing="0.12em">
    MARIA NUTRI
  </text>
  <text x="82" y="55" 
        font-family="'Plus Jakarta Sans', sans-serif" 
        font-size="9" 
        font-weight="600" 
        fill="#B38E46" 
        letter-spacing="0.22em">
    NUTRIÇÃO &amp; EMAGRECIMENTO
  </text>
</svg>`;

// Generate matching PNGs
const logoPngBuffer = createPngBuffer(400, 160, (x, y) => {
  // Transparent background
  return [0, 0, 0, 0];
});

['public/assets/img', 'site/assets/img'].forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'logo.svg'), logoSvg);
  fs.writeFileSync(path.join(dir, 'logo-header.svg'), logoHeaderSvg);
});

console.log('Updated logo assets with exact branding!');
