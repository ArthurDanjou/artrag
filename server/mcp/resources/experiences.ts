export default defineMcpResource({
  title: 'Arthur Danjou - Experiences',
  description: 'A detailed list of Arthur Danjou\'s professional work experiences, including roles, companies, and responsibilities',
  uri: 'resource://artmcp/experiences',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const result = await $fetch('/api/experiences')

    return {
      contents: [{
        uri: uri.toString(),
        mimeType: 'text/json',
        text: JSON.stringify(result)
      }]
    }
  }
})
