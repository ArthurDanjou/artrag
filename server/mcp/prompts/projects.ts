export default defineMcpPrompt({
  description: 'Generates a prompt to retrieve a comprehensive list of personal and professional projects developed by Arthur Danjou, showcasing his technical skills and achievements.',
  handler: async () => {
    return {
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `Provide me a list of projects done by Arthur Danjou.`
        }
      }]
    }
  }
})
