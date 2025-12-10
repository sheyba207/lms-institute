// app/instructor/[slug]/page.tsx
import { instructors } from "@/data/instructors";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const instructor = instructors.find((i) => i.slug === slug);

  return {
    title: instructor
      ? `${instructor.name} | Instructor`
      : "Instructor Not Found",
    description: instructor?.bio[0] || "",
  };
}

export default async function InstructorPage({ params }: Props) {
  const { slug } = await params;
  const instructor = instructors.find((i) => i.slug === slug);

  if (!instructor) {
    return <div className="text-slate-300">Instructor not found.</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-slate-50">
        {instructor.name}
      </h1>
      <p className="text-sm text-slate-400">{instructor.title}</p>

      <div className="mt-6 space-y-4 text-slate-300 text-sm max-w-3xl">
        {instructor.bio.map((b, idx) => (
          <p key={idx}>{b}</p>
        ))}
      </div>

      <section className="mt-6 space-y-2">
        <h2 className="text-xl font-semibold text-slate-200">Expertise</h2>
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
      </section>
    </div>
  );
}
