import { Video, VideoRepository } from '@app/videos/core/domain'
import { adapterFromApi } from '@app/videos/core/data'
import { DataError, Either, endPoints, ResponsePagination } from '@common'
import HttpClient from '@common/http/HttpClient'

export class VideoApiRepository implements VideoRepository {
  constructor(private httpClient: HttpClient) {}

  async getAll(): Promise<Either<DataError, Video[]>> {
    const { data, error } = await this.httpClient.request<ResponsePagination>({
      url: endPoints.videos.mostViewed
    })

    if (data) {
      const videos = data.results.map(video => adapterFromApi(video))
      return Either.right(videos)
    } else if (error) {
      return Either.left(error)
    } else {
      return Either.left({ kind: 'UnexpectedError', error: 'Por favor contactese con los desarrolladores' })
    }
  }

  search(filter: string): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
