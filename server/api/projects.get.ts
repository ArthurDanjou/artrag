import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return await queryCollection(event, 'projects')
    .where('extension', '=', 'md')
    .all()
}, {
  name: 'projects-list',
  maxAge: 3600 // 1 hour
})
