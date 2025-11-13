import { queryCollection } from '@nuxt/content/server'

export default defineCachedEventHandler(async (event) => {
  const categories = await queryCollection(event, 'usesCategories').where('extension', '=', 'md').all()

  const uses = await queryCollection(event, 'uses')
    .where('extension', '=', 'md')
    .all()

  const uses_by_categories = []
  for (const category of categories) {
    uses_by_categories.push({
      category: category,
      uses: uses.filter(use => use.category === category.slug)
    })
  }

  return {
    body: uses_by_categories
  }
}, {
  name: 'uses-list',
  maxAge: 3600 // 1 hour
})
