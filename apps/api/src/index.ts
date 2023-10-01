// Server
import { app } from '@/server';

// Configs
import { environment, initPlugins } from '@/configs';

initPlugins(app);

app.listen(environment.PORT, ({ hostname, port }) => {
  console.log(`Server running at http://${hostname}:${port}`);
});
