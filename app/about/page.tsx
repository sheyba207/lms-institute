// app/about/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { instructors } from "@/data/instructors";

export const metadata: Metadata = {
  title: "About Dr. Sarah Al-Amin | PhD English Language & Linguistics",
  description: "PhD in Applied Linguistics, university professor, researcher and educator.",
};

export default function AboutPage() {
  const prof = instructors[0];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

      {/* Page title bar */}
      <div style={{
        borderBottom: "1px solid #d0cdc8", padding: "32px 0 20px",
        marginBottom: 40,
      }}>
        <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 8 }}>About</div>
        <h1 style={{
          fontFamily: "'Times New Roman', serif",
          fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", color: "#1a1a1a",
        }}>{prof.name}</h1>
        <p style={{
          fontFamily: "Arial, sans-serif",
          fontSize: 13, color: "#6b1a1a", marginTop: 6,
        }}>{prof.credentials}</p>
      </div>

      <div style={{ display: "grid", gap: "0 64px" }} className="grid-cols-1 md:grid-cols-[2fr,1fr]">

        {/* Main column */}
        <div>
          {/* Profile identity */}
          <div style={{
            display: "flex", gap: 32, alignItems: "flex-start",
            borderBottom: "1px solid #d0cdc8", paddingBottom: 36, marginBottom: 36,
            flexWrap: "wrap",
          }}>
            <div style={{
              width: 100, height: 100, border: "1px solid #6b1a1a", flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{
                fontFamily: "'Times New Roman', serif", fontSize: 38, color: "#6b1a1a",
              }}>SA</span>
            </div>
            <div>
              <h2 style={{
                fontFamily: "'Times New Roman', serif",
                fontSize: 24, fontWeight: "normal", color: "#1a1a1a", marginBottom: 4,
              }}>{prof.name}</h2>
              <p style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#6b1a1a", marginBottom: 14 }}>
                {prof.title}
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {Object.entries(prof.social || {}).map(([key, href]) => (
                  <a key={key} href={href} target="_blank" rel="noopener noreferrer"
                    style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                      textTransform: "capitalize", color: "#6b1a1a",
                      border: "1px solid #6b1a1a", padding: "4px 12px",
                      textDecoration: "none", fontFamily: "Arial, sans-serif",
                    }}>
                    {key === "linkedin" ? "LinkedIn" : key === "scholar" ? "Google Scholar" : key === "researchgate" ? "ResearchGate" : "YouTube"} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Biography */}
          <div style={{ marginBottom: 40 }}>
            <div style={{
              borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 24,
            }}>
              <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Biography</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {prof.bio.map((para, i) => (
                <p key={i} style={{
                  fontFamily: "Arial, sans-serif", fontSize: 15,
                  color: "#444", lineHeight: 1.8,
                }}>{para}</p>
              ))}
            </div>
          </div>

          {/* Publications */}
          {prof.publications && (
            <div style={{ marginBottom: 40 }}>
              <div style={{
                borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 24,
              }}>
                <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Selected Publications</span>
              </div>
              {prof.publications.map((pub, i) => (
                <div key={i} style={{
                  display: "flex", gap: 20, padding: "16px 0",
                  borderBottom: "1px solid #d0cdc8",
                }}>
                  <span style={{
                    fontFamily: "'Times New Roman', serif",
                    fontSize: 16, color: "#6b1a1a", minWidth: 24,
                    marginTop: 1, flexShrink: 0,
                  }}>{i + 1}.</span>
                  <p style={{
                    fontFamily: "'Times New Roman', serif",
                    fontSize: 15, color: "#333", lineHeight: 1.65, fontStyle: "italic",
                  }}>{pub}</p>
                </div>
              ))}
            </div>
          )}

          {/* Teaching philosophy */}
          <div style={{
            background: "#6b1a1a", padding: "36px 40px", marginBottom: 40,
          }}>
            <div className="uppercase-label" style={{ color: "#ffcccc", marginBottom: 16 }}>
              Teaching Philosophy
            </div>
            <blockquote style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "clamp(16px, 2vw, 20px)", fontStyle: "italic",
              color: "#fff", lineHeight: 1.7,
            }}>
              "Every student arrives with a language — the language of their experience,
              their culture, their thinking. My job is not to replace that, but to expand it.
              To give each person the tools to say what they already know, more precisely,
              more powerfully, and in more contexts than they imagined possible."
            </blockquote>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Areas of expertise */}
          <div style={{
            border: "1px solid #d0cdc8", marginBottom: 24,
          }}>
            <div style={{
              background: "#6b1a1a", padding: "12px 20px",
            }}>
              <span className="uppercase-label" style={{ color: "#fff" }}>Areas of Expertise</span>
            </div>
            <div style={{ padding: "16px 20px" }}>
              {prof.expertise.map((e, i) => (
                <div key={e} style={{
                  fontFamily: "Arial, sans-serif", fontSize: 13, color: "#444",
                  padding: "8px 0",
                  borderBottom: i < prof.expertise.length - 1 ? "1px solid #ebebeb" : "none",
                }}>
                  {e}
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div style={{ border: "1px solid #d0cdc8", marginBottom: 24 }}>
            <div style={{ background: "#222", padding: "12px 20px" }}>
              <span className="uppercase-label" style={{ color: "#fff" }}>Quick Links</span>
            </div>
            <div style={{ padding: "12px 20px" }}>
              {[
                { label: "All Courses", href: "/courses" },
                { label: "Live Sessions & Webinars", href: "/webinars" },
                { label: "Student Dashboard", href: "/dashboard" },
                { label: "Contact Dr. Al-Amin", href: "/contact" },
              ].map((l, i) => (
                <div key={l.label} style={{
                  borderBottom: i < 3 ? "1px solid #ebebeb" : "none",
                }}>
                  <Link href={l.href} style={{
                    display: "block", padding: "10px 0",
                    fontFamily: "Arial, sans-serif", fontSize: 13, color: "#444",
                    textDecoration: "none",
                  }}>
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <Link href="/contact" className="btn-primary" style={{ display: "block", textAlign: "center" }}>
            Send a Message
          </Link>
        </div>
      </div>
    </div>
  );
}
