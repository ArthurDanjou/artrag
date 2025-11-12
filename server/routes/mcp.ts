import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js'

function createServer() {
  const server = new McpServer({
    name: 'nuxt-ui',
    version: '1.0.0'
  })

  server.registerResource('', '', )

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
