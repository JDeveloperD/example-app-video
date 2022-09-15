import HttpClient, { Request } from './HttpClient'

const fetchHttpClient = (): HttpClient => {
  const request = async (params: Request) => {
    try {
      params.headers = {
        ...params.headers,
        'Content-Type': 'application/json'
      }

      const response = await fetch(params.url, {
        method: params.method,
        headers: params.headers,
        body: JSON.stringify(params.body)
      })

      const data = await response.json()

      return {
        code: response.status,
        data
      }
    } catch (error) {
      return {
        code: 200,
        error: 'UNEXPECTED ERROR'
      }
    }
  }

  return {
    request
  }
}

export default fetchHttpClient()
