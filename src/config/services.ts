/**
 * Os seis serviços, na ordem fixa definida pelo design system.
 * Cada `context` vira um atalho no card: abre o WhatsApp com a mensagem já escrita,
 * para o Loenis saber de cara o que o cliente precisa.
 */
import { foto, type Foto } from './fotos';

export type IconName =
  | 'zap'
  | 'sun-medium'
  | 'laptop-minimal'
  | 'satellite-dish'
  | 'droplets'
  | 'network';

export interface ServiceContext {
  id: string;
  label: string;
  message: string;
}

export interface Service {
  slug: string;
  name: string;
  /** Nome curto para menus e breadcrumbs. */
  short: string;
  /** Como o serviço aparece no meio de uma frase ("Dúvidas sobre …"). */
  topic: string;
  icon: IconName;
  /** `signal` para conectividade (Starlink, redes, TI), `brand` para energia. */
  tone: 'brand' | 'signal';
  label: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  intro: string[];
  includes: string[];
  contexts: ServiceContext[];
  faq: { q: string; a: string }[];
  /** Sem `src`, aparece o placeholder "Foto em breve". */
  photos: { caption: string; src?: Foto }[];
}

export const services: Service[] = [
  {
    slug: 'eletricista',
    name: 'Elétrica residencial e industrial',
    short: 'Elétrica',
    topic: 'elétrica',
    icon: 'zap',
    tone: 'brand',
    label: 'ELÉTRICA',
    summary:
      'Instalação, reforma e manutenção elétrica em casas, comércios e indústrias. Quadros, tomadas, iluminação e motores.',
    seoTitle: 'Eletricista residencial e industrial',
    seoDescription:
      'Eletricista em {cidade} para casas, comércios e indústrias: instalação, quadro de distribuição, troca de fiação, iluminação e manutenção. Orçamento pelo WhatsApp.',
    intro: [
      'Faço instalações novas, reformas e manutenção elétrica, do chuveiro que desarma ao quadro de comando de uma máquina.',
      'Antes de começar, explico o que vou fazer, o material necessário e o valor. Sem surpresa na conta.',
    ],
    includes: [
      'Montagem e troca de quadro de distribuição e disjuntores',
      'Troca de fiação antiga e aumento de carga',
      'Tomadas, iluminação, chuveiros e ar-condicionado',
      'Instalação e manutenção de motores e quadros de comando',
      'Aterramento e proteção contra surtos (DPS)',
      'Busca de curto-circuito e disjuntor que desarma',
    ],
    contexts: [
      { id: 'orcamento', label: 'Orçamento de instalação', message: 'Olá, Loenis. Vim pelo site e quero um orçamento de instalação elétrica.' },
      { id: 'urgencia', label: 'Problema agora', message: 'Olá, Loenis. Vim pelo site e estou com um problema elétrico agora. Pode me atender?' },
      { id: 'industrial', label: 'Empresa ou indústria', message: 'Olá, Loenis. Vim pelo site e preciso de um eletricista para minha empresa.' },
    ],
    faq: [
      { q: 'Você atende emergências?', a: 'Sim. Me chame no WhatsApp explicando o que aconteceu e, se der, mande uma foto do quadro. Respondo com a previsão de chegada.' },
      { q: 'O orçamento é cobrado?', a: 'Para serviços simples, passo o valor pelo WhatsApp com fotos. Para obras maiores, faço uma visita técnica antes e combinamos o valor.' },
      { q: 'Atende empresas com nota fiscal?', a: 'Sim. Me diga o tipo de serviço e os dados da empresa na conversa.' },
    ],
    photos: [
      { caption: 'Quadro de distribuição montado e identificado' },
      { caption: 'Instalação de iluminação em residência' },
      { caption: 'Quadro de comando industrial' },
    ],
  },
  {
    slug: 'energia-solar',
    name: 'Energia solar on-grid e off-grid',
    short: 'Energia solar',
    topic: 'energia solar',
    icon: 'sun-medium',
    tone: 'brand',
    label: 'ENERGIA SOLAR',
    summary:
      'Projeto, instalação e homologação de sistemas fotovoltaicos ligados à rede (on-grid) ou com baterias (off-grid).',
    seoTitle: 'Energia solar on-grid e off-grid',
    seoDescription:
      'Instalação de energia solar em {cidade}: sistemas on-grid e off-grid, projeto, homologação na concessionária e manutenção de placas. Simulação pelo WhatsApp.',
    intro: [
      'Dimensiono o sistema pela sua conta de luz, faço o projeto, a instalação e a homologação junto à concessionária.',
      'On-grid é ligado à rede e gera créditos na sua conta. Off-grid funciona com baterias, para lugares sem rede ou que não podem ficar sem energia.',
    ],
    includes: [
      'Simulação a partir da sua conta de luz',
      'Projeto e homologação na concessionária',
      'Instalação em telhado, laje ou solo',
      'Sistemas off-grid com baterias para sítios e fazendas',
      'Limpeza, revisão e reparo de sistemas já instalados',
    ],
    contexts: [
      { id: 'simulacao', label: 'Simular economia', message: 'Olá, Loenis. Vim pelo site e quero simular um sistema de energia solar. Posso mandar minha conta de luz?' },
      { id: 'offgrid', label: 'Off-grid (sem rede)', message: 'Olá, Loenis. Vim pelo site e preciso de um sistema solar off-grid, com baterias.' },
      { id: 'manutencao', label: 'Já tenho, quero manutenção', message: 'Olá, Loenis. Vim pelo site. Já tenho energia solar e preciso de manutenção ou revisão.' },
    ],
    faq: [
      { q: 'O que preciso mandar para a simulação?', a: 'Uma foto da conta de luz mais recente, com o histórico de consumo, e o endereço do imóvel.' },
      { q: 'Qual a diferença entre on-grid e off-grid?', a: 'On-grid fica ligado à rede da concessionária e o que sobra vira crédito na conta. Off-grid usa baterias e não depende da rede.' },
      { q: 'Você cuida da homologação?', a: 'Sim. Faço o projeto e acompanho o pedido na concessionária até a troca do medidor.' },
    ],
    photos: [
      { caption: 'Telhado com placas solares instaladas', src: foto('placa-solar') },
      { caption: 'Inversor e quadros de proteção com cabos em conduíte', src: foto('inversor3') },
      { caption: 'Sistema off-grid com bateria de lítio', src: foto('inversor') },
      { caption: 'Dois inversores e quadro de proteção', src: foto('inversor2') },
    ],
  },
  {
    slug: 'assistencia-tecnica-ti',
    name: 'Assistência técnica de TI',
    short: 'TI',
    topic: 'TI',
    icon: 'laptop-minimal',
    tone: 'signal',
    label: 'TI',
    summary:
      'Formatação, manutenção e configuração de computadores, notebooks, impressoras e câmeras, em casa ou na empresa.',
    seoTitle: 'Assistência técnica de TI e informática',
    seoDescription:
      'Assistência técnica de informática em {cidade}: formatação, notebook lento, troca de peças, impressoras, câmeras e suporte para empresas. Atendimento pelo WhatsApp.',
    intro: [
      'Resolvo computador lento, que não liga ou que precisa de formatação, e configuro impressoras, câmeras e o que mais estiver na rede.',
      'Para empresas, faço o suporte do dia a dia para a equipe não parar.',
    ],
    includes: [
      'Formatação e instalação de programas',
      'Troca de SSD, memória e outras peças',
      'Limpeza interna e troca de pasta térmica',
      'Configuração de impressoras e câmeras de segurança',
      'Suporte técnico para pequenas empresas',
    ],
    contexts: [
      { id: 'reparo', label: 'Computador com problema', message: 'Olá, Loenis. Vim pelo site e meu computador está com problema.' },
      { id: 'empresa', label: 'Suporte para empresa', message: 'Olá, Loenis. Vim pelo site e preciso de suporte de TI para minha empresa.' },
      { id: 'cameras', label: 'Câmeras e impressoras', message: 'Olá, Loenis. Vim pelo site e preciso instalar ou configurar câmeras ou impressoras.' },
    ],
    faq: [
      { q: 'Você atende em domicílio?', a: 'Sim. Dependendo do problema, resolvo no local ou levo o equipamento e devolvo pronto.' },
      { q: 'Perco meus arquivos na formatação?', a: 'Não, se der para acessar o disco. Faço o backup antes e devolvo tudo no lugar.' },
    ],
    photos: [
      { caption: 'Notebook em manutenção na bancada' },
      { caption: 'Troca de SSD em computador' },
    ],
  },
  {
    slug: 'instalacao-starlink',
    name: 'Starlink',
    short: 'Starlink',
    topic: 'Starlink',
    icon: 'satellite-dish',
    tone: 'signal',
    label: 'STARLINK',
    summary:
      'Técnico homologado Starlink. Instalação da antena em mastro ou telhado, passagem de cabo e Wi-Fi em toda a propriedade.',
    seoTitle: 'Instalação de Starlink – técnico homologado',
    seoDescription:
      'Técnico homologado Starlink em {cidade} e zona rural: instalação da antena em mastro ou telhado, passagem de cabo, ampliação de Wi-Fi e suporte. Agende pelo WhatsApp.',
    intro: [
      'Sou técnico homologado Starlink. Escolho o ponto com céu livre, fixo a antena em mastro ou telhado e passo o cabo com acabamento.',
      'Se a casa ou a fazenda for grande, levo o sinal para onde você precisa com roteadores e cabos de rede.',
    ],
    includes: [
      'Análise do local e escolha do ponto da antena',
      'Fixação em mastro, telhado ou parede',
      'Passagem de cabo com acabamento',
      'Ampliação do Wi-Fi para toda a propriedade',
      'Revisão de instalações com queda de sinal',
    ],
    contexts: [
      { id: 'instalar', label: 'Instalar minha antena', message: 'Olá, Loenis. Vim pelo site e quero agendar a instalação da minha Starlink.' },
      { id: 'rural', label: 'Fazenda ou zona rural', message: 'Olá, Loenis. Vim pelo site e preciso instalar Starlink em uma propriedade rural.' },
      { id: 'sinal', label: 'Sinal caindo', message: 'Olá, Loenis. Vim pelo site. Minha Starlink está com queda de sinal ou obstrução.' },
    ],
    faq: [
      { q: 'Preciso já ter o kit Starlink?', a: 'Sim, a instalação é feita com o kit que você comprou. Se ainda não comprou, posso orientar sobre o tipo de suporte e cabo.' },
      { q: 'Atende zona rural?', a: 'Sim. Me mande a localização no WhatsApp para eu passar o valor do deslocamento.' },
    ],
    photos: [
      { caption: 'Kit Starlink pronto para instalar', src: foto('starlink') },
      { caption: 'Antena de internet via satélite instalada no telhado', src: foto('internet-satelite') },
    ],
  },
  {
    slug: 'bombeamento-solar',
    name: 'Bombeamento de água solar',
    short: 'Bombeamento solar',
    topic: 'bombeamento solar',
    icon: 'droplets',
    tone: 'brand',
    label: 'BOMBEAMENTO SOLAR',
    summary:
      'Bomba d’água movida a energia solar para poço, açude e irrigação. Sem conta de luz e sem rede elétrica.',
    seoTitle: 'Bombeamento de água solar',
    seoDescription:
      'Bombeamento de água com energia solar em {cidade}: bomba solar para poço, açude, bebedouro e irrigação, sem rede elétrica. Dimensionamento pelo WhatsApp.',
    intro: [
      'Instalo bombas movidas a placas solares para tirar água de poço, açude ou rio, sem depender da rede elétrica.',
      'Dimensiono pela profundidade, pela distância até a caixa e pela quantidade de água que você precisa por dia.',
    ],
    includes: [
      'Dimensionamento da bomba e das placas',
      'Instalação em poço artesiano, semiartesiano ou superfície',
      'Abastecimento de caixa d’água, bebedouro e irrigação',
      'Manutenção e troca de bombas',
    ],
    contexts: [
      { id: 'poco', label: 'Tenho um poço', message: 'Olá, Loenis. Vim pelo site e quero bombeamento solar para um poço.' },
      { id: 'irrigacao', label: 'Irrigação ou bebedouro', message: 'Olá, Loenis. Vim pelo site e preciso de bombeamento solar para irrigação ou bebedouro.' },
      { id: 'manutencao', label: 'Bomba com problema', message: 'Olá, Loenis. Vim pelo site e minha bomba solar está com problema.' },
    ],
    faq: [
      { q: 'O que preciso informar para o orçamento?', a: 'A profundidade do poço, a distância e a altura até a caixa d’água e quantos litros por dia você precisa.' },
      { q: 'Funciona em dia nublado?', a: 'Bombeia menos. Por isso dimensiono a caixa d’água para guardar a reserva dos dias de pouco sol.' },
    ],
    photos: [
      { caption: 'Placas solares ligadas à bomba do poço' },
      { caption: 'Caixa d’água abastecida por bomba solar' },
    ],
  },
  {
    slug: 'infraestrutura-de-redes',
    name: 'Infraestrutura de redes',
    short: 'Redes',
    topic: 'redes',
    icon: 'network',
    tone: 'signal',
    label: 'REDES',
    summary:
      'Cabeamento estruturado, racks, Wi-Fi e pontos de rede para casas, escritórios e galpões.',
    seoTitle: 'Infraestrutura de redes e cabeamento estruturado',
    seoDescription:
      'Infraestrutura de redes em {cidade}: cabeamento estruturado, organização de rack, pontos de rede, Wi-Fi para casas, escritórios e galpões. Orçamento pelo WhatsApp.',
    intro: [
      'Monto a rede do zero ou organizo a que já existe: cabos identificados, rack arrumado e Wi-Fi chegando em todos os cômodos.',
      'Uma rede bem feita evita queda de internet, câmera offline e sistema travando.',
    ],
    includes: [
      'Passagem de cabos e pontos de rede',
      'Montagem e organização de rack',
      'Wi-Fi para casas grandes, escritórios e galpões',
      'Configuração de roteadores e switches',
      'Rede para câmeras de segurança',
    ],
    contexts: [
      { id: 'nova', label: 'Rede nova', message: 'Olá, Loenis. Vim pelo site e preciso montar uma rede nova.' },
      { id: 'wifi', label: 'Wi-Fi não chega', message: 'Olá, Loenis. Vim pelo site e meu Wi-Fi não chega em todos os lugares.' },
      { id: 'organizar', label: 'Organizar rack', message: 'Olá, Loenis. Vim pelo site e preciso organizar o rack e os cabos da rede.' },
    ],
    faq: [
      { q: 'Você faz rede em empresa funcionando?', a: 'Sim. Combino o horário para a troca não atrapalhar o expediente.' },
      { q: 'Preciso comprar o material antes?', a: 'Não. Passo a lista e o valor com material incluso, ou só a mão de obra, como você preferir.' },
    ],
    photos: [
      { caption: 'Rack de rede organizado e identificado' },
      { caption: 'Pontos de rede instalados em escritório' },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
