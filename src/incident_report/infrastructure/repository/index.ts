import { ConnectorMongo } from '@shared/db';
import Incident_report_Repository from './incident_report.repository';

const connectorMongo = new ConnectorMongo('mongodb://your-mongodb-url');
connectorMongo.initialize();

const incident_report_Repository = new Incident_report_Repository(connectorMongo);

export { incident_report_Repository };
