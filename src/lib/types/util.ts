export type Schema = {
  fields: { [key: string]: string | Schema }
  required?: string[]
}

export const isSchema = (model: any): boolean => {
  if (typeof model !== 'object') {
    return false;
  }

  return model['fields'] !== undefined;
};
