// app/courses/[slug]/lesson/[lessonSlug]/page.tsx
import { Metadata } from "next";
import { getLesson } from "@/data/courses";
import { LessonProgressControls } from "@/components/lesson-progress-controls";
import Link from "next/link";

type Props = { params: Promise<{ slug: string; lessonSlug: string }> };

const lessonTypeIcon: Record<string, string> = { video:"▶", live:"⬤", webinar:"🎙", reading:"◼", assignment:"✍" };
const lessonTypeLabel: Record<string, string> = { video:"Video Lesson", live:"Live Zoom Session", webinar:"Expert Webinar", reading:"Reading", assignment:"Graded Assignment" };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lessonSlug } = await params;
  const r = getLesson(slug, lessonSlug);
  return r
    ? { title: `${r.lesson.title} | ${r.course.title} — Dr. Sarah Al-Amin`, description: r.course.description }
    : { title: "Lesson Not Found | Dr. Sarah Al-Amin" };
}

export default async function LessonPage({ params }: Props) {
  const { slug, lessonSlug } = await params;
  const result = getLesson(slug, lessonSlug);

  if (!result) {
    return (
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Times New Roman', serif", fontSize: 28, fontWeight: "normal" }}>Lesson Not Found</h2>
        <p style={{ fontFamily: "Arial, sans-serif", color: "#666", marginTop: 12, marginBottom: 24 }}>
          This lesson doesn't exist. Return to the course.
        </p>
        <Link href={`/courses/${slug}`} className="btn-primary">Back to Course</Link>
      </div>
    );
  }

  const { course, lesson, lessonIndex } = result;
  const isLastLesson = lessonIndex + 1 >= course.lessons.length;
  const nextLessonSlug = !isLastLesson ? course.lessons[lessonIndex + 1].slug : undefined;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

      {/* Breadcrumb */}
      <div style={{
        fontFamily: "Arial, sans-serif", fontSize: 12, color: "#999",
        padding: "16px 0", borderBottom: "1px solid #ebebeb",
      }}>
        <Link href="/courses" style={{ color: "#6b1a1a", textDecoration: "none" }}>Courses</Link>
        {" / "}
        <Link href={`/courses/${course.slug}`} style={{ color: "#6b1a1a", textDecoration: "none" }}>{course.title}</Link>
        {" / "}<span>Lesson {String(lessonIndex + 1).padStart(2, "0")}</span>
      </div>

      <div style={{
        display: "grid", gap: "0 48px", paddingTop: 32,
      }} className="grid-cols-1 md:grid-cols-[3fr,1fr]">

        {/* Main */}
        <div>
          {/* Lesson header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
              <span style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: lesson.type === "live" || lesson.type === "webinar" ? "#6b1a1a" : "#555",
                border: `1px solid ${lesson.type === "live" || lesson.type === "webinar" ? "#6b1a1a" : "#ccc"}`,
                padding: "3px 10px", fontFamily: "Arial, sans-serif",
              }}>
                {lessonTypeIcon[lesson.type]} {lessonTypeLabel[lesson.type] || lesson.type}
              </span>
              {lesson.isFreePreview && (
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#4a6a2a",
                  border: "1px solid #4a6a2a", padding: "3px 10px",
                  fontFamily: "Arial, sans-serif",
                }}>Free Preview</span>
              )}
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#999" }}>
                {lesson.duration}
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: "normal",
              color: "#1a1a1a", lineHeight: 1.2, marginBottom: 6,
            }}>{lesson.title}</h1>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#999" }}>
              {course.title}
            </p>
          </div>

          {/* Video player */}
          <div style={{
            aspectRatio: "16/9", background: "#111", marginBottom: 28,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            border: "1px solid #333", position: "relative",
          }}>
            <div style={{
              width: 64, height: 64, border: "2px solid rgba(255,255,255,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: 16,
            }}>
              <span style={{ fontSize: 24, color: "rgba(255,255,255,0.7)" }}>
                {lesson.type === "live" || lesson.type === "webinar" ? "⬤" : "▶"}
              </span>
            </div>
            <div style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: 16, color: "rgba(255,255,255,0.6)", textAlign: "center",
              maxWidth: 360, lineHeight: 1.5,
            }}>
              {lesson.type === "live" || lesson.type === "webinar"
                ? "Live session link will appear here when the class begins"
                : "Video content will be available once uploaded by Dr. Al-Amin"}
            </div>
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "12px 20px", background: "rgba(0,0,0,0.6)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#ccc" }}>{lesson.title}</span>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#999" }}>{lesson.duration}</span>
            </div>
          </div>

          {/* Lesson notes */}
          <div style={{
            border: "1px solid #d0cdc8", padding: "28px 32px", marginBottom: 28,
          }}>
            <div style={{ borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 18 }}>
              <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Lesson Notes &amp; Resources</span>
            </div>
            <p style={{
              fontFamily: "Arial, sans-serif", fontSize: 14, color: "#555", lineHeight: 1.8, marginBottom: 16,
            }}>
              Lecture notes, handouts, and supplementary reading materials for this lesson
              will be available here once uploaded. Live session students will receive Zoom
              links by email before the class begins.
            </p>
            <div style={{
              background: "#f7f6f4", border: "1px solid #d0cdc8",
              padding: "14px 18px", display: "flex", alignItems: "center", gap: 12,
              fontFamily: "Arial, sans-serif", fontSize: 13, color: "#666",
            }}>
              <span style={{ flexShrink: 0 }}>📁</span>
              <span>
                Files and slides will appear here. For materials access contact{" "}
                <Link href="/contact" style={{ color: "#6b1a1a" }}>Dr. Al-Amin</Link>.
              </span>
            </div>
          </div>

          <LessonProgressControls
            courseSlug={course.slug}
            lessonSlug={lesson.slug}
            isLastLesson={isLastLesson}
            nextLessonSlug={nextLessonSlug}
          />
        </div>

        {/* Sidebar — lesson list */}
        <div>
          <div style={{
            border: "1px solid #d0cdc8",
            position: "sticky", top: 80,
          }}>
            <div style={{ background: "#1a1a1a", padding: "14px 18px" }}>
              <div className="uppercase-label" style={{ color: "#aaa", marginBottom: 2 }}>Course Content</div>
              <div style={{ fontFamily: "'Times New Roman', serif", fontSize: 14, color: "#fff" }}>
                {course.title}
              </div>
            </div>
            <div>
              {course.lessons.map((l, i) => {
                const isCurrent = l.slug === lesson.slug;
                return (
                  <Link key={l.slug} href={`/courses/${course.slug}/lesson/${l.slug}`}
                    style={{ textDecoration: "none" }}>
                    <div style={{
                      display: "flex", gap: 12, padding: "12px 16px",
                      borderBottom: "1px solid #ebebeb",
                      background: isCurrent ? "#fff7f7" : "#fff",
                      borderLeft: isCurrent ? "3px solid #6b1a1a" : "3px solid transparent",
                    }}>
                      <span style={{
                        fontFamily: "'Times New Roman', serif", fontSize: 12,
                        color: isCurrent ? "#6b1a1a" : "#ccc",
                        minWidth: 20, flexShrink: 0, marginTop: 1,
                      }}>{String(i + 1).padStart(2, "0")}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontFamily: "Arial, sans-serif", fontSize: 12,
                          color: isCurrent ? "#6b1a1a" : "#333",
                          fontWeight: isCurrent ? 700 : 400, lineHeight: 1.35,
                        }}>{l.title}</div>
                        <div style={{
                          fontFamily: "Arial, sans-serif", fontSize: 10,
                          color: "#999", marginTop: 2,
                        }}>{lessonTypeIcon[l.type]} {l.duration}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div style={{ padding: "14px 16px", borderTop: "1px solid #ebebeb" }}>
              <Link href={`/courses/${course.slug}`} style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#6b1a1a", textDecoration: "none",
                fontFamily: "Arial, sans-serif",
              }}>← Course Overview</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
