// Contatos e redes: preencha para exibir os links no site (vazio = oculto).
// whatsapp: apenas dígitos com código do país e DDD, ex: "5566999999999"
export const site = {
  whatsapp: "",
  linkedin: "",
};

export type Project = {
  name: string;
  role: string;
  description: string;
  link: string;
  color: string;
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    name: "Aliança Inglesa",
    role: "Full-Stack & UX",
    description: "Landing page de altíssima performance focada em captação de leads. Combina design premium com técnicas pesadas de conversão local.",
    link: "https://alianca-inglesa.vercel.app",
    color: "#c3f400", // neon green
    metrics: [
      { label: "Usuários Ativos (7d)", value: "+1.089%" },
      { label: "Eventos Gerados", value: "2.6k" },
    ],
  },
  {
    name: "Olhar Estoico",
    role: "Frontend Engineering",
    description: "Plataforma projetada para máxima retenção visual, com foco na entrega de conteúdo filosófico através de uma experiência imersiva.",
    link: "https://olharestoico.com.br",
    color: "#e2e2e2", // light
  },
];

export type Stat = {
  value: string;
  title: string;
  description: string;
};

// Compromissos de entrega — não histórico. Trocar por métricas reais
// conforme os projetos gerarem dados verificáveis.
export const stats: Stat[] = [
  {
    value: "98+",
    title: "Google Lighthouse",
    description: "Meta mínima de performance, auditada pelo próprio Google, em todo site que entrego.",
  },
  {
    value: "100%",
    title: "Design exclusivo",
    description: "Nenhum template. Cada site é desenhado do zero para o seu negócio.",
  },
  {
    value: "<1s",
    title: "Primeiro carregamento",
    description: "Arquitetura moderna para o site abrir no ato — inclusive no 4G.",
  },
  {
    value: "24h",
    title: "Resposta garantida",
    description: "Todo pedido de orçamento respondido em até 24 horas úteis.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Uma conversa direta para entender seu negócio, seus clientes e o que o site precisa gerar: ligações, agendamentos ou vendas.",
  },
  {
    number: "02",
    title: "Design exclusivo",
    description: "Desenho o site do zero para a sua marca — você aprova o visual antes de qualquer linha de código.",
  },
  {
    number: "03",
    title: "Construção e lançamento",
    description: "Desenvolvimento com performance auditada pelo Google Lighthouse e SEO local configurado desde o primeiro dia.",
  },
  {
    number: "04",
    title: "Acompanhamento",
    description: "Site no ar não é o fim: ajustes finos e suporte para ele continuar rápido e vendendo.",
  },
];
