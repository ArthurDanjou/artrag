import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        publishedAt: z.string(),
        readingTime: z.number().optional(),
        tags: z.array(z.string()),
        cover: z.string(),
        favorite: z.boolean().optional()
      })
    }),
    usesCategories: defineCollection({
      type: 'data',
      source: 'uses/categories/*.md',
      schema: z.object({
        slug: z.string(),
        name: z.string()
      })
    }),
    uses: defineCollection({
      type: 'data',
      source: 'uses/*.md',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        category: z.string()
      })
    }),
    skills: defineCollection({
      type: 'page',
      source: 'skills.json',
      schema: z.object({
        description: z.string(),
        body: z.array(z.object({
          id: z.string(),
          name: z.string(),
          items: z.array(z.object({
            name: z.string(),
            icon: z.string()
          }))
        }))
      })
    }),
    experiences: defineCollection({
      type: 'data',
      source: 'experiences/*.md',
      schema: z.object({
        title: z.string(),
        company: z.string(),
        companyUrl: z.string().url().optional(),
        startDate: z.string(),
        endDate: z.string().optional(),
        location: z.string(),
        description: z.string(),
        tags: z.array(z.string())
      })
    }),
    education: defineCollection({
      type: 'data',
      source: 'education/*.md',
      schema: z.object({
        degree: z.string(),
        institution: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        location: z.string()
      })
    }),
    contact: defineCollection({
      type: 'page',
      source: 'contact.json',
      schema: z.object({
        body: z.array(z.object({
          name: z.string(),
          icon: z.string().optional(),
          value: z.string().url(),
          username: z.string().optional()
        }))
      })
    }),
    hobbies: defineCollection({
      type: 'page',
      source: 'hobbies.md'
    }),
    languages: defineCollection({
      type: 'page',
      source: 'languages.json',
      schema: z.object({
        body: z.array(z.object({
          name: z.string(),
          level: z.string(),
          proficiency: z.string()
        }))
      })
    }),
    certifications: defineCollection({
      type: 'page',
      source: 'certifications.json',
      schema: z.object({
        body: z.array(z.object({
          name: z.string(),
          issuer: z.string(),
          date: z.string(),
          url: z.string().url().optional()
        }))
      })
    }),
    profile: defineCollection({
      type: 'page',
      source: 'profile.json',
      schema: z.object({
        shortBio: z.string(),
        location: z.object({
          current: z.string(),
          timezone: z.string(),
          remote: z.boolean()
        }),
        availability: z.object({
          status: z.string(),
          types: z.array(z.string()),
          preferences: z.array(z.string()),
          startDate: z.string().optional()
        }),
        careerGoals: z.array(z.string()),
        workPreferences: z.object({
          workStyle: z.array(z.string()),
          companySize: z.array(z.string()),
          industries: z.array(z.string()),
          roles: z.array(z.string())
        }),
        achievements: z.array(z.string())
      })
    })
  }
})
