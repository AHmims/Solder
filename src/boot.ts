import * as manager from './extensions/manager';
import * as queue from './worker/queue';

(async () => {
    const extensions = await manager.getExtensions();

    console.log(extensions)

    const queuedData = await queue.getQueuedItems(extensions);

    console.log(queuedData)

})();
