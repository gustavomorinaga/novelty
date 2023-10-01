// Schemas
import { environmentSchema } from '@/schemas';

export const environment = environmentSchema.parse(process.env);
