export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Specialty = {
  id: 'oftalmologia' | 'dermatologia';
  title: string;
  eyebrow: string;
  description: string;
  conditions: string[];
};

export type Service = {
  id: 'clinica-geral' | 'oftalmologia' | 'vacinas' | 'banho-e-tosa' | 'dermatologia' | 'exames';
  title: string;
  description: string;
  icon: 'stethoscope' | 'eye' | 'skin' | 'exam' | 'vaccine' | 'grooming';
  image: {
    src: string;
    alt: string;
  };
  layout: 'feature' | 'wide' | 'standard';
};

export type Testimonial = {
  name: string;
  context: string;
  text: string;
};

const whatsappMessage =
  'Olá! Vim pelo site e gostaria de agendar uma consulta na Neo Vet. Poderiam me passar os horários disponíveis?';

export const clinic = {
  name: 'Neo Vet',
  fullName: 'Neo Vet — Clínica Veterinária',
  tagline: 'Cuidado especializado para o seu pet',
  phoneDisplay: '(19) 3281-7003',
  phoneHref: 'tel:+551932817003',
  whatsappMessage,
  whatsappHref: `https://wa.me/551932817003?text=${encodeURIComponent(whatsappMessage)}`,
  instagramLabel: '@neovet_clinica_veterinaria',
  instagramHref: 'https://www.instagram.com/neovet_clinica_veterinaria',
  address: {
    street: 'Alberto Bosco, 173',
    neighborhood: 'Nova Aparecida',
    cityState: 'Campinas, SP',
    cep: '13068-627',
    full: 'Alberto Bosco, 173 — Nova Aparecida, Campinas/SP',
    mapsHref:
      'https://www.google.com/maps/search/?api=1&query=Alberto%20Bosco%20173%20Nova%20Aparecida%20Campinas%20SP%2013068-627',
    embedHref:
      'https://www.google.com/maps?q=Alberto%20Bosco%20173%20Nova%20Aparecida%20Campinas%20SP%2013068-627&output=embed',
  },
  hours: [
    { day: 'Segunda a Sexta', time: '08:30 – 18:00' },
    { day: 'Sábado', time: '08:00 – 12:00' },
    { day: 'Domingo', time: 'Fechado' },
  ],
} as const;

