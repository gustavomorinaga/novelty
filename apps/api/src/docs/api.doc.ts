import { version } from '@@/package.json';

import type { ElysiaSwaggerConfig } from '@elysiajs/swagger/src/types';

export const apiDoc: ElysiaSwaggerConfig = {
  documentation: { info: { title: 'Novelty API Documentation', version } }
};
