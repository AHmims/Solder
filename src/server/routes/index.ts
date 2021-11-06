import { Express } from 'express';

import setupScraper from './scraper';

const setupAll = (app: Express) => {
  setupScraper(app);
};

export default setupAll;