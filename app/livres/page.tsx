import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Livres — Anne Roulant",
};

export default function LivresPage() {
  return (
    <div className="pt-16">
      <div className="px-8 md:px-16 pt-6 md:pt-14 pb-2 md:pb-4">
        <h1 className="font-ed-garamond text-4xl md:text-5xl font-semibold">Livre</h1>
      </div>
      <Gallery category="livres" />
    </div>
  );
}
