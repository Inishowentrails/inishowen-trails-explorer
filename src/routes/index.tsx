import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { trails } from "@/data/trails";
import { TrailCard } from "@/components/TrailCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inishowen Trails — Ireland's best-kept secret" },
      {
        name: "description",
        content:
          "80km of traffic-free walking and cycling trails across the Inishowen peninsula, County Donegal.",
      },
    ],
  }),
  component: Home,
});

const heroImg =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=2000&q=80";
const sliabhImg =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80";

const beyondTiles = [
  { label: "Food & drink", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80" },
  { label: "Sea saunas & wild swimming", img: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=900&q=80" },
  { label: "Wild Alpaca Way", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=900&q=80" },
  { label: "E-bike hire", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80" },
];

const instaImgs = [
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
];

function Home() {
  const featured = [
    trails.find((t) => t.slug === "old-carn-road-drovers-trail")!,
    trails.find((t) => t.slug === "granias-gap-trail")!,
    trails.find((t) => t.slug === "tip-oneill-trail")!,
  ];

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
        <div className="relative z-10 text-center px-5 max-w-4xl">
          <h1 className="text-white font-bold uppercase tracking-tight text-4xl sm:text-6xl md:text-7xl leading-[0.95]">
            Ireland's best-kept secret
          </h1>
          <p className="mt-5 text-white font-light uppercase tracking-tight text-base sm:text-xl md:text-2xl">
            80km of trails. Zero tarmac. Inishowen, Donegal.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/trails"
              className="inline-flex items-center justify-center bg-brand-amber text-black font-bold uppercase tracking-tight px-7 py-3.5 rounded-md hover:opacity-90 transition"
            >
              Explore the trails
            </Link>
            <Link
              to="/inishowen"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold uppercase tracking-tight px-7 py-3.5 rounded-md hover:bg-white hover:text-black transition"
            >
              Plan your visit
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-brand-purple text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["80km", "of trails"],
            ["9", "trail clusters"],
            ["100%", "traffic-free"],
            ["All ages", "family friendly"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-bold uppercase tracking-tight text-4xl md:text-5xl">{n}</div>
              <div className="mt-2 text-sm md:text-base text-white/85">{l}</div>
            </div>
          ))}
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
              The Sacred Mountain
            </h2>
            <p className="mt-3 font-light uppercase tracking-tight text-brand-purple text-lg">
              Sliabh Sneacht — Inishowen's Highest Peak
            </p>
            <p className="mt-5 text-black/85 leading-relaxed">
              Long before it had a name on a signpost, pilgrims were walking Sliabh Sneacht.
              At 615 metres, Inishowen's highest peak carries a holy well at its summit and a
              pilgrim path worn smooth by centuries of feet. Fully waymarked with a car park,
              trailhead stone, and bilingual signage — it's ready for you. This August, it
              becomes the centrepiece of the Donegal Camino.
            </p>
            <Link
              to="/trails/$slug"
              params={{ slug: "old-carn-road-drovers-trail" }}
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
              <TrailCard key={t.slug} trail={t} />
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
              <button className="mt-5 bg-brand-amber text-black font-bold uppercase tracking-tight px-5 py-2.5 rounded-md hover:opacity-90">
                Join us
              </button>
            </div>
            <div className="bg-white rounded-xl p-7">
              <h3 className="font-bold text-brand-purple text-xl">Monthly Community Walk</h3>
              <p className="mt-2 text-black/80 text-sm">
                Every month · different trail · local food after
              </p>
              <button className="mt-5 border-2 border-brand-purple text-brand-purple font-bold uppercase tracking-tight px-5 py-2.5 rounded-md hover:bg-brand-purple hover:text-white">
                See dates
              </button>
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
                to="/inishowen"
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

      {/* INSTAGRAM */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <h2 className="text-center font-bold tracking-tight text-brand-purple text-2xl md:text-3xl uppercase">
            Follow the trail @inishowentrails
          </h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
            {instaImgs.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-md">
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-brand-purple">
            <Instagram size={18} />
            <a
              href="https://instagram.com/inishowentrails"
              className="font-bold hover:text-brand-amber"
            >
              @inishowentrails
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
