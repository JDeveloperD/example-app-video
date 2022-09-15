import { axiosHttpClient, endPoints } from '@http'

export default function getMostViewedService () {
  return axiosHttpClient.request({
    url: endPoints.videos.mostViewed
  })
}
