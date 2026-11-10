Loenis é a marca do técnico Loenis, que leva o nome pelo qual os clientes já o conhecem. Ele atende em seis frentes: elétrica residencial e industrial, energia solar on-grid e off-grid, assistência técnica de TI, Starlink (técnico homologado), bombeamento de água solar e infraestrutura de redes. A identidade junta as duas coisas que atravessam todos esses serviços — a energia e o sinal — e deve passar confiança técnica com cara de gente próxima: uma pessoa que atende, explica e resolve.

## Voz e texto

- Escreva em primeira pessoa do singular e trate o cliente por "você": "Faço o projeto e a instalação", não "Nossa equipe realiza".
- Frases curtas, em português claro. Explique o termo técnico na primeira vez: "5 kWp (cerca de 600 kWh por mês)".
- Prometa com números e prazos, não com adjetivos: "Instalado em 2 dias", "Garantia de 12 meses na instalação".
- Títulos em caixa normal, só a primeira letra maiúscula. Maiúsculas apenas no estilo `label`.
- Sem emoji e sem pontos de exclamação em propostas e orçamentos. No WhatsApp e nas redes, no máximo um por mensagem.
- Escreva o nome sempre "Loenis", só com a inicial maiúscula.
- Nomes de serviço, sempre iguais e nesta ordem: Elétrica residencial e industrial · Energia solar on-grid e off-grid · Assistência técnica de TI · Starlink · Bombeamento de água solar · Infraestrutura de redes.
- Ao citar Starlink, acompanhe com "técnico homologado" na primeira menção. Starlink é marca de terceiros: escreva o nome em texto, sem usar o logo dela como se fosse da Loenis.

## Cores

- Fundo de página em `surface`; cartões e campos em `surface-raised` com borda `line`.
- Texto em `ink`; texto secundário em `ink-muted`.
- `brand` (âmbar) é a cor da marca: um destaque por tela ou peça — o botão principal, um bloco de cor, o disco do símbolo. O texto sobre `brand` é sempre `ink`.
- Para texto ou link na cor da marca sobre fundo claro, use `brand-strong`, nunca `brand`.
- `signal` (azul) marca links, foco e conteúdo de conectividade (Starlink, redes, TI). Não combine `signal` e `brand` como preenchimento no mesmo componente.
- Peças escuras (uniforme, adesivo, rodapé): fundo `ink`, texto em `surface`, destaque em `brand`.
- `success` e `danger` só indicam estado e vêm sempre com palavra ou ícone ("Instalado", "Falha na rede").
- Anel de foco: 2px sólido em `signal`, afastado 2px; sobre fundo `ink`, em `brand`.

## Tipografia

- Títulos em Archivo (`display`, `title`, `heading`); texto em Public Sans (`body`, `body-strong`, `caption`, `label`).
- Um `display` por peça. Números de destaque (kWp, Mbps, litros/dia, pontos de rede) usam `title` ou `display`, com a unidade em `body-strong`.
- Alinhe à esquerda. Linhas de texto com no máximo 70 caracteres.

## Forma e espaço

- Espaços só da escala: `space-2`, `space-4`, `space-6`, `space-12`.
- Cantos: `radius-md` em botões, campos e cartões; `radius-sm` em selos; `radius-lg` em blocos grandes de cor e fotos.
- Sem sombras e sem degradês: separe superfícies com a borda `line` ou com mudança de cor de fundo.
- O grafismo da marca é o do símbolo: um disco e arcos concêntricos (sol e sinal). Use-o grande, cortado pela borda da peça, em `brand` sobre `ink` ou em `ink` sobre `brand`.

## Logo

- Use os arquivos do grupo Logos sem redesenhar: `loenis-logo.svg` em fundos claros, `loenis-logo-negativo.svg` sobre `ink` ou foto escura, `loenis-mark.svg` e `loenis-mark-ambar.svg` quando só couber o símbolo (avatar, favicon, boné).
- Área de respiro: a altura do disco em todos os lados. Altura mínima do símbolo: 24px na tela, 8mm impresso.
- Não mude as cores, não incline, não aplique contorno nem sombra, não coloque sobre `signal`.

## Fotografia e ícones

- Fotos reais dos serviços feitos: telhado com placas, quadro elétrico montado, antena instalada, rack de rede organizado, bomba em funcionamento, o Loenis trabalhando com EPI. Luz do dia, sem filtros; evite banco de imagens.
- Ícones de traço simples, 2px, pontas arredondadas, em `ink` (biblioteca Lucide). O sistema ainda não inclui um conjunto próprio de ícones.
