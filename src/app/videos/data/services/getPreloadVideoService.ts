import { axiosHttpClient, endPoints } from '@http'

const getPreloadVideoService = () => {
  return axiosHttpClient.request({
    url: endPoints.videos.mostViewed,
    method: 'GET'
  })
}

export default getPreloadVideoService
