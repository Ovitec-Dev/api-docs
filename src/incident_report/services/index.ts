import {incident_report_Repository} from '@incident_report/infrastructure/repository'
import Incident_report_Service from './Incident_report.service';
// const incident_report_Service = new IncidentReportService(cartRepository);
const incident_report_Service = new Incident_report_Service(incident_report_Repository , Headers);

export { incident_report_Service };
