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

  const routes = [
    "",
    "rss.xml",
    "atom.xml",
    "feed.json",
    "sitemap.xml",
  ].map((route) => ({
    url: route ? `${baseUrl}${route}` : baseUrl,
    lastModified: now,
  }))

  return routes
}
