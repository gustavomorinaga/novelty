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
    .omit({ id: true, password: true, createdAt: true, updatedAt: true })
    .partial()
    .transform(({ birthDate, ...rest }) => ({
      ...rest,
      birthDate: birthDate?.toISOString()
    }))
});

export type TUserSchema = z.infer<typeof userSchema>;
export type TUserSelectSchema = z.infer<typeof userSelectSchema>;
export type TUserFindSchema = z.infer<typeof userFindSchema>;
export type TUserCreateSchema = z.infer<typeof userCreateSchema>;
export type TUserUpdateSchema = z.infer<typeof userUpdateSchema>;
