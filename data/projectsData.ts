interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'ProExergy Tech Solutions',
    description: `Building AI-powered HVAC and building energy APIs for equipment sizing, exergy analysis, and energy calculations. See more at proexergy.com and hvac-eng.com.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://proexergy.com',
  },
  {
    title: 'Unit Engineering',
    description: `Engineering resources and tools.`,
    href: 'https://unit-eng.com',
  },
  {
    title: 'Chart Engineering',
    description: `Data visualization and charting tools.`,
    href: 'https://chart-eng.com',
  },
  {
    title: 'MEP Kit',
    description: `Mechanical, electrical, and plumbing engineering kit.`,
    href: 'https://mepkit.com',
  },
  {
    title: 'OBTES',
    description: `Optimization and analysis tools.`,
    href: 'https://obtes.com',
  },
]

export default projectsData
