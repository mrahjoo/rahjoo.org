export interface Publication {
  title: string
  authors: string[]
  journal: string
  year: number
  url?: string
}

const publicationsData: Publication[] = [
  {
    title: 'Example Publication Title',
    authors: ['Rahjoo', 'Jane Doe'],
    journal: 'Journal of Software Engineering',
    year: 2026,
    url: 'https://example.com',
  },
]

export default publicationsData
