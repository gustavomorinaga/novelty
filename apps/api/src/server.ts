import { Elysia } from 'elysia';

// Types
import type { TAppConfig } from '@/ts';

export class App<T extends string = ''> {
	private app: Elysia<T>;
	private port: TAppConfig['port'];
	private url: TAppConfig['url'];
	private plugins: TAppConfig['plugins'] = [];
	private modules: TAppConfig['modules'] = [];

	constructor({ port, url, plugins, modules, ...props }: TAppConfig<T>) {
		this.app = new Elysia(props);
		this.port = port;
		this.url = url;
		this.plugins = plugins;
		this.modules = modules;

		this.registerEvents();
		if (this.plugins.length) this.injectModules(this.plugins);
		if (this.modules.length) this.injectModules(this.modules);
	}

	private injectModules(modules: TAppConfig['plugins'] | TAppConfig['modules']) {
		for (const context of modules) this.app.use((<unknown>context) as Elysia);
	}

	private registerEvents() {
		this.app.onError(({ error }) => console.error(`❌ Error: ${JSON.stringify(error)}`));
	}

	public start() {
		return this.app.listen(this.port, () => {
			const baseURL = `${this.url}:${this.port}${this.app.config.prefix}`;

			console.log(`🌐 Server running at ${baseURL}`);
			console.log(`📚 API Docs running at ${baseURL}/swagger`);
		});
	}
}
