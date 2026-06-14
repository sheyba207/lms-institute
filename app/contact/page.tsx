// app/contact/page.tsx
"use client";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
      {/* Title bar */}
      <div style={{ borderBottom: "1px solid #d0cdc8", padding: "32px 0 20px", marginBottom: 40 }}>
        <div className="uppercase-label" style={{ color: "#6b1a1a", marginBottom: 8 }}>Get in Touch</div>
        <h1 style={{
          fontFamily: "'Times New Roman', serif",
          fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "normal", color: "#1a1a1a",
        }}>Contact Dr. Al-Amin</h1>
        <p style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#666", marginTop: 8, maxWidth: 560 }}>
          Questions about courses, enrolment, research collaboration, or conference invitations.
          Dr. Al-Amin reads every message personally and responds within 48 hours.
        </p>
      </div>

      <div style={{ display: "grid", gap: "0 64px" }} className="grid-cols-1 md:grid-cols-[3fr,2fr]">

        {/* Form */}
        <div>
          {sent ? (
            <div style={{
              border: "1px solid #d0cdc8", padding: "48px",
              textAlign: "center",
            }}>
              <div style={{
                width: 56, height: 56, border: "2px solid #4a6a2a",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px", fontSize: 24, color: "#4a6a2a",
              }}>✓</div>
              <h2 style={{
                fontFamily: "'Times New Roman', serif", fontSize: 24,
                fontWeight: "normal", color: "#1a1a1a", marginBottom: 10,
              }}>Message Sent</h2>
              <p style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#666" }}>
                Thank you. Dr. Al-Amin will reply within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
              <div style={{ display: "grid", gap: "20px 24px", marginBottom: 20 }} className="grid-cols-1 md:grid-cols-2">
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "you@example.com" },
                ].map(f => (
                  <div key={f.id}>
                    <label style={{
                      display: "block", fontFamily: "Arial, sans-serif",
                      fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                      textTransform: "uppercase", color: "#444", marginBottom: 6,
                    }}>{f.label}</label>
                    <input type={f.type} required placeholder={f.placeholder}
                      value={(form as any)[f.id]}
                      onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                      style={{
                        width: "100%", fontFamily: "Arial, sans-serif", fontSize: 14,
                        border: "1px solid #ccc", padding: "10px 12px",
                        color: "#1a1a1a", background: "#fff", outline: "none",
                      }} />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{
                  display: "block", fontFamily: "Arial, sans-serif",
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: "#444", marginBottom: 6,
                }}>Subject</label>
                <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                  style={{
                    width: "100%", fontFamily: "Arial, sans-serif", fontSize: 14,
                    border: "1px solid #ccc", padding: "10px 12px",
                    color: "#1a1a1a", background: "#fff", outline: "none",
                  }}>
                  <option value="">Select a topic…</option>
                  <option>Course Enquiry</option>
                  <option>IELTS / TOEFL Preparation</option>
                  <option>Live Session / Webinar</option>
                  <option>Research Collaboration</option>
                  <option>University / Conference Invitation</option>
                  <option>Other</option>
                </select>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{
                  display: "block", fontFamily: "Arial, sans-serif",
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
                  textTransform: "uppercase", color: "#444", marginBottom: 6,
                }}>Message</label>
                <textarea required rows={7} value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your learning goals, questions, or collaboration idea…"
                  style={{
                    width: "100%", fontFamily: "Arial, sans-serif", fontSize: 14,
                    border: "1px solid #ccc", padding: "12px 12px",
                    color: "#1a1a1a", background: "#fff", outline: "none",
                    resize: "vertical", lineHeight: 1.7,
                  }} />
              </div>

              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div>
          {/* Contact info */}
          <div style={{ border: "1px solid #d0cdc8", marginBottom: 20 }}>
            <div style={{ background: "#6b1a1a", padding: "12px 20px" }}>
              <span className="uppercase-label" style={{ color: "#fff" }}>Contact Information</span>
            </div>
            <div style={{ padding: "16px 20px" }}>
              {[
                { label: "Email", value: "sarah.alamin@university.edu" },
                { label: "Office Hours", value: "By appointment (Zoom)" },
                { label: "Response Time", value: "Within 48 hours" },
                { label: "Location", value: "University Campus / Online" },
              ].map((item, i, arr) => (
                <div key={item.label} style={{
                  padding: "10px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid #ebebeb" : "none",
                }}>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", marginBottom: 3 }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: "Arial, sans-serif", fontSize: 14, color: "#1a1a1a" }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic profiles */}
          <div style={{ border: "1px solid #d0cdc8", marginBottom: 20 }}>
            <div style={{ background: "#222", padding: "12px 20px" }}>
              <span className="uppercase-label" style={{ color: "#fff" }}>Academic Profiles</span>
            </div>
            <div style={{ padding: "12px 20px" }}>
              {[
                { label: "Google Scholar", href: "https://scholar.google.com/" },
                { label: "ResearchGate", href: "https://researchgate.net/" },
                { label: "LinkedIn", href: "https://linkedin.com/" },
                { label: "YouTube Channel", href: "https://youtube.com/" },
              ].map((l, i) => (
                <div key={l.label} style={{ borderBottom: i < 3 ? "1px solid #ebebeb" : "none" }}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "flex", justifyContent: "space-between",
                      padding: "10px 0", fontFamily: "Arial, sans-serif",
                      fontSize: 13, color: "#333", textDecoration: "none",
                    }}>
                    <span>{l.label}</span>
                    <span style={{ color: "#6b1a1a" }}>↗</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <Link href="/courses" className="btn-outline" style={{ display: "block", textAlign: "center" }}>
            Browse All Courses
          </Link>
        </div>
      </div>
    </div>
  );
}
