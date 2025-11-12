import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return await queryCollection(event, 'uses')
    .where('extension', '=', 'md')
    .all()
}, {
  name: 'uses-list',
  maxAge: 3600 // 1 hour
})
