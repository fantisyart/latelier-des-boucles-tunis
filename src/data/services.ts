export type ServiceCategory =
  | "Cut & Style"
  | "Color & Dimension"
  | "Care & Treatments"
  | "Special Occasions";

export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  priceNote?: string;
}

export const featuredServices: Service[] = [
  {
    id: "precision-haircuts",
    name: "Precision Haircuts",
    description:
      "Thoughtfully tailored cuts that complement your features, texture, and everyday style.",
    price: "From 90 TND",
    priceNote: "Final price depends on length and complexity.",
  },
  {
    id: "dimensional-color",
    name: "Dimensional Color",
    description:
      "Beautifully blended color, luminous highlights, and natural-looking dimension.",
    price: "Consultation Required",
    priceNote:
      "Pricing varies by technique, length, and density. A consultation determines the final investment.",
  },
  {
    id: "signature-styling",
    name: "Signature Styling",
    description:
      "Soft waves, polished finishes, and occasion-ready styles designed to make an impression.",
    price: "From 60 TND",
  },
];

export interface ServiceGroup {
  category: ServiceCategory;
  description: string;
  services: Service[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    category: "Cut & Style",
    description: "Haircuts, blowouts, and signature styling tailored to your everyday life.",
    services: [
      {
        id: "womens-haircut",
        name: "Women's Haircuts",
        description:
          "A personalized consultation followed by a precision cut designed for your face shape, texture, and routine.",
        price: "From 90 TND",
      },
      {
        id: "short-haircut",
        name: "Short Haircuts",
        description:
          "Bespoke shapes for short lengths — pixies, bobs, and tailored crops that remain effortlessly chic as they grow.",
        price: "From 80 TND",
      },
      {
        id: "long-haircut",
        name: "Long Haircuts",
        description:
          "Long layers, face-framing and lived-in shapes that honor your length and movement.",
        price: "From 100 TND",
      },
      {
        id: "blowout",
        name: "Blowouts",
        description:
          "A smooth, voluminous or relaxed blow dry — perfectly finished and ready to be admired.",
        price: "From 60 TND",
      },
      {
        id: "signature-styling",
        name: "Signature Styling",
        description:
          "Soft waves, polished finishes, and bespoke event styling for an effortless impression.",
        price: "From 60 TND",
      },
    ],
  },
  {
    category: "Color & Dimension",
    description: "Balayage, highlights, full color, root touch-ups, and gloss treatments.",
    services: [
      {
        id: "balayage",
        name: "Balayage",
        description:
          "Hand-painted dimension for a sun-kissed, lived-in result tailored to your base tone.",
        priceNote: "Consultation Required",
        price: "",
      },
      {
        id: "highlights",
        name: "Highlights",
        description:
          "Foil-lightened or partially woven highlights to brighten, soften, or completely transform.",
        price: "From 220 TND",
      },
      {
        id: "full-color",
        name: "Full Hair Color",
        description:
          "All-over single-process color chosen to flatter your complexion and reflect your style.",
        price: "From 130 TND",
      },
      {
        id: "root-touch-up",
        name: "Root Touch-Ups",
        description:
          "A seamless refresh between full color appointments, matched precisely to your existing shade.",
        price: "From 85 TND",
      },
      {
        id: "gloss-and-toner",
        name: "Gloss & Toner",
        description:
          "A luminous gloss or custom toner to refresh tone, add shine, and extend the life of your color.",
        price: "From 70 TND",
      },
    ],
  },
  {
    category: "Care & Treatments",
    description: "Restorative treatments and personalized care rituals for healthy, beautiful hair.",
    services: [
      {
        id: "hair-treatments",
        name: "Hair Treatments",
        description:
          "Deep conditioning, bond-repair and scalp rituals chosen to bring your hair back to its healthiest, shiniest self.",
        price: "From 60 TND",
      },
      {
        id: "personalized-consultation",
        name: "Personalized Consultation",
        description:
          "A dedicated consultation to plan color, cut, or hair-health journeys with one of our stylists.",
        price: "Complimentary",
      },
    ],
  },
  {
    category: "Special Occasions",
    description: "Bridal and occasion styling designed for the moments that matter.",
    services: [
      {
        id: "bridal-hair",
        name: "Bridal Hair",
        description:
          "A bespoke bridal trial and day-of styling crafted to complement your gown, theme, and vision.",
        priceNote: "Consultation Required",
        price: "",
      },
      {
        id: "occasion-styling",
        name: "Special Occasion Styling",
        description:
          "Polished updos, soft waves, and finishing touches for galas, photoshoots, and celebrations.",
        price: "From 110 TND",
      },
    ],
  },
];
