import Image from "next/image";
import Link from "next/link";
import { Artwork } from "@/lib/data/artworks";

export default function ArtworkCard({ artwork, priority = false }: { artwork: Artwork; priority?: boolean }) {
  return (
    <Link href={`/oeuvres/${artwork.id}`} className="block overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={artwork.src}
          alt={artwork.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
          priority={priority}
        />
      </div>
    </Link>
  );
}
