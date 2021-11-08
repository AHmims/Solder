import * as childProcess from 'child_process';
import * as stream from 'stream';
import pino from 'pino';

import config from '#/solder.config';

// Environment variables
const cwd = process.cwd();
const { env } = process;

// Create a stream where the logs will be written
const logThrough = new stream.PassThrough();
const logger = pino(
  {
    name: 'solder',
    level: config.LOGGING_LEVEL,
  },
  logThrough,
);

// Log to multiple files using a separate process
const child = childProcess.spawn(
  process.execPath,
  [
    require.resolve('pino-tee'),
    'info',
    config.SCRAP_RESULTS_FILE,
    'debug',
    config.LOGS_FILE,
    'error',
    config.LOGS_FILE,
  ],
  { cwd, env },
);

logThrough.pipe(child.stdin);
logThrough.pipe(process.stdout);

export default logger;
