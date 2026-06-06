"use client";

import { useMemo, useState } from "react";
import { TrailCard } from "@/components/TrailCard";
import { trails, type Difficulty } from "@/data/trails";

type Filter = "All" | Difficulty;

const filters: Filter[] = ["All", "Easy", "Moderate"];

export function TrailsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = useMemo(
    () => (filter === "All" ? trails : trails.filter((t) => t.difficulty === filter)),
    [filter],
  );

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2 justify-center">
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
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
    </>
  );
}
