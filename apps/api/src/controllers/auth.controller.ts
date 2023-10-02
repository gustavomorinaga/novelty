import { Elysia } from 'elysia';

// Middlewares
import { JWTMiddleware } from '@/middlewares';

export const AuthController = (app: Elysia) =>
  app.group('/auth', app =>
    app.use(JWTMiddleware).post('/sign-in', async ({ jwt, params }) => {
      const accessToken = await jwt.sign(params);

      console.log(accessToken);

      return [];
    })
  );
