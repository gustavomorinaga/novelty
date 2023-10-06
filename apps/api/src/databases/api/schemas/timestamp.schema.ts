import { sql } from 'drizzle-orm';
import { text } from 'drizzle-orm/sqlite-core';

export const timestampSchema = {
  createdAt: text('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text('updated_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`)
};
