import type { NextApiRequest, NextApiResponse } from 'next'
import users from '@database/users'
import { User } from '@app/users'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(404).json({
      description: 'NOT_FOUND',
      message: 'This route not exist.'
    })
  }

  return new Promise((resolve) => {
    const { email, password } = req.body

    setTimeout(() => {
      const userFound: User | undefined = users.find(u => {
        if (u.email === email && u.password === password) {
          return u
        }

        return null
      })

      if (!userFound) {
        return res.status(400).json({
          description: 'BAD_REQUEST',
          message: 'Fallo la autenticación del cliente'
        })
      }

      return res.status(200).json({
        user: userFound,
        accessToken: 'kjg3yt59y932340yt9gbmdfkvmdfknasdfgjf'
      })
    }, 1000)
  })
}
