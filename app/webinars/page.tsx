// app/webinars/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Live Sessions & Webinars | Dr. Sarah Al-Amin",
  description:
    "Join Dr. Sarah Al-Amin for live Zoom classes, expert webinars, and interactive language learning sessions. Upcoming schedule and recordings.",
};

const upcomingSessions = [
  {
    id: 1,
    type: "Live Zoom",
    typeColor: "#8a2d2d",
    typeBg: "#fff0f0",
    title: "Academic Writing Workshop: Crafting Powerful Introductions",
    description:
      "A hands-on session where students share their introductions and receive live feedback. Covers thesis placement, hook strategies, and background context.",
    date: "Thursday, 19 June 2026",
    time: "7:00 PM – 8:30 PM (PKT)",
    duration: "90 minutes",
    seats: "Limited to 20 participants",
    course: "Academic Writing Mastery",
    courseSlug: "academic-writing-mastery",
    free: false,
  },
  {
    id: 2,
    type: "Webinar",
    typeColor: "#5a2d8a",
    typeBg: "#f4f0ff",
    title: "IELTS Task 2 Writing: The 5 Essay Types Explained",
    description:
      "Dr. Al-Amin walks through all five Task 2 essay types — opinion, discussion, problem/solution, two-part question, and advantage/disadvantage — with annotated model answers.",
    date: "Saturday, 21 June 2026",
    time: "5:00 PM – 6:30 PM (PKT)",
    duration: "90 minutes",
    seats: "Open to all",
    course: "IELTS & TOEFL Preparation",
    courseSlug: "ielts-toefl-preparation",
    free: true,
  },
  {
    id: 3,
    type: "Live Zoom",
    typeColor: "#8a2d2d",
    typeBg: "#fff0f0",
    title: "English Communication: Professional Email Masterclass",
    description:
      "Live writing and editing session focused on professional email tone, structure, and vocabulary. Participants submit real emails for live rewriting.",
    date: "Wednesday, 25 June 2026",
    time: "8:00 PM – 9:00 PM (PKT)",
    duration: "60 minutes",
    seats: "Limited to 15 participants",
    course: "English Communication Skills",
    courseSlug: "english-communication-skills",
    free: false,
  },
  {
    id: 4,
    type: "Webinar",
    typeColor: "#5a2d8a",
    typeBg: "#f4f0ff",
    title: "Open Q&A: Ask Dr. Al-Amin Anything",
    description:
      "A monthly open session where any student can bring questions about English language, exam preparation, academic writing, or linguistics. No agenda — just answers.",
    date: "Friday, 27 June 2026",
    time: "6:00 PM – 7:00 PM (PKT)",
    duration: "60 minutes",
    seats: "Open to all",
    course: "All Courses",
    courseSlug: null,
    free: true,
  },
];

const pastRecordings = [
  {
    title: "Discourse Markers and Cohesion in Academic Writing",
    date: "7 June 2026",
    type: "Webinar",
    duration: "75 min",
  },
  {
    title: "IELTS Speaking Part 2: Structuring Your Response",
    date: "1 June 2026",
    type: "Live Zoom",
    duration: "60 min",
  },
  {
    title: "Introduction to Linguistics: Language as a System",
    date: "25 May 2026",
    type: "Webinar",
    duration: "90 min",
  },
];

