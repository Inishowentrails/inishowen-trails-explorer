export type Difficulty = "Easy" | "Moderate";

export interface Trail {
  slug: string;
  englishName: string;
  irishName?: string;
  distance: string;
  difficulty: Difficulty;
  heightGain: string;
  time: string;
  shape: "one-way" | "loop";
  description: string;
  pointsOfInterest: string[];
  image: string;
}

const img = (seed: string) =>
  `https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80&sig=${encodeURIComponent(seed)}`;

export const trails: Trail[] = [
  {
    slug: "tip-oneill-trail",
    englishName: "Tip O'Neill Trail",
    distance: "6.8km one-way",
    difficulty: "Moderate",
    heightGain: "173m",
    time: "3.5 hours return",
    shape: "one-way",
    description:
      "Tip O'Neill was Speaker of the US House of Representatives (1977–1987). His grandmother was born in a one-roomed cottage on Beam Hill — the ruins can be seen along this trail.",
    pointsOfInterest: ["Tip O'Neill Ancestral Home", "Panoramic views"],
    image: img("tip-oneill"),
  },
  {
    slug: "doris-russo-trail",
    englishName: "Doris Russo Trail",
    distance: "3.6km one-way",
    difficulty: "Moderate",
    heightGain: "139m",
    time: "2 hours return",
    shape: "one-way",
    description:
      "Named after an American who fell in love with Inishowen. Doris Russo became the driving force behind many community initiatives including Glenevin Waterfall.",
    pointsOfInterest: ["Wild Atlantic Way", "Inishowen 100", "Fairy Tree"],
    image: img("doris-russo"),
  },
  {
    slug: "umricam-shandrum-trail",
    englishName: "Umricam / Shandrum Trail",
    irishName: "An tIomaire Cam",
    distance: "4.9km one-way",
    difficulty: "Easy",
    heightGain: "156m",
    time: "2.5–3 hours return",
    shape: "one-way",
    description:
      "Follows the original route of the Old Carn Road (Drovers Trail) between Buncrana and Carndonagh. Virtually level throughout — suitable for all abilities.",
    pointsOfInterest: ["Glaise Bridge and Stone"],
    image: img("umricam"),
  },
  {
    slug: "foxs-rock-bulbin-loop",
    englishName: "Fox's Rock / Bulbin Loop",
    irishName: "Carraig an tSionnaigh",
    distance: "10km loop",
    difficulty: "Moderate",
    heightGain: "275m",
    time: "2.5–3 hours",
    shape: "loop",
    description:
      "Gravel tracks on the lower slopes of Bulbin Mountain through a sheltered valley. Pre-famine clachan remains and traditional field patterns. Waymarked clockwise only.",
    pointsOfInterest: ["Clachan", "Summit cross (1933)", "Panoramic views"],
    image: img("foxs-rock"),
  },
  {
    slug: "old-carn-road-drovers-trail",
    englishName: "Old Carn Road Drovers Trail",
    irishName: "Seanchosán Tréada an Chairn",
    distance: "5.6km one-way",
    difficulty: "Moderate",
    heightGain: "172m",
    time: "3 hours return",
    shape: "one-way",
    description:
      "On the lower slopes of Sliabh Sneacht (615m), Inishowen's highest mountain. Breathtaking views including Lough Swilly and Malin Head. Entirely gravel track — traffic free, safe for families.",
    pointsOfInterest: [
      "King and Queen of the Mintiaghs",
      "Former Shebeen",
      "Lakes and coastal views",
    ],
    image: img("drovers"),
  },
  {
    slug: "heart-of-inishowen-way",
    englishName: "Heart of Inishowen Way",
    irishName: "Slí Chroí Inis Eoghain",
    distance: "6.1km loop",
    difficulty: "Moderate",
    heightGain: "174m",
    time: "1.5 hours",
    shape: "loop",
    description:
      "A uniquely heart-shaped trail creating a double loop through gravel trail and open bogland. Still used by locals to access turf banks — a living link to the past. Waymarked clockwise only.",
    pointsOfInterest: ["Spectacular views"],
    image: img("heart-inishowen"),
  },
  {
    slug: "granias-gap-trail",
    englishName: "Grania's Gap Trail",
    irishName: "Slí Bhearna Ghráinne",
    distance: "11.2km loop",
    difficulty: "Moderate",
    heightGain: "274m",
    time: "3 hours",
    shape: "loop",
    description:
      "Exceptional views over Lough Foyle. Passes through the ancient native woodland of Lisnagra, home to both Red and Grey Squirrels. Connects with the Derry–Quigley's Point Greenway. Waymarked anticlockwise only.",
    pointsOfInterest: ["Ruined homestead", "Ancient standing stone", "Muff Liquor Company"],
    image: img("granias-gap"),
  },
  {
    slug: "cruckahenny-trail",
    englishName: "Cruckahenny Trail",
    irishName: "Slí Chnoc an Cheannaí",
    distance: "8.9km one-way",
    difficulty: "Moderate",
    heightGain: "291m",
    time: "2.5 hours",
    shape: "one-way",
    description:
      "From Twin Bridges in the Illies or Quigley's Point Village through the Cruckahenny hills. At its highest, striking views of Lough Foyle, Binevenagh and the Antrim Coast.",
    pointsOfInterest: ["Fullerton Dam", "Ruined wallsteads", "Windfarm"],
    image: img("cruckahenny"),
  },
  {
    slug: "meenavogey-trail",
    englishName: "Meenavogey Trail",
    irishName: "Slí Mhín a' Bhogaigh",
    distance: "2.9km one-way",
    difficulty: "Moderate",
    heightGain: "14m",
    time: "1.5 hours return",
    shape: "one-way",
    description:
      "A short linear route linking from the Old Carn Road Drovers Trail. Terminates near the disused Altashane Quarry.",
    pointsOfInterest: ["Spectacular views"],
    image: img("meenavogey"),
  },
];

export const getTrailBySlug = (slug: string) => trails.find((t) => t.slug === slug);
