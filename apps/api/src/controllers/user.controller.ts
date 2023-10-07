import { Elysia } from 'elysia';
import { eq, like } from 'drizzle-orm';

// Contexts
import { apiContext } from '@/contexts';
import { userModel } from '@/models';

export const userController = new Elysia({
  name: '@apps/api/controllers/user'
})
  .use(apiContext)
  .group('/users', handler =>
    handler
      .use(userModel)
      .get(
        '/',
        async ({ db, schema: { users }, query }) =>
          await db
            .select()
            .from(users)
            .where(like(users.displayName, `%${query.displayName}%`)),
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
        async ({ db, schema: { users }, params: { id } }) => {
          const [user] = await db
            .select()
            .from(users)
            .where(eq(users.id, Number(id)));

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
        async ({ db, schema: { users }, body: data }) => {
          const [user] = await db.insert(users).values(data).returning();

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
        async ({ db, schema: { users }, params: { id }, body: data }) => {
          const [user] = await db
            .update(users)
            .set(data)
            .where(eq(users.id, Number(id)))
            .returning();

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
