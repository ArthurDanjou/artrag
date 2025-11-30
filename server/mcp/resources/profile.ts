export default defineMcpResource({
  title: 'Arthur Danjou - Professional Profile',
  description: 'Comprehensive professional profile of Arthur Danjou, including biography, location, availability status, career goals, and work preferences',
  uri: 'resource://artmcp/profile',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const event = useEvent()

    const result = await queryCollection(event, 'profile')
      .where('extension', '=', 'md')
      .first()

    return {
      contents: [{
        uri: uri.toString(),
        mimeType: 'text/json',
        text: JSON.stringify(result)
      }]
    }
  }
})
