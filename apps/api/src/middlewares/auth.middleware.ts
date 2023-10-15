import { Elysia } from 'elysia';

// Contexts
import { auth } from '@/auth';

export const authMiddleware = new Elysia({
	name: '@apps/middlewares/auth'
})
	.decorate('auth', auth)
	.derive(async (context) => {
		const authRequest = context.auth.handleRequest(context);
		const session = await authRequest.validate();

		return { session };
	});
