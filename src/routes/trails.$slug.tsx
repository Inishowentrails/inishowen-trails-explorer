import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Dog, Download, MapPin } from "lucide-react";
import { getTrailBySlug } from "@/data/trails";

export const Route = createFileRoute("/trails/$slug")({
  loader: ({ params }) => {
    const trail = getTrailBySlug(params.slug);
    if (!trail) throw notFound();
    return { trail };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.trail.englishName} — Inishowen Trails`
          : "Trail — Inishowen Trails",
      },
      {
        name: "description",
        content: loaderData?.trail.description ?? "",
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="pt-32 pb-20 px-5 text-center">
      <h1 className="font-bold uppercase tracking-tight text-3xl text-brand-purple">
        Trail not found
      </h1>
      <Link to="/trails" className="mt-6 inline-block text-brand-purple underline">
        Back to all trails
      </Link>
    </div>
  ),
  component: TrailDetail,
});

const MAP_SRC =
  "https://www.google.com/maps/d/embed?mid=14GGFzn3vQMFy3Rr-RRfE7EeGEMI5EEg";

function TrailDetail() {
  const { trail } = Route.useLoaderData();

  return (
    <>
      <section className="relative h-[55vh] min-h-[380px] w-full overflow-hidden mt-0">
        <img
          src={trail.image}
          alt={trail.englishName}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 h-full flex items-end">
          <div className="mx-auto max-w-7xl w-full px-5 pb-12">
            {trail.irishName && (
              <p className="text-white/80 italic">{trail.irishName}</p>
            )}
            <h1 className="text-white font-bold uppercase tracking-tight text-4xl md:text-5xl">
              {trail.englishName}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-brand-cloud">
        <div className="mx-auto max-w-7xl px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ["Distance", trail.distance],
            ["Time", trail.time],
            ["Difficulty", trail.difficulty],
            ["Height gain", trail.heightGain],
          ].map(([l, v]) => (
            <div key={l}>
              <div className="text-xs uppercase tracking-tight text-brand-muted-purple font-bold">
                {l}
              </div>
              <div className="mt-1 font-bold text-brand-purple text-lg">{v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight bg-green-600 text-white">
                Trail condition: Good
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight bg-brand-muted-amber text-black">
                <Dog size={14} /> Dogs welcome
              </span>
            </div>
            <h2 className="font-bold uppercase tracking-tight text-brand-purple text-2xl mb-4">
              About the trail
            </h2>
            <p className="text-black/85 leading-relaxed">{trail.description}</p>

            <h2 className="mt-10 font-bold uppercase tracking-tight text-brand-purple text-2xl mb-4">
              Points of interest
            </h2>
            <ul className="space-y-2">
              {trail.pointsOfInterest.map((p) => (
                <li key={p} className="flex items-start gap-2 text-black/85">
                  <MapPin size={18} className="text-brand-amber mt-0.5 shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-10 inline-flex items-center gap-2 bg-brand-amber text-black font-bold uppercase tracking-tight px-6 py-3 rounded-md hover:opacity-90"
            >
              <Download size={18} />
              Download trail PDF
            </a>
          </div>

          <div>
            <div
              className="rounded-xl overflow-hidden border"
              style={{ borderColor: "#504087" }}
            >
              <iframe
                title="Trail map"
                src={MAP_SRC}
                className="w-full block"
                style={{ height: 420, border: 0 }}
                loading="lazy"
              />
            </div>
            <Link
              to="/trails"
              className="mt-6 inline-block text-brand-purple font-bold hover:text-brand-amber"
            >
              ← Back to all trails
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
