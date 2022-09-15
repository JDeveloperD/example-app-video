import type { NextApiRequest, NextApiResponse } from 'next'
const videos = [
  {
    id: 'code-1',
    authorName: 'Andy William',
    thumbnail: '/img/post/thumbnail1.png',
    time: '7m',
    title: 'Básico cómo montar tu patineta cómodamente'
  },
  {
    id: 'code-2',
    authorName: 'Johny Wise',
    thumbnail: '/img/post/thumbnail2.png',
    time: '7m',
    title: 'Prepárate para tu primer salto en patineta'
  },
  {
    id: 'code-3',
    authorName: 'Budi Hakim',
    thumbnail: '/img/post/thumbnail3.png',
    time: '7m',
    title: 'Consejos para jugar al skate en la rampa'
  },
  {
    id: 'code-4',
    authorName: 'Wijaya Abadi',
    thumbnail: '/img/post/thumbnail4.png',
    time: '7m',
    title: 'Equipo básico para el skateboard'
  },
  {
    id: 'code-5',
    authorName: 'Johny Wise',
    thumbnail: '/img/post/thumbnail2.png',
    time: '7m',
    title: 'Prepárate para tu primer salto en patineta'
  },
  {
    id: 'code-6',
    authorName: 'Budi Hakim',
    thumbnail: '/img/post/thumbnail3.png',
    time: '7m',
    title: 'Consejos para jugar al skate en la rampa'
  },
  {
    id: 'code-7',
    authorName: 'Wijaya Abadi',
    thumbnail: '/img/post/thumbnail4.png',
    time: '7m',
    title: 'Equipo básico para el skateboard'
  }
]
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    videos
  })
}
