"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-20 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-end z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="md:col-span-8"
        >
          <span className="text-primary-container uppercase tracking-widest text-xs font-semibold mb-6 block">
            Vinícius Krasnievicz — Performance Digital Engineering
          </span>
          <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[1.05] sm:leading-[0.95] tracking-tight text-foreground">
            Transformo sites em <br className="hidden md:block" />
            <span className="text-primary-container">máquinas</span> de conversão.
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="md:col-span-4 pb-4 flex flex-col"
        >
          <p className="text-on-surface-variant text-base sm:text-lg mb-8 max-w-sm">
            Otimização Lighthouse 90+, SEO local agressivo e arquitetura de alta performance focada em resultados reais.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center h-14 sm:h-16 px-8 sm:px-10 rounded-full bg-primary-container text-on-primary-fixed font-black hover:-translate-y-1 transition-transform duration-300 gap-4 group">
            Solicitar Orçamento
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Large Background Label */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute -bottom-10 left-0 w-full select-none pointer-events-none"
      >
        <h2 className="font-display text-[24vw] leading-none whitespace-nowrap font-black text-foreground">
          FORGE® PERFORMANCE
        </h2>
      </motion.div>

      {/* Neon Accent Glow */}
      <div className="absolute top-1/2 left-20 -translate-y-1/2 w-48 h-96 bg-primary-container/10 blur-[120px] rounded-full hidden md:block"></div>
    </section>
  );
}
