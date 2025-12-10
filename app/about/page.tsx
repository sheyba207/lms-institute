// src/app/about/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | LearnSphere Institute",
  description:
    "LearnSphere Institute is led by industry professionals with hands-on experience in labs, automation, and software.",
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-slate-50">About the Institute</h1>
      <p className="text-sm text-slate-400 max-w-3xl">
        LearnSphere Institute was created to bridge the gap between theory and
        real-world work. We come from lab chemistry, quality control, and software
        automation backgrounds, and we design programs based on what actually
        happens in labs, plants, and tech teams &mdash; not just in textbooks.
      </p>

      <p className="text-sm text-slate-400 max-w-3xl">
        Every course is built around projects, reports, and tools that make you
        immediately more useful in your job or job search: Excel templates, Python
        scripts, lab reports, dashboards, and more.
      </p>
    </div>
  );
}
