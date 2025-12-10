// app/courses/[slug]/page.tsx
import { instructors } from "@/data/instructors";
import { CourseInstructor } from "@/components/course-instructor";
import { getCourseBySlug } from "@/data/courses";
import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

const BASE_URL = "https://your-domain.com"; // same as layout

function JsonLdCourse({ slug }: { slug: string }) {
  const course = getCourseBySlug(slug);
  if (!course) return null;

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

  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div className="text-slate-300">
        <h2 className="text-xl font-semibold text-slate-50">Course Not Found</h2>
        <p className="mt-2 text-sm text-slate-400">
          Sorry, the course you're looking for doesn't exist.
        </p>
      </div>
    );
  }

  const instructor = instructors.find(
    (i) => i.slug === course.instructor
  );

  return (
    <>
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-50">
            {course.title}
          </h1>

          <p className="text-sm text-slate-400 max-w-2xl">
            {course.description}
          </p>

          <div className="flex flex-wrap gap-6 text-slate-300 text-sm">
            <div>
              <span className="text-slate-500">Duration:</span>{" "}
              {course.duration}
            </div>
            <div>
              <span className="text-slate-500">Level:</span> {course.level}
            </div>
          </div>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-200">
            What you will learn
          </h2>
          <ul className="list-disc list-inside text-slate-400 space-y-1">
            {course.content.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-200">
            Lessons in this course
          </h2>
          <div className="divide-y divide-slate-800 rounded-2xl border border-slate-800 bg-slate-900/60">
            {course.lessons.map((lesson, index) => (
              <Link
                key={lesson.slug}
                href={`/courses/${course.slug}/lesson/${lesson.slug}`}
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
                <span className="text-xs text-slate-400">{lesson.duration}</span>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            {course.lessons.length > 0 && (
              <Link
                href={`/courses/${course.slug}/lesson/${course.lessons[0].slug}`}
                className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
              >
                Start course
              </Link>
            )}
          </div>
        </section>
        
        {instructor && (
          <CourseInstructor instructor={instructor} />
        )}
      </div>


      {/* SEO JSON-LD */}
      <JsonLdCourse slug={slug} />
    </>
  );
}
