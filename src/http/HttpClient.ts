export type Request<Q = any> = {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: any
  body?: Q
}

export type Response<T = any> = {
  code: number
  data?: T
  error?: any
}

export default interface HttpClient {
  request(params: Request): Promise<Response>
}
