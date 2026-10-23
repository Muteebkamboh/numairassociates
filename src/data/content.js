/*
  Site content for The Signature Estate.

  All photographs live in src/assets/images/ and are free to use under the Pexels License
  (https://www.pexels.com/license/). Source pages are listed next to each import so they
  can be credited or swapped for the client's own photography later.

  Property names, details and prices below are ILLUSTRATIVE EXAMPLES, not live listings.
*/

import heroVilla from '../assets/images/hero-villa.jpg'; // pexels.com/photo/10610733 — alleksana
import propertyOne from '../assets/images/property-one.jpg'; // pexels.com/photo/36540391 — Raymond Petrik
import propertyTwo from '../assets/images/property-two.jpg'; // pexels.com/photo/6342356 — Roman Odintsov
import propertyThree from '../assets/images/property-three.jpg'; // pexels.com/photo/28443032 — maks057kh
import featuredResidence from '../assets/images/featured-residence.jpg'; // pexels.com/photo/11871257 — Studio Pepite
import locationOne from '../assets/images/location-one.jpg'; // pexels.com/photo/37704879 — Muhammad Kshaf Asim (Lahore)
import locationTwo from '../assets/images/location-two.jpg'; // pexels.com/photo/37880937 — Mohsin Gillani (Lahore)
import journalOne from '../assets/images/journal-one.jpg'; // pexels.com/photo/10780943 — artyusufpatel
import journalTwo from '../assets/images/journal-two.jpg'; // pexels.com/photo/26523902 — Caio Mantovani
import journalThree from '../assets/images/journal-three.jpg'; // pexels.com/photo/14781780 — artyusufpatel
import projectGarden from '../assets/images/project-garden.jpg'; // pexels.com/photo/15173334 — alleksana
import projectHorizon from '../assets/images/project-horizon.jpg'; // pexels.com/photo/16110999 — Aysegul Aytoren
import projectHeritage from '../assets/images/project-heritage.jpg'; // pexels.com/photo/18887138 — vika-glitter
// Client's logo (from src/images/Logo.png.png, with the empty white margin trimmed)
import logoImage from '../assets/images/logo.png';

export const logo = {
  src: logoImage,
  alt: 'Numair Associates — Real Estate Consultants',
  width: 1047,
  height: 843,
};

/*
  CEO photograph: src/assets/images/ceo-numair.jpg (copied from src/images/Numair.png.jpeg).
  To change it, replace that file and keep the name. It is picked up automatically; if the
  file is ever removed, the CEO section shows a "portrait to be added" placeholder instead.
*/
function findCeoPhoto() {
  // require.context lists matching files at build time without failing if none exist.
  // It is a webpack feature, so it is unavailable in Jest tests (the placeholder shows there).
  if (process.env.NODE_ENV === 'test') return null;
  const images = require.context('../assets/images', false, /^\.\/ceo-numair\.jpg$/);
  const files = images.keys();
  return files.length ? images(files[0]) : null;
}

export const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

// The three links shown inline on desktop; the rest live in the menu
export const primaryLinks = navLinks.filter((link) =>
  ['#projects', '#services', '#contact'].includes(link.href)
);

/*
  Statistics: ILLUSTRATIVE design placeholders, not verified business figures.
  Edit `value`, `suffix` and `label` once the client confirms real numbers.
*/
export const stats = [
  { value: 1, suffix: '+', label: 'Years of Vision', icon: 'compass' },
  { value: 6, suffix: '+', label: 'Selected Projects', icon: 'building' },
  { value: 4, suffix: '', label: 'Core Services', icon: 'layers' },
  { value: 100, suffix: '%', label: 'Commitment to Quality', icon: 'seal' },
];

// Proposed website copy, not a verified biography
export const ceo = {
  name: 'Numair',
  title: 'Chief Executive Officer',
  photo: findCeoPhoto(),
  photoAlt: 'Portrait of Numair, Chief Executive Officer of The Signature Estate',
  statement: 'Building with intention. Leading with perspective.',
  bio: 'Numair leads The Signature Estate with a focus on thoughtful property selection, enduring design, and relationships built on trust. His approach places clarity, quality, and long-term value at the centre of every decision.',
};

/*
  Projects: ILLUSTRATIVE placeholder names and descriptions, not completed developments.
  Replace with the client's real projects; photos are representative, not of these projects.
*/
export const projects = [
  {
    name: 'Signature Residences',
    category: 'Contemporary Residences',
    location: 'Lahore',
    description: 'Layered homes of glass, timber and stone, arranged around long views and quiet terraces.',
    image: featuredResidence,
    imageAlt: 'Contemporary residence with glass balconies and timber soffits above grassy landscaping',
  },
  {
    name: 'The Courtyard Villas',
    category: 'Private Villas',
    location: 'Lahore',
    description: 'Low, white-walled villas that turn inward to shaded courtyards and native planting.',
    image: propertyTwo,
    imageAlt: 'White villa set against a rocky hillside with native planting',
  },
  {
    name: 'Ivory Heights',
    category: 'Apartments',
    location: 'Lahore',
    description: 'Calm, light-filled apartments with planted terraces and a softly warm facade.',
    image: propertyThree,
    imageAlt: 'Cream apartment building with planted terraces in golden light',
  },
  {
    name: 'The Garden District',
    category: 'Family Homes',
    location: 'Lahore',
    description: 'Generous family homes set among mature gardens, with space to grow over generations.',
    image: projectGarden,
    imageAlt: 'White family house with dark timber windows behind a planted front garden at dusk',
  },
  {
    name: 'Horizon Apartments',
    category: 'Apartments',
    location: 'Lahore',
    description: 'Glass-fronted balconies and timber accents, designed around light, air and outlook.',
    image: projectHorizon,
    imageAlt: 'Apartment facade with glass balconies and warm timber cladding',
  },
  {
    name: 'The Heritage Collection',
    category: 'Character Homes',
    location: 'Lahore',
    description: 'Homes with arches, terraces and handcrafted details that carry a sense of place.',
    image: projectHeritage,
    imageAlt: 'White house with arched verandas and timber pergolas under a clear sky',
  },
];

