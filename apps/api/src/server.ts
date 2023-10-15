import { Elysia } from 'elysia';

// Types
import type { TAppConfig } from '@/ts';

export class App<T extends string = ''> {
	private app: Elysia<T>;
	private host: TAppConfig['host'];
	private port: TAppConfig['port'];
	private plugins: TAppConfig['plugins'] = [];
	private modules: TAppConfig['modules'] = [];

	constructor({ host, port, plugins, modules, ...props }: TAppConfig<T>) {
		this.app = new Elysia(props);
		this.host = host;
		this.port = port;
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
		this.app.onError(({ error }) => console.error(`❌ ${error}`));
	}

	public start() {
		return this.app.listen(this.port, () => {
			console.log(`Server running at ${this.host}:${this.port}`);
		});
	}
}
