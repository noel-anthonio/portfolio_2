export function Footer() {
  return (
    <footer className="bg-night text-muted-on-dark py-7">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px]">
        <span>© 2026 Noël Anthonio</span>
        <span className="tracking-wide">Data · Web · Impact</span>
        <a href="#home" className="text-copper hover:text-copper-glow transition-colors">
          Retour en haut ↑
        </a>
      </div>
    </footer>
  )
}