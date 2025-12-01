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

### MCP Tools

- **`activity`** - Real-time current activity and status of Arthur Danjou
- **`resume-link`** - Get download link for resume in English or French
- **`stats`** - Detailed coding statistics and analytics from WakaTime
- **`status-page`** - Real-time status and uptime monitoring for homelab infrastructure
- **`uses-by-category`** - Filter uses by category (homelab, ide, hardware, software)
- **`weather`** - Get current weather for a city

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
- **@nuxtjs/mcp-toolkit** for MCP server implementation
- **NuxtHub** for edge deployment on Cloudflare Workers
- **nuxt-studio** for content management studio
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
- `GET /api/education`
- `GET /api/languages`
- `GET /api/profile`
- `GET /api/hobbies`
- `GET /api/contact`
- `GET /api/uses`
- `GET /api/activity`
- `GET /api/wakatime`
- `GET /api/status-page`
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
├── profile.md               # Comprehensive profile info
├── contact.json             # Contact information
├── hobbies.md               # Personal interests
├── documentation.md         # MCP documentation
├── experiences/*.md         # Work experiences
├── projects/*.md            # Project portfolio
├── education/*.md           # Academic background
└── uses/*.md                # Tools and setup
```

## 🔧 Technologies

- **Frontend/Backend**: Nuxt 4, Vue 3, Nitro
- **MCP**: @nuxtjs/mcp-toolkit
- **Content**: Nuxt Content with better-sqlite3
- **Content Studio**: nuxt-studio
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
- Data Science & Applied AI student at Paris Dauphine-PSL University, passionate about machine learning and mathematical modelling
- 📍 Paris, France
- 🔗 [LinkedIn](https://go.arthurdanjou.fr/linkedin)
- 🐙 [GitHub](https://go.arthurdanjou.fr/github)
- 📧 [Email](https://go.arthurdanjou.fr/mail-pro)

---

Built with ❤️ using Nuxt and the Model Context Protocol

