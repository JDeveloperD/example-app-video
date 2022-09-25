import {
  MdHomeFilled,
  HiOutlineTrendingUp,
  GiCloudDownload,
  FaFileDownload,
  BsChatLeftDots
} from '@components'

export const menuItems = [
  {
    id: 'menu-1',
    name: 'Descubrir',
    icon: <MdHomeFilled />,
    path: '/',
    badge: null
  },
  {
    id: 'menu-2',
    name: 'Tendencias',
    icon: <HiOutlineTrendingUp />,
    path: '/tendencias',
    badge: null
  },
  {
    id: 'menu-3',
    name: 'Streaming',
    icon: <GiCloudDownload />,
    path: '/streaming',
    badge: null
  },
  {
    id: 'menu-4',
    name: 'Transmisión',
    icon: <FaFileDownload />,
    path: '/transmision',
    badge: null
  },
  {
    id: 'menu-5',
    name: 'Chat',
    icon: <BsChatLeftDots />,
    path: '/chat',
    badge: 'danger'
  }
]

export const categoryItems = [
  {
    id: 'cat-1',
    name: 'Transmisión en vivo',
    icon: <MdHomeFilled />,
    path: '/transmision-en-vivo',
    badge: null
  },
  {
    id: 'cat-2',
    name: 'Tutorial',
    icon: <HiOutlineTrendingUp />,
    path: '/tutorial',
    badge: null
  },
  {
    id: 'cat-3',
    name: 'Competencia',
    icon: <GiCloudDownload />,
    path: '/competencia',
    badge: null
  },
  {
    id: 'cat-4',
    name: 'Comunidad',
    icon: <FaFileDownload />,
    path: '/comunidad',
    badge: null
  }
]
