import 'module-alias/register';
import { messageBuilder } from '#helpers/discord';

/*
import * as manager from './extensions/manager';
import { runQueue } from './worker/queue';
import * as queue from './worker/queue';
*/

(async () => {
  const msg = messageBuilder.prepareMessage().setUsername('qsdsqd');
  console.log(msg);
  console.log(messageBuilder.messageObject);
  /*console.log('Initialising extensions...');
  const extensions = await manager.getExtensions();
  console.log('Extensions initialised successfully...');
  console.log('Initialising queue.');
  const queuedData = await queue.getQueuedItems(extensions);
  console.log('Queue initialised successfully.');
  console.log('Fetching data...');
  await runQueue(queuedData);*/
})();
