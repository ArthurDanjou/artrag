export default defineMcpResource({
  title: 'Arthur Danjou - Projects Portfolio',
  description: 'A comprehensive collection of projects developed by Arthur Danjou, showcasing technical skills and achievements',
  uri: 'resource://artmcp/projects',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const event = useEvent()

    const result = await queryCollection(event, 'projects')
      .where('extension', '=', 'md')
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
