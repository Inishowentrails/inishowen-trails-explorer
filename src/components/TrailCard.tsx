import Link from "next/link";
import type { TrailCluster } from "@/data/trails";

const diffStyle: Record<TrailCluster["difficulty"], string> = {
  Easy: "bg-brand-muted-amber text-black",
  Moderate: "bg-brand-muted-purple text-white",
  Mixed: "bg-brand-purple text-white",
};

export function TrailCard({ cluster }: { cluster: TrailCluster }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm flex flex-col">
      <div className="aspect-[4/3] bg-brand-cloud overflow-hidden">
        {/* PLACEHOLDER: swap public/images/trails/<slug>.jpg for a real cluster photo */}
        <img
          src={cluster.image}
          alt={cluster.nameEn}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="text-xs text-brand-muted-purple italic">{cluster.nameIr}</p>
        <h3 className="font-bold text-brand-purple text-lg leading-tight">{cluster.nameEn}</h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-bold uppercase tracking-tight px-2.5 py-1 rounded-full bg-brand-amber text-black">
            {cluster.routes.length} routes inside
          </span>
          <span
            className={`text-xs font-bold uppercase tracking-tight px-2.5 py-1 rounded-full ${diffStyle[cluster.difficulty]}`}
          >
            {cluster.difficulty}
          </span>
        </div>
        <p className="text-xs text-black/70">{cluster.region}</p>
        <p className="text-sm text-black/80 line-clamp-2">{cluster.tagline}</p>
        <div className="flex flex-wrap gap-1.5">
          {cluster.routes.map((r) => (
            <span
              key={r.nameEn}
              className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-brand-cloud text-brand-purple"
            >
              {r.nameEn}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-2">
          <Link
            href={`/trails/${cluster.slug}`}
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-purple hover:text-brand-amber"
          >
            View cluster →
          </Link>
        </div>
      </div>
    </article>
  );
}
