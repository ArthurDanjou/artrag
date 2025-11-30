export default defineMcpResource({
  title: 'Arthur Danjou - Education & Academic Background',
  description: 'Arthur Danjou\'s educational background, including degrees, institutions, and academic achievements',
  uri: 'resource://artmcp/education',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const event = useEvent()

    const result = await queryCollection(event, 'education')
      .where('extension', '=', 'md')
      .select([
        'degree',
        'institution',
        'startDate',
        'endDate',
        'location'
      ])
      .orderBy('startDate', 'desc')
      .all()

    return {
      contents: [{
        uri: uri.toString(),
        mimeType: 'text/json',
        text: JSON.stringify(result)
      }]
    }
  }
})
