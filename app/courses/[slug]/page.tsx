// app/courses/[slug]/page.tsx
import { getCourseBySlug, courses } from "@/data/courses";
import { instructors } from "@/data/instructors";
import { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

const lessonTypeIcon: Record<string, string> = {
  video: "▶",
  live: "🔴",
  webinar: "🎙",
  reading: "📄",
  assignment: "✍",
};

const lessonTypeLabel: Record<string, string> = {
  video: "Video",
  live: "Live Zoom",
  webinar: "Webinar",
  reading: "Reading",
  assignment: "Assignment",
};

const lessonTypeBg: Record<string, string> = {
  video: "#f0f4ff",
  live: "#fff0f0",
  webinar: "#f4f0ff",
  reading: "#f0f8f0",
  assignment: "#fff8e8",
};

const lessonTypeText: Record<string, string> = {
  video: "#2d5a8a",
  live: "#8a2d2d",
  webinar: "#5a2d8a",
  reading: "#2d6a3a",
  assignment: "#8a6a1a",
};

const categoryColor: Record<string, string> = {
  "Academic Skills": "#4a7c59",
  "Communication": "#2d6a8a",
  "Exam Preparation": "#7a4a8a",
  "Linguistics": "#8a5a2a",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  return {
    title: course ? `${course.title} | Dr. Sarah Al-Amin` : "Course Not Found",
    description: course?.description || "",
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div style={{ textAlign: "center", padding: "80px 0" }}>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 28,
            color: "#1a1a2e",
            marginBottom: 12,
          }}
        >
          Course Not Found
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            color: "#7878a0",
            marginBottom: 24,
          }}
        >
          The course you're looking for doesn't exist.
        </p>
        <Link
          href="/courses"
          style={{
            fontFamily: "system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
            color: "#1a1a2e",
            padding: "11px 24px",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          Browse All Courses
        </Link>
      </div>
    );
  }

  const instructor = instructors.find((i) => i.slug === course.instructor);
  const catColor = categoryColor[course.category] || "#4a4a6a";
  const firstFreeLesson = course.lessons.find((l) => l.isFreePreview);

  return (
    <div className="grid gap-12 md:grid-cols-[2fr,1fr]">
      {/* ─── MAIN ─── */}
      <div>
        {/* Breadcrumb */}
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 12,
            color: "#9898b8",
            marginBottom: 20,
          }}
        >
          <Link href="/courses" style={{ color: "#c9a84c", textDecoration: "none" }}>
            Courses
          </Link>
          {" › "}
          <span>{course.category}</span>
          {" › "}
          <span style={{ color: "#3d3d5c" }}>{course.title}</span>
        </div>

        {/* Title block */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "system-ui, sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: catColor,
            background: `${catColor}15`,
            padding: "3px 12px",
            borderRadius: 100,
            marginBottom: 16,
          }}
        >
          {course.category}
        </div>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(26px, 4vw, 38px)",
            fontWeight: 700,
            color: "#1a1a2e",
            lineHeight: 1.2,
            marginBottom: 12,
          }}
        >
          {course.title}
        </h1>

        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 17,
            fontStyle: "italic",
            color: "#c9a84c",
            marginBottom: 18,
          }}
        >
          {course.tagline}
        </p>

        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 15,
            color: "#4d4d6c",
            lineHeight: 1.75,
            marginBottom: 32,
          }}
        >
          {course.description}
        </p>

        {/* What you'll learn */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e8e4d8",
            borderRadius: 12,
            padding: "28px 32px",
            marginBottom: 40,
          }}
        >
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 18,
              fontWeight: 700,
              color: "#1a1a2e",
              marginBottom: 18,
            }}
          >
            What You Will Learn
          </h2>
          <div className="grid gap-y-3 gap-x-8 md:grid-cols-2">
            {course.content.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                  color: "#3d3d5c",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    color: "#c9a84c",
                    fontWeight: 700,
                    marginTop: 1,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Lesson list */}
        <div style={{ marginBottom: 40 }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 20,
              fontWeight: 700,
              color: "#1a1a2e",
              marginBottom: 20,
              paddingBottom: 12,
              borderBottom: "2px solid #c9a84c",
              display: "inline-block",
            }}
          >
            Course Lessons — {course.lessons.length} Sessions
          </h2>

          <div
            style={{
              border: "1px solid #e8e4d8",
              borderRadius: 12,
              overflow: "hidden",
              background: "#fff",
            }}
          >
            {course.lessons.map((lesson, index) => (
              <Link
                key={lesson.slug}
                href={`/courses/${course.slug}/lesson/${lesson.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "16px 20px",
                    borderBottom: index < course.lessons.length - 1 ? "1px solid #f0ece0" : "none",
                    transition: "background 0.15s ease",
                    cursor: "pointer",
                  }}
                  className="hover:bg-amber-50"
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 13,
                      color: "#c9a84c",
                      fontWeight: 700,
                      minWidth: 28,
                      textAlign: "right",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Type icon */}
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 6,
                      background: lessonTypeBg[lesson.type] || "#f5f5f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      flexShrink: 0,
                    }}
                  >
                    {lessonTypeIcon[lesson.type] || "•"}
                  </span>

                  {/* Title + label */}
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "#1a1a2e",
                        lineHeight: 1.35,
                      }}
                    >
                      {lesson.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 11,
                        color: lessonTypeText[lesson.type] || "#7878a0",
                        marginTop: 2,
                      }}
                    >
                      {lessonTypeLabel[lesson.type] || lesson.type}
                    </div>
                  </div>

                  {/* Duration + preview badge */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      flexShrink: 0,
                    }}
                  >
                    {lesson.isFreePreview && (
                      <span
                        style={{
                          fontFamily: "system-ui, sans-serif",
                          fontSize: 10,
                          fontWeight: 700,
                          background: "#f0f8f0",
                          color: "#4a7c59",
                          padding: "2px 8px",
                          borderRadius: 4,
                          border: "1px solid #d0e8d0",
                        }}
                      >
                        Free Preview
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 11,
                        color: "#9898b8",
                      }}
                    >
                      {lesson.duration}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Instructor block */}
        {instructor && (
          <div
            style={{
              background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
              borderRadius: 12,
              padding: "28px 32px",
            }}
          >
            <h2
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: 16,
              }}
            >
              Your Instructor
            </h2>
            <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Georgia, serif",
                  fontWeight: 700,
                  fontSize: 22,
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
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#faf8f2",
                    marginBottom: 4,
                  }}
                >
                  {instructor.name}
                </div>
                <div
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 12,
                    color: "#c9a84c",
                    marginBottom: 12,
                  }}
                >
                  {instructor.title}
                </div>
                <p
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 13,
                    color: "#9898b8",
                    lineHeight: 1.65,
                    marginBottom: 14,
                  }}
                >
                  {instructor.bio[0]}
                </p>
                <Link
                  href="/about"
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 12,
                    color: "#c9a84c",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Full profile & publications →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ─── SIDEBAR ─── */}
      <div>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e8e4d8",
            borderRadius: 14,
            overflow: "hidden",
            position: "sticky",
            top: 80,
          }}
        >
          <div style={{ height: 5, background: catColor }} />
          <div style={{ padding: "24px 24px" }}>
            {/* Quick stats */}
            <div
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                color: "#c9a84c",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Course Details
            </div>

            {[
              { label: "Duration", value: course.duration },
              { label: "Level", value: course.level },
              { label: "Total Lessons", value: `${course.lessons.length}` },
              {
                label: "Live Sessions",
                value: `${course.lessons.filter((l) => l.type === "live" || l.type === "webinar").length}`,
              },
              { label: "Instructor", value: instructor?.name || "Dr. Al-Amin" },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom: "1px solid #f5f2ea",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                }}
              >
                <span style={{ color: "#9898b8" }}>{row.label}</span>
                <span style={{ color: "#1a1a2e", fontWeight: 500 }}>{row.value}</span>
              </div>
            ))}

            <div style={{ marginTop: 20 }}>
              <Link
                href={
                  firstFreeLesson
                    ? `/courses/${course.slug}/lesson/${firstFreeLesson.slug}`
                    : `/courses/${course.slug}/lesson/${course.lessons[0]?.slug}`
                }
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
                  color: "#e8cc7a",
                  padding: "13px",
                  borderRadius: 8,
                  textDecoration: "none",
                  marginBottom: 10,
                }}
              >
                {firstFreeLesson ? "Watch Free Preview →" : "Start Course →"}
              </Link>
              <Link
                href="/contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                  color: "#1a1a2e",
                  border: "1px solid #c9a84c",
                  padding: "10px",
                  borderRadius: 8,
                  textDecoration: "none",
                }}
              >
                Ask a Question
              </Link>
            </div>

            {/* What's included summary */}
            <div
              style={{
                marginTop: 20,
                paddingTop: 20,
                borderTop: "1px solid #f0ece0",
              }}
            >
              <div
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#c9a84c",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 12,
                }}
              >
                Includes
              </div>
              {[
                course.lessons.filter((l) => l.type === "video").length > 0 &&
                  `▶ ${course.lessons.filter((l) => l.type === "video").length} video lessons`,
                course.lessons.some((l) => l.type === "live") &&
                  "🔴 Live Zoom sessions",
                course.lessons.some((l) => l.type === "webinar") &&
                  "🎙 Expert webinars",
                course.lessons.some((l) => l.type === "assignment") &&
                  "✍ Graded assignments",
                "📁 Downloadable resources",
                "✉ Instructor email support",
              ]
                .filter(Boolean)
                .map((item) => (
                  <div
                    key={item as string}
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 12,
                      color: "#4d4d6c",
                      padding: "5px 0",
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
