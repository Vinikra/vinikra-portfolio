export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/10 flex justify-center px-6 h-20">
      <div className="max-w-7xl w-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-container">
            <polyline points="4 17 10 11 4 5"></polyline>
            <line x1="12" x2="20" y1="19" y2="19"></line>
          </svg>
          <span className="font-display text-xl font-black tracking-tighter text-foreground">VINIKRA®</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <a className="text-sm text-on-surface-variant font-semibold hover:text-primary-container transition-colors uppercase tracking-widest" href="#work">Projetos</a>
          <a className="text-sm text-on-surface-variant font-semibold hover:text-primary-container transition-colors uppercase tracking-widest" href="#contact">Contato</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <a href="#contact" className="bg-primary-container text-on-primary-fixed px-6 py-2 rounded-full text-sm font-bold active:scale-95 transition-transform hover:-translate-y-0.5">
            Pitch &gt;
          </a>
        </div>
      </div>
    </header>
  );
}
