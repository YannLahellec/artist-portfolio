'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const categories = [
  { label: 'Peintures', href: '/peinture' },
  { label: 'Dessins', href: '/dessin' },
  { label: 'Anne & Gilles', href: '/anne-gilles' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-md border-b border-white/5">
      <nav className="flex items-center justify-between px-6 md:px-16 h-14 md:h-16">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex flex-col hover:opacity-70 transition-opacity"
        >
          <span className="font-ed-garamond text-base md:text-lg font-semibold leading-tight whitespace-nowrap">
            Anne Roulant
          </span>
          <span className="hidden sm:block font-jost text-[9px] tracking-[0.25em] text-zinc-500">
            ARTISTE PEINTRE
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {categories.map((cat) => (
            <li key={cat.href}>
              <Link
                href={cat.href}
                className={`font-jost text-[10px] tracking-[0.2em] whitespace-nowrap transition-colors duration-200 ${
                  pathname.startsWith(cat.href)
                    ? 'text-foreground'
                    : 'text-zinc-400 hover:text-foreground'
                }`}
              >
                {cat.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.25 w-8 h-8"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block h-px bg-foreground transition-all duration-300 origin-center ${open ? 'w-5 rotate-45 translate-y-1.75' : 'w-5'}`} />
          <span className={`block h-px bg-foreground transition-all duration-300 ${open ? 'w-0 opacity-0' : 'w-4'}`} />
          <span className={`block h-px bg-foreground transition-all duration-300 origin-center ${open ? 'w-5 -rotate-45 -translate-y-1.75' : 'w-5'}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              onClick={() => setOpen(false)}
              className={`font-jost text-xs tracking-[0.2em] transition-colors ${
                pathname.startsWith(cat.href) ? 'text-foreground' : 'text-zinc-400'
              }`}
            >
              {cat.label.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
