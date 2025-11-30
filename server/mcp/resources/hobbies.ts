export default defineMcpResource({
  title: 'Arthur Danjou - Hobbies & Interests',
  description: 'Arthur Danjou\'s personal hobbies, interests, and passions outside of professional work',
  uri: 'resource://artmcp/hobbies',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const event = useEvent()

    const result = await queryCollection(event, 'hobbies')
      .where('extension', '=', 'md')
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
