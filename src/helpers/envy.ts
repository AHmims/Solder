// Improves the performance of accessing .env files.

const cache: { [key:string]: string} = {};

const envy = (key: string, defaultValue?: string)=> {
  if (!(key in process.env) || typeof process.env[key] === undefined) {
    if (defaultValue) return defaultValue;
    throw new Error(`Key "${key}" is missing from process.env`);
  }

  if (!(key in cache)) {
    cache[key] = <string>process.env[key];
  }

  return cache[key];
};

export default envy;
