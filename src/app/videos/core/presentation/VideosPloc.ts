import { DataError, Ploc } from '@common'
import { GetVideosUseCase } from '@app/videos/core/usecases'
import { videosInitialState, VideosState } from '@app/videos/core/presentation'

export class VideosPloc extends Ploc<VideosState> {
  constructor(private getVideosUseCase: GetVideosUseCase) {
    super(videosInitialState)
  }

  async getAll() {
    const videosResult = await this.getVideosUseCase.execute()

    videosResult.fold(
      error => this.changeState(this.handleError('ERROR GET ALL VIDEOS', error)),
      videos => this.changeState({
        kind: 'LoadedVideosState',
        videos
      })
    )
  }

  async search(searchTerm: string) {}

  private handleError(searchTerm: string, error: DataError): VideosState {
    switch (error.kind) {
      default: {
        return {
          searchTerm,
          kind: 'ErrorVideosState',
          error: 'Sorry, an error has ocurred. Please try later again'
        }
      }
    }
  }
}
