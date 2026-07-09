import { artworks, Artwork } from "@/lib/data/artworks";
import ArtworkCard from "./ArtworkCard";

type Props = {
  category?: Artwork['category'];
};

export default function Gallery({ category }: Props) {
  const filtered = category
    ? artworks.filter((a) => a.category === category)
    : artworks;

  return (
    <section className="px-6 py-4 md:py-12 md:px-12 lg:px-20">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {filtered.map((artwork, index) => (
          <div key={artwork.id} className={index >= 8 ? 'hidden md:block' : ''}>
            <ArtworkCard artwork={artwork} priority={index < 6} />
          </div>
        ))}
      </div>
    </section>
  );
}
