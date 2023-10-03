import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

// Configs
import { environment } from '@/configs';

const apiClient = createClient({
  url: environment.API_DATABASE_URL,
  authToken: environment.API_DATABASE_TOKEN
});

export const apiDB = drizzle(apiClient);
