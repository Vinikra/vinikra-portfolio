export type Project = {
  name: string;
  role: string;
  description: string;
  link: string;
  color: string;
};

export const projects: Project[] = [
  {
    name: "Aliança Inglesa",
    role: "Full-Stack & UX",
    description: "Landing page de altíssima performance focada em captação de leads. Combina design premium com técnicas pesadas de conversão local.",
    link: "https://alianca-inglesa.vercel.app",
    color: "#c3f400", // neon green
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

export const stats: Stat[] = [
  {
    value: "98+",
    title: "Google Lighthouse",
    description: "Core Web Vitals em estado de excelência garantido.",
  },
  {
    value: "40%",
    title: "Lower Bounce Rate",
    description: "Velocidade que retém o usuário desde o primeiro segundo.",
  },
  {
    value: "120ms",
    title: "Server Response",
    description: "Infraestrutura Edge para carregamento instantâneo.",
  },
  {
    value: "100%",
    title: "Design Customizado",
    description: "Visual exclusivo, sem templates ou atalhos.",
  },
];
