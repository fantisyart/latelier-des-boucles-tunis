export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    id: "faq-1",
    question: "How do I book an appointment?",
    answer:
      "Share a few details through our inquiry form and our team will reach out to confirm a time. Once your booking URL or live calendar is connected, you can reserve a slot directly online.",
  },
  {
    id: "faq-2",
    question: "What should I bring to my first consultation?",
    answer:
      "Inspiration photos are always welcome but never required. Wear your hair however you usually style it so we can discuss what you love and what you would like to change.",
  },
  {
    id: "faq-3",
    question: "Can I request a specific hair color or style?",
    answer:
      "Absolutely. Every appointment begins with a personalized consultation where we listen, look at inspiration together, and design a look that is right for you.",
  },
  {
    id: "faq-4",
    question: "Do you offer bridal or special occasion styling?",
    answer:
      "Yes. We offer bridal trials, day-of bridal hair, and styling for galas, photoshoots, and other celebrations. Please reach out ahead of time so we can plan the details together.",
  },
  {
    id: "faq-5",
    question: "How should I prepare for a color appointment?",
    answer:
      "Arrive with clean, dry hair when possible. Please contact the salon directly to discuss preparation, aftercare, and any questions specific to your hair history.",
  },
  {
    id: "faq-6",
    question: "What if I need to reschedule?",
    answer:
      "Life happens. Please contact the salon as early as you can and our team will be happy to help you find a new time that works for you.",
  },
  {
    id: "faq-7",
    question: "How can I ask about service pricing?",
    answer:
      "Pricing varies by service, length, and complexity. Use the booking form below or reach out by phone or email and we will be happy to provide more details based on your needs.",
  },
];
