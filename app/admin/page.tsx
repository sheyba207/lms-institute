// app/admin/page.tsx
import { Metadata } from "next";
import { AdminClient } from "./AdminClient";

export const metadata: Metadata = {
  title: "Admin · Courses | LearnSphere Institute",
  description:
    "Internal admin view for managing courses, lessons, and instructors.",
};

export default function AdminPage() {
  return <AdminClient />;
}
