export default defineMcpTool({
  description: 'Real-time current activity and status of Arthur Danjou, including what he\'s currently working on',
  handler: async () => {
    const result = await $fetch('/api/activity')
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    }
  }
})
