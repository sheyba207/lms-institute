import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { instructors } from "@/data/instructors";

export const metadata: Metadata = {
  title: "About Dr. Sheema Ali Gohar | PhD English Language & Linguistics",
  description: "PhD in Applied Linguistics, university professor, researcher and educator.",
};

export default function AboutPage() {
  const p = instructors[0];
  return (
    <div>
      {/* Hero banner */}
      <div style={{ position:"relative", height:300, background:"#0F1C35" }}>
        <Image src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1400&h=400&fit=crop" alt="University lecture hall" fill priority style={{ objectFit:"cover", objectPosition:"center 40%", opacity:0.3 }} sizes="100vw" />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(11,24,53,0.92) 0%, rgba(11,24,53,0.5) 100%)" }} />
        <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"flex-end" }}>
          <div style={{ maxWidth:1200, width:"100%", margin:"0 auto", padding:"0 24px 32px" }}>
            <span className="label" style={{ color:"#C8A96E" }}>About the Professor</span>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,4vw,48px)", fontWeight:600, color:"#fff" }}>{p.name}</h1>
            <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"rgba(255,255,255,0.6)", marginTop:6 }}>{p.credentials}</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"56px 24px" }}>
        <div className="grid gap-16 md:grid-cols-[2fr,1fr]">
          {/* Main */}
          <div>
            {/* Identity card */}
            <div style={{ display:"flex", gap:24, alignItems:"flex-start", padding:"28px", background:"#fff", border:"1px solid #D8D4CC", marginBottom:40, flexWrap:"wrap" }}>
              <div style={{ width:80, height:80, background:"#1B2A4A", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                <span style={{ fontFamily:"'Playfair Display',serif", fontSize:26, color:"#C8A96E", fontWeight:600 }}>SAG</span>
              </div>
              <div style={{ flex:1 }}>
                <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:600, color:"#0F1C35", marginBottom:4 }}>{p.name}</h2>
                <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#5C5C6E", marginBottom:14 }}>{p.title}</p>
                <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                  {Object.entries(p.social||{}).map(([k,h])=>(
                    <a key={k} href={h} target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"#1B2A4A", border:"1px solid #1B2A4A", padding:"5px 12px", textDecoration:"none" }}>
                      {k==="linkedin"?"LinkedIn":k==="scholar"?"Google Scholar":k==="researchgate"?"ResearchGate":"YouTube"} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Biography */}
            <div style={{ marginBottom:44 }}>
              <div className="section-head"><span className="section-title">Biography</span></div>
              <div className="grid gap-10 md:grid-cols-[3fr,2fr]" style={{ marginBottom:20 }}>
                <div>
                  {p.bio.slice(0,2).map((para,i)=>(
                    <p key={i} style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"#2D3142", lineHeight:1.85, marginBottom:18 }}>{para}</p>
                  ))}
                </div>
                <div style={{ position:"relative", minHeight:220, background:"#ECEAE4", overflow:"hidden" }}>
                  <Image src="https://images.pexels.com/photos/8640058/pexels-photo-8640058.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Student studying" fill style={{ objectFit:"cover" }} sizes="(max-width:768px)100vw,33vw" />
                </div>
              </div>
              {p.bio.slice(2).map((para,i)=>(
                <p key={i} style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"#2D3142", lineHeight:1.85, marginBottom:18 }}>{para}</p>
              ))}
            </div>

            {/* Publications */}
            {p.publications && (
              <div style={{ marginBottom:44 }}>
                <div className="section-head"><span className="section-title">Selected Publications</span></div>
                {p.publications.map((pub,i)=>(
                  <div key={i} style={{ display:"flex", gap:20, padding:"20px 0", borderBottom:"1px solid #ECEAE4", alignItems:"flex-start" }}>
                    <span style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:600, color:"#C8A96E", minWidth:28, flexShrink:0, lineHeight:1.3 }}>{i+1}</span>
                    <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:14.5, color:"#2D3142", lineHeight:1.7, fontStyle:"italic" }}>{pub}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Philosophy */}
            <div style={{ background:"#1B2A4A", padding:"40px 44px", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:-20, right:24, fontFamily:"'Playfair Display',serif", fontSize:160, color:"rgba(200,169,110,0.06)", lineHeight:1, pointerEvents:"none" }}>"</div>
              <span className="label" style={{ color:"#C8A96E" }}>Teaching Philosophy</span>
              <blockquote style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(16px,2vw,20px)", fontStyle:"italic", color:"rgba(255,255,255,0.9)", lineHeight:1.75, position:"relative" }}>
                "Every student arrives with a language — the language of their experience, their culture, their thinking. My job is not to replace that, but to expand it. To give each person the tools to say what they already know, more precisely, more powerfully, and in more contexts than they imagined possible."
              </blockquote>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div style={{ position:"relative", height:200, overflow:"hidden", marginBottom:20, background:"#ECEAE4" }}>
              <Image src="https://images.pexels.com/photos/4144228/pexels-photo-4144228.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Students reading" fill style={{ objectFit:"cover" }} sizes="(max-width:768px)100vw,33vw" />
            </div>

            <div className="panel" style={{ marginBottom:20 }}>
              <div className="panel-head gold">Areas of Expertise</div>
              <div className="panel-body">
                {p.expertise.map((e,i)=>(
                  <div key={e} style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 0", borderBottom: i<p.expertise.length-1?"1px solid #ECEAE4":"none" }}>
                    <div style={{ width:6, height:6, background:"#C8A96E", flexShrink:0 }} />
                    <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13.5, color:"#2D3142" }}>{e}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel" style={{ marginBottom:20 }}>
              <div className="panel-head">Quick Links</div>
              <div className="panel-body">
                {[{l:"All Courses",h:"/courses"},{l:"Live Sessions & Webinars",h:"/webinars"},{l:"Research & Publications",h:"/research"},{l:"Contact Dr. Gohar",h:"/contact"}].map((x,i,a)=>(
                  <Link key={x.l} href={x.h} style={{ display:"block", padding:"11px 0", fontFamily:"'Source Sans 3',sans-serif", fontSize:13.5, color:"#2D3142", textDecoration:"none", borderBottom: i<a.length-1?"1px solid #ECEAE4":"none" }}>{x.l}</Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="btn btn-navy" style={{ display:"block", textAlign:"center" }}>Send a Message</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
