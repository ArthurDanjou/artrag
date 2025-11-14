import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { z } from '@nuxt/content'

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

  // Tools
  server.registerTool(
    'get_resume_link',
    {
      title: 'Get Resume Link',
      description: 'Provide a link to download Arthur Danjou\'s resume in the requested language.',
      inputSchema: {
        lang: z.enum(['en', 'fr']).describe('The language for the resume, \'en\' or \'fr\'.')
      }
    },
    async ({ lang }) => {
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
        lang: z.enum(['en', 'fr']).describe('The language for the resume, \'en\' or \'fr\'.')
      }
    },
    async ({ lang }) => {
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
