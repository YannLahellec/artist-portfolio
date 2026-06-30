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
    <div className="flex flex-col md:min-h-screen">
      <nav className="px-8 pt-16 pb-3 md:pt-20 md:py-6">
        <Link
          href={`/${artwork.category}`}
          className="font-jost text-[10px] tracking-[0.25em] text-zinc-500 hover:text-foreground transition-colors"
        >
          ← RETOUR
        </Link>
      </nav>

      <div className="flex md:flex-1 items-center justify-center px-4 md:px-16 py-8 md:py-4">
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