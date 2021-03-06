import * as fs from 'fs-extra';

import config from '#/solder.config';
import logger from '#helpers/logger';
import { scrap_SSR_page } from './scraper';
import { Extension, Item, ExtensionConfig } from '#lib/types';
import { Queue, QueueFile, QueueJob, ScrapResult } from '#lib/types';

async function getQueuedItems(extensions: Array<Extension>): Promise<Array<Queue>> {
  const queuedItems: Array<Queue> = [];

  try {
    const jsonQueueList: Array<QueueFile> = await fs.readJSON(config.QUEUE_FILE);

    for (const queueElement of jsonQueueList) {
      const extension = extensions.find((extension) => extension.id === queueElement.extension);

      if (extension === undefined) {
        continue;
      }

      queuedItems.push({
        extension,
        job: queueElement.job,
        interval: queueElement.interval,
      });
    }
  } catch (e) {
    console.error(e);
    logger.error(e);
  }

  return queuedItems;
}

async function runQueue(queuedItems: Array<Queue>): Promise<void> {
  try {
    const result = [];

    let queueCount = 1;
    for (const queuedItem of queuedItems) {
      const itemJob = queuedItem.job;

      let queuedItemResult: Array<Array<ScrapResult>> = [];

      setInterval(async () => {
        queuedItemResult = await deployQueue(itemJob, queuedItem.extension.config);

        logger.info(queuedItemResult);
      }, queuedItem.interval * 60000);

      result.push({
        queue: `queue-${queueCount}`,
        result: queuedItemResult,
      });
      queueCount++;
    }
  } catch (e) {
    console.error(e);
    logger.error(e);
  }
}

export { getQueuedItems, runQueue };

const deployQueue = async (
  itemJob: QueueJob,
  availableJobs: ExtensionConfig,
): Promise<Array<Array<ScrapResult>>> => {
  const queuedItemResult: Array<Array<ScrapResult>> = [];

  for (const jobName of Object.keys(itemJob)) {
    if (Object.keys(availableJobs).indexOf(jobName) === -1) {
      continue;
    }

    let jobScrapResult: Array<ScrapResult> = [];

    const jobConfig: Item = availableJobs[jobName];
    switch (jobConfig.scrapMethod) {
      case 'SSR':
        jobScrapResult = await scrap_SSR_page(itemJob[jobName].url, jobConfig.fields);
        break;
      case 'SPA':
        break;
      default:
        break;
    }

    if (jobScrapResult.length === 0) {
      continue;
    }

    queuedItemResult.push(jobScrapResult);
  }

  return queuedItemResult;
};
