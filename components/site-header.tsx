// components/site-header.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";
import { supabase } from "@/lib/supabaseClient";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const { data, error } = await supabase.from("courses").select("*");

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, login, logout } = useAuth();

  const handleStartFree = () => {
    // Fake login, then go to dashboard
    login({ name: "Student" });
    router.push("/dashboard");
  };

  const handleLogin = () => {
    // For now, same as Start free
    login({ name: "Student" });
    router.push("/dashboard");
  };

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="w-full border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-emerald-400/90 shadow-lg shadow-emerald-500/40" />
          <span className="text-lg font-semibold tracking-tight">
            LearnSphere Institute
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  active ? "text-white" : "hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Auth CTAs */}
        <div className="flex items-center gap-3 text-sm">
          {user ? (
            <>
              <span className="hidden text-slate-300 md:inline">
                Hi, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-full px-4 py-2 text-sm text-slate-200 hover:bg-slate-900/80"
              >
                Log out
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleLogin}
                className="rounded-full px-4 py-2 text-sm text-slate-200 hover:bg-slate-900/80"
              >
                Log in
              </button>
              <button
                onClick={handleStartFree}
                className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
              >
                Start free
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
