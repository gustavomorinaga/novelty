import { t } from 'elysia';

export const userSchema = t.Object({
  id: t.Number({ minimum: 0 }),
  firstName: t.String({ minLength: 2 }),
  lastName: t.String({ minLength: 2 }),
  displayName: t.String(),
  birthDate: t.String(),
  email: t.String(),
  password: t.String(),
  role: t.Union([t.Literal('user'), t.Literal('admin')], { default: 'user' })
});
