"use client";
import { courses } from "@/data/courses";
import Link from "next/link";
import { useAuth } from "@/components/auth-provider";

const DEMO = [{ slug:"academic-writing-mastery", completed:3 }, { slug:"ielts-toefl-preparation", completed:1 }];
const sessions = [
  { title:"Academic Writing Workshop: Crafting Powerful Introductions", type:"Live Zoom", date:"Thu, 19 Jun", time:"7:00 PM PKT", color:"#1B2A4A" },
  { title:"IELTS Task 2: The 5 Essay Types", type:"Webinar", date:"Sat, 21 Jun", time:"5:00 PM PKT", color:"#3D5A9A" },
];
const files = [
  { name:"Academic Writing — Week 1 Handout.pdf", course:"Academic Writing Mastery", size:"1.2 MB", icon:"📄" },
  { name:"Thesis Statement Checklist.pdf", course:"Academic Writing Mastery", size:"340 KB", icon:"📄" },
  { name:"IELTS Task 2 Model Answers Pack.pdf", course:"IELTS & TOEFL Preparation", size:"2.8 MB", icon:"📄" },
  { name:"Zoom Recording — Writing Workshop.mp4", course:"Academic Writing Mastery", size:"Available", icon:"🎬" },
];
const LI:Record<string,string> = { video:"▶", live:"⬤", webinar:"🎙", reading:"◼", assignment:"✍" };

