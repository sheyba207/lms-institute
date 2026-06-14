// app/dashboard/DashboardClient.tsx
"use client";
import { courses } from "@/data/courses";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

const DEMO = [
  { slug: "academic-writing-mastery", completed: 3 },
  { slug: "ielts-toefl-preparation", completed: 1 },
];

const upcoming = [
  { title: "Academic Writing Workshop: Crafting Powerful Introductions", type: "Live Zoom", date: "Thu, 19 Jun", time: "7:00 PM PKT" },
  { title: "IELTS Task 2: The 5 Essay Types", type: "Webinar", date: "Sat, 21 Jun", time: "5:00 PM PKT" },
];

const files = [
  { name: "Academic Writing — Week 1 Handout.pdf", course: "Academic Writing Mastery", size: "1.2 MB" },
  { name: "Thesis Statement Checklist.pdf", course: "Academic Writing Mastery", size: "340 KB" },
  { name: "IELTS Task 2 Model Answers Pack.pdf", course: "IELTS & TOEFL Preparation", size: "2.8 MB" },
  { name: "Zoom Recording — Writing Workshop.mp4", course: "Academic Writing Mastery", size: "Available" },
];

export function DashboardClient() {
  const { user } = useAuth();

  if (!user) return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Times New Roman', serif", fontSize: 32, fontWeight: "normal", color: "#1a1a1a", marginBottom: 12 }}>
        Student Dashboard
      </h1>
      <p style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#666", marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
        Your personal learning dashboard is waiting. Please log in to access your enrolled courses, progress, and materials.
      </p>
      <Link href="/courses" className="btn-primary">Browse Courses &amp; Enrol</Link>
    </div>
  );

  const enrolled = courses.filter(c => DEMO.some(d => d.slug === c.slug));

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      {/* Title bar */}
      <div style={{ borderBottom: "1px solid #d0cdc8", padding: "32px 0 20px", marginBottom: 36, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 8 }}>Student Dashboard</div>
          <h1 style={{ fontFamily: "'Times New Roman', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: "normal", color: "#1a1a1a" }}>
            Welcome, {user.name}
          </h1>
        </div>
        <Link href="/courses" className="btn-primary">+ Enrol in More Courses</Link>
      </div>

      <div style={{ display: "grid", gap: "0 56px" }} className="grid-cols-1 md:grid-cols-[3fr,2fr]">
        {/* Left */}
        <div>
          {/* Enrolled courses */}
          <div style={{ borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 0 }}>
            <span className="uppercase-label" style={{ color: "#1a1a1a" }}>My Courses</span>
          </div>

          {enrolled.map(course => {
            const demo = DEMO.find(d => d.slug === course.slug)!;
            const total = course.lessons.length;
            const pct = Math.round((demo.completed / total) * 100);
            const nextLesson = course.lessons[demo.completed];

            return (
              <div key={course.slug} style={{ borderBottom: "1px solid #d0cdc8", padding: "28px 0" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 6 }}>{course.category}</div>
                    <h2 style={{ fontFamily: "'Times New Roman', serif", fontSize: 20, fontWeight: "normal", color: "#1a1a1a", marginBottom: 3 }}>
                      {course.title}
                    </h2>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#999" }}>
                      {demo.completed} of {total} lessons complete · {course.level}
                    </p>
                  </div>
                  <span style={{ fontFamily: "Arial, sans-serif", fontSize: 22, fontWeight: 700, color: "#6b1a1a" }}>{pct}%</span>
                </div>

                {/* Progress */}
                <div style={{ height: 4, background: "#ebebeb", marginBottom: 20, position: "relative" }}>
                  <div className="progress-fill" style={{ height: "100%", width: `${pct}%`, background: "#6b1a1a", position: "absolute", top: 0, left: 0 }} />
                </div>

                {/* Lessons compact */}
                <div style={{ marginBottom: 18 }}>
                  {course.lessons.slice(0, 5).map((lesson, i) => (
                    <div key={lesson.slug} style={{
                      display: "flex", alignItems: "center", gap: 12, padding: "8px 0",
                      borderBottom: "1px solid #f0ece8", fontFamily: "Arial, sans-serif", fontSize: 12,
                    }}>
                      <span style={{
                        width: 18, height: 18, border: `1.5px solid ${i < demo.completed ? "#4a6a2a" : "#ccc"}`,
                        background: i < demo.completed ? "#4a6a2a" : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 9, color: "#fff", flexShrink: 0,
                      }}>{i < demo.completed ? "✓" : ""}</span>
                      <span style={{ color: i < demo.completed ? "#999" : "#333", textDecoration: i < demo.completed ? "line-through" : "none", flex: 1 }}>
                        {lesson.title}
                      </span>
                      <span style={{ color: "#999" }}>{lesson.duration}</span>
                    </div>
                  ))}
                  {total > 5 && (
                    <div style={{ padding: "8px 0", fontFamily: "Arial, sans-serif", fontSize: 11, color: "#999" }}>
                      + {total - 5} more lessons
                    </div>
                  )}
                </div>

                {nextLesson && (
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
                    <div>
                      <div style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: "#999", marginBottom: 2 }}>Up next:</div>
                      <div style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#1a1a1a" }}>{nextLesson.title}</div>
                    </div>
                    <Link href={`/courses/${course.slug}/lesson/${nextLesson.slug}`} className="btn-primary">Continue →</Link>
                  </div>
                )}
              </div>
            );
          })}

          {/* Files */}
          <div style={{ marginTop: 40, borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 0 }}>
            <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Course Materials &amp; Files</span>
          </div>
          {files.map((f, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #ebebeb", flexWrap: "wrap", gap: 12 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <span style={{ fontSize: 18, flexShrink: 0 }}>{f.name.endsWith(".mp4") ? "🎬" : "📄"}</span>
                <div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#1a1a1a" }}>{f.name}</div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: "#999" }}>{f.course} · {f.size}</div>
                </div>
              </div>
              <button style={{
                fontFamily: "Arial, sans-serif", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#6b1a1a", background: "transparent",
                border: "1px solid #6b1a1a", padding: "5px 14px", cursor: "pointer",
              }}>Download</button>
            </div>
          ))}
        </div>

        {/* Right sidebar */}
        <div>
          {/* Upcoming sessions */}
          <div style={{ border: "1px solid #d0cdc8", marginBottom: 20 }}>
            <div style={{ background: "#6b1a1a", padding: "12px 20px" }}>
              <span className="uppercase-label" style={{ color: "#fff" }}>Upcoming Sessions</span>
            </div>
            <div style={{ padding: "0 20px" }}>
              {upcoming.map((ev, i) => (
                <div key={i} style={{ padding: "16px 0", borderBottom: i < upcoming.length - 1 ? "1px solid #ebebeb" : "none", borderLeft: `3px solid ${ev.type === "Live Zoom" ? "#6b1a1a" : "#999"}`, paddingLeft: 16, marginLeft: -20, paddingRight: 0 }}>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ev.type === "Live Zoom" ? "#6b1a1a" : "#666", marginBottom: 4 }}>{ev.type}</div>
                  <div style={{ fontFamily: "'Times New Roman', serif", fontSize: 14, color: "#1a1a1a", lineHeight: 1.3, marginBottom: 4 }}>{ev.title}</div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 11, color: "#999" }}>{ev.date} · {ev.time}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: "14px 20px", borderTop: "1px solid #ebebeb" }}>
              <Link href="/webinars" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b1a1a", textDecoration: "none", fontFamily: "Arial, sans-serif" }}>View Full Schedule →</Link>
            </div>
          </div>

          {/* Quick links */}
          <div style={{ border: "1px solid #d0cdc8" }}>
            <div style={{ background: "#222", padding: "12px 20px" }}>
              <span className="uppercase-label" style={{ color: "#fff" }}>Quick Access</span>
            </div>
            <div style={{ padding: "12px 20px" }}>
              {[
                { label: "All Courses", href: "/courses" },
                { label: "Live Sessions & Webinars", href: "/webinars" },
                { label: "Message Dr. Al-Amin", href: "/contact" },
                { label: "About the Professor", href: "/about" },
              ].map((l, i) => (
                <div key={l.label} style={{ borderBottom: i < 3 ? "1px solid #ebebeb" : "none" }}>
                  <Link href={l.href} style={{ display: "block", padding: "10px 0", fontFamily: "Arial, sans-serif", fontSize: 13, color: "#444", textDecoration: "none" }}>{l.label}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
