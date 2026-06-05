import { Link } from "@tanstack/react-router";
import type { Trail } from "@/data/trails";

const diffStyle: Record<Trail["difficulty"], string> = {
  Easy: "bg-brand-muted-amber text-black",
  Moderate: "bg-brand-muted-purple text-white",
};

export function TrailCard({ trail }: { trail: Trail }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm flex flex-col">
      <div className="aspect-[4/3] bg-brand-cloud overflow-hidden">
        <img
          src={trail.image}
          alt={trail.englishName}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        {trail.irishName && (
          <p className="text-xs text-brand-muted-purple italic">{trail.irishName}</p>
        )}
        <h3 className="font-bold text-brand-purple text-lg leading-tight">
          {trail.englishName}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs font-bold uppercase tracking-tight px-2.5 py-1 rounded-full bg-brand-amber text-black">
            {trail.distance}
          </span>
          <span className={`text-xs font-bold uppercase tracking-tight px-2.5 py-1 rounded-full ${diffStyle[trail.difficulty]}`}>
            {trail.difficulty}
          </span>
        </div>
        <p className="text-xs text-black/70">
          {trail.time} · {trail.heightGain} gain
        </p>
        <p className="text-sm text-black/80 line-clamp-3">{trail.description}</p>
        <div className="mt-auto pt-2">
          <Link
            to="/trails/$slug"
            params={{ slug: trail.slug }}
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-purple hover:text-brand-amber"
          >
            View trail →
          </Link>
        </div>
      </div>
    </article>
  );
}
