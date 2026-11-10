// Gera public/og.png (1200x630) e public/apple-touch-icon.png (180x180) a partir dos logos.
// Rode de novo se os logos mudarem: node scripts/make-images.mjs
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const neg = readFileSync('public/logos/loenis-logo-negativo.svg', 'utf8');
const inner = neg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#14213a"/>
  <g transform="translate(820 260) scale(9)" opacity="1">
    <circle cx="32" cy="21" r="9" fill="#f2a900"/>
    <path d="M16.4 30A18 18 0 0 0 47.6 30M8.6 34.5A27 27 0 0 0 55.4 34.5" fill="none" stroke="#f2a900" stroke-width="4.5" stroke-linecap="round"/>
  </g>
  <g transform="translate(96 250) scale(2)">${inner}</g>
</svg>`;
await sharp(Buffer.from(og)).png().toFile('public/og.png');
await sharp(readFileSync('public/logos/loenis-mark.svg'), { density: 600 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('ok');
