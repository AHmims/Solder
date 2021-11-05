import envy from '#helpers/envy';
import logger from '#helpers/logger';
import cors from 'cors';
import express, { Request, Response } from 'express';

const PORT = envy('PORT', 8080) as number;

const app = express();

app.use(
  cors({
    origin: (_, cb) => cb(null, true),
    credentials: true
  })
);

app.use((err: Error, _: Request, res: Response) => {
  return res.status(500).json({
    message:err.message
  });
});

app.listen(PORT, '0.0.0.0', () => {
  logger.info(`SolderAPI listening on port: ${PORT}`);
});