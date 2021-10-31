import * as manager from './extensions/manager';

(async () => {
    console.log(await manager.getExtensions());
})();
