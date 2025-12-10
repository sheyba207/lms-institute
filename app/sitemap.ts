// app/sitemap.ts
import type { MetadataRoute } from "next";
import { courses } from "@/data/courses";

const BASE_URL = "https://your-domain.com"; // ← change when you deploy

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/courses",
    "/dashboard",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
    url: `${BASE_URL}/courses/${course.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...courseRoutes];
}
