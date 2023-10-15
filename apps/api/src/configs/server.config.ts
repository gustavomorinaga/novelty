import { cors } from '@elysiajs/cors';
import { helmet } from 'elysia-helmet';
// import { rateLimit } from 'elysia-rate-limit';
import { logger } from '@bogeychan/elysia-logger';
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
		host: environment.API_HOSTNAME,
		port: environment.API_PORT,
		plugins: [
			cors(),
			helmet(apiSec),
			// rateLimit(),
			logger(),
			swagger(apiDoc)
		],
		modules: [...Object.values(controllers)]
	} satisfies TAppConfig<'/api'>
};
