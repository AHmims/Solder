/** Imports */
import * as path from 'path';
import * as dotenv from 'dotenv';
import envy from '#helpers/envy';

dotenv.config();

export default {
  MODULES_DIRECTORY: path.join(__dirname, envy('MODULES_PATH') as string) as string,
  QUEUE_FILE: path.join(__dirname, '..', envy('QUEUE_FILE') as string) as string,
  LOGS_FILE: path.join(__dirname, '..', envy('LOGS_FILE') as string) as string,
  SCRAP_RESULTS_FILE: path.join(__dirname, '..', envy('SCRAP_RESULTS_FILE') as string) as string,
};
