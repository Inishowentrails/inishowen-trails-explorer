import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MapPin, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "What to Do in Inishowen — Inishowen Trails",
  description:
    "Food, drink, saunas, alpacas, glamping and more — what to do on the Inishowen peninsula when you're off the trails.",
};

interface Biz {
  name: string;
  desc: string;
  location: string;
  img: string;
  href?: string;
}

function Card({ b }: { b: Biz }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm flex flex-col">
      <div className="aspect-[4/3] overflow-hidden bg-brand-cloud">
        <img src={b.img} alt={b.name} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-brand-purple text-lg">{b.name}</h3>
        <p className="text-sm text-black/80 flex-1">{b.desc}</p>
        <p className="text-xs text-brand-muted-purple flex items-center gap-1">
          <MapPin size={12} /> {b.location}
        </p>
        {b.href && (
          <a
            href={b.href}
            className="text-sm font-bold text-brand-purple inline-flex items-center gap-1 hover:text-brand-amber"
          >
            Visit <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}

function Category({ title, items }: { title: string; items: Biz[] }) {
  return (
    <div className="mt-14">
      <h2 className="font-bold uppercase tracking-tight text-brand-purple text-2xl md:text-3xl">
        {title}
      </h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((b, i) => (
          <Card key={`${b.name}-${i}`} b={b} />
        ))}
      </div>
    </div>
  );
}

const img = (s: string) => `https://images.unsplash.com/${s}?auto=format&fit=crop&w=900&q=80`;

export default function InishowenPage() {
  const food: Biz[] = [
    {
      name: "Nancy's Barn",
      desc: "Award-winning seafood chowder in Ballyliffin.",
      location: "Ballyliffin",
      img: img("photo-1414235077428-338989a2e8c0"),
    },
    {
      name: "Kealy's Seafood Bar",
      desc: "Fresh-off-the-boat seafood overlooking Greencastle harbour.",
      location: "Greencastle",
      img: img("photo-1467003909585-2f8a72700288"),
    },
    {
      name: "McGrory's of Culdaff",
      desc: "Music, food, and a warm welcome in the heart of Culdaff.",
      location: "Culdaff",
      img: img("photo-1414235077428-338989a2e8c0"),
    },
    {
      name: "The Beach House Bar",
      desc: "Coastal bites with a view across Buncrana shore.",
      location: "Buncrana",
      img: img("photo-1504674900247-0877df9cc836"),
    },
  ];
  const saunas: Biz[] = [
    {
      name: "Sea View Sauna, Culdaff",
      desc: "The dreamiest sauna/sea swim experience on the Wild Atlantic Way.",
      location: "Culdaff",
      img: img("photo-1530541930197-ff16ac917b0e"),
    },
  ];
  const experiences: Biz[] = [
    {
      name: "Wild Alpaca Way",
      desc: "Walk the trails with Frank and friends. Yes, really.",
      location: "Inishowen",
      img: img("photo-1552058544-f2b08422138a"),
    },
  ];
  const accom: Biz[] = [
    {
      name: "Culdaff Estate Glamping",
      desc: "Glamping pods on a private estate, minutes from Culdaff beach.",
      location: "Culdaff",
      img: img("photo-1504280390367-361c6d9f38f4"),
    },
    {
      name: "Inishowen Glamping Co.",
      desc: "Off-grid stays with views over the peninsula.",
      location: "Inishowen",
      img: img("photo-1510312305653-8ed496efae75"),
    },
  ];
  const ebike: Biz[] = [
    {
      name: "E-bike hire — coming soon",
      desc: "Two local e-bike companies launching on the trails.",
      location: "Inishowen",
      img: img("photo-1485965120184-e220f721d03e"),
    },
    {
      name: "E-bike hire — coming soon",
      desc: "Two local e-bike companies launching on the trails.",
      location: "Inishowen",
      img: img("photo-1485965120184-e220f721d03e"),
    },
  ];
  const attractions: Biz[] = [
    {
      name: "Malin Head",
      desc: "Ireland's most northerly point — wild, windswept, unforgettable.",
      location: "Malin",
      img: img("photo-1500534314209-a25ddb2bd429"),
    },
    {
      name: "Glenevin Waterfall",
      desc: "A waymarked walk to a 30m cascade in a wooded glen.",
      location: "Clonmany",
      img: img("photo-1470071459604-3b5ec3a7fe05"),
    },
    {
      name: "Fort Dunree",
      desc: "Cliff-top military fort and museum overlooking Lough Swilly.",
      location: "Buncrana",
      img: img("photo-1464822759023-fed622ff2c3b"),
    },
  ];

  return (
    <>
      <PageHero title="What to Do in Inishowen" />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-14">
          <p className="max-w-3xl text-lg text-black/85 leading-relaxed">
            The trails are just the beginning. Inishowen is one of Ireland's most extraordinary
            peninsulas — wild, ancient, and still largely undiscovered. Here's what to do when
            you're not on the trails.
          </p>

          <Category title="Food & drink" items={food} />
          <Category title="Saunas & wellness" items={saunas} />
          <Category title="Experiences" items={experiences} />
          <Category title="Accommodation" items={accom} />
          <Category title="E-bike hire" items={ebike} />
          <Category title="Attractions" items={attractions} />
        </div>
      </section>
    </>
  );
}
