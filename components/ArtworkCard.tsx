import Image from "next/image";
import Link from "next/link";
import { Artwork } from "@/lib/data/artworks";

export default function ArtworkCard({ artwork }: { artwork: Artwork }) {
  return (
    <Link href={`/oeuvres/${artwork.id}`} className="group relative overflow-hidden block">
      <Image
        src={artwork.src}
        alt={artwork.alt}
        width={800}
        height={600}
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      <div className="absolute inset-0 flex items-end bg-black/0 group-hover:bg-black/20 transition-colors duration-500">
        <p className="font-ed-garamond text-white text-lg px-4 pb-4 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {artwork.title}
        </p>
      </div>
    </Link>
  );
}
