import { DataError } from '@common/DataError'

export type ResponsePagination<T = any> = {
  info: {
    totalDocs: number,
    totalPages: number,
    prevPage: number | null,
    nextPage: number | null,
    page: number,
    limit: number
  },
  links: {
    prev: string | null,
    current: string | null
    next: string | null
  },
  results: T[]
}

export type Request<B = any, H = any> = {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: H
  body?: B
}

export type Response<D = any> = {
  status: number
  data: D | null
  error?: DataError
}

export default interface HttpClient {
  request<D>(params: Request): Promise<Response<D>>
  interceptor<D>(): Promise<Response<D>>
  multiple(requests: []): Promise<any>
}
