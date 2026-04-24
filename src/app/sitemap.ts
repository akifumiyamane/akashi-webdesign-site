import type { MetadataRoute } from "next";

const defaultSiteUrl = "https://akashi-webdesign.com";

function getSiteUrl() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl;
  try {
    return new URL(raw).origin;
  } catch {
    return defaultSiteUrl;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  return [
    {
      url: `${siteUrl}/`,
    },
  ];
}
