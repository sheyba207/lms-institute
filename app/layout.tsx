import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AuthProvider } from "@/components/auth-provider";

export const metadata: Metadata = {
  title: "Dr. Sheema Ali Gohar | English Language & Linguistics",
  description: "PhD in Applied Linguistics. University professor, researcher, and educator. Online courses in academic writing, IELTS/TOEFL preparation, linguistics, and English communication.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <AuthProvider>
          <SiteHeader />
          <main style={{ minHeight: "60vh" }}>{children}</main>
          <SiteFooter />
        </AuthProvider>
      </body>
    </html>
  );
}
