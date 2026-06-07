import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BusinessCard } from "@/components/BusinessCard";
import {
  categoriesInOrder,
  categoryLabels,
  getBusinessesByCategory,
} from "@/data/businesses";

export const metadata: Metadata = {
  title: "Beyond the Trails — Inishowen Trails",
  description:
    "Where to eat, where to stay, and what to discover on the Inishowen peninsula once you're off the trails.",
};

export default function InishowenPage() {
  return (
    <>
      <PageHero
        title="Beyond the Trails"
        subtitle="Inishowen doesn't end when the trail does. Here's what to eat, where to stay, and what to discover when you've earned it."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          {categoriesInOrder.map((category) => {
            // Skip cards whose name or description is still a TBC placeholder,
            // and skip the whole section if nothing remains to show.
            const items = getBusinessesByCategory(category).filter(
              (b) => b.name !== "TBC" && b.description !== "TBC",
            );
            if (items.length === 0) return null;

            return (
              <div key={category} className="mt-14 first:mt-0">
                <h2 className="font-bold uppercase tracking-tight text-brand-purple text-2xl md:text-3xl">
                  {categoryLabels[category]}
                </h2>
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {items.map((business) => (
                    <BusinessCard key={business.id} business={business} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
