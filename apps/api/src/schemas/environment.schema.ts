import { t } from 'elysia';

export const environmentSchema = t.Object({
	PORT: t.Number(),
});
