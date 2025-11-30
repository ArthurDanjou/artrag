import z from 'zod'

export default defineMcpPrompt({
  description: 'Generates a prompt to request and retrieve Arthur Danjou\'s professional resume in the specified language (English or French).',
  inputSchema: {
    lang: z.enum(['en', 'fr']).describe('The language for the resume: \'en\' for English or \'fr\' for French.')
  },
  handler: async ({ lang }) => {
    return {
      messages: [{
        role: 'user',
        content: {
          type: 'text',
          text: `Provide me the link to download Arthur Danjou's resume in ${lang === 'en' ? 'English' : 'French'}.`
        }
      }]
    }
  }
})
