import { genPageMetadata } from 'app/seo'

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
            My professional experience and skills.
          </p>
        </div>
        <div className="prose dark:prose-invert container max-w-none py-12">
          <h2>Experience</h2>
          <h3>Developer @ ProExergy</h3>
          <p className="text-sm text-gray-500">2023 - Present</p>
          <ul>
            <li>Developed and maintained web applications and APIs.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
          </ul>

          <h2>Education</h2>
          <h3>University Degree</h3>
          <p className="text-sm text-gray-500">Graduated Year</p>
          <ul>
            <li>Degree Details</li>
          </ul>

          <h2>Skills</h2>
          <ul>
            <li>JavaScript, TypeScript, React, Next.js</li>
            <li>Node.js, AWS, Cloudflare, CI/CD</li>
          </ul>
        </div>
      </div>
    </>
  )
}
