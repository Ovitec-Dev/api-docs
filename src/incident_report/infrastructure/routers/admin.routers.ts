import { Router } from 'express';
import { adminController } from '../controllers';

const router = Router();

router.get('/admin/list-case/', adminController.list_case );

export default router;
