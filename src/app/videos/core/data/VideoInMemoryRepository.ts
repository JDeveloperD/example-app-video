import { Video, VideoRepository } from '@app/videos/core/domain'
import { adapterFromApi } from '@app/videos/core/data'
import { DataError, Either } from '@common'
import videos from '@database/videos'

export class VideoInMemoryRepository implements VideoRepository {
  async getAll(): Promise<Either<DataError, Video[]>> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        try {
          const result = videos.map(video => adapterFromApi(video))

          resolve(Either.right(result))
        } catch (error) {
          resolve(Either.left({ kind: 'UnexpectedError', error }))
        }
      }, 2000)
    })
  }

  search(filter: string): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
