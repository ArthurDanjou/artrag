# ArtMCP - Arthur Danjou's MCP Server

A comprehensive [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server exposing professional profile information about Arthur Danjou. Built with [Nuxt](https://nuxt.com) and deployed on [NuxtHub](https://hub.nuxt.com) at the Edge.

🔗 **Live Server**: https://mcp.arthurdanjou.fr

## 🎯 Features

### MCP Resources

The server exposes the following resources through the Model Context Protocol:

- **📊 Skills** (`resource://artmcp/skills`) - Complete list of technical skills (programming languages, frameworks, tools)
- **💼 Experiences** (`resource://artmcp/experiences`) - Professional work experience and projects
- **🚀 Projects** (`resource://artmcp/projects`) - Portfolio of personal and professional projects
- **🎓 Education** (`resource://artmcp/education`) - Academic background and degrees
- **🌐 Languages** (`resource://artmcp/languages`) - Spoken languages with proficiency levels
- **👤 Profile** (`resource://artmcp/profile`) - Comprehensive profile with bio, location, availability, career goals, and work preferences
- **🎨 Hobbies** (`resource://artmcp/hobbies`) - Personal interests and activities
- **📞 Contact** (`resource://artmcp/contact`) - Professional contact information and social links
- **🛠️ Uses** (`resource://artmcp/uses`) - Tools, hardware, and software setup
- **📈 Activity** (`resource://artmcp/activity`) - Real-time coding activity (Discord integration)
- **⏱️ Wakatime** (`resource://artmcp/wakatime`) - Coding statistics powered by Wakatime
- **🏠 Status Page** (`resource://artmcp/status_page`) - Homelab services uptime and incidents

### MCP Tools

- **`get_resume_link`** - Get download link for resume in English or French
- **`get-uses-by-category`** - Filter uses by category (homelab, ide, hardware, software)

### MCP Prompts

Pre-configured prompts for common queries about:
- Resume generation
- Skills and expertise
- Projects showcase
- Real-time activity
- Contact information
- And more...

## 🏗️ Architecture

This project uses:
- **Nuxt 4** with Nitro for server-side rendering
- **@nuxt/content** for content management
- **@modelcontextprotocol/sdk** for MCP server implementation
- **NuxtHub** for edge deployment on Cloudflare Workers
- **Zod** for schema validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- pnpm 10.12.1+

### Installation

```bash
# Install dependencies
pnpm install
```

### Environment Variables

Create a `.env` file (optional):

```bash
# Discord integration (optional)
NUXT_DISCORD_USER_ID=""
NUXT_DISCORD_ID=""
NUXT_DISCORD_TOKEN=""

# Wakatime integration (optional)
NUXT_WAKATIME_USER_ID=""
NUXT_WAKATIME_CODING=""
NUXT_WAKATIME_EDITORS=""
NUXT_WAKATIME_LANGUAGES=""
NUXT_WAKATIME_OS=""

# Status page (optional)
NUXT_STATUS_PAGE=""
```

### Development

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

### Production

Build the application for production:

```bash
pnpm build
```

### Deployment

Deploy to NuxtHub/Cloudflare:

```bash
pnpm deploy
```

## 📚 API Endpoints

All resources are also available as REST API endpoints:

- `GET /api/skills`
- `GET /api/experiences`
- `GET /api/projects`
- `GET /api/educations`
- `GET /api/languages`
- `GET /api/profile`
- `GET /api/hobbies`
- `GET /api/contact`
- `GET /api/uses`
- `GET /api/uses-by-category?categoryName={category}`
- `GET /api/activity`
- `GET /api/wakatime`
- `GET /api/status_page`
- `GET /api/resumes/{en|fr}` - Download resume

## 🧪 Development

### Linting

```bash
pnpm lint
```

### Type Checking

```bash
npx tsc --noEmit --skipLibCheck
```

## 📂 Content Structure

Content is managed in the `content/` directory:

```
content/
├── skills.json              # Technical skills
├── languages.json           # Spoken languages
├── profile.json             # Comprehensive profile info
├── contact.json             # Contact information
├── hobbies.md               # Personal interests
├── experiences/*.md         # Work experiences
├── projects/*.md            # Project portfolio
├── education/*.md           # Academic background
└── uses/*.md                # Tools and setup
```

## 🔧 Technologies

- **Frontend/Backend**: Nuxt 4, Vue 3, Nitro
- **MCP**: Model Context Protocol SDK
- **Content**: Nuxt Content with better-sqlite3
- **Deployment**: Cloudflare Workers via NuxtHub
- **Validation**: Zod schemas

## 📖 MCP Integration

To use this server with an MCP client:

1. Configure your MCP client to connect to `https://mcp.arthurdanjou.fr/mcp`
2. Or use the API directly via REST endpoints

Example MCP client configuration:
```json
{
  "mcpServers": {
    "artmcp": {
      "url": "https://mcp.arthurdanjou.fr/mcp"
    }
  }
}
```

## 🤝 Contributing

This is a personal portfolio project. Feel free to use it as inspiration for your own MCP server!

## 📝 License

Private project - All rights reserved

## 👤 About

**Arthur Danjou**
- Developer enjoying Artificial Intelligence and Machine Learning. Mathematics Student at Paris Dauphine-PSL University specialised in Statistics
- 📍 Paris, France
- 🔗 [LinkedIn](https://go.arthurdanjou.fr/linkedin)
- 🐙 [GitHub](https://go.arthurdanjou.fr/github)
- 📧 [Email](https://go.arthurdanjou.fr/mail-pro)

---

Built with ❤️ using Nuxt and the Model Context Protocol

