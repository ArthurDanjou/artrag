export default defineMcpResource({
  title: 'Arthur Danjou - Spoken Languages & Proficiency Levels',
  description: 'Languages spoken by Arthur Danjou with detailed proficiency levels for each language',
  uri: 'resource://artmcp/languages',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const event = useEvent()

    const result = await queryCollection(event, 'languages')
      .where('extension', '=', 'json')
      .first()

    return {
      contents: [{
        uri: uri.toString(),
        mimeType: 'text/json',
        text: JSON.stringify(result.body, null, 2)
      }]
    }
  }
})
