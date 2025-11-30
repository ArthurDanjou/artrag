export default defineMcpResource({
  title: 'Arthur Danjou - Education & Academic Background',
  description: 'Arthur Danjou\'s educational background, including degrees, institutions, and academic achievements',
  uri: 'resource://artmcp/education',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const result = await $fetch('/api/education')

    return {
      contents: [{
        uri: uri.toString(),
        mimeType: 'text/json',
        text: JSON.stringify(result)
      }]
    }
  }
})
