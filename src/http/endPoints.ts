export const URI_API = process.env.NEXT_PUBLIC_URI_API

export const makeUri = (resource: string) => `${URI_API}/${resource}`

export default {
  videos: {
    default: makeUri('videos'),
    mostViewed: makeUri('videos/most-viewed')
  },
  auth: {
    signIn: makeUri('auth/sign-in'),
    recoveryPassword: (token: string) => makeUri(`auth/recovery-password?token=${token}`)
  }
}
