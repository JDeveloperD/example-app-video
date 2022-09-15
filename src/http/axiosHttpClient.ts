import HttpClient, { Request, Response } from './HttpClient'
import axios from 'axios'

const axiosHttpClient = (): HttpClient => {
  const request = async ({
    url,
    method = 'GET',
    headers,
    body
  }: Request): Promise<Response> => {
    try {
      const response = await axios.request({
        url,
        method,
        headers,
        data: body
      })

      return {
        code: response.status,
        data: response.data
      }
    } catch (error) {
      return {
        code: 500,
        error
      }
    }
  }

  return {
    request
  }
}

export default axiosHttpClient()
