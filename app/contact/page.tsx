// app/contact/page.tsx
"use client";
import { Metadata } from "next";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission placeholder
    setSent(true);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 48, maxWidth: 700 }}>
        <div
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 11,
            fontWeight: 700,
            color: "#c9a84c",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Get in Touch
        </div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            color: "#1a1a2e",
            lineHeight: 1.15,
            marginBottom: 14,
          }}
        >
          Contact Dr. Al-Amin
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 15,
            color: "#7878a0",
            lineHeight: 1.7,
          }}
        >
          Questions about courses, enrolment, collaboration, or research? Dr. Al-Amin
          reads every message personally and responds within 48 hours.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-[3fr,2fr]">
        {/* Form */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e8e4d8",
            borderRadius: 14,
            padding: "36px 40px",
          }}
        >
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#f0f8f0",
                  border: "2px solid #4a7c59",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  margin: "0 auto 20px",
                }}
              >
                ✓
              </div>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#1a1a2e",
                  marginBottom: 10,
                }}
              >
                Message Sent!
              </h2>
              <p
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 14,
                  color: "#7878a0",
                  lineHeight: 1.7,
                }}
              >
                Thank you for reaching out. Dr. Al-Amin will reply within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#3d3d5c",
                      marginBottom: 6,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: "100%",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 14,
                      border: "1px solid #d8d4c8",
                      borderRadius: 6,
                      padding: "10px 14px",
                      color: "#1a1a2e",
                      background: "#faf8f2",
                      outline: "none",
                    }}
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#3d3d5c",
                      marginBottom: 6,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: "100%",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 14,
                      border: "1px solid #d8d4c8",
                      borderRadius: 6,
                      padding: "10px 14px",
                      color: "#1a1a2e",
                      background: "#faf8f2",
                      outline: "none",
                    }}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#3d3d5c",
                    marginBottom: 6,
                    letterSpacing: "0.04em",
                  }}
                >
                  Subject
                </label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={{
                    width: "100%",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 14,
                    border: "1px solid #d8d4c8",
                    borderRadius: 6,
                    padding: "10px 14px",
                    color: "#1a1a2e",
                    background: "#faf8f2",
                    outline: "none",
                  }}
                >
                  <option value="">Select a topic…</option>
                  <option value="course-enquiry">Course Enquiry</option>
                  <option value="ielts-toefl">IELTS / TOEFL Preparation</option>
                  <option value="webinar">Live Session / Webinar</option>
                  <option value="research-collab">Research Collaboration</option>
                  <option value="university-invite">University / Conference Invite</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#3d3d5c",
                    marginBottom: 6,
                    letterSpacing: "0.04em",
                  }}
                >
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{
                    width: "100%",
                    fontFamily: "Georgia, serif",
                    fontSize: 14,
                    border: "1px solid #d8d4c8",
                    borderRadius: 6,
                    padding: "12px 14px",
                    color: "#1a1a2e",
                    background: "#faf8f2",
                    outline: "none",
                    resize: "vertical",
                    lineHeight: 1.7,
                  }}
                  placeholder="Tell Dr. Al-Amin about your learning goals, questions, or collaboration idea…"
                />
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
                  color: "#1a1a2e",
                  padding: "13px 28px",
                  borderRadius: 6,
                  border: "none",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                }}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* Sidebar info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {/* Quick info cards */}
          {[
            {
              icon: "📧",
              label: "Email",
              value: "sarah.alamin@university.edu",
              sub: "Responds within 48 hours",
            },
            {
              icon: "🎓",
              label: "Office Hours",
              value: "By appointment",
              sub: "Via Zoom — schedule via email",
            },
            {
              icon: "🌍",
              label: "Location",
              value: "University Campus",
              sub: "Also available fully online",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "#fff",
                border: "1px solid #e8e4d8",
                borderRadius: 10,
                padding: "18px 20px",
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              <span style={{ fontSize: 20, marginTop: 2 }}>{item.icon}</span>
              <div>
                <div
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#c9a84c",
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 14,
                    color: "#1a1a2e",
                    fontWeight: 500,
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 12,
                    color: "#9898b8",
                    marginTop: 2,
                  }}
                >
                  {item.sub}
                </div>
              </div>
            </div>
          ))}

          {/* Social */}
          <div
            style={{
              background: "linear-gradient(135deg, #1a1a2e, #2d2d4e)",
              borderRadius: 10,
              padding: "20px 22px",
            }}
          >
            <div
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#c9a84c",
                marginBottom: 14,
              }}
            >
              Academic Profiles
            </div>
            {[
              { label: "Google Scholar", href: "https://scholar.google.com/" },
              { label: "ResearchGate", href: "https://researchgate.net/" },
              { label: "LinkedIn", href: "https://linkedin.com/" },
              { label: "YouTube Channel", href: "https://youtube.com/" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                  color: "#c8c8e0",
                  textDecoration: "none",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
                className="hover:text-amber-300 transition-colors"
              >
                <span>{link.label}</span>
                <span style={{ color: "#c9a84c" }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
