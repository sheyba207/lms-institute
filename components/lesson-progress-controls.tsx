// components/lesson-progress-controls.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";

type LessonProgressControlsProps = {
  courseSlug: string;
  lessonSlug: string;
  isLastLesson: boolean;
  nextLessonSlug?: string;
};

export function LessonProgressControls({
  courseSlug,
  lessonSlug,
  isLastLesson,
  nextLessonSlug,
}: LessonProgressControlsProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  function handleMarkComplete() {
    if (!user) {
      router.push("/dashboard");
      return;
    }
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setDone(true);
      setTimeout(() => {
        if (isLastLesson || !nextLessonSlug) {
          router.push("/dashboard");
        } else {
          router.push(`/courses/${courseSlug}/lesson/${nextLessonSlug}`);
        }
      }, 600);
    }, 500);
  }

  return (
    <div
      style={{
        marginTop: 32,
        padding: "20px 24px",
        background: "#fff",
        border: "1px solid #e8e4d8",
        borderRadius: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 14,
      }}
    >
      <button
        onClick={() => router.push(`/courses/${courseSlug}`)}
        style={{
          fontFamily: "system-ui, sans-serif",
          fontSize: 13,
          color: "#9898b8",
          background: "transparent",
          border: "1px solid #d8d4c8",
          padding: "9px 18px",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        ← Back to Course
      </button>

      <button
        onClick={handleMarkComplete}
        disabled={saving || done}
        style={{
          fontFamily: "system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 14,
          background: done
            ? "linear-gradient(135deg, #4a7c59, #5a9c69)"
            : "linear-gradient(135deg, #c9a84c, #e8cc7a)",
          color: done ? "#fff" : "#1a1a2e",
          padding: "10px 24px",
          borderRadius: 6,
          border: "none",
          cursor: saving || done ? "default" : "pointer",
          opacity: saving ? 0.7 : 1,
          transition: "all 0.3s ease",
        }}
      >
        {done
          ? "✓ Marked Complete!"
          : saving
          ? "Saving..."
          : isLastLesson
          ? "Mark Complete & Finish Course"
          : "Mark Complete & Next Lesson →"}
      </button>
    </div>
  );
}
