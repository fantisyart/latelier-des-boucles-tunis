export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span: "tall" | "medium" | "square";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/gallery-balayage.jpg",
    alt: "Hand-painted balayage with caramel dimension on long flowing hair.",
    span: "tall",
  },
  {
    id: "g2",
    src: "/images/gallery-honey-blonde.jpg",
    alt: "Honey blonde hair with golden highlights and soft layers.",
    span: "medium",
  },
  {
    id: "g3",
    src: "/images/gallery-short-cut.jpg",
    alt: "Tailored short bob haircut on a woman in soft light.",
    span: "medium",
  },
  {
    id: "g4",
    src: "/images/gallery-brunette-waves.jpg",
    alt: "Rich brunette waves with glossy dimensional color.",
    span: "tall",
  },
  {
    id: "g5",
    src: "/images/gallery-long-layers.jpg",
    alt: "Elegant long layers in a warm brunette shade.",
    span: "medium",
  },
  {
    id: "g6",
    src: "/images/gallery-occasion-style.jpg",
    alt: "Elegant special-occasion updo with delicate finishing details.",
    span: "square",
  },
];
