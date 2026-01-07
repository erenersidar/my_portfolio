import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apply10.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/create-profile/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
