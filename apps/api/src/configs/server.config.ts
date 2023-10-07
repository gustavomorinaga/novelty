import { cors } from '@elysiajs/cors';
import { helmet } from 'elysia-helmet';
// import { rateLimit } from 'elysia-rate-limit';
import { logger } from '@bogeychan/elysia-logger';
import { bearer } from '@elysiajs/bearer';
import { cookie } from '@elysiajs/cookie';
import { swagger } from '@elysiajs/swagger';

// Configs
import { environment } from '@/configs';

// Security
import { apiSec } from '@/security';

// Docs
import { apiDoc } from '@/docs';

// Controllers
import * as controllers from '@/controllers';

// Types
import type { TAppConfig } from '@/ts';

export const serverConfig = {
  api: {
    name: '@api',
    prefix: '/api',
    port: environment.API_PORT,
    plugins: [
      cors(),
      helmet(apiSec),
      // rateLimit(),
      bearer(),
      cookie(),
      logger(),
      swagger(apiDoc)
    ],
    modules: [controllers.userController]
  } as TAppConfig<'/api'>
};
