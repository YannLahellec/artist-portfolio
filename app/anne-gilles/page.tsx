import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Anne & Gilles — Anne Roulant",
};

export default function AnneGillesPage() {
  return (
    <div className="pt-16">
      <div className="px-8 md:px-16 pt-14 pb-4">
        <h1 className="font-ed-garamond text-4xl md:text-5xl font-semibold">Anne & Gilles</h1>
      </div>
      <Gallery category="anne-gilles" />
    </div>
  );
}
