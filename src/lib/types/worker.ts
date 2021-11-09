import { Extension, Schema } from '.';

export type NotificationConfig = {
  'type': string,
  config: Record<string, unknown>
};

export type JobConfig = {
  url: string,
  notification?: NotificationConfig
};

export type QueueJob = {
  [key: string]: JobConfig;
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
 */
export const QueueRequestSchema: Schema = {
  fields: {
    extension: 'string',
    interval: 'number',
    job: {
      fields: {
        productPage: 'string',
      },
    },
  },
  required: ['extension', 'interval', 'job'],
};
