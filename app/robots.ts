import { siteConfig } from "@/app/config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}sitemap.xml`,
  };
}
