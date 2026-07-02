"use client";

import { motion } from "framer-motion";

const projects = [
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
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Stats Section FORGE style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <p className="text-on-surface-variant text-sm font-semibold mb-2 uppercase tracking-widest">01 — By the numbers</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl text-foreground">O que entregamos em cada projeto.</h2>
          </div>
          <div className="text-on-surface-variant text-sm uppercase tracking-widest font-semibold border border-white/10 px-4 py-2 rounded-full">
            Snapshot — Q4 2024
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 mb-32">
          <div>
            <span className="font-display text-6xl font-black leading-none block mb-4 text-primary-container">98+</span>
            <h3 className="font-display text-xl font-bold mb-2 text-foreground">Google Lighthouse</h3>
            <p className="text-on-surface-variant text-base">Core Web Vitals em estado de excelência garantido.</p>
          </div>
          <div>
            <span className="font-display text-6xl font-black leading-none block mb-4 text-primary-container">40%</span>
            <h3 className="font-display text-xl font-bold mb-2 text-foreground">Lower Bounce Rate</h3>
            <p className="text-on-surface-variant text-base">Velocidade que retém o usuário desde o primeiro segundo.</p>
          </div>
          <div>
            <span className="font-display text-6xl font-black leading-none block mb-4 text-primary-container">120ms</span>
            <h3 className="font-display text-xl font-bold mb-2 text-foreground">Server Response</h3>
            <p className="text-on-surface-variant text-base">Infraestrutura Edge para carregamento instantâneo.</p>
          </div>
          <div>
            <span className="font-display text-6xl font-black leading-none block mb-4 text-primary-container">100%</span>
            <h3 className="font-display text-xl font-bold mb-2 text-foreground">Design Customizado</h3>
            <p className="text-on-surface-variant text-base">Visual exclusivo, sem templates ou atalhos.</p>
          </div>
        </div>

        <span className="text-primary-container uppercase tracking-widest text-xs font-semibold mb-12 block">
          02 — Portfólio Selecionado
        </span>
        
        <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
              className="group block relative"
            >
              <div className="h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden relative bg-surface-container border border-white/5 transition-transform duration-500 ease-out group-hover:scale-[0.98]">
                <div 
                  className="absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                  style={{ background: `linear-gradient(to bottom right, ${project.color}, transparent)` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-4xl sm:text-7xl text-white/5 font-black tracking-tighter mix-blend-overlay">
                    {project.name.toUpperCase()}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-8 sm:p-12 bg-gradient-to-t from-background via-background/90 to-transparent">
                  <h3 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-foreground">{project.name}</h3>
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-end justify-between">
                    <p className="text-on-surface-variant max-w-xl text-base sm:text-lg">
                      {project.description}
                    </p>
                    <span className="text-xs uppercase tracking-widest text-primary-container font-semibold border border-primary-container/20 rounded-full px-4 py-2 shrink-0">
                      {project.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
