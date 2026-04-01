import { artworks } from "@/lib/data/artworks";
import ArtworkCard from "./ArtworkCard";

export default function Gallery() {
    return (
        <section>
            <div className="grid grid-cols-4 gap-4 p-4">
                {artworks.map((artwork) => (
                    <ArtworkCard key={artwork.id} src={artwork.src} alt={artwork.alt} />
                ))}
            </div>
        </section>
    )
}