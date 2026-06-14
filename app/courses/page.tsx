// app/courses/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses | Dr. Sarah Al-Amin",
  description: "Expert courses in academic writing, English communication, IELTS/TOEFL preparation, and linguistics.",
};

const categoryColor: Record<string, string> = {
  "Academic Skills": "#4a6a2a",
  "Communication": "#1a3a6a",
  "Exam Preparation": "#4a1a6a",
  "Linguistics": "#6a3a1a",
};

export default function CoursesPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

      {/* Page title bar */}
      <div style={{ borderBottom: "1px solid #d0cdc8", padding: "32px 0 20px", marginBottom: 40 }}>
        <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 8 }}>Learning</div>
        <h1 style={{
          fontFamily: "'Times New Roman', serif",
          fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", color: "#1a1a1a",
        }}>All Courses</h1>
        <p style={{
          fontFamily: "Arial, sans-serif", fontSize: 14, color: "#666",
          marginTop: 8, maxWidth: 600,
        }}>
          Structured programmes in English language and linguistics, with video lectures,
          live Zoom sessions, webinars, and personalised feedback.
        </p>
      </div>

      {/* Course list */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 60 }}>
        {courses.map((course, i) => {
          const catColor = categoryColor[course.category] || "#333";
          const videoCount = course.lessons.filter(l => l.type === "video").length;
          const liveCount = course.lessons.filter(l => l.type === "live" || l.type === "webinar").length;

          return (
            <div key={course.slug} style={{
              borderBottom: "1px solid #d0cdc8",
              padding: "32px 0",
              display: "grid",
              gap: "0 48px",
            }} className="grid-cols-1 md:grid-cols-[3fr,2fr]">
              {/* Left */}
              <div>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: catColor,
                    fontFamily: "Arial, sans-serif",
                    borderLeft: `3px solid ${catColor}`, paddingLeft: 8,
                  }}>{course.category}</span>
                  {course.badge && (
                    <span style={{
                      fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "#fff",
                      background: "#6b1a1a", padding: "2px 8px",
                      fontFamily: "Arial, sans-serif",
                    }}>{course.badge}</span>
                  )}
                </div>

                <h2 style={{
                  fontFamily: "'Times New Roman', serif",
                  fontSize: 22, fontWeight: "normal", color: "#1a1a1a",
                  lineHeight: 1.2, marginBottom: 8,
                }}>
                  <Link href={`/courses/${course.slug}`} style={{
                    color: "#1a1a1a", textDecoration: "none",
                  }} className="hover:text-burgundy">{course.title}</Link>
                </h2>

                <p style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: 14, color: "#6b1a1a", fontStyle: "italic", marginBottom: 10,
                }}>{course.tagline}</p>

                <p style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: 13, color: "#555", lineHeight: 1.7,
                }}>{course.description}</p>
              </div>

              {/* Right */}
              <div style={{ paddingTop: 4 }}>
                {/* Meta */}
                <table style={{
                  width: "100%", borderCollapse: "collapse",
                  fontFamily: "Arial, sans-serif", fontSize: 13, marginBottom: 20,
                }}>
                  {[
                    ["Level", course.level],
                    ["Duration", course.duration],
                    ["Total Lessons", course.lessons.length.toString()],
                    ["Videos", videoCount.toString()],
                    ["Live Sessions", liveCount.toString()],
                  ].map(([label, val]) => (
                    <tr key={label} style={{ borderBottom: "1px solid #ebebeb" }}>
                      <td style={{ padding: "8px 0 8px 0", color: "#999", width: "45%" }}>{label}</td>
                      <td style={{ padding: "8px 0", color: "#333", fontWeight: 500 }}>{val}</td>
                    </tr>
                  ))}
                </table>

                <Link href={`/courses/${course.slug}`} className="btn-primary" style={{ display: "block", textAlign: "center" }}>
                  View Course Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div style={{
        background: "#f7f6f4", border: "1px solid #d0cdc8",
        padding: "36px 40px", marginBottom: 60,
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 20,
      }}>
        <div>
          <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 8 }}>Not sure where to start?</div>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#555" }}>
            Dr. Al-Amin will personally recommend a course based on your goals.
          </p>
        </div>
        <Link href="/contact" className="btn-primary">Send a Message</Link>
      </div>
    </div>
  );
}
