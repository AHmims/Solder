// Imports
import { default as red } from 'redis';
import config from '#/solder.config';

// Setup redis client
const client = red.createClient({
  url: config.REDIS_URL
});

const redis = {
  connect: async () => {
    client.on('error', err => console.error('Redis Client Error', err));

    await client.connect();

    return client;
  },
  close: async () => {
    await client.disconnect();
  }
};

export default redis;
