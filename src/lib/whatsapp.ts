import { site } from '../config/site';

/** Monta o link wa.me com a mensagem pré-preenchida. */
export function waLink(message = 'Olá, Loenis. Vim pelo site e quero um orçamento.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Troca o marcador {cidade} pelos dados de config. */
export const withCity = (text: string) => text.replaceAll('{cidade}', `${site.city} – ${site.state}`);
