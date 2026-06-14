import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#0F1C35", borderTop: "4px solid #C8A96E" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "56px 24px 44px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "0 48px" }} className="grid-cols-1 md:grid-cols-4">

          {/* Brand */}
          <div style={{ paddingRight: 32, borderRight: "1px solid rgba(255,255,255,0.08)", marginBottom: 36 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <div style={{ width: 40, height: 40, background: "#1B2A4A", border: "1px solid rgba(200,169,110,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, color: "#C8A96E", fontWeight: 600 }}>SAG</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: "#fff", fontWeight: 600 }}>Dr. Sheema Ali Gohar</div>
                <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 10, color: "#C8A96E", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 2 }}>PhD · Applied Linguistics</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 22 }}>
              Educating and inspiring students through the art and science of language — online courses, live sessions, and published research.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[{l:"Scholar",h:"https://scholar.google.com/"},{l:"ResearchGate",h:"https://researchgate.net/"},{l:"LinkedIn",h:"https://linkedin.com/"}].map(x=>(
                <a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.08em", textTransform:"uppercase", color:"rgba(255,255,255,0.5)", border:"1px solid rgba(255,255,255,0.15)", padding:"4px 8px", textDecoration:"none" }}>{x.l}</a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#C8A96E", marginBottom:18, paddingBottom:10, borderBottom:"1px solid rgba(255,255,255,0.08)" }}>Platform</div>
            {[{h:"/courses",l:"All Courses"},{h:"/webinars",l:"Live Sessions"},{h:"/dashboard",l:"Student Dashboard"},{h:"/research",l:"Research"},{h:"/about",l:"About Dr. Gohar"}].map(x=>(
              <div key={x.h} style={{ marginBottom:10 }}><Link href={x.h} style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"rgba(255,255,255,0.5)", textDecoration:"none" }}>{x.l}</Link></div>
            ))}
          </div>

          {/* Academic */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#C8A96E", marginBottom:18, paddingBottom:10, borderBottom:"1px solid rgba(255,255,255,0.08)" }}>Academic</div>
            {[{h:"https://scholar.google.com/",l:"Google Scholar ↗"},{h:"https://researchgate.net/",l:"ResearchGate ↗"},{h:"https://linkedin.com/",l:"LinkedIn ↗"},{h:"https://youtube.com/",l:"YouTube Channel ↗"}].map(x=>(
              <div key={x.l} style={{ marginBottom:10 }}><a href={x.h} target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"rgba(255,255,255,0.5)", textDecoration:"none" }}>{x.l}</a></div>
            ))}
          </div>

          {/* Contact */}
          <div style={{ marginBottom: 36 }}>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:10, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"#C8A96E", marginBottom:18, paddingBottom:10, borderBottom:"1px solid rgba(255,255,255,0.08)" }}>Contact</div>
            <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"rgba(255,255,255,0.45)", lineHeight:1.9 }}>
              <div>sheema.gohar@university.edu.pk</div>
              <div style={{marginTop:6}}>Office Hours: By Appointment</div>
              <div style={{marginTop:6}}>Zoom Sessions Available</div>
            </div>
            <Link href="/contact" className="btn btn-gold" style={{ marginTop:18, display:"inline-block" }}>Send a Message</Link>
          </div>
        </div>
      </div>

      <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"16px 24px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
          <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"rgba(255,255,255,0.3)" }}>© {year} Dr. Sheema Ali Gohar. All rights reserved.</span>
          <div style={{ display:"flex", gap:24 }}>
            {[{h:"/contact",l:"Privacy"},{h:"/contact",l:"Terms"},{h:"/contact",l:"Contact"}].map(x=>(
              <Link key={x.l} href={x.h} style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"rgba(255,255,255,0.3)", textDecoration:"none" }}>{x.l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
