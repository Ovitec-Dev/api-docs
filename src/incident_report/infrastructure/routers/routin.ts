import { Router, Response, Request } from 'express';

const router = Router();

router.get('/', async (_req: Request, res: Response) => {
  const users = 'Hello , you are into at future';
  res.send(users);
});

export default router;
