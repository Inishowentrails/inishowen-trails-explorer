import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { TrailCard } from "@/components/TrailCard";
import { trails, type Difficulty } from "@/data/trails";

export const Route = createFileRoute("/trails")({
  head: () => ({
    meta: [
      { title: "Trails — Inishowen Trails" },
      {
        name: "description",
        content:
          "Explore 9 trail clusters across the Inishowen peninsula — 80km of traffic-free walking and cycling.",
      },
    ],
  }),
  component: TrailsPage,
});

const MAP_SRC =
  "https://www.google.com/maps/d/embed?mid=14GGFzn3vQMFy3Rr-RRfE7EeGEMI5EEg";

type Filter = "All" | Difficulty;

function TrailsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = useMemo(
    () => (filter === "All" ? trails : trails.filter((t) => t.difficulty === filter)),
    [filter],
  );

  return (
    <>
      <PageHero
        title="Explore the Trails"
        subtitle="9 trail clusters · 80km · 100% off-road"
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div
            className="w-full rounded-xl overflow-hidden border"
            style={{ borderColor: "#504087" }}
          >
            <iframe
              title="Inishowen Trails map"
              src={MAP_SRC}
              className="w-full block"
              style={{ height: 500, border: 0 }}
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm text-black/70 text-center">
            Click any trail on the map for location details
          </p>

          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {(["All", "Easy", "Moderate"] as const).map((f) => {
              const active = filter === f || (f === "All" && filter === "All");
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f === "All" ? "All" : (f as Difficulty))}
                  className={`px-5 py-2 rounded-full text-sm font-bold uppercase tracking-tight transition-colors ${
                    active
                      ? "bg-brand-purple text-white"
                      : "bg-brand-muted-amber text-black hover:opacity-90"
                  }`}
                >
                  {f === "All" ? "All trails" : f}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <TrailCard key={t.slug} trail={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
