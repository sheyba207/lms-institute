// app/dashboard/page.tsx
import { Metadata } from "next";
import { DashboardClient } from "./DashboardClient";

export const metadata: Metadata = {
  title: "My Dashboard | Dr. Sheema Ali Gohar",
  description: "Your personal learning dashboard — course progress, live session links, and course materials.",
};

export default function DashboardPage() {
  return <DashboardClient />;
}
