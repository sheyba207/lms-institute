// app/courses/[slug]/page.tsx
import { getCourseBySlug } from "@/data/courses";
import { instructors } from "@/data/instructors";
import { Metadata } from "next";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

const lessonTypeIcon: Record<string, string> = {
  video: "▶", live: "⬤", webinar: "🎙", reading: "◼", assignment: "✍",
};
const lessonTypeLabel: Record<string, string> = {
  video: "Video", live: "Live Zoom", webinar: "Webinar", reading: "Reading", assignment: "Assignment",
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
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Times New Roman', serif", fontSize: 32, fontWeight: "normal" }}>Course Not Found</h1>
        <p style={{ fontFamily: "Arial, sans-serif", color: "#666", marginTop: 12, marginBottom: 24 }}>
          The course you're looking for doesn't exist.
        </p>
        <Link href="/courses" className="btn-primary">Browse All Courses</Link>
      </div>
    );
  }

  const instructor = instructors.find(i => i.slug === course.instructor);
  const firstFreeLesson = course.lessons.find(l => l.isFreePreview);
  const videoCount = course.lessons.filter(l => l.type === "video").length;
  const liveCount = course.lessons.filter(l => l.type === "live" || l.type === "webinar").length;

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

      {/* Breadcrumb */}
      <div style={{
        fontFamily: "Arial, sans-serif", fontSize: 12, color: "#999",
        padding: "16px 0", borderBottom: "1px solid #ebebeb",
      }}>
        <Link href="/" style={{ color: "#6b1a1a", textDecoration: "none" }}>Home</Link>
        {" / "}
        <Link href="/courses" style={{ color: "#6b1a1a", textDecoration: "none" }}>Courses</Link>
        {" / "}<span>{course.title}</span>
      </div>

      {/* Title */}
      <div style={{ padding: "32px 0 0", marginBottom: 36 }}>
        <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 8 }}>{course.category}</div>
        <h1 style={{
          fontFamily: "'Times New Roman', serif",
          fontSize: "clamp(26px, 4vw, 42px)", fontWeight: "normal", color: "#1a1a1a",
          lineHeight: 1.15, marginBottom: 10,
        }}>{course.title}</h1>
        <p style={{
          fontFamily: "'Times New Roman', serif",
          fontSize: 18, color: "#6b1a1a", fontStyle: "italic", marginBottom: 16,
        }}>{course.tagline}</p>
        <p style={{
          fontFamily: "Arial, sans-serif",
          fontSize: 14, color: "#555", lineHeight: 1.8, maxWidth: 700,
        }}>{course.description}</p>
      </div>

      <div style={{
        display: "grid", gap: "0 56px", borderTop: "1px solid #d0cdc8", paddingTop: 36,
      }} className="grid-cols-1 md:grid-cols-[3fr,1fr]">

        {/* Main */}
        <div>
          {/* What you'll learn */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 20 }}>
              <span className="uppercase-label" style={{ color: "#1a1a1a" }}>What You Will Learn</span>
            </div>
            <div style={{ display: "grid", gap: "10px 32px" }} className="grid-cols-1 md:grid-cols-2">
              {course.content.map(item => (
                <div key={item} style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  fontFamily: "Arial, sans-serif", fontSize: 13, color: "#444",
                  padding: "6px 0", borderBottom: "1px solid #ebebeb",
                }}>
                  <span style={{ color: "#6b1a1a", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Lesson list */}
          <div style={{ marginBottom: 40 }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 0,
            }}>
              <span className="uppercase-label" style={{ color: "#1a1a1a" }}>
                Course Content — {course.lessons.length} Lessons
              </span>
            </div>

            {course.lessons.map((lesson, index) => (
              <Link key={lesson.slug} href={`/courses/${course.slug}/lesson/${lesson.slug}`}
                style={{ textDecoration: "none" }}>
                <div className="card-link" style={{
                  display: "flex", alignItems: "center", gap: 16, padding: "16px 0",
                }}>
                  <span style={{
                    fontFamily: "'Times New Roman', serif",
                    fontSize: 14, color: "#6b1a1a", minWidth: 28, flexShrink: 0,
                  }}>{String(index + 1).padStart(2, "0")}</span>

                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "Arial, sans-serif", fontSize: 14, color: "#1a1a1a",
                    }}>{lesson.title}</div>
                    <div style={{
                      fontFamily: "Arial, sans-serif", fontSize: 11,
                      color: lesson.type === "live" || lesson.type === "webinar" ? "#6b1a1a" : "#999",
                      marginTop: 3,
                    }}>
                      {lessonTypeIcon[lesson.type]} {lessonTypeLabel[lesson.type]}
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                    {lesson.isFreePreview && (
                      <span style={{
                        fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                        textTransform: "uppercase", color: "#4a6a2a",
                        border: "1px solid #4a6a2a", padding: "2px 8px",
                        fontFamily: "Arial, sans-serif",
                      }}>Free Preview</span>
                    )}
                    <span style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#999" }}>
                      {lesson.duration}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Instructor */}
          {instructor && (
            <div style={{
              background: "#f7f6f4", border: "1px solid #d0cdc8",
              padding: "28px 32px",
            }}>
              <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 16 }}>Your Instructor</div>
              <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{
                  width: 64, height: 64, border: "1px solid #6b1a1a", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontFamily: "'Times New Roman', serif", fontSize: 24, color: "#6b1a1a" }}>SA</span>
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Times New Roman', serif",
                    fontSize: 18, color: "#1a1a1a", marginBottom: 2,
                  }}>{instructor.name}</div>
                  <div style={{
                    fontFamily: "Arial, sans-serif", fontSize: 12, color: "#6b1a1a", marginBottom: 12,
                  }}>{instructor.title}</div>
                  <p style={{
                    fontFamily: "Arial, sans-serif", fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 12,
                  }}>{instructor.bio[0]}</p>
                  <Link href="/about" style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", color: "#6b1a1a", textDecoration: "none",
                  }}>Full Profile →</Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div>
          <div style={{
            border: "1px solid #d0cdc8",
            position: "sticky", top: 80,
          }}>
            <div style={{ background: "#6b1a1a", padding: "16px 20px" }}>
              <span className="uppercase-label" style={{ color: "#fff" }}>Course Details</span>
            </div>
            <div style={{ padding: "0 20px" }}>
              {[
                ["Level", course.level],
                ["Duration", course.duration],
                ["Total Lessons", course.lessons.length.toString()],
                ["Video Lessons", videoCount.toString()],
                ["Live Sessions", liveCount.toString()],
                ["Instructor", instructor?.name || "Dr. Al-Amin"],
              ].map(([label, val]) => (
                <div key={label} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "11px 0", borderBottom: "1px solid #ebebeb",
                  fontFamily: "Arial, sans-serif", fontSize: 13,
                }}>
                  <span style={{ color: "#999" }}>{label}</span>
                  <span style={{ color: "#1a1a1a", fontWeight: 500 }}>{val}</span>
                </div>
              ))}
            </div>

            <div style={{ padding: "20px 20px" }}>
              <Link
                href={firstFreeLesson
                  ? `/courses/${course.slug}/lesson/${firstFreeLesson.slug}`
                  : `/courses/${course.slug}/lesson/${course.lessons[0]?.slug}`}
                className="btn-primary"
                style={{ display: "block", textAlign: "center", marginBottom: 10 }}>
                {firstFreeLesson ? "Watch Free Preview" : "Start Course"}
              </Link>
              <Link href="/contact" className="btn-outline"
                style={{ display: "block", textAlign: "center" }}>
                Ask a Question
              </Link>
            </div>

            {/* Includes */}
            <div style={{ borderTop: "1px solid #d0cdc8", padding: "16px 20px" }}>
              <div className="uppercase-label" style={{ color: "#666", marginBottom: 12 }}>Includes</div>
              {[
                videoCount > 0 && `▶  ${videoCount} video lesson${videoCount !== 1 ? "s" : ""}`,
                liveCount > 0 && `⬤  ${liveCount} live session${liveCount !== 1 ? "s" : ""}`,
                course.lessons.some(l => l.type === "assignment") && "✍  Graded assignments",
                "📁  Downloadable materials",
                "✉   Instructor email support",
              ].filter(Boolean).map(item => (
                <div key={item as string} style={{
                  fontFamily: "Arial, sans-serif", fontSize: 12, color: "#555",
                  padding: "5px 0", borderBottom: "1px solid #f0ece0",
                }}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
