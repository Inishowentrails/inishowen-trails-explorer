import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About — Inishowen Trails",
  description:
    "Inishowen Trails is built by the community for the community — a project of North West Community Development, registered Irish charity 20206770.",
};

function Section({
  heading,
  children,
  alt = false,
}: {
  heading: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section className={alt ? "bg-brand-cloud" : "bg-white"}>
      <div className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="font-bold uppercase tracking-tight text-brand-purple text-3xl md:text-4xl">
          {heading}
        </h2>
        <div className="mt-5 text-black/85 leading-relaxed text-lg">{children}</div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Inishowen Trails" />

      <Section heading="Built by the community, for the community">
        <p>
          Inishowen has always been there. It just needed someone to show the way in. Kevin and
          Catherine Doherty founded North West Community Development (NWCD) to do exactly that — to
          build something lasting for the people of Inishowen and the visitors who come to discover
          it. What started as a handful of waymarked paths has grown into over 80km of traffic-free
          trails, funded by government grants and built on community belief that this peninsula
          deserves to be known.
        </p>
      </Section>

      <Section heading="The bigger picture" alt>
        <p>
          Right now our trails exist in clusters across Inishowen. The long-term vision — the one
          that drives everything we do — is a Donegal Camino: a single connected route linking every
          trail cluster from Muff in the south to Malin Head in the north. The Donegal Camino is
          already beginning. In August and September 2025, Isle of Doagh and Sliabh Sneacht form
          days one and two of the journey.
        </p>
      </Section>

      <Section heading="Who we are">
        <p>
          Inishowen Trails is the marketing brand of North West Community Development (NWCD), a
          registered Irish charity (Charity No: 20206770). Our trails are funded through government
          grants including Sport Ireland and Donegal County Council. We are a not-for-profit
          community organisation.
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Sport Ireland", "Donegal County Council", "Government of Ireland"].map((n) => (
            <div
              key={n}
              className="aspect-[3/1] bg-brand-cloud border border-black/10 rounded-md flex items-center justify-center text-brand-muted-purple text-sm font-bold uppercase tracking-tight text-center px-3"
            >
              {n}
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-brand-cloud">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="font-bold uppercase tracking-tight text-brand-purple text-3xl md:text-4xl">
            Founders
          </h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              { name: "Kevin Doherty", role: "Co-founder, North West Community Development" },
              {
                name: "Catherine McLaughlin",
                role: "Co-founder, North West Community Development",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm"
              >
                <div className="aspect-[4/3] bg-brand-muted-purple/30" />
                <div className="p-6">
                  <h3 className="font-bold text-brand-purple text-xl">{p.name}</h3>
                  <p className="text-sm text-black/75 mt-1">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
