export type Instructor = {
  slug: string; name: string; title: string; credentials: string;
  bio: string[]; expertise: string[]; publications?: string[];
  social?: { linkedin?: string; researchgate?: string; scholar?: string; youtube?: string; };
};
export const instructors: Instructor[] = [{
  slug: "dr-sheema-ali-gohar",
  name: "Dr. Sheema Ali Gohar",
  title: "Assistant Professor of English Language & Linguistics",
  credentials: "PhD in Applied Linguistics · MA in English Literature · BA (Hons) English Language",
  bio: [
    "Dr. Sheema Ali Gohar is a dedicated educator, researcher, and linguist with a PhD in Applied Linguistics. Her academic work sits at the intersection of language acquisition, discourse analysis, and English language pedagogy.",
    "With over a decade of teaching experience at the university level, Dr. Gohar has helped hundreds of students develop confidence, clarity, and precision in English — whether they are native speakers refining their academic writing or learners reaching for fluency.",
    "Beyond the classroom, she leads professional development workshops, hosts live webinars on language learning strategies, and publishes research on second language acquisition and critical thinking through language.",
    "This platform is her extension of the classroom — a space where learning has no walls, where every student deserves access to expert guidance, and where a love of language can flourish.",
  ],
  expertise: [
    "Applied Linguistics", "Academic Writing & Research Skills", "English as a Second Language (ESL)",
    "Discourse Analysis", "Critical Thinking through Language", "Literary Analysis",
    "Public Speaking & Communication", "IELTS & TOEFL Preparation",
  ],
  publications: [
    "\"Scaffolding Academic Discourse in EFL Contexts\" — Journal of Language Teaching Research, 2022",
    "\"Metacognitive Strategies and Second Language Writing\" — Applied Linguistics Review, 2021",
    "\"Rethinking Grammar Instruction in Higher Education\" — TESOL Quarterly, 2020",
    "\"Critical Reading and Academic Success in EFL University Settings\" — Reading in a Foreign Language, 2019",
  ],
  social: { linkedin: "https://linkedin.com/", researchgate: "https://researchgate.net/", scholar: "https://scholar.google.com/", youtube: "https://youtube.com/" },
}];
