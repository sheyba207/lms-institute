// components/site-footer.tsx
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "#1a1a2e",
        borderTop: "2px solid #c9a84c",
        color: "#9898b8",
        fontFamily: "system-ui, sans-serif",
        fontSize: 13,
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: 18,
                color: "#faf8f2",
                marginBottom: 6,
              }}
            >
              Dr. Sarah Al-Amin
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#c9a84c",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              PhD · Applied Linguistics · English Language
            </div>
            <p style={{ lineHeight: 1.7, maxWidth: 340 }}>
              Teaching the language of thought, research, and human connection —
              one course at a time. Reach out to collaborate, enrol, or simply learn more.
            </p>
          </div>

          {/* Links */}
          <div>
            <div
              style={{
                color: "#c9a84c",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Platform
            </div>
            <div className="space-y-2">
              {[
                { href: "/courses", label: "All Courses" },
                { href: "/webinars", label: "Live Sessions & Webinars" },
                { href: "/dashboard", label: "Student Dashboard" },
                { href: "/about", label: "About Dr. Al-Amin" },
              ].map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    style={{ color: "#9898b8", textDecoration: "none" }}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div
              style={{
                color: "#c9a84c",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Connect
            </div>
            <div className="space-y-2">
              {[
                { href: "/contact", label: "Send a Message" },
                { href: "https://linkedin.com/", label: "LinkedIn Profile" },
                { href: "https://scholar.google.com/", label: "Google Scholar" },
                { href: "https://researchgate.net/", label: "ResearchGate" },
                { href: "https://youtube.com/", label: "YouTube Channel" },
              ].map((item) => (
                <div key={item.href}>
                  <a
                    href={item.href}
                    style={{ color: "#9898b8", textDecoration: "none" }}
                    className="hover:text-amber-300 transition-colors"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #2d2d4e",
            marginTop: 40,
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span>© {new Date().getFullYear()} Dr. Sarah Al-Amin. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/contact" style={{ color: "#9898b8", textDecoration: "none" }} className="hover:text-amber-300 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" style={{ color: "#9898b8", textDecoration: "none" }} className="hover:text-amber-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
