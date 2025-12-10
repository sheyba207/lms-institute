// app/courses/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses | LearnSphere Institute",
  description:
    "Browse practical, career-focused courses in programming, analytics, lab skills, and automation.",
};

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-50">Courses</h1>
        <p className="text-sm text-slate-400 max-w-2xl">
          Short, intense, and practical programs designed to help you move from
          theory to real skills. Programming, Excel automation, lab &amp; QC analytics,
          and more.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition-transform hover:-translate-y-1 hover:border-emerald-400/60"
          >
            <h2 className="text-sm font-semibold text-slate-50 group-hover:text-emerald-300">
              {course.title}
            </h2>

            <p className="mt-2 line-clamp-3 text-xs text-slate-400">
              {course.description}
            </p>

            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
              <span>{course.level}</span>
              <span>{course.duration}</span>
            </div>

            <span className="mt-3 inline-flex text-[11px] text-emerald-300">
              View details →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
