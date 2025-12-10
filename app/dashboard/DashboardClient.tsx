// app/dashboard/DashboardClient.tsx
"use client";

import { useEffect, useState } from "react";
import { courses, Course } from "@/data/courses";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";
import { supabase } from "@/lib/supabaseClient";

// Simple demo student key (later we map it to real user)
const DEMO_STUDENT_KEY = "demo-student";

// Fallback static enrollment if DB is empty/unavailable
const fallbackEnrolledState: {
  slug: string;
  lastLessonSlug?: string;
}[] = [
  {
    slug: "python-for-data-automation",
    lastLessonSlug: "working-with-data-files",
  },
  {
    slug: "advanced-excel-for-lab-qc",
    lastLessonSlug: "lab-excel-basics",
  },
];

type EnrollmentRow = {
  course_slug: string;
  last_lesson_slug: string | null;
};

function getProgress(course: Course, lastLessonSlug?: string) {
  const total = course.lessons.length;
  if (total === 0) return { progress: 0, nextLesson: undefined };

  if (!lastLessonSlug) {
    // Not started
    return { progress: 0, nextLesson: course.lessons[0] };
  }

  const idx = course.lessons.findIndex((l) => l.slug === lastLessonSlug);
  if (idx === -1) {
    // Unknown slug – treat as not started
    return { progress: 0, nextLesson: course.lessons[0] };
  }

  const completedCount = idx + 1;
  const progress = completedCount / total;

  const nextLesson =
    completedCount < total
      ? course.lessons[completedCount]
      : course.lessons[idx];

  return { progress, nextLesson };
}

export function DashboardClient() {
  const { user } = useAuth();

  const [enrolledState, setEnrolledState] = useState<
    { slug: string; lastLessonSlug?: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadEnrollments() {
      try {
        const { data, error } = await supabase
          .from("student_enrollments")
          .select("course_slug, last_lesson_slug")
          .eq("student_key", DEMO_STUDENT_KEY);

        if (error) {
          console.warn("Error loading enrollments, using fallback:", error);
          setEnrolledState(fallbackEnrolledState);
        } else if (!data || data.length === 0) {
          // No records yet – use fallback so UI still looks alive
          setEnrolledState(fallbackEnrolledState);
        } else {
          const mapped = (data as EnrollmentRow[]).map((row) => ({
            slug: row.course_slug,
            lastLessonSlug: row.last_lesson_slug ?? undefined,
          }));
          setEnrolledState(mapped);
        }
      } catch (e) {
        console.warn("Unexpected enrollment load error, using fallback:", e);
        setEnrolledState(fallbackEnrolledState);
      } finally {
        setLoading(false);
      }
    }

    loadEnrollments();
  }, []);

  if (!user) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-slate-50">
          Please log in to access your dashboard
        </h1>
        <p className="text-sm text-slate-400 max-w-xl">
          You need to be logged in to view your enrolled courses and progress.
          Use the <span className="text-emerald-300">Log in</span> or{" "}
          <span className="text-emerald-300">Start free</span> button in the
          top-right corner.
        </p>
      </div>
    );
  }

  const enrolledCourses = courses.filter((c) =>
    enrolledState.some((e) => e.slug === c.slug)
  );

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">
          Your dashboard
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Welcome back, {user.name}. Continue where you left off and jump into
          your next lesson.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-200">
          Enrolled courses
        </h2>

        {loading ? (
          <p className="text-sm text-slate-400">Loading your courses...</p>
        ) : enrolledCourses.length === 0 ? (
          <p className="text-sm text-slate-400">
            You&apos;re not enrolled in any courses yet.
          </p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {enrolledCourses.map((course) => {
              const state = enrolledState.find((e) => e.slug === course.slug);
              const { progress, nextLesson } = getProgress(
                course,
                state?.lastLessonSlug
              );
              const percent = Math.round(progress * 100);

              return (
                <div
                  key={course.slug}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition-transform hover:-translate-y-1 hover:border-emerald-400/60"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">
                        {course.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-400 line-clamp-2">
                        {course.description}
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-800 px-2 py-1 text-[10px] text-slate-300">
                      {course.level}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Progress</span>
                      <span>{percent}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-emerald-400"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>

                  {nextLesson && (
                    <div className="mt-4 flex items-center justify-between text-[11px] text-slate-400">
                      <div className="flex flex-col">
                        <span className="text-slate-500">Next lesson</span>
                        <span className="text-slate-200">
                          {nextLesson.title}
                        </span>
                      </div>
                      <Link
                        href={`/courses/${course.slug}/lesson/${nextLesson.slug}`}
                        className="rounded-full bg-emerald-500 px-3 py-1.5 text-[11px] font-medium text-slate-950 hover:bg-emerald-400"
                      >
                        Continue
                      </Link>
                    </div>
                  )}

                  <div className="mt-3 text-[11px]">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="text-slate-400 hover:text-emerald-300"
                    >
                      View course overview →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
