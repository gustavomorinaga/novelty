import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

// Configs
import { environment } from '@/configs';

// Schemas
import { userSchema as users } from '@/databases/api/schemas';

const schema = { users };

const apiClient = createClient({
	url: environment.API_DATABASE_URL,
	authToken: environment.API_DATABASE_TOKEN
});

const apiDB = drizzle(apiClient, { schema });

export { apiClient, apiDB, schema };
export type * from '@/databases/api/schemas';
