// app/admin/AdminClient.tsx
"use client";

import { courses } from "@/data/courses";
import { instructors } from "@/data/instructors";
import { useAuth } from "@/components/auth-provider";
import Link from "next/link";

export function AdminClient() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold text-slate-50">
          Admin access required
        </h1>
        <p className="text-sm text-slate-400 max-w-xl">
          You must be logged in to view the admin panel. Use the{" "}
          <span className="text-emerald-300">Log in</span> or{" "}
          <span className="text-emerald-300">Start free</span> button in the
          top-right corner.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">
          Admin · Courses
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Internal view of all courses, lessons, and instructors. Future
          versions can add editing, publishing, and scheduling.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-200">
          All courses ({courses.length})
        </h2>

        <div className="space-y-4">
          {courses.map((course) => {
            const instructor = instructors.find(
              (i) => i.slug === course.instructor
            );

            return (
              <div
                key={course.slug}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      {course.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 max-w-xl">
                      {course.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-slate-400">
                      <span>
                        <span className="text-slate-500">Slug:</span>{" "}
                        {course.slug}
                      </span>
                      <span>
                        <span className="text-slate-500">Level:</span>{" "}
                        {course.level}
                      </span>
                      <span>
                        <span className="text-slate-500">Duration:</span>{" "}
                        {course.duration}
                      </span>
                      <span>
                        <span className="text-slate-500">Lessons:</span>{" "}
                        {course.lessons.length}
                      </span>
                    </div>
                  </div>

                  <div className="text-right text-[11px] text-slate-400">
                    <div className="mb-1 font-semibold text-slate-200">
                      Instructor
                    </div>
                    {instructor ? (
                      <>
                        <div>{instructor.name}</div>
                        <div className="text-slate-500">
                          {instructor.title}
                        </div>
                        <Link
                          href={`/instructor/${instructor.slug}`}
                          className="mt-1 inline-block text-emerald-300 hover:text-emerald-200"
                        >
                          View profile →
                        </Link>
                      </>
                    ) : (
                      <div className="text-red-300">
                        No instructor assigned
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/60">
                  <div className="flex items-center justify-between px-4 py-2 text-[11px] text-slate-500">
                    <span>Lessons</span>
                    <span>Slug · Duration</span>
                  </div>
                  <div className="divide-y divide-slate-800">
                    {course.lessons.map((lesson, idx) => (
                      <div
                        key={lesson.slug}
                        className="flex items-center justify-between px-4 py-2 text-[12px] text-slate-200"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-slate-500">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span>{lesson.title}</span>
                          {lesson.isFreePreview && (
                            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] text-emerald-300">
                              Free preview
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-[11px] text-slate-400">
                          <span>{lesson.slug}</span>
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap justify-between gap-2 text-[11px] text-slate-400">
                  <div>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="hover:text-emerald-300"
                    >
                      View public course page →
                    </Link>
                  </div>
                  {/* Future: Edit / Publish buttons */}
                  <div className="text-slate-500">
                    (Admin actions like Edit, Publish, Duplicate can be added here later)
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
