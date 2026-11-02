import type { Metadata } from "next"
import { cacheLife } from "next/cache"
import Link from "next/link"

import { LinkPreviewServer } from "@/app/components/link-preview"
import { siteConfig } from "@/app/config"
import { blogPosts } from "@/app/writings/writings-data"

export const metadata: Metadata = {
  title: { absolute: siteConfig.name },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(siteConfig.shortName)}`,
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: { canonical: siteConfig.url },
}

const HOME_WRITINGS_LIMIT = 6

export default async function HomePage() {
  "use cache"
  cacheLife("max")

  return (
    <main className="mx-auto flex w-full min-w-0 max-w-4xl flex-1 flex-col px-6 pt-12 sm:px-10 sm:pt-32 lg:px-12">
      <header className="mb-8 min-w-0 sm:mb-6">
        <h1 className="m-0 p-0 text-lg font-medium leading-[1.3] sm:text-xl">
          <Link href="/" className="work-link">
            <span className="sr-only">{siteConfig.name}</span>
            <span aria-hidden="true" className="group relative block overflow-hidden">
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                {siteConfig.name}
              </span>
              <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                tushar
              </span>
            </span>
          </Link>
        </h1>
      </header>

      <div className="min-w-0 w-full">
        <p className="text-base leading-relaxed text-[var(--color-text)]">
          I&apos;m a full stack engineer based in Chennai, India.
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-text)]">
          For the past 3+ years I&apos;ve worked across the stack, designing
          systems, building APIs and shipping products that scale. I studied IT
          at{" "}
          <LinkPreviewServer
            href="https://sece.ac.in/"
            className="home-inline-link"
          >
            Sri Eshwar College of Engineering
          </LinkPreviewServer>
          , and I&apos;m now at{" "}
          <LinkPreviewServer
            href="https://sedintechnologies.com/"
            className="home-inline-link"
          >
            Sedin Technologies
          </LinkPreviewServer>
          , working on products for teams like{" "}
          <LinkPreviewServer
            href="https://www.kula.ai/"
            className="home-inline-link"
          >
            Kula
          </LinkPreviewServer>
          ,{" "}
          <LinkPreviewServer
            href="https://www.delhivery.com/"
            className="home-inline-link"
          >
            Delhivery
          </LinkPreviewServer>{" "}
          and{" "}
          <LinkPreviewServer
            href="https://railsfactory.com/"
            className="home-inline-link"
          >
            RailsFactory
          </LinkPreviewServer>
          .
        </p>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-text)]">
          Rails, React, Go, Node, whatever the problem needs. Most of my work
          lives where backend reliability meets product thinking.
        </p>
        <p className="mt-8 text-base font-medium leading-normal text-[var(--color-text)]">
          Some of my tech contributions:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-base leading-normal text-[var(--color-text)]">
          <li>
            Integrations for the{" "}
            <LinkPreviewServer
              href="https://www.kula.ai/"
              className="home-inline-link"
            >
              Kula
            </LinkPreviewServer>{" "}
            ATS (DocuSign, HackerRank, Certn and more), cutting manual
            recruiter ops by ~60–70%
          </li>
          <li>
            Open source work on{" "}
            <LinkPreviewServer
              href="https://www.sunbird.org/"
              className="home-inline-link"
            >
              Sunbird ED
            </LinkPreviewServer>
            , the platform behind DIKSHA (180M+ learners)
          </li>
          <li>
            <LinkPreviewServer
              href="https://railsup.io/"
              className="home-inline-link"
            >
              RailsUp
            </LinkPreviewServer>
            , a Rails upgrade estimator with 50+ daily active users
          </li>
          <li>
            <LinkPreviewServer
              href="https://github.com/tusharravindran/flagbase"
              className="home-inline-link"
            >
              Flagbase
            </LinkPreviewServer>
            , a self-hosted feature flag platform in Go with local SDK
            evaluation
          </li>
          <li>
            <LinkPreviewServer
              href="https://github.com/tusharravindran/devdoctor"
              className="home-inline-link"
            >
              devdoctor
            </LinkPreviewServer>
            , a real-time log diagnostics CLI (pip + Homebrew)
          </li>
        </ul>
      </div>

      <section className="mt-5 min-w-0 w-full">
        <h2 className="text-base font-medium leading-normal text-[var(--color-text)]">
          Some of my writings:
        </h2>
        <ol className="mt-2 list-decimal space-y-1 pl-5 marker:text-[var(--color-text)]">
          {blogPosts.slice(0, HOME_WRITINGS_LIMIT).map((post) => (
            <li key={post.url} className="pl-1 text-base leading-normal">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="home-writings-link"
              >
                {post.title}
              </a>
            </li>
          ))}
        </ol>
        <p className="home-footer mt-6 text-base leading-normal">
          You can read{" "}
          <LinkPreviewServer
            href={siteConfig.social.medium}
            className="home-inline-link"
          >
            all my writings
          </LinkPreviewServer>{" "}
          or{" "}
          <LinkPreviewServer
            href={siteConfig.social.linkedin}
            className="home-inline-link"
          >
            connect with me
          </LinkPreviewServer>
          . Here is my{" "}
          <LinkPreviewServer
            href="/resume"
            className="home-inline-link"
          >
            resume
          </LinkPreviewServer>
          .
        </p>
      </section>
    </main>
  )
}
