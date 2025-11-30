export default defineMcpTool({
  description: 'Detailed coding statistics and analytics from WakaTime, including programming languages, time spent coding, and productivity metrics',
  handler: async () => {
    const result = await $fetch('/api/wakatime')
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    }
  }
})
