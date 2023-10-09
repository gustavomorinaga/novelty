import { t } from 'elysia';

// Schemas
import { commonSchema } from '@/schemas';

export const userSchema = t.Composite([
  commonSchema,
  t.Object({
    firstName: t.String(),
    lastName: t.String(),
    displayName: t.String(),
    birthDate: t.Date(),
    email: t.String(),
    password: t.String(),
    role: t.Union([t.Literal('user'), t.Literal('admin')], { default: 'user' }),
    active: t.Boolean()
  })
]);
