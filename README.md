# Loenis — landing page

Site estático em Astro, feito com o design system Loenis (`brand/`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/ (HTML puro, pronto para qualquer hospedagem)
```

## Antes de publicar

1. `src/config/site.ts`: WhatsApp, cidade, UF, cidades atendidas, e-mail, horário e redes.
2. `astro.config.mjs` e `site.url`: domínio final.
3. Rode `node scripts/make-images.mjs` se os logos mudarem (gera `og.png` e `apple-touch-icon.png`).
4. Cadastre o site no Google Search Console e envie `/sitemap-index.xml`.
5. Crie o Perfil da Empresa no Google com o mesmo nome, telefone e cidade do site e coloque o link em `site.social`.

## Onde mexer

- **Serviços, textos, mensagens de WhatsApp e FAQ**: `src/config/services.ts`. Cada `contexts[]` vira uma opção no card e um botão na página do serviço.
- **Fotos**: coloque em `src/assets/fotos/` e passe `src={import}` para `<PhotoPlaceholder>`. As legendas atuais dizem qual foto vai em cada lugar.
- **Conversão**: cliques no WhatsApp enviam o evento `whatsapp_click` para `dataLayer` e `generate_lead` para `gtag`, com serviço e contexto. É só adicionar o GTM ou o GA4 no `<head>` de `src/layouts/Base.astro`.
