// app/courses/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { courses as fallbackCourses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses | Dr. Sarah Al-Amin — English Language & Linguistics",
  description:
    "Browse expert courses in academic writing, English communication, IELTS/TOEFL preparation, and linguistics — taught by Dr. Sarah Al-Amin, PhD.",
};

const categoryColor: Record<string, string> = {
  "Academic Skills": "#4a7c59",
  "Communication": "#2d6a8a",
  "Exam Preparation": "#7a4a8a",
  "Linguistics": "#8a5a2a",
};

const lessonTypeLabel: Record<string, string> = {
  video: "Video",
  live: "Live Zoom",
  webinar: "Webinar",
  reading: "Reading",
  assignment: "Assignment",
};

export default async function CoursesPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
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
          Learning with Dr. Al-Amin
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
          All Courses
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 15,
            color: "#7878a0",
            maxWidth: 560,
            lineHeight: 1.7,
          }}
        >
          Structured, expert-led programmes in English language and linguistics.
          Includes video lectures, live Zoom sessions, webinars, and personalised feedback.
        </p>
      </div>

      {/* Course grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {fallbackCourses.map((course) => {
          const catColor = categoryColor[course.category] || "#4a4a6a";
          const videoCount = course.lessons.filter((l) => l.type === "video").length;
          const liveCount = course.lessons.filter((l) => l.type === "live" || l.type === "webinar").length;
          const hasPreview = course.lessons.some((l) => l.isFreePreview);

          return (
            <div
              key={course.slug}
              className="card-hover"
              style={{
                background: "#fff",
                border: "1px solid #e8e4d8",
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              {/* Category bar */}
              <div style={{ height: 5, background: catColor }} />

              <div style={{ padding: "28px 28px 24px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 14,
                  }}
                >
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: catColor,
                        background: `${catColor}15`,
                        padding: "3px 10px",
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
                          padding: "3px 10px",
                          borderRadius: 100,
                        }}
                      >
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 11,
                      color: "#9898b8",
                    }}
                  >
                    {course.level}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#1a1a2e",
                    lineHeight: 1.25,
                    marginBottom: 8,
                  }}
                >
                  {course.title}
                </h2>

                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 13,
                    color: "#6868888",
                    lineHeight: 1.65,
                    marginBottom: 16,
                    fontStyle: "italic",
                  }}
                >
                  {course.tagline}
                </p>

                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 13,
                    color: "#606080",
                    lineHeight: 1.65,
                    marginBottom: 20,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {course.description}
                </p>

                {/* What's included */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    marginBottom: 20,
                  }}
                >
                  {videoCount > 0 && (
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 11,
                        background: "#f0ece0",
                        color: "#4a4a6a",
                        padding: "4px 10px",
                        borderRadius: 4,
                      }}
                    >
                      ▶ {videoCount} video{videoCount !== 1 ? "s" : ""}
                    </span>
                  )}
                  {liveCount > 0 && (
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 11,
                        background: "#fff0f0",
                        color: "#8a2d2d",
                        padding: "4px 10px",
                        borderRadius: 4,
                      }}
                    >
                      🔴 {liveCount} live session{liveCount !== 1 ? "s" : ""}
                    </span>
                  )}
                  {hasPreview && (
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 11,
                        background: "#f0f8f0",
                        color: "#4a7c59",
                        padding: "4px 10px",
                        borderRadius: 4,
                      }}
                    >
                      ✓ Free preview lesson
                    </span>
                  )}
                </div>

                {/* Duration + CTA */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: 16,
                    borderTop: "1px solid #f0ece0",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 12,
                      color: "#9898b8",
                    }}
                  >
                    {course.duration} · {course.lessons.length} lessons
                  </div>
                  <Link
                    href={`/courses/${course.slug}`}
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
                      color: "#e8cc7a",
                      padding: "8px 18px",
                      borderRadius: 6,
                      textDecoration: "none",
                    }}
                  >
                    View Course →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA banner */}
      <div
        style={{
          marginTop: 64,
          background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
          borderRadius: 14,
          padding: "36px 44px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 20,
              fontWeight: 700,
              color: "#faf8f2",
              marginBottom: 6,
            }}
          >
            Not sure which course is right for you?
          </div>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 13,
              color: "#9898b8",
            }}
          >
            Send a message and Dr. Al-Amin will personally recommend a learning path.
          </p>
        </div>
        <Link
          href="/contact"
          style={{
            fontFamily: "system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
            color: "#1a1a2e",
            padding: "12px 24px",
            borderRadius: 6,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Ask Dr. Al-Amin →
        </Link>
      </div>
    </div>
  );
}
