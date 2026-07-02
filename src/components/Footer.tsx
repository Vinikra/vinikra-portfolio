import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:items-end justify-between">
        <div>
          <p className="font-display text-3xl font-black tracking-tighter text-foreground mb-2">VINIKRA</p>
          <p className="text-on-surface-variant text-sm max-w-xs">
            Sites de alta conversão para negócios locais.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6">
          <a className="text-sm text-on-surface-variant font-semibold hover:text-primary-container transition-colors uppercase tracking-widest" href="#work">Projetos</a>
          <a className="text-sm text-on-surface-variant font-semibold hover:text-primary-container transition-colors uppercase tracking-widest" href="#process">Como funciona</a>
          <a className="text-sm text-on-surface-variant font-semibold hover:text-primary-container transition-colors uppercase tracking-widest" href="#contact">Solicitar orçamento</a>
          {site.whatsapp && (
            <a className="text-sm text-on-surface-variant font-semibold hover:text-primary-container transition-colors uppercase tracking-widest" href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          )}
          {site.linkedin && (
            <a className="text-sm text-on-surface-variant font-semibold hover:text-primary-container transition-colors uppercase tracking-widest" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5">
        <p className="text-on-surface-variant/60 text-xs uppercase tracking-widest">
          © 2026 Vinikra. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
