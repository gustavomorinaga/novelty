import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	// if (!locals.isNew) throw redirect(302, '/intro');

	return {};
};
