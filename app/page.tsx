// app/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/courses";

export const metadata: Metadata = {
  title: "Dr. Sarah Al-Amin | English Language & Linguistics",
  description:
    "PhD Professor in Applied Linguistics. Expert online courses in academic writing, IELTS/TOEFL preparation, English communication, and linguistics.",
};

// Pexels free-to-use photos — Pakistani/South Asian educational context
// License: https://www.pexels.com/license/ (free for commercial use, no attribution required)
const PHOTOS = {
  hero:    "https://images.pexels.com/photos/8640058/pexels-photo-8640058.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop",
  prof:    "https://images.pexels.com/photos/5905559/pexels-photo-5905559.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop",
  course1: "https://images.pexels.com/photos/4144228/pexels-photo-4144228.jpeg?auto=compress&cs=tinysrgb&w=700&h=460&fit=crop",
  course2: "https://images.pexels.com/photos/7516347/pexels-photo-7516347.jpeg?auto=compress&cs=tinysrgb&w=700&h=460&fit=crop",
  course3: "https://images.pexels.com/photos/8471939/pexels-photo-8471939.jpeg?auto=compress&cs=tinysrgb&w=700&h=460&fit=crop",
  course4: "https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=700&h=460&fit=crop",
  webinar: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=900&h=500&fit=crop",
};

const news = [
  { day: "12", month: "Jun", year: "2026", title: "New Course: Introduction to Linguistics now open for enrolment", excerpt: "Explore phonetics, morphology, syntax and the social dimensions of language in this university-level course.", href: "/courses/introduction-to-linguistics" },
  { day: "05", month: "Jun", year: "2026", title: "Webinar Recording Available: IELTS Task 2 — The 5 Essay Types", excerpt: "Students who missed the live session can now access the full 90-minute recording through the student dashboard.", href: "/webinars" },
  { day: "28", month: "May", year: "2026", title: "Research Paper Accepted in Applied Linguistics Review", excerpt: "Dr. Al-Amin's latest research on writing strategies in EFL contexts has been accepted for publication.", href: "/about" },
];

const upcomingEvents = [
  { day: "19", month: "Jun", title: "Live Zoom: Academic Writing Workshop", time: "Thursday · 7:00 PM PKT", href: "/webinars" },
  { day: "21", month: "Jun", title: "Webinar: IELTS Task 2 Essay Types", time: "Saturday · 5:00 PM PKT", href: "/webinars" },
  { day: "27", month: "Jun", title: "Open Q&A: Ask Dr. Al-Amin Anything", time: "Friday · 6:00 PM PKT", href: "/webinars" },
];

const coursePhotos = [PHOTOS.course1, PHOTOS.course2, PHOTOS.course3, PHOTOS.course4];