export const services = [
  {
    number: '01',
    title: 'Property Advisory',
    text: 'Make informed property decisions with clear guidance shaped around your priorities.',
    icon: 'compass',
  },
  {
    number: '02',
    title: 'Residential Sales',
    text: 'Discover homes selected for their design, location, and everyday livability.',
    icon: 'home',
  },
  {
    number: '03',
    title: 'Investment Guidance',
    text: 'Evaluate opportunities with a considered perspective on location, quality, and long-term potential.',
    icon: 'chart',
  },
  {
    number: '04',
    title: 'Portfolio Consulting',
    text: 'Bring clarity and direction to your property portfolio through a more deliberate approach.',
    icon: 'layers',
  },
];

export const enquiryTypes = [
  'Buying a home',
  'Selling a property',
  'Investment guidance',
  'Portfolio consulting',
  'Something else',
];

// Contact details are placeholders until the client confirms them
export const contactDetails = {
  email: 'Email address to be confirmed',
  phone: 'Phone number to be confirmed',
  office: 'Lahore, Pakistan',
};

export const hero = {
  image: heroVilla,
  imageAlt: 'White modern villa with tall glass windows and an olive tree in warm afternoon light',
};

export const properties = [
  {
    name: 'The Olive House',
    type: 'Detached Villa',
    location: 'Lahore',
    details: ['4 Bedrooms', '1 Kanal', 'Private garden'],
    image: propertyOne,
    imageAlt: 'Minimal white villa with dark glazing, gravel landscaping and palms',
  },
  {
    name: 'Stone Court',
    type: 'Family Residence',
    location: 'Lahore',
    details: ['5 Bedrooms', '2 Kanal', 'Courtyard'],
    image: propertyTwo,
    imageAlt: 'White house set into a rocky hillside with native planting',
  },
  {
    name: 'Linden Apartments',
    type: 'Apartment',
    location: 'Lahore',
    details: ['3 Bedrooms', 'Terrace', 'Concierge'],
    image: propertyThree,
    imageAlt: 'Cream apartment building with planted terraces in golden light',
  },
];

export const principles = [
  {
    number: '01',
    title: 'Architecture first',
    text: 'We look for homes with clear plans, honest materials and natural light — qualities that remain valuable long after trends change.',
  },
  {
    number: '02',
    title: 'Location with intent',
    text: 'Daily life is shaped by streets, schools, greenery and access. Every property is weighed against the neighbourhood around it.',
  },
  {
    number: '03',
    title: 'Value over time',
    text: 'We favour fewer, better properties and give clear, unhurried advice — measured in years, not in a single transaction.',
  },
];

// Quiet architectural detail shown beside the philosophy statement
export const philosophyImage = {
  src: journalThree,
  alt: 'Textured plaster wall with a softly lit niche, a wooden chair and glass vases',
};

export const featured = {
  name: 'The Glass Pavilion',
  image: featuredResidence,
  imageAlt: 'Contemporary villa with glass balconies and timber soffits above dry, grassy landscaping',
  description:
    'A layered residence of glass, timber and stone, arranged around long views and quiet outdoor rooms. Living spaces open to terraces on every level, while the planting is drought-tolerant and low-maintenance.',
  specs: [
    { label: 'Type', value: 'Contemporary villa' },
    { label: 'Plot', value: '2 kanal' },
    { label: 'Bedrooms', value: 'Six, each with en-suite' },
    { label: 'Outdoor', value: 'Terraces on three levels' },
  ],
};

export const locations = [
  {
    number: '01',
    name: 'Modern Avenues',
    caption: 'Lahore',
    text: 'Tree-lined boulevards and new commercial addresses, close to the city’s offices, schools and hospitals.',
    image: locationOne,
    imageAlt: 'Sunlit Lahore avenue lined with trees and modern office buildings',
  },
  {
    number: '02',
    name: 'Heritage Character',
    caption: 'Lahore',
    text: 'Established neighbourhoods where mature trees, historic buildings and a settled pace of life define the value.',
    image: locationTwo,
    imageAlt: 'Zaman Plaza, a mid-century building in Lahore, in warm evening light',
  },
];

export const journal = [
  {
    category: 'Architecture',
    title: 'Why natural light is the first luxury',
    image: journalOne,
    imageAlt: 'Afternoon sunlight falling across an arched doorway and a wooden chair',
  },
  {
    category: 'Buying Guide',
    title: 'Reading a neighbourhood before you buy',
    image: journalTwo,
    imageAlt: 'Window shadows across a warm plaster wall beside a vase and table',
  },
  {
    category: 'Living',
    title: 'The quiet value of natural materials',
    image: journalThree,
    imageAlt: 'Textured plaster wall with a niche, a wooden chair and glass vases',
  },
];
