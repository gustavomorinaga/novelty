import { Elysia, t } from 'elysia';

const userGenericSchema = t.Object({
  id: t.Number({ minimum: 0 }),
  firstName: t.String({ minLength: 2 }),
  lastName: t.String({ minLength: 2 }),
  displayName: t.String(),
  birthDate: t.String(),
  email: t.String(),
  password: t.String(),
  role: t.Union([t.Literal('user'), t.Literal('admin')], { default: 'user' })
});

const userSelectSchema = t.Omit(userGenericSchema, ['password']);

export const userModel = new Elysia({ name: '@apps/api/models/user' }).model({
  'user.select.query': t.Partial(
    t.Pick(userGenericSchema, [
      'firstName',
      'lastName',
      'displayName',
      'birthDate',
      'email',
      'role'
    ])
  ),
  'user.select.response': t.Array(userSelectSchema),

  'user.find.response': t.Union([userSelectSchema, t.Null()]),

  'user.create.body': t.Omit(userGenericSchema, ['id']),
  'user.create.response': userSelectSchema,

  'user.update.params': t.Pick(userSelectSchema, ['id']),
  'user.update.body': userGenericSchema
});
