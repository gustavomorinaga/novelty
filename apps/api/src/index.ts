// Server
import { app } from '@/server';

// Configs
import { initPlugins } from '@/configs';

initPlugins(app);

app.listen(3000, ({ hostname, port }) => {
	console.log(`Server running at http://${hostname}:${port}`);
});
