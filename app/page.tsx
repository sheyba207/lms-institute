// app/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Dr. Sarah Al-Amin | English Language & Linguistics — Online Courses",
  description:
    "PhD Professor in Applied Linguistics. Expert online courses in academic writing, IELTS/TOEFL preparation, English communication, and linguistics. Live webinars and Zoom sessions.",
};

const lessonTypeIcon: Record<string, string> = {
  video: "▶",
  live: "🔴",
  webinar: "🎙",
  reading: "📄",
  assignment: "✍",
};

const categoryColor: Record<string, string> = {
  "Academic Skills": "#4a7c59",
  "Communication": "#2d6a8a",
  "Exam Preparation": "#7a4a8a",
  "Linguistics": "#8a5a2a",
};

export default function HomePage() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #2d2d4e 100%)",
          borderRadius: 16,
          padding: "64px 48px",
          position: "relative",
          overflow: "hidden",
          marginBottom: 64,
        }}
      >
        {/* Decorative quote mark */}
        <div
          style={{
            position: "absolute",
            top: -20,
            right: 40,
            fontSize: 280,
            color: "rgba(201, 168, 76, 0.05)",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          "
        </div>

        <div className="grid gap-12 md:grid-cols-[3fr,2fr] md:items-center relative">
          <div>
            {/* Credentials badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(201, 168, 76, 0.15)",
                border: "1px solid rgba(201, 168, 76, 0.4)",
                borderRadius: 100,
                padding: "5px 14px",
                marginBottom: 24,
                fontFamily: "system-ui, sans-serif",
                fontSize: 12,
                color: "#e8cc7a",
                letterSpacing: "0.04em",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#c9a84c",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              PhD Applied Linguistics · University Professor · 10+ Years Teaching
            </div>

            <h1
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(32px, 5vw, 54px)",
                fontWeight: 700,
                color: "#faf8f2",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              Where Language Becomes
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #c9a84c, #e8cc7a, #c9a84c)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Greatest Asset.
              </span>
            </h1>

            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 17,
                color: "#b0b0d0",
                lineHeight: 1.8,
                maxWidth: 520,
                marginBottom: 32,
              }}
            >
              Expert-led courses in academic writing, professional English,
              linguistics, and exam preparation — taught by a university professor
              who has dedicated her career to making language accessible,
              meaningful, and transformative.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/courses"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  background: "linear-gradient(135deg, #c9a84c 0%, #e8cc7a 100%)",
                  color: "#1a1a2e",
                  padding: "13px 28px",
                  borderRadius: 6,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  display: "inline-block",
                }}
              >
                Explore All Courses
              </Link>
              <Link
                href="/webinars"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 14,
                  color: "#c8c8e0",
                  border: "1px solid #4a4a6a",
                  padding: "12px 24px",
                  borderRadius: 6,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Upcoming Live Sessions →
              </Link>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 32,
                marginTop: 40,
                paddingTop: 32,
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {[
                { value: "PhD", label: "Applied Linguistics" },
                { value: "10+", label: "Years University Teaching" },
                { value: "4", label: "Specialist Courses" },
                { value: "Live", label: "Zoom & Webinar Sessions" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#e8cc7a",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 11,
                      color: "#7878a0",
                      marginTop: 2,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel — live session card */}
          <div className="hidden md:block">
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201, 168, 76, 0.25)",
                borderRadius: 12,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 11,
                  color: "#c9a84c",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                🔴 Upcoming Live Session
              </div>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 16,
                  color: "#faf8f2",
                  lineHeight: 1.4,
                  marginBottom: 12,
                }}
              >
                Academic Writing Workshop: Writing Introductions That Hook
              </div>
              <div
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 12,
                  color: "#7878a0",
                  marginBottom: 20,
                }}
              >
                Zoom Session · Thursday 7:00 PM · Open to all students
              </div>

              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: 16,
                  marginTop: 4,
                }}
              >
                <div
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 11,
                    color: "#7878a0",
                    marginBottom: 14,
                  }}
                >
                  Learning Schedule This Week
                </div>
                {[
                  { day: "Mon", label: "Video: Thesis Statement Craft", done: true },
                  { day: "Wed", label: "Reading: Discourse Markers", done: true },
                  { day: "Thu", label: "Live Zoom — Writing Workshop", done: false },
                  { day: "Sat", label: "Webinar: Q&A Open Session", done: false },
                ].map((item) => (
                  <div
                    key={item.day}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 10,
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 12,
                    }}
                  >
                    <span
                      style={{
                        width: 28,
                        textAlign: "center",
                        color: "#c9a84c",
                        fontWeight: 600,
                        fontSize: 10,
                      }}
                    >
                      {item.day}
                    </span>
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        border: "1.5px solid",
                        borderColor: item.done ? "#4a7c59" : "#4a4a6a",
                        background: item.done ? "#4a7c59" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 9,
                        color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      {item.done ? "✓" : ""}
                    </div>
                    <span style={{ color: item.done ? "#5a9a6a" : "#c8c8e0" }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="/dashboard"
                style={{
                  display: "block",
                  marginTop: 18,
                  textAlign: "center",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                  color: "#1a1a2e",
                  background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
                  padding: "10px",
                  borderRadius: 6,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Go to My Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED COURSES ──────────────────────────── */}
      <section style={{ marginBottom: 72 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 32,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: "#c9a84c",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Courses by Dr. Al-Amin
            </div>
            <h2
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 30,
                fontWeight: 700,
                color: "#1a1a2e",
              }}
            >
              Learn Something That Lasts
            </h2>
          </div>
          <Link
            href="/courses"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 13,
              color: "#c9a84c",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredCourses.map((course) => {
            const catColor = categoryColor[course.category] || "#4a4a6a";
            return (
              <Link
                key={course.slug}
                href={`/courses/${course.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="card-hover"
                  style={{
                    background: "#fff",
                    border: "1px solid #e8e4d8",
                    borderRadius: 12,
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  {/* Course color bar */}
                  <div style={{ height: 4, background: catColor }} />
                  <div style={{ padding: "22px 22px 20px" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 12,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "system-ui, sans-serif",
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: catColor,
                          background: `${catColor}15`,
                          padding: "3px 9px",
                          borderRadius: 100,
                        }}
                      >
                        {course.category}
                      </span>
                      {course.badge && (
                        <span
                          style={{
                            fontFamily: "system-ui, sans-serif",
                            fontSize: 10,
                            fontWeight: 700,
                            background: "#c9a84c",
                            color: "#1a1a2e",
                            padding: "3px 9px",
                            borderRadius: 100,
                          }}
                        >
                          {course.badge}
                        </span>
                      )}
                    </div>

                    <h3
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: 17,
                        fontWeight: 700,
                        color: "#1a1a2e",
                        lineHeight: 1.3,
                        marginBottom: 8,
                      }}
                    >
                      {course.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 12,
                        color: "#6060808",
                        lineHeight: 1.6,
                        marginBottom: 16,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {course.tagline}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingTop: 14,
                        borderTop: "1px solid #f0ece0",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 11,
                        color: "#9898b8",
                      }}
                    >
                      <span>{course.level}</span>
                      <span>{course.duration} · {course.lessons.length} lessons</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── WHAT MAKES THIS DIFFERENT ──────────────────── */}
      <section
        style={{
          background: "#fff",
          border: "1px solid #e8e4d8",
          borderRadius: 16,
          padding: "48px 48px",
          marginBottom: 72,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: 48,
          }}
        >
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
            The Learning Experience
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 30,
              fontWeight: 700,
              color: "#1a1a2e",
            }}
          >
            More Than Pre-Recorded Videos
          </h2>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              color: "#7878a0",
              maxWidth: 500,
              margin: "12px auto 0",
              lineHeight: 1.7,
            }}
          >
            Real interaction with a real professor — the kind of learning
            that changes how you think, not just what you know.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "▶",
              title: "Video Lectures",
              desc: "Carefully produced lessons you can revisit anytime — structured, clear, and designed to build on each other.",
              color: "#2d6a8a",
            },
            {
              icon: "🔴",
              title: "Live Zoom Classes",
              desc: "Interactive sessions where you can ask questions, practice in real time, and connect with fellow learners.",
              color: "#8a2d2d",
            },
            {
              icon: "🎙",
              title: "Expert Webinars",
              desc: "Deep-dive sessions on topics like dissertation writing, IELTS strategies, and professional communication.",
              color: "#4a7c59",
            },
            {
              icon: "✍",
              title: "Personalised Feedback",
              desc: "Submit assignments and receive detailed, specific feedback from Dr. Al-Amin herself.",
              color: "#7a4a8a",
            },
          ].map((item) => (
            <div key={item.title} style={{ textAlign: "center" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: `${item.color}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  margin: "0 auto 16px",
                  border: `1px solid ${item.color}30`,
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: 8,
                }}
              >
                {item.title}
              </div>
              <p
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 12,
                  color: "#7878a0",
                  lineHeight: 1.7,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROFESSOR QUOTE ────────────────────────────── */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #2d2d4e 100%)",
          borderRadius: 16,
          padding: "52px 64px",
          marginBottom: 72,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -30,
            left: 30,
            fontSize: 200,
            color: "rgba(201,168,76,0.06)",
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          "
        </div>
        <div style={{ position: "relative", maxWidth: 700 }}>
          <blockquote
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontStyle: "italic",
              color: "#e8e4d8",
              lineHeight: 1.65,
              marginBottom: 28,
            }}
          >
            "I built this platform because I believe every learner deserves access to
            the same quality of instruction that universities offer — and sometimes more.
            Language is the foundation of thought. When you master it, everything else becomes possible."
          </blockquote>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Georgia, serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#1a1a2e",
                flexShrink: 0,
              }}
            >
              S
            </div>
            <div>
              <div
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  color: "#faf8f2",
                  fontSize: 15,
                }}
              >
                Dr. Sarah Al-Amin
              </div>
              <div
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 12,
                  color: "#c9a84c",
                }}
              >
                PhD Applied Linguistics · Founder & Lead Instructor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section style={{ textAlign: "center", marginBottom: 24 }}>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: "#c9a84c",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Ready to Begin?
        </div>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 34,
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: 16,
          }}
        >
          Your next lesson is waiting.
        </h2>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 14,
            color: "#7878a0",
            maxWidth: 480,
            margin: "0 auto 28px",
            lineHeight: 1.7,
          }}
        >
          Browse courses, register for the next live Zoom session, or
          send Dr. Al-Amin a message about your learning goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/courses"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              background: "linear-gradient(135deg, #c9a84c 0%, #e8cc7a 100%)",
              color: "#1a1a2e",
              padding: "13px 28px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Browse All Courses
          </Link>
          <Link
            href="/contact"
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 14,
              color: "#1a1a2e",
              border: "2px solid #c9a84c",
              padding: "11px 24px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
