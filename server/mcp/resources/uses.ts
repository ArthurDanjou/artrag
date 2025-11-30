export default defineMcpResource({
  title: 'Arthur Danjou - Tech Stack & Tools',
  description: 'A curated list of tools, software, and hardware used by Arthur Danjou, organized by categories (homelab, IDE, hardware, software)',
  uri: 'resource://artmcp/uses',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const event = useEvent()

    const categories = await queryCollection(event, 'usesCategories').where('extension', '=', 'md').all()

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

    return {
      contents: [{
        uri: uri.toString(),
        mimeType: 'text/json',
        text: JSON.stringify(uses_by_categories, null, 2)
      }]
    }
  }
})
