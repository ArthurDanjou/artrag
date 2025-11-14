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
      description: 'Get Contact Information and Social Links of Arthur Danjou including email, LinkedIn, GitHub, Twitter, Discord, and websites'
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
    'artmcp-hobbies',
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

  server.registerResource(
    'artmcp-status_page',
    'resource://artmcp/status_page',
    {
      title: 'ArtMCP Status Page',
      description: 'Get Status Page Activity of Arthur Danjou\'s Homelab including uptime and incidents, powered by UptimeKuma'
    },
    async (uri) => {
      const result = await $fetch('/api/status_page')
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
    'artmcp-languages',
    'resource://artmcp/languages',
    {
      title: 'ArtMCP Languages',
      description: 'Get Languages spoken by Arthur Danjou with proficiency levels'
    },
    async (uri) => {
      const result = await $fetch('/api/languages')
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
    'artmcp-certifications',
    'resource://artmcp/certifications',
    {
      title: 'ArtMCP Certifications',
      description: 'Get Certifications and achievements of Arthur Danjou'
    },
    async (uri) => {
      const result = await $fetch('/api/certifications')
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
    'artmcp-profile',
    'resource://artmcp/profile',
    {
      title: 'ArtMCP Profile',
      description: 'Get comprehensive profile information of Arthur Danjou including bio, location, availability, career goals, and work preferences'
    },
    async (uri) => {
      const result = await $fetch('/api/profile')
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
        // @ts-expect-error - need to wait for support for zod 4
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

  server.registerTool(
    'get_uses_by_category',
    {
      title: 'Get Uses by Category',
      description: 'Retrieves uses Arthur Danjou uses filtered by a specific category.',
      inputSchema: {
        // @ts-expect-error - need to wait for support for zod 4
        categoryName: z.enum(['homelab', 'ide', 'hardware', 'software']).describe('The name of the category to filter uses by.')
      }
    },
    async (params: { categoryName: 'homelab' | 'ide' | 'hardware' | 'software' }) => {
      const result = await $fetch<unknown>('/api/uses_by_category', { query: params })
      return {
        content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
        structuredContent: result as unknown
      }
    }
  )

  // Prompts
  server.registerPrompt(
    'artmcp-resume',
    {
      title: 'Get Resume of Arthur Danjou',
      description: 'Get Resume in French or English format of Arthur Danjou',
      argsSchema: {
        // @ts-expect-error - need to wait for support for zod 4
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
      title: 'Get Contact Information and Social Links of Arthur Danjou',
      description: 'Get Contact Information and Social Links of Arthur Danjou including email, social media, and websites'
    },
    async () => {
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

  server.registerPrompt(
    'artmcp-skills',
    {
      title: 'Get Skills of Arthur Danjou',
      description: 'Get a list of skills that Arthur Danjou masters'
    },
    async () => {
      return {
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `Provide me a list of skills that Arthur Danjou masters.`
          }
        }]
      }
    }
  )

  server.registerPrompt(
    'artmcp-get_uses_by_category',
    {
      title: 'Get Uses by Category',
      description: 'Retrieves uses Arthur Danjou uses filtered by a specific category.',
      argsSchema: {
        // @ts-expect-error - need to wait for support for zod 4
        categoryName: z.enum(['homelab', 'ide', 'hardware', 'software']).describe('Type of project (dashboard, landing page, admin panel, etc.)')
      }
    },
    async ({ categoryName }) => {
      return {
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `How can I view the setup of Arthur for this category : ${categoryName}?`
            }
          }
        ]
      }
    }
  )

  server.registerPrompt(
    'artmcp-status_page',
    {
      title: 'Get Status Page Activity of Arthur Danjou\'s Homelab',
      description: 'Get Status Page Activity of Arthur Danjou\'s Homelab including uptime and incidents, powered by UptimeKuma'
    },
    async () => {
      return {
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `Provide me the status page activity of Arthur Danjou's homelab, including uptime and incidents.`
          }
        }]
      }
    }
  )

  server.registerPrompt(
    'artmcp-languages',
    {
      title: 'Get Languages of Arthur Danjou',
      description: 'Get Languages spoken by Arthur Danjou with proficiency levels'
    },
    async () => {
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
  )

  server.registerPrompt(
    'artmcp-certifications',
    {
      title: 'Get Certifications of Arthur Danjou',
      description: 'Get Certifications and achievements of Arthur Danjou'
    },
    async () => {
      return {
        messages: [{
          role: 'user',
          content: {
            type: 'text',
            text: `What certifications and professional achievements does Arthur Danjou have?`
          }
        }]
      }
    }
  )

  server.registerPrompt(
    'artmcp-profile',
    {
      title: 'Get Profile Information of Arthur Danjou',
      description: 'Get comprehensive profile information including bio, location, availability, and career goals'
    },
    async () => {
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
  )

  return server
}

export default defineEventHandler(async (event) => {
  if (getHeader(event, 'accept')?.includes('text/html')) {
    return sendRedirect(event, '/')
  }

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
