/**
 * FAQ source of truth.
 * Used by:
 *   - components/ui/FAQ.tsx (visible accordion)
 *   - components/seo/JsonLd.tsx → FAQJsonLd (rich result)
 *
 * Keep questions short; answers self-contained (no "as mentioned above")
 * so each one reads cleanly when Google snippets it.
 */
export type FAQItem = { question: string; answer: string };

export const FAQS: FAQItem[] = [
  {
    question: "Who can participate in Hack[AI]Thon 2.0 2026?",
    answer:
      "Hack[AI]Thon 2.0 2026 is open to all students, developers, designers, and AI enthusiasts across India. You can be a beginner or a seasoned coder - both are welcome.",
  },
  {
    question: "Is Hack[AI]Thon 2.0 a team or solo hackathon?",
    answer:
      "It is a team hackathon. Teams of 2 to 4 members compete together. You can register as an existing team or assemble one before submission closes.",
  },
  {
    question: "How much does it cost to register for Hack[AI]Thon 2.0?",
    answer:
      "Registration for Hack[AI]Thon 2.0 2026 is completely free. There is no participation fee.",
  },
  {
    question: "Who owns the work I build during Hack[AI]Thon 2.0?",
    answer:
      "You do. The code you ship during the hackathon stays entirely yours, except where sponsor-specific bounty rules apply - those are communicated up front.",
  },
  {
    question: "Do I need prior AI or machine learning experience?",
    answer:
      "No prior expertise is required. Mentors and warm-up materials are provided so any motivated builder can compete on day one.",
  },
  {
    question: "Where is Hack[AI]Thon 2.0 2026 held?",
    answer:
      "Round 1 is conducted online. Round 2 (Online Finals) is hosted in Meet/Discord on August 8 - 9, 2026, exclusively for the top 16 selected teams.",
  },
  {
    question: "What are the two rounds of the hackathon?",
    answer:
      "Round 1 (Online Screening): June 15 – July 25, 2026, where teams identify bugs in a waste classification dataset. The top 16 teams qualify for Round 2 (Online Finals): August 8 – 9, 2026, to retrain models using 3LC.ai.",
  },
  {
    question: "What is the prize pool for Hack[AI]Thon 2.0 2026?",
    answer:
      "The total prize pool is ₹35,000 along with sponsored prizes, free .xyz domain registration for every participant, certificates, and goodies.",
  },
];
