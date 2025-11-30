export default defineMcpPrompt({
  description: 'Generates a prompt to retrieve information about Arthur Danjou\'s personal hobbies, interests, and passions outside of professional work.',
  handler: async () => {
    return {
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `What are the hobbies, interests and passions of Arthur Danjou?`
        }
      }]
    }
  }
})
