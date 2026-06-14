// app/webinars/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Live Sessions & Webinars | Dr. Sarah Al-Amin",
  description: "Upcoming live Zoom classes and webinars with Dr. Sarah Al-Amin. Open sessions, expert webinars, and recorded archives.",
};

const upcoming = [
  { day: "19", month: "Jun", type: "Live Zoom", title: "Academic Writing Workshop: Crafting Powerful Introductions", time: "Thursday · 7:00 PM PKT", duration: "90 min", seats: "Limited to 20", course: "Academic Writing Mastery", slug: "academic-writing-mastery", free: false },
  { day: "21", month: "Jun", type: "Webinar", title: "IELTS Task 2 Writing: The 5 Essay Types Explained", time: "Saturday · 5:00 PM PKT", duration: "90 min", seats: "Open to all", course: "IELTS & TOEFL Preparation", slug: "ielts-toefl-preparation", free: true },
  { day: "25", month: "Jun", type: "Live Zoom", title: "English Communication: Professional Email Masterclass", time: "Wednesday · 8:00 PM PKT", duration: "60 min", seats: "Limited to 15", course: "English Communication Skills", slug: "english-communication-skills", free: false },
  { day: "27", month: "Jun", type: "Webinar", title: "Open Q&A: Ask Dr. Al-Amin Anything", time: "Friday · 6:00 PM PKT", duration: "60 min", seats: "Open to all", course: "All Courses", slug: null, free: true },
];

const pastRecordings = [
  { title: "Discourse Markers and Cohesion in Academic Writing", date: "7 Jun 2026", type: "Webinar", dur: "75 min" },
  { title: "IELTS Speaking Part 2: Structuring Your Response", date: "1 Jun 2026", type: "Live Zoom", dur: "60 min" },
  { title: "Introduction to Linguistics: Language as a System", date: "25 May 2026", type: "Webinar", dur: "90 min" },
];

export default function WebinarsPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

      {/* Photo banner */}
      <div style={{ position: "relative", height: 240, background: "#1a1a1a", overflow: "hidden", marginBottom: 40 }}>
        <Image
          src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1400&h=400&fit=crop"
          alt="Students in a collaborative learning session"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 40%", opacity: 0.4 }}
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(107,26,26,0.85) 0%, rgba(0,0,0,0.3) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, padding: "24px 32px" }}>
          <div className="uppercase-label" style={{ color: "#ffbbbb", marginBottom: 8 }}>Interactive Learning</div>
          <h1 style={{ fontFamily: "'Times New Roman', serif", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: "normal", color: "#fff" }}>Live Sessions &amp; Webinars</h1>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#ddd", marginTop: 6, maxWidth: 520 }}>
            Zoom classes for enrolled students, open webinars for everyone, and recorded sessions on demand.
          </p>
        </div>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: 32, marginBottom: 32, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            fontFamily: "Arial, sans-serif", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#6b1a1a", border: "1px solid #6b1a1a", padding: "3px 10px",
          }}>Live Zoom</span>
          <span style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#666" }}>
            Interactive · limited seats · requires enrolment
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{
            fontFamily: "Arial, sans-serif", fontSize: 10, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#333", border: "1px solid #999", padding: "3px 10px",
          }}>Webinar</span>
          <span style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#666" }}>
            Open to all · recorded for later viewing
          </span>
        </div>
      </div>

      {/* Upcoming */}
      <div style={{ borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 0 }}>
        <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Upcoming Sessions — June 2026</span>
      </div>

      <div style={{ marginBottom: 56 }}>
        {upcoming.map((s, i) => (
          <div key={i} className="card-link" style={{
            display: "grid", gap: "0 32px", padding: "28px 0",
            borderLeft: s.type === "Live Zoom" ? "4px solid #6b1a1a" : "4px solid #999",
            paddingLeft: 24,
          }} role="article">
            <div style={{ display: "flex", gap: 28, alignItems: "flex-start", flexWrap: "wrap" }}>
              {/* Date block */}
              <div className="date-block" style={{ minHeight: 58 }}>
                <span className="day">{s.day}</span>
                <span className="month">{s.month}</span>
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
                  <span style={{
                    fontFamily: "Arial, sans-serif", fontSize: 10, fontWeight: 700,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: s.type === "Live Zoom" ? "#6b1a1a" : "#555",
                    border: `1px solid ${s.type === "Live Zoom" ? "#6b1a1a" : "#999"}`,
                    padding: "2px 10px",
                  }}>{s.type}</span>
                  {s.free && (
                    <span style={{
                      fontFamily: "Arial, sans-serif", fontSize: 10, fontWeight: 700,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "#4a6a2a", border: "1px solid #4a6a2a", padding: "2px 10px",
                    }}>Free &amp; Open</span>
                  )}
                </div>

                <h3 style={{
                  fontFamily: "'Times New Roman', serif",
                  fontSize: 20, fontWeight: "normal", color: "#1a1a1a", lineHeight: 1.3, marginBottom: 8,
                }}>{s.title}</h3>

                <div style={{
                  display: "flex", gap: 24, flexWrap: "wrap",
                  fontFamily: "Arial, sans-serif", fontSize: 13, color: "#666",
                  marginBottom: 16,
                }}>
                  <span>{s.time}</span>
                  <span>{s.duration}</span>
                  <span style={{ color: "#6b1a1a" }}>{s.seats}</span>
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {s.slug && (
                    <Link href={`/courses/${s.slug}`} className="btn-outline" style={{ fontSize: 11 }}>
                      View Course
                    </Link>
                  )}
                  <Link href="/contact" className="btn-primary" style={{ fontSize: 11 }}>
                    {s.free ? "Join Free" : "Register →"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Past recordings */}
      <div style={{ marginBottom: 56 }}>
        <div style={{ borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 0 }}>
          <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Past Session Recordings</span>
        </div>
        <div style={{ marginBottom: 12, fontFamily: "Arial, sans-serif", fontSize: 13, color: "#999", padding: "12px 0" }}>
          Enrolled students can access all recordings from the dashboard.
        </div>
        {pastRecordings.map((r, i) => (
          <div key={i} className="card-link" style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "center", padding: "16px 0", flexWrap: "wrap", gap: 12,
          }}>
            <div>
              <div style={{ fontFamily: "'Times New Roman', serif", fontSize: 16, color: "#1a1a1a", marginBottom: 3 }}>
                {r.title}
              </div>
              <div style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#999" }}>
                {r.type} · {r.date} · {r.dur}
              </div>
            </div>
            <Link href="/dashboard" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#6b1a1a", textDecoration: "none",
              border: "1px solid #6b1a1a", padding: "5px 14px",
              fontFamily: "Arial, sans-serif",
            }}>Watch Recording →</Link>
          </div>
        ))}
      </div>

      {/* Never miss CTA */}
      <div style={{
        background: "#f7f6f4", border: "1px solid #d0cdc8",
        padding: "36px 40px", marginBottom: 60,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 20,
      }}>
        <div>
          <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 8 }}>Never Miss a Session</div>
          <p style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#555" }}>
            Enrol in a course to receive session reminders, Zoom links, and access to all recordings.
          </p>
        </div>
        <Link href="/courses" className="btn-primary">Browse Courses</Link>
      </div>
    </div>
  );
}
