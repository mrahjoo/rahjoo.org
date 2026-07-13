import publicationsData from '@/data/publications'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Publications' })

export default function Publications() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Publications
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A list of my research publications and articles.
          </p>
          <div className="flex space-x-4 pt-4">
            {siteMetadata.scholar && (
              <a
                href={siteMetadata.scholar}
                target="_blank"
                rel="noreferrer"
                className="bg-primary-500 hover:bg-primary-600 rounded px-4 py-2 text-sm text-white"
              >
                Google Scholar
              </a>
            )}
            {siteMetadata.researchgate && (
              <a
                href={siteMetadata.researchgate}
                target="_blank"
                rel="noreferrer"
                className="bg-primary-500 hover:bg-primary-600 rounded px-4 py-2 text-sm text-white"
              >
                ResearchGate
              </a>
            )}
            {siteMetadata.scopus && (
              <a
                href={siteMetadata.scopus}
                target="_blank"
                rel="noreferrer"
                className="bg-primary-500 hover:bg-primary-600 rounded px-4 py-2 text-sm text-white"
              >
                Scopus
              </a>
            )}
          </div>
        </div>
        <div className="container py-12">
          <ul className="space-y-6">
            {publicationsData.map((pub, index) => (
              <li
                key={index}
                className={`flex flex-col space-y-2 rounded-lg p-4 ${pub.featured ? 'bg-primary-50 border-primary-500 border-l-4 dark:bg-gray-800' : ''}`}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {pub.doi ? (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-500"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400">{pub.contributors}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  <span className="italic">{pub.venue}</span>, {pub.year} • {pub.type}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="container py-12">
          <h2 className="mb-6 text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            Peer Review Activity
          </h2>
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-400">
            Summarizing 63 reviews across 16 venues:
          </p>
          <ul className="mt-4 list-disc pl-5 text-gray-600 dark:text-gray-400">
            <li>
              <strong>19</strong>: Journal of Energy Storage
            </li>
            <li>
              <strong>12</strong>: Energies
            </li>
            <li>
              <strong>9</strong>: Sustainability
            </li>
            <li>
              <strong>3 each</strong>: Renewable Energy, Molecules, Energy Conversion & Management
            </li>
            <li>
              <strong>2 each</strong>: Applied Thermal Engineering, Computation, Energy and
              Buildings, Materials
            </li>
            <li>
              <strong>1 each</strong>: Buildings, Inventions, Knowledge-Based Systems, Materials in
              Civil Engineering, Polymers, Energy
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
