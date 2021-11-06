import { isSchema, Schema } from '#lib/types';

/**
 * Since TS doesn't do type validation at runtime, we needed a way to implement
 * TypeGuards at runtime and this was the cleanest solution I could think of without
 * adding more dependencies.
 *
 * Check lib/types/worker.ts for an example Queue validation Schema.
 */

const required = (object: Record<string, unknown>, required: string[]) => {
  for (const key of required) {
    if (object[key] === undefined) return false;
  }

  return true;
};

export const validate = (object: Record<string, unknown>, model: Schema) => {
  if (model.required !== undefined) {
    if (!required(object, model.required)) {
      return false;
    }
  }

  for (const key of Object.keys(object)) {

    if (isSchema(model.fields[key] as Record<string, unknown>))  {
      if (!validate(object[key] as Record<string, unknown>, model.fields[key] as Schema))
        return false;
    }

    else if (model.fields[key] === undefined || typeof object[key] !== model.fields[key]) 
      return false;
  }

  return true;
};