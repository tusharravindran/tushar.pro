import type { MetadataRoute } from "next"
import { cacheLife } from "next/cache"

import { siteConfig } from "@/app/config"

const baseUrl = siteConfig.url.endsWith("/")
  ? siteConfig.url
  : `${siteConfig.url}/`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  "use cache"
  cacheLife("max")

  const now = new Date()

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
