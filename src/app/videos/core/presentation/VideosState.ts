import { Video } from '@app/videos/core/domain'

export interface CommonVideosState {
  searchTerm?: string
}

export interface LoadingVideosState {
  kind: 'LoadingVideosState'
}

export interface LoadedVideosState {
  kind: 'LoadedVideosState',
  videos: Array<Video>
}

export interface ErrorVideosState {
  kind: 'ErrorVideosState',
  error: string
}

export type VideosState = (
  LoadingVideosState | LoadedVideosState | ErrorVideosState
) & CommonVideosState

export const videosInitialState: VideosState = {
  kind: 'LoadingVideosState',
  searchTerm: ''
}
