export const siteConfig = {
  url: "https://tushar.pro/",
  name: "Tushar Ravindran",
  shortName: "Tushar",
  alternateNames: ["Tushar R", "tusharravindran", "iamtusharxo"],
  description:
    "Tushar Ravindran is a full stack engineer in Chennai, India, building with Rails, Go and React. Currently shipping at Sedin Technologies.",
  location: "Chennai, India",
  jobTitle: "Full Stack Engineer",
  image: `/api/og?title=${encodeURIComponent("Tushar Ravindran")}`,
  photo: "/profile.jpg",
  email: "tusharrravindran@gmail.com",
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/tusharravindran",
    linkedin: "https://www.linkedin.com/in/tusharravindran",
    medium: "https://iamtusharxo.medium.com",
    instagram: "https://www.instagram.com/iamtusharxo",
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
  const personId = `${siteConfig.url}#person`
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        alternateName: siteConfig.alternateNames,
        url: siteConfig.url,
        image: new URL(siteConfig.photo, siteConfig.url).href,
        email: `mailto:${siteConfig.email}`,
        jobTitle: siteConfig.jobTitle,
        worksFor: {
          "@type": "Organization",
          name: "Sedin Technologies",
          url: "https://sedintechnologies.com/",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Sri Eshwar College of Engineering",
          url: "https://sece.ac.in/",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chennai",
          addressCountry: "IN",
        },
        sameAs: [
          ...Object.values(siteConfig.social),
          "https://tusharravindran.github.io/",
        ],
        knowsAbout: [
          "Ruby on Rails",
          "Go",
          "React",
          "System Design",
          "Web Development",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}#profile`,
        url: siteConfig.url,
        name: siteConfig.name,
        mainEntity: { "@id": personId },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": personId },
      },
    ],
  };
}
