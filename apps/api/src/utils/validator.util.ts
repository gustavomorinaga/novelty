import { AnyZodObject, ZodError, z } from 'zod';

export async function zParse<T extends AnyZodObject>(
  schema: T,
  data: unknown
): Promise<z.infer<T>> {
  try {
    return await schema.parseAsync(data);
  } catch (error) {
    throw error as ZodError;
  }
}
