import Elysia from 'elysia';
import { jwt } from '@elysiajs/jwt';

// Configs
import { environment } from '@/configs';

export const JWTMiddleware = new Elysia({
  name: '@apps/jwt'
}).use(jwt({ secret: environment.API_JWT_SECRET }));
