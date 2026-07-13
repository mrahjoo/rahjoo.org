import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex flex-wrap justify-center gap-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
          {siteMetadata.scholar && (
            <a href={siteMetadata.scholar} target="_blank" rel="noreferrer" className="text-sm text-gray-500 transition hover:text-gray-600">
              Scholar
            </a>
          )}
          {siteMetadata.researchgate && (
            <a href={siteMetadata.researchgate} target="_blank" rel="noreferrer" className="text-sm text-gray-500 transition hover:text-gray-600">
              ResearchGate
            </a>
          )}
          {siteMetadata.orcid && (
            <a href={siteMetadata.orcid} target="_blank" rel="noreferrer" className="text-sm text-gray-500 transition hover:text-gray-600">
              ORCID
            </a>
          )}
          {siteMetadata.scopus && (
            <a href={siteMetadata.scopus} target="_blank" rel="noreferrer" className="text-sm text-gray-500 transition hover:text-gray-600">
              Scopus
            </a>
          )}
          {siteMetadata.sciprofiles && (
            <a href={siteMetadata.sciprofiles} target="_blank" rel="noreferrer" className="text-sm text-gray-500 transition hover:text-gray-600">
              SciProfiles
            </a>
          )}
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}
