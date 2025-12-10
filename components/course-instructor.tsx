// components/course-instructor.tsx
import { Instructor } from "@/data/instructors";

export function CourseInstructor({ instructor }: { instructor: Instructor }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-slate-200">Instructor</h2>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex items-center gap-4">
          {/* Avatar Placeholder */}
          <div className="h-16 w-16 rounded-full bg-slate-700/40" />

          <div>
            <h3 className="text-lg font-semibold text-slate-50">
              {instructor.name}
            </h3>
            <p className="text-xs text-slate-400">{instructor.title}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm text-slate-300">
          {instructor.bio.map((line, idx) => (
            <p key={idx} className="text-slate-400 leading-relaxed">
              {line}
            </p>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-medium text-slate-200">Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {instructor.expertise.map((e) => (
              <span
                key={e}
                className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
