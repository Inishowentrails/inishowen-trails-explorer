import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Car, Info, MapPin } from "lucide-react";
import { trailClusters, getClusterBySlug } from "@/data/trails";

type Props = {
  params: Promise<{ slug: string }>;
};

const MAP_SRC = "https://www.google.com/maps/d/embed?mid=14GGFzn3vQMFy3Rr-RRfE7EeGEMI5EEg";

const diffStyle: Record<"Easy" | "Moderate" | "Mixed", string> = {
  Easy: "bg-brand-muted-amber text-black",
  Moderate: "bg-brand-muted-purple text-white",
  Mixed: "bg-brand-purple text-white",
};

export function generateStaticParams() {
  return trailClusters.map((cluster) => ({ slug: cluster.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cluster = getClusterBySlug(slug);
  if (!cluster) {
    return { title: "Trail — Inishowen Trails" };
  }
  return {
    title: `${cluster.nameEn} — Inishowen Trails`,
    description: cluster.heroDescription,
  };
}

export default async function ClusterDetail({ params }: Props) {
  const { slug } = await params;
  const cluster = getClusterBySlug(slug);
  if (!cluster) notFound();

  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden mt-0">
        {/* PLACEHOLDER: cluster hero image — swap public/images/trails/{slug}.jpg for a real photo */}
        <img
          src={cluster.image}
          alt={cluster.nameEn}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl w-full px-5 pb-12">
            <p className="text-brand-amber font-bold uppercase tracking-tight text-sm">
              {cluster.region}
            </p>
            <p className="text-white/80 italic">{cluster.nameIr}</p>
            <h1 className="text-white font-bold uppercase tracking-tight text-4xl md:text-5xl">
              {cluster.nameEn}
            </h1>
            <p className="mt-3 max-w-2xl text-white/90 text-lg">{cluster.tagline}</p>
          </div>
        </div>
      </section>

      {/* OVERVIEW + MAP */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="flex flex-wrap gap-3 mb-6">
              <span
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight ${diffStyle[cluster.difficulty]}`}
              >
                {cluster.difficulty}
              </span>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight bg-brand-amber text-black">
                {cluster.routes.length} routes
              </span>
            </div>
            <h2 className="font-bold uppercase tracking-tight text-brand-purple text-2xl mb-4">
              About this cluster
            </h2>
            <p className="text-black/85 leading-relaxed">{cluster.heroDescription}</p>

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-brand-cloud p-5">
              <Car size={20} className="text-brand-purple mt-0.5 shrink-0" />
              <div>
                <div className="text-xs uppercase tracking-tight font-bold text-brand-muted-purple">
                  Parking
                </div>
                <p className="mt-1 text-black/85">{cluster.parking}</p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: "#504087" }}>
              <iframe
                title="Trail map"
                src={MAP_SRC}
                className="w-full block"
                style={{ height: 420, border: 0 }}
                loading="lazy"
              />
            </div>
            <Link
              href="/trails"
              className="mt-6 inline-block text-brand-purple font-bold hover:text-brand-amber"
            >
              ← Back to all trails
            </Link>
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="bg-brand-cloud">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <h2 className="font-bold uppercase tracking-tight text-brand-purple text-2xl md:text-3xl">
            Routes in this cluster
          </h2>
          <p className="mt-2 text-black/70">{cluster.routes.length} waymarked routes</p>

          <div className="mt-8 space-y-6">
            {cluster.routes.map((route) => (
              <article
                key={route.nameEn}
                className="bg-white rounded-xl border border-black/5 shadow-sm p-6 md:p-8"
              >
                <p className="text-sm text-brand-muted-purple italic">{route.nameIr}</p>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <h3 className="font-bold uppercase tracking-tight text-brand-purple text-xl md:text-2xl">
                    {route.nameEn}
                  </h3>
                  <span
                    className={`text-xs font-bold uppercase tracking-tight px-2.5 py-1 rounded-full ${diffStyle[route.difficulty]}`}
                  >
                    {route.difficulty}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-4 max-w-lg">
                  {(
                    [
                      ["Distance", `${route.distance} ${route.distanceType}`],
                      ["Duration", route.duration],
                      ["Height gain", route.heightGain],
                    ] as const
                  ).map(([label, value]) => (
                    <div key={label}>
                      <div className="text-xs uppercase tracking-tight text-brand-muted-purple font-bold">
                        {label}
                      </div>
                      <div className="mt-1 font-bold text-brand-purple">{value}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-black/85 leading-relaxed">{route.description}</p>

                <h4 className="mt-6 mb-3 font-bold uppercase tracking-tight text-brand-purple text-sm">
                  Points of interest
                </h4>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {route.pointsOfInterest.map((poi) => (
                    <li key={poi} className="flex items-start gap-2 text-black/85 text-sm">
                      <MapPin size={16} className="text-brand-amber mt-0.5 shrink-0" />
                      <span>{poi}</span>
                    </li>
                  ))}
                </ul>

                {route.note && (
                  <div className="mt-5 flex items-start gap-2 rounded-md border-l-4 border-brand-amber bg-brand-cloud px-4 py-3 text-sm text-black/80">
                    <Info size={16} className="text-brand-purple mt-0.5 shrink-0" />
                    <span>{route.note}</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
