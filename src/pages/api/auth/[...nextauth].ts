import { AxiosHttpClient } from '@common'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const http = new AxiosHttpClient()

export const optionsNextAuth: NextAuthOptions = {
  pages: {
    signIn: '/auth/iniciar-sesion'
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24
  },
  callbacks: {
    async jwt({ token, account, profile, user }) {
      return token
    }
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as { email: string, password: string}

        const res = await http.request<{ user: { id: string}}>({
          url: 'http://localhost:3000/api/auth/sign-in',
          method: 'POST',
          body: {
            email,
            password
          }
        })

        if (res.data && res.data.user) {
          return {
            name: 'ABC',
            email,
            image: 'imagen'
          }
        }

        if (res.status === 400) {
          throw new Error('Revice las credenciales nuevamente por favor')
        }

        throw new Error('Huvo un problema inesperado por favor comuniquese con los desarrolladores')
      }
    })
  ]
}

export default NextAuth(optionsNextAuth)
