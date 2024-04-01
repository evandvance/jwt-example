import router, { Response, Request } from 'express';
import { getUser } from '../services/UserService';

const SALT_ROUNDS = 8;

const userRoute = router();

userRoute.get('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await getUser(email);

  if (user!.password == bcrypt.hash) res.send();
});

export default userRoute;
