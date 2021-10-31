import * as handler from './extensions/handler';

(async () => {
    console.log(await handler.getExtensions());
})();
