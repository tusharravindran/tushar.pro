export const siteConfig = {
  // TODO: replace with your final domain once it's live
  url: "https://tushar.pro/",
  name: "Tushar Ravindran",
  shortName: "Tushar",
  description:
    "Full stack engineer who likes building things. Currently shipping at Sedin Technologies.",
  location: "Chennai, India",
  jobTitle: "Full Stack Engineer",
  image: `/api/og?title=${encodeURIComponent("Tushar Ravindran")}`,
  email: "tusharrravindran@gmail.com",
  // TODO: replace with a direct link to your resume PDF
  resume: "https://tusharravindran.github.io/",
  social: {
    github: "https://github.com/tusharravindran",
    linkedin: "https://www.linkedin.com/in/tusharravindran",
    medium: "https://iamtusharxo.medium.com",
    email: "tusharrravindran@gmail.com",
  },
  keywords: [
    "tushar",
    "Tushar",
    "Tushar Ravindran",
    "tushar ravindran",
    "tusharravindran",
    "full stack engineer",
    "rails",
    "golang",
    "react",
  ],
} as const;

/**
 * Use as `metadata.title` on nested routes. The root layout already sets
 * `title.template` to `%s | ${siteConfig.name}`, so pass only the page title
 * here (no site suffix).
 */
export function withSiteTitle(pageTitle: string): string {
  const t = pageTitle.trim()
  return t.length > 0 ? t : siteConfig.name
}

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.jobTitle,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressCountry: "IN",
    },
    image: siteConfig.image,
    sameAs: Object.values(siteConfig.social),
    knowsAbout: [
      "Ruby on Rails",
      "Go",
      "React",
      "System Design",
      "Web Development",
    ],
  };
}
