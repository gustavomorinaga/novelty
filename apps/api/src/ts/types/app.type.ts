import { Elysia, type ElysiaConfig } from 'elysia';

export type TElysiaCallback = (app: Elysia) => Elysia;
export type TElysiaInjection = Elysia | Promise<Elysia> | TElysiaCallback;

export type TAppConfig<T extends string = ''> = ElysiaConfig<T> & {
	host: string;
	port: number;
	url: string;
	plugins: Array<TElysiaInjection>;
	modules: Array<TElysiaInjection>;
};
