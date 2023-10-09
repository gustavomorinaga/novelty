import { t } from 'elysia';

// Schemas
import { commonSchema } from '@/schemas';

export const userSchema = t.Composite([
  commonSchema,
  t.Object({
    firstName: t.String({ default: 'John' }),
    lastName: t.String({ default: 'Doe' }),
    displayName: t.String({ default: 'John Doe' }),
    birthDate: t.String({ default: '1990-01-01' }),
    email: t.String({ default: 'john.doe@example.com' }),
    password: t.String({ default: 'Password123$' }),
    role: t.Union([t.Literal('user'), t.Literal('admin')], { default: 'user' }),
    active: t.Boolean({ default: true })
  })
]);
