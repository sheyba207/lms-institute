// src/app/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LearnSphere Institute | Practical LMS for Career-Focused Learning",
  description:
    "LearnSphere Institute offers live and recorded courses in programming, analytics, lab skills, and automation. Project-based learning, certificates, and mentorship.",
  openGraph: {
    title: "LearnSphere Institute",
    description:
      "Affordable, practical, and career-focused online learning with live classes, projects, and certificates.",
    url: "https://your-domain.com",
    siteName: "LearnSphere Institute",
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="grid gap-10 md:grid-cols-[3fr,2fr] md:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/60 px-3 py-1 text-xs text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live & recorded classes • Certificates included
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Learn{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
              real-world skills
            </span>{" "}
            that directly improve your career.
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-300 md:text-base">
            Short, practical programs in programming, analytics, lab chemistry, and
            automation. Designed for students, job-seekers, and working professionals.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-emerald-400">
              Browse courses
            </button>
            <button className="rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2.5 text-sm text-slate-100 hover:bg-slate-800">
              Book free counselling
            </button>
            <span className="text-xs text-slate-400">
              No credit card required • WhatsApp support
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-xs text-slate-400">
            <div>
              <div className="text-base font-semibold text-slate-50">8+ years</div>
              Industry & lab experience
            </div>
            <div>
              <div className="text-base font-semibold text-slate-50">Project-based</div>
              Real assignments & reports
            </div>
            <div>
              <div className="text-base font-semibold text-slate-50">Job-focused</div>
              CV, LinkedIn & interview prep
            </div>
          </div>
        </div>

        {/* Right-side fake dashboard */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-4">
            <div className="text-sm font-medium text-slate-100">
              Your learning dashboard
            </div>
            <p className="mt-1 text-[11px] text-slate-400">
              Track progress across all your courses in one place.
            </p>

            <div className="mt-4 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span>Python for Data & Automation</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-300">
                  60% complete
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-3/5 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-center justify-between">
                <span>Excel for Lab & QC Reporting</span>
                <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-300">
                  New cohort
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-1/4 rounded-full bg-sky-400" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-slate-200">Next live session</span>
              <span className="rounded-full bg-lime-500/20 px-2 py-0.5 text-[10px] text-lime-300">
                Today • 9:00 PM PKT
              </span>
            </div>
            <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950/80 p-3">
              <div className="text-[11px] text-slate-400">Course</div>
              <div className="text-sm font-medium text-slate-100">
                Water & Coal Lab Reporting with Excel
              </div>
              <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span>Instructor: Abdul</span>
                <span>Duration: 90 min</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future sections */}
      <section id="courses" className="mt-20">
        <h2 className="text-2xl font-semibold text-slate-50">Popular courses</h2>
        <p className="mt-1 text-sm text-slate-400">
          Coming soon: a curated list of career-focused programs.
        </p>
      </section>

      <section id="how-it-works" className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-50">How learning works</h2>
      </section>

      <section id="reviews" className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-50">What learners say</h2>
      </section>

      <section id="contact" className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-50">Need guidance?</h2>
      </section>
    </>
  );
}
