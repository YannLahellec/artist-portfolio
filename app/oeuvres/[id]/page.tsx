import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artworks } from "@/lib/data/artworks";

export function generateStaticParams() {
  return artworks.map((a) => ({ id: String(a.id) }));
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const artwork = artworks.find((a) => a.id === Number(id));

  if (!artwork) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="px-8 py-6 pt-20">
        <Link
          href={`/${artwork.category}`}
          className="font-jost text-[10px] tracking-[0.25em] text-zinc-500 hover:text-foreground transition-colors"
        >
          ← RETOUR
        </Link>
      </nav>

      <div className="flex-1 flex items-center justify-center px-8 md:px-16 py-4">
        <Image
          src={artwork.src}
          alt={artwork.alt}
          width={1400}
          height={1000}
          style={{
            maxHeight: "72vh",
            width: "auto",
            height: "auto",
            maxWidth: "100%",
          }}
          sizes="(max-width: 768px) 100vw, 85vw"
          loading="eager"
        />
      </div>

    </div>
  );
}
