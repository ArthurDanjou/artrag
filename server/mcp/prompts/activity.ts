export default defineMcpPrompt({
  description: 'Generates a prompt to retrieve Arthur Danjou\'s current real-time activity status, including what he is currently working on.',
  handler: async () => {
    return {
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `Provide me the realtime activity of Arthur Danjou.`
        }
      }]
    }
  }
})
