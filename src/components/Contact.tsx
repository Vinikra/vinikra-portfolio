"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/data";

const labelClass = "text-sm font-semibold text-on-surface-variant uppercase tracking-widest";
const fieldClass = "bg-transparent border-b border-white/10 pb-4 outline-none focus:border-primary-container transition-colors text-lg text-foreground";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      
      if (res.ok) {
        setStatus("success");
      } else {
        const errorData = await res.json();
        console.error("Resend Error:", errorData);
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-surface relative border-t border-white/5 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <span className="text-primary-container uppercase tracking-widest text-xs font-semibold mb-6 block">
            04 — Solicitar orçamento
          </span>
          <h2 className="font-display text-5xl sm:text-7xl mb-16 font-black tracking-tight leading-none text-foreground">
            Vamos construir algo <span className="text-primary-container">memorável.</span>
          </h2>

          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              className="p-8 border border-primary-container/20 bg-surface-container rounded-2xl"
            >
              <h3 className="text-2xl font-display font-bold mb-2 text-foreground">Pedido enviado!</h3>
              <p className="text-on-surface-variant">Respondo em até 24 horas úteis para conversarmos sobre o seu projeto.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 max-w-2xl">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={labelClass}>Nome completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={fieldClass}
                  placeholder="Seu nome ou da sua empresa"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>Seu melhor e-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={fieldClass}
                  placeholder="voce@empresa.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={labelClass}>WhatsApp / Telefone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className={fieldClass}
                  placeholder="(66) 99999-9999"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className={labelClass}>Faixa de Orçamento</label>
                <select
                  id="budget"
                  name="budget"
                  required
                  className={`${fieldClass} appearance-none cursor-pointer bg-surface`}
                >
                  <option value="" disabled selected className="bg-surface text-foreground">Selecione uma opção</option>
                  <option value="<3k" className="bg-surface text-foreground">Ainda estou pesquisando (Abaixo de R$ 3.000)</option>
                  <option value="3k-6k" className="bg-surface text-foreground">R$ 3.000 a R$ 6.000</option>
                  <option value="6k-10k" className="bg-surface text-foreground">R$ 6.000 a R$ 10.000</option>
                  <option value=">10k" className="bg-surface text-foreground">Acima de R$ 10.000</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className={labelClass}>Detalhes do projeto</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={`${fieldClass} resize-none`}
                  placeholder="Conte-me sobre o que você deseja construir e quais são os objetivos de negócio."
                />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Não foi possível enviar agora. Tente novamente em instantes
                  {site.whatsapp && (
                    <>
                      {" "}ou{" "}
                      <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary-container transition-colors">
                        me chame no WhatsApp
                      </a>
                    </>
                  )}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="self-start inline-flex items-center justify-center h-16 px-10 rounded-full bg-primary-container text-on-primary-fixed font-black hover:-translate-y-1 transition-transform duration-300 disabled:opacity-50 disabled:hover:translate-y-0 text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container"
              >
                {status === "loading" ? "Enviando..." : "Enviar pedido de orçamento"}
              </button>

              {site.whatsapp && (
                <p className="text-on-surface-variant text-sm">
                  Prefere conversar agora?{" "}
                  <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-primary-container underline underline-offset-4 hover:opacity-80 transition-opacity">
                    Me chame no WhatsApp
                  </a>
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
