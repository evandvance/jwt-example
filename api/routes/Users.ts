import router, { Response, Request } from 'express';
import { getUser, makeUser } from '../services/UserService';
import { generateToken } from '../auth/auth';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 8;

const userRoute = router();

userRoute.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === null || password === null) {
    res.status(400).json({ message: 'Request missing email or password' });
  }

  const user = await getUser(email);

  if (user!.password == (await bcrypt.hash(password, SALT_ROUNDS))) {
    res.json({ jwt: generateToken(email) });
  } else {
    res.send('Login Failed');
  }
});

userRoute.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === null || password === null) {
    res.status(400).json({ message: 'Request missing email or password' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await makeUser(email, hashedPassword);

    res.json(newUser);
  } catch {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default userRoute;
