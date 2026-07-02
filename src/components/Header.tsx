export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 mix-blend-difference px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="font-semibold text-lg tracking-tight">vinikra.</span>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#work" className="hover:opacity-70 transition-opacity">Projetos</a>
          <a href="#contact" className="hover:opacity-70 transition-opacity">Contato</a>
        </nav>
      </div>
    </header>
  );
}