export function DashboardClient() {
  const { user } = useAuth();

  if (!user) return (
    <div style={{ maxWidth:1200, margin:"0 auto", padding:"96px 24px", textAlign:"center" }}>
      <div style={{ width:64, height:64, background:"#1B2A4A", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 24px" }}>
        <span style={{ fontFamily:"'Playfair Display',serif", fontSize:24, color:"#C8A96E", fontWeight:600 }}>SAG</span>
      </div>
      <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:32, fontWeight:600, color:"#0F1C35", marginBottom:14 }}>Student Dashboard</h1>
      <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"#5C5C6E", marginBottom:32, maxWidth:440, margin:"0 auto 32px", lineHeight:1.75 }}>
        Your personal learning dashboard is waiting. Log in to access your enrolled courses, progress, and materials.
      </p>
      <Link href="/courses" className="btn btn-navy">Browse Courses &amp; Enrol</Link>
    </div>
  );

  const enrolled = courses.filter(c=>DEMO.some(d=>d.slug===c.slug));

  return (
    <div>
      {/* Header */}
      <div style={{ background:"#1B2A4A", borderBottom:"4px solid #C8A96E" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"36px 24px 32px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:20 }}>
          <div>
            <span className="label" style={{ color:"#C8A96E" }}>Student Dashboard</span>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(24px,3vw,36px)", fontWeight:600, color:"#fff" }}>Welcome, {user.name}</h1>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"rgba(255,255,255,0.55)", marginTop:4 }}>{enrolled.length} courses enrolled · 2 upcoming live sessions</p>
          </div>
          <Link href="/courses" className="btn btn-gold">+ Enrol in More Courses</Link>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"48px 24px" }}>
        <div className="grid gap-12 md:grid-cols-[3fr,2fr]">

          {/* Left */}
          <div>
            <div className="section-head"><span className="section-title">My Courses</span></div>
            {enrolled.map(c=>{
              const d = DEMO.find(x=>x.slug===c.slug)!;
              const pct = Math.round((d.completed/c.lessons.length)*100);
              const next = c.lessons[d.completed];
              return (
                <div key={c.slug} style={{ background:"#fff", border:"1px solid #D8D4CC", marginBottom:24, overflow:"hidden" }}>
                  {/* Course header */}
                  <div style={{ padding:"20px 24px", borderBottom:"1px solid #ECEAE4", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
                    <div>
                      <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1B2A4A" }}>{c.category}</span>
                      <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:19, fontWeight:600, color:"#0F1C35", lineHeight:1.2, marginTop:4 }}>{c.title}</h2>
                    </div>
                    <span style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:600, color:"#1B2A4A" }}>{pct}%</span>
                  </div>
                  {/* Progress */}
                  <div style={{ height:5, background:"#ECEAE4" }}>
                    <div className="progress-fill" style={{ width:`${pct}%` }} />
                  </div>
                  {/* Lesson list */}
                  <div style={{ padding:"16px 24px" }}>
                    {c.lessons.slice(0,5).map((l,i)=>(
                      <div key={l.slug} style={{ display:"flex", alignItems:"center", gap:12, padding:"9px 0", borderBottom:"1px solid #F2EFE8", fontFamily:"'Source Sans 3',sans-serif", fontSize:13 }}>
                        <div style={{ width:20, height:20, border:`1.5px solid ${i<d.completed?"#1B2A4A":"#D8D4CC"}`, background: i<d.completed?"#1B2A4A":"transparent", display:"flex", alignItems:"center", justifyContent:"center", fontSize:9, color:"#C8A96E", flexShrink:0 }}>
                          {i<d.completed?"✓":""}
                        </div>
                        <span style={{ flex:1, color: i<d.completed?"#A8A49C":"#2D3142", textDecoration: i<d.completed?"line-through":"none" }}>{l.title}</span>
                        <span style={{ color:"#C8A96E", fontSize:12 }}>{LI[l.type]}</span>
                        <span style={{ color:"#8C8C9E", fontSize:11 }}>{l.duration}</span>
                      </div>
                    ))}
                    {c.lessons.length>5 && <div style={{ padding:"8px 0", fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#8C8C9E" }}>+ {c.lessons.length-5} more lessons</div>}
                  </div>
                  {/* Next lesson CTA */}
                  {next && (
                    <div style={{ padding:"16px 24px", borderTop:"1px solid #ECEAE4", display:"flex", justifyContent:"space-between", alignItems:"center", background:"#F8F7F4", flexWrap:"wrap", gap:12 }}>
                      <div>
                        <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"#8C8C9E", marginBottom:2 }}>Up next:</div>
                        <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"#0F1C35", fontWeight:500 }}>{next.title}</div>
                      </div>
                      <Link href={`/courses/${c.slug}/lesson/${next.slug}`} className="btn btn-navy" style={{ fontSize:11 }}>Continue →</Link>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Files */}
            <div className="section-head" style={{ marginTop:12 }}><span className="section-title">Course Materials &amp; Files</span></div>
            <div style={{ background:"#fff", border:"1px solid #D8D4CC" }}>
              {files.map((f,i)=>(
                <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"16px 20px", borderBottom: i<files.length-1?"1px solid #ECEAE4":"none", flexWrap:"wrap", gap:12 }}>
                  <div style={{ display:"flex", gap:14, alignItems:"center" }}>
                    <span style={{ fontSize:20, flexShrink:0 }}>{f.icon}</span>
                    <div>
                      <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13.5, color:"#0F1C35", fontWeight:500 }}>{f.name}</div>
                      <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"#8C8C9E", marginTop:2 }}>{f.course} · {f.size}</div>
                    </div>
                  </div>
                  <button style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1B2A4A", background:"transparent", border:"1px solid #1B2A4A", padding:"6px 16px", cursor:"pointer" }}>Download</button>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="panel" style={{ marginBottom:20 }}>
              <div className="panel-head gold">Upcoming Sessions</div>
              <div style={{ padding:"0 20px" }}>
                {sessions.map((s,i)=>(
                  <div key={i} style={{ padding:"16px 0", borderBottom: i<sessions.length-1?"1px solid #ECEAE4":"none", borderLeft:`3px solid ${s.color}`, paddingLeft:14, marginLeft:-20 }}>
                    <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:s.color, marginBottom:5 }}>{s.type}</div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:14, color:"#0F1C35", lineHeight:1.3, marginBottom:5 }}>{s.title}</div>
                    <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#8C8C9E" }}>{s.date} · {s.time}</div>
                  </div>
                ))}
              </div>
              <div style={{ padding:"14px 20px", borderTop:"1px solid #ECEAE4" }}>
                <Link href="/webinars" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1B2A4A", textDecoration:"none" }}>View Full Schedule →</Link>
              </div>
            </div>

            <div className="panel">
              <div className="panel-head">Quick Access</div>
              <div className="panel-body">
                {[{l:"All Courses",h:"/courses"},{l:"Live Sessions & Webinars",h:"/webinars"},{l:"Message Dr. Gohar",h:"/contact"},{l:"Research & Publications",h:"/research"},{l:"About Dr. Gohar",h:"/about"}].map((x,i,a)=>(
                  <Link key={x.l} href={x.h} style={{ display:"block", padding:"11px 0", fontFamily:"'Source Sans 3',sans-serif", fontSize:13.5, color:"#2D3142", textDecoration:"none", borderBottom: i<a.length-1?"1px solid #ECEAE4":"none" }}>{x.l}</Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
