/** Imports */
import * as path from 'path';
import * as dotenv from 'dotenv';

import envy from '#helpers/envy';

dotenv.config();

const __root_dir = path.join(__dirname, '..');

export default {
  MODULES_DIRECTORY: path.join(__root_dir, envy('MODULES_PATH')),
  QUEUE_FILE: path.join(__root_dir, envy('QUEUE_FILE')),
  LOGS_FILE: path.join(__root_dir, envy('LOGS_FILE')),
  SCRAP_RESULTS_FILE: path.join(__root_dir, envy('SCRAP_RESULTS_FILE')),
  REDIS_URL: `redis://${envy('REDIS_USERNAME')}:${envy('REDIS_PASSWORD')}@${envy('REDIS_HOST')}:${envy('REDIS_PORT')}`
};
