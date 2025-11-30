export default defineMcpPrompt({
  description: 'Generates a prompt to retrieve comprehensive professional profile information about Arthur Danjou, including biography, location, availability status, career goals, and work preferences.',
  handler: async () => {
    return {
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `Provide me comprehensive profile information about Arthur Danjou including his bio, location, availability, career goals, and work preferences.`
        }
      }]
    }
  }
})
