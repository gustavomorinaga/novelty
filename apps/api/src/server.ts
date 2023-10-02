import { Elysia } from 'elysia';

// Types
import type { TAppConfig, TElysiaCallback, TElysiaPlugin } from '@/ts';

export class App {
  private app: Elysia;
  private port: number;
  private plugins: Array<TElysiaPlugin> = [];
  private controllers: Array<TElysiaCallback> = [];

  constructor({ port, plugins, controllers, ...props }: TAppConfig) {
    this.app = new Elysia(props);
    this.port = port;
    this.plugins = plugins;
    this.controllers = controllers;

    this.registerPlugins();
    this.registerEvents();
    this.registerControllers();
  }

  private registerPlugins() {
    for (const plugin of this.plugins) this.app.use((<unknown>plugin) as Elysia);
  }

  private registerEvents() {
    this.app.on('error', error => console.error(`❌ Error: ${error.message}`));
  }

  private registerControllers() {
    for (const controller of this.controllers) this.app.use(controller);
  }

  public start() {
    return this.app.listen(this.port, ({ hostname, port }) => {
      console.log(`Server running at http://${hostname}:${port}`);
    });
  }
}
