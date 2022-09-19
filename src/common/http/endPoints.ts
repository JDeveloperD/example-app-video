import { addQueryToUri } from '@utils'

export const URI_API = process.env.NEXT_PUBLIC_URI_API

export const makeUri = (resource: string, queryParams?: any) => {
  const uri = `${URI_API}/${resource}`

  if (queryParams) {
    return addQueryToUri({
      uri,
      query: queryParams
    })
  }

  return uri
}

export default {
  videos: {
    default: makeUri('videos'),
    getVideoById: (id: number) => makeUri(`videos/${id}`),
    mostViewed: makeUri('videos/most-viewed')
  },
  auth: {
    signIn: makeUri('auth/sign-in'),
    recoveryPassword: (token: string) => {
      return makeUri('auth/recovery-password', { token })
    }
  }
}
