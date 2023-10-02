import { cors } from '@elysiajs/cors';
import { bearer } from '@elysiajs/bearer';
import { cookie } from '@elysiajs/cookie';
import { swagger } from '@elysiajs/swagger';

// Configs
import { environment, documentationConfig } from '@/configs';

// Controllers
import { AuthController } from '@/controllers';

// Types
import type { TAppConfig } from '@/ts';

export const serverConfig = {
  API: {
    name: 'API',
    prefix: '/api' as '',
    port: environment.PORT,
    plugins: [cors(), bearer(), cookie(), swagger(documentationConfig)],
    controllers: [AuthController]
  }
} satisfies Record<string, TAppConfig>;
