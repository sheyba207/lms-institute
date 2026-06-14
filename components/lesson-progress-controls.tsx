// components/lesson-progress-controls.tsx
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";

type Props = { courseSlug: string; lessonSlug: string; isLastLesson: boolean; nextLessonSlug?: string; };

export function LessonProgressControls({ courseSlug, lessonSlug, isLastLesson, nextLessonSlug }: Props) {
  const { user } = useAuth();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  function handle() {
    if (!user) { router.push("/dashboard"); return; }
    setSaving(true);
    setTimeout(() => {
      setSaving(false); setDone(true);
      setTimeout(() => {
        if (isLastLesson || !nextLessonSlug) router.push("/dashboard");
        else router.push(`/courses/${courseSlug}/lesson/${nextLessonSlug}`);
      }, 600);
    }, 500);
  }

  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "20px 0", borderTop: "1px solid #d0cdc8", marginTop: 8, flexWrap: "wrap", gap: 14,
    }}>
      <button
        onClick={() => router.push(`/courses/${courseSlug}`)}
        style={{
          fontFamily: "Arial, sans-serif", fontSize: 11, fontWeight: 700,
          letterSpacing: "0.1em", textTransform: "uppercase", color: "#666",
          background: "transparent", border: "1px solid #ccc",
          padding: "9px 20px", cursor: "pointer",
        }}>
        ← Back to Course
      </button>
      <button
        onClick={handle}
        disabled={saving || done}
        style={{
          fontFamily: "Arial, sans-serif", fontSize: 11, fontWeight: 700,
          letterSpacing: "0.1em", textTransform: "uppercase",
          color: "#fff",
          background: done ? "#2d6a1a" : "#6b1a1a",
          padding: "9px 22px", border: "none", cursor: saving || done ? "default" : "pointer",
          opacity: saving ? 0.7 : 1,
        }}>
        {done ? "✓ Complete!" : saving ? "Saving..." : isLastLesson ? "Mark Complete & Finish" : "Mark Complete & Next →"}
      </button>
    </div>
  );
}
