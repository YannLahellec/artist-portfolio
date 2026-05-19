import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <div>
          <div className="flex justify-center flex-col items-center ">
            <h1 className="font-ed-garamond font-semibold text-6xl pt-6">Anne Roulant</h1>
            <h2 className="font-ed-garamond font-light text-zinc-500 text-2xl">ARTISTE PEINTRE</h2>
          </div>
          <div className="flex justify-center pt-6">
            <Image alt={"toto"} src="/assets/peinture/nature-morte-au-citron.JPG" width={1000} height={500} />
          </div>
        </div>
      </main>
    </div>
  );
}
