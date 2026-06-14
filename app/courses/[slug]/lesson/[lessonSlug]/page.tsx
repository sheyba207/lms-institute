import { Metadata } from "next";
import { getLesson } from "@/data/courses";
import { LessonProgressControls } from "@/components/lesson-progress-controls";
import Link from "next/link";

type Props = { params: Promise<{ slug:string; lessonSlug:string }> };
const LI:Record<string,string> = { video:"▶", live:"⬤", webinar:"🎙", reading:"◼", assignment:"✍" };
const LT:Record<string,string> = { video:"Video Lesson", live:"Live Zoom Session", webinar:"Expert Webinar", reading:"Reading", assignment:"Graded Assignment" };

export async function generateMetadata({ params }:Props): Promise<Metadata> {
  const { slug, lessonSlug } = await params;
  const r = getLesson(slug,lessonSlug);
  return r ? { title:`${r.lesson.title} | ${r.course.title} — Dr. Sheema Ali Gohar`, description:r.course.description } : { title:"Lesson Not Found" };
}

export default async function LessonPage({ params }:Props) {
  const { slug, lessonSlug } = await params;
  const result = getLesson(slug,lessonSlug);

  if (!result) return (
    <div style={{ maxWidth:1200, margin:"0 auto", padding:"80px 24px", textAlign:"center" }}>
      <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:600 }}>Lesson Not Found</h2>
      <Link href={`/courses/${slug}`} className="btn btn-navy" style={{ marginTop:24, display:"inline-block" }}>Back to Course</Link>
    </div>
  );

  const { course, lesson, lessonIndex } = result;
  const isLastLesson = lessonIndex+1>=course.lessons.length;
  const nextLessonSlug = !isLastLesson ? course.lessons[lessonIndex+1].slug : undefined;
  const isLive = lesson.type==="live"||lesson.type==="webinar";

  return (
    <div>
      {/* Lesson header bar */}
      <div style={{ background:"#1B2A4A", borderBottom:"1px solid rgba(200,169,110,0.2)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"20px 24px", fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"rgba(255,255,255,0.5)" }}>
          <Link href="/courses" style={{ color:"#C8A96E", textDecoration:"none" }}>Courses</Link>
          <span style={{ margin:"0 8px" }}>›</span>
          <Link href={`/courses/${course.slug}`} style={{ color:"#C8A96E", textDecoration:"none" }}>{course.title}</Link>
          <span style={{ margin:"0 8px" }}>›</span>
          <span style={{ color:"rgba(255,255,255,0.6)" }}>Lesson {String(lessonIndex+1).padStart(2,"0")}</span>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"40px 24px" }}>
        <div className="grid gap-10 md:grid-cols-[3fr,1fr]">
          {/* Main */}
          <div>
            {/* Type badges + title */}
            <div style={{ marginBottom:22 }}>
              <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:12, flexWrap:"wrap" }}>
                <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color: isLive?"#fff":"#1B2A4A", background: isLive?"#1B2A4A":"transparent", border:`1px solid ${isLive?"#1B2A4A":"#D8D4CC"}`, padding:"4px 12px" }}>{LI[lesson.type]} {LT[lesson.type]||lesson.type}</span>
                {lesson.isFreePreview && <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"#2A5C28", border:"1px solid #BCD8BA", padding:"4px 12px" }}>✓ Free Preview</span>}
                <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#8C8C9E" }}>{lesson.duration}</span>
              </div>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,3.5vw,34px)", fontWeight:600, color:"#0F1C35", lineHeight:1.2, marginBottom:6 }}>{lesson.title}</h1>
              <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#8C8C9E" }}>{course.title}</p>
            </div>

            {/* Video container */}
            <div style={{ aspectRatio:"16/9", background:"#0F1C35", marginBottom:28, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 30% 50%, rgba(27,42,74,0.8) 0%, #0F1C35 70%)" }} />
              <div style={{ position:"relative", textAlign:"center" }}>
                <div style={{ width:72, height:72, border:"2px solid rgba(200,169,110,0.5)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 18px", fontSize:26, color:"#C8A96E" }}>{isLive?"⬤":"▶"}</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, color:"rgba(255,255,255,0.7)", maxWidth:360, lineHeight:1.5, fontStyle:"italic" }}>
                  {isLive?"Live session link will appear here when the class begins.":"Video content will be available once uploaded by Dr. Gohar."}
                </div>
              </div>
              {/* Bottom bar */}
              <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"12px 20px", background:"rgba(0,0,0,0.5)", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"rgba(255,255,255,0.6)" }}>{lesson.title}</span>
                <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"rgba(255,255,255,0.4)" }}>{lesson.duration}</span>
              </div>
            </div>

            {/* Notes */}
            <div style={{ background:"#fff", border:"1px solid #D8D4CC", padding:"28px 32px", marginBottom:24 }}>
              <div className="section-head"><span className="section-title">Lesson Notes &amp; Resources</span></div>
              <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14.5, color:"#2D3142", lineHeight:1.8, marginBottom:16 }}>
                Lecture notes, handouts, and supplementary reading materials for this lesson will appear here once Dr. Gohar uploads them. Enrolled students will receive Zoom links by email before any live session begins.
              </p>
              <div style={{ background:"#F2EFE8", border:"1px solid #D8D4CC", padding:"14px 18px", display:"flex", alignItems:"center", gap:12, fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#5C5C6E" }}>
                <span style={{ flexShrink:0 }}>📁</span>
                <span>Downloadable files and slides will be available here. <Link href="/contact" style={{ color:"#1B2A4A", fontWeight:600 }}>Contact Dr. Gohar</Link> if you need access to materials.</span>
              </div>
            </div>

            <LessonProgressControls courseSlug={course.slug} lessonSlug={lesson.slug} isLastLesson={isLastLesson} nextLessonSlug={nextLessonSlug} />
          </div>

          {/* Sidebar */}
          <div>
            <div className="panel" style={{ position:"sticky", top:80 }}>
              <div style={{ background:"#1B2A4A", padding:"14px 18px" }}>
                <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:9, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,0.5)", marginBottom:4 }}>Course Content</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:14, color:"#fff", fontWeight:600 }}>{course.title}</div>
              </div>
              {course.lessons.map((l,i)=>{
                const cur = l.slug===lesson.slug;
                const live = l.type==="live"||l.type==="webinar";
                return (
                  <Link key={l.slug} href={`/courses/${course.slug}/lesson/${l.slug}`} style={{ textDecoration:"none" }}>
                    <div style={{ display:"flex", gap:10, padding:"11px 16px", borderBottom:"1px solid #ECEAE4", background: cur?"#EEF1F8":"#fff", borderLeft: cur?"3px solid #1B2A4A":"3px solid transparent", transition:"background 0.12s" }}>
                      <span style={{ fontFamily:"'Playfair Display',serif", fontSize:12, color:"#C8A96E", fontWeight:600, minWidth:20, flexShrink:0, marginTop:1 }}>{String(i+1).padStart(2,"0")}</span>
                      <div style={{ flex:1 }}>
                        <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color: cur?"#1B2A4A":"#2D3142", fontWeight: cur?700:400, lineHeight:1.35 }}>{l.title}</div>
                        <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, color: live?"#1B2A4A":"#8C8C9E", marginTop:2, fontWeight: live?600:400 }}>{LI[l.type]} {l.duration}</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
              <div style={{ padding:"14px 16px", borderTop:"1px solid #ECEAE4" }}>
                <Link href={`/courses/${course.slug}`} style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1B2A4A", textDecoration:"none" }}>← Course Overview</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
