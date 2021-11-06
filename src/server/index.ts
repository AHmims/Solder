import envy from '#helpers/envy';
import logger from '#helpers/logger';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import setupAll from './routes';

const PORT = parseInt(envy('PORT', '42069'));

const start = () => {
  const app = express();

  app.use(express.json());

  app.use(
    cors({
      origin: (_, cb) => cb(null, true),
      credentials: true
    })
  );

  setupAll(app);

  // eslint-disable-next-line
  app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    return res.status(500).json({
      message:err.message
    });
  });

  app.listen(PORT, '0.0.0.0', () => {
    logger.info(`SolderAPI listening on port: ${PORT}`);
  });
};

export default start;

