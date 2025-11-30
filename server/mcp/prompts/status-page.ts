export default defineMcpPrompt({
  description: 'Generates a prompt to retrieve the real-time status page of Arthur Danjou\'s homelab infrastructure, including uptime monitoring and incident reports powered by UptimeKuma.',
  handler: async () => {
    return {
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `Provide me the status page activity of Arthur Danjou's homelab, including uptime and incidents.`
        }
      }]
    }
  }
})
