// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { AuthProvider } from "@/components/auth-provider";

export const metadata: Metadata = {
  title: "LearnSphere Institute",
  description:
    "Career-focused learning with live classes, projects, and certificates in programming, analytics, and lab skills.",
};

const BASE_URL = "https://your-domain.com";

function JsonLdOrganization() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "LearnSphere Institute",
    url: BASE_URL,
    description:
      "Career-focused online institute offering practical courses in programming, analytics, lab chemistry, and automation.",
    sameAs: [
      "https://www.linkedin.com/",
      "https://www.youtube.com/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) } as any}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        <AuthProvider>
          <SiteHeader />
          <main className="mx-auto max-w-6xl px-4 pb-24 pt-12">
            {children}
          </main>
          <JsonLdOrganization />
        </AuthProvider>
      </body>
    </html>
  );
}
