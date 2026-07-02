"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Aliança Inglesa",
    role: "Full-Stack & UX",
    description: "Landing page de altíssima performance focada em captação de leads. Combina design premium com técnicas pesadas de conversão local.",
    link: "https://alianca-inglesa.vercel.app",
    color: "#6B0D12", // Red-deep
  },
  {
    name: "Olhar Estoico",
    role: "Frontend Engineering",
    description: "Plataforma projetada para máxima retenção visual, com foco na entrega de conteúdo filosófico através de uma experiência imersiva.",
    link: "https://olharestoico.com.br",
    color: "#18181B", // Zinc
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <span className="text-slate uppercase tracking-widest text-xs font-semibold mb-12 block">
          Trabalhos Selecionados
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
              <div className="h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden relative bg-paper border border-white/5 transition-transform duration-500 ease-out group-hover:scale-[0.98]">
                {/* Placeholder para a imagem do projeto */}
                <div 
                  className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: `linear-gradient(to bottom right, ${project.color}, transparent)` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-4xl sm:text-6xl text-white/10 font-bold tracking-tighter mix-blend-overlay">
                    {project.name.toUpperCase()}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-8 sm:p-12 bg-gradient-to-t from-ink via-ink/80 to-transparent">
                  <h3 className="text-3xl sm:text-4xl font-serif mb-4">{project.name}</h3>
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-end justify-between">
                    <p className="text-slate max-w-xl text-base sm:text-lg">
                      {project.description}
                    </p>
                    <span className="text-xs uppercase tracking-widest text-accent/60 font-semibold border border-white/10 rounded-full px-4 py-2 shrink-0">
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
