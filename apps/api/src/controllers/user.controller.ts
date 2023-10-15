import { Elysia } from 'elysia';

// Contexts
import { apiContext } from '@/contexts';

// Models
import { userModel } from '@/models';

// Repositories
import { userRepository } from '@/repositories';

// Utils
import { zParse } from '@/utils';

// Validators
import {
	userSelectSchema,
	userFindSchema,
	userCreateSchema,
	userUpdateSchema
} from '@/validations';

export const userController = new Elysia({
	name: '@apps/api/controllers/user'
})
	.use(apiContext)
	.group('/users', (handler) =>
		handler
			.use(userModel)
			.get(
				'/',
				async ({ db, schema: { users }, query }) => {
					const { query: filter } = await zParse(userSelectSchema, { query });

					return await userRepository.findAll({
						db,
						schema: users,
						query: filter
					});
				},
				{
					detail: {
						summary: 'Get a list of users',
						tags: ['Users']
					},
					query: 'user.select.query',
					response: 'user.select.response'
				}
			)
			.get(
				'/:id',
				async ({ db, schema: { users }, params }) => {
					const { params: args } = await zParse(userFindSchema, { params });

					return await userRepository.findByID({
						db,
						schema: users,
						params: args
					});
				},
				{
					detail: {
						summary: 'Get a user by ID',
						tags: ['Users']
					},
					response: 'user.find.response'
				}
			)
			.post(
				'/',
				async ({ db, schema: { users }, body }) => {
					const { body: data } = await zParse(userCreateSchema, { body });

					return await userRepository.create({ db, schema: users, body: data });
				},
				{
					detail: {
						summary: 'Create a new user',
						tags: ['Users']
					},
					body: 'user.create.body',
					response: 'user.create.response'
				}
			)
			.put(
				'/:id',
				async ({ db, schema: { users }, params, body }) => {
					const { params: args, body: data } = await zParse(userUpdateSchema, {
						params,
						body
					});

					return await userRepository.update({
						db,
						schema: users,
						params: args,
						body: data
					});
				},
				{
					detail: {
						summary: 'Update a user by ID',
						tags: ['Users']
					},
					body: 'user.update.body',
					response: 'user.update.response'
				}
			)
			.patch(
				'/:id/activate',
				async ({ db, schema: { users }, params }) => {
					const { params: args } = await zParse(userFindSchema, { params });

					return await userRepository.changeActivation({
						db,
						schema: users,
						params: args,
						active: true
					});
				},
				{
					detail: {
						summary: 'Activate a user by ID',
						tags: ['Users']
					},
					response: 'user.activate.response'
				}
			)
			.patch(
				'/:id/deactivate',
				async ({ db, schema: { users }, params }) => {
					const { params: args } = await zParse(userFindSchema, { params });

					return await userRepository.changeActivation({
						db,
						schema: users,
						params: args,
						active: false
					});
				},
				{
					detail: {
						summary: 'Deactivate a user by ID',
						tags: ['Users']
					},
					response: 'user.deactivate.response'
				}
			)
	);
