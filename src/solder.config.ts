/** Imports */
import * as path from 'path';
import * as dotenv from 'dotenv';
import envy from '#helpers/envy';

dotenv.config();

const __parent_dir = path.join(__dirname, '..');

export default {
  MODULES_DIRECTORY: path.join(__parent_dir, envy('MODULES_PATH')),
  QUEUE_FILE: path.join(__parent_dir, envy('QUEUE_FILE')),
  LOGS_FILE: path.join(__parent_dir, envy('LOGS_FILE')),
  SCRAP_RESULTS_FILE: path.join(__parent_dir, envy('SCRAP_RESULTS_FILE')),
};
