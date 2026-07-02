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
          <h1 className="font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight">
            Criando{" "}
            <span className="inline-block align-middle w-[clamp(5rem,12vw,10rem)] h-[clamp(2.5rem,6vw,5rem)] mx-2 rounded-full overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400&h=200" alt="Código" className="object-cover w-full h-full" />
            </span>
            <br />
            experiências digitais que{" "}
            <span className="inline-block align-middle w-[clamp(4rem,10vw,8rem)] h-[clamp(2.5rem,6vw,5rem)] mx-2 rounded-full overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=200" alt="Escala" className="object-cover w-full h-full" />
            </span>
            <br />
            geram <span className="italic text-slate">escala.</span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-16 flex items-center gap-6"
          >
            <a href="#contact" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-accent text-ink font-medium hover:-translate-y-1 transition-transform duration-300">
              Iniciar um projeto
            </a>
            <p className="text-slate text-sm max-w-xs">
              Sites focados em velocidade, conversão e design de alto padrão.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
