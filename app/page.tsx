import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Dr. Sheema Ali Gohar | English Language & Linguistics",
  description: "PhD Professor in Applied Linguistics. Expert online courses in academic writing, IELTS/TOEFL preparation, English communication, and linguistics.",
};

const IMG = {
  hero:    "https://images.pexels.com/photos/8640058/pexels-photo-8640058.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  prof:    "https://images.pexels.com/photos/5905559/pexels-photo-5905559.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop",
  c1:      "https://images.pexels.com/photos/4144228/pexels-photo-4144228.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  c2:      "https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  c3:      "https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  c4:      "https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
  sessions:"https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
};

const news = [
  { day:"12", month:"Jun", title:"New Course: Introduction to Linguistics now open for enrolment", excerpt:"Explore phonetics, morphology, syntax and the social dimensions of language in this university-level course.", href:"/courses/introduction-to-linguistics" },
  { day:"05", month:"Jun", title:"Webinar Recording: IELTS Task 2 — The 5 Essay Types", excerpt:"Students who missed the live session can access the full 90-minute recording through the student dashboard.", href:"/webinars" },
  { day:"28", month:"May", title:"Research Paper Accepted in Applied Linguistics Review", excerpt:"Dr. Gohar's latest research on metacognitive writing strategies in EFL contexts has been accepted for publication.", href:"/research" },
];

const events = [
  { day:"19", month:"Jun", title:"Live Zoom: Academic Writing Workshop", time:"Thursday · 7:00 PM PKT", href:"/webinars" },
  { day:"21", month:"Jun", title:"Webinar: IELTS Task 2 Essay Types Explained", time:"Saturday · 5:00 PM PKT", href:"/webinars" },
  { day:"27", month:"Jun", title:"Open Q&A with Dr. Gohar", time:"Friday · 6:00 PM PKT", href:"/webinars" },
];

const courseImgs = [IMG.c1, IMG.c2, IMG.c3, IMG.c4];

