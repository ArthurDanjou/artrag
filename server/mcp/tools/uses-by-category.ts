import z from 'zod'

export default defineMcpTool({
  description: 'Retrieves a filtered list of tools, software, and hardware used by Arthur Danjou based on a specific category. Available categories: homelab, IDE, hardware, and software.',
  inputSchema: {
    categoryName: z.enum(['homelab', 'ide', 'hardware', 'software']).describe('The category to filter by: \'homelab\', \'ide\', \'hardware\', or \'software\'.')
  },
  handler: async ({ categoryName }) => {
    const event = useEvent()

    const result = await queryCollection(event, 'uses')
      .where('extension', '=', 'md')
      .where('category', '=', categoryName)
      .all()

    return {
      content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
      structuredContent: result as { [key: string]: unknown }
    }
  }
})
