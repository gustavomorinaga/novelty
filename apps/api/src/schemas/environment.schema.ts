import { z } from 'zod';

export const environmentSchema = z.object({
  ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),

  JWT_SECRET: z.coerce.string()
});
