// data/courses.ts

export type Lesson = {
  slug: string;
  title: string;
  duration: string;
  type: "video" | "reading" | "live" | "webinar" | "assignment";
  isFreePreview?: boolean;
};

export type Course = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  level: string;
  instructor: string;
  category: string;
  content: string[];
  lessons: Lesson[];
  badge?: string;
};

export const courses: Course[] = [
  {
    slug: "academic-writing-mastery",
    title: "Academic Writing Mastery",
    tagline: "Write with authority, clarity, and scholarly precision.",
    description:
      "A comprehensive program covering every dimension of academic writing — from paragraph structure and argumentation to research papers, literature reviews, and proper citation. Designed for university students, researchers, and professionals who want their writing to stand apart.",
    duration: "8 weeks",
    level: "Intermediate",
    instructor: "dr-sarah-linguist",
    category: "Academic Skills",
    badge: "Most Popular",
    content: [
      "Structuring arguments and thesis statements",
      "Paragraph cohesion and academic tone",
      "Writing literature reviews",
      "APA, MLA, and Chicago citation styles",
      "Editing and proofreading strategies",
      "Responding to academic feedback",
    ],
    lessons: [
      {
        slug: "what-is-academic-writing",
        title: "What Is Academic Writing — and Why Does It Matter?",
        duration: "28 min",
        type: "video",
        isFreePreview: true,
      },
      {
        slug: "the-thesis-statement",
        title: "Crafting a Thesis Statement That Commands Attention",
        duration: "35 min",
        type: "video",
      },
      {
        slug: "paragraph-structure",
        title: "The Architecture of a Perfect Academic Paragraph",
        duration: "40 min",
        type: "video",
      },
      {
        slug: "live-writing-workshop-1",
        title: "Live Writing Workshop: Peer Review Session",
        duration: "90 min",
        type: "live",
      },
      {
        slug: "literature-review",
        title: "Writing a Literature Review from Scratch",
        duration: "55 min",
        type: "video",
      },
      {
        slug: "citation-styles",
        title: "Mastering APA, MLA & Chicago Citations",
        duration: "45 min",
        type: "video",
      },
      {
        slug: "editing-your-work",
        title: "Editing, Proofreading & Self-Assessment",
        duration: "38 min",
        type: "video",
      },
      {
        slug: "final-assignment",
        title: "Final Assignment: Submit Your Research Essay",
        duration: "Ongoing",
        type: "assignment",
      },
    ],
  },
  {
    slug: "english-communication-skills",
    title: "English Communication Skills",
    tagline: "Speak and write with confidence in any professional context.",
    description:
      "Elevate your spoken and written English for university, career, and everyday life. This course addresses pronunciation, email writing, formal presentations, interview language, and the nuances of professional communication that textbooks rarely cover.",
    duration: "6 weeks",
    level: "Beginner–Intermediate",
    instructor: "dr-sarah-linguist",
    category: "Communication",
    badge: "New",
    content: [
      "Formal vs informal register in writing",
      "Professional email and report writing",
      "Presentation delivery and structure",
      "Active listening and discussion skills",
      "Interview language and vocabulary",
      "Everyday vs academic vocabulary building",
    ],
    lessons: [
      {
        slug: "the-register-question",
        title: "Formal, Semi-Formal, Informal — Knowing the Difference",
        duration: "32 min",
        type: "video",
        isFreePreview: true,
      },
      {
        slug: "professional-emails",
        title: "Writing Professional Emails That Get Results",
        duration: "40 min",
        type: "video",
      },
      {
        slug: "presentation-skills",
        title: "Structuring and Delivering Presentations",
        duration: "50 min",
        type: "video",
      },
      {
        slug: "live-speaking-session",
        title: "Live Speaking Practice — Q&A and Discussion",
        duration: "60 min",
        type: "live",
      },
      {
        slug: "vocabulary-building",
        title: "Building an Academic & Professional Vocabulary",
        duration: "35 min",
        type: "video",
      },
      {
        slug: "interview-language",
        title: "English for Interviews and Networking",
        duration: "42 min",
        type: "video",
      },
    ],
  },
  {
    slug: "ielts-toefl-preparation",
    title: "IELTS & TOEFL Preparation",
    tagline: "Score the band you need with targeted, expert guidance.",
    description:
      "A focused, skills-driven preparation course for IELTS and TOEFL. Covers every section — Reading, Listening, Writing, and Speaking — with strategies specific to each exam format, timed practice, and instructor feedback on written and spoken responses.",
    duration: "10 weeks",
    level: "All Levels",
    instructor: "dr-sarah-linguist",
    category: "Exam Preparation",
    content: [
      "Reading comprehension strategies",
      "Listening for key information",
      "Task 1 and Task 2 IELTS Writing",
      "TOEFL Integrated and Independent Writing",
      "Speaking fluency and pronunciation",
      "Timed exam simulations",
    ],
    lessons: [
      {
        slug: "understanding-the-tests",
        title: "Understanding IELTS vs TOEFL — Choosing Your Path",
        duration: "25 min",
        type: "video",
        isFreePreview: true,
      },
      {
        slug: "reading-strategies",
        title: "Reading Section: Speed, Comprehension & Question Types",
        duration: "55 min",
        type: "video",
      },
      {
        slug: "listening-techniques",
        title: "Listening Section: Predicting, Noting, Answering",
        duration: "50 min",
        type: "video",
      },
      {
        slug: "ielts-writing-task1",
        title: "IELTS Writing Task 1: Academic Reports & Letters",
        duration: "60 min",
        type: "video",
      },
      {
        slug: "ielts-writing-task2",
        title: "IELTS Writing Task 2: Opinion, Discussion & Problem Essays",
        duration: "65 min",
        type: "video",
      },
      {
        slug: "speaking-practice-webinar",
        title: "Live Speaking Webinar: Mock Exam & Feedback",
        duration: "90 min",
        type: "webinar",
      },
      {
        slug: "toefl-writing",
        title: "TOEFL Writing: Integrated and Independent Tasks",
        duration: "55 min",
        type: "video",
      },
      {
        slug: "full-mock-exam",
        title: "Timed Full Mock Exam + Instructor Review",
        duration: "3 hrs",
        type: "assignment",
      },
    ],
  },
  {
    slug: "introduction-to-linguistics",
    title: "Introduction to Linguistics",
    tagline: "Understand how language actually works — from sounds to society.",
    description:
      "A university-level introduction to the scientific study of language. Explore phonetics, morphology, syntax, semantics, and how language intersects with culture and identity. Perfect for students in linguistics, literature, education, and communication.",
    duration: "7 weeks",
    level: "Beginner",
    instructor: "dr-sarah-linguist",
    category: "Linguistics",
    content: [
      "The sounds of language — phonetics and phonology",
      "Word structure — morphology",
      "Sentence structure — syntax",
      "Meaning — semantics and pragmatics",
      "Language and culture — sociolinguistics",
      "How children acquire language",
    ],
    lessons: [
      {
        slug: "what-is-linguistics",
        title: "What Is Linguistics? Language as a System",
        duration: "30 min",
        type: "video",
        isFreePreview: true,
      },
      {
        slug: "phonetics",
        title: "Phonetics: The Sounds of Human Language",
        duration: "45 min",
        type: "video",
      },
      {
        slug: "morphology",
        title: "Morphology: How Words Are Built",
        duration: "40 min",
        type: "video",
      },
      {
        slug: "syntax",
        title: "Syntax: Building Sentences",
        duration: "50 min",
        type: "video",
      },
      {
        slug: "semantics",
        title: "Semantics and Pragmatics: Meaning in Context",
        duration: "45 min",
        type: "video",
      },
      {
        slug: "sociolinguistics-webinar",
        title: "Live Webinar: Language, Identity & Society",
        duration: "75 min",
        type: "webinar",
      },
      {
        slug: "language-acquisition",
        title: "How Children (and Adults) Learn Language",
        duration: "42 min",
        type: "video",
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getLesson(
  courseSlug: string,
  lessonSlug: string
):
  | {
      course: Course;
      lesson: Lesson;
      lessonIndex: number;
    }
  | undefined {
  const course = getCourseBySlug(courseSlug);
  if (!course) return undefined;

  const index = course.lessons.findIndex((l) => l.slug === lessonSlug);
  if (index === -1) return undefined;

  return {
    course,
    lesson: course.lessons[index],
    lessonIndex: index,
  };
}
