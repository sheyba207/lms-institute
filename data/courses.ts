// data/courses.ts

export type Lesson = {
  slug: string;
  title: string;
  duration: string;
  isFreePreview?: boolean;
};

export type Course = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  instructor: string;
  content: string[];
  lessons: Lesson[];
};

export const courses: Course[] = [
  {
    slug: "python-for-data-automation",
    title: "Python for Data & Automation",
    description:
      "Learn Python through real automation scripts for labs, reporting, and workflows.",
    duration: "6 weeks",
    level: "Beginner–Intermediate",
    instructor: "abdul-waheed",
    content: [
      "Python fundamentals",
      "Working with CSV & Excel files",
      "Building automation scripts",
      "Error handling & logging",
      "Mini projects for real workflows",
    ],
    lessons: [
      {
        slug: "getting-started",
        title: "Getting Started with Python",
        duration: "35 min",
        isFreePreview: true,
      },
      {
        slug: "working-with-data-files",
        title: "Working with CSV & Excel Files",
        duration: "45 min",
      },
      {
        slug: "automation-scripts",
        title: "Building Your First Automation Script",
        duration: "50 min",
      },
      {
        slug: "mini-project-1",
        title: "Mini Project: Lab Report Automation",
        duration: "60 min",
      },
    ],
  },
  {
    slug: "advanced-excel-for-lab-qc",
    title: "Advanced Excel for Lab & QC",
    description:
      "Excel dashboards, macros, and automated templates designed for real lab environments.",
    duration: "4 weeks",
    level: "Intermediate",
    instructor: "abdul-waheed",
    content: [
      "Excel formulas for lab calculations",
      "Conditional formatting for QC limits",
      "Automated templates & reports",
      "Pivot tables & trend charts",
      "Intro to Power Query",
    ],
    lessons: [
      {
        slug: "lab-excel-basics",
        title: "Lab-Focused Excel Basics",
        duration: "30 min",
        isFreePreview: true,
      },
      {
        slug: "limits-formatting",
        title: "QC Limits & Conditional Formatting",
        duration: "40 min",
      },
      {
        slug: "templates",
        title: "Designing Lab Templates",
        duration: "50 min",
      },
      {
        slug: "power-query-intro",
        title: "Intro to Power Query for Labs",
        duration: "45 min",
      },
    ],
  },
  {
    slug: "water-coal-lab-fundamentals",
    title: "Water & Coal Lab Fundamentals",
    description:
      "Hands-on lab process skills, testing techniques, and QC documentation.",
    duration: "5 weeks",
    level: "Beginner",
    instructor: "abdul-waheed",
    content: [
      "Sampling techniques & handling",
      "Standard test methods overview",
      "Practical test workflows",
      "QC documentation & reporting",
      "Lab safety & good practices",
    ],
    lessons: [
      {
        slug: "introduction-to-lab",
        title: "Introduction to Lab Workflows",
        duration: "25 min",
        isFreePreview: true,
      },
      {
        slug: "sampling-techniques",
        title: "Sampling Techniques for Water & Coal",
        duration: "40 min",
      },
      {
        slug: "reporting",
        title: "Reporting, Forms & Checklists",
        duration: "35 min",
      },
      {
        slug: "safety",
        title: "Safety & Best Practices",
        duration: "30 min",
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
