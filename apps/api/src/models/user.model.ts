import { Elysia, t } from 'elysia';

// Schemas
import { userSchema } from '@/schemas';

export const userModel = new Elysia({ name: '@apps/api/models/user' }).model({
  'user.select.query': t.Partial(
    t.Pick(userSchema, ['firstName', 'lastName', 'displayName', 'birthDate', 'email', 'role'])
  ),
  'user.select.response': t.Array(t.Omit(userSchema, ['password'])),

  'user.find.response': t.Union([t.Omit(userSchema, ['password']), t.Null()]),

  'user.create.body': t.Omit(userSchema, ['id']),
  'user.create.response': t.Omit(userSchema, ['password']),

  'user.update.body': userSchema,
  'user.update.response': t.Omit(userSchema, ['password'])
});
