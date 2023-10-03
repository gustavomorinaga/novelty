import { Elysia, type ElysiaConfig } from 'elysia';

export type TElysiaCallback = (app: Elysia) => Elysia;
export type TElysiaPlugin = Elysia | TElysiaCallback;

export type TAppConfig<T extends string = ''> = ElysiaConfig<T> & {
  port: number;
  plugins: Array<TElysiaPlugin>;
  contexts: Array<Elysia>;
};
