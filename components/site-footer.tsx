// components/site-footer.tsx
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer style={{ borderTop: "3px solid #6b1a1a", background: "#1a1a1a", color: "#ccc" }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px 48px" }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 2" }} className="md:col-span-2">
            <div style={{
              fontFamily: "'Times New Roman', serif", fontSize: 20,
              color: "#fff", marginBottom: 8,
            }}>Dr. Sarah Al-Amin</div>
            <div style={{
              fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#aaa", marginBottom: 16,
            }}>PhD · English Language &amp; Applied Linguistics</div>
            <p style={{ fontSize: 13, color: "#999", lineHeight: 1.7, maxWidth: 340 }}>
              Educating and inspiring students through language — online courses,
              live sessions, and research in applied linguistics.
            </p>
          </div>

          {/* Platform */}
          <div>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "#aaa", marginBottom: 14,
              paddingBottom: 10, borderBottom: "1px solid #333",
            }}>Platform</div>
            {[
              { href: "/courses", label: "All Courses" },
              { href: "/webinars", label: "Live Sessions & Webinars" },
              { href: "/dashboard", label: "Student Dashboard" },
              { href: "/about", label: "About Dr. Al-Amin" },
              { href: "/research", label: "Research & Publications" },
            ].map(l => (
              <div key={l.href} style={{ marginBottom: 9 }}>
                <Link href={l.href} style={{ fontSize: 13, color: "#aaa", textDecoration: "none" }}
                  className="hover:text-white transition-colors">{l.label}</Link>
              </div>
            ))}
          </div>

          {/* Academic */}
          <div>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "#aaa", marginBottom: 14,
              paddingBottom: 10, borderBottom: "1px solid #333",
            }}>Academic Profiles</div>
            {[
              { href: "https://scholar.google.com/", label: "Google Scholar" },
              { href: "https://researchgate.net/", label: "ResearchGate" },
              { href: "https://linkedin.com/", label: "LinkedIn" },
              { href: "https://youtube.com/", label: "YouTube Channel" },
            ].map(l => (
              <div key={l.label} style={{ marginBottom: 9 }}>
                <a href={l.href} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, color: "#aaa", textDecoration: "none" }}
                  className="hover:text-white transition-colors">{l.label} ↗</a>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
              textTransform: "uppercase", color: "#aaa", marginBottom: 14,
              paddingBottom: 10, borderBottom: "1px solid #333",
            }}>Contact</div>
            <div style={{ fontSize: 13, color: "#999", lineHeight: 1.8 }}>
              <div>sarah.alamin@university.edu</div>
              <div style={{ marginTop: 8 }}>Office Hours: By Appointment</div>
              <div style={{ marginTop: 8 }}>Zoom sessions available</div>
              <div style={{ marginTop: 16 }}>
                <Link href="/contact" style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "#fff",
                  background: "#6b1a1a", padding: "8px 16px",
                  textDecoration: "none", display: "inline-block",
                }}>Send a Message</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #333" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "16px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: 12, color: "#666" }}>
            © {new Date().getFullYear()} Dr. Sarah Al-Amin. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { href: "/contact", label: "Privacy" },
              { href: "/contact", label: "Terms of Use" },
              { href: "/contact", label: "Contact Us" },
            ].map(l => (
              <Link key={l.label} href={l.href}
                style={{ fontSize: 12, color: "#666", textDecoration: "none" }}
                className="hover:text-white transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
