export default defineMcpPrompt({
  description: 'Generates a prompt to retrieve Arthur Danjou\'s contact information and social media links, including email, LinkedIn, GitHub, Twitter, Discord, and personal websites.',
  handler: async () => {
    return {
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `How can I contact Arthur Danjou? Provide all contact methods and social links.`
        }
      }]
    }
  }
})
