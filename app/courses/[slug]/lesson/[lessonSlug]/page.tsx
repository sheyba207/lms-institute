// app/courses/[slug]/lesson/[lessonSlug]/page.tsx
import { Metadata } from "next";
import { getLesson } from "@/data/courses";
import { LessonProgressControls } from "@/components/lesson-progress-controls";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string; lessonSlug: string }>;
};

const lessonTypeIcon: Record<string, string> = {
  video: "▶",
  live: "🔴",
  webinar: "🎙",
  reading: "📄",
  assignment: "✍",
};

const lessonTypeLabel: Record<string, string> = {
  video: "Video Lesson",
  live: "Live Zoom Session",
  webinar: "Expert Webinar",
  reading: "Reading Material",
  assignment: "Graded Assignment",
};

const lessonTypeColor: Record<string, { bg: string; text: string; border: string }> = {
  video: { bg: "#f0f4ff", text: "#2d5a8a", border: "#c0d0e8" },
  live: { bg: "#fff0f0", text: "#8a2d2d", border: "#e8c0c0" },
  webinar: { bg: "#f4f0ff", text: "#5a2d8a", border: "#d0c0e8" },
  reading: { bg: "#f0f8f0", text: "#2d6a3a", border: "#c0dcc4" },
  assignment: { bg: "#fff8e8", text: "#8a6a1a", border: "#e8d8a0" },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lessonSlug } = await params;
  const fallback = getLesson(slug, lessonSlug);
  if (fallback) {
    return {
      title: `${fallback.lesson.title} | ${fallback.course.title} — Dr. Sarah Al-Amin`,
      description: fallback.course.description,
    };
  }
  return { title: "Lesson Not Found | Dr. Sarah Al-Amin" };
}

