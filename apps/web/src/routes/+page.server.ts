import { API_URI } from '$env/static/private';

export const load = async ({ fetch }) => {
	const users = await fetch(`${API_URI}/users`).then((res) => res.json());

	return { users };
};
