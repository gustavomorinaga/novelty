import { Elysia, type ElysiaConfig } from 'elysia';
import { cors } from '@elysiajs/cors';
import { jwt } from '@elysiajs/jwt';
import { bearer } from '@elysiajs/bearer';
import { swagger } from '@elysiajs/swagger';

import { documentationConfig, environment } from '@/configs';

export class App extends Elysia {
  private readonly plugins = [
    cors(),
    bearer(),
    jwt({ secret: environment.JWT_SECRET }),
    swagger(documentationConfig)
  ];

  constructor(props: ElysiaConfig) {
    super(props);

    this.registerPlugins();
    this.registerEvents();
  }

  private registerPlugins() {
    for (const plugin of this.plugins) this.use((<unknown>plugin) as Elysia);
  }

  private registerEvents() {
    this.on('error', error => console.error(`❌ Error: ${error.message}`));
  }

  public start() {
    return this.listen(environment.PORT, ({ hostname, port }) => {
      console.log(`Server running at http://${hostname}:${port}`);
    });
  }
}
