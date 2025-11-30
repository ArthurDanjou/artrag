export default defineMcpResource({
  title: 'Arthur Danjou - Skills',
  description: 'A comprehensive list of technical skills, programming languages, frameworks, and tools mastered by Arthur Danjou',
  cache: '1 hour',
  uri: 'resource://artmcp/skills',
  handler: async () => {
    const event = useEvent()

    const result = await queryCollection(event, 'skills')
      .where('extension', '=', 'json')
      .first()

    return {
      contents: [{
        uri: result.path,
        mimeType: 'text/json',
        text: JSON.stringify(result.body, null, 2)
      }]
    }
  }
})
