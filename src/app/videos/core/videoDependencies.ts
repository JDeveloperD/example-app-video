import { VideoInMemoryRepository } from '@app/videos/core/data'
import { VideosPloc } from '@app/videos/core/presentation'
import { GetVideosUseCase } from '@app/videos/core/usecases'

function providerVideoPloc () {
  const videoRepository = new VideoInMemoryRepository()
  const getAllVideos = new GetVideosUseCase(videoRepository)
  const videoPloc = new VideosPloc(getAllVideos)

  return videoPloc
}

export {
  providerVideoPloc
}
