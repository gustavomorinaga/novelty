import { Elysia, type ElysiaConfig } from 'elysia';

export type TElysiaCallback = (app: Elysia) => Elysia;
export type TElysiaPlugin = Elysia | TElysiaCallback;

export type TAppConfig = ElysiaConfig & {
  port: number;
  plugins: Array<TElysiaPlugin>;
  controllers: Array<TElysiaCallback>;
};
