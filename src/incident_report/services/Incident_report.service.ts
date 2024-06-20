import {IIncident_report_Service,IIncident_report_Repository, ICase} from "@incident_report/models/";

class Incident_report_Service implements IIncident_report_Service<unknown> {
    private dbName: string;
  
    constructor(private readonly repository: IIncident_report_Repository<ICase>, header: any) {
      this.dbName = this.getDbNameFromHeaderOrCookie(header);
    }
  
    private getDbNameFromHeaderOrCookie(header: any): string {
      // Implementa aquí la lógica para extraer el nombre de la base de datos del header o cookie
      return header.dbId; // Esto es un ejemplo, ajusta según tu implementación real
    }
  
    async findCase(query: object): Promise<ICase[] | null> {
      return this.repository.find_case(query, this.dbName);
    }
  
    async findOneCase(caseId: string): Promise<ICase | null> {
      return this.repository.find_one_case(caseId, this.dbName);
    }
  }

export default Incident_report_Service;