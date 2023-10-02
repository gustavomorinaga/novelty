import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import { jwt } from '@elysiajs/jwt';
import { bearer } from '@elysiajs/bearer';
import { swagger } from '@elysiajs/swagger';

import { documentationConfig, environment } from '@/configs';

export class App extends Elysia {
  private plugins = [
    cors(),
    bearer(),
    jwt({ secret: environment.JWT_SECRET }),
    swagger(documentationConfig)
  ];

  constructor() {
    super();

    this.loadPlugins();
  }

  private loadPlugins() {
    for (const plugin of this.plugins) this.use((<unknown>plugin) as Elysia);
  }

  public start() {
    return this.listen(environment.PORT, ({ hostname, port }) => {
      console.log(`Server running at http://${hostname}:${port}`);
    });
  }
}
