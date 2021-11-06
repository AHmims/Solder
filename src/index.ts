import 'module-alias/register';

import start from '#/server';
import redis from './config/redis';

start();

redis.connect();

