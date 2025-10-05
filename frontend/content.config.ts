// content.config.ts
import { z } from 'zod';
import { defineCollection, defineContentConfig } from '@nuxt/content';

// Del 1: TypeScript og Zod Imports
// --------------------------------------------------------------------------------------------------
const profileCollection = z.object({
    title: z.string(), 
    createdts: z.string(),
    updatedts: z.string().optional(),
});

const achievementsCollection = z.object({
    title: z.string(), 
    createdts: z.string(),
    updatedts: z.string().optional(),
});

// Del 2: defineContentConfig (Hovedfunksjonen)
// --------------------------------------------------------------------------------------------------

export default defineContentConfig({
  collections: {
    
    // Del 3: 'profiles' Samlingsdefinisjon (Din Spesialdefinisjon)
    // --------------------------------------------------------------------------------------------------
    'dev': defineCollection(
        {
            type: 'page', // Bruk 'page' når innholdet skal ha en unik rute/URL-sti (som din profil)
            source: 'profiles/dev/*.md', 
            schema: profileCollection,
        }),

    'personal_profile': defineCollection(
                {
            type: 'page', // Bruk 'page' når innholdet skal ha en unik rute/URL-sti (som din profil)
            source: 'profiles/personal-profiles/*.md', 
            schema: profileCollection,
        }),
      
    'achievements': defineCollection(
        {
            type: 'page', // Bruk 'page' når innholdet skal ha en unik rute/URL-sti (som din profil)
            source: 'achievements/achievements/*.md', 
            schema: achievementsCollection,
        }),

    'academic': defineCollection(
        {
            type: 'page', // Bruk 'page' når innholdet skal ha en unik rute/URL-sti (som din profil)
            source: 'achievements/academic/*.md', 
            schema: achievementsCollection,
        }),
    
    // Del 4: 'content' Standard Samlingsdefinisjon
    // --------------------------------------------------------------------------------------------------
    
    // Beholder standard "content" samlingen for alle andre udefinerte filer.
    content: defineCollection({
      type: 'page',
      source: '**/*.md', // Inkluderer alle Markdown-filer som ikke matcher 'profiles'-samlingen
    }),
  },
});