import z from 'zod'

export default defineMcpPrompt({
  description: 'Generates a prompt to retrieve tools, software, and hardware used by Arthur Danjou, filtered by a specific category (homelab, IDE, hardware, or software).',
  inputSchema: {
    categoryName: z.enum(['homelab', 'ide', 'hardware', 'software']).describe('The category to filter by: \'homelab\', \'ide\', \'hardware\', or \'software\'.')
  },
  handler: async ({ categoryName }) => {
    return {
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `How can I view the setup of Arthur for this category : ${categoryName}?`
          }
        }
      ] }
  }
})
