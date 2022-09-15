import Video from './Video'

export type VideoStoreState = {
  moreViewed: Video[]
}

export default interface VideoStore extends VideoStoreState {
  // methods
  mostViewedInitialLoad(): Promise<Video[]>
  setMostViewedInitialLoad(videos: Video[]): void
}
