import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Live Sessions & Webinars | Dr. Sheema Ali Gohar",
  description: "Upcoming live Zoom classes and webinars with Dr. Sheema Ali Gohar.",
};

const sessions = [
  { day:"19", month:"Jun", type:"Live Zoom", color:"#1B2A4A", title:"Academic Writing Workshop: Crafting Powerful Introductions", time:"Thursday · 7:00 PM PKT", duration:"90 min", seats:"Limited to 20 participants", course:"Academic Writing Mastery", slug:"academic-writing-mastery", free:false, desc:"A hands-on session where students share their introductions and receive live feedback. Covers thesis placement, hook strategies, and background context." },
  { day:"21", month:"Jun", type:"Webinar", color:"#3D5A9A", title:"IELTS Task 2 Writing: The 5 Essay Types Explained", time:"Saturday · 5:00 PM PKT", duration:"90 min", seats:"Open to all", course:"IELTS & TOEFL Preparation", slug:"ielts-toefl-preparation", free:true, desc:"Dr. Gohar walks through all five Task 2 essay types with annotated model answers and band 7+ strategies." },
  { day:"25", month:"Jun", type:"Live Zoom", color:"#1B2A4A", title:"English Communication: Professional Email Masterclass", time:"Wednesday · 8:00 PM PKT", duration:"60 min", seats:"Limited to 15 participants", course:"English Communication Skills", slug:"english-communication-skills", free:false, desc:"Live writing and editing session focused on professional email tone, structure, and vocabulary." },
  { day:"27", month:"Jun", type:"Webinar", color:"#3D5A9A", title:"Open Q&A: Ask Dr. Gohar Anything", time:"Friday · 6:00 PM PKT", duration:"60 min", seats:"Open to all", course:"All Courses", slug:null, free:true, desc:"A monthly open session where any student can bring questions about English language, exams, academic writing, or linguistics." },
];

const recordings = [
  { title:"Discourse Markers and Cohesion in Academic Writing", date:"7 Jun 2026", type:"Webinar", dur:"75 min" },
  { title:"IELTS Speaking Part 2: Structuring Your Response", date:"1 Jun 2026", type:"Live Zoom", dur:"60 min" },
  { title:"Introduction to Linguistics: Language as a System", date:"25 May 2026", type:"Webinar", dur:"90 min" },
];

export default function WebinarsPage() {
  return (
    <div>
      {/* Hero */}
      <div style={{ position:"relative", height:260, background:"#0F1C35" }}>
        <Image src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1400&h=400&fit=crop" alt="Students in a collaborative learning session" fill priority style={{ objectFit:"cover", opacity:0.3 }} sizes="100vw" />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(11,24,53,0.92) 0%, rgba(11,24,53,0.4) 100%)" }} />
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"flex-end" }}>
          <div style={{ maxWidth:1200, width:"100%", margin:"0 auto", padding:"0 24px 32px" }}>
            <span className="label" style={{ color:"#C8A96E" }}>Interactive Learning</span>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:"#fff" }}>Live Sessions &amp; Webinars</h1>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"rgba(255,255,255,0.65)", marginTop:8, maxWidth:540 }}>Zoom classes for enrolled students, open webinars for everyone, and recorded sessions available on demand.</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"56px 24px" }}>
        {/* Format legend */}
        <div style={{ display:"flex", gap:24, marginBottom:40, flexWrap:"wrap", padding:"18px 24px", background:"#fff", border:"1px solid #D8D4CC" }}>
          {[{color:"#1B2A4A",label:"Live Zoom",desc:"Interactive · limited seats · enrolled students"},
            {color:"#3D5A9A",label:"Webinar",desc:"Open to all · recorded for later viewing"}].map(x=>(
            <div key={x.label} style={{ display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ display:"inline-block", fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#fff", background:x.color, padding:"4px 12px" }}>{x.label}</span>
              <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#5C5C6E" }}>{x.desc}</span>
            </div>
          ))}
        </div>

        {/* Session cards */}
        <div className="section-head"><span className="section-title">Upcoming Sessions — June 2026</span></div>
        <div style={{ display:"flex", flexDirection:"column", gap:0, marginBottom:56 }}>
          {sessions.map((s,i)=>(
            <div key={i} className="row-link" style={{ padding:"28px 0", borderLeft:`4px solid ${s.color}`, paddingLeft:24 }}>
              <div className="grid gap-8 md:grid-cols-[auto,1fr,auto]" style={{ alignItems:"center" }}>
                {/* Date */}
                <div className="date-block" style={{ background:s.color }}><span className="day">{s.day}</span><span className="month">{s.month}</span></div>
                {/* Content */}
                <div>
                  <div style={{ display:"flex", gap:10, marginBottom:10, flexWrap:"wrap", alignItems:"center" }}>
                    <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#fff", background:s.color, padding:"3px 10px" }}>{s.type}</span>
                    {s.free && <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#2A5C28", border:"1px solid #BCD8BA", padding:"3px 10px" }}>Free &amp; Open</span>}
                    <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#8C8C9E" }}>{s.seats}</span>
                  </div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(17px,2vw,22px)", fontWeight:600, color:"#0F1C35", lineHeight:1.25, marginBottom:8 }}>{s.title}</h3>
                  <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"#5C5C6E", lineHeight:1.65, marginBottom:10 }}>{s.desc}</p>
                  <div style={{ display:"flex", gap:20, fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#5C5C6E" }}>
                    <span>🕖 {s.time}</span><span>⏱ {s.duration}</span>
                  </div>
                </div>
                {/* Actions */}
                <div style={{ display:"flex", flexDirection:"column", gap:10, minWidth:130 }}>
                  {s.slug && <Link href={`/courses/${s.slug}`} className="btn btn-outline-navy" style={{ textAlign:"center", fontSize:11 }}>View Course</Link>}
                  <Link href="/contact" className="btn btn-navy" style={{ textAlign:"center", fontSize:11 }}>{s.free?"Join Free →":"Register →"}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Past recordings */}
        <div style={{ background:"#fff", border:"1px solid #D8D4CC", marginBottom:48 }}>
          <div style={{ background:"#1B2A4A", padding:"14px 24px" }}>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,0.7)" }}>Past Session Recordings</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"rgba(255,255,255,0.4)", marginTop:2 }}>Enrolled students can access all recordings from the dashboard.</div>
          </div>
          {recordings.map((r,i)=>(
            <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 24px", borderBottom: i<recordings.length-1?"1px solid #ECEAE4":"none", flexWrap:"wrap", gap:14 }}>
              <div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, color:"#0F1C35", marginBottom:4 }}>{r.title}</div>
                <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#8C8C9E" }}>{r.type} · {r.date} · {r.dur}</div>
              </div>
              <Link href="/dashboard" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1B2A4A", border:"1px solid #1B2A4A", padding:"7px 16px", textDecoration:"none" }}>Watch →</Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background:"#1B2A4A", padding:"40px 44px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:24 }}>
          <div>
            <span className="label" style={{ color:"#C8A96E" }}>Never Miss a Session</span>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"rgba(255,255,255,0.7)" }}>Enrol in a course to receive Zoom links, reminders, and recording access.</p>
          </div>
          <Link href="/courses" className="btn btn-gold">Browse Courses</Link>
        </div>
      </div>
    </div>
  );
}
