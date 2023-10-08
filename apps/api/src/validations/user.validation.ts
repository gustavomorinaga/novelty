import { z } from 'zod';

// Validators
import { commonSchema } from '@/validations';

export const userSchema = commonSchema.extend({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  displayName: z.string(),
  birthDate: z.date(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(['user', 'admin']).default('user')
});

export const userSelectSchema = z.object({
  query: userSchema.pick({ displayName: true, email: true, role: true }).partial()
});

export const userFindSchema = z.object({
  params: z.object({
    id: z.coerce.number().min(0)
  })
});

export const userCreateSchema = z.object({
  body: userSchema
    .omit({ id: true, createdAt: true, updatedAt: true })
    .transform(({ birthDate, ...rest }) => ({
      ...rest,
      birthDate: birthDate.toISOString()
    }))
});

export const userUpdateSchema = z.object({
  params: z.object({
    id: z.coerce.number().min(0)
  }),
  body: userSchema
    .omit({ id: true, createdAt: true, updatedAt: true })
    .partial()
    .transform(({ birthDate, ...rest }) => ({
      ...rest,
      birthDate: birthDate?.toISOString()
    }))
});
