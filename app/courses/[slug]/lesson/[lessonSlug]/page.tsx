// app/courses/[slug]/lesson/[lessonSlug]/page.tsx
import { Metadata } from "next";
import { supabase } from "@/lib/supabaseClient";
import { getLesson } from "@/data/courses";
import { LessonProgressControls } from "@/components/lesson-progress-controls";

type Props = {
  params: Promise<{ slug: string; lessonSlug: string }>;
};

type DBLesson = {
  slug: string;
  title: string;
  duration: string | null;
  is_preview: boolean | null;
  order_index: number | null;
  course_slug: string;
};

type DBCourse = {
  slug: string;
  title: string;
  description: string | null;
};

type SimpleLesson = {
  slug: string;
  order_index: number | null;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lessonSlug } = await params;

  // Try DB first
  const { data: dbLesson } = await supabase
    .from("lessons")
    .select("slug, title, course_slug")
    .eq("course_slug", slug)
    .eq("slug", lessonSlug)
    .maybeSingle<Pick<DBLesson, "slug" | "title" | "course_slug">>();

  if (dbLesson) {
    const { data: dbCourse } = await supabase
      .from("courses")
      .select("title, description")
      .eq("slug", slug)
      .maybeSingle<DBCourse>();

    return {
      title: `${dbLesson.title} · ${dbCourse?.title ?? ""} | LearnSphere Institute`,
      description: dbCourse?.description ?? "",
    };
  }

  // Fallback to TS data
  const fallback = getLesson(slug, lessonSlug);
  if (fallback) {
    return {
      title: `${fallback.lesson.title} · ${fallback.course.title} | LearnSphere Institute`,
      description: fallback.course.description,
    };
  }

  return {
    title: "Lesson Not Found | LearnSphere Institute",
  };
}

export default async function LessonPage({ params }: Props) {
  const { slug, lessonSlug } = await params;

  // Try DB
  const { data: dbLesson } = await supabase
    .from("lessons")
    .select(
      "slug, title, duration, is_preview, order_index, course_slug"
    )
    .eq("course_slug", slug)
    .eq("slug", lessonSlug)
    .maybeSingle<DBLesson>();

  const { data: dbCourse } = await supabase
    .from("courses")
    .select("slug, title, description")
    .eq("slug", slug)
    .maybeSingle<DBCourse>();

  // Also fetch all lessons for next/last logic
  const { data: allLessons } = (await supabase
    .from("lessons")
    .select("slug, order_index")
    .eq("course_slug", slug)
    .order("order_index", { ascending: true })) as {
    data: SimpleLesson[] | null;
    error: any;
  };

  if (!dbLesson || !dbCourse) {
    // Fallback to TS data
    const fallback = getLesson(slug, lessonSlug);
    if (!fallback) {
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

    const { course, lesson, lessonIndex } = fallback;

    const isLastLesson = lessonIndex + 1 >= course.lessons.length;
    const nextLessonSlug = !isLastLesson
      ? course.lessons[lessonIndex + 1].slug
      : undefined;

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

        <section className="space-y-3">
          <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 flex items-center justify-center text-slate-500 text-sm">
            Video / lesson content goes here
          </div>
          <p className="text-xs text-slate-500">
            In a real version, this area would show your embedded video,
            slides, code examples, or PDFs.
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

        <LessonProgressControls
          courseSlug={course.slug}
          lessonSlug={lesson.slug}
          isLastLesson={isLastLesson}
          nextLessonSlug={nextLessonSlug}
        />
      </div>
    );
  }

  // Compute isLastLesson / nextLessonSlug from DB
  let isLastLesson = false;
  let nextLessonSlug: string | undefined = undefined;

  if (allLessons && allLessons.length > 0) {
    const idx = allLessons.findIndex((l) => l.slug === dbLesson.slug);
    if (idx >= 0) {
      isLastLesson = idx === allLessons.length - 1;
      if (!isLastLesson && allLessons[idx + 1]) {
        nextLessonSlug = allLessons[idx + 1].slug;
      }
    }
  }

  const lessonIndex = dbLesson.order_index ?? 0;

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs text-slate-500">
          {dbCourse.title} · Lesson{" "}
          {lessonIndex > 0
            ? String(lessonIndex).padStart(2, "0")
            : "—"}
        </p>
        <h1 className="text-2xl font-semibold text-slate-50">
          {dbLesson.title}
        </h1>
        <p className="text-xs text-slate-400">
          Duration: {dbLesson.duration ?? ""}
        </p>
      </header>

      <section className="space-y-3">
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 flex items-center justify-center text-slate-500 text-sm">
          Video / lesson content goes here
        </div>
        <p className="text-xs text-slate-500">
          In a real version, this area would show your embedded video,
          slides, code examples, or PDFs.
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

      <LessonProgressControls
        courseSlug={dbCourse.slug}
        lessonSlug={dbLesson.slug}
        isLastLesson={isLastLesson}
        nextLessonSlug={nextLessonSlug}
      />
    </div>
  );
}
