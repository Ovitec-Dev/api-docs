// import { Query } from '../query.model';

interface IIncident_report_Repository<T> {
  // queryConstruction(query:Query):Promise<string>
  find_one_case(caseId: string,dbName: string): Promise< T | null> ;
  find_case(query:object,dbName: string): Promise< T[] | null> 
}

export { IIncident_report_Repository };
