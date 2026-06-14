// app/research/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research & Publications | Dr. Sarah Al-Amin",
  description: "Academic research, publications and scholarly work by Dr. Sarah Al-Amin, PhD in Applied Linguistics.",
};

const publications = [
  { year: "2022", title: "Scaffolding Academic Discourse in EFL Contexts", journal: "Journal of Language Teaching Research", vol: "Vol. 14, Issue 3, pp. 201–228", doi: "#" },
  { year: "2021", title: "Metacognitive Strategies and Second Language Writing: Evidence from University Students", journal: "Applied Linguistics Review", vol: "Vol. 12, Issue 2, pp. 155–184", doi: "#" },
  { year: "2020", title: "Rethinking Grammar Instruction in Higher Education: A Discourse-Based Approach", journal: "TESOL Quarterly", vol: "Vol. 54, Issue 4, pp. 890–920", doi: "#" },
  { year: "2019", title: "Critical Reading and Academic Success in EFL University Settings", journal: "Reading in a Foreign Language", vol: "Vol. 31, Issue 1, pp. 44–70", doi: "#" },
];

const researchAreas = [
  { title: "Second Language Acquisition", desc: "Investigating how adult learners acquire English as a second or foreign language, with a focus on instructional context, motivation, and identity." },
  { title: "Academic Writing Pedagogy", desc: "Developing evidence-based approaches to teaching academic writing in university settings, including genre analysis and process writing." },
  { title: "Discourse Analysis", desc: "Examining language in use — how texts are structured, how meaning is constructed in context, and how discourse shapes social interaction." },
  { title: "EFL Curriculum Design", desc: "Designing, evaluating and reforming English language curricula for higher education in diverse national contexts." },
];

export default function ResearchPage() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      {/* Title bar */}
      <div style={{ borderBottom: "1px solid #d0cdc8", padding: "32px 0 20px", marginBottom: 40 }}>
        <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 8 }}>Scholarship</div>
        <h1 style={{
          fontFamily: "'Times New Roman', serif",
          fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", color: "#1a1a1a",
        }}>Research &amp; Publications</h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#666", marginTop: 8, maxWidth: 600 }}>
          Peer-reviewed research in applied linguistics, academic writing pedagogy, and second language acquisition.
        </p>
      </div>

      <div style={{ display: "grid", gap: "0 64px" }} className="grid-cols-1 md:grid-cols-[3fr,1fr]">
        <div>
          {/* Publications */}
          <div style={{ marginBottom: 52 }}>
            <div style={{ borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 0 }}>
              <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Selected Publications</span>
            </div>
            {publications.map((pub, i) => (
              <div key={i} style={{
                display: "flex", gap: 28, padding: "24px 0",
                borderBottom: "1px solid #d0cdc8", alignItems: "flex-start",
              }}>
                <div style={{
                  fontFamily: "Arial, sans-serif", fontSize: 11, fontWeight: 700,
                  color: "#fff", background: "#6b1a1a",
                  padding: "4px 10px", flexShrink: 0, letterSpacing: "0.06em",
                }}>{pub.year}</div>
                <div>
                  <h3 style={{
                    fontFamily: "'Times New Roman', serif",
                    fontSize: 17, fontWeight: "normal", fontStyle: "italic",
                    color: "#1a1a1a", lineHeight: 1.3, marginBottom: 6,
                  }}>{pub.title}</h3>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#6b1a1a", marginBottom: 3 }}>
                    {pub.journal}
                  </div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#999" }}>
                    {pub.vol}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Research areas */}
          <div>
            <div style={{ borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 0 }}>
              <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Research Areas</span>
            </div>
            {researchAreas.map((area, i) => (
              <div key={i} style={{
                borderBottom: "1px solid #d0cdc8", padding: "24px 0",
                borderLeft: "4px solid #6b1a1a", paddingLeft: 20,
              }}>
                <h3 style={{
                  fontFamily: "'Times New Roman', serif",
                  fontSize: 18, fontWeight: "normal", color: "#1a1a1a", marginBottom: 8,
                }}>{area.title}</h3>
                <p style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#555", lineHeight: 1.75 }}>
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div style={{ border: "1px solid #d0cdc8", marginBottom: 20 }}>
            <div style={{ background: "#6b1a1a", padding: "12px 20px" }}>
              <span className="uppercase-label" style={{ color: "#fff" }}>Academic Links</span>
            </div>
            <div style={{ padding: "12px 20px" }}>
              {[
                { label: "Google Scholar Profile", href: "https://scholar.google.com/" },
                { label: "ResearchGate", href: "https://researchgate.net/" },
                { label: "ORCID Profile", href: "#" },
                { label: "Academia.edu", href: "#" },
              ].map((l, i) => (
                <div key={l.label} style={{ borderBottom: i < 3 ? "1px solid #ebebeb" : "none" }}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", fontFamily: "Arial, sans-serif", fontSize: 13, color: "#333", textDecoration: "none" }}>
                    <span>{l.label}</span><span style={{ color: "#6b1a1a" }}>↗</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <Link href="/contact" className="btn-primary" style={{ display: "block", textAlign: "center", marginBottom: 12 }}>
            Research Collaboration
          </Link>
          <Link href="/about" className="btn-outline" style={{ display: "block", textAlign: "center" }}>
            Full Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