export default function HomePage() {
  const featured = courses.slice(0, 4);
  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section style={{ position:"relative", background:"#0F1C35" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Image src={IMG.hero} alt="Student studying with laptop" fill priority style={{ objectFit:"cover", objectPosition:"center 30%", opacity:0.4 }} sizes="100vw" />
        </div>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(105deg, rgba(11,24,53,0.94) 0%, rgba(11,24,53,0.72) 55%, rgba(11,24,53,0.35) 100%)" }} />

        <div style={{ position:"relative", maxWidth:1200, margin:"0 auto", padding:"92px 24px 80px" }}>
          <div style={{ maxWidth:600 }}>
            <span className="label" style={{ color:"#C8A96E" }}>PhD · Applied Linguistics · English Language</span>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(34px,5.5vw,62px)", fontWeight:600, color:"#fff", lineHeight:1.1, marginBottom:22 }}>
              Teaching Language.<br />
              <em style={{ fontStyle:"italic", color:"#E8D5A8" }}>Expanding Minds.</em>
            </h1>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:17, color:"rgba(255,255,255,0.75)", lineHeight:1.75, marginBottom:36, maxWidth:500 }}>
              Expert-led courses in academic writing, linguistics, and English communication — from a university professor with a decade of teaching and published research.
            </p>
            <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              <Link href="/courses" className="btn btn-gold">Explore Courses</Link>
              <Link href="/webinars" className="btn btn-outline-white">Upcoming Sessions</Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ position:"relative", background:"rgba(15,28,53,0.88)", borderTop:"1px solid rgba(200,169,110,0.2)" }}>
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 24px", display:"flex" }}>
            {[{v:"PhD",l:"Applied Linguistics"},{v:"10+",l:"Years Teaching"},{v:"4",l:"Specialist Courses"},{v:"Live",l:"Zoom & Webinars"}].map((s,i)=>(
              <div key={s.l} style={{ padding:"20px 36px 20px 0", marginRight:36, borderRight: i<3?"1px solid rgba(255,255,255,0.08)":"none" }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:26, color:"#C8A96E", lineHeight:1 }}>{s.v}</div>
                <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"rgba(255,255,255,0.45)", marginTop:4, letterSpacing:"0.06em", textTransform:"uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NEWS + EVENTS ══════════════════════════════════ */}
      <section style={{ maxWidth:1200, margin:"0 auto", padding:"60px 24px" }}>
        <div className="grid gap-16 md:grid-cols-[3fr,2fr]">

          {/* News column */}
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:0 }} className="section-head">
              <span className="section-title">Latest News</span>
              <Link href="/research" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1B2A4A" }}>View All →</Link>
            </div>
            {news.map((n,i)=>(
              <Link key={i} href={n.href} style={{ textDecoration:"none" }}>
                <div className="row-link" style={{ display:"flex", gap:18, padding:"22px 0", alignItems:"flex-start" }}>
                  <div className="date-block"><span className="day">{n.day}</span><span className="month">{n.month}</span></div>
                  <div style={{ flex:1 }}>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, color:"#0F1C35", lineHeight:1.35, marginBottom:7 }}>{n.title}</div>
                    <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13.5, color:"#5C5C6E", lineHeight:1.65 }}>{n.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Events column */}
          <div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:0 }} className="section-head">
              <span className="section-title">Upcoming Sessions</span>
              <Link href="/webinars" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1B2A4A" }}>View All →</Link>
            </div>
            {events.map((e,i)=>(
              <Link key={i} href={e.href} style={{ textDecoration:"none" }}>
                <div className="row-link" style={{ display:"flex", gap:16, padding:"18px 0", alignItems:"flex-start" }}>
                  <div className="date-block"><span className="day">{e.day}</span><span className="month">{e.month}</span></div>
                  <div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:15, color:"#0F1C35", lineHeight:1.3, marginBottom:5 }}>{e.title}</div>
                    <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#C8A96E", fontWeight:600 }}>{e.time}</div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Quick links box */}
            <div style={{ marginTop:28, background:"#fff", border:"1px solid #D8D4CC" }}>
              <div style={{ background:"#1B2A4A", padding:"11px 18px", fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"rgba(255,255,255,0.7)" }}>Quick Links</div>
              {[{l:"Student Dashboard",h:"/dashboard"},{l:"About Dr. Gohar",h:"/about"},{l:"Research & Publications",h:"/research"},{l:"Contact & Office Hours",h:"/contact"}].map((x,i,a)=>(
                <Link key={x.l} href={x.h} style={{ display:"block", padding:"11px 18px", fontFamily:"'Source Sans 3',sans-serif", fontSize:13.5, color:"#2D3142", textDecoration:"none", borderBottom: i<a.length-1?"1px solid #ECEAE4":"none" }}>{x.l}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COURSES ════════════════════════════════════════ */}
      <section style={{ background:"#F2EFE8", borderTop:"1px solid #D8D4CC", borderBottom:"1px solid #D8D4CC" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"60px 24px" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }} className="section-head">
            <span className="section-title">Courses</span>
            <Link href="/courses" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#1B2A4A" }}>All Courses →</Link>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((c,i)=>(
              <Link key={c.slug} href={`/courses/${c.slug}`} style={{ textDecoration:"none" }}>
                <div className="course-card">
                  <div style={{ position:"relative", height:170, overflow:"hidden", background:"#D8D4CC" }}>
                    <Image src={courseImgs[i]} alt={c.title} fill style={{ objectFit:"cover" }} sizes="(max-width:768px)100vw,25vw" />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(15,28,53,0.7) 0%, transparent 55%)" }} />
                    <div style={{ position:"absolute", bottom:10, left:12 }}>
                      <span className="tag" style={{ background:"#1B2A4A", color:"#C8A96E", fontSize:9 }}>{c.category}</span>
                    </div>
                  </div>
                  <div style={{ padding:"16px 16px 18px" }}>
                    <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:15.5, fontWeight:600, color:"#0F1C35", lineHeight:1.3, marginBottom:7 }}>{c.title}</h3>
                    <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12.5, color:"#5C5C6E", lineHeight:1.55, marginBottom:12 }}>{c.tagline}</p>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", borderTop:"1px solid #ECEAE4", paddingTop:10 }}>
                      <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"#8C8C9E" }}>{c.level}</span>
                      <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"#8C8C9E" }}>{c.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROFESSOR ══════════════════════════════════════ */}
      <section style={{ maxWidth:1200, margin:"0 auto", padding:"72px 24px" }}>
        <div className="grid gap-16 md:grid-cols-2" style={{ alignItems:"center" }}>
          <div style={{ position:"relative", minHeight:440, overflow:"hidden", background:"#ECEAE4" }}>
            <Image src={IMG.prof} alt="Dr. Sheema Ali Gohar" fill style={{ objectFit:"cover", objectPosition:"center top" }} sizes="(max-width:768px)100vw,50vw" />
            <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"#1B2A4A", padding:"14px 22px" }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:600, color:"#fff" }}>Dr. Sheema Ali Gohar</div>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"#C8A96E", letterSpacing:"0.09em", textTransform:"uppercase", marginTop:3 }}>PhD · Applied Linguistics · English Language</div>
            </div>
          </div>
          <div>
            <div className="section-head">
              <span className="section-title">About the Professor</span>
            </div>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,3vw,34px)", fontWeight:600, color:"#0F1C35", lineHeight:1.2, marginBottom:20 }}>
              A decade of university teaching,<br />now available online.
            </h2>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"#2D3142", lineHeight:1.8, marginBottom:14 }}>
              Dr. Sheema Ali Gohar holds a PhD in Applied Linguistics and has taught at the university level for over ten years. Her research spans second language acquisition, academic discourse, and EFL pedagogy — published in leading international journals.
            </p>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"#2D3142", lineHeight:1.8, marginBottom:32 }}>
              This platform brings her expertise directly to students — through video courses, live Zoom sessions, webinars, and personalised assignment feedback.
            </p>
            <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
              <Link href="/about" className="btn btn-navy">Full Profile &amp; Publications</Link>
              <Link href="/contact" className="btn btn-outline-navy">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LEARNING FORMATS ═══════════════════════════════ */}
      <section style={{ position:"relative", background:"#0F1C35" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <Image src={IMG.sessions} alt="Students in a collaborative learning session" fill style={{ objectFit:"cover", opacity:0.18 }} sizes="100vw" />
        </div>
        <div style={{ position:"relative", maxWidth:1200, margin:"0 auto", padding:"72px 24px" }}>
          <div style={{ textAlign:"center", marginBottom:52 }}>
            <span className="label" style={{ color:"#C8A96E", display:"block", textAlign:"center" }}>The Learning Experience</span>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(24px,3.5vw,40px)", fontWeight:600, color:"#fff", lineHeight:1.15 }}>More than pre-recorded videos.</h2>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"rgba(255,255,255,0.55)", marginTop:12, maxWidth:500, margin:"12px auto 0" }}>Real interaction with a real professor — the kind of learning that changes how you think.</p>
          </div>
          <div className="grid grid-cols-1 gap-px md:grid-cols-4" style={{ background:"rgba(255,255,255,0.06)" }}>
            {[
              { icon:"▶", label:"Video Lectures",    desc:"Carefully produced lessons you can revisit anytime, structured to build skill progressively." },
              { icon:"⬤", label:"Live Zoom Classes",  desc:"Interactive sessions with Dr. Gohar — ask questions, practise, and get real-time guidance." },
              { icon:"🎙", label:"Expert Webinars",   desc:"Deep-dive open sessions on specific topics, recorded for enrolled students to revisit." },
              { icon:"✍", label:"Written Feedback",  desc:"Submit assignments and receive detailed, personalised feedback from Dr. Gohar herself." },
            ].map(item=>(
              <div key={item.label} style={{ background:"#0F1C35", padding:"36px 28px" }}>
                <div style={{ fontSize:28, marginBottom:16, color:"#C8A96E" }}>{item.icon}</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:600, color:"#fff", marginBottom:10 }}>{item.label}</div>
                <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13.5, color:"rgba(255,255,255,0.5)", lineHeight:1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:44 }}>
            <Link href="/webinars" className="btn btn-gold">View Session Schedule</Link>
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ══════════════════════════════════════════ */}
      <section style={{ background:"#F2EFE8", borderTop:"1px solid #D8D4CC", padding:"72px 24px" }}>
        <div style={{ maxWidth:780, margin:"0 auto", textAlign:"center" }}>
          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(18px,2vw,22px)", fontStyle:"italic", color:"#1B2A4A", lineHeight:1.7, marginBottom:28 }}>
            "I built this platform because I believe every learner deserves access to the same quality of instruction that universities offer — and sometimes more. Language is the foundation of thought. When you master it, everything else becomes possible."
          </div>
          <div style={{ display:"inline-flex", alignItems:"center", gap:14 }}>
            <div style={{ width:1, height:32, background:"#C8A96E" }} />
            <div>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, fontWeight:700, color:"#0F1C35", letterSpacing:"0.04em" }}>Dr. Sheema Ali Gohar</div>
              <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, color:"#8C8C9E", letterSpacing:"0.08em", textTransform:"uppercase", marginTop:2 }}>PhD Applied Linguistics · Founder &amp; Lead Instructor</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ══════════════════════════════════════ */}
      <section style={{ maxWidth:1200, margin:"0 auto", padding:"60px 24px" }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:24, paddingTop:40, borderTop:"1px solid #D8D4CC" }}>
          <div>
            <span className="label">Start Learning Today</span>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,3vw,36px)", fontWeight:600, color:"#0F1C35" }}>Your next lesson is waiting.</h2>
          </div>
          <div style={{ display:"flex", gap:14, flexWrap:"wrap" }}>
            <Link href="/courses" className="btn btn-navy">Browse All Courses</Link>
            <Link href="/contact" className="btn btn-outline-navy">Ask Dr. Gohar</Link>
          </div>
        </div>
      </section>
    </>
  );
}
