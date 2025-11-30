export default defineMcpResource({
  title: 'Arthur Danjou - Tech Stack & Tools',
  description: 'A curated list of tools, software, and hardware used by Arthur Danjou, organized by categories (homelab, IDE, hardware, software)',
  uri: 'resource://artmcp/uses',
  cache: '1 hour',
  handler: async (uri: URL) => {
    const result = await $fetch('/api/uses')

    return {
      contents: [{
        uri: uri.toString(),
        mimeType: 'text/json',
        text: JSON.stringify(result, null, 2)
      }]
    }
  }
})
