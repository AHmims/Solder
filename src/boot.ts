import 'module-alias/register';

import * as manager from './extensions/manager';
import * as queue from './worker/queue';
import { runQueue } from './worker/queue';

(async () => {
  console.log('Initialising extensions...');
  const extensions = await manager.getExtensions();
  console.log('Extensions initialised successfully...');
  console.log('Initialising queue.');
  const queuedData = await queue.getQueuedItems(extensions);
  console.log('Queue initialised successfully.');
  console.log('Fetching data...');
  await runQueue(queuedData);
})();
