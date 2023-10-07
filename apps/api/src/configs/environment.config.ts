// Validations
import { environmentSchema } from '@/validations';

export const environment = environmentSchema.parse(process.env);
