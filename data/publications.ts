// data/publications.ts

export interface Publication {
  title: string
  venue: string
  year: string
  type: string
  doi: string
  contributors: string
  featured?: boolean
}

const publications: Publication[] = [
  {
    title:
      'Reviewing numerical studies on sensible thermal energy storage in cementitious composites: report of the RILEM TC 299-TES',
    venue: 'Materials and Structures',
    year: '2025-02',
    type: 'Journal article',
    doi: 'https://doi.org/10.1617/s11527-024-02548-y',
    contributors:
      'Mohammad Rahjoo; Antonio Caggiano; Umberto Berardi; Achutha Prabhu; Jorge S. Dolado',
    featured: true,
  },
  {
    title:
      'Exploring the role of surface roughness in concrete-based thermal energy storage systems: A computational study',
    venue: 'Journal of Energy Storage',
    year: '2024-05',
    type: 'Journal article',
    doi: 'https://doi.org/10.1016/j.est.2024.111515',
    contributors: 'Mohammad Rahjoo; Esther Rojas; Guido Goracci; Jorge S. Dolado',
  },
  {
    title:
      'A numerical study of geopolymer concrete thermal energy storage: Benchmarking TES module design and optimizing thermal performance',
    venue: 'Journal of Energy Storage',
    year: '2023',
    type: 'Journal article',
    doi: 'https://doi.org/10.1016/j.est.2023.109389',
    contributors:
      'Rahjoo, M.; Rojas, E.; Goracci, G.; Gaitero, J.J.; Martauz, P.; Dolado, J.S.',
  },
  {
    title:
      'Exploring the Role of Surface Roughness in Concrete-Based Thermal Energy Storage Systems: A Computational Study',
    venue: 'SSRN',
    year: '2023',
    type: 'Other',
    doi: 'https://doi.org/10.2139/ssrn.4589146',
    contributors: 'Rahjoo, M.; Rojas, E.; Goracci, G.; Dolado, J.S.',
  },
  {
    title: 'Machine Learning for Optimization of Thermal Energy Storage Systems',
    venue: 'SSRN',
    year: '2023',
    type: 'Other',
    doi: 'https://doi.org/10.2139/ssrn.4479433',
    contributors: 'Rahjoo, M.; Rojas, E.; Goracci, G.; Dolado, J.S.',
  },
  {
    title:
      'Thermal Energy Storage (TES) Prototype Based on Geopolymer Concrete for High-Temperature Applications',
    venue: 'Materials',
    year: '2022-10-12',
    type: 'Journal article',
    doi: 'https://doi.org/10.3390/ma15207086',
    contributors:
      'Mohammad Rahjoo; Guido Goracci; Juan J. Gaitero; Pavel Martauz; Esther Rojas; Jorge S. Dolado',
  },
  {
    title:
      'Geopolymer Concrete Performance Study for High-Temperature Thermal Energy Storage (TES) Applications',
    venue: 'Sustainability',
    year: '2022-02-08',
    type: 'Journal article',
    doi: 'https://doi.org/10.3390/su14031937',
    contributors: 'Mohammad Rahjoo; Guido Goracci; Pavel Martauz; Esther Rojas; Jorge S. Dolado',
  },
  {
    title:
      'Solar Hot Air for Industrial Applications Using Linear Fresnel Concentrating Collectors and Open Brayton Cycle Layout',
    venue: 'E3S Web of Conferences',
    year: '2021',
    type: 'Journal article',
    doi: 'https://doi.org/10.1051/e3sconf/202123801003',
    contributors: '',
  },
  {
    title:
      'Direct solar production of medium temperature hot air for industrial applications in linear concentrating solar collectors using an open Brayton cycle. Viability analysis',
    venue: 'Applied Thermal Engineering',
    year: '2020-03',
    type: 'Journal article',
    doi: 'https://doi.org/10.1016/j.applthermaleng.2020.114914',
    contributors: '',
  },
  {
    title:
      'Preliminary Study of Direct High-Temperature Air Generation Inside Linear Fresnel Concentrating Solar Collectors',
    venue: 'Proceedings of the ISES Solar World Congress 2019',
    year: '2019',
    type: 'Other',
    doi: 'https://doi.org/10.18086/swc.2019.12.04',
    contributors:
      'Antonio Famiglietti; Antonio Lecuona-Neumann; Mohammad Rahjoo; José Nogueira-Goriba',
  },
  {
    title:
      'Prediction of heat transfer, pressure drop and entropy generation in shell and helically coiled finned tube heat exchangers',
    venue: 'Chemical Engineering Research and Design',
    year: '2018-06',
    type: 'Journal article',
    doi: 'https://doi.org/10.1016/j.cherd.2018.04.010',
    contributors: '',
  },
  {
    title:
      'Combination of Dual-MRT lattice Boltzmann method with experimental observations during free convection in enclosure filled with MWCNT-MgO/Water hybrid nanofluid',
    venue: 'Thermal Science and Engineering Progress',
    year: '2018-03',
    type: 'Journal article',
    doi: 'https://doi.org/10.1016/j.tsep.2018.01.011',
    contributors: '',
  },
  {
    title:
      'Thermal analysis of a cell of lead-acid battery subjected by non-uniform heat flux during natural convection',
    venue: 'Thermal Science and Engineering Progress',
    year: '2018-03',
    type: 'Journal article',
    doi: 'https://doi.org/10.1016/j.tsep.2018.01.004',
    contributors: '',
  },
]

export default publications
