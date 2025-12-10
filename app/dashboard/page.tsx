// app/dashboard/page.tsx
import { Metadata } from "next";
import { DashboardClient } from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard | LearnSphere Institute",
  description:
    "Your learning dashboard with enrolled courses, progress, and next lessons.",
};

export default function DashboardPage() {
  return <DashboardClient />;
}
