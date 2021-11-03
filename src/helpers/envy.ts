// Improves the performance of accessing .env files.
// Using Js instead of Ts because typing environment variables is a hassle.

import { Indexable } from 'lib/interfaces/Indexable';

const cache: Indexable = {};

const envy = (key: string, defaultValue?: string) => {
  if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`Key "${key}" is missing from process.env`);
  }

  if (cache[key]) return cache[key];

  cache[key] = process.env[key];

  return process.env[key];
};

export default envy;