import { scrapMethod } from './scrapMethod.type';
import { field } from './field.type';

export interface item {
    scrapMethod: scrapMethod,
    fields: Array<field>
}