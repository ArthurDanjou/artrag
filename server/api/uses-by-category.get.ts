import { queryCollection } from '@nuxt/content/server'
import { z } from 'zod'

const querySchema = z.object({
  categoryName: z.enum(['homelab', 'ide', 'hardware', 'software'])
})

export default defineCachedEventHandler(async (event) => {
  const { categoryName } = await getValidatedQuery(event, querySchema.parse)

  return await queryCollection(event, 'uses')
    .where('extension', '=', 'md')
    .where('category', '=', categoryName)
    .all()
}, {
  name: 'uses-list',
  maxAge: 3600 // 1 hour
})
