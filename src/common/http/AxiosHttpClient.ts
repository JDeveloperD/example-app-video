import axios, { AxiosError, AxiosRequestHeaders } from 'axios'
import HttpClient, { Request, Response } from './HttpClient'

export class AxiosHttpClient implements HttpClient {
  interceptor<D>(): Promise<Response<D>> {
    throw new Error('Method not implemented.')
  }

  multiple(requests: []): Promise<any> {
    throw new Error('Method not implemented.')
  }

  async request<D>({
    url,
    method = 'GET',
    headers,
    body
  }: Request<any, AxiosRequestHeaders>): Promise<Response<D>> {
    try {
      const response = await axios.request({
        url,
        method,
        headers,
        data: body
      })

      return {
        status: response.status,
        data: response.data
      }
    } catch (error) {
      const err = error as AxiosError

      if (err.response) {
        if (err.response.status === 404) {
          return {
            status: err.response.status,
            data: null,
            error: {
              kind: 'BadRequestError',
              error: err.response.data
            }
          }
        }

        if (err.response.status === 401) {
          return {
            status: err.response.status,
            data: null,
            error: {
              kind: 'Unauthorizated',
              error: err.response.data
            }
          }
        }

        return {
          status: 400,
          data: null,
          error: {
            kind: 'UnexpectedError',
            error: err.response.data
          }
        }
      } else if (err.request) {
        return {
          status: 503,
          data: null,
          error: {
            kind: 'ServiceUnavailableError',
            error: '!oops... huvo un error al intentar conectarse con el servidor'
          }
        }
      } else {
        return {
          status: 500,
          data: null,
          error: {
            kind: 'UnexpectedError',
            error: '!oops... huvo un error.Por favor comuniquese con los desarrolladores'
          }
        }
      }
    }
  }
}
