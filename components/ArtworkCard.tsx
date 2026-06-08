import Image from "next/image";
import Link from "next/link";
import { Artwork } from "@/lib/data/artworks";

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link href={`/oeuvres/${artwork.id}`} className="block overflow-hidden">
      <Image
        src={artwork.src}
        alt={artwork.alt}
        width={800}
        height={600}
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 768px) 50vw, 33vw"
      />
    </Link>
  );
}
