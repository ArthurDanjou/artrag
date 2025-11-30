export default defineMcpTool({
  description: 'Real-time status, uptime monitoring, and incident reports for Arthur Danjou\'s homelab infrastructure, powered by UptimeKuma',
  handler: async () => {
    const result = await $fetch('/api/status-page')
    return {
      content: [{
        type: 'text',
        text: JSON.stringify(result, null, 2)
      }]
    }
  }
})
