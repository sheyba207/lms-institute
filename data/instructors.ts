// data/instructors.ts

export type Instructor = {
  slug: string;
  name: string;
  title: string;
  bio: string[];
  photo?: string; // optional for now
  expertise: string[];
};

export const instructors: Instructor[] = [
  {
    slug: "abdul-waheed",
    name: "Abdul Waheed",
    title: "Lead Instructor · Lab Chemist · Automation Engineer",
    bio: [
      "Accomplished and meticulous lab chemist with 8+ years of hands-on experience.",
      "Expert in water, coal, and oil analysis, along with QC, ISO/IEC 17025 standards, and chemical testing workflows.",
      "Automation-focused professional working with Python, Excel macros, Power Query, and AI-driven report generation.",
      "Experienced in building practical educational tools, LMS systems, and technical training modules.",
    ],
    expertise: [
      "Python automation",
      "Excel for QC & Labs",
      "Water & Coal Testing",
      "AI/ML-based workflows",
      "ISO/IEC 17025 documentation",
    ],
  },
];
