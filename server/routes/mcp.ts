import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { z } from 'zod'

function createServer() {
  const server = new McpServer({
    name: 'nuxt-ui',
    version: '1.0.0'
  })

  // Ressources
  server.registerResource(
    'artmcp-skills',
    'resource://artmcp/skills',
    {
      title: 'ArtMCP Skills',
      description: 'Complete list of skills of Arthur Danjou'
    },
    async (uri) => {
      const result = await $fetch('/api/skills')
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(result, null, 2)
        }]
      }
    }
  )

  server.registerResource(
    'artmcp-experiences',
    'resource://artmcp/experiences',
    {
      title: 'ArtMCP Experiences',
      description: 'Complete list of experiences of Arthur Danjou'
    },
    async (uri) => {
      const result = await $fetch('/api/experiences')
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(result, null, 2)
        }]
      }
    }
  )

  server.registerResource(
    'artmcp-projects',
    'resource://artmcp/projects',
    {
      title: 'ArtMCP Projects',
      description: 'Complete list of projects of Arthur Danjou'
    },
    async (uri) => {
      const result = await $fetch('/api/projects')
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(result, null, 2)
        }]
      }
    }
  )

  server.registerResource(
    'artmcp-uses',
    'resource://artmcp/uses',
    {
      title: 'ArtMCP Uses',
      description: 'Complete list of uses of Arthur Danjou filtered by categories'
    },
    async (uri) => {
      const result = await $fetch('/api/uses')
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(result, null, 2)
        }]
      }
    }
  )

  server.registerResource(
    'artmcp-education',
    'resource://artmcp/education',
    {
      title: 'ArtMCP Education',
      description: 'Complete list of education of Arthur Danjou'
    },
    async (uri) => {
      const result = await $fetch('/api/educations')
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(result, null, 2)
        }]
      }
    }
  )

  server.registerResource(
    'artmcp-activity',
    'resource://artmcp/activity',
    {
      title: 'ArtMCP Activity',
      description: 'Get realtime activity of Arthur Danjou'
    },
    async (uri) => {
      const result = await $fetch('/api/activity')
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(result, null, 2)
        }]
      }
    }
  )

  server.registerResource(
    'artmcp-wakatime',
    'resource://artmcp/wakatime',
    {
      title: 'ArtMCP Wakatime',
      description: 'Get Wakatime statistics of Arthur Danjou'
    },
    async (uri) => {
      const result = await $fetch('/api/wakatime')
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(result, null, 2)
        }]
      }
    }
  )

  server.registerResource(
    'artmcp-contact',
    'resource://artmcp/contact',
    {
      title: 'ArtMCP Contact',
      description: 'Get Contact Information of Arthur Danjou'
    },
    async (uri) => {
      const result = await $fetch('/api/contact')
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(result, null, 2)
        }]
      }
    }
  )

  server.registerResource(
    'artmcp-contact',
    'resource://artmcp/hobbies',
    {
      title: 'ArtMCP Hobbies',
      description: 'Get Hobbies Information of Arthur Danjou'
    },
    async (uri) => {
      const result = await $fetch('/api/hobbies')
      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify(result, null, 2)
        }]
      }
    }
  )

  // Tools
  server.registerTool(
    'get_resume_link',
    {
      title: 'Get Resume Link',
      description: 'Provide a link to download Arthur Danjou\'s resume in the requested language.',
      inputSchema: {
        // @ts-expect-error zod inference issue
        lang: z.enum(['en', 'fr']).describe('The language for the resume, \'en\' or \'fr\'.')
      }
    },
    async ({ lang }: { lang: 'en' | 'fr' }) => {
      const base_url = import.meta.dev ? 'http://localhost:3000/api' : 'https://mcp.arthurdanjou.fr/api'
      const url = `${base_url}/resumes/${lang}`
      return {
        content: [{ type: 'text', text: JSON.stringify(url, null, 2) }]
      }
    }
  )

  // Prompts : toutes les commandes de artchat
  server.registerPrompt(
    'artmcp-resume',
    {
      title: 'Get Resume of Arthur Danjou',
      description: 'Get Resume in French or English format of Arthur Danjou',
      argsSchema: {
        // @ts-expect-error zod inference issue
        lang: z.enum(['en', 'fr']).describe('The language for the resume, \'en\' or \'fr\'.')
      }
    },
    async ({ lang }: { lang: 'en' | 'fr' }) => {
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
  )

  server.registerPrompt(
    'artmcp-activity',
    {
      title: 'Get Realtime Activity of Arthur Danjou',
      description: 'Get Realtime Activity of Arthur Danjou'
    },
    async () => {
      return {
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `Provide me the realtime activity of Arthur Danjou.`
          }
        }]
      }
    }
  )

  server.registerPrompt(
    'artmcp-wakatime',
    {
      title: 'Get Stats of Arthur Danjou',
      description: 'Get Stats of Arthur Danjou powered by Wakatime'
    },
    async () => {
      return {
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `Provide me the stats of Arthur Danjou powered by Wakatime.`
          }
        }]
      }
    }
  )

  server.registerPrompt(
    'artmcp-contact',
    {
      title: 'Get Contact Information of Arthur Danjou',
      description: 'Get Contact Information of Arthur Danjou'
    },
    async () => {
      return {
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `How can I contact Arthur Danjou?`
          }
        }]
      }
    }
  )

  server.registerPrompt(
    'artmcp-hobbies',
    {
      title: 'Get Hobbies Information of Arthur Danjou',
      description: 'Get Hobbies Information of Arthur Danjou'
    },
    async () => {
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
  )

  server.registerPrompt(
    'artmcp-projects',
    {
      title: 'Get Projects Done by Arthur Danjou',
      description: 'Get a list of projects done by Arthur Danjou'
    },
    async () => {
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
  )

  return server
}

export default defineEventHandler(async (event) => {
  const server = createServer()

  const transport: StreamableHTTPServerTransport = new StreamableHTTPServerTransport({
    sessionIdGenerator: undefined
  })

  event.node.res.on('close', () => {
    transport.close()
    server.close()
  })

  await server.connect(transport)

  const body = await readBody(event)

  await transport.handleRequest(event.node.req, event.node.res, body)
})
