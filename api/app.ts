import express, { Express } from 'express';
import userRoute from './routes/Users';
import contentRoute from './routes/ProtectedContent';

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/users', userRoute);
app.use('/content', contentRoute);

app.listen(() => {
  console.log(`App is listening on port ${PORT}`);
});
