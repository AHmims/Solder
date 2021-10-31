import {Extension} from "../extensions/types/extension.type";
import {Queue} from "./types/Queue.type";
import {item} from "../extensions/types/item.type";
import {ScrapResult} from "./types/scrapResult.type";

const fs = require('fs-extra');
import config from '../../solder.config';
import {scrap_SSR_page} from "./scraper";

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

            for (const jobName of Object.keys(itemJob)) {
                const availableJobs = queuedItem.extension.config;

                if (Object.keys(availableJobs).indexOf(jobName) === -1) {
                    continue;
                }

                let jobScrapResult: Array<ScrapResult> = [];
                // @ts-ignore
                const jobConfig: item = availableJobs[jobName];
                switch (jobConfig.scraper) {
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

            queueCount++;
            result.push(
                {
                    queue: `queue-${queueCount}`,
                    result: queuedItemResult
                }
            );
        }

        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

export {
    getQueuedItems,
    runQueue
}