import type { Metadata } from "next";
import { Instagram } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Events & Community — Inishowen Trails",
  description:
    "From monthly community walks to the Donegal Camino — there's always something on in Inishowen.",
  openGraph: {
    title: "Events & Community — Inishowen Trails",
    description:
      "From monthly community walks to the Donegal Camino — there's always something on in Inishowen.",
  },
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="events & community"
        subtitle="From monthly community walks to the Donegal Camino — there's always something on in Inishowen."
      />

      {/* FEATURED — DONEGAL CAMINO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="bg-brand-cloud rounded-2xl overflow-hidden grid md:grid-cols-2">
            <div className="aspect-[4/3] md:aspect-auto">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80"
                alt="Donegal Camino"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="text-xs font-bold uppercase tracking-widest text-brand-amber">
                Featured · Partner event
              </div>
              <h2 className="mt-2 font-bold uppercase tracking-tight text-brand-purple text-3xl md:text-4xl">
                Donegal Camino 2026
              </h2>
              <p className="mt-3 font-light uppercase tracking-tight text-brand-purple">
                30 August – 5 September 2026
              </p>
              <p className="mt-5 text-black/85 leading-relaxed">
                A week-long walking pilgrimage across Donegal in partnership with Cancer Care West.
                Inishowen Trails hosts Day 1 across the Isle of Doagh and Day 2 over Sliabh Sneacht.
                Limited to 100 walkers per day.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.donegalcamino.ie/registration/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-brand-amber text-black font-bold uppercase tracking-tight px-6 py-3 rounded-md hover:opacity-90"
                >
                  Register now
                </a>
                <a
                  href="https://www.donegalcamino.ie/itinerary/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center border-2 border-brand-purple text-brand-purple font-bold uppercase tracking-tight px-6 py-3 rounded-md hover:bg-brand-purple hover:text-white"
                >
                  View full itinerary
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MONTHLY */}
      <section className="bg-brand-cloud">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="font-bold uppercase tracking-tight text-brand-purple text-3xl md:text-4xl">
            Monthly events
          </h2>

          <div className="mt-8 bg-white rounded-2xl p-8 md:p-10">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-amber">
              Monthly collab
            </div>
            <h3 className="mt-2 font-bold text-brand-purple text-2xl">
              Solo Mates × Inishowen Trails
            </h3>
            <p className="mt-3 text-black/85 leading-relaxed max-w-2xl">
              A monthly event series in collaboration with Solo Mates. Each month brings a different
              activity alongside the trail walk — this month: mini trampoline fitness session with
              weighted BEAT sticks, followed by a 5km Carndonagh Loop walk, then brunch at the
              Diamond Café, Carndonagh. No experience needed. Just show up.
            </p>
            <a
              href="https://www.instagram.com/solomates2022"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-brand-purple hover:opacity-80"
              style={{ fontWeight: 700, fontSize: 13 }}
            >
              <Instagram size={16} />
              @solomates2022
            </a>
          </div>

          <h3 className="mt-12 font-bold uppercase tracking-tight text-brand-purple text-xl">
            2026 calendar
          </h3>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {months.map((m) => (
              <div key={m} className="bg-white rounded-lg p-4 border border-black/5">
                <div className="font-bold text-brand-purple uppercase tracking-tight">{m} 2026</div>
                <div className="mt-1 text-xs text-black/70">Monthly walk · TBC</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER EVENTS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="font-bold uppercase tracking-tight text-brand-purple text-3xl md:text-4xl">
            More events
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Inishowen Sponsored Walk",
                date: "Date TBC",
                cta: "Register interest",
              },
              {
                title: "Inishowen Trails Quiz Night",
                date: "Date TBC",
                cta: "Register interest",
              },
              {
                title: "Inishowen Ultra Marathon",
                date: "Coming soon",
                cta: "Notify me",
              },
            ].map((e) => (
              <div key={e.title} className="bg-brand-cloud rounded-xl p-7 flex flex-col">
                <h3 className="font-bold text-brand-purple text-xl">{e.title}</h3>
                <p className="mt-2 text-black/70 text-sm">{e.date}</p>
                <a
                  href="mailto:inishowentrails@gmail.com"
                  className="mt-6 inline-flex items-center justify-center bg-brand-amber text-black font-bold uppercase tracking-tight px-5 py-2.5 rounded-md hover:opacity-90 self-start"
                >
                  {e.cta}
                </a>
              </div>
            ))}
            <div className="bg-brand-cloud rounded-xl p-7 flex flex-col">
              <span
                className="self-start bg-brand-purple text-white uppercase tracking-widest rounded-full px-3 py-1"
                style={{ fontSize: 11, fontWeight: 700 }}
              >
                Annual event
              </span>
              <h3 className="mt-3 text-brand-purple" style={{ fontWeight: 700, fontSize: 18 }}>
                Annual Sliabh Sneacht Charity Climb
              </h3>
              <p style={{ color: "#947474", fontSize: 13 }} className="mt-1">
                7th August 2026 · in conjunction with Clonmany Festival
              </p>
              <p className="mt-3" style={{ color: "#000", fontSize: 13 }}>
                Our annual charity climb of Sliabh Sneacht — the Roof of Inishowen — held each year
                as part of the Clonmany Festival. A community climb to the summit at 615 metres,
                with the holy well Tobar na Súl at the top. All fitness levels welcome. Details and
                registration to follow.
              </p>
              <a
                href="mailto:inishowentrails@gmail.com"
                className="mt-6 inline-flex items-center justify-center bg-white border-2 border-brand-purple text-brand-purple font-bold uppercase tracking-tight px-5 py-2.5 rounded-md hover:bg-brand-purple hover:text-white self-start"
              >
                Register interest
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
