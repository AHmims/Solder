import {scrapMethod} from "./scrapMethod.type";
import {field} from "./field.type";

export interface item {
    scraper: scrapMethod,
    fields: Array<field>
}