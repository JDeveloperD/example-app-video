import type { User } from '@app/users'

export default interface Video {
  id?: number
  title: string
  user: User,
  views: number
  createdAt: Date
  time: number
}

export const validateTimeVideo = (video: Video) => {
  if (video.time === 1 * 60 * 60) {
    throw new Error('errro')
  }

  return video
}
