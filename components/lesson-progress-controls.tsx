// components/lesson-progress-controls.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { useAuth } from "@/components/auth-provider";

type LessonProgressControlsProps = {
  courseSlug: string;
  lessonSlug: string;
  isLastLesson: boolean;
  nextLessonSlug?: string;
};

const DEMO_STUDENT_KEY = "demo-student";

export function LessonProgressControls({
  courseSlug,
  lessonSlug,
  isLastLesson,
  nextLessonSlug,
}: LessonProgressControlsProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  async function handleMarkComplete() {
    // If not logged in, just send to dashboard/login flow
    if (!user) {
      router.push("/dashboard");
      return;
    }

    setSaving(true);
    try {
      const { error } = await supabase.from("student_enrollments").upsert(
        {
          student_key: DEMO_STUDENT_KEY,
          course_slug: courseSlug,
          last_lesson_slug: lessonSlug,
        },
        {
          onConflict: "student_key,course_slug",
        } as any
      );

      if (error) {
        console.error("Error updating progress:", error);
      }

      if (isLastLesson || !nextLessonSlug) {
        router.push("/dashboard");
      } else {
        router.push(`/courses/${courseSlug}/lesson/${nextLessonSlug}`);
      }
    } catch (e) {
      console.error("Unexpected progress update error:", e);
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs">
      <button
        onClick={handleMarkComplete}
        disabled={saving}
        className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 disabled:opacity-60"
      >
        {saving
          ? "Saving..."
          : isLastLesson
          ? "Mark complete & finish"
          : "Mark complete & next lesson"}
      </button>

      <button
        onClick={() => router.push(`/courses/${courseSlug}`)}
        className="text-slate-400 hover:text-emerald-300"
      >
        Back to course overview
      </button>
    </div>
  );
}
