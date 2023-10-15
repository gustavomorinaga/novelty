/** @type { import("drizzle-kit").Config } */
export default {
	driver: 'turso',
	schema: './src/databases/api/schemas',
	out: './src/databases/api/migrations',
	dbCredentials: {
		url: process.env.API_DATABASE_URL,
		authToken: process.env.API_DATABASE_TOKEN
	}
};
