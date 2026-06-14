// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AuthProvider } from "@/components/auth-provider";

export const metadata: Metadata = {
  title: "Dr. Sarah Al-Amin | English Language & Linguistics",
  description:
    "PhD in Applied Linguistics. University professor, researcher, and educator. Online courses in academic writing, IELTS/TOEFL preparation, linguistics, and professional English communication.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ background: "#fff", color: "#333" }}>
        <AuthProvider>
          <SiteHeader />
          <main style={{ minHeight: "60vh" }}>
            {children}
          </main>
          <SiteFooter />
        </AuthProvider>
      </body>
    </html>
  );
}
