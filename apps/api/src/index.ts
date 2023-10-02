import { App } from '@/server';

// Configs
import { serverConfig } from '@/configs';

const api = new App(serverConfig.API);

api.start();
