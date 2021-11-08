/** Imports */
import * as path from 'path';
import * as dotenv from 'dotenv';

import envy from '#helpers/envy';

dotenv.config();

const __root_dir = path.join(__dirname, '..');

export default {
  MODULES_DIRECTORY: path.join(__root_dir, envy('MODULES_PATH', 'modules')),
  QUEUE_FILE: path.join(__root_dir, envy('QUEUE_FILE', 'queue.json')),
  LOGS_FILE: path.join(__root_dir, envy('LOGS_FILE', 'logs/scrap-logs.json')),
  SCRAP_RESULTS_FILE: path.join(__root_dir, envy('SCRAP_RESULTS_FILE', 'scrap-result.json')),
  REDIS_URL: `redis://${envy('REDIS_USERNAME', 'admin')}:${envy('REDIS_PASSWORD', 'tHatOnETimeIWasReincARnaTeDAsAcat')}@${envy('REDIS_HOST', 'solder-redis')}:${envy('REDIS_PORT', '6379')}`,
  APPLICATION_PORT: parseInt(envy('APPLICATION_PORT', '42069')),
  LOGGING_LEVEL: envy('LOGGING_LEVEL', 'silent'),
  NOTIFICATIONS_ENDPOINT: envy('NOTIFICATIONS_ENDPOINT'),
  NOTIFICATIONS_ENDPOINT_METHOD: envy('NOTIFICATIONS_ENDPOINT_METHOD'),
};
