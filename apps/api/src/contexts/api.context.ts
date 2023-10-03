import { Elysia } from 'elysia';

// Databases
import { apiDB } from '@/databases';

// Controllers
import { authController } from '@/controllers';

export const apiContext = new Elysia({
  name: '@apps/api/context'
})
  .decorate('db', apiDB)
  .use(authController);
