export default function Footer() {
  return (
    <footer className="bg-background border-t border-zinc-800 px-6 py-12 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="font-ed-garamond text-2xl font-semibold">Anne Roulant</h2>
          <p className="font-jost text-[10px] tracking-[0.3em] text-zinc-400 mt-1">ARTISTE PEINTRE</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-2">
            <p className="font-jost text-[10px] tracking-[0.2em] text-zinc-400">CONTACT</p>
            <a
              href="mailto:contact@anneroulant.fr"
              className="font-jost text-sm text-zinc-300 hover:text-white transition-colors"
            >
              anne.roulant-gorce@orange.fr
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-jost text-[10px] tracking-[0.2em] text-zinc-400">SUIVRE</p>
            <a
              href="https://www.instagram.com/anneroulant/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost text-sm text-zinc-300 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100074603950526"
              target="_blank"
              rel="noopener noreferrer"
              className="font-jost text-sm text-zinc-300 hover:text-white transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <p className="font-jost text-[10px] text-zinc-300 tracking-widest mt-12">
        © {new Date().getFullYear()} Anne Roulant — Tous droits réservés
      </p>
    </footer>
  );
}
