'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const categories = [
  { label: 'Peintures', href: '/peinture' },
  { label: 'Dessins', href: '/dessin' },
  { label: 'Anne & Gilles', href: '/anne-gilles' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-md border-b border-white/5">
      <nav className="flex items-center justify-between px-8 md:px-16 h-16">
        <Link href="/" className="flex flex-col hover:opacity-70 transition-opacity">
          <span className="font-ed-garamond text-lg font-semibold leading-tight">Anne Roulant</span>
          <span className="font-jost text-[9px] tracking-[0.25em] text-zinc-500">ARTISTE PEINTRE</span>
        </Link>
        <ul className="flex items-center gap-6 md:gap-10">
          {categories.map((cat) => (
            <li key={cat.href}>
              <Link
                href={cat.href}
                className={`font-jost text-[10px] tracking-[0.2em] transition-colors duration-200 ${
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
      </nav>
    </header>
  );
}
