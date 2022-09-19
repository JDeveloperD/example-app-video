import { ResponsePagination } from '@common/http/HttpClient'
import type { NextApiRequest, NextApiResponse } from 'next'
import videos from '@database/videos'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const resultFake: ResponsePagination = {
    info: {
      totalDocs: videos.length,
      totalPages: 2,
      prevPage: null,
      nextPage: 2,
      page: 1,
      limit: 10
    },
    links: {
      prev: null,
      current: 'http://localhost:3000/api/videos/most-viewed',
      next: null
    },
    results: videos
  }

  return res.status(200).json(resultFake)
  // return res.status(401)
  //   .json({
  //     description: 'NOT_AUTHORIZATED',
  //     message: 'EL USUARIO NO ESTÁ AUTENTICADO'
  //   })
}
