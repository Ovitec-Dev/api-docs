import { NextFunction, Request, Response } from 'express';
import { IIncident_report_Service } from '../../models';
import { ICase } from '../../models/case.model';

class AdminController {
  constructor(private readonly incident_report_Service:IIncident_report_Service<ICase> ) {}

  list_case = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { query } = req;
        const result = await this.incident_report_Service.findCase(query)
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  };
}

export default AdminController;
