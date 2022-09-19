import { Video } from '@app/videos/core/domain'

export const adapterFromApi = (resource: any): Video => ({
  id: resource._id,
  thumbnail: resource.photo,
  title: resource.title,
  user: resource.author,
  time: resource.time
})
