import { cors } from '@elysiajs/cors';
import { bearer } from '@elysiajs/bearer';
import { cookie } from '@elysiajs/cookie';
import { swagger } from '@elysiajs/swagger';
import { logger } from '@bogeychan/elysia-logger';

// Configs
import { environment } from '@/configs';

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
    plugins: [cors(), bearer(), cookie(), swagger(apiDoc), logger()],
    modules: [controllers.userController]
  } as TAppConfig<'/api'>
};
