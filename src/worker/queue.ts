import {Extension} from "../extensions/types/extension.type";
import {Queue} from "./types/Queue.type";
import {item} from "../extensions/types/item.type";
import {ScrapResult} from "./types/scrapResult.type";

const fs = require('fs-extra');
import config from '../../solder.config';
import {scrap_SSR_page} from "./scraper";
import {extensionConfig} from "../extensions/types/extensionConfig.type";
import {queueJob} from "./types/queueJob.type";
import logger from '../helpers/logger';

async function getQueuedItems(extensions: Array<Extension>): Promise<Array<Queue>> {
    let queuedItems: Array<Queue> = [];

    try {
        const jsonQueueList: Array<any> = await fs.readJSON(config.QUEUE_FILE);

        for (const queueElement of jsonQueueList) {
            const extension = extensions.find(extension => extension.id === queueElement.extension);

            if (extension === undefined) {
                continue;
            }

            queuedItems.push({
                extension,
                job: queueElement.job,
                interval: queueElement.interval
            })
        }
    } catch (e) {
        console.error(e);
        logger.error(e);
    }

    return queuedItems;
}

async function runQueue(queuedItems: Array<Queue>): Promise<void> {
    try {
        let result = [];

        let queueCount = 1;
        for (const queuedItem of queuedItems) {
            const itemJob = queuedItem.job;

            let queuedItemResult: Array<Array<ScrapResult>> = [];

            setInterval(async () => {
                queuedItemResult = await deployQueue(itemJob, queuedItem.extension.config);

                logger.info(queuedItemResult);
            }, queuedItem.interval * 60000);

            result.push(
                {
                    queue: `queue-${queueCount}`,
                    result: queuedItemResult
                }
            );
            queueCount++;
        }
    } catch (e) {
        console.error(e);
        logger.error(e);
    }
}

export {
    getQueuedItems,
    runQueue
}

const deployQueue = async (itemJob: queueJob, availableJobs: extensionConfig): Promise<Array<Array<ScrapResult>>> => {
    let queuedItemResult: Array<Array<ScrapResult>> = [];

    for (const jobName of Object.keys(itemJob)) {
        if (Object.keys(availableJobs).indexOf(jobName) === -1) {
            continue;
        }

        let jobScrapResult: Array<ScrapResult> = [];
        // @ts-ignore
        const jobConfig: item = availableJobs[jobName];
        switch (jobConfig.scrapMethod) {
            case "SSR":
                // @ts-ignore
                jobScrapResult = await scrap_SSR_page(itemJob[jobName], jobConfig.fields);
                break;
            case "SPA":
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
}