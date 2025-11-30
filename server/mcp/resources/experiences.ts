export default defineMcpResource({
  title: 'Arthur Danjou - Experiences',
  description: 'A detailed list of Arthur Danjou\'s professional work experiences, including roles, companies, and responsibilities',
  uri: 'resource://artmcp/experiences',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const event = useEvent()

    const result = await queryCollection(event, 'experiences')
      .where('extension', '=', 'md')
      .select([
        'title',
        'company',
        'companyUrl',
        'startDate',
        'endDate',
        'location',
        'description'
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
