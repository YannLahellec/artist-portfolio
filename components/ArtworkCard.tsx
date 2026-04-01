import Image from "next/image";

export default function ArtworkCard({ src, alt }: { src: string, alt: string }) {
    return (
        <div className="relative aspect-square overflow-hidden rounded-sm">
            <Image src={src} alt={alt} fill className="object-cover" />
        </div>
    )

}