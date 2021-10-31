import {Extension} from "../extensions/types/extension.type";
import {Queue} from "./types/Queue.type";

const fs = require('fs-extra');
import config from '../../solder.config';

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

function runQueue(queuedItems: Array<Queue>) {

}

export {
    getQueuedItems,
    runQueue
}