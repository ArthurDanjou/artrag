import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return {
    body: await queryCollection(event, 'skills')
      .where('extension', '=', 'json')
      .all()
  }
}, {
  name: 'skills-list',
  maxAge: 3600 // 1 hour
})
