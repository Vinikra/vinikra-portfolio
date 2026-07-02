"use client";

import { motion } from "framer-motion";
import { projects, stats } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Stats Section FORGE style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <p className="text-on-surface-variant text-sm font-semibold mb-2 uppercase tracking-widest">01 — Em números</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl text-foreground">O que entrego em cada projeto.</h2>
          </div>
          <div className="text-on-surface-variant text-sm uppercase tracking-widest font-semibold border border-white/10 px-4 py-2 rounded-full">
            Compromisso em todo projeto
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 mb-32">
          {stats.map((stat) => (
            <div key={stat.title}>
              <span className="font-display text-6xl font-black leading-none block mb-4 text-primary-container">{stat.value}</span>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground flex items-center gap-2 relative group">
                {stat.title}
                {stat.title === "Google Lighthouse" && (
                  <div className="flex items-center cursor-help">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-on-surface-variant hover:text-primary-container transition-colors">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    <div className="absolute left-0 bottom-full mb-2 w-64 bg-surface-container border border-white/10 text-on-surface-variant text-sm font-sans font-normal p-4 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20 shadow-2xl">
                      <strong className="text-foreground mb-1 block">O que é isso?</strong>
                      Lighthouse é a ferramenta oficial do Google que mede a saúde técnica de um site. Uma nota verde (90+) significa que seu site é ultrarrápido, otimizado para celulares e tem preferência nas buscas do Google.
                    </div>
                  </div>
                )}
              </h3>
              <p className="text-on-surface-variant text-base">{stat.description}</p>
            </div>
          ))}
        </div>

        <span className="text-primary-container uppercase tracking-widest text-xs font-semibold mb-12 block">
          02 — Portfólio selecionado
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
