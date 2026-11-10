import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Troque pelo domínio final (o mesmo de src/config/site.ts).
export default defineConfig({
  site: 'https://www.loenis.com.br',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