export default async function LessonPage({ params }: Props) {
  const { slug, lessonSlug } = await params;
  const fallback = getLesson(slug, lessonSlug);

  if (!fallback) {
    return (
      <div style={{ textAlign: "center", padding: "80px 0" }}>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 24,
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: 10,
          }}
        >
          Lesson Not Found
        </h2>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 14,
            color: "#7878a0",
            marginBottom: 24,
          }}
        >
          This lesson doesn't seem to exist. Return to the course.
        </p>
        <Link
          href={`/courses/${slug}`}
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
          Back to Course
        </Link>
      </div>
    );
  }

  const { course, lesson, lessonIndex } = fallback;
  const isLastLesson = lessonIndex + 1 >= course.lessons.length;
  const nextLessonSlug = !isLastLesson ? course.lessons[lessonIndex + 1].slug : undefined;
  const typeStyle = lessonTypeColor[lesson.type] || lessonTypeColor.video;

  return (
    <div className="grid gap-8 md:grid-cols-[3fr,1fr]">
      {/* Main content */}
      <div>
        {/* Breadcrumb */}
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 12,
            color: "#9898b8",
            marginBottom: 18,
          }}
        >
          <Link href="/courses" style={{ color: "#c9a84c", textDecoration: "none" }}>
            Courses
          </Link>
          {" › "}
          <Link href={`/courses/${course.slug}`} style={{ color: "#c9a84c", textDecoration: "none" }}>
            {course.title}
          </Link>
          {" › "}
          <span style={{ color: "#3d3d5c" }}>Lesson {String(lessonIndex + 1).padStart(2, "0")}</span>
        </div>

        {/* Lesson type badge + number */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <span
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              background: typeStyle.bg,
              color: typeStyle.text,
              border: `1px solid ${typeStyle.border}`,
              padding: "3px 12px",
              borderRadius: 4,
            }}
          >
            {lessonTypeIcon[lesson.type]} {lessonTypeLabel[lesson.type] || lesson.type}
          </span>
          {lesson.isFreePreview && (
            <span
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                background: "#f0f8f0",
                color: "#4a7c59",
                border: "1px solid #c0dcc4",
                padding: "3px 12px",
                borderRadius: 4,
              }}
            >
              ✓ Free Preview
            </span>
          )}
        </div>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(22px, 3.5vw, 32px)",
            fontWeight: 700,
            color: "#1a1a2e",
            lineHeight: 1.2,
            marginBottom: 8,
          }}
        >
          {lesson.title}
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 13,
            color: "#9898b8",
            marginBottom: 28,
          }}
        >
          {lesson.duration} · {course.title}
        </p>

        {/* Video player placeholder */}
        <div
          style={{
            aspectRatio: "16/9",
            background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
            borderRadius: 12,
            border: "1px solid #2d2d4e",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle at 30% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)",
            }}
          />
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: "rgba(201,168,76,0.15)",
              border: "2px solid rgba(201,168,76,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              marginBottom: 16,
              cursor: "pointer",
            }}
          >
            {lesson.type === "live" || lesson.type === "webinar" ? "🔴" : "▶"}
          </div>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 16,
              color: "#e8e4d8",
              textAlign: "center",
              maxWidth: 360,
              lineHeight: 1.5,
              position: "relative",
            }}
          >
            {lesson.type === "live" || lesson.type === "webinar"
              ? "Live session link will appear here when class begins"
              : "Video content will be embedded here when uploaded by Dr. Al-Amin"}
          </div>
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 12,
              color: "#7878a0",
              marginTop: 10,
              position: "relative",
            }}
          >
            {lesson.duration}
          </div>
        </div>

        {/* Lesson notes area */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e8e4d8",
            borderRadius: 12,
            padding: "28px 32px",
            marginBottom: 28,
          }}
        >
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 18,
              fontWeight: 700,
              color: "#1a1a2e",
              marginBottom: 14,
            }}
          >
            Lesson Notes & Resources
          </h2>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 15,
              color: "#4d4d6c",
              lineHeight: 1.85,
              marginBottom: 16,
            }}
          >
            Lecture notes, supplementary readings, and downloadable materials for this lesson
            will appear in this section once Dr. Al-Amin uploads them. Check your email for
            session reminders and Zoom links if this is a live session.
          </p>
          <div
            style={{
              background: "#faf8f2",
              border: "1px solid #e8e4d8",
              borderRadius: 8,
              padding: "14px 18px",
              fontFamily: "system-ui, sans-serif",
              fontSize: 13,
              color: "#7878a0",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 18 }}>📁</span>
            <span>
              Downloadable files and slides will be available here.{" "}
              <Link href="/contact" style={{ color: "#c9a84c", textDecoration: "none", fontWeight: 600 }}>
                Contact Dr. Al-Amin
              </Link>{" "}
              if you need access to materials.
            </span>
          </div>
        </div>

        {/* Navigation controls */}
        <LessonProgressControls
          courseSlug={course.slug}
          lessonSlug={lesson.slug}
          isLastLesson={isLastLesson}
          nextLessonSlug={nextLessonSlug}
        />
      </div>

      {/* Sidebar — lesson list */}
      <div>
        <div
          style={{
            background: "#fff",
            border: "1px solid #e8e4d8",
            borderRadius: 12,
            overflow: "hidden",
            position: "sticky",
            top: 80,
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
              padding: "16px 18px",
            }}
          >
            <div
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: 4,
              }}
            >
              Course Lessons
            </div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 14,
                color: "#e8e4d8",
                lineHeight: 1.3,
              }}
            >
              {course.title}
            </div>
          </div>

          <div>
            {course.lessons.map((l, i) => {
              const isCurrent = l.slug === lesson.slug;
              return (
                <Link
                  key={l.slug}
                  href={`/courses/${course.slug}/lesson/${l.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "11px 16px",
                      borderBottom: "1px solid #f5f2ea",
                      background: isCurrent ? "#faf4e8" : "transparent",
                      borderLeft: isCurrent ? "3px solid #c9a84c" : "3px solid transparent",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: 11,
                        color: isCurrent ? "#c9a84c" : "#c0bca8",
                        fontWeight: 700,
                        minWidth: 20,
                        textAlign: "right",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          fontFamily: "system-ui, sans-serif",
                          fontSize: 12,
                          color: isCurrent ? "#1a1a2e" : "#4d4d6c",
                          fontWeight: isCurrent ? 600 : 400,
                          lineHeight: 1.3,
                        }}
                      >
                        {l.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "system-ui, sans-serif",
                          fontSize: 10,
                          color: "#9898b8",
                          marginTop: 2,
                        }}
                      >
                        {l.duration}
                      </div>
                    </div>
                    <span style={{ fontSize: 12, flexShrink: 0 }}>
                      {lessonTypeIcon[l.type] || "•"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div style={{ padding: "14px 16px", borderTop: "1px solid #f0ece0" }}>
            <Link
              href={`/courses/${course.slug}`}
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 12,
                color: "#c9a84c",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              ← Course Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
