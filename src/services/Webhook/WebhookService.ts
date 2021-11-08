import { sendRequest } from '#services/Request/RequestService';
import { Request } from '#lib/types/request';
import logger from '#helpers/logger';

// eslint-disable-next-line
const pushWebhook = async (webhook: Request): Promise<any> => {
  try {
    const response = await sendRequest(webhook);
    logger.info(response);

    return response;
  } catch (e) {
    logger.error(e);

    return false;
  }
};

export {
  pushWebhook,
};
