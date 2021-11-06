import { Extension, Schema } from '.';

export type QueueJob = {
  [key: string]: string;
  productPage?: string;
};

export type QueueFile = {
  extension: string;
  interval: number;
  job: QueueJob;
};

export interface Queue {
  extension: Extension;
  interval: number;
  job: QueueJob;
}

export interface ScrapResult {
  field: string;
  data: string | boolean | null;
}

/**
 * QueueSchema example.
 * Does not account for the contents of child objects sadge.
 */
export const QueueRequestSchema: Schema = {
  fields : {
    extension: 'string',
    interval: 'number',
    job: 'object',
    placeholder: 'schema'
  },
  required: ['extension', 'interval', 'job', 'placeholder']
};
