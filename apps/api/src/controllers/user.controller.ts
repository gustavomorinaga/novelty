import { Elysia } from 'elysia';

// Contexts
import { apiContext } from '@/contexts';

// DTOs
import { userModel } from '@/dtos';
import { eq, like } from 'drizzle-orm';

export const userController = new Elysia({
  name: '@apps/api/controllers/user'
})
  .use(apiContext)
  .use(userModel)
  .group('/users', app =>
    app
      .get(
        '/',
        async ({ db, schema: { users }, query }) =>
          await db
            .select()
            .from(users)
            .where(like(users.displayName, `%${query.displayName}%`)),
        {
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
        { response: 'user.find.response' }
      )
      .post(
        '/',
        async ({ db, schema: { users }, body: data }) => {
          const [user] = await db.insert(users).values(data).returning();

          return user;
        },
        {
          body: 'user.create.body',
          response: 'user.create.response'
        }
      )
  );
