// app/courses/[slug]/lesson/[lessonSlug]/page.tsx
import { Metadata } from "next";
import { getLesson } from "@/data/courses";

type Props = {
  params: Promise<{ slug: string; lessonSlug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lessonSlug } = await params;
  const result = getLesson(slug, lessonSlug);

  if (!result) {
    return {
      title: "Lesson Not Found | LearnSphere Institute",
    };
  }

  const { course, lesson } = result;

  return {
    title: `${lesson.title} · ${course.title} | LearnSphere Institute`,
    description: course.description,
  };
}

export default async function LessonPage({ params }: Props) {
  const { slug, lessonSlug } = await params;
  const result = getLesson(slug, lessonSlug);

  if (!result) {
    return (
      <div className="text-slate-300">
        <h2 className="text-xl font-semibold text-slate-50">
          Lesson Not Found
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Sorry, this lesson does not exist.
        </p>
      </div>
    );
  }

  const { course, lesson, lessonIndex } = result;

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs text-slate-500">
          {course.title} · Lesson {String(lessonIndex + 1).padStart(2, "0")}
        </p>
        <h1 className="text-2xl font-semibold text-slate-50">
          {lesson.title}
        </h1>
        <p className="text-xs text-slate-400">
          Duration: {lesson.duration}
        </p>
      </header>

      {/* Video / content area (placeholder) */}
      <section className="space-y-3">
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 flex items-center justify-center text-slate-500 text-sm">
          Video / lesson content goes here
        </div>
        <p className="text-xs text-slate-500">
          In a real version, this area would show your embedded video, slides,
          code examples, or PDFs.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-200">
          Lesson overview
        </h2>
        <p className="text-sm text-slate-400">
          This is a placeholder lesson page. You can extend this with detailed
          lesson notes, code snippets, downloadable files, quizzes, or
          assignments as needed.
        </p>
      </section>
    </div>
  );
}
