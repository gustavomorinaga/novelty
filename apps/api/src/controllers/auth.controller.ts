import { Elysia } from 'elysia';

// Middlewares
import { JWTMiddleware } from '@/middlewares';

export const authController = (app: Elysia) =>
  app.group('/auth', app =>
    app.use(JWTMiddleware).post('/sign-in', async ({ jwt, params }) => {
      const accessToken = await jwt.sign(params);

      return accessToken;
    })
  );
