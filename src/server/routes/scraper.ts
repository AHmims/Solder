import { Express } from 'express';

const setup = (app: Express) => {
  app.post('/api/queue', async (req, res, next) => {
    try {
      const queue = req.body;
      return res.json(queue);
    } catch (err) {
      return next(err);
    }
  });
};

export default setup;