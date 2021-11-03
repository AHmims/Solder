import { Extension } from '../extensions/extension.type';
import { queueJob } from './queueJob.type';

export interface Queue {
    extension: Extension,
    interval: number,
    job: queueJob
}