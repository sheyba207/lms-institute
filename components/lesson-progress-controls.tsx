"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";

type Props = { courseSlug:string; lessonSlug:string; isLastLesson:boolean; nextLessonSlug?:string; };

export function LessonProgressControls({ courseSlug, lessonSlug, isLastLesson, nextLessonSlug }:Props) {
  const { user } = useAuth();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [done, setDone] = useState(false);

  function handle() {
    if (!user) { router.push("/dashboard"); return; }
    setSaving(true);
    setTimeout(()=>{ setSaving(false); setDone(true); setTimeout(()=>{ if (isLastLesson||!nextLessonSlug) router.push("/dashboard"); else router.push(`/courses/${courseSlug}/lesson/${nextLessonSlug}`); },600); },500);
  }

  return (
    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px 0", borderTop:"1px solid #D8D4CC", marginTop:8, flexWrap:"wrap", gap:14 }}>
      <button onClick={()=>router.push(`/courses/${courseSlug}`)} style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#5C5C6E", background:"transparent", border:"1px solid #D8D4CC", padding:"10px 22px", cursor:"pointer" }}>
        ← Back to Course
      </button>
      <button onClick={handle} disabled={saving||done} style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color: done?"#0F1C35":"#fff", background: done?"#C8A96E":"#1B2A4A", padding:"10px 24px", border:"none", cursor: saving||done?"default":"pointer", opacity: saving?0.7:1, transition:"all 0.3s ease" }}>
        {done?"✓ Marked Complete!":saving?"Saving…":isLastLesson?"Mark Complete & Finish":"Mark Complete & Next →"}
      </button>
    </div>
  );
}
