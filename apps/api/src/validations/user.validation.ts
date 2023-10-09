import { z } from 'zod';

// Validators
import { commonSchema } from '@/validations';

// Utils
import { dateFormat, dateTemplates } from '@/utils';

export const userSchema = commonSchema.extend({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  displayName: z.string(),
  birthDate: z.coerce.date(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(['user', 'admin']).default('user'),
  active: z.boolean().default(true)
});

export const userSelectSchema = z.object({
  query: userSchema
    .pick({ displayName: true, email: true, role: true })
    .extend({ active: z.coerce.boolean() })
    .partial()
});

export const userFindSchema = z.object({
  params: z.object({
    id: z.coerce.number().positive()
  })
});

export const userCreateSchema = z.object({
  body: userSchema
    .omit({ id: true, createdAt: true, updatedAt: true })
    .transform(({ birthDate, ...rest }) => ({
      ...rest,
      birthDate: dateFormat({
        value: birthDate,
        ...dateTemplates['YYYY-MM-DD'],
        options: { ...dateTemplates['YYYY-MM-DD']['options'], timeZone: 'UTC' }
      })
    }))
});

export const userUpdateSchema = z.object({
  params: z.object({
    id: z.coerce.number().positive()
  }),
  body: userSchema
    .omit({ id: true, password: true, createdAt: true, updatedAt: true })
    .partial()
    .transform(({ birthDate, ...rest }) => ({
      ...rest,
      ...(birthDate && {
        birthDate: dateFormat({
          value: birthDate,
          ...dateTemplates['YYYY-MM-DD'],
          options: { ...dateTemplates['YYYY-MM-DD']['options'], timeZone: 'UTC' }
        })
      })
    }))
});

export const userActivationSchema = z.object({
  params: z.object({
    id: z.coerce.number().positive()
  })
});

export type TUserSchema = z.infer<typeof userSchema>;
export type TUserSelectSchema = z.infer<typeof userSelectSchema>;
export type TUserFindSchema = z.infer<typeof userFindSchema>;
export type TUserCreateSchema = z.infer<typeof userCreateSchema>;
export type TUserUpdateSchema = z.infer<typeof userUpdateSchema>;
export type TUserActivationSchema = z.infer<typeof userActivationSchema>;
