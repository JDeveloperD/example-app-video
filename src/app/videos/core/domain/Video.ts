import { User } from '@app/users/core/domain'

export type VideoId = number

export interface Video {
  id?: VideoId
  title: string
  thumbnail: string
  time: number
  user: User
}
