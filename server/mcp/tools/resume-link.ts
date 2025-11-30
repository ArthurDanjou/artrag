import z from 'zod'

export default defineMcpTool({
  description: 'Retrieves a direct download link to Arthur Danjou\'s professional resume in the specified language. Supports both English and French versions.',
  inputSchema: {
    lang: z.enum(['en', 'fr']).describe('The language for the resume: \'en\' for English or \'fr\' for French.')
  },
  handler: async ({ lang }) => {
    const base_url = import.meta.dev ? 'http://localhost:3000/api' : 'https://mcp.arthurdanjou.fr/api'
    const url = `${base_url}/resumes/${lang}`
    return {
      content: [{ type: 'text', text: JSON.stringify(url, null, 2) }]
    }
  }
})
