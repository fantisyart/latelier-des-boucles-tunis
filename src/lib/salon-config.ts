/**
 * Configurable salon details.
 *
 * Replace these demo values with the real salon owner's information before
 * launching the site. Booking URL, map URL and social links are intentionally
 * left empty in the default configuration so the UI gracefully degrades.
 */

export const salonConfig = {
  name: "Latelier des Boucles",
  tagline: "Tunis · Hair Artistry",
  phone: "+216 26 252 444",
  phoneTel: "+21626252444",
  email: "hello@maisonaurelle.com",
  address: {
    line1: "38 Rue de la Faculté",
    line2: "Ennasr 2",
    city: "Tunis",
    country: "Tunisia",
  },
  hours: [
    { day: "Tuesday", hours: "10 AM – 7 PM" },
    { day: "Wednesday", hours: "10 AM – 7 PM" },
    { day: "Thursday", hours: "10 AM – 7 PM" },
    { day: "Friday", hours: "10 AM – 7 PM" },
    { day: "Saturday", hours: "10 AM – 7 PM" },
    { day: "Sunday", hours: "10 AM – 7 PM" },
    { day: "Monday", hours: "10 AM – 7 PM" },
  ],
  bookingUrl: "", // Add the salon's online booking link here when available
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52302632.930111215!2d-63.67318020000003!3d36.85925240000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd330048b14a1b%3A0x5d01fe697b53a26d!2sLatelier%20des%20boucles%20tunis!5e0!3m2!1sen!2s!4v1792537209365!5m2!1sen!2s",
  social: {
    instagram: "https://instagram.com/maisonaurelle",
  },
} as const;
