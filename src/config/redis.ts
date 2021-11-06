// Imports
import { createClient } from 'redis';
import config from '#/solder.config';

// Setup redis client
const client = createClient({
  url: config.REDIS_URL
});

const redis = {
  connect: async () => {
    client.on('error', (err: Error) => console.error('Redis Client Error', err));

    await client.connect();

    return client;
  },
  close: async () => {
    await client.quit();
  }
};

export default redis;
