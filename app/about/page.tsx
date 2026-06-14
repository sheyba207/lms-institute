// app/about/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { instructors } from "@/data/instructors";

export const metadata: Metadata = {
  title: "About Dr. Sarah Al-Amin | PhD English Language & Linguistics",
  description:
    "Meet Dr. Sarah Al-Amin — PhD in Applied Linguistics, university professor, researcher, and founder of this English language learning platform.",
};

export default function AboutPage() {
  const prof = instructors[0];

  return (
    <div style={{ maxWidth: 860, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
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
          About the Professor
        </div>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "#1a1a2e",
            lineHeight: 1.15,
            marginBottom: 14,
          }}
        >
          {prof.name}
        </h1>
        <p
          style={{
            fontFamily: "system-ui, sans-serif",
            fontSize: 14,
            color: "#c9a84c",
            fontStyle: "italic",
          }}
        >
          {prof.credentials}
        </p>
      </div>

      {/* Profile card */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #2d2d4e 100%)",
          borderRadius: 16,
          padding: "36px 40px",
          display: "flex",
          alignItems: "center",
          gap: 32,
          marginBottom: 56,
          flexWrap: "wrap",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Georgia, serif",
            fontSize: 40,
            fontWeight: 700,
            color: "#1a1a2e",
            flexShrink: 0,
            border: "3px solid rgba(201,168,76,0.4)",
          }}
        >
          S
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 22,
              fontWeight: 700,
              color: "#faf8f2",
              marginBottom: 6,
            }}
          >
            {prof.name}
          </div>
          <div
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: 13,
              color: "#c9a84c",
              marginBottom: 18,
            }}
          >
            {prof.title}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              fontFamily: "system-ui, sans-serif",
              fontSize: 12,
            }}
          >
            {[
              { label: "ResearchGate", href: prof.social?.researchgate },
              { label: "Google Scholar", href: prof.social?.scholar },
              { label: "LinkedIn", href: prof.social?.linkedin },
              { label: "YouTube", href: prof.social?.youtube },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#c9a84c",
                  border: "1px solid rgba(201,168,76,0.4)",
                  padding: "4px 12px",
                  borderRadius: 4,
                  textDecoration: "none",
                }}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div style={{ marginBottom: 56 }}>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 22,
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: 20,
            paddingBottom: 12,
            borderBottom: "2px solid #c9a84c",
            display: "inline-block",
          }}
        >
          Biography
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {prof.bio.map((para, i) => (
            <p
              key={i}
              style={{
                fontFamily: "Georgia, serif",
                fontSize: 16,
                color: "#3d3d5c",
                lineHeight: 1.85,
              }}
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Areas of Expertise */}
      <div
        style={{
          background: "#fff",
          border: "1px solid #e8e4d8",
          borderRadius: 12,
          padding: "32px 36px",
          marginBottom: 48,
        }}
      >
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 20,
            fontWeight: 700,
            color: "#1a1a2e",
            marginBottom: 20,
          }}
        >
          Areas of Expertise
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {prof.expertise.map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "system-ui, sans-serif",
                fontSize: 13,
                background: "rgba(26, 26, 46, 0.06)",
                color: "#1a1a2e",
                border: "1px solid rgba(26,26,46,0.12)",
                padding: "6px 16px",
                borderRadius: 100,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Publications */}
      {prof.publications && (
        <div style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 20,
              fontWeight: 700,
              color: "#1a1a2e",
              marginBottom: 20,
              paddingBottom: 12,
              borderBottom: "2px solid #c9a84c",
              display: "inline-block",
            }}
          >
            Selected Publications
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {prof.publications.map((pub, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  padding: "14px 0",
                  borderBottom: "1px solid #f0ece0",
                }}
              >
                <span
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 13,
                    color: "#c9a84c",
                    fontWeight: 700,
                    minWidth: 24,
                    marginTop: 1,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: 14,
                    color: "#3d3d5c",
                    lineHeight: 1.65,
                  }}
                >
                  {pub}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mission statement */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #2d2d4e 100%)",
          borderRadius: 16,
          padding: "40px 48px",
          marginBottom: 24,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -20,
            right: 30,
            fontSize: 150,
            color: "rgba(201,168,76,0.06)",
            fontFamily: "Georgia, serif",
            pointerEvents: "none",
          }}
        >
          "
        </div>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 18,
            fontWeight: 700,
            color: "#c9a84c",
            marginBottom: 16,
          }}
        >
          Teaching Philosophy
        </h2>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 17,
            fontStyle: "italic",
            color: "#d8d4ec",
            lineHeight: 1.75,
            marginBottom: 24,
          }}
        >
          "Every student arrives with a language — the language of their experience,
          their culture, their thinking. My job is not to replace that, but to expand it.
          To give each person the tools to say what they already know, more precisely,
          more powerfully, and in more contexts than they imagined possible."
        </p>
        <Link
          href="/contact"
          style={{
            fontFamily: "system-ui, sans-serif",
            fontWeight: 600,
            fontSize: 13,
            background: "linear-gradient(135deg, #c9a84c, #e8cc7a)",
            color: "#1a1a2e",
            padding: "10px 22px",
            borderRadius: 6,
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Get in Touch →
        </Link>
      </div>
    </div>
  );
}
