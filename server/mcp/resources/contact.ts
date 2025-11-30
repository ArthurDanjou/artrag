export default defineMcpResource({
  title: 'Arthur Danjou - Contact Information & Social Media Links',
  description: 'Contact information and social media links for Arthur Danjou, including email, LinkedIn, GitHub, Twitter, Discord, and personal websites',
  uri: 'resource://artmcp/contact',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const result = await $fetch('/api/contact')

    return {
      contents: [{
        uri: uri.toString(),
        mimeType: 'text/json',
        text: JSON.stringify(result, null, 2)
      }]
    }
  }
})
