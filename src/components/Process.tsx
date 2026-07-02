"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-20 bg-surface-container/30 border-y border-white/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="mb-16"
        >
          <p className="text-primary-container text-xs font-semibold mb-6 uppercase tracking-widest">03 — Como funciona</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl text-foreground">
            Do primeiro contato ao site no ar.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
            >
              <span className="font-display text-5xl font-black leading-none block mb-4 text-primary-container">{step.number}</span>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground">{step.title}</h3>
              <p className="text-on-surface-variant text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
