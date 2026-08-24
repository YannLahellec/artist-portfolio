import Image from "next/image";
import { artworks } from "@/lib/data/artworks";

const featured = artworks.find((a) => a.src === "/assets/peinture/glaz.jpg")!;

export default function Home() {
  return (
    <>
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

      <section className="flex flex-col md:flex-row items-start gap-10 md:gap-16 px-8 md:px-16 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="relative w-full md:w-5/12 aspect-3/4 shrink-0">
          <Image
            src="/assets/photo-pres.JPG"
            alt="Anne Roulant"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
        <div className="w-full md:w-7/12 flex flex-col justify-center md:pt-8">
          <p className="font-jost text-sm md:text-base leading-relaxed text-zinc-300">
            Architecte DPLG
            <br />
            Scénographe
            <br />
            Académie Nicolas Poussin, atelier Maurice Guillon
            <br />
            Vice-présidente du Salon d&apos;Automne
            <br />
            Responsable de la section Photographie du Salon d&apos;Automne
          </p>
          <p className="font-jost text-sm md:text-base leading-relaxed text-zinc-300 mt-4">
            Techniques :
            <br />
            huile, acrylique, aquarelle, pastel, dessin, modelage, sculpture, linogravure,
            photogravure, photographie, technique mixte peinture-photographie, livres
            d&apos;artistes (notamment en collaboration avec Gilles Guillaume et Edith Delattre)
          </p>
        </div>
      </section>
    </>
  );
}
