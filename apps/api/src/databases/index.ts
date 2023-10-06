import { migrate } from 'drizzle-orm/libsql/migrator';

// Databases
import { apiDB } from './api';

await Promise.all([migrate(apiDB, { migrationsFolder: 'src/databases/api/migrations' })]);

export * from './api';
