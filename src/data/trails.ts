export type Route = {
  nameEn: string;
  nameIr: string;
  distance: string;
  distanceType: "loop" | "one-way" | "return";
  duration: string;
  heightGain: string;
  difficulty: "Easy" | "Moderate";
  description: string;
  pointsOfInterest: string[];
  note?: string;
};

export type TrailCluster = {
  slug: string;
  nameEn: string;
  nameIr: string;
  region: string;
  tagline: string;
  heroDescription: string;
  difficulty: "Easy" | "Moderate" | "Mixed";
  image: string;
  parking: string;
  routes: Route[];
};

export const trailClusters: TrailCluster[] = [
  {
    slug: "sliabh-sneacht",
    nameEn: "Sliabh Sneacht & Carndonagh",
    nameIr: "Slí Shliabh Sneachta",
    region: "Central Inishowen",
    tagline: "The roof of Inishowen — Ireland's best kept secret",
    heroDescription:
      "The trails around Sliabh Sneacht sit on the slopes of Inishowen's highest mountain (615m) — a pilgrim path with a holy well at the summit and views that stretch from Lough Swilly to Malin Head. Four routes radiate from the same starting area, from a 30-minute lakeside loop to a full day on the Drovers Trail.",
    difficulty: "Moderate",
    // PLACEHOLDER: swap for a real photo at public/images/trails/sliabh-sneacht.jpg
    image: "/images/trails/sliabh-sneacht.jpg",
    parking:
      "Two start points: Sliabh Sneacht Centre on R238, and the R244 car park. Both have free parking. Toilets available at R238 start.",
    routes: [
      {
        nameEn: "Old Carn Road Drovers Trail",
        nameIr: "Seanchosán Tréada an Chairn",
        distance: "5.6km",
        distanceType: "one-way",
        duration: "3 hours return",
        heightGain: "172m",
        difficulty: "Moderate",
        description:
          "Located on the lower slopes of Inishowen's highest mountain, Sliabh Sneacht (615m). An exceptional walking experience through rugged and spectacular countryside. Views are breathtaking in all directions — Lough Swilly to the west and Malin Head to the north. Follows a gravel track throughout, making it safe and suitable for families.",
        pointsOfInterest: [
          "King and Queen of the Mintiaghs",
          "Location of former Shebeen",
          "Parish boundary markers",
          "Lakes and coastal views",
        ],
      },
      {
        nameEn: "Heart of Inishowen Way",
        nameIr: "Slí Chroí Inis Eoghain",
        distance: "6.1km",
        distanceType: "loop",
        duration: "1.5 hours",
        heightGain: "174m",
        difficulty: "Moderate",
        description:
          "A uniquely heart-shaped trail forming a double loop through gravel track and open bogland. The tracks are still used today by local people to access turf banks — a living link to times past when turf heated every home in Inishowen. Waymarked clockwise only.",
        pointsOfInterest: [
          "Spectacular panoramic views",
          "Ancient turf banks",
          "Open bogland landscape",
        ],
        note: "Waymarked in a clockwise direction only.",
      },
      {
        nameEn: "Lakes Loop",
        nameIr: "Lúb Cois Locha",
        distance: "1.5km",
        distanceType: "loop",
        duration: "0.5 hours",
        heightGain: "42m",
        difficulty: "Moderate",
        description:
          "A short optional loop off the Old Carn Road Drovers Trail, waymarked with pink arrows. It provides a closer view of two of Inishowen's iconic lakes. Lough Naminn has two islands; Lough Fad (Long Lake) has a crannóg — an artificially constructed ancient island settlement — on its only island.",
        pointsOfInterest: [
          "Lough Naminn with two islands",
          "Lough Fad",
          "Crannóg — ancient island settlement",
        ],
        note: "Only accessible as an optional loop from the Old Carn Road Drovers Trail, not from the trailhead directly.",
      },
      {
        nameEn: "Meenavogey Trail",
        nameIr: "Slí Mhín a' Bhogaigh",
        distance: "2.9km",
        distanceType: "one-way",
        duration: "1.5 hours return",
        heightGain: "14m",
        difficulty: "Moderate",
        description:
          "A short linear route branching from the Old Carn Road Drovers Trail. It terminates near the disused Altashane Quarry, owned by Donegal County Council. Spectacular views throughout.",
        pointsOfInterest: ["Spectacular views", "Disused Altashane Quarry"],
      },
    ],
  },
  {
    slug: "clonmany",
    nameEn: "Clonmany & Meenaward",
    nameIr: "Cluain Maine",
    region: "North Inishowen",
    tagline: "Valley trails, mountain loops, and stories carved into the land",
    heroDescription:
      "Four trails spread across the Clonmany valley and the slopes of Bulbin Mountain. From the easy riverside Drovers path to the full 10km Bulbin Loop with its pre-famine clachan and summit cross, this is the richest cluster for history and story. The three linear trails — Umricam Shandrum, Tip O'Neill, and Doris Russo — connect into a single 19km route for those who want a full day out.",
    difficulty: "Mixed",
    // PLACEHOLDER: swap for a real photo at public/images/trails/clonmany.jpg
    image: "/images/trails/clonmany.jpg",
    parking:
      "Multiple start points across the Clonmany area. Check individual route details below for the nearest parking to your chosen trail.",
    routes: [
      {
        nameEn: "Fox's Rock / Bulbin Loop",
        nameIr: "Carraig an tSionnaigh / Lúb na Bolban",
        distance: "10km",
        distanceType: "loop",
        duration: "2.5–3 hours",
        heightGain: "275m",
        difficulty: "Moderate",
        description:
          "The loop follows mostly gravel tracks with a short section of open bog on the lower slopes of Bulbin Mountain. A sheltered valley reveals the remains of a pre-famine clachan and nearby remnants of traditional farming field patterns. The trail offers exceptional views of the surrounding countryside.",
        pointsOfInterest: [
          "Pre-famine clachan ruins",
          "Traditional field patterns",
          "Bulbin's summit cross (erected 1933)",
          "Panoramic views",
        ],
        note: "Waymarked in a clockwise direction only.",
      },
      {
        nameEn: "Tip O'Neill Trail",
        nameIr: "Slí Tip O'Neill",
        distance: "6.8km",
        distanceType: "one-way",
        duration: "3.5 hours return",
        heightGain: "173m",
        difficulty: "Moderate",
        description:
          "Tip O'Neill was Speaker of the US House of Representatives (1977–1987). His grandmother, Eunice Fullerton, was born in a one-roomed cottage at Beam Hill — the ruins of which can be seen along the trail. An information board adjacent to the ruins tells the O'Neill family story.",
        pointsOfInterest: [
          "Tip O'Neill ancestral home ruins",
          "Panoramic views",
          "Information stone",
        ],
      },
      {
        nameEn: "Doris Russo Trail",
        nameIr: "Slí Doris Russo",
        distance: "3.6km",
        distanceType: "one-way",
        duration: "2 hours return",
        heightGain: "139m",
        difficulty: "Moderate",
        description:
          "Doris Russo was an American who retired to Inishowen, bought the Glen House in Clonmany, and fell in love with her adoptive homeland. She became the driving force behind many community initiatives including the famous Glenevin Waterfall and Butler's Glen Loop. Combined with the Tip O'Neill and Umricam Shandrum trails, the full linear route is 19km.",
        pointsOfInterest: [
          "Wild Atlantic Way",
          "Inishowen 100 route",
          "Panoramic views",
          "Fairy tree",
        ],
      },
      {
        nameEn: "Umricam / Shandrum Trail",
        nameIr: "An tIomaire Cam / Seandroim",
        distance: "4.9km",
        distanceType: "one-way",
        duration: "2.5–3 hours return",
        heightGain: "156m",
        difficulty: "Easy",
        description:
          "Follows the original route of the Old Carn Road (Drovers Trail) between Buncrana and Carndonagh — a quiet country road running through the townlands of Umricam and Shandrum. Virtually level throughout and suitable for walkers and cyclists of all abilities.",
        pointsOfInterest: [
          "Glaise Bridge and Stone",
          "Quiet country road",
          "Suitable for all abilities including cyclists",
        ],
      },
    ],
  },
  {
    slug: "muff-quigleys-point",
    nameEn: "Muff & Quigley's Point",
    nameIr: "Magh agus Rinn Uí Choighligh",
    region: "South Inishowen",
    tagline: "Ancient woodland, Lough Foyle views, and trails that connect two villages",
    heroDescription:
      "Two trails covering the hills and ancient woodland between Muff and Quigley's Point, looking out over Lough Foyle toward the Antrim coast. Grania's Gap passes through native woodland home to both red and grey squirrels; the Cruckahenny Trail climbs to striking views of Binevenagh. Both connect with the Derry–Quigley's Point Greenway.",
    difficulty: "Moderate",
    // PLACEHOLDER: swap for a real photo at public/images/trails/muff.jpg
    image: "/images/trails/muff.jpg",
    parking:
      "Muff village (Grania's Gap start/finish) or Twin Bridges / Quigley's Point Village (Cruckahenny start). Check individual route details below.",
    routes: [
      {
        nameEn: "Grania's Gap Trail",
        nameIr: "Slí Bhearna Ghráinne",
        distance: "11.2km",
        distanceType: "loop",
        duration: "3 hours",
        heightGain: "274m",
        difficulty: "Moderate",
        description:
          "Exceptional views over Lough Foyle and the coastal landscape beyond. The trail passes through the ancient native woodland of Lisnagra Woods, home to populations of both red and grey squirrels. A quaint gravel track follows a stream to the highest vantage point where ruined wallsteads and an ancient standing stone can be observed. Connects with the Derry–Quigley's Point Greenway in Muff.",
        pointsOfInterest: [
          "Lisnagra Woods ancient native woodland",
          "Red and grey squirrels",
          "Ruined homestead",
          "Ancient standing stone",
          "Muff Liquor Company",
        ],
        note: "Waymarked in an anticlockwise direction only.",
      },
      {
        nameEn: "Cruckahenny Trail",
        nameIr: "Slí Chnoc an Cheannaí",
        distance: "8.9km",
        distanceType: "one-way",
        duration: "2.5 hours",
        heightGain: "291m",
        difficulty: "Moderate",
        description:
          "Starting from the Twin Bridges in the Illies (near Fullerton Dam) or from Quigley's Point Village, the trail winds through the Cruckahenny hills. At its highest point it offers striking views of Lough Foyle, Binevenagh, and the Antrim Coast.",
        pointsOfInterest: [
          "Fullerton Dam",
          "Ruined wallsteads",
          "Windfarm",
          "Views of Lough Foyle and Binevenagh",
          "Antrim Coast views",
        ],
      },
    ],
  },
];

export const getClusterBySlug = (slug: string) =>
  trailClusters.find((c) => c.slug === slug);
