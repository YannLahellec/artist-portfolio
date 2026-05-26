import { artworks } from "@/lib/data/artworks";
import ArtworkCard from "./ArtworkCard";
import FadeIn from "./FadeIn";

export default function Gallery() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="columns-2 md:columns-3 gap-4 md:gap-6">
        {artworks.map((artwork, index) => (
          <FadeIn
            key={artwork.id}
            className="break-inside-avoid mb-4 md:mb-6"
            delay={(index % 4) * 80}
          >
            <ArtworkCard artwork={artwork} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
