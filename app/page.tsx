// app/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Dr. Sarah Al-Amin | English Language & Linguistics",
  description:
    "PhD Professor in Applied Linguistics. Expert online courses in academic writing, IELTS/TOEFL preparation, English communication, and linguistics.",
};

const news = [
  {
    day: "12", month: "Jun", year: "2026",
    title: "New Course: Introduction to Linguistics now open for enrolment",
    excerpt: "Explore phonetics, morphology, syntax and the social dimensions of language in this university-level course.",
    href: "/courses/introduction-to-linguistics",
  },
  {
    day: "05", month: "Jun", year: "2026",
    title: "Webinar Recording Available: IELTS Task 2 — The 5 Essay Types",
    excerpt: "Students who missed the live session can now access the full 90-minute recording through the student dashboard.",
    href: "/webinars",
  },
  {
    day: "28", month: "May", year: "2026",
    title: "Research Paper Accepted: Metacognitive Strategies in Second Language Writing",
    excerpt: "Dr. Al-Amin's latest research on writing strategies in EFL contexts has been accepted for publication in Applied Linguistics Review.",
    href: "/about",
  },
];

const upcomingEvents = [
  {
    day: "19", month: "Jun",
    title: "Live Zoom: Academic Writing Workshop",
    time: "Thursday · 7:00 PM PKT",
    href: "/webinars",
  },
  {
    day: "21", month: "Jun",
    title: "Webinar: IELTS Task 2 Essay Types",
    time: "Saturday · 5:00 PM PKT",
    href: "/webinars",
  },
  {
    day: "27", month: "Jun",
    title: "Open Q&A: Ask Dr. Al-Amin Anything",
    time: "Friday · 6:00 PM PKT",
    href: "/webinars",
  },
];

