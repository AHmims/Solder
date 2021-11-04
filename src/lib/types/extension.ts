export type ScrapMethod = 'SSR' | 'SPA';

export type FieldType = 'content' | 'exists';

export type Field = {
  type: FieldType;
  key: string;
  value: string;
};

export interface Item {
  scrapMethod: ScrapMethod;
  fields: Array<Field>;
}

export interface ExtensionConfig {
  [key: string]: Item;
  productPage?: Item;
}

export interface Extension {
  id: string;
  name: string;
  description: string;
  baseUrl: string;
  config: ExtensionConfig;
}
