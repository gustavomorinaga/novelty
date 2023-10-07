import { z } from 'zod';

export const commonSchema = z.object({
  id: z.number().int().min(0),
  createdAt: z.date(),
  updatedAt: z.date()
});
