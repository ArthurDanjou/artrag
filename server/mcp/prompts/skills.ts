export default defineMcpPrompt({
  description: 'Generates a prompt to retrieve a comprehensive list of technical skills, programming languages, frameworks, and tools mastered by Arthur Danjou.',
  handler: async () => {
    return {
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `Provide me a list of skills that Arthur Danjou masters.`
        }
      }]
    }
  }
})