export default function HomePage() {
  const featuredCourses = courses.slice(0, 4);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section style={{ position: "relative", background: "#111", overflow: "hidden" }}>
        {/* Background photo */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src={PHOTOS.hero}
            alt="Pakistani student studying at an outdoor table with laptop and notebook"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 30%", opacity: 0.55 }}
            sizes="100vw"
          />
        </div>
        {/* Gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.15) 100%)",
        }} />

        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "80px 24px 80px" }}>
          <div style={{ maxWidth: 580 }}>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#ffbbbb", marginBottom: 14,
              fontFamily: "Arial, sans-serif",
            }}>
              PhD · Applied Linguistics · English Language
            </div>
            <h1 style={{
              fontFamily: "'Times New Roman', Times, serif",
              fontSize: "clamp(30px, 5vw, 54px)",
              fontWeight: "normal", color: "#fff", lineHeight: 1.1, marginBottom: 18,
            }}>
              Teaching Language.<br />Expanding Minds.
            </h1>
            <p style={{
              fontFamily: "Arial, sans-serif", fontSize: 16, color: "#ddd",
              lineHeight: 1.75, marginBottom: 32, maxWidth: 480,
            }}>
              Expert-led courses in academic writing, linguistics, and English
              communication — from a university professor with a decade of
              teaching and published research.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/courses" className="btn-primary">Explore Courses</Link>
              <Link href="/webinars" style={{
                fontFamily: "Arial, sans-serif", fontSize: 12, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#fff", border: "1px solid rgba(255,255,255,0.5)",
                padding: "10px 22px", textDecoration: "none",
                display: "inline-block",
              }}>Upcoming Sessions</Link>
            </div>
          </div>
        </div>

        {/* Stat strip pinned bottom */}
        <div style={{
          position: "relative",
          background: "rgba(0,0,0,0.72)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}>
          <div style={{
            maxWidth: 1200, margin: "0 auto", padding: "0 24px",
            display: "flex", justifyContent: "flex-start",
          }}>
            {[
              { value: "PhD", label: "Applied Linguistics" },
              { value: "10+", label: "Years University Teaching" },
              { value: "4", label: "Online Courses" },
              { value: "Live", label: "Zoom & Webinar Sessions" },
            ].map((s, i) => (
              <div key={s.label} style={{
                padding: "18px 32px 18px 0",
                marginRight: 32,
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
              }}>
                <div style={{ fontFamily: "'Times New Roman', serif", fontSize: 22, color: "#fff", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "Arial, sans-serif", fontSize: 10, color: "#aaa", marginTop: 3, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEWS + EVENTS ──────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px" }}>
        <div className="grid gap-12 md:grid-cols-[3fr,2fr]">
          {/* News */}
          <div>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "baseline",
              borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 0,
            }}>
              <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Latest News</span>
              <Link href="/about" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b1a1a", textDecoration: "none" }}>View All →</Link>
            </div>
            {news.map((item, i) => (
              <Link key={i} href={item.href} style={{ textDecoration: "none" }}>
                <div className="card-link" style={{ display: "flex", gap: 18, padding: "20px 0", alignItems: "flex-start" }}>
                  <div className="date-block">
                    <span className="day">{item.day}</span>
                    <span className="month">{item.month}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Times New Roman', serif", fontSize: 16, color: "#1a1a1a", lineHeight: 1.3, marginBottom: 6 }}>{item.title}</div>
                    <p style={{ fontFamily: "Arial, sans-serif", fontSize: 13, color: "#666", lineHeight: 1.6 }}>{item.excerpt}</p>
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
              <Link href="/webinars" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b1a1a", textDecoration: "none" }}>View All →</Link>
            </div>
            {upcomingEvents.map((ev, i) => (
              <Link key={i} href={ev.href} style={{ textDecoration: "none" }}>
                <div className="card-link" style={{ display: "flex", gap: 16, padding: "18px 0", alignItems: "flex-start" }}>
                  <div className="date-block" style={{ minHeight: 46 }}>
                    <span className="day">{ev.day}</span>
                    <span className="month">{ev.month}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Times New Roman', serif", fontSize: 15, color: "#1a1a1a", lineHeight: 1.3, marginBottom: 4 }}>{ev.title}</div>
                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#6b1a1a" }}>{ev.time}</div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Quick links */}
            <div style={{ marginTop: 28, background: "#f7f6f4", padding: "18px 20px" }}>
              <div className="uppercase-label" style={{ color: "#666", marginBottom: 12 }}>Quick Links</div>
              {[
                { label: "Student Dashboard", href: "/dashboard" },
                { label: "About Dr. Al-Amin", href: "/about" },
                { label: "Research & Publications", href: "/research" },
                { label: "Contact & Office Hours", href: "/contact" },
              ].map(l => (
                <div key={l.label} style={{ borderBottom: "1px solid #e8e4e0" }}>
                  <Link href={l.href} style={{ display: "block", padding: "9px 0", fontFamily: "Arial, sans-serif", fontSize: 13, color: "#333", textDecoration: "none" }}>{l.label}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── COURSES WITH PHOTOS ───────────────────────────────── */}
      <section style={{ background: "#f7f6f4", borderTop: "1px solid #d0cdc8", borderBottom: "1px solid #d0cdc8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px" }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 32,
          }}>
            <span className="uppercase-label" style={{ color: "#1a1a1a" }}>Courses</span>
            <Link href="/courses" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b1a1a", textDecoration: "none" }}>View All Courses →</Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course, i) => (
              <Link key={course.slug} href={`/courses/${course.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", border: "1px solid #d0cdc8" }}>
                  {/* Photo */}
                  <div style={{ position: "relative", height: 180, overflow: "hidden", background: "#e0ddd8" }}>
                    <Image
                      src={coursePhotos[i]}
                      alt={`${course.title} — students learning`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)",
                    }} />
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      padding: "8px 12px",
                    }}>
                      <span style={{
                        fontFamily: "Arial, sans-serif", fontSize: 9, fontWeight: 700,
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        color: "#fff", background: "#6b1a1a", padding: "2px 8px",
                      }}>{course.category}</span>
                    </div>
                  </div>
                  {/* Text */}
                  <div style={{ padding: "16px 16px 18px" }}>
                    <h3 style={{
                      fontFamily: "'Times New Roman', serif",
                      fontSize: 16, fontWeight: "normal", color: "#1a1a1a",
                      lineHeight: 1.25, marginBottom: 8,
                    }}>{course.title}</h3>
                    <p style={{
                      fontFamily: "Arial, sans-serif",
                      fontSize: 12, color: "#666", lineHeight: 1.55, marginBottom: 12,
                    }}>{course.tagline}</p>
                    <div style={{
                      display: "flex", justifyContent: "space-between",
                      fontFamily: "Arial, sans-serif", fontSize: 11, color: "#999",
                      paddingTop: 10, borderTop: "1px solid #ebebeb",
                    }}>
                      <span>{course.level}</span>
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROFESSOR SECTION WITH PHOTO ──────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Photo */}
          <div style={{ position: "relative", minHeight: 420, background: "#e8e4e0", overflow: "hidden" }}>
            <Image
              src={PHOTOS.prof}
              alt="Dr. Sarah Al-Amin — English Language professor"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Caption strip */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              background: "#6b1a1a", padding: "12px 20px",
            }}>
              <div style={{ fontFamily: "'Times New Roman', serif", fontSize: 16, color: "#fff" }}>Dr. Sarah Al-Amin</div>
              <div style={{ fontFamily: "Arial, sans-serif", fontSize: 10, color: "#ffcccc", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>PhD · Applied Linguistics</div>
            </div>
          </div>

          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ borderBottom: "2px solid #1a1a1a", paddingBottom: 10, marginBottom: 24 }}>
              <span className="uppercase-label" style={{ color: "#1a1a1a" }}>About the Professor</span>
            </div>
            <h2 style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "clamp(22px, 3vw, 32px)", fontWeight: "normal",
              color: "#1a1a1a", lineHeight: 1.2, marginBottom: 18,
            }}>
              A decade of teaching language —<br />now available online.
            </h2>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#555", lineHeight: 1.8, marginBottom: 14 }}>
              Dr. Al-Amin holds a PhD in Applied Linguistics and has taught at the
              university level for over ten years. Her research spans second language
              acquisition, academic discourse, and EFL pedagogy — published in leading
              international journals.
            </p>
            <p style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#555", lineHeight: 1.8, marginBottom: 28 }}>
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

      {/* ─── LIVE SESSIONS BANNER WITH PHOTO ──────────────────── */}
      <section style={{ position: "relative", background: "#111", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src={PHOTOS.webinar}
            alt="Students in an interactive online session"
            fill
            style={{ objectFit: "cover", objectPosition: "center", opacity: 0.3 }}
            sizes="100vw"
          />
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(107,26,26,0.82)",
        }} />
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
          <div className="grid gap-10 md:grid-cols-2" style={{ alignItems: "center" }}>
            <div>
              <div className="uppercase-label" style={{ color: "#ffcccc", marginBottom: 12 }}>Live &amp; Interactive</div>
              <h2 style={{
                fontFamily: "'Times New Roman', serif",
                fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: "normal",
                color: "#fff", lineHeight: 1.2, marginBottom: 16,
              }}>
                More than recorded videos.<br />Learn in real time.
              </h2>
              <p style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#ffcccc", lineHeight: 1.75 }}>
                Join live Zoom classes, expert webinars, and open Q&A sessions
                directly with Dr. Al-Amin. All sessions are recorded for enrolled
                students to revisit at any time.
              </p>
            </div>
            <div>
              {[
                { icon: "▶", label: "Video Lectures", desc: "Structured lessons — watch anytime, at your own pace" },
                { icon: "⬤", label: "Live Zoom Classes", desc: "Interactive, real-time sessions with Dr. Al-Amin" },
                { icon: "🎙", label: "Expert Webinars", desc: "Deep-dive open sessions, recorded for later viewing" },
                { icon: "✍", label: "Assignment Feedback", desc: "Personalised written feedback on your submitted work" },
              ].map((item, i) => (
                <div key={item.label} style={{
                  display: "flex", gap: 16, alignItems: "flex-start",
                  padding: "14px 0",
                  borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.12)" : "none",
                }}>
                  <span style={{ color: "#ffdddd", fontSize: 16, minWidth: 20, marginTop: 1 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontFamily: "Arial, sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontFamily: "Arial, sans-serif", fontSize: 12, color: "#ffcccc" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 22 }}>
                <Link href="/webinars" className="btn-primary" style={{ background: "#fff", color: "#6b1a1a" }}>View Session Schedule</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUOTE ─────────────────────────────────────────────── */}
      <section style={{ background: "#1a1a1a", padding: "52px 24px", borderTop: "3px solid #6b1a1a" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{
            fontFamily: "'Times New Roman', serif",
            fontSize: "clamp(18px, 2.5vw, 26px)",
            fontStyle: "italic", color: "#e8e4d8",
            lineHeight: 1.65, marginBottom: 24,
          }}>
            "I built this platform because I believe every learner deserves access
            to the same quality of instruction that universities offer — and sometimes more.
            Language is the foundation of thought. When you master it, everything else becomes possible."
          </div>
          <div style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 11, letterSpacing: "0.1em",
            textTransform: "uppercase", color: "#999",
          }}>
            Dr. Sarah Al-Amin · PhD Applied Linguistics · Founder &amp; Lead Instructor
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "52px 24px" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 24,
          borderTop: "1px solid #d0cdc8", paddingTop: 40,
        }}>
          <div>
            <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 10 }}>Start Learning Today</div>
            <h2 style={{ fontFamily: "'Times New Roman', serif", fontSize: "clamp(22px, 3vw, 34px)", fontWeight: "normal", color: "#1a1a1a" }}>
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
