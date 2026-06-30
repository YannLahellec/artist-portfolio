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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="font-jost text-sm md:text-base leading-relaxed text-zinc-300 mt-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.
            Nullam varius, turpis molestie dictum semper, nisi lorem egestas odio, vitae scelerisque
            enim ligula venenatis dolor.
          </p>
        </div>
      </section>
    </>
  );
}
