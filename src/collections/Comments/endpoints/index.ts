import { Endpoint } from 'payload'

export const customGetComments: Endpoint = {
  method: 'get',
  path: '/get',
  handler: async function (req) {
    const unpaginatedComments = await req.payload.find({
      collection: 'comments',
      limit: 10,
      pagination: false,
    })

    return new Response(JSON.stringify(unpaginatedComments), {
      headers: {
        'content-type': 'application/json',
      },
    })
  },
}
