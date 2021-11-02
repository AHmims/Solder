/** Imports */
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export default {
  MODULES_DIRECTORY: path.join(
    __dirname,
    process.env['MODULES_PATH'] as string
  ) as string,
  QUEUE_FILE: path.join(
    __dirname,
    '..',
    process.env['QUEUE_FILE'] as string
  ) as string,
  LOGS_FILE: path.join(
    __dirname,
    '..',
    process.env['LOGS_FILE'] as string
  ) as string,
  SCRAP_RESULTS_FILE: path.join(
    __dirname,
    '..',
    process.env['SCRAP_RESULTS_FILE'] as string
  ) as string,
};