export const siteMetadata = {
  title: 'Neo Vet — Clínica Veterinária | Oftalmologia e Dermatologia em Campinas',
  description:
    'Clínica veterinária especializada em Oftalmologia e Dermatologia para cães e gatos em Campinas, SP. Agendamentos pelo WhatsApp: (19) 3281-7003.',
  keywords: [
    'clínica veterinária',
    'oftalmologia veterinária',
    'dermatologia veterinária',
    'Campinas',
    'cães',
    'gatos',
  ],
  openGraph: {
    title: 'Neo Vet — Oftalmologia e Dermatologia Veterinária',
    description: 'Cuidado especializado para cães e gatos em Campinas, SP.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export const siteCopy = {
  logoAlt: 'Logo da Neo Vet',
  header: {
    clinicSubtitle: 'Clínica Veterinária',
    desktopCta: 'Agendar via WhatsApp',
    mobileCta: 'Agendar via WhatsApp',
    desktopNavAria: 'Navegação principal',
    mobileNavAria: 'Navegação em dispositivos móveis',
    openMenuAria: 'Abrir menu',
    closeMenuAria: 'Fechar menu',
  },
  hero: {
    title: 'Saúde ocular e dermatológica para cães e gatos',
    description:
      'Atendimento veterinário especializado em Campinas, com clínica geral, exames, vacinas e cuidado próximo para proteger a visão, a pele e o bem-estar do seu pet.',
    primaryCta: 'Agendar pelo WhatsApp',
    secondaryCta: 'Saiba mais',
  },
  specialties: {
    eyebrow: 'Especialidades',
    title: 'Cuidado técnico para sinais que merecem atenção',
    description:
      'Olhos, pele e ouvidos exigem avaliação cuidadosa. Na Neo Vet, cada consulta busca entender a causa do desconforto e conduzir o tratamento com clareza.',
  },
  services: {
    eyebrow: 'Serviços',
    title: 'Uma clínica completa para o cuidado diário e especializado',
    description:
      'Do acompanhamento preventivo às especialidades, a Neo Vet reúne serviços essenciais para cães e gatos em um atendimento claro, cuidadoso e próximo.',
    badge: 'Atendimento integrado',
    previousAria: 'Ver serviço anterior',
    nextAria: 'Ver próximo serviço',
  },
  about: {
    eyebrow: 'Sobre a Neo Vet',
    title: 'Especialização com acolhimento em cada consulta',
    description:
      'A Neo Vet é uma clínica veterinária em Campinas dedicada ao cuidado de cães e gatos, com atenção especial à oftalmologia e à dermatologia. Nosso atendimento une precisão clínica, comunicação transparente e respeito ao vínculo entre tutor e pet.',
    secondaryDescription:
      'Da prevenção aos casos que pedem investigação mais detalhada, buscamos conduzir cada etapa com segurança, carinho e foco no bem-estar.',
    imageEyebrow: 'Neo Vet Campinas',
    imageTitle: 'Precisão clínica com acolhimento de verdade.',
    badges: ['Atendimento especializado', 'Cuidado integral', 'Escuta cuidadosa'],
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Entre em contato para agendar sua consulta',
    description:
      'O agendamento é feito exclusivamente por telefone ou WhatsApp. Fale com a equipe da Neo Vet e encontre o melhor horário para o atendimento do seu pet.',
    whatsappCta: 'Agendar pelo WhatsApp',
    locationTitle: 'Localização',
    mapsCta: 'Abrir no Google Maps',
    mapTitle: 'Mapa com a localização da Neo Vet em Campinas',
    hoursTitle: 'Horário de Atendimento',
    addressTitle: 'Endereço',
  },
  testimonials: {
    eyebrow: 'O que dizem nossos clientes',
    title: 'Depoimentos de Confiança',
  },
  footer: {
    copyright: '© 2026 Neo Vet Clínica Veterinária. Todos os direitos reservados.',
    whatsappLabel: 'WhatsApp',
    instagramLabel: 'Instagram',
    agency: {
      developedBy: 'Desenvolvido com ❤️ & ☕ pela ',
      developerName: 'TAKOA',
      developerUrl: 'https://takoadigital.com',
    },
  },
  floatingWhatsApp: {
    ariaLabel: 'Agendar consulta pelo WhatsApp',
  },
} as const;

export const navItems: NavItem[] = [
  { label: 'Início', href: '#inicio' },

  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export const specialties: Specialty[] = [
  {
    id: 'oftalmologia',
    title: 'Oftalmologia',
    eyebrow: 'Olhos saudáveis, mais conforto no dia a dia',
    description:
      'Avaliação especializada para prevenir, diagnosticar e tratar alterações oculares em cães e gatos com cuidado técnico e acolhedor.',
    conditions: ['Catarata', 'Conjuntivite', 'Glaucoma', 'Úlceras de córnea'],
  },
  {
    id: 'dermatologia',
    title: 'Dermatologia',
    eyebrow: 'Pele, pelagem e ouvidos com atenção integral',
    description:
      'Investigação clínica para coceiras, alergias e infecções recorrentes, buscando alívio, controle e qualidade de vida.',
    conditions: ['Alergias', 'Infecções de pele', 'Otite', 'Queda de pelos'],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Valéria Francisqueti',
    context: 'Tutora de Pug',
    text: 'Meu Pug foi muito bem cuidado, fez cirurgia nos dois olhos, saiu de lá super bem, agradeço toda equipe do Dr Eduardo, saímos de Santa Bárbara do Oeste para fazer esse procedimento e valeu muito a pena ❤️',
  },
  {
    name: 'Waldenice Silveira',
    context: 'Tutora',
    text: 'Meu bebê fez cirurgia do olho cereja e limpeza de tártaro, sempre fomos bem atendidos por todos, inclusive pelo WhatsApp.',
  },
  {
    name: 'Daniel Furlan',
    context: 'Tutor de American Bully',
    text: 'Excelente profissional, tirou meu American Bully de uma crise alérgica muito grave. Muito obrigado!',
  },
];

export const siteImages = {
  hero: {
    src: '/hero.webp',
    alt: 'Veterinário examinando o olho de um gato branco em clínica veterinária',
  },
  about: {
    src: '/about.webp',
    alt: 'Veterinário acolhendo um cão durante consulta clínica',
  },
} as const;

export const services: Service[] = [
  {
    id: 'clinica-geral',
    title: 'Clínica Geral',
    description:
      'Consultas de rotina, acompanhamento preventivo e orientação para todas as fases da vida.',
    icon: 'stethoscope',
    image: {
      src: '/clinicageral.webp',
      alt: 'Veterinários avaliando um cão em consulta de rotina',
    },
    layout: 'feature',
  },
  {
    id: 'oftalmologia',
    title: 'Oftalmologia',
    description:
      'Atendimento especializado para alterações nos olhos, visão e estruturas oculares.',
    icon: 'eye',
    image: {
      src: '/oftalmologia.webp',
      alt: 'Exame oftalmológico em gato realizado por veterinário',
    },
    layout: 'standard',
  },
  {
    id: 'vacinas',
    title: 'Vacinas',
    description:
      'Protocolos de vacinação para proteger cães e gatos com responsabilidade.',
    icon: 'vaccine',
    image: {
      src: '/vacinas.webp',
      alt: 'Cão recebendo vacina em ambiente clínico veterinário',
    },
    layout: 'wide',
  },
  {
    id: 'banho-e-tosa',
    title: 'Banho e Tosa',
    description:
      'Higiene e cuidado estético com atenção ao conforto e à segurança do pet.',
    icon: 'grooming',
    image: {
      src: '/banhoetosa.webp',
      alt: 'Cão tomando banho em estação profissional de banho e tosa',
    },
    layout: 'wide',
  },
  {
    id: 'dermatologia',
    title: 'Dermatologia',
    description:
      'Cuidado para pele, pelagem e ouvidos, com foco em conforto e bem-estar contínuo.',
    icon: 'skin',
    image: {
      src: '/dermatologia.webp',
      alt: 'Veterinário examinando a orelha de um cão',
    },
    layout: 'standard',
  },
  {
    id: 'exames',
    title: 'Exames',
    description:
      'Apoio diagnóstico para decisões clínicas mais seguras e acompanhamento preciso.',
    icon: 'exam',
    image: {
      src: '/exames.webp',
      alt: 'Gato recebendo cuidado clínico durante exame veterinário',
    },
    layout: 'wide',
  },
];
