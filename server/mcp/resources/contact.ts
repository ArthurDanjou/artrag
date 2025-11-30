export default defineMcpResource({
  title: 'Arthur Danjou - Contact Information & Social Media Links',
  description: 'Contact information and social media links for Arthur Danjou, including email, LinkedIn, GitHub, Twitter, Discord, and personal websites',
  uri: 'resource://artmcp/contact',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const event = useEvent()

    const result = await queryCollection(event, 'contact')
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
