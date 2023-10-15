import { blob, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql, type InferSelectModel } from 'drizzle-orm';

export const userSchema = sqliteTable('user', {
	id: text('id').primaryKey(),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	displayName: text('display_name').notNull(),
	birthDate: text('birth_date').notNull(),
	email: text('email').notNull(),
	password: text('password').notNull(),
	picture: text('picture'),
	role: text('role', { enum: ['user', 'admin'] })
		.notNull()
		.default('user'),
	active: integer('active', { mode: 'boolean' }).notNull().default(true),
	createdAt: text('created_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text('updated_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`)
});

export const userSessionSchema = sqliteTable('user_session', {
	id: text('id').primaryKey(),
	userID: text('user_id')
		.notNull()
		.references(() => userSchema.id),
	activeExpires: blob('active_expires', { mode: 'bigint' }).notNull(),
	idleExpires: blob('active_expires', { mode: 'bigint' }).notNull()
});

export const userKeySchema = sqliteTable('user_key', {
	id: text('id').primaryKey(),
	userID: text('user_id')
		.notNull()
		.references(() => userSchema.id),
	hashedPassword: text('hashed_password')
});

export type TUserSchema = InferSelectModel<typeof userSchema>;
export type TUserSessionSchema = InferSelectModel<typeof userSessionSchema>;
export type TUserKeySchema = InferSelectModel<typeof userKeySchema>;
