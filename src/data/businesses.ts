export type BusinessCategory =
  | 'food-drink'
  | 'accommodation'
  | 'wellness'
  | 'experiences'
  | 'retail'
  | 'e-bike';

export interface Business {
  id: string;
  name: string;
  location: string;
  category: BusinessCategory;
  description: string;
  image: string | null; // null = show placeholder
  linkUrl: string | null; // null = no button rendered
  linkLabel: string;
  instagramHandle: string | null;
  featured: boolean; // true = larger card treatment (future use)
}

export const businesses: Business[] = [
  // ─── FOOD & DRINK ───────────────────────────────────────────
  {
    id: 'nancys-barn',
    name: "Nancy's Barn",
    location: 'Ballyliffin',
    category: 'food-drink',
    description:
      "Post-hike lunch sorted. Nancy's Barn is the kind of place you stumble into cold and leave warm — famous for their seafood chowder and a welcome that feels entirely Inishowen. If you're finishing the Sliabh Sneacht trails, this is your reward.",
    image: '/images/inishowen/nancys-barn.jpg',
    linkUrl: null,
    linkLabel: 'Visit',
    instagramHandle: null,
    featured: false,
  },
  {
    id: 'mcgrorys',
    name: "McGrorys of Culdaff",
    location: 'Culdaff',
    category: 'food-drink',
    description:
      'Live music, fresh seafood, and the fire always lit. McGrorys is an institution — the kind of pub that has been at the heart of Inishowen long enough to become part of the landscape itself. Come for the food, stay for the session.',
    image: '/images/inishowen/mcgrorys.jpg',
    linkUrl: null,
    linkLabel: 'Visit',
    instagramHandle: null,
    featured: false,
  },
  {
    id: 'diamond-cafe',
    name: 'Diamond Café',
    location: 'Carndonagh',
    category: 'food-drink',
    description:
      "Our go-to after the monthly Solo Mates walk. The Diamond Café is where the community comes to refuel — good coffee, proper food, and a friendly face behind the counter. Carndonagh's favourite stop before or after the trails.",
    image: null,
    linkUrl: null,
    linkLabel: 'Visit',
    instagramHandle: null,
    featured: false,
  },
  {
    id: 'tank-and-skinnys',
    name: "Tank & Skinny's",
    location: 'TBC', // ← PLACEHOLDER: location to be confirmed
    category: 'food-drink',
    description:
      'TBC', // ← PLACEHOLDER: description to be written once location confirmed
    image: null,
    linkUrl: null,
    linkLabel: 'Visit',
    instagramHandle: null,
    featured: false,
  },
  {
    id: 'rusty-nail',
    name: 'The Rusty Nail',
    location: 'TBC', // ← PLACEHOLDER: location to be confirmed
    category: 'food-drink',
    description:
      "Donegal's Country Pub of the Year 2025. A proper Donegal pub — great atmosphere, local character, and the kind of craic you can't manufacture. Worth the detour.",
    image: null,
    linkUrl: null,
    linkLabel: 'Visit',
    instagramHandle: null,
    featured: false,
  },

  // ─── ACCOMMODATION ───────────────────────────────────────────
  {
    id: 'culdaff-estate-glamping',
    name: 'Culdaff Estate Glamping',
    location: 'Culdaff',
    category: 'accommodation',
    description:
      'Wake up to birdsong and the sound of the sea. Culdaff Estate Glamping offers luxury pods nestled in nature — the kind of place where breakfast outdoors feels like the most natural thing in the world. The perfect base for a full Inishowen weekend.',
    image: '/images/inishowen/culdaff-glamping.jpg',
    linkUrl: null,
    linkLabel: 'Book',
    instagramHandle: null,
    featured: false,
  },

  // ─── WELLNESS ───────────────────────────────────────────────
  {
    id: 'sea-view-sauna',
    name: 'The Sea View Sauna',
    location: 'Culdaff',
    category: 'wellness',
    description:
      'There are saunas, and then there is this. A barrel sauna with a round window facing the Atlantic — heat, cold water, sea air. Widely described as the finest sauna experience on the Wild Atlantic Way. Book in advance.',
    image: '/images/inishowen/sea-view-sauna.jpg',
    linkUrl: null,
    linkLabel: 'Book',
    instagramHandle: null,
    featured: false,
  },
  {
    id: 'sound-bath-wellness',
    name: 'TBC', // ← PLACEHOLDER: business name to be confirmed
    location: 'TBC', // ← PLACEHOLDER: location to be confirmed
    category: 'wellness',
    description:
      'TBC', // ← PLACEHOLDER: description to be written once business confirmed
    image: null,
    linkUrl: null,
    linkLabel: 'Book',
    instagramHandle: null,
    featured: false,
  },

  // ─── EXPERIENCES ─────────────────────────────────────────────
  {
    id: 'wild-alpaca-way',
    name: 'Wild Alpaca Way',
    location: 'Malin Head',
    category: 'experiences',
    description:
      "At Ireland's most northerly point, you can walk your own alpaca across some of the most breathtaking terrain on the island. One of those experiences that sounds unlikely and feels completely unforgettable. A family adventure like no other — Frank the alpaca may or may not cooperate.",
    image: '/images/inishowen/wild-alpaca-way.jpg',
    linkUrl: null,
    linkLabel: 'Book',
    instagramHandle: null,
    featured: false,
  },
  {
    id: 'moville-pottery-experience',
    name: 'Moville Pottery',
    location: 'Moville',
    category: 'experiences',
    description:
      'Pick up a brush and paint your own piece — the paint-your-own pottery sessions at Moville Pottery are genuinely one of the most enjoyable ways to spend an afternoon in Inishowen, whatever your artistic ability.',
    image: '/images/inishowen/moville-pottery-experience.jpg',
    linkUrl: null,
    linkLabel: 'Book a session',
    instagramHandle: null,
    featured: false,
  },
  {
    id: 'glenevin-waterfall',
    name: 'Glenevin Waterfall',
    location: 'Clonmany',
    category: 'experiences',
    description:
      'A 1km easy trail through woodland to one of Inishowen\'s most beautiful natural features. Free to visit, suitable for all ages, and the kind of thing that stops people in their tracks every single time.',
    image: '/images/inishowen/glenevin-waterfall.jpg',
    linkUrl: null,
    linkLabel: 'Get directions',
    instagramHandle: null,
    featured: false,
  },

  // ─── E-BIKE ──────────────────────────────────────────────────
  {
    id: 'ebike-company-1',
    name: 'TBC', // ← PLACEHOLDER: e-bike company 1 name
    location: 'TBC',
    category: 'e-bike',
    description:
      'TBC', // ← PLACEHOLDER
    image: null,
    linkUrl: null,
    linkLabel: 'Hire a bike',
    instagramHandle: null,
    featured: false,
  },
  {
    id: 'ebike-company-2',
    name: 'TBC', // ← PLACEHOLDER: e-bike company 2 name
    location: 'TBC',
    category: 'e-bike',
    description:
      'TBC', // ← PLACEHOLDER
    image: null,
    linkUrl: null,
    linkLabel: 'Hire a bike',
    instagramHandle: null,
    featured: false,
  },

  // ─── RETAIL ──────────────────────────────────────────────────
  {
    id: 'curiosity-shop',
    name: 'Curiosity Shop',
    location: 'Malin Head',
    category: 'retail',
    description:
      "Peter's shop is not like other shops. Tucked along the coast at Malin Head, it's a treasure trove of vintage signs, nick-nacks, and genuine curiosities — the kind of place you browse for ten minutes and emerge forty-five minutes later with something you didn't know you needed. A Malin Head institution.",
    image: '/images/inishowen/curiosity-shop.jpg',
    linkUrl: null,
    linkLabel: 'Visit',
    instagramHandle: null,
    featured: false,
  },
  {
    id: 'moville-pottery-retail',
    name: 'Moville Pottery',
    location: 'Moville',
    category: 'retail',
    description:
      'Watch Lowry work at the wheel, then take home a piece of Inishowen. Moville Pottery makes functional, beautiful ceramics designed for everyday use — handcrafted on the peninsula and built to last.',
    image: '/images/inishowen/moville-pottery.jpg',
    linkUrl: null,
    linkLabel: 'Visit',
    instagramHandle: null,
    featured: false,
  },
];

export const categoryLabels: Record<BusinessCategory, string> = {
  'food-drink': 'Food & Drink',
  accommodation: 'Accommodation',
  wellness: 'Wellness',
  experiences: 'Experiences',
  retail: 'Retail & Craft',
  'e-bike': 'E-Bike Hire',
};

export const categoriesInOrder: BusinessCategory[] = [
  'food-drink',
  'accommodation',
  'wellness',
  'e-bike',
  'experiences',
  'retail',
];

export function getBusinessesByCategory(cat: BusinessCategory): Business[] {
  return businesses.filter((b) => b.category === cat);
}
