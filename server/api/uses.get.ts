export default defineEventHandler(async (event) => {
  const categories = await queryCollection(event, 'usesCategories')
    .where('extension', '=', 'md')
    .all()

  const uses = await queryCollection(event, 'uses')
    .where('extension', '=', 'md')
    .all()

  const uses_by_categories = []
  for (const category of categories) {
    uses_by_categories.push({
      category: category,
      uses: uses.filter((use: { category: unknown }) => use.category === category.slug)
    })
  }

  return uses_by_categories
})
