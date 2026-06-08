import Image from "next/image";
import { artworks } from "@/lib/data/artworks";

const featured = artworks[12];

export default function Home() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={featured.src}
        alt={featured.alt}
        fill
        className="object-cover"
        loading="eager"
        quality={90}
        sizes="100vw"
      />
    </section>
  );
}
