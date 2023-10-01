import Elysia from 'elysia';
import { cors } from '@elysiajs/cors';
import { jwt } from '@elysiajs/jwt';
import { bearer } from '@elysiajs/bearer';
import { swagger } from '@elysiajs/swagger';

import type { TFrameworkConfig } from '@/ts';

export const frameworkConfig: TFrameworkConfig = {
	plugins: [
		cors(),
		jwt({ secret: 'secret' }),
		bearer(),
		(<unknown>swagger()) as Elysia,
	],
};

export const initPlugins = (app: Elysia) => {
	for (const plugin of frameworkConfig.plugins) app.use(plugin);
};
