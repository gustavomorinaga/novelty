import { Elysia } from 'elysia';
import { eq, like } from 'drizzle-orm';

// Contexts
import { apiContext } from '@/contexts';

// Models
import { userModel } from '@/models';

// Utils
import { zParse } from '@/utils';

// Validators
import {
  userSelectSchema,
  userFindSchema,
  userCreateSchema,
  userUpdateSchema
} from '@/validations';

export const userController = new Elysia({
  name: '@apps/api/controllers/user'
})
  .use(apiContext)
  .group('/users', handler =>
    handler
      .use(userModel)
      .get(
        '/',
        async ({ db, schema: { users }, query }) => {
          const { query: filter } = await zParse(userSelectSchema, { query });

          const result = await db
            .select({
              id: users.id,
              firstName: users.firstName,
              lastName: users.lastName,
              displayName: users.displayName,
              email: users.email,
              role: users.role,
              createdAt: users.createdAt,
              updatedAt: users.updatedAt
            })
            .from(users)
            .where(like(users.displayName, `%${filter.displayName}%`));

          return result;
        },
        {
          detail: {
            summary: 'Get a list of users',
            tags: ['Users']
          },
          query: 'user.select.query',
          response: 'user.select.response'
        }
      )
      .get(
        '/:id',
        async ({ db, schema: { users }, params }) => {
          const {
            params: { id }
          } = await zParse(userFindSchema, { params });

          const [user] = await db
            .select({
              id: users.id,
              firstName: users.firstName,
              lastName: users.lastName,
              displayName: users.displayName,
              email: users.email,
              role: users.role,
              createdAt: users.createdAt,
              updatedAt: users.updatedAt
            })
            .from(users)
            .where(eq(users.id, id));

          return user || null;
        },
        {
          detail: {
            summary: 'Get a user by ID',
            tags: ['Users']
          },
          response: 'user.find.response'
        }
      )
      .post(
        '/',
        async ({ db, schema: { users }, body }) => {
          const { body: data } = await zParse(userCreateSchema, { body });

          const now = new Date();
          const createdAt = now.toISOString();
          const updatedAt = now.toISOString();

          const [user] = await db
            .insert(users)
            .values({ ...data, createdAt, updatedAt })
            .returning({
              id: users.id,
              firstName: users.firstName,
              lastName: users.lastName,
              displayName: users.displayName,
              email: users.email,
              role: users.role,
              createdAt: users.createdAt,
              updatedAt: users.updatedAt
            });

          return user;
        },
        {
          detail: {
            summary: 'Create a new user',
            tags: ['Users']
          },
          body: 'user.create.body',
          response: 'user.create.response'
        }
      )
      .put(
        '/:id',
        async ({ db, schema: { users }, params, body }) => {
          const {
            params: { id },
            body: data
          } = await zParse(userUpdateSchema, { params, body });

          const [user] = await db.update(users).set(data).where(eq(users.id, id)).returning({
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            displayName: users.displayName,
            email: users.email,
            role: users.role,
            createdAt: users.createdAt,
            updatedAt: users.updatedAt
          });

          return user;
        },
        {
          detail: {
            summary: 'Update a user by ID',
            tags: ['Users']
          },
          body: 'user.update.body',
          response: 'user.update.response'
        }
      )
  );
