export default defineMcpResource({
  title: 'Arthur Danjou - Skills',
  description: 'A comprehensive list of technical skills, programming languages, frameworks, and tools mastered by Arthur Danjou',
  cache: '1 hour',
  uri: 'resource://artmcp/skills',
  handler: async (uri: URL) => {
    const result = await $fetch('/api/skills')

    return {
      contents: [{
        uri: uri.toString(),
        mimeType: 'text/json',
        text: JSON.stringify(result, null, 2)
      }]
    }
  }
})
