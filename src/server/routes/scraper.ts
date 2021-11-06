import { validate } from '#helpers/validator';
import { QueueRequestSchema } from '#lib/types';
import { Express } from 'express';

const setup = (app: Express) => {
  app.post('/api/queue', async (req, res, next) => {
    try {
      const status = await validate(req.body, QueueRequestSchema);
      if (!status) throw new Error('Invalid body.');

      return res.json(req.body);
    } catch (err) {
      return next(err);
    }
  });
};

export default setup;