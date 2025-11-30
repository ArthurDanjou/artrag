export default defineMcpPrompt({
  description: 'Generates a prompt to retrieve the languages spoken by Arthur Danjou along with detailed proficiency levels for each language.',
  handler: async () => {
    return {
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `What languages does Arthur Danjou speak and at what proficiency level?`
        }
      }]
    }
  }
})
