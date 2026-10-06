import fs from 'node:fs';
import path from 'node:path';

// Curated high-resolution professional Unsplash photography directly relevant to Clinical Nutrition & Weight Loss
const imageSources = {
  // 1. Hero background: Warm, bright luxury clinical office / modern consultation space
  'hero-bg.webp': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=85',
  
  // 2. Sobre: Professional, empathetic female clinical nutritionist in clinic
  'sobre.webp': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1000&q=85',
  
  // 3. Servico 1: Personalized consultation / clinical nutrition & healthy fresh meal
  'servico-1.webp': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85',
  
  // 4. Servico 2: 8-week real weight loss program, active wellness & lifestyle
  'servico-2.webp': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85',
  
  // 5. Servico 3: Bioimpedance / body composition / clinical biometric assessment
  'servico-3.webp': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85',
  
  // 6. Testimonial 1: Happy female patient portrait
  'depoimento-1.webp': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=85',
  
  // 7. Testimonial 2: Happy female patient portrait
  'depoimento-2.webp': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=85',
  
  // 8. Testimonial 3: Happy female patient portrait
  'depoimento-3.webp': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=85',
};

// Target directories
const targetDirs = [
  path.join(process.cwd(), 'public', 'assets', 'img'),
  path.join(process.cwd(), 'site', 'assets', 'img'),
  path.join(process.cwd(), 'dist', 'assets', 'img')
];

targetDirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function downloadImages() {
  console.log('Downloading real clinical photography for preview & Hostinger export...');
  
  for (const [filename, url] of Object.entries(imageSources)) {
    try {
      console.log(`Downloading ${filename}...`);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      for (const dir of targetDirs) {
        const dest = path.join(dir, filename);
        fs.writeFileSync(dest, buffer);
      }
      console.log(`✓ Saved ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${filename}:`, err.message);
    }
  }
  console.log('All image assets successfully synchronized!');
}

downloadImages();
