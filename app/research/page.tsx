import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Publications | Dr. Sheema Ali Gohar",
  description: "Academic research, publications and scholarly work by Dr. Sheema Ali Gohar, PhD in Applied Linguistics.",
};

const pubs = [
  { year:"2022", title:"Scaffolding Academic Discourse in EFL Contexts", journal:"Journal of Language Teaching Research", vol:"Vol. 14, Issue 3, pp. 201–228" },
  { year:"2021", title:"Metacognitive Strategies and Second Language Writing: Evidence from University Students", journal:"Applied Linguistics Review", vol:"Vol. 12, Issue 2, pp. 155–184" },
  { year:"2020", title:"Rethinking Grammar Instruction in Higher Education: A Discourse-Based Approach", journal:"TESOL Quarterly", vol:"Vol. 54, Issue 4, pp. 890–920" },
  { year:"2019", title:"Critical Reading and Academic Success in EFL University Settings", journal:"Reading in a Foreign Language", vol:"Vol. 31, Issue 1, pp. 44–70" },
];

const areas = [
  { title:"Second Language Acquisition", desc:"Investigating how adult learners acquire English as a second or foreign language, with a focus on instructional context, motivation, and identity." },
  { title:"Academic Writing Pedagogy", desc:"Developing evidence-based approaches to teaching academic writing in university settings, including genre analysis and process writing." },
  { title:"Discourse Analysis", desc:"Examining language in use — how texts are structured, how meaning is constructed in context, and how discourse shapes social interaction." },
  { title:"EFL Curriculum Design", desc:"Designing, evaluating and reforming English language curricula for higher education in diverse national contexts." },
];

export default function ResearchPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ background:"#1B2A4A", borderBottom:"4px solid #C8A96E" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"44px 24px 36px" }}>
          <span className="label" style={{ color:"#C8A96E" }}>Scholarship</span>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(28px,4vw,44px)", fontWeight:600, color:"#fff" }}>Research &amp; Publications</h1>
          <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:15, color:"rgba(255,255,255,0.6)", marginTop:8, maxWidth:560 }}>
            Peer-reviewed research in applied linguistics, academic writing pedagogy, and second language acquisition.
          </p>
        </div>
      </div>

      <div style={{ maxWidth:1200, margin:"0 auto", padding:"56px 24px" }}>
        <div className="grid gap-16 md:grid-cols-[3fr,1fr]">
          <div>
            {/* Publications */}
            <div style={{ marginBottom:52 }}>
              <div className="section-head"><span className="section-title">Selected Publications</span></div>
              {pubs.map((p,i)=>(
                <div key={i} style={{ display:"flex", gap:0, borderBottom:"1px solid #ECEAE4", marginBottom:0 }}>
                  {/* Year badge */}
                  <div style={{ width:72, flexShrink:0, paddingTop:24, paddingRight:20 }}>
                    <span style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"0.06em", color:"#fff", background:"#1B2A4A", padding:"4px 10px", display:"inline-block" }}>{p.year}</span>
                  </div>
                  {/* Content */}
                  <div style={{ flex:1, padding:"24px 0 24px 0", borderLeft:"2px solid #ECEAE4", paddingLeft:24 }}>
                    <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:600, fontStyle:"italic", color:"#0F1C35", lineHeight:1.35, marginBottom:7 }}>{p.title}</h3>
                    <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13, color:"#1B2A4A", fontWeight:600, marginBottom:3 }}>{p.journal}</div>
                    <div style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:12, color:"#8C8C9E" }}>{p.vol}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Research areas */}
            <div>
              <div className="section-head"><span className="section-title">Research Areas</span></div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {areas.map((a,i)=>(
                  <div key={i} style={{ background:"#fff", border:"1px solid #D8D4CC", padding:"24px 24px 24px 20px", borderTop:`3px solid #1B2A4A` }}>
                    <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:17, fontWeight:600, color:"#0F1C35", marginBottom:10 }}>{a.title}</h3>
                    <p style={{ fontFamily:"'Source Sans 3',sans-serif", fontSize:13.5, color:"#5C5C6E", lineHeight:1.75 }}>{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="panel" style={{ marginBottom:20 }}>
              <div className="panel-head gold">Academic Links</div>
              <div className="panel-body">
                {[{l:"Google Scholar",h:"https://scholar.google.com/"},{l:"ResearchGate",h:"https://researchgate.net/"},{l:"ORCID Profile",h:"#"},{l:"Academia.edu",h:"#"}].map((x,i,a)=>(
                  <div key={x.l} style={{ borderBottom: i<a.length-1?"1px solid #ECEAE4":"none" }}>
                    <a href={x.h} target="_blank" rel="noopener noreferrer" style={{ display:"flex", justifyContent:"space-between", padding:"12px 0", fontFamily:"'Source Sans 3',sans-serif", fontSize:14, color:"#2D3142", textDecoration:"none" }}>
                      <span>{x.l}</span><span style={{ color:"#1B2A4A", fontWeight:700 }}>↗</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/contact" className="btn btn-navy" style={{ display:"block", textAlign:"center", marginBottom:12 }}>Research Collaboration</Link>
            <Link href="/about" className="btn btn-outline-navy" style={{ display:"block", textAlign:"center" }}>Full Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
