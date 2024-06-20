import { ConnectorMongo } from '@shared/db';
import logger from '@shared/utils/logger';
import { ICase, IIncident_report_Repository } from '@incident_report/models/index';

class Incident_report_Repository implements IIncident_report_Repository<ICase> {
  constructor(private readonly dbConnector: ConnectorMongo) {}

  async find_case(query: object, dbName: string): Promise<ICase[] | null> {
    try {
      const list_filtro_case = this.dbConnector.getCollection<ICase>(dbName, 'Incident_report').find(query);
      const casesArray = await list_filtro_case.toArray(); 
      return casesArray;
    } catch (error) {
      logger.error('Error on find_case Repository: ', error);
      throw error;
    }
  }

  async find_one_case(caseId: string, dbName: string): Promise<ICase | null> {
    try {
      return this.dbConnector.getCollection<ICase>(dbName, 'Incident_report').findOne({ caseId: { number : caseId }, paid: false });
    } catch (error) {
      logger.error('Error on find_one_case Repository: ', error);
      throw error;
    }
  }
}

export default Incident_report_Repository;
