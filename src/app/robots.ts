import type { MetadataRoute } from "next";

// Indexing stays off until the production domain sets NEXT_PUBLIC_INDEXABLE=true.
export default function robots(): MetadataRoute.Robots {
  const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";
  const base = process.env.NEXT_PUBLIC_SITE_URL;
  return indexable
    ? { rules: { userAgent: "*", allow: "/" }, ...(base ? { sitemap: `${base}/sitemap.xml` } : {}) }
    : { rules: { userAgent: "*", disallow: "/" } };
}
