import router, { Request, Response } from 'express';
import { auth } from '../auth/auth';

const contentRoute = router();

//Make a protected route
contentRoute.use(auth);

contentRoute.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Protected Content' });
});
export default contentRoute;
