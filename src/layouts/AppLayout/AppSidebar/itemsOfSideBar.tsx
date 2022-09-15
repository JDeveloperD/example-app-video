import {
  MdHomeFilled,
  HiOutlineTrendingUp,
  GiCloudDownload,
  FaFileDownload,
  FaMapMarkerAlt
} from '@components'

export const menuItems = [
  {
    id: 'menu-1',
    name: 'Descubrir',
    icon: <MdHomeFilled />,
    path: '/'
  },
  {
    id: 'menu-2',
    name: 'Tendencias',
    icon: <HiOutlineTrendingUp />,
    path: '/tendencias'
  },
  {
    id: 'menu-3',
    name: 'Streaming',
    icon: <GiCloudDownload />,
    path: '/streaming'
  },
  {
    id: 'menu-4',
    name: 'Transmisión',
    icon: <FaFileDownload />,
    path: '/transmision'
  },
  {
    id: 'menu-5',
    name: 'Marcador',
    icon: <FaMapMarkerAlt />,
    path: '/marcador'
  }
]

export const categoryItems = [
  {
    id: 'cat-1',
    name: 'Transmisión en vivo',
    icon: <MdHomeFilled />,
    path: '/transmision-en-vivo'
  },
  {
    id: 'cat-2',
    name: 'Tutorial',
    icon: <HiOutlineTrendingUp />,
    path: '/tutorial'
  },
  {
    id: 'cat-3',
    name: 'Competencia',
    icon: <GiCloudDownload />,
    path: '/competencia'
  },
  {
    id: 'cat-4',
    name: 'Comunidad',
    icon: <FaFileDownload />,
    path: '/comunidad'
  }
]
