
import { ExtensionEnum } from 'lib/enums/extension.enum';
import { queueJob } from './queueJob.type';

export type queueFile = {
  extension: ExtensionEnum,
  interval: number,
  job: queueJob
}