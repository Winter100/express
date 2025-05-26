import express, { NextFunction, Request, Response } from 'express';
import todo from './routes/todo.routes';

const app = express();

app.use(express.json());
app.use('/api/todo', todo);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  res.json({ message: err.message });
});

export default app;
