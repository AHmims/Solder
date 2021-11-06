import { Schema } from '#lib/types';

/**
 * Since TS doesn't do type validation at runtime, we needed a way to implement
 * TypeGuards at runtime and this was the cleanest solution I could think of without 
 * adding more dependencies.
 * 
 * However, this solution requires that we define schemas alongside the usual interfaces/types.
 * Check lib/types/worker.ts for an example Queue validation Schema.
 * 
 * TODO: add more depth to validation by validating child objects.
 */

const required = (object: Record<string, unknown>, required: string[]) => {
  for (const key of required) {
    if (object[key] === undefined) return false;
  }

  return true;
};

export const validate = async (object: Record<string, unknown>, model: Schema) => {
  if (model.required) {
    if (!required(object, model.required)) return false;
  }

  for (const key of Object.keys(object)) {
    if (model.fields[key] === undefined ) return false;
    else if (typeof object[key] !== model.fields[key]) return false;
  }

  return true;
};