// Improves the performance of accessing .env files.
// Using Js instead of Ts because typing environment variables is a hassle.

import { Indexable } from '#lib/types/indexable';

const cache: Indexable = {};

const envy = (key: string, defaultValue?: string): string => {
  if (!(key in process.env)) {
    if (defaultValue) return defaultValue;
    throw new Error(`Key "${key}" is missing from process.env`);
  }

  if (cache[key]) return cache[key] as string;

  cache[key] = process.env[key];

  return process.env[key] as string;
};

export default envy;
