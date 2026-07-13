import { genPageMetadata } from 'app/seo'
import { employment, education, funding, organizations, languages } from '@/data/resumeData'

export const metadata = genPageMetadata({ title: 'Resume' })

export default function Resume() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Resume
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My professional experience, education, and funding.
          </p>
        </div>
        <div className="prose dark:prose-invert container max-w-none py-12">
          <h2>Experience</h2>
          <div className="space-y-6">
            {employment.map((item, index) => (
              <div key={index}>
                <h3 className="!mb-0">
                  {item.title} @{' '}
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.org}
                    </a>
                  ) : (
                    item.org
                  )}
                </h3>
                <p className="mt-1 !mb-2 text-sm text-gray-500">
                  {item.dates} | {item.location}
                </p>
                {item.description && <p>{item.description}</p>}
              </div>
            ))}
          </div>

          <h2>Education</h2>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div key={index}>
                <h3 className="!mb-0">{item.title}</h3>
                <p className="font-semibold">
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.org}
                    </a>
                  ) : (
                    item.org
                  )}
                </p>
                <p className="mt-1 !mb-2 text-sm text-gray-500">
                  {item.dates} | {item.location}
                </p>
                {item.description && <p>{item.description}</p>}
              </div>
            ))}
          </div>

          <h2>Funding & Grants</h2>
          <div className="space-y-6">
            {funding.map((item, index) => (
              <div key={index}>
                <h3 className="!mb-0">{item.title}</h3>
                <p className="font-semibold">
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.org}
                    </a>
                  ) : (
                    item.org
                  )}
                </p>
                {item.dates && (
                  <p className="mt-1 !mb-2 text-sm text-gray-500">
                    {item.dates} | {item.location}
                  </p>
                )}
                {!item.dates && <p className="mt-1 !mb-2 text-sm text-gray-500">{item.location}</p>}
                {item.description && <p>{item.description}</p>}
              </div>
            ))}
          </div>

          <h2>Organizations</h2>
          <div className="space-y-6">
            {organizations.map((item, index) => (
              <div key={index}>
                <h3 className="!mb-0">{item.org}</h3>
                <p className="font-semibold">{item.role}</p>
                <p className="mt-1 !mb-2 text-sm text-gray-500">{item.dates}</p>
              </div>
            ))}
          </div>

          <h2>Languages</h2>
          <div className="space-y-6">
            {languages.map((item, index) => (
              <div key={index}>
                <h3 className="!mb-0">{item.language}</h3>
                <p className="mt-1 !mb-2 text-sm text-gray-500">{item.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
