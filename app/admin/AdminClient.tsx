// app/admin/AdminClient.tsx
"use client";

import { courses } from "@/data/courses";
import { instructors } from "@/data/instructors";
import { useAuth } from "@/components/auth-provider";
import Link from "next/link";

export function AdminClient() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div style={{ maxWidth: 500, margin: "80px auto", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 26,
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: 12,
          }}
        >
          Admin Access Required
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 14,
            color: "#7878a0",
            lineHeight: 1.7,
            marginBottom: 24,
          }}
        >
          Please log in to access the admin panel.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 40 }}>
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
          Admin Panel
        </div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 32,
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: 8,
          }}
        >
          Content Management
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 14,
            color: "#7878a0",
          }}
        >
          Internal overview of all courses, lessons, and instructor profiles.
        </p>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "flex",
          gap: 20,
          marginBottom: 40,
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "Total Courses", value: courses.length },
          { label: "Total Lessons", value: courses.reduce((a, c) => a + c.lessons.length, 0) },
          {
            label: "Live Sessions",
            value: courses.reduce(
              (a, c) => a + c.lessons.filter((l) => l.type === "live" || l.type === "webinar").length,
              0
            ),
          },
          { label: "Instructors", value: instructors.length },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "#fff",
              border: "1px solid #e8e4d8",
              borderRadius: 10,
              padding: "20px 28px",
              minWidth: 140,
            }}
          >
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#c9a84c",
                marginBottom: 4,
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 12,
                color: "#9898b8",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Course table */}
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
        All Courses ({courses.length})
      </h2>

      <div
        style={{
          background: "#fff",
          border: "1px solid #e8e4d8",
          borderRadius: 12,
          overflow: "hidden",
          marginBottom: 40,
        }}
      >
        {courses.map((course, i) => (
          <div
            key={course.slug}
            style={{
              padding: "20px 24px",
              borderBottom: i < courses.length - 1 ? "1px solid #f0ece0" : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 12,
                marginBottom: 10,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#1a1a2e",
                    marginBottom: 4,
                  }}
                >
                  {course.title}
                </div>
                <div
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 12,
                    color: "#9898b8",
                  }}
                >
                  /{course.slug} · {course.level} · {course.duration}
                </div>
              </div>
              <Link
                href={`/courses/${course.slug}`}
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 12,
                  color: "#c9a84c",
                  textDecoration: "none",
                  border: "1px solid #c9a84c",
                  padding: "5px 14px",
                  borderRadius: 4,
                }}
              >
                View →
              </Link>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {course.lessons.map((lesson) => (
                <span
                  key={lesson.slug}
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 11,
                    background: "#f5f2ea",
                    color: "#4d4d6c",
                    padding: "3px 10px",
                    borderRadius: 4,
                  }}
                >
                  {lesson.type === "live" ? "🔴" : lesson.type === "webinar" ? "🎙" : "▶"} {lesson.title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Instructor info */}
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
        Instructor Profile
      </h2>
      <div
        style={{
          background: "#fff",
          border: "1px solid #e8e4d8",
          borderRadius: 12,
          padding: "24px 28px",
        }}
      >
        {instructors.map((inst) => (
          <div key={inst.slug}>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 18,
                fontWeight: 700,
                color: "#1a1a2e",
                marginBottom: 4,
              }}
            >
              {inst.name}
            </div>
            <div
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 13,
                color: "#c9a84c",
                marginBottom: 12,
              }}
            >
              {inst.title}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {inst.expertise.map((e) => (
                <span
                  key={e}
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 11,
                    background: "rgba(26,26,46,0.06)",
                    color: "#3d3d5c",
                    border: "1px solid rgba(26,26,46,0.1)",
                    padding: "3px 10px",
                    borderRadius: 100,
                  }}
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
