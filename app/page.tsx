import Image from "next/image";
import { artworks } from "@/lib/data/artworks";
import Gallery from "@/components/Gallery";

const featured = artworks[7];

export default function Home() {
  return (
    <div>
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
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="font-ed-garamond text-5xl md:text-7xl font-semibold leading-none">
            Anne Roulant
          </h1>
          <p className="font-jost text-xs tracking-[0.35em] mt-3 text-white/60">
            ARTISTE PEINTRE
          </p>
        </div>
        <div className="absolute bottom-10 right-10 font-jost text-[10px] tracking-[0.25em] text-white/40 flex flex-col items-center gap-1.5">
        </div>
      </section>
      <Gallery />
    </div>
  );
}
