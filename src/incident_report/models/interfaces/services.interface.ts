// import BusinessError from "@shared/handler/businessError";
// import { Query } from "../query.model";

export interface IIncident_report_Service<T> {
//  manager_case ():Promise<string|T>
  findCase(query: object): Promise<T[] | null> 
  findOneCase(caseId: string): Promise<T | null>
  }