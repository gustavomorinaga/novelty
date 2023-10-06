import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';

import { timestampSchema } from './timestamp.schema';

export const userSchema = sqliteTable('user', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  displayName: text('display_name').notNull(),
  birthDate: text('birth_date').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  role: text('role', { enum: ['user', 'admin'] }).notNull(),

  ...timestampSchema
});

export interface IUserSelect extends InferSelectModel<typeof userSchema> {}
export interface IUserInsert extends InferInsertModel<typeof userSchema> {}
