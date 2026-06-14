// components/site-header.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { useState } from "react";

const mainNav = [
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
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogin = () => { login({ name: "Student" }); router.push("/dashboard"); };
  const handleLogout = () => { logout(); router.push("/"); };

  return (
    <header style={{ borderBottom: "1px solid #d0cdc8" }}>

      {/* ── TOP UTILITY BAR ── */}
      <div style={{ background: "#222", borderBottom: "none" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          height: 36,
        }}>
          <span style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.04em" }}>
            Department of English Language &amp; Applied Linguistics
          </span>
          <div style={{ display: "flex", gap: 0 }}>
            {user ? (
              <>
                <Link href="/dashboard" style={{
                  fontSize: 11, color: "#ccc", padding: "0 14px", lineHeight: "36px",
                  borderLeft: "1px solid #444", textDecoration: "none",
                }}>My Dashboard</Link>
                <button onClick={handleLogout} style={{
                  fontSize: 11, color: "#ccc", padding: "0 14px", lineHeight: "36px",
                  borderLeft: "1px solid #444", background: "none", border: "none",
                  borderLeft: "1px solid #444", cursor: "pointer",
                }}>Log Out</button>
              </>
            ) : (
              <>
                <button onClick={handleLogin} style={{
                  fontSize: 11, color: "#ccc", padding: "0 14px", lineHeight: "36px",
                  background: "none", border: "none", borderLeft: "1px solid #444",
                  cursor: "pointer",
                }}>Student Login</button>
                <Link href="/courses" style={{
                  fontSize: 11, color: "#fff", padding: "0 16px", lineHeight: "36px",
                  background: "#6b1a1a", textDecoration: "none", fontWeight: 700,
                  letterSpacing: "0.06em",
                }}>Enrol Now</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── LOGO BAR ── */}
      <div style={{ background: "#fff" }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          height: 80,
        }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 16 }}>
            {/* Monogram mark */}
            <div style={{
              width: 52, height: 52,
              border: "2px solid #6b1a1a",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: "'Times New Roman', serif",
                fontSize: 20, fontWeight: "normal",
                color: "#6b1a1a", letterSpacing: "-0.02em",
              }}>SA</span>
            </div>
            <div>
              <div style={{
                fontFamily: "'Times New Roman', Times, serif",
                fontSize: 20, color: "#1a1a1a", lineHeight: 1.15, fontWeight: "normal",
              }}>
                Dr. Sarah Al-Amin
              </div>
              <div style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 11, color: "#666", letterSpacing: "0.08em",
                textTransform: "uppercase", marginTop: 2,
              }}>
                PhD · English Language &amp; Applied Linguistics
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "stretch", height: 80 }} className="hidden md:flex">
            {mainNav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href} style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: 13, color: active ? "#6b1a1a" : "#1a1a1a",
                  padding: "0 18px",
                  display: "flex", alignItems: "center",
                  borderBottom: active ? "2px solid #6b1a1a" : "2px solid transparent",
                  textDecoration: "none",
                  transition: "color 0.15s, border-color 0.15s",
                  whiteSpace: "nowrap",
                }}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}
          >
            <div style={{ width: 24, height: 2, background: "#333", marginBottom: 5 }} />
            <div style={{ width: 24, height: 2, background: "#333", marginBottom: 5 }} />
            <div style={{ width: 24, height: 2, background: "#333" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #ebebeb" }}>
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block", padding: "13px 24px",
                fontFamily: "Arial, sans-serif", fontSize: 14, color: "#1a1a1a",
                borderBottom: "1px solid #ebebeb", textDecoration: "none",
              }}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
