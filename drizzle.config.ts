// drizzle.config.ts
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    //TODO:hardcoded for now
    url: `postgresql://postgres:12345678@localhost:5432/p`,
  },
  schema: './src/payload-generated-schema.ts',
})
