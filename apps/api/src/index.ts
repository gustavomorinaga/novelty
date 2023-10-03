// Server
import { App } from '@/server';

// Configs
import { serverConfig } from '@/configs';

const app = new App(serverConfig.api);

app.start();
