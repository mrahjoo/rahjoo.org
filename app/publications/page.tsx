import publicationsData from '@/data/publications'
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
        </div>
        <div className="container py-12">
          <ul className="space-y-6">
            {publicationsData.map((pub, index) => (
              <li key={index} className="flex flex-col space-y-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {pub.url ? (
                    <a
                      href={pub.url}
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
                <p className="text-base text-gray-600 dark:text-gray-400">
                  {pub.authors.join(', ')}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  <span className="italic">{pub.journal}</span>, {pub.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
