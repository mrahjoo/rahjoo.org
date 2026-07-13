export interface ResumeItem {
  title: string
  org: string
  location: string
  dates: string
  type: 'employment' | 'education' | 'funding'
  url?: string
  description?: string
}

export const employment: ResumeItem[] = [
  {
    title: 'Co-Founder & CEO',
    org: 'ProExergy Tech Solutions, S.L.',
    location: 'Zaragoza, Aragon, ES',
    dates: '2025-05-15 – present',
    type: 'employment',
    url: 'https://proexergy.com',
  },
  {
    title: 'Postdoctoral Researcher (CFM – C2M Group)',
    org: 'Consejo Superior de Investigaciones Científicas',
    location: 'Donostia-San Sebastián, ES',
    dates: '2024-02-24 – 2024-11-01',
    type: 'employment',
    url: 'https://c2mgroup.org/',
  },
  {
    title: 'PhD Candidate (CFM – C2M Group)',
    org: 'Consejo Superior de Investigaciones Científicas',
    location: 'Donostia-San Sebastián, ES',
    dates: '2020-11-01 – 2024-02-23',
    type: 'employment',
    url: 'https://cfm.ehu.es/team/mohammad-rahjoo/',
  },
  {
    title: 'R&D Engineer',
    org: 'Demede Engineering & Research',
    location: 'Madrid, ES',
    dates: '2019-02-01 – 2020-10-01',
    type: 'employment',
    url: 'https://demede.es/eng/',
  },
  {
    title: 'HVAC/R Design & Engineering',
    org: 'Amoodrah Consulting Engineers',
    location: 'Tehran, IR',
    dates: '2015-10-01 – 2018-10-01',
    type: 'employment',
    url: 'https://amoodrah.com/',
  },
]

export const education: ResumeItem[] = [
  {
    title: 'PhD, Nanostructured Physics and Advanced Materials',
    org: 'University of the Basque Country (Materials Physics Center, CSIC-UPV/EHU)',
    location: 'Donostia-San Sebastián, ES',
    dates: '2020-11-01 – 2024-02-20',
    type: 'education',
    url: 'https://cfm.ehu.es/',
  },
  {
    title: 'MSc, Mechanical Engineering (Energy Conversion)',
    org: 'K.N. Toosi University of Technology',
    location: 'Tehran, IR',
    dates: '2014 – 2016',
    type: 'education',
    url: 'https://en.kntu.ac.ir/',
  },
]

export const funding: ResumeItem[] = [
  {
    title: 'Ayudas para contratos predoctorales para la formación de doctores',
    org: 'Ministerio de Ciencia y Tecnología',
    location: 'San Sebastián, Gipuzkoa, ES',
    dates: '',
    type: 'funding',
    url: 'http://ecrete.org',
    description: 'PhD predoctoral research grant (Spain)',
  },
]
