import { field } from '../lib/types/extensions/field.type';
import { ScrapResult } from '../lib/types/worker/scrapResult.type';

import axios from 'axios';
import { JSDOM } from 'jsdom';
import { deepTrim } from '../helpers/text';
import logger from '../helpers/logger';

async function scrap_SSR_page(url: string, selectors: Array<field>): Promise<Array<ScrapResult>> {
  const result: Array<ScrapResult> = [];

  try {
    const body = await axios.get(url, {
      headers: {
        'Connection': 'keep-alive'
      },
    });

    const _dom = new JSDOM(body.data);

    for (const selector of selectors) {
      const scrapResult = getGenericData(_dom, selector);

      if (scrapResult === null) {
        continue;
      }

      result.push(scrapResult);
    }

  } catch (e) {
    console.error(e);
    logger.error(e);
  }

  return result;
}

export {
  scrap_SSR_page
};

const getGenericData = (_dom: JSDOM, selector: field): ScrapResult | null => {
  let scrapResult: ScrapResult | null = null;

  try {
    const element: Element | null = _dom.window.document.querySelector(selector.value);

    let data: string | boolean | null;
    switch (selector.type) {
    case 'content':
      if (element === null || element.textContent === null) {
        return scrapResult;
      }

      data = deepTrim(element.textContent);
      break;
    case 'exists':
      data = element !== null;
      break;
    default:
      data = null;
    }

    scrapResult = {
      field: selector.key,
      data
    };
  } catch (e) {
    console.error(e);
    logger.error(e);
  }


  return scrapResult;
};