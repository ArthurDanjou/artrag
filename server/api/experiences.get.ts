import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return await queryCollection(event, 'experiences')
    .where('extension', '=', 'md')
    .all()
}, {
  name: 'experiences-list',
  maxAge: 3600 // 1 hour
})
