import express, { Express } from 'express';

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(() => {
  console.log(`App is listening on port ${PORT}`);
});
