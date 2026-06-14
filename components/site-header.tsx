// components/site-header.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/webinars", label: "Live Sessions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, login, logout } = useAuth();

  const handleLogin = () => {
    login({ name: "Student" });
    router.push("/dashboard");
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header
      style={{
        background: "#1a1a2e",
        borderBottom: "2px solid #c9a84c",
      }}
      className="w-full sticky top-0 z-50"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            style={{
              width: 38,
              height: 38,
              background: "linear-gradient(135deg, #c9a84c 0%, #e8cc7a 100%)",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Georgia, serif",
              fontWeight: "bold",
              fontSize: 18,
              color: "#1a1a2e",
              flexShrink: 0,
            }}
          >
            Dr
          </div>
          <div>
            <div
              style={{
                fontFamily: "Georgia, serif",
                fontWeight: 700,
                fontSize: 15,
                color: "#faf8f2",
                lineHeight: 1.1,
              }}
            >
              Dr. Sarah Al-Amin
            </div>
            <div
              style={{
                fontSize: 10,
                color: "#c9a84c",
                fontFamily: "system-ui, sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              English Language & Linguistics
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                  padding: "6px 14px",
                  borderRadius: 4,
                  color: active ? "#c9a84c" : "#c8c8e0",
                  borderBottom: active ? "2px solid #c9a84c" : "2px solid transparent",
                  transition: "color 0.15s ease",
                  textDecoration: "none",
                }}
                className="hover:text-amber-300"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Auth */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                href="/dashboard"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                  color: "#c8c8e0",
                  textDecoration: "none",
                }}
                className="hidden md:inline hover:text-amber-300"
              >
                My Learning
              </Link>
              <button
                onClick={handleLogout}
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                  color: "#c8c8e0",
                  background: "transparent",
                  border: "1px solid #4a4a6a",
                  padding: "5px 14px",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                  color: "#c8c8e0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px 10px",
                }}
              >
                Log in
              </button>
              <Link
                href="/courses"
                style={{
                  fontFamily: "system-ui, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #c9a84c 0%, #e8cc7a 100%)",
                  color: "#1a1a2e",
                  padding: "7px 18px",
                  borderRadius: 4,
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Explore Courses
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
