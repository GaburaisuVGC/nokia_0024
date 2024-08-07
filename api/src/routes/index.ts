import { Router, Request, Response, NextFunction } from 'express';
const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World');
});

router.get('/health', (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(200);
});
export default router;