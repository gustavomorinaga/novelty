import { t } from 'elysia';

export const commonSchema = t.Object({
	id: t.Number({ minimum: 0 }),
	createdAt: t.String(),
	updatedAt: t.String()
});
