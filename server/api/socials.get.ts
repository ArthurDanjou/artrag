import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return await queryCollection(event, 'socials')
    .where('extension', '=', 'json')
    .first()
}, {
  name: 'socials-list',
  maxAge: 3600 // 1 hour
})
