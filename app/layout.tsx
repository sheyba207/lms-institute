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
  keywords: [
    "English language courses",
    "academic writing",
    "IELTS preparation",
    "TOEFL preparation",
    "applied linguistics",
    "PhD professor",
    "ESL courses",
    "online English classes",
    "language learning",
  ],
  openGraph: {
    title: "Dr. Sarah Al-Amin — English Language & Linguistics",
    description:
      "Expert-led English language and linguistics courses from a PhD professor. Live sessions, webinars, video lectures, and personalised feedback.",
    siteName: "Dr. Sarah Al-Amin",
    locale: "en_US",
    type: "website",
  },
};

const BASE_URL = "https://your-domain.com";

function JsonLdPerson() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Sarah Al-Amin",
    jobTitle: "Assistant Professor of English Language & Linguistics",
    description:
      "PhD in Applied Linguistics. Educator, researcher, and online course instructor.",
    url: BASE_URL,
    sameAs: [
      "https://linkedin.com/",
      "https://scholar.google.com/",
      "https://researchgate.net/",
    ],
    knowsAbout: [
      "Applied Linguistics",
      "Academic Writing",
      "English as a Second Language",
      "Discourse Analysis",
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
      <body className="min-h-screen" style={{ background: "#faf8f2", color: "#3d3d5c" }}>
        <AuthProvider>
          <SiteHeader />
          <main className="mx-auto max-w-6xl px-4 pb-24 pt-10">
            {children}
          </main>
          <SiteFooter />
          <JsonLdPerson />
        </AuthProvider>
      </body>
    </html>
  );
}
