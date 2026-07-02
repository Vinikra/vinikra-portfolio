"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-5xl"
        >
          <span className="text-slate uppercase tracking-widest text-xs font-semibold mb-6 block">
            Vinícius Krasnievicz — Desenvolvedor Web Premium
          </span>
          <h1 className="font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.9] tracking-tighter mb-8">
            Criando <br />
            experiências <span className="italic text-slate">digitais</span> <br />
            que geram escala.
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-6"
          >
            <a href="#contact" className="inline-flex items-center justify-center h-14 sm:h-12 px-8 rounded-full bg-accent text-ink font-semibold sm:font-medium hover:-translate-y-1 transition-transform duration-300">
              Iniciar um projeto
            </a>
            <p className="text-slate text-sm max-w-xs text-center sm:text-left mx-auto sm:mx-0">
              Sites focados em velocidade, conversão e design de alto padrão.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
