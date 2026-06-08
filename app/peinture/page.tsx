import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Peintures — Anne Roulant",
};

export default function PeinturePage() {
  return (
    <div className="pt-16">
      <div className="px-8 md:px-16 pt-14 pb-4">
        <h1 className="font-ed-garamond text-4xl md:text-5xl font-semibold">Peintures</h1>
      </div>
      <Gallery category="peinture" />
    </div>
  );
}
