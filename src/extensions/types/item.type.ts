import {scraper} from "./scraper.type";
import {field} from "./field.type";

export interface item {
    scraper: scraper,
    fields: Array<field>
}