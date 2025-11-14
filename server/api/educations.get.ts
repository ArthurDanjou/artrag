import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  return {
    body: await queryCollection(event, 'education')
      .where('extension', '=', 'md')
      .all()
  }
}, {
  name: 'educations-list',
  maxAge: 3600 // 1 hour
})
