import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Courses | Dr. Sheema Ali Gohar",
  description: "Expert courses in academic writing, English communication, IELTS/TOEFL preparation, and linguistics.",
};

const courseImgs = [
  "https://images.pexels.com/photos/4144228/pexels-photo-4144228.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
  "https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop",
];

export default function CoursesPage() {
  return (
    <div>
      {/* Hero */}
      <div style={{ position:"relative", height:260, background:"#0F1C35" }}>
        <Image src="https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=1400&h=400&fit=crop" alt="Students in a classroom" fill priority style={{ objectFit:"cover", opacity:0.35 }} sizes="100vw" />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(11,24,53,0.92) 0%, rgba(11,24,53,0.4) 100%)" }} />
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"flex-end" }}>
          <div style={{ maxWidth:1200, width:"100%", margin:"0 auto", padding:"0 24px 32px" }}>
            <span className="label" style={{ color:"#C8A96E" }}>Learning with Dr. Gohar</span>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:"#fff" }}>All Courses</h1>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"rgba(255,255,255,0.65)", marginTop:8, maxWidth:520 }}>
              Structured programmes in English language and linguistics — video lectures, live Zoom sessions, webinars, and personalised feedback.
            </p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"56px 24px" }}>

        {/* Course cards — elegant large format */}
        <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
          {courses.map((c,i)=>{
            const vidCount = c.lessons.filter(l=>l.type==="video").length;
            const liveCount = c.lessons.filter(l=>l.type==="live"||l.type==="webinar").length;
            return (
              <div key={c.slug} style={{ borderBottom:"1px solid #D8D4CC", paddingBottom:44, marginBottom:44 }}>
                <div className="grid gap-10 md:grid-cols-[1fr,2fr]">
                  {/* Photo */}
                  <div style={{ position:"relative", height:220, overflow:"hidden", background:"#ECEAE4" }}>
                    <Image src={courseImgs[i%4]} alt={c.title} fill style={{ objectFit:"cover" }} sizes="(max-width:768px)100vw,33vw" />
                    {c.badge && (
                      <div style={{ position:"absolute", top:14, left:14 }}>
                        <span className="tag" style={{ background:"#C8A96E", color:"#0F1C35", fontSize:10 }}>{c.badge}</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
                      <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1B2A4A", borderLeft:"3px solid #1B2A4A", paddingLeft:9 }}>{c.category}</span>
                      <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#8C8C9E" }}>{c.level}</span>
                    </div>

                    <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(20px,2.5vw,28px)", fontWeight:600, color:"#0F1C35", lineHeight:1.2, marginBottom:8 }}>
                      <Link href={`/courses/${c.slug}`} style={{ color:"inherit", textDecoration:"none" }}>{c.title}</Link>
                    </h2>

                    <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"#1B2A4A", fontStyle:"italic", marginBottom:12, fontWeight:500 }}>{c.tagline}</p>
                    <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"#5C5C6E", lineHeight:1.75, marginBottom:20 }}>{c.description}</p>

                    {/* Pill indicators */}
                    <div style={{ display:"flex", gap:10, marginBottom:24, flexWrap:"wrap" }}>
                      <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, background:"#F2EFE8", color:"#2D3142", border:"1px solid #D8D4CC", padding:"5px 14px" }}>⏱ {c.duration}</span>
                      <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, background:"#F2EFE8", color:"#2D3142", border:"1px solid #D8D4CC", padding:"5px 14px" }}>▶ {vidCount} video{vidCount!==1?"s":""}</span>
                      {liveCount>0 && <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, background:"#EEF1F8", color:"#1B2A4A", border:"1px solid #C4CCE0", padding:"5px 14px" }}>⬤ {liveCount} live session{liveCount!==1?"s":""}</span>}
                      {c.lessons.some(l=>l.isFreePreview) && <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, background:"#EFF7EE", color:"#2A5C28", border:"1px solid #BCD8BA", padding:"5px 14px" }}>✓ Free preview</span>}
                    </div>

                    <Link href={`/courses/${c.slug}`} className="btn btn-navy">View Course Details</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ background:"#1B2A4A", padding:"40px 44px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:24 }}>
          <div>
            <span className="label" style={{ color:"#C8A96E" }}>Not sure where to start?</span>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"rgba(255,255,255,0.7)" }}>Dr. Gohar will personally recommend a course based on your goals.</p>
          </div>
          <Link href="/contact" className="btn btn-gold">Send a Message</Link>
        </div>
      </div>
    </div>
  );
}
