import { Request } from '#lib/types/request';
import logger from '#helpers/logger';
import axios from 'axios';

// eslint-disable-next-line
const sendRequest = async (request: Request): Promise<any> => {
  try {
    const response = await axios({
      method: request.endpoint.method,
      url: request.endpoint.url,
      data: request.data,
    });

    return response.data;
  } catch (e) {
    logger.error(e);

    throw e;
  }
};

export {
  sendRequest,
};
