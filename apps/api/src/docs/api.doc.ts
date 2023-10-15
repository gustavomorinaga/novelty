import { version } from '@@/package.json';

import type { ElysiaSwaggerConfig } from '@elysiajs/swagger/src/types';

export const apiDoc: ElysiaSwaggerConfig = {
	autoDarkMode: true,
	documentation: {
		info: {
			title: 'Novelty API Documentation',
			description: 'API for managing books in Novelty bookstore',
			version,
			contact: {
				name: 'Gustavo Morinaga',
				email: 'me@gustavomorinaga.dev',
				url: 'https://gustavomorinaga.dev'
			},
			license: {
				name: 'MIT',
				url: 'https://github.com/gustavomorinaga/novelty/blob/main/LICENSE'
			}
		},
		tags: ['Auth', 'Authors', 'Books', 'Genres', 'Publishers', 'Reviews', 'Series', 'Users'].map(
			(tag) => ({
				name: tag,
				description: `Operations about ${tag.toLowerCase()}`
			})
		)
	}
};
