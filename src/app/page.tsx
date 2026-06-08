import type { Metadata } from "next";
import Link from "next/link";
import { trailClusters } from "@/data/trails";
import { TrailCard } from "@/components/TrailCard";
import InstagramGrid from "@/components/InstagramGrid";

export const metadata: Metadata = {
  title: "Inishowen Trails — Ireland's best-kept secret",
  description: "80km of walking and cycling trails across the Inishowen peninsula, County Donegal.",
};

const heroImg =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80";
const sliabhImg =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80";

const beyondTiles = [
  {
    label: "Food & drink",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Sea saunas & wild swimming",
    img: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Wild Alpaca Way",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "E-bike hire",
    img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  const featured = trailClusters;

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden flex items-center justify-center">
        <img
          src={heroImg}
          alt="Inishowen landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="relative z-10 text-center px-5 max-w-4xl flex flex-col items-center">
          <h1 className="text-white uppercase" style={{ lineHeight: 1.05 }}>
            <span
              className="block font-bold"
              style={{
                fontSize: "clamp(40px, 8vw, 72px)",
                letterSpacing: "-0.01em",
                lineHeight: 1.05,
              }}
            >
              INISHOWEN
            </span>
            <span
              className="block"
              style={{
                fontWeight: 300,
                fontSize: "clamp(30px, 6vw, 52px)",
                letterSpacing: "0.02em",
                lineHeight: 1.05,
              }}
            >
              Ireland's best kept secret
            </span>
          </h1>
          <div style={{ width: 48, height: 3, background: "#E2B53F", margin: "16px 0" }} />
          <p
            className="text-white uppercase"
            style={{
              fontWeight: 300,
              fontSize: 13,
              letterSpacing: "0.12em",
              opacity: 0.8,
            }}
          >
            80km of walking &amp; cycling trails · Donegal, Ireland
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              href="/trails"
              className="inline-flex items-center justify-center bg-brand-amber text-black font-bold uppercase tracking-tight px-7 py-3.5 rounded-md hover:opacity-90 transition"
            >
              Explore the trails
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-purple text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-bold uppercase tracking-tight text-4xl md:text-5xl">
              80km of trails
            </div>
            <div className="mt-2 text-sm md:text-base" style={{ color: "#EBD299" }}>
              &amp; growing
            </div>
          </div>
          <div>
            <div className="font-bold uppercase tracking-tight text-4xl md:text-5xl">3</div>
            <div className="mt-2 text-sm md:text-base" style={{ color: "#EBD299" }}>
              trail clusters
            </div>
          </div>
          <div>
            <div className="font-bold uppercase tracking-tight text-2xl md:text-3xl">
              Traffic free
            </div>
            <div className="mt-2 text-sm md:text-base" style={{ color: "#EBD299" }}>
              on all trails
            </div>
          </div>
          <div>
            <div className="font-bold uppercase tracking-tight text-2xl md:text-3xl">
              Family friendly
            </div>
            <div className="mt-2 text-sm md:text-base" style={{ color: "#EBD299" }}>
              all ages
            </div>
          </div>
        </div>
      </section>

      {/* SLIABH SNEACHT */}
      <section className="bg-brand-cloud">
        <div className="mx-auto max-w-7xl px-5 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden aspect-[4/3]">
            <img src={sliabhImg} alt="Sliabh Sneacht" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="font-bold uppercase tracking-tight text-brand-purple text-3xl md:text-4xl">
              The Roof of Inishowen
            </h2>
            <p className="mt-3 font-light uppercase tracking-tight text-brand-purple text-lg">
              Sliabh Sneacht — Inishowen's Highest Peak
            </p>
            <p className="mt-5 text-black/85 leading-relaxed">
              Rising 615 metres above the Inishowen Peninsula, Sliabh Sneacht is the highest peak on
              the peninsula and a place of pilgrimage for over a thousand years. At its summit sits
              Tobar na Súl — the Well of the Eyes — a holy well that has drawn pilgrims long before
              there were signposts to find it. Locals say the snow stays on Sliabh Sneacht until the
              May Fair of Carn — which is how it got its name: mountain of the snow. Today the
              mountain is fully waymarked from a car park at the foot, with a bilingual trailhead
              stone and trail board on the main road. The path to the summit is yours to walk.
            </p>
            <Link
              href="/trails/sliabh-sneacht"
              className="mt-7 inline-flex items-center bg-brand-amber text-black font-bold uppercase tracking-tight px-6 py-3 rounded-md hover:opacity-90"
            >
              Walk Sliabh Sneacht
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED TRAILS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-center font-bold uppercase tracking-tight text-brand-purple text-3xl md:text-4xl">
            Choose your trail
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {featured.map((t) => (
              <TrailCard key={t.slug} cluster={t} />
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="bg-brand-purple">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-white font-bold uppercase tracking-tight text-3xl md:text-4xl">
            What's on
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-7">
              <h3 className="font-bold text-brand-purple text-xl">Donegal Camino</h3>
              <p className="mt-2 text-black/80 text-sm">
                August &amp; September 2025 · Isle of Doagh → Sliabh Sneacht
              </p>
              <Link
                href="/events"
                className="mt-5 inline-block bg-brand-amber text-black font-bold uppercase tracking-tight px-5 py-2.5 rounded-md hover:opacity-90"
              >
                Join us
              </Link>
            </div>
            <div className="bg-white rounded-xl p-7">
              <h3 className="font-bold text-brand-purple text-xl">Monthly Community Walk</h3>
              <p className="mt-2 text-black/80 text-sm">
                Every month · different trail · local food after
              </p>
              <Link
                href="/events"
                className="mt-5 inline-block border-2 border-brand-purple text-brand-purple font-bold uppercase tracking-tight px-5 py-2.5 rounded-md hover:bg-brand-purple hover:text-white"
              >
                See dates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BEYOND THE TRAILS */}
      <section className="bg-brand-cloud">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-center font-bold uppercase tracking-tight text-brand-purple text-3xl md:text-4xl">
            There's more to Inishowen
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6">
            {beyondTiles.map((t) => (
              <Link
                key={t.label}
                href="/inishowen"
                className="group relative aspect-square overflow-hidden rounded-xl"
              >
                <img
                  src={t.img}
                  alt={t.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/45 group-hover:bg-brand-purple/70 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-white font-bold uppercase tracking-tight text-base md:text-2xl">
                    {t.label}
                  </span>
                  <span className="mt-2 text-white opacity-0 group-hover:opacity-100 transition text-sm">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL — Instagram */}
      <InstagramGrid />

      {/* SOCIAL — Facebook */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 pb-20">
          <div className="max-w-xl mx-auto">
            {/* Facebook strip */}
            <div className="mt-2">
              <a
                href="https://www.facebook.com/NWCD2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#F3F3F3] rounded-lg px-5 py-4 hover:bg-[#EBD299] transition-colors duration-200 group"
              >
                {/* Facebook icon */}
                <div className="w-9 h-9 rounded-full bg-[#504087] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-base leading-none">f</span>
                </div>
                {/* Text */}
                <div>
                  <p className="font-bold text-[#504087] text-sm leading-tight">Join our community on Facebook</p>
                  <p className="text-[#504087] text-sm">Inishowen Trails →</p>
                </div>
              </a>
            </div>
          </div>
          <p className="mt-10 text-center italic" style={{ color: "#947474" }}>
            The older generation shaped Inishowen. The younger generation is discovering it. Follow
            us on both.
          </p>
        </div>
      </section>
    </>
  );
}
