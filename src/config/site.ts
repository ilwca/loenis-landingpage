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
  whatsapp: '556384888683',
  /** Como o número aparece escrito na página. */
  whatsappDisplay: '(63) 98488-8683',
  email: 'Loenis45@gmail.com',
  city: 'Paranã',
  state: 'Tocantins',
  /** Cidades atendidas, usadas no texto de área de atendimento e no schema.org. */
  areaServed: ['Paranã', 'Palmas', 'Campo Alegre', 'Região Sul do Tocantins'],
  /** Opcional: coordenadas da base de atendimento (SEO local). Deixe null se não quiser expor. */
  geo: null as null | { lat: number; lng: number },
  hours: '24 horas',
  /** Perfis oficiais (Instagram, Google Business Profile etc.). Entram no schema.org como sameAs. */
  social: [] as { label: string; url: string }[],
};

export const cityLabel = `${site.city} – ${site.state}`;
