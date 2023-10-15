import { Elysia } from 'elysia';

// Databases
import { apiDB, schema } from '@/databases';

export const apiContext = new Elysia({
	name: '@apps/api/context'
})
	.decorate('db', apiDB)
	.decorate('schema', schema);
