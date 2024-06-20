// import { Database } from '@shared/db';
import { config } from '@shared/index';
import { Server } from '@server/index';
import incident_reportRoutes from '@incident_report/infrastructure/routers';

(async () => {
  // const database = new Database(config.DB_CONNECTION);
  // await database.authenticate();
  const routes = [...(await incident_reportRoutes())];
  // const routes = [...(await incident_reportRoutes()),...(await Authentication())];
  const server = new Server(config.PORT, routes);
  server.start();
})();