export default function WebinarsPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 52 }}>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: "#c9a84c",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Interactive Learning
        </div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            color: "#1a1a2e",
            lineHeight: 1.15,
            marginBottom: 14,
          }}
        >
          Live Sessions & Webinars
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 15,
            color: "#7878a0",
            maxWidth: 580,
            lineHeight: 1.7,
          }}
        >
          Real-time learning with Dr. Al-Amin. Zoom classes for enrolled students,
          open webinars for everyone, and recorded sessions you can revisit anytime.
        </p>
      </div>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: 20,
          marginBottom: 36,
          flexWrap: "wrap",
          fontFamily: "system-ui, sans-serif",
          fontSize: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              background: "#fff0f0",
              color: "#8a2d2d",
              padding: "3px 10px",
              borderRadius: 4,
              fontWeight: 700,
              fontSize: 11,
            }}
          >
            🔴 Live Zoom
          </span>
          <span style={{ color: "#7878a0" }}>Interactive, limited seats, requires enrolment</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span
            style={{
              background: "#f4f0ff",
              color: "#5a2d8a",
              padding: "3px 10px",
              borderRadius: 4,
              fontWeight: 700,
              fontSize: 11,
            }}
          >
            🎙 Webinar
          </span>
          <span style={{ color: "#7878a0" }}>Open to all, recorded for later viewing</span>
        </div>
      </div>

      {/* Upcoming sessions */}
      <h2
        style={{
          fontFamily: "Georgia, serif",
          fontSize: 22,
          fontWeight: 700,
          color: "#1a1a2e",
          marginBottom: 24,
          paddingBottom: 12,
          borderBottom: "2px solid #c9a84c",
          display: "inline-block",
        }}
      >
        Upcoming Sessions — June 2026
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 60 }}>
        {upcomingSessions.map((session) => (
          <div
            key={session.id}
            style={{
              background: "#fff",
              border: "1px solid #e8e4d8",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "5px 1fr",
              }}
            >
              <div style={{ background: session.typeColor }} />
              <div style={{ padding: "24px 28px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 12,
                    marginBottom: 14,
                  }}
                >
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 11,
                        fontWeight: 700,
                        background: session.typeBg,
                        color: session.typeColor,
                        padding: "3px 10px",
                        borderRadius: 4,
                      }}
                    >
                      {session.type === "Live Zoom" ? "🔴" : "🎙"} {session.type}
                    </span>
                    {session.free && (
                      <span
                        style={{
                          fontFamily: "system-ui, sans-serif",
                          fontSize: 11,
                          fontWeight: 700,
                          background: "#f0f8f0",
                          color: "#4a7c59",
                          padding: "3px 10px",
                          borderRadius: 4,
                          border: "1px solid #d0e8d0",
                        }}
                      >
                        Free & Open
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 12,
                      color: "#9898b8",
                    }}
                  >
                    {session.seats}
                  </div>
                </div>

                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#1a1a2e",
                    lineHeight: 1.25,
                    marginBottom: 10,
                  }}
                >
                  {session.title}
                </h3>

                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 13,
                    color: "#606080",
                    lineHeight: 1.65,
                    marginBottom: 18,
                  }}
                >
                  {session.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 12,
                    paddingTop: 16,
                    borderTop: "1px solid #f0ece0",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 13,
                      color: "#3d3d5c",
                      display: "flex",
                      gap: 20,
                      flexWrap: "wrap",
                    }}
                  >
                    <span>📅 {session.date}</span>
                    <span>🕖 {session.time}</span>
                    <span>⏱ {session.duration}</span>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    {session.courseSlug && (
                      <Link
                        href={`/courses/${session.courseSlug}`}
                        style={{
                          fontFamily: "system-ui, sans-serif",
                          fontSize: 12,
                          color: "#c9a84c",
                          textDecoration: "none",
                          padding: "7px 16px",
                          border: "1px solid #c9a84c",
                          borderRadius: 6,
                        }}
                      >
                        View Course
                      </Link>
                    )}
                    <Link
                      href="/contact"
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 13,
                        fontWeight: 700,
                        background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
                        color: "#e8cc7a",
                        textDecoration: "none",
                        padding: "8px 18px",
                        borderRadius: 6,
                      }}
                    >
                      {session.free ? "Join Free →" : "Register →"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Past recordings */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e8e4d8",
          borderRadius: 14,
          padding: "28px 32px",
          marginBottom: 48,
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 20,
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: 6,
          }}
        >
          Past Session Recordings
        </h2>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 13,
            color: "#9898b8",
            marginBottom: 22,
          }}
        >
          Enrolled students can access all recordings from the dashboard.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {pastRecordings.map((rec, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom: i < pastRecordings.length - 1 ? "1px solid #f0ece0" : "none",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 14,
                    color: "#1a1a2e",
                    fontWeight: 500,
                    marginBottom: 3,
                  }}
                >
                  {rec.title}
                </div>
                <div
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 11,
                    color: "#9898b8",
                  }}
                >
                  {rec.type} · {rec.date} · {rec.duration}
                </div>
              </div>
              <Link
                href="/dashboard"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 12,
                  color: "#c9a84c",
                  textDecoration: "none",
                  fontWeight: 600,
                  border: "1px solid #c9a84c",
                  padding: "5px 14px",
                  borderRadius: 4,
                  whiteSpace: "nowrap",
                }}
              >
                Watch Recording →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Never miss a session CTA */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
          borderRadius: 14,
          padding: "36px 44px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 24,
            fontWeight: 700,
            color: "#faf8f2",
            marginBottom: 10,
          }}
        >
          Never miss a live session.
        </h2>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 14,
            color: "#9898b8",
            marginBottom: 24,
            maxWidth: 440,
            margin: "0 auto 24px",
            lineHeight: 1.7,
          }}
        >
          Enrol in a course to receive session reminders, Zoom links, and access to all recordings.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/courses"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
              color: "#1a1a2e",
              padding: "12px 26px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Browse Courses
          </Link>
          <Link
            href="/contact"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              color: "#c8c8e0",
              border: "1px solid #4a4a6a",
              padding: "11px 22px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Send a Question
          </Link>
        </div>
      </div>
    </div>
  );
}
