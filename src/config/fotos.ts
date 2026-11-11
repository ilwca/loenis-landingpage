/**
 * Fotos do site, cada uma em duas versões quadradas geradas por
 * `bash scripts/redimensionar-fotos.sh` a partir de fotos-originais/:
 *   desktop/ 1024x1024 — telas a partir de 900px
 *   mobile/   320x320  — celulares e tablets
 * Use pelo nome do arquivo, sem extensão: foto('placa-solar').
 */
import type { ImageMetadata } from 'astro';

type Mod = { default: ImageMetadata };
const desktop = import.meta.glob<Mod>('../assets/fotos/desktop/*.webp', { eager: true });
const mobile = import.meta.glob<Mod>('../assets/fotos/mobile/*.webp', { eager: true });

export interface Foto {
  desktop: ImageMetadata;
  mobile: ImageMetadata;
}

export function foto(nome: string): Foto {
  const d = desktop[`../assets/fotos/desktop/${nome}.webp`]?.default;
  const m = mobile[`../assets/fotos/mobile/${nome}.webp`]?.default;
  if (!d || !m) {
    throw new Error(`Foto "${nome}" não encontrada. Coloque-a em fotos-originais/ e rode scripts/redimensionar-fotos.sh`);
  }
  return { desktop: d, mobile: m };
}
