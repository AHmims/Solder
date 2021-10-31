import {field} from "../extensions/types/field.type";
import {ScrapResult} from "./types/scrapResult.type";

import axios from "axios";
import {JSDOM} from 'jsdom';
import {deepTrim} from "../helpers/text";

async function scrap_SSR_page(url: string, selectors: Array<field>): Promise<Array<ScrapResult>> {
    let result: Array<ScrapResult> = [];

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
    }

    return result;
}

export {
    scrap_SSR_page
}

const getGenericData = (_dom: JSDOM, selector: field): ScrapResult | null => {
    let scrapResult: ScrapResult | null = null;

    try {
        let element: Element | null;

        switch (selector.type) {
            case "class":
                element = _dom.window.document.querySelector(selector.value);
                break;
            default:
                element = null;
        }

        if (element === null || element.textContent === null) {
            return scrapResult;
        }

        scrapResult = {
            field: selector.key,
            data: deepTrim(element.textContent)
        }
    } catch (e) {
        console.error(e);
    }


    return scrapResult;
}