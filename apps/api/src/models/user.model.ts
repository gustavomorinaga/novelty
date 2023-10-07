import { Elysia, t } from 'elysia';

// Schemas
import { userSchema } from '@/schemas';

export const userModel = new Elysia({ name: '@apps/api/models/user' }).model({
  'user.select.query': t.Partial(t.Pick(userSchema, ['displayName', 'email', 'role'])),
  'user.select.response': t.Array(
    t.Composite([
      t.Omit(userSchema, ['birthDate', 'password', 'createdAt', 'updatedAt']),
      t.Object({ createdAt: t.String(), updatedAt: t.String() })
    ])
  ),

  'user.find.response': t.Union([
    t.Composite([
      t.Omit(userSchema, ['birthDate', 'password', 'createdAt', 'updatedAt']),
      t.Object({ createdAt: t.String(), updatedAt: t.String() })
    ]),
    t.Null()
  ]),

  'user.create.body': t.Omit(userSchema, ['id']),
  'user.create.response': t.Composite([
    t.Omit(userSchema, ['birthDate', 'password', 'createdAt', 'updatedAt']),
    t.Object({ createdAt: t.String(), updatedAt: t.String() })
  ]),

  'user.update.body': userSchema,
  'user.update.response': t.Composite([
    t.Omit(userSchema, ['birthDate', 'password', 'createdAt', 'updatedAt']),
    t.Object({ createdAt: t.String(), updatedAt: t.String() })
  ])
});
