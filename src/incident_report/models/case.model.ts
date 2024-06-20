// eslint-disable-next-line import/no-extraneous-dependencies
import { ObjectId } from "mongodb";
import mongoose from 'mongoose';

const caseSchema = new mongoose.Schema({
  caseId: {
    type: String,
    required: true,
    unique: true
  },
  caseNumber: {
    type: String,
    required: true
  },
  citizen: {
    type: String,
    required: true
  },
  riskLevel: {
    type: String,
    required: true
  },
  incidentType: {
    type: String,
    required: true
  },
  incidentSubtype: {
    type: String,
    required: true
  },
  incidentDescription: {
    type: String,
    required: true
  },
  incidentDate: {
    type: String,
    required: true
  },
  incidentTime: {
    type: String,
    required: true
  },
  reportSource: {
    type: String,
    required: true
  },
  location: {
    locality: {
      type: String,
      required: true
    },
    neighborhood: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    }
  },
  attachedDocuments: {
    type: [String],
    required: true
  },
  caseManagement: {
    deriveCase: {
      type: Boolean,
      required: true
    },
    externalFileNumber: {
      type: String,
      required: true
    },
    neighborNotes: {
      type: String,
      required: true
    },
    caseStatus: {
      type: String,
      required: true
    },
    internalNotes: {
      type: String,
      required: true
    }
  },
  caseHistory: [
    {
      date: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      operator: {
        type: String,
        required: true
      }
    }
  ]
});

export const case_model = mongoose.model('Case', caseSchema);


// export type ICase = {
//   "caseId":"563846838435438435"
//   "caseNumber": "LDZR0004950",
//   "citizen": "JUAN CRUZ ALONSO MORENO",
//   "riskLevel": "alto",
//   "incidentType": "Obstrucción de calle",
//   "incidentSubtype": "Vereda rota",
//   "incidentDescription": "Lorem ipsum dolor sit amet. Ut officiis minus et voluptates reiciendis ex sint aperiam. Aut rerum ipsa et aliquam nemo ut nihil necessitatibus et voluptates modi et aliquam pariatur.",
//   "incidentDate": "13/05/2024",
//   "incidentTime": "08:49",
//   "reportSource": "Portal Autogestión",
//   "location": {
//     "locality": "Lomas de Zamora",
//     "neighborhood": "Fiorito",
//     "street": "Manuel Castro"
//   },
//   "attachedDocuments": [
//     "document1_url",
//     "document2_url",
//     "document3_url",
//     "document4_url"
//   ],
//   "caseManagement": {
//     "deriveCase": false,
//     "externalFileNumber": "242343293",
//     "neighborNotes": "Escribí acá",
//     "caseStatus": "En proceso",
//     "internalNotes": "Escribí acá"
//   },
//   "caseHistory": [
//     {
//       "date": "15/05/2024 15:26",
//       "status": "Finalizado",
//       "description": "El árbol se removido con éxito",
//       "operator": "Lucas Gómez"
//     },
//     {
//       "date": "14/05/2024 08:40",
//       "status": "En proceso",
//       "description": "Patrulla dió el aviso que el árbol caído en la calle Monte ya fue removido con éxito",
//       "operator": "Lic. Gómez"
//     }
//   ]
// }




type Location = {
  locality: string;
  neighborhood: string;
  street: string;
};

type CaseManagement = {
  deriveCase: boolean;
  externalFileNumber: string;
  neighborNotes: string;
  caseStatus: string;
  internalNotes: string;
};

type CaseHistory = {
  date: string;
  status: string;
  description: string;
  operator: string;
};

type ICase = {
  _id: ObjectId;
  caseId: string;
  caseNumber: string;
  citizen: string;
  riskLevel: string;
  incidentType: string;
  incidentSubtype: string;
  incidentDescription: string;
  incidentDate: string;
  incidentTime: string;
  reportSource: string;
  location: Location;
  attachedDocuments: string[];
  caseManagement: CaseManagement;
  caseHistory: CaseHistory[];
};

export { ICase };
