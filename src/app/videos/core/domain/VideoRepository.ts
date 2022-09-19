import { DataError, Either } from '@common'
import { Video } from '@app/videos/core/domain'

export interface VideoRepository {
  getAll(): Promise<Either<DataError, Video[]>>
  search(filter: string): Promise<Either<DataError, Video[]>>
}
