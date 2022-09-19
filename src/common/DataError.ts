export interface UnexpectedError {
    kind: 'UnexpectedError'
    error: Error | unknown
}

export interface UnauthrozatedError {
  kind: 'Unauthorizated'
  error: Error | unknown
}

export interface ServiceUnavailableError {
  kind: 'ServiceUnavailableError'
  error: Error | unknown
}

export interface BadRequestError {
  kind: 'BadRequestError'
  error: any
}

export interface NotFoundError {
  kind: 'NotFoundError'
  error: any
}

export type DataError = BadRequestError | NotFoundError |
UnexpectedError | UnauthrozatedError | ServiceUnavailableError;
