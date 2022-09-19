import { DataError, Either } from '@common'
import { VideoRepository, Video } from '@app/videos/core/domain'

export class GetVideosUseCase {
  private videoRepository: VideoRepository

  constructor(videoRepository: VideoRepository) {
    this.videoRepository = videoRepository
  }

  execute(): Promise<Either<DataError, Video[]>> {
    return this.videoRepository.getAll()
  }
}
