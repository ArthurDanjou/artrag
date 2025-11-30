---
title: ArtMCP Documentation
description: Documentation for ArtMCP - Arthur Danjou's Model Context Protocol Server
---

# ArtMCP Documentation

Welcome to **ArtMCP**, a comprehensive [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server exposing professional profile information about Arthur Danjou. Built with [Nuxt](https://nuxt.com) and deployed on [NuxtHub](https://hub.nuxt.com) at the Edge.

## Overview

ArtMCP provides AI assistants and applications with structured access to Arthur Danjou's professional information through the Model Context Protocol. This includes profile data, skills, experiences, projects, and real-time activity information.

---

## Tools

Tools are executable functions that AI assistants can call to perform actions or retrieve dynamic data.

### `activity`
**Description:** Real-time current activity and status of Arthur Danjou, including what he's currently working on.

### `resume-link`
**Description:** Retrieves a direct download link to Arthur Danjou's professional resume in the specified language.
- **Input:** `lang` - The language for the resume: `'en'` for English or `'fr'` for French.

### `stats`
**Description:** Detailed coding statistics and analytics from WakaTime, including programming languages, time spent coding, and productivity metrics.

### `status-page`
**Description:** Real-time status, uptime monitoring, and incident reports for Arthur Danjou's homelab infrastructure, powered by UptimeKuma.

### `uses-by-category`
**Description:** Retrieves a filtered list of tools, software, and hardware used by Arthur Danjou based on a specific category.
- **Input:** `categoryName` - The category to filter by: `'homelab'`, `'ide'`, `'hardware'`, or `'software'`.

### `weather`
**Description:** Get current weather for a city.
- **Input:** `city` - City name.

---

## Prompts

Prompts are pre-configured conversation starters that guide AI assistants on how to query specific information.

### `activity`
**Description:** Generates a prompt to retrieve Arthur Danjou's current real-time activity status, including what he is currently working on.

### `contact`
**Description:** Generates a prompt to retrieve Arthur Danjou's contact information and social media links, including email, LinkedIn, GitHub, Twitter, Discord, and personal websites.

### `hobbies`
**Description:** Generates a prompt to retrieve information about Arthur Danjou's personal hobbies, interests, and passions outside of professional work.

### `languages`
**Description:** Generates a prompt to retrieve the languages spoken by Arthur Danjou along with detailed proficiency levels for each language.

### `profile`
**Description:** Generates a prompt to retrieve comprehensive professional profile information about Arthur Danjou, including biography, location, availability status, career goals, and work preferences.

### `projects`
**Description:** Generates a prompt to retrieve a comprehensive list of personal and professional projects developed by Arthur Danjou, showcasing his technical skills and achievements.

### `resume`
**Description:** Generates a prompt to request and retrieve Arthur Danjou's professional resume in the specified language.
- **Input:** `lang` - The language for the resume: `'en'` for English or `'fr'` for French.

### `skills`
**Description:** Generates a prompt to retrieve a comprehensive list of technical skills, programming languages, frameworks, and tools mastered by Arthur Danjou.

### `stats`
**Description:** Generates a prompt to retrieve Arthur Danjou's detailed coding statistics and analytics powered by WakaTime, including programming languages, time spent coding, and productivity metrics.

### `status-page`
**Description:** Generates a prompt to retrieve the real-time status page of Arthur Danjou's homelab infrastructure, including uptime monitoring and incident reports powered by UptimeKuma.

### `uses-by-category`
**Description:** Generates a prompt to retrieve tools, software, and hardware used by Arthur Danjou, filtered by a specific category.
- **Input:** `categoryName` - The category to filter by: `'homelab'`, `'ide'`, `'hardware'`, or `'software'`.

---

## Resources

Resources are static or semi-static data endpoints that provide structured information about Arthur Danjou.

### `resource://artmcp/profile`
**Title:** Arthur Danjou - Professional Profile  
**Description:** Comprehensive professional profile of Arthur Danjou, including biography, location, availability status, career goals, and work preferences.

### `resource://artmcp/contact`
**Title:** Arthur Danjou - Contact Information & Social Media Links  
**Description:** Contact information and social media links for Arthur Danjou, including email, LinkedIn, GitHub, Twitter, Discord, and personal websites.

### `resource://artmcp/education`
**Title:** Arthur Danjou - Education & Academic Background  
**Description:** Arthur Danjou's educational background, including degrees, institutions, and academic achievements.

### `resource://artmcp/experiences`
**Title:** Arthur Danjou - Experiences  
**Description:** A detailed list of Arthur Danjou's professional work experiences, including roles, companies, and responsibilities.

### `resource://artmcp/hobbies`
**Title:** Arthur Danjou - Hobbies & Interests  
**Description:** Arthur Danjou's personal hobbies, interests, and passions outside of professional work.

### `resource://artmcp/languages`
**Title:** Arthur Danjou - Spoken Languages & Proficiency Levels  
**Description:** Languages spoken by Arthur Danjou with detailed proficiency levels for each language.

### `resource://artmcp/projects`
**Title:** Arthur Danjou - Projects Portfolio  
**Description:** A comprehensive collection of projects developed by Arthur Danjou, showcasing technical skills and achievements.

### `resource://artmcp/skills`
**Title:** Arthur Danjou - Skills  
**Description:** A comprehensive list of technical skills, programming languages, frameworks, and tools mastered by Arthur Danjou.

### `resource://artmcp/uses`
**Title:** Arthur Danjou - Tech Stack & Tools  
**Description:** A curated list of tools, software, and hardware used by Arthur Danjou, organized by categories (homelab, IDE, hardware, software).

---

## MCP Integration

To use this server with an MCP client, configure your client to connect to:

```
https://mcp.arthurdanjou.fr/mcp
```

### Example Configuration

```json
{
  "mcpServers": {
    "artmcp": {
      "url": "https://mcp.arthurdanjou.fr/mcp"
    }
  }
}
```

---

## API Endpoints

All resources are also available as REST API endpoints:

- `GET /api/profile` - Profile information
- `GET /api/contact` - Contact information
- `GET /api/skills` - Technical skills
- `GET /api/experiences` - Work experiences
- `GET /api/education` - Education background
- `GET /api/projects` - Projects portfolio
- `GET /api/languages` - Spoken languages
- `GET /api/hobbies` - Hobbies and interests
- `GET /api/uses` - Tech stack and tools
- `GET /api/activity` - Real-time activity
- `GET /api/wakatime` - Coding statistics
- `GET /api/status-page` - Status page
- `GET /api/resumes/{en|fr}` - Download resume
