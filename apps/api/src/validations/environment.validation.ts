import { z } from 'zod';

export const environmentSchema = z
	.object({
		ENV: z.enum(['development', 'test', 'production']).default('development'),

		API_HOSTNAME: z.coerce.string().default('localhost'),
		API_PORT: z.coerce.number().default(3000),
		API_SECURE: z.coerce
			.string()
			.default('false')
			.transform((data) => data === 'true'),
		API_JWT_SECRET: z.coerce.string(),
		API_DATABASE_URL: z.coerce.string(),
		API_DATABASE_TOKEN: z.coerce.string(),
		API_GOOGLE_CLIENT_ID: z.coerce.string(),
		API_GOOGLE_CLIENT_SECRET: z.coerce.string(),
		API_FACEBOOK_CLIENT_ID: z.coerce.string(),
		API_FACEBOOK_CLIENT_SECRET: z.coerce.string()
	})
	.transform((data) => {
		const protocol = data.API_SECURE ? 'https' : 'http';

		return { ...data, API_URL: `${protocol}://${data.API_HOSTNAME}` };
	});
