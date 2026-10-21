/**
 * Demonstration testimonials.
 *
 * These reviews are configurable placeholder content. They are clearly
 * identified as demo material — they are not verified customer reviews and
 * must be replaced with authentic feedback before launch.
 */

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "From the consultation to the final finish, everything felt thoughtful and personal. I left feeling confident, refreshed, and completely in love with my hair.",
    author: "Demo Client",
    context: "Dimensional Color & Cut",
  },
  {
    id: "t2",
    quote:
      "The attention to detail was unlike anywhere else I have been. They listened to what I wanted, then quietly made it even better than I imagined.",
    author: "Demo Client",
    context: "Balayage & Styling",
  },
  {
    id: "t3",
    quote:
      "A calm, welcoming space where nothing feels rushed. I trust them completely with my color — every visit is beautiful.",
    author: "Demo Client",
    context: "Hair Color",
  },
  {
    id: "t4",
    quote:
      "My bridal hair was everything I had dreamed of and more. The trial was patient, thoughtful, and the day-of styling lasted beautifully.",
    author: "Demo Client",
    context: "Bridal Hair",
  },
];
