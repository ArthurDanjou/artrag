import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'
import { z } from 'zod'

function createServer() {
  const server = new McpServer({
    name: 'artmcp',
    version: '1.0.0'
  })

  // Resources
  server.registerResource(
    'artmcp-skills',
    'resource://artmcp/skills',
    {
      title: 'Arthur Danjou - Skills',
      description: 'A comprehensive list of technical skills, programming languages, frameworks, and tools mastered by Arthur Danjou'
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
      title: 'Arthur Danjou - Professional Experiences',
      description: 'A detailed list of Arthur Danjou\'s professional work experiences, including roles, companies, and responsibilities'
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
      title: 'Arthur Danjou - Projects Portfolio',
      description: 'A comprehensive collection of projects developed by Arthur Danjou, showcasing technical skills and achievements'
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
      title: 'Arthur Danjou - Tech Stack & Tools',
      description: 'A curated list of tools, software, and hardware used by Arthur Danjou, organized by categories (homelab, IDE, hardware, software)'
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
      title: 'Arthur Danjou - Education & Academic Background',
      description: 'Arthur Danjou\'s educational background, including degrees, institutions, and academic achievements'
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
      title: 'Arthur Danjou - Real-time Activity',
      description: 'Real-time current activity and status of Arthur Danjou, including what he\'s currently working on'
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
      title: 'Arthur Danjou - Coding Statistics',
      description: 'Detailed coding statistics and analytics from WakaTime, including programming languages, time spent coding, and productivity metrics'
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
      title: 'Arthur Danjou - Contact Information',
      description: 'Contact information and social media links for Arthur Danjou, including email, LinkedIn, GitHub, Twitter, Discord, and personal websites'
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
      title: 'Arthur Danjou - Hobbies & Interests',
      description: 'Arthur Danjou\'s personal hobbies, interests, and passions outside of professional work'
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
      title: 'Arthur Danjou - Homelab Status Page',
      description: 'Real-time status, uptime monitoring, and incident reports for Arthur Danjou\'s homelab infrastructure, powered by UptimeKuma'
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
      title: 'Arthur Danjou - Spoken Languages',
      description: 'Languages spoken by Arthur Danjou with detailed proficiency levels for each language'
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
    'artmcp-profile',
    'resource://artmcp/profile',
    {
      title: 'Arthur Danjou - Professional Profile',
      description: 'Comprehensive professional profile of Arthur Danjou, including biography, location, availability status, career goals, and work preferences'
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
      title: 'Get Arthur Danjou\'s Resume Download Link',
      description: 'Retrieves a direct download link to Arthur Danjou\'s professional resume in the specified language. Supports both English and French versions.',
      inputSchema: {
        // @ts-expect-error - need to wait for support for zod 4
        lang: z.enum(['en', 'fr']).describe('The language for the resume: \'en\' for English or \'fr\' for French.')
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
      title: 'Get Arthur Danjou\'s Tools by Category',
      description: 'Retrieves a filtered list of tools, software, and hardware used by Arthur Danjou based on a specific category. Available categories: homelab, IDE, hardware, and software.',
      inputSchema: {
        // @ts-expect-error - need to wait for support for zod 4
        categoryName: z.enum(['homelab', 'ide', 'hardware', 'software']).describe('The category to filter by: \'homelab\', \'ide\', \'hardware\', or \'software\'.')
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
      title: 'Request Arthur Danjou\'s Resume Download',
      description: 'Generates a prompt to request and retrieve Arthur Danjou\'s professional resume in the specified language (English or French).',
      argsSchema: {
        // @ts-expect-error - need to wait for support for zod 4
        lang: z.enum(['en', 'fr']).describe('The language for the resume: \'en\' for English or \'fr\' for French.')
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
      title: 'Request Arthur Danjou\'s Real-time Activity',
      description: 'Generates a prompt to retrieve Arthur Danjou\'s current real-time activity status, including what he is currently working on.'
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
      title: 'Request Arthur Danjou\'s Coding Statistics',
      description: 'Generates a prompt to retrieve Arthur Danjou\'s detailed coding statistics and analytics powered by WakaTime, including programming languages, time spent coding, and productivity metrics.'
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
      title: 'Request Arthur Danjou\'s Contact Information',
      description: 'Generates a prompt to retrieve Arthur Danjou\'s contact information and social media links, including email, LinkedIn, GitHub, Twitter, Discord, and personal websites.'
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
      title: 'Request Arthur Danjou\'s Hobbies & Interests',
      description: 'Generates a prompt to retrieve information about Arthur Danjou\'s personal hobbies, interests, and passions outside of professional work.'
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
      title: 'Request Arthur Danjou\'s Projects Portfolio',
      description: 'Generates a prompt to retrieve a comprehensive list of personal and professional projects developed by Arthur Danjou, showcasing his technical skills and achievements.'
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
      title: 'Request Arthur Danjou\'s Skills List',
      description: 'Generates a prompt to retrieve a comprehensive list of technical skills, programming languages, frameworks, and tools mastered by Arthur Danjou.'
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
      title: 'Request Arthur Danjou\'s Tools by Category',
      description: 'Generates a prompt to retrieve tools, software, and hardware used by Arthur Danjou, filtered by a specific category (homelab, IDE, hardware, or software).',
      argsSchema: {
        // @ts-expect-error - need to wait for support for zod 4
        categoryName: z.enum(['homelab', 'ide', 'hardware', 'software']).describe('The category to filter by: \'homelab\', \'ide\', \'hardware\', or \'software\'.')
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
      title: 'Request Arthur Danjou\'s Homelab Status',
      description: 'Generates a prompt to retrieve the real-time status page of Arthur Danjou\'s homelab infrastructure, including uptime monitoring and incident reports powered by UptimeKuma.'
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
      title: 'Request Arthur Danjou\'s Spoken Languages',
      description: 'Generates a prompt to retrieve the languages spoken by Arthur Danjou along with detailed proficiency levels for each language.'
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
    'artmcp-profile',
    {
      title: 'Request Arthur Danjou\'s Professional Profile',
      description: 'Generates a prompt to retrieve comprehensive professional profile information about Arthur Danjou, including biography, location, availability status, career goals, and work preferences.'
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
