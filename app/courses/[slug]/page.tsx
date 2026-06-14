import { getCourseBySlug } from "@/data/courses";
import { instructors } from "@/data/instructors";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

type Props = { params: Promise<{ slug: string }> };
const LT:Record<string,string> = { video:"Video", live:"Live Zoom", webinar:"Webinar", reading:"Reading", assignment:"Assignment" };
const LI:Record<string,string> = { video:"▶", live:"⬤", webinar:"🎙", reading:"◼", assignment:"✍" };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCourseBySlug(slug);
  return { title: c ? `${c.title} | Dr. Sheema Ali Gohar` : "Course Not Found", description: c?.description||"" };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const c = getCourseBySlug(slug);
  if (!c) return (
    <div style={{ maxWidth:1200, margin:"0 auto", padding:"80px 24px", textAlign:"center" }}>
      <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:32, fontWeight:600 }}>Course Not Found</h1>
      <Link href="/courses" className="btn btn-navy" style={{ marginTop:24, display:"inline-block" }}>Browse All Courses</Link>
    </div>
  );

  const instructor = instructors.find(i=>i.slug===c.instructor);
  const freeLesson = c.lessons.find(l=>l.isFreePreview);
  const vidCount = c.lessons.filter(l=>l.type==="video").length;
  const liveCount = c.lessons.filter(l=>l.type==="live"||l.type==="webinar").length;

  return (
    <div>
      {/* Hero */}
      <div style={{ background:"#1B2A4A", borderBottom:"1px solid #D8D4CC" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"40px 24px 36px" }}>
          <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"rgba(255,255,255,0.5)", marginBottom:16 }}>
            <Link href="/courses" style={{ color:"#C8A96E", textDecoration:"none" }}>Courses</Link>
            <span style={{ margin:"0 8px" }}>›</span>
            <span style={{ color:"rgba(255,255,255,0.5)" }}>{c.category}</span>
            <span style={{ margin:"0 8px" }}>›</span>
            <span style={{ color:"rgba(255,255,255,0.7)" }}>{c.title}</span>
          </div>
          <span className="label" style={{ color:"#C8A96E" }}>{c.category}</span>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(26px,4vw,44px)", fontWeight:600, color:"#fff", lineHeight:1.15, marginBottom:10 }}>{c.title}</h1>
          <p style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontStyle:"italic", color:"#C8A96E", marginBottom:16 }}>{c.tagline}</p>
          <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"rgba(255,255,255,0.65)", lineHeight:1.75, maxWidth:680 }}>{c.description}</p>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"48px 24px" }}>
        <div className="grid gap-12 md:grid-cols-[2fr,1fr]">

          {/* Main */}
          <div>
            {/* What you'll learn */}
            <div style={{ background:"#fff", border:"1px solid #D8D4CC", padding:"32px 36px", marginBottom:36 }}>
              <div className="section-head"><span className="section-title">What You Will Learn</span></div>
              <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2">
                {c.content.map(item=>(
                  <div key={item} style={{ display:"flex", gap:12, alignItems:"flex-start", fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"#2D3142", lineHeight:1.5 }}>
                    <div style={{ width:18, height:18, background:"#1B2A4A", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                      <span style={{ color:"#C8A96E", fontSize:10, fontWeight:700 }}>✓</span>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Lessons */}
            <div style={{ marginBottom:36 }}>
              <div className="section-head">
                <span className="section-title">Course Content — {c.lessons.length} Lessons</span>
              </div>
              <div style={{ background:"#fff", border:"1px solid #D8D4CC", overflow:"hidden" }}>
                {c.lessons.map((l,idx)=>(
                  <Link key={l.slug} href={`/courses/${c.slug}/lesson/${l.slug}`} style={{ textDecoration:"none" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:16, padding:"15px 20px", borderBottom: idx<c.lessons.length-1?"1px solid #ECEAE4":"none", transition:"background 0.12s ease", cursor:"pointer" }}
                      onMouseEnter={e=>(e.currentTarget.style.background="#F2EFE8")}
                      onMouseLeave={e=>(e.currentTarget.style.background="")}>
                      <span style={{ fontFamily:"'Playfair Display',serif", fontSize:14, color:"#C8A96E", fontWeight:600, minWidth:28, flexShrink:0 }}>{String(idx+1).padStart(2,"0")}</span>
                      <div style={{ width:32, height:32, background: l.type==="live"||l.type==="webinar"?"#EEF1F8":"#F2EFE8", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:13 }}>
                        {LI[l.type]||"•"}
                      </div>
                      <div style={{ flex:1 }}>
                        <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, fontWeight:500, color:"#0F1C35", lineHeight:1.3 }}>{l.title}</div>
                        <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color: l.type==="live"||l.type==="webinar"?"#1B2A4A":"#8C8C9E", marginTop:2, fontWeight: l.type==="live"||l.type==="webinar"?600:400 }}>{LT[l.type]||l.type}</div>
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
                        {l.isFreePreview && <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"#2A5C28", border:"1px solid #BCD8BA", padding:"2px 8px" }}>Free Preview</span>}
                        <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#8C8C9E" }}>{l.duration}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Instructor */}
            {instructor && (
              <div style={{ background:"#F2EFE8", border:"1px solid #D8D4CC", padding:"28px 32px" }}>
                <div className="section-head"><span className="section-title">Your Instructor</span></div>
                <div style={{ display:"flex", gap:20, alignItems:"flex-start", flexWrap:"wrap" }}>
                  <div style={{ width:64, height:64, background:"#1B2A4A", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <span style={{ fontFamily:"'Playfair Display',serif", fontSize:22, color:"#C8A96E", fontWeight:600 }}>SAG</span>
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:18, fontWeight:600, color:"#0F1C35", marginBottom:3 }}>{instructor.name}</div>
                    <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#5C5C6E", marginBottom:12 }}>{instructor.title}</div>
                    <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"#2D3142", lineHeight:1.75, marginBottom:14 }}>{instructor.bio[0]}</p>
                    <Link href="/about" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1B2A4A", textDecoration:"none" }}>Full Profile →</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="panel" style={{ position:"sticky", top:84 }}>
              <div className="panel-head gold">Course Details</div>
              <div className="panel-body">
                {[["Level",c.level],["Duration",c.duration],["Total Lessons",c.lessons.length.toString()],["Video Lessons",vidCount.toString()],["Live Sessions",liveCount.toString()],["Instructor",instructor?.name||"Dr. Gohar"]].map(([k,v])=>(
                  <div key={k} className="panel-row"><span className="label-col">{k}</span><span className="val-col">{v}</span></div>
                ))}
              </div>
              <div style={{ padding:"20px 20px" }}>
                <Link href={freeLesson?`/courses/${c.slug}/lesson/${freeLesson.slug}`:`/courses/${c.slug}/lesson/${c.lessons[0]?.slug}`}
                  className="btn btn-navy" style={{ display:"block", textAlign:"center", marginBottom:10 }}>
                  {freeLesson?"Watch Free Preview":"Start Course"}
                </Link>
                <Link href="/contact" className="btn btn-outline-navy" style={{ display:"block", textAlign:"center" }}>Ask a Question</Link>
              </div>
              <div style={{ borderTop:"1px solid #ECEAE4", padding:"16px 20px" }}>
                <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color:"#8C8C9E", marginBottom:12 }}>This course includes</div>
                {[vidCount>0&&`▶  ${vidCount} video lesson${vidCount!==1?"s":""}`,liveCount>0&&`⬤  ${liveCount} live session${liveCount!==1?"s":""}`,c.lessons.some(l=>l.type==="assignment")&&"✍  Graded assignments","📁  Downloadable materials","✉  Instructor email support"].filter(Boolean).map(x=>(
                  <div key={x as string} style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#5C5C6E", padding:"5px 0", borderBottom:"1px solid #F2EFE8" }}>{x}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
