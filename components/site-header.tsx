"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { useState } from "react";

const nav = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/webinars", label: "Live Sessions" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, login, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const doLogin = () => { login({ name: "Student" }); router.push("/dashboard"); };
  const doLogout = () => { logout(); router.push("/"); };

  return (
    <header>
      {/* Utility bar */}
      <div style={{ background: "#0F1C35", height: 38 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em" }}>
            Department of English Language &amp; Applied Linguistics
          </span>
          <div style={{ display: "flex" }}>
            {user ? (
              <>
                <Link href="/dashboard" style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", padding: "0 16px", lineHeight: "38px", textDecoration: "none", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>My Dashboard</Link>
                <button onClick={doLogout} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", padding: "0 16px", lineHeight: "38px", background: "none", border: "none", borderLeft: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>Log Out</button>
              </>
            ) : (
              <>
                <button onClick={doLogin} style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", padding: "0 16px", lineHeight: "38px", background: "none", border: "none", borderLeft: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>Student Login</button>
                <Link href="/courses" style={{ fontFamily: "'Source Sans 3',sans-serif", fontSize: 12, fontWeight: 700, color: "#0F1C35", padding: "0 18px", lineHeight: "38px", background: "#C8A96E", textDecoration: "none", letterSpacing: "0.06em" }}>Enrol Now</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Logo + Nav bar */}
      <div style={{ background: "#fff", borderBottom: "1px solid #D8D4CC" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", height: 76 }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 48, height: 48, background: "#1B2A4A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: "#C8A96E", fontWeight: 600, letterSpacing: "0.02em" }}>SAG</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, color: "#0F1C35", lineHeight: 1.15, fontWeight: 600 }}>Dr. Sheema Ali Gohar</div>
              <div style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 11, color: "#8C8C9E", letterSpacing: "0.09em", textTransform: "uppercase", marginTop: 2 }}>PhD · English Language &amp; Applied Linguistics</div>
            </div>
          </Link>

          <nav className="hidden md:flex" style={{ height: 76, alignItems: "stretch", display: "flex" }}>
            {nav.map(item => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href} style={{ fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, fontWeight: active ? 600 : 400, color: active ? "#1B2A4A" : "#2D3142", padding: "0 20px", display: "flex", alignItems: "center", borderBottom: active ? "3px solid #1B2A4A" : "3px solid transparent", textDecoration: "none", transition: "all 0.15s ease", whiteSpace: "nowrap" }}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden" style={{ background: "none", border: "none", cursor: "pointer", padding: 6 }}>
            <div style={{ width: 22, height: 1.5, background: "#1B2A4A", marginBottom: 5 }} />
            <div style={{ width: 22, height: 1.5, background: "#1B2A4A", marginBottom: 5 }} />
            <div style={{ width: 22, height: 1.5, background: "#1B2A4A" }} />
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: "#fff", borderBottom: "1px solid #D8D4CC" }}>
          {nav.map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "14px 24px", fontFamily: "'Source Sans 3', sans-serif", fontSize: 14, color: "#1B2A4A", borderBottom: "1px solid #ECEAE4", textDecoration: "none" }}>{item.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
