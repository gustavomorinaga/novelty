import { cors } from '@elysiajs/cors';
import { helmet } from 'elysia-helmet';
// import { rateLimit } from 'elysia-rate-limit';
import { swagger } from '@elysiajs/swagger';
import { logger } from '@bogeychan/elysia-logger';

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
		host: environment.API_HOSTNAME,
		port: environment.API_PORT,
		url: environment.API_URL,
		plugins: [
			cors(),
			helmet(apiSec),
			// rateLimit(),
			swagger(apiDoc),
			logger()
		],
		modules: [...Object.values(controllers)]
	} satisfies TAppConfig<'/api'>
};
