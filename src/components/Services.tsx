"use client";

import { motion } from "framer-motion";

const specialties = [
  {
    title: "Landing Pages de Alta Conversão",
    description: "Foco agressivo em captação de leads e vendas. Estruturas validadas para converter tráfego pago em ligações e orçamentos reais.",
  },
  {
    title: "Arquitetura Institucional Premium",
    description: "Sua sede digital. Sites projetados para transmitir autoridade instantânea e posicionar sua empresa acima da concorrência.",
  },
  {
    title: "Engenharia de Performance & SEO",
    description: "Otimizações profundas no código. Seu site carregando em milissegundos para o Google priorizar sua empresa nas buscas locais.",
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 md:px-20 bg-surface border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <p className="text-primary-container text-xs font-semibold mb-6 uppercase tracking-widest">Especialidades</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl text-foreground">
              Como eu gero <span className="text-primary-container">resultados</span>.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {specialties.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
              className="flex flex-col border-l-2 border-white/10 pl-6 hover:border-primary-container transition-colors duration-300"
            >
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground leading-tight">{item.title}</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