export default function HomePage() {
  const featuredCourses = courses.slice(0, 4);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────
          Full-bleed, large, text overlay at bottom-left
          AKU style: photo-first, white text, burgundy CTA
      ─────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", background: "#1a1a1a", overflow: "hidden" }}>
        {/* Photo placeholder — editorial, university-library feel */}
        <div style={{
          width: "100%", height: "clamp(420px, 60vh, 600px)",
          background: "linear-gradient(160deg, #2a1010 0%, #1a1a2e 40%, #0d1a0d 100%)",
          position: "relative",
        }}>
          {/* Subtle texture overlay */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: `repeating-linear-gradient(
              0deg, transparent, transparent 60px,
              rgba(255,255,255,0.012) 60px, rgba(255,255,255,0.012) 61px
            )`,
          }} />

          {/* Text panel — bottom left, AKU style */}
          <div style={{
            position: "absolute", bottom: 0, left: 0,
            maxWidth: 560,
            background: "rgba(10,5,5,0.82)",
            padding: "32px 40px 36px",
            backdropFilter: "blur(2px)",
          }}>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#cc9999", marginBottom: 12,
              fontFamily: "Arial, sans-serif",
            }}>
              PhD · Applied Linguistics · English Language
            </div>
            <h1 style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: "normal", color: "#fff", lineHeight: 1.15, marginBottom: 16,
            }}>
              Teaching Language.<br />
              Expanding Minds.
            </h1>
            <p style={{
              fontFamily: "Arial, sans-serif", fontSize: 14, color: "#ccc",
              lineHeight: 1.7, marginBottom: 24, maxWidth: 420,
            }}>
              Expert-led courses in academic writing, linguistics, and English
              communication — from a university professor with a decade of
              teaching and published research.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/courses" className="btn-primary">Explore Courses</Link>
              <Link href="/webinars" className="btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>
                Upcoming Sessions
              </Link>
            </div>
          </div>

          {/* Stat strip — bottom right */}
          <div style={{
            position: "absolute", bottom: 0, right: 0,
            display: "flex", gap: 0,
          }} className="hidden md:flex">
            {[
              { value: "PhD", label: "Applied Linguistics" },
              { value: "10+", label: "Years Teaching" },
              { value: "4", label: "Online Courses" },
            ].map((s, i) => (
              <div key={s.label} style={{
                padding: "20px 28px",
                background: i === 0 ? "#6b1a1a" : i === 1 ? "#4e1010" : "#3a0c0c",
                textAlign: "center",
                borderLeft: "1px solid rgba(255,255,255,0.1)",
              }}>
                <div style={{
                  fontFamily: "'Times New Roman', serif",
                  fontSize: 26, color: "#fff", lineHeight: 1,
                }}>{s.value}</div>
                <div style={{
                  fontSize: 10, color: "#ffcccc", marginTop: 4,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  fontFamily: "Arial, sans-serif",
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWS + EVENTS ────────────────────────────────────
          AKU layout: left = news list, right = events list
          Both with date-blocks, hairline rules, all-caps labels
      ─────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px" }}>
        <div style={{ display: "grid", gap: "48px 64px" }} className="grid-cols-1 md:grid-cols-[3fr,2fr]">

          {/* News */}
          <div>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 0,
            }}>
              <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Latest News</span>
              <Link href="/about" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#6b1a1a", textDecoration: "none",
              }}>View All →</Link>
            </div>

            {news.map((item, i) => (
              <Link key={i} href={item.href} style={{ textDecoration: "none" }}>
                <div className="card-link" style={{
                  display: "flex", gap: 18, padding: "20px 0", alignItems: "flex-start",
                }}>
                  <div className="date-block">
                    <span className="day">{item.day}</span>
                    <span className="month">{item.month}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: "'Times New Roman', serif",
                      fontSize: 16, color: "#1a1a1a", lineHeight: 1.3,
                      marginBottom: 6,
                    }}>{item.title}</div>
                    <p style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: 13, color: "#666", lineHeight: 1.6,
                    }}>{item.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Events */}
          <div>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 0,
            }}>
              <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Upcoming Sessions</span>
              <Link href="/webinars" style={{
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#6b1a1a", textDecoration: "none",
              }}>View All →</Link>
            </div>

            {upcomingEvents.map((ev, i) => (
              <Link key={i} href={ev.href} style={{ textDecoration: "none" }}>
                <div className="card-link" style={{
                  display: "flex", gap: 16, padding: "18px 0", alignItems: "flex-start",
                }}>
                  <div className="date-block" style={{ minHeight: 46 }}>
                    <span className="day">{ev.day}</span>
                    <span className="month">{ev.month}</span>
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "'Times New Roman', serif",
                      fontSize: 15, color: "#1a1a1a", lineHeight: 1.3, marginBottom: 4,
                    }}>{ev.title}</div>
                    <div style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: 12, color: "#6b1a1a",
                    }}>{ev.time}</div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Quick links panel */}
            <div style={{ marginTop: 32, background: "#f7f6f4", padding: "20px 20px" }}>
              <div className="uppercase-label" style={{ color: "#666", marginBottom: 14 }}>Quick Links</div>
              {[
                { label: "Student Dashboard", href: "/dashboard" },
                { label: "About Dr. Al-Amin", href: "/about" },
                { label: "Research & Publications", href: "/research" },
                { label: "Contact & Office Hours", href: "/contact" },
              ].map(l => (
                <div key={l.label} style={{ borderBottom: "1px solid #e8e4e0" }}>
                  <Link href={l.href} style={{
                    display: "block", padding: "9px 0",
                    fontFamily: "Arial, sans-serif", fontSize: 13, color: "#333",
                    textDecoration: "none",
                  }}
                    className="hover:text-burgundy transition-colors">
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── COURSES SECTION ──────────────────────────────────
          AKU "Our Programmes" style: name + tagline grid
      ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#f7f6f4", borderTop: "1px solid #d0cdc8", borderBottom: "1px solid #d0cdc8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px" }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 32,
          }}>
            <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Courses</span>
            <Link href="/courses" style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
              textTransform: "uppercase", color: "#6b1a1a", textDecoration: "none",
            }}>View All Courses →</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 0 }}>
            {featuredCourses.map((course, i) => (
              <div key={course.slug} style={{
                borderRight: i < featuredCourses.length - 1 ? "1px solid #d0cdc8" : "none",
                padding: "0 32px 0 (i === 0 ? 0 : 32px)",
                paddingLeft: i === 0 ? 0 : 32,
                paddingRight: i === featuredCourses.length - 1 ? 0 : 32,
              }}>
                <div style={{
                  borderTop: "3px solid #6b1a1a",
                  paddingTop: 20, paddingBottom: 28,
                }}>
                  <div style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.12em",
                    textTransform: "uppercase", color: "#6b1a1a",
                    fontFamily: "Arial, sans-serif", marginBottom: 10,
                  }}>{course.category}</div>
                  <h3 style={{
                    fontFamily: "'Times New Roman', serif",
                    fontSize: 18, fontWeight: "normal", color: "#1a1a1a",
                    lineHeight: 1.25, marginBottom: 10,
                  }}>{course.title}</h3>
                  <p style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: 13, color: "#666", lineHeight: 1.6, marginBottom: 18,
                  }}>{course.tagline}</p>
                  <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    borderTop: "1px solid #d0cdc8", paddingTop: 14,
                    fontSize: 12, color: "#999", fontFamily: "Arial, sans-serif",
                  }}>
                    <span>{course.level} · {course.duration}</span>
                  </div>
                  <div style={{ marginTop: 14 }}>
                    <Link href={`/courses/${course.slug}`} style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "#6b1a1a", textDecoration: "none",
                    }}>Explore →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROFESSOR SECTION ─────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ display: "grid", gap: "48px 64px" }} className="grid-cols-1 md:grid-cols-2">
          {/* Left: photo / monogram */}
          <div style={{
            background: "#f7f6f4",
            border: "1px solid #d0cdc8",
            display: "flex", alignItems: "center", justifyContent: "center",
            minHeight: 340, padding: 48,
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{
                width: 120, height: 120, border: "2px solid #6b1a1a",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
              }}>
                <span style={{
                  fontFamily: "'Times New Roman', serif", fontSize: 40,
                  color: "#6b1a1a", fontWeight: "normal",
                }}>SA</span>
              </div>
              <div style={{
                fontFamily: "'Times New Roman', serif",
                fontSize: 22, color: "#1a1a1a", marginBottom: 4,
              }}>Dr. Sarah Al-Amin</div>
              <div style={{
                fontSize: 12, color: "#6b1a1a", letterSpacing: "0.06em",
                fontFamily: "Arial, sans-serif",
              }}>PhD Applied Linguistics</div>
              <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                {["Google Scholar", "ResearchGate", "LinkedIn"].map(name => (
                  <a key={name} href="#" target="_blank" rel="noopener noreferrer"
                    style={{
                      fontSize: 11, color: "#6b1a1a", border: "1px solid #6b1a1a",
                      padding: "4px 10px", textDecoration: "none",
                      fontFamily: "Arial, sans-serif",
                    }}>
                    {name} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{
              borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 24,
            }}>
              <span className="uppercase-label" style={{ color: "#1a1a1a" }}>About the Professor</span>
            </div>
            <h2 style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "clamp(22px, 3vw, 32px)", fontWeight: "normal",
              color: "#1a1a1a", lineHeight: 1.2, marginBottom: 18,
            }}>
              A decade of teaching language — now available online.
            </h2>
            <p style={{
              fontFamily: "Arial, sans-serif", fontSize: 14,
              color: "#555", lineHeight: 1.8, marginBottom: 14,
            }}>
              Dr. Al-Amin holds a PhD in Applied Linguistics and has taught at the
              university level for over ten years. Her research spans second language
              acquisition, academic discourse, and EFL pedagogy — published in leading
              international journals.
            </p>
            <p style={{
              fontFamily: "Arial, sans-serif", fontSize: 14,
              color: "#555", lineHeight: 1.8, marginBottom: 28,
            }}>
              This platform brings her expertise directly to students worldwide —
              through video courses, live Zoom sessions, webinars, and personalised
              assignment feedback.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/about" className="btn-primary">Full Profile &amp; Publications</Link>
              <Link href="/contact" className="btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEARNING FORMATS ──────────────────────────────── */}
      <section style={{ background: "#f7f6f4", borderTop: "1px solid #d0cdc8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px" }}>
          <div style={{
            borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 32,
          }}>
            <span className="uppercase-label" style={{ color: "#1a1a1a" }}>How You Will Learn</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0" }}>
            {[
              { label: "Video Lectures", icon: "▶", desc: "Carefully produced lessons structured to build skill progressively — watch anytime, at your own pace." },
              { label: "Live Zoom Classes", icon: "⬤", desc: "Interactive sessions where you practise, ask questions, and receive guidance from Dr. Al-Amin in real time." },
              { label: "Expert Webinars", icon: "🎙", desc: "Deep-dive sessions on specific topics — open to all students and recorded for later viewing." },
              { label: "Assignment Feedback", icon: "✍", desc: "Submit written work and receive detailed, personalised feedback from the professor herself." },
            ].map((item, i) => (
              <div key={item.label} style={{
                padding: "28px 32px",
                borderLeft: i > 0 ? "1px solid #d0cdc8" : "none",
                borderTop: "3px solid #6b1a1a",
              }}>
                <div style={{
                  fontFamily: "Arial, sans-serif", fontSize: 22,
                  color: "#6b1a1a", marginBottom: 12,
                }}>{item.icon}</div>
                <div style={{
                  fontFamily: "'Times New Roman', serif", fontSize: 17,
                  color: "#1a1a1a", marginBottom: 10,
                }}>{item.label}</div>
                <p style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: 13, color: "#666", lineHeight: 1.7,
                }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE BANNER ──────────────────────────────────── */}
      <section style={{
        background: "#6b1a1a",
        padding: "52px 24px",
        borderTop: "1px solid #4e1010",
      }}>
        <div style={{ maxWidth: 840, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "clamp(18px, 2.5vw, 26px)",
            fontStyle: "italic", color: "#fff",
            lineHeight: 1.65, marginBottom: 28,
          }}>
            "I built this platform because I believe every learner deserves access
            to the same quality of instruction that universities offer — and sometimes more.
            Language is the foundation of thought. When you master it, everything else becomes possible."
          </div>
          <div style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 12, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "#ffbbbb",
          }}>
            Dr. Sarah Al-Amin · PhD Applied Linguistics · Founder &amp; Lead Instructor
          </div>
        </div>
      </section>

      {/* ─── LIFELONG LEARNING CTA ─────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 24,
          borderTop: "1px solid #d0cdc8", paddingTop: 40,
        }}>
          <div>
            <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 10 }}>
              Start Learning Today
            </div>
            <h2 style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "clamp(22px, 3vw, 34px)", fontWeight: "normal", color: "#1a1a1a",
            }}>
              Your next lesson is waiting.
            </h2>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/courses" className="btn-primary">Browse All Courses</Link>
            <Link href="/contact" className="btn-outline">Ask Dr. Al-Amin</Link>
          </div>
        </div>
      </section>
    </>
  );
}
