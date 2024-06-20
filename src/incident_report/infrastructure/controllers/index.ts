import  { incident_report_Service }  from '@incident_report/services';
import AdminController from './admin.controllers';

const adminController = new AdminController(incident_report_Service);

export { adminController };
