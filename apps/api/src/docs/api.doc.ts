import { version } from '@@/package.json';

import type { ElysiaSwaggerConfig } from '@elysiajs/swagger/src/types';

export const apiDoc: ElysiaSwaggerConfig = {
  documentation: {
    info: {
      title: 'Novelty API Documentation',
      description: 'API for managing books in Novelty bookstore',
      contact: {
        name: 'Gustavo Morinaga',
        email: 'me@gustavomorinaga.dev',
        url: 'https://gustavomorinaga.dev'
      },
      version
    }
  }
};
