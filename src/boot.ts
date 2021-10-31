import * as manager from './extensions/manager';
import * as queue from './worker/queue';
import {runQueue} from "./worker/queue";

(async () => {
    const extensions = await manager.getExtensions();
    const queuedData = await queue.getQueuedItems(extensions);
    await runQueue(queuedData);

})();
