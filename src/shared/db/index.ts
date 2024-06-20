import { config } from '@shared/index';
import ConnectorMongo from './mongodb';
// import Database from './mariadb';

// const connector = new Database(config.DB_CONNECTION);
const connectorMongo = new ConnectorMongo(config.DB_CONNECTION_MONGO);

export { connectorMongo, ConnectorMongo };
// export { connector, Database };



