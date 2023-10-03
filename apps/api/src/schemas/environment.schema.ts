import { z } from 'zod';

export const environmentSchema = z.object({
  ENV: z.enum(['development', 'production', 'test']).default('development'),

  API_PORT: z.coerce.number().default(3000),
  API_JWT_SECRET: z.coerce.string(),
  API_DATABASE_URL: z.coerce.string(),
  API_DATABASE_TOKEN: z.coerce.string()
});
