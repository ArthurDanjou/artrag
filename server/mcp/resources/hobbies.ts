export default defineMcpResource({
  title: 'Arthur Danjou - Hobbies & Interests',
  description: 'Arthur Danjou\'s personal hobbies, interests, and passions outside of professional work',
  uri: 'resource://artmcp/hobbies',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const result = await $fetch('/api/hobbies')

    return {
      contents: [{
        uri: uri.toString(),
        mimeType: 'text/json',
        text: JSON.stringify(result, null, 2)
      }]
    }
  }
})
