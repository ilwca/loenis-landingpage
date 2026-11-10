/**
 * Configuração central do site.
 * Tudo que está entre [COLCHETES] é placeholder: troque aqui e o site inteiro
 * (textos, SEO, schema.org e links de WhatsApp) é atualizado no próximo build.
 */
export const site = {
  name: 'Loenis',
  /** Domínio final, sem barra no fim. Também precisa ser trocado em astro.config.mjs. */
  url: 'https://www.loenis.com.br',
  /** Número no formato internacional, só dígitos: 55 + DDD + número. */
  whatsapp: '5500000000000',
  /** Como o número aparece escrito na página. */
  whatsappDisplay: '(00) 00000-0000',
  email: '[contato@loenis.com.br]',
  city: '[CIDADE]',
  state: '[UF]',
  /** Cidades atendidas, usadas no texto de área de atendimento e no schema.org. */
  areaServed: ['[CIDADE]', '[CIDADE VIZINHA 1]', '[CIDADE VIZINHA 2]'],
  /** Opcional: coordenadas da base de atendimento (SEO local). Deixe null se não quiser expor. */
  geo: null as null | { lat: number; lng: number },
  hours: 'Segunda a sábado, das 8h às 18h',
  /** Perfis oficiais (Instagram, Google Business Profile etc.). Entram no schema.org como sameAs. */
  social: [] as { label: string; url: string }[],
};

export const cityLabel = `${site.city} – ${site.state}`;
