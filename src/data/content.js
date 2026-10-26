/*
  Site content for Numair Associates.

  All photographs live in src/assets/images/ and are free to use under the Pexels License
  (https://www.pexels.com/license/). Source pages are listed next to each import so they
  can be credited or swapped for the client's own photography later.

  Property names, details and prices below are ILLUSTRATIVE EXAMPLES, not live listings.
*/

// HERO BACKGROUND IMAGE: the client's own photograph (also kept at src/images/Hero.png)
import heroImage from '../assets/images/Hero.png';
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
// Same logo with a transparent background and ivory lettering, for the dark hero navbar.
// Generated from logo.png (white removed, navy recoloured to ivory, gold kept).
import logoLightImage from '../assets/images/logo-light.png';

export const logo = {
  src: logoImage,
  lightSrc: logoLightImage,
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
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#projects' },
  { label: 'About', href: '#philosophy' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

// The links shown in the centre of the navbar on desktop; the full list lives in the mobile menu
export const primaryLinks = navLinks.filter((link) => link.href !== '#leadership');

/*
  Statistics: ILLUSTRATIVE design placeholders, not verified business figures.
  Edit `value`, `suffix` and `label` once the client confirms real numbers.
*/
export const stats = [
  { value: 1, suffix: '+', label: 'Years of Vision', icon: 'compass' },
  { value: 6, suffix: '+', label: 'Selected Projects', icon: 'building' },
  { value: 6, suffix: '', label: 'Core Services', icon: 'layers' },
  { value: 100, suffix: '%', label: 'Commitment to Quality', icon: 'seal' },
];

// Proposed website copy, not a verified biography
export const ceo = {
  name: 'Numair Naseer Khan',
  title: 'Chief Executive Officer',
  photo: findCeoPhoto(),
  photoAlt: 'Portrait of Numair Naseer Khan, Chief Executive Officer of Numair Associates',
  statement: 'Every client deserves clear answers before an important property decision.',
  bio: 'Numair Naseer Khan leads Numair Associates with a client-first approach to real estate. He works closely with each client to understand their goals, evaluate opportunities with care, and offer transparent guidance at every stage — from choosing the right plot to planning a long-term investment.',
  // The principles behind his approach (no credentials or figures are claimed here)
  approach: [
    { title: 'Client-first', text: 'Advice shaped around your goals, priorities and timeline.' },
    { title: 'Transparent', text: 'Clear information and honest conversations at every step.' },
    { title: 'Long-term', text: 'A focus on lasting value rather than short-term trends.' },
  ],
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
    title: 'Real Estate Consultancy',
    text: 'Receive personalized property guidance to clarify your goals, evaluate available opportunities, and make informed real estate decisions.',
    icon: 'chat',
  },
  {
    number: '02',
    title: 'Investment Advisory',
    text: 'Explore property investment opportunities with a focus on market fundamentals, risk awareness, investment objectives, and long-term potential.',
    icon: 'chart',
  },
  {
    number: '03',
    title: 'Property & Market Analysis',
    text: 'Understand location trends, comparable properties, pricing factors, and market conditions before committing to a property.',
    icon: 'search',
  },
  {
    number: '04',
    title: 'Property Sale & Purchase',
    text: 'Navigate property transactions with structured guidance, clear communication, and support throughout the buying or selling process.',
    icon: 'handshake',
  },
  {
    number: '05',
    title: 'Construction',
    text: 'Plan your next development with practical guidance on project requirements, planning considerations, and construction coordination.',
    icon: 'building',
  },
  {
    number: '06',
    title: 'Project Marketing',
    text: 'Present real estate projects professionally through strategic positioning, compelling property presentation, and targeted marketing support.',
    icon: 'megaphone',
  },
];

export const enquiryTypes = [
  'Buying a plot or property',
  'Selling a property',
  'Investment advisory',
  'Property & market analysis',
  'Construction',
  'Project marketing',
  'Something else',
];

// Contact details are placeholders until the client confirms them
export const contactDetails = {
  email: 'Email address to be confirmed',
  phone: 'Phone number to be confirmed',
  office: 'Lahore, Pakistan',
};

export const hero = {
  // HERO BACKGROUND IMAGE: src/assets/images/Hero.png (imported at the top of this file)
  background: heroImage,
  imageAlt: 'Modern luxury residence with an infinity pool overlooking a city skyline at sunset',
};

// "Find a Plot That Fits Your Vision" section
export const plotGuide = {
  // Representative aerial photograph (public/images/photo3.png), not a specific development
  image: `${process.env.PUBLIC_URL}/images/photo3.png`,
  imageAlt: 'Aerial view of a planned residential community with tree-lined boulevards at sunset',
  points: [
    {
      title: 'Purpose-Driven Selection',
      text: 'Clarify whether your priority is building a home, holding an investment, or pursuing a development opportunity.',
      icon: 'compass',
    },
    {
      title: 'Location & Market Insight',
      text: 'Evaluate relevant location factors, accessibility, surrounding development, market conditions, and potential considerations.',
      icon: 'pin',
    },
    {
      title: 'Guided Decision-Making',
      text: 'Compare suitable options, ask the right questions, and move forward with greater clarity through personalized consultation.',
      icon: 'seal',
    },
  ],
};

// "Clarity Before Every Property Decision" section
export const consultationSteps = [
  {
    number: '01',
    title: 'Understand Your Goals',
    text: 'We begin by learning about your requirements, investment priorities, intended use, and budget considerations.',
  },
  {
    number: '02',
    title: 'Explore Suitable Opportunities',
    text: 'Identify relevant plots and property options based on your needs and available market information.',
  },
  {
    number: '03',
    title: 'Evaluate the Details',
    text: 'Review relevant location factors, pricing context, property information, and questions that should be clarified before proceeding.',
  },
  {
    number: '04',
    title: 'Plan Your Next Move',
    text: 'Receive clear guidance on the next steps so you can make a more informed decision.',
  },
];

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
    text: 'Every strong investment begins with the right foundation. We help clients assess plot potential, location fundamentals, market conditions, and future value before making a decision.',
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
