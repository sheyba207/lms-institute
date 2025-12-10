// app/courses/[slug]/page.tsx
import { instructors } from "@/data/instructors";
import { CourseInstructor } from "@/components/course-instructor";
import { getCourseBySlug } from "@/data/courses";
import { Metadata } from "next";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

type Props = {
  params: Promise<{ slug: string }>;
};

const BASE_URL = "https://lms-institute.vercel.app"; // update if needed

type DBCourse = {
  slug: string;
  title: string;
  description: string | null;
  duration: string | null;
  level: string | null;
  instructor_slug: string | null;
};

type DBLesson = {
  slug: string;
  title: string;
  duration: string | null;
  is_preview: boolean | null;
  order_index: number | null;
};

type ViewLesson = {
  slug: string;
  title: string;
  duration: string;
  isFreePreview?: boolean;
};

type ViewCourse = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  content: string[];
  lessons: ViewLesson[];
  instructorSlug?: string;
};

function JsonLdCourse({ course }: { course: ViewCourse }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: "LearnSphere Institute",
      sameAs: BASE_URL,
    },
    url: `${BASE_URL}/courses/${course.slug}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) } as any}
    />
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  return {
    title: course
      ? `${course.title} | LearnSphere Institute`
      : "Course Not Found",
    description: course?.description || "",
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;

  // 1) Try DB
  const { data: dbCourse, error: courseError } = await supabase
    .from("courses")
    .select(
      "slug, title, description, duration, level, instructor_slug"
    )
    .eq("slug", slug)
    .maybeSingle<DBCourse>();

  const { data: dbLessons, error: lessonsError } = await supabase
    .from("lessons")
    .select("slug, title, duration, is_preview, order_index")
    .eq("course_slug", slug)
    .order("order_index", { ascending: true }) as {
    data: DBLesson[] | null;
    error: any;
  };

  // 2) Fallback to TS course
  const tsCourse = getCourseBySlug(slug);

  if (!dbCourse && !tsCourse) {
    return (
      <div className="text-slate-300">
        <h2 className="text-xl font-semibold text-slate-50">Course Not Found</h2>
        <p className="mt-2 text-sm text-slate-400">
          Sorry, the course you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  // 3) Build unified ViewCourse object
  const viewCourse: ViewCourse = {
    slug,
    title: dbCourse?.title ?? tsCourse!.title,
    description: dbCourse?.description ?? tsCourse!.description,
    duration: dbCourse?.duration ?? tsCourse!.duration,
    level: dbCourse?.level ?? tsCourse!.level,
    content: tsCourse?.content ?? [],
    lessons:
      dbLessons && dbLessons.length > 0
        ? dbLessons.map((l) => ({
            slug: l.slug,
            title: l.title,
            duration: l.duration ?? "",
            isFreePreview: !!l.is_preview,
          }))
        : tsCourse?.lessons.map((l) => ({
            slug: l.slug,
            title: l.title,
            duration: l.duration,
            isFreePreview: l.isFreePreview,
          })) ?? [],
    instructorSlug: dbCourse?.instructor_slug ?? tsCourse?.instructor,
  };

  const instructor = instructors.find(
    (i) => i.slug === viewCourse.instructorSlug
  );

  return (
    <>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-50">
            {viewCourse.title}
          </h1>

          <p className="text-sm text-slate-400 max-w-2xl">
            {viewCourse.description}
          </p>

          <div className="flex flex-wrap gap-6 text-slate-300 text-sm">
            <div>
              <span className="text-slate-500">Duration:</span>{" "}
              {viewCourse.duration}
            </div>
            <div>
              <span className="text-slate-500">Level:</span>{" "}
              {viewCourse.level}
            </div>
          </div>

          {/* Start course button */}
          {viewCourse.lessons.length > 0 && (
            <div className="mt-4">
              <Link
                href={`/courses/${viewCourse.slug}/lesson/${viewCourse.lessons[0].slug}`}
                className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
              >
                Start course
              </Link>
            </div>
          )}
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-200">
            What you will learn
          </h2>
          {viewCourse.content.length > 0 ? (
            <ul className="list-disc list-inside text-slate-400 space-y-1">
              {viewCourse.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">
              Course outcomes will be added soon.
            </p>
          )}
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-200">
            Lessons in this course
          </h2>
          <div className="divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/60">
            {viewCourse.lessons.map((lesson, index) => (
              <Link
                key={lesson.slug}
                href={`/courses/${viewCourse.slug}/lesson/${lesson.slug}`}
                className="flex items-center justify-between px-4 py-3 text-sm text-slate-200 hover:bg-slate-900/90"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{lesson.title}</span>
                    {lesson.isFreePreview && (
                      <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">
                        Free preview
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs text-slate-400">
                  {lesson.duration}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {instructor && <CourseInstructor instructor={instructor} />}
      </div>

      {/* SEO JSON-LD */}
      <JsonLdCourse course={viewCourse} />
    </>
  );
}
