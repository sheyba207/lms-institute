// app/dashboard/DashboardClient.tsx
"use client";

import { courses } from "@/data/courses";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

const DEMO_ENROLLED = [
  { slug: "academic-writing-mastery", completedLessons: 3 },
  { slug: "ielts-toefl-preparation", completedLessons: 1 },
];

const lessonTypeIcon: Record<string, string> = {
  video: "▶",
  live: "🔴",
  webinar: "🎙",
  reading: "📄",
  assignment: "✍",
};

const upcomingEvents = [
  {
    title: "Academic Writing Workshop: Crafting Powerful Introductions",
    type: "Live Zoom",
    date: "Thu, 19 June",
    time: "7:00 PM PKT",
    color: "#8a2d2d",
    bg: "#fff0f0",
  },
  {
    title: "IELTS Task 2 Writing: The 5 Essay Types Explained",
    type: "Webinar",
    date: "Sat, 21 June",
    time: "5:00 PM PKT",
    color: "#5a2d8a",
    bg: "#f4f0ff",
  },
];

export function DashboardClient() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div
        style={{
          maxWidth: 560,
          margin: "80px auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Georgia, serif",
            fontSize: 28,
            fontWeight: 700,
            color: "#1a1a2e",
            margin: "0 auto 24px",
          }}
        >
          🎓
        </div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 28,
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: 12,
          }}
        >
          Please Log In
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 15,
            color: "#7878a0",
            lineHeight: 1.7,
            marginBottom: 28,
          }}
        >
          Your personal learning dashboard — with course progress, live session
          links, and uploaded resources — is waiting for you.
        </p>
        <Link
          href="/courses"
          style={{
            fontFamily: "system-ui, sans-serif",
            fontWeight: 700,
            fontSize: 14,
            background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
            color: "#1a1a2e",
            padding: "12px 28px",
            borderRadius: 6,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Browse Courses & Enrol
        </Link>
      </div>
    );
  }

  const enrolledCourses = courses.filter((c) =>
    DEMO_ENROLLED.some((e) => e.slug === c.slug)
  );

  return (
    <div>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
          borderRadius: 14,
          padding: "28px 36px",
          marginBottom: 40,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 12,
              color: "#c9a84c",
              marginBottom: 6,
              letterSpacing: "0.08em",
            }}
          >
            Welcome back
          </div>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 26,
              fontWeight: 700,
              color: "#faf8f2",
              marginBottom: 4,
            }}
          >
            {user.name}
          </h1>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 13,
              color: "#9898b8",
            }}
          >
            {enrolledCourses.length} courses enrolled · 2 upcoming live sessions
          </p>
        </div>
        <Link
          href="/courses"
          style={{
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
            color: "#1a1a2e",
            padding: "10px 20px",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          + Enrol in More Courses
        </Link>
      </div>

      <div className="grid gap-10 md:grid-cols-[3fr,2fr]">
        {/* Left column */}
        <div>
          {/* Enrolled courses */}
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 20,
              fontWeight: 700,
              color: "#1a1a2e",
              marginBottom: 18,
              paddingBottom: 10,
              borderBottom: "2px solid #c9a84c",
              display: "inline-block",
            }}
          >
            My Courses
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 44 }}>
            {enrolledCourses.map((course) => {
              const demo = DEMO_ENROLLED.find((e) => e.slug === course.slug)!;
              const total = course.lessons.length;
              const completed = demo.completedLessons;
              const pct = Math.round((completed / total) * 100);
              const nextLesson = course.lessons[completed];

              return (
                <div
                  key={course.slug}
                  style={{
                    background: "#fff",
                    border: "1px solid #e8e4d8",
                    borderRadius: 12,
                    padding: "22px 24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 12,
                      flexWrap: "wrap",
                      gap: 10,
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontFamily: "Georgia, serif",
                          fontSize: 17,
                          fontWeight: 700,
                          color: "#1a1a2e",
                          marginBottom: 4,
                        }}
                      >
                        {course.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "system-ui, sans-serif",
                          fontSize: 12,
                          color: "#9898b8",
                        }}
                      >
                        {completed} of {total} lessons complete
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 11,
                        background: "#f5f2ea",
                        color: "#6060808",
                        padding: "4px 12px",
                        borderRadius: 100,
                      }}
                    >
                      {course.level}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div style={{ marginBottom: 16 }}>
                    <div
                      style={{
                        height: 6,
                        background: "#f0ece0",
                        borderRadius: 3,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="progress-fill"
                        style={{
                          height: "100%",
                          width: `${pct}%`,
                          background: "linear-gradient(90deg, #c9a84c, #e8cc7a)",
                          borderRadius: 3,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 11,
                        color: "#9898b8",
                        marginTop: 5,
                      }}
                    >
                      <span>{pct}% complete</span>
                      <span>{total - completed} lessons remaining</span>
                    </div>
                  </div>

                  {/* Lesson list (compact) */}
                  <div
                    style={{
                      border: "1px solid #f0ece0",
                      borderRadius: 8,
                      overflow: "hidden",
                      marginBottom: 14,
                    }}
                  >
                    {course.lessons.slice(0, 4).map((lesson, i) => (
                      <div
                        key={lesson.slug}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          padding: "10px 14px",
                          borderBottom: i < Math.min(3, course.lessons.length - 1) ? "1px solid #f8f4ec" : "none",
                          background: i < completed ? "#fafefa" : "#fff",
                        }}
                      >
                        <span
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            border: "1.5px solid",
                            borderColor: i < completed ? "#4a7c59" : "#d8d4c8",
                            background: i < completed ? "#4a7c59" : "transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 10,
                            color: "#fff",
                            flexShrink: 0,
                          }}
                        >
                          {i < completed ? "✓" : ""}
                        </span>
                        <span
                          style={{
                            fontFamily: "system-ui, sans-serif",
                            fontSize: 12,
                            color: i < completed ? "#7878a0" : "#1a1a2e",
                            flex: 1,
                            textDecoration: i < completed ? "line-through" : "none",
                          }}
                        >
                          {lesson.title}
                        </span>
                        <span
                          style={{
                            fontFamily: "system-ui, sans-serif",
                            fontSize: 11,
                            color: "#c9a84c",
                          }}
                        >
                          {lessonTypeIcon[lesson.type]}
                        </span>
                      </div>
                    ))}
                    {course.lessons.length > 4 && (
                      <div
                        style={{
                          padding: "8px 14px",
                          fontFamily: "system-ui, sans-serif",
                          fontSize: 11,
                          color: "#9898b8",
                          textAlign: "center",
                          background: "#faf8f2",
                        }}
                      >
                        + {course.lessons.length - 4} more lessons
                      </div>
                    )}
                  </div>

                  {/* Continue CTA */}
                  {nextLesson ? (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: 10,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: "system-ui, sans-serif",
                            fontSize: 11,
                            color: "#9898b8",
                            marginBottom: 2,
                          }}
                        >
                          Up next:
                        </div>
                        <div
                          style={{
                            fontFamily: "system-ui, sans-serif",
                            fontSize: 13,
                            color: "#3d3d5c",
                            fontWeight: 500,
                          }}
                        >
                          {nextLesson.title}
                        </div>
                      </div>
                      <Link
                        href={`/courses/${course.slug}/lesson/${nextLesson.slug}`}
                        style={{
                          fontFamily: "system-ui, sans-serif",
                          fontWeight: 700,
                          fontSize: 13,
                          background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
                          color: "#e8cc7a",
                          padding: "9px 18px",
                          borderRadius: 6,
                          textDecoration: "none",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Continue →
                      </Link>
                    </div>
                  ) : (
                    <div
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 13,
                        color: "#4a7c59",
                        fontWeight: 600,
                      }}
                    >
                      ✓ Course Complete!
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Resources / Files section */}
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 20,
              fontWeight: 700,
              color: "#1a1a2e",
              marginBottom: 18,
              paddingBottom: 10,
              borderBottom: "2px solid #c9a84c",
              display: "inline-block",
            }}
          >
            Course Materials & Files
          </h2>
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e4d8",
              borderRadius: 12,
              padding: "20px 24px",
            }}
          >
            {[
              { name: "Academic Writing — Week 1 Handout.pdf", size: "1.2 MB", course: "Academic Writing Mastery" },
              { name: "Thesis Statement Checklist.pdf", size: "340 KB", course: "Academic Writing Mastery" },
              { name: "IELTS Task 2 — Model Answers Pack.pdf", size: "2.8 MB", course: "IELTS & TOEFL Prep" },
              { name: "Zoom Recording — Writing Workshop June 7.mp4", size: "Available in course", course: "Academic Writing Mastery" },
            ].map((file, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 0",
                  borderBottom: i < 3 ? "1px solid #f5f2ea" : "none",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 18 }}>
                    {file.name.endsWith(".mp4") ? "🎬" : "📄"}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 13,
                        color: "#1a1a2e",
                        marginBottom: 2,
                      }}
                    >
                      {file.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: 11,
                        color: "#9898b8",
                      }}
                    >
                      {file.course} · {file.size}
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 12,
                    color: "#c9a84c",
                    background: "transparent",
                    border: "1px solid #c9a84c",
                    padding: "5px 14px",
                    borderRadius: 4,
                    cursor: "pointer",
                  }}
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div>
          {/* Upcoming sessions */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #e8e4d8",
              borderRadius: 12,
              padding: "22px 24px",
              marginBottom: 20,
            }}
          >
            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 17,
                fontWeight: 700,
                color: "#1a1a2e",
                marginBottom: 18,
              }}
            >
              Upcoming Live Sessions
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {upcomingEvents.map((ev, i) => (
                <div
                  key={i}
                  style={{
                    borderLeft: `3px solid ${ev.color}`,
                    paddingLeft: 14,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 10,
                      fontWeight: 700,
                      color: ev.color,
                      letterSpacing: "0.08em",
                      marginBottom: 4,
                    }}
                  >
                    {ev.type.toUpperCase()}
                  </div>
                  <div
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: 14,
                      color: "#1a1a2e",
                      lineHeight: 1.3,
                      marginBottom: 5,
                    }}
                  >
                    {ev.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 11,
                      color: "#9898b8",
                    }}
                  >
                    {ev.date} · {ev.time}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/webinars"
              style={{
                display: "block",
                textAlign: "center",
                marginTop: 18,
                fontFamily: "system-ui, sans-serif",
                fontSize: 12,
                color: "#c9a84c",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              View Full Schedule →
            </Link>
          </div>

          {/* Quick links */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
              borderRadius: 12,
              padding: "22px 24px",
            }}
          >
            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 16,
                fontWeight: 700,
                color: "#faf8f2",
                marginBottom: 16,
              }}
            >
              Quick Access
            </h3>
            {[
              { label: "📚 All Courses", href: "/courses" },
              { label: "🔴 Webinar Schedule", href: "/webinars" },
              { label: "📬 Message Dr. Al-Amin", href: "/contact" },
              { label: "🎓 About the Professor", href: "/about" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  display: "block",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                  color: "#c8c8e0",
                  textDecoration: "none",
                  padding: "9px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
                className="hover:text-amber-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
