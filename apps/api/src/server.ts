import { Elysia } from 'elysia';

// Types
import type { TAppConfig } from '@/ts';

export class App<T extends string = ''> {
  private app: Elysia<T>;
  private port: TAppConfig['port'];
  private plugins: TAppConfig['plugins'] = [];
  private contexts: TAppConfig['contexts'] = [];

  constructor({ port, plugins, contexts, ...props }: TAppConfig<T>) {
    this.app = new Elysia(props);
    this.port = port;
    this.plugins = plugins;
    this.contexts = contexts;

    this.registerEvents();
    if (this.plugins.length) this.registerContexts(this.plugins);
    if (this.contexts.length) this.registerContexts(this.contexts);
  }

  private registerContexts(contexts: TAppConfig['plugins'] | TAppConfig['contexts']) {
    for (const context of contexts) this.app.use((<unknown>context) as Elysia);
  }

  private registerEvents() {
    this.app.onError(({ error }) => console.error(`❌ ${error}`));
  }

  public start() {
    return this.app.listen(this.port, ({ hostname, port }) => {
      console.log(`Server running at http://${hostname}:${port}`);
    });
  }
}
