import { Terminal } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/10 flex justify-center px-6 h-20">
      <div className="max-w-7xl w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={24} className="text-primary-container" />
          <span className="font-display text-xl font-black tracking-tighter text-foreground">VINIKRA®</span>
        </div>

        <nav className="flex gap-5 md:gap-8">
          <a className="text-sm text-on-surface-variant font-semibold hover:text-primary-container transition-colors uppercase tracking-widest" href="#work">Projetos</a>
          <a className="text-sm text-on-surface-variant font-semibold hover:text-primary-container transition-colors uppercase tracking-widest" href="#contact">Contato</a>
        </nav>

        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 bg-primary-container text-on-primary-fixed px-6 py-2 rounded-full text-sm font-bold active:scale-95 transition-transform hover:-translate-y-0.5">
          Orçamento
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </div>
    </header>
  );
}
